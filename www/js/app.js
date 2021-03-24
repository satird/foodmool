// Dom7
var $$ = Dom7;
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'DepoApp', // App name
  theme: 'auto', // Automatic theme detection
  touch: {
    // Disable fast clicks
    fastClicks: false,
  },
    dialog: {
    // set default title for all dialog shortcuts
    title: 'ДЕПО',
    // change default "OK" button text
    buttonOk: 'Закрыть',
    buttonCancel: 'Отмена',
  },
  // domCache: true,
  //           swipeout: {
  //           noFollow: true,
  //           removeElements: false,
  //         },
  //         sheet: {
  //           backdrop:true
  //         },
  // view: {
  //   pushState: true,
  //   pushStateRoot: '',
  //   pushStateSeparator: '#!',
  //   pushStateOnLoad: false,
  // },
  // App root data


  data: function() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      myVar: 'db.json',
      myVarRest: "https://depomoscow.ru/app/db-home-1.php",
      infoMapRest: "https://depomoscow.ru/app/db-rest-1.php",
      myVarNew: [],
      // item: [],
      // Demo products for Catalog section
      products: [{
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  methods: {
    performMediaAccessBehavior: function (trigger) {


            //disable click
            $("input[name=FILE]").css("pointer-events", "none");


            // first check if access is fully opened
            cordova.plugins.diagnostic.isCameraAuthorized(successCallback, errorCallback);

            function successCallback(authorized) {
                if(authorized === true) {

                    cordova.plugins.diagnostic.isCameraRollAuthorized(function (authorized) {
                        if (authorized === true) {
                            //enable click
                            $("input[name=FILE]").css("pointer-events","auto");
                        } else {
                            $("input[name=FILE]").css("pointer-events", "none");
                        }
                    }, errorCallback);

                }
            }

            function errorCallback(error) {
                console.error("The following error occurred: " + error);
            }



            $$(trigger).on('click', function () {


                //configure access camera status
                cordova.plugins.diagnostic.getCameraAuthorizationStatus(function (status) {
                        switch (status) {
                            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED: //if status NOT_REQUESTED

                                //request permission
                                cordova.plugins.diagnostic.requestCameraAuthorization(function (status) {
                                    if (status === cordova.plugins.diagnostic.permissionStatus.GRANTED) {
                                        successCallback(true);
                                    }
                                }, function (error) {
                                    console.error(error);
                                });

                                break;


                            case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS: //if status DENIED_ALWAYS

                                app.dialog.confirm('Перейти в настройки для управления доступом к камере?', function () { //ask to go to settings
                                    cordova.plugins.diagnostic.switchToSettings(function () { //go to settings
                                        console.log("Successfully switched to Settings app");
                                    }, function (error) {
                                        console.error("The following error occurred: " + error);
                                    });
                                });
                                break;


                            case cordova.plugins.diagnostic.permissionStatus.GRANTED: //if status GRANTED

                                successCallback(true);
                                break;
                        }
                    }, function (error) {
                        console.error("The following error occurred: " + error);
                    }
                    , {
                        externalStorage: false
                    }
                );



                    //configure access camera roll status
                    cordova.plugins.diagnostic.getCameraRollAuthorizationStatus(function (status) {
                        switch (status) {
                            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED: //if status NOT_REQUESTED

                                //request permission
                                cordova.plugins.diagnostic.requestCameraRollAuthorization(function (status) {
                                    if (status === cordova.plugins.diagnostic.permissionStatus.GRANTED) {

                                        cordova.plugins.diagnostic.isCameraAuthorized(function (authorized) {
                                            if (authorized === true) {
                                                //enable click
                                                $("input[name=FILE]").css("pointer-events","auto");
                                            } else {
                                                $("input[name=FILE]").css("pointer-events", "none");
                                            }
                                        }, errorCallback);

                                    }
                                }, function (error) {
                                    console.error(error);
                                });

                                break;


                            case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS: //if status DENIED_ALWAYS

                                app.dialog.confirm('Перейти в настройки для управления доступом к галерее?', function () { //ask to go to settings
                                    cordova.plugins.diagnostic.switchToSettings(function () { //go to settings
                                        console.log("Successfully switched to Settings app");
                                    }, function (error) {
                                        console.error("The following error occurred: " + error);
                                    });
                                });
                                break;


                            case cordova.plugins.diagnostic.permissionStatus.GRANTED: //if status GRANTED

                                cordova.plugins.diagnostic.isCameraAuthorized(function (authorized) {
                                    if (authorized === true) {
                                        //enable click
                                        $("input[name=FILE]").css("pointer-events","auto");
                                    } else {
                                        $("input[name=FILE]").css("pointer-events", "none");
                                    }
                                }, errorCallback);
                                break;
                        }
                    }, function (error) {
                        console.error("The following error occurred: " + error);
                    });




            });


    }

  },
  // App routes
  routes: routes,
  on: {
    init: function() {
      // console.log('App initialized')
      FCMPlugin.onNotification(function(data){
          if(data.wasTapped){
            //Notification was received on device tray and tapped by the user.
            // alert( JSON.stringify(data) );
            console.log(JSON.stringify(data));
          }else{
            //Notification was received in foreground. Maybe the user needs to be notified.
            // alert( JSON.stringify(data) );
            console.log(JSON.stringify(data));
          }
      });

      if (localStorage.getItem('toggle_top') == "on" || localStorage.getItem('toggle_top') == null) {
        console.log('ON toggle_top = ' + localStorage.getItem('toggle_top'));
        FCMPlugin.subscribeToTopic('topicEvents');
      } else if(localStorage.getItem('toggle_top') == "off"){
        console.log('OFF toggle_top = ' + localStorage.getItem('toggle_top'));
        FCMPlugin.unsubscribeFromTopic('topicEvents');
      };

      if (localStorage.getItem('toggle_bottom') == "on" || localStorage.getItem('toggle_top') == null) {
        console.log('ON toggle_bottom = ' + localStorage.getItem('toggle_bottom'));
        FCMPlugin.subscribeToTopic('topicFavorites');
      } else if(localStorage.getItem('toggle_bottom') == "off"){
        console.log('OFF toggle_bottom = ' + localStorage.getItem('toggle_bottom'));
        FCMPlugin.unsubscribeFromTopic('topicFavorites');
      };
      // FCMPlugin.subscribeToTopic('topicFavorites');
      // FCMPlugin.subscribeToTopic('topicEvents');
    },
    pageInit: function() {
        // app.request.json('db-home-1.json' , function(data) {
        //     app.item = data;
        //     console.log(app.item);
        //     return {
        //         item: app.item,
        //     };
        // });
      // contentShow();
      //   changeToolbarLight();
      //   changeToolbarDark();
      //   changeNavbarLight();
      //   changeNavbarDark();
      //   console.log('Page initialized')
    },
    pageBeforeIn: function (e, page) {
      app.preloader.show();
    },
    pageAfterIn: function (e, page) {
      app.preloader.hide();
    },
    tabShow: function() {

    },
  }
});

var cornerName = ('Barceloneta Tapas Bar, Bistro by Ruski, Bổ, Bright Israeli Grill, Buba by Sumosan, Buffalo’s, Cheesemania, Chowder & Pie, Ciao Pasta & Pizza, Crema, Edinorog Cafe, Farinarie, GOKOS, Greek Street, GRUPY, Inchoco Chocolate, Waffle & Crepe Bar, J’pan, K-Town Korean BBQ, Kids Time, Kritikos, Mac & Cheese, MACADAMIA Vitamin & Smoothie bar, Meat Dealers, Mollusca, Mon Bon, Raw to Go, Right Hops Bar + Bottle Shop, RYBA International, SEBB’s Raw & Fire, Shao Kao Chinese BBQ, Siam, Soul in the Bowl, Stall by Natalia Berezova, Tangiers Lounge, Tarterium, The Truffle, Tsomi, Valiko Хлеб, Veганутые, Zielinski&Rozen, Бакинский уголок, Бочковой Эль и Британские Пироги, Бэтмен и узбеки, Главный бар, Кафе-кондитерская Жемчуга, Ламянь, Любовь и сладости семейная кондитерская, Марокко, Нахлебник Бургер Бар, Оджахури Кулинарная Лавка, Припёк, Раменичная by [KU:], Рыба Моя Market, Рыба Моя Street Food, Сокровища морей, Такорама, Тар тар, Три утки, Хелоу пипл!, Чилим Seafood, Шеф Burger & Doner').split(', ');

// FCMPlugin.getToken(function(token) {
//     //this is the fcm token which can be used
//     //to send notification to specific device
//     console.log(token);
//     //FCMPlugin.onNotification( onNotificationCallback(data), successCallback(msg), errorCallback(err) )
//     //Here you define your application behaviour based on the notification data.
//     FCMPlugin.onNotification(function(data) {
//         console.log(data);
//         //data.wasTapped == true means in Background :  Notification was received on device tray and tapped by the user.
//         //data.wasTapped == false means in foreground :  Notification was received in foreground. Maybe the user needs to be notified.
//         // if (data.wasTapped) {
//         //     //Notification was received on device tray and tapped by the user.
//         //     alert(JSON.stringify(data));
//         // } else {
//         //     //Notification was received in foreground. Maybe the user needs to be notified.
//         //     alert(JSON.stringify(data));
//         // }
//     });
// });
// var toggleTop = app.toggle.get('.toggle-top');

// if (toggleTop.change) {
//   console.log("toggleTop checked");
// } else {
//   console.log("toggleTop UNchecked");
// }

// var toggleBottom = app.toggle.get('.toggle-bottom');
//
// if (toggleBottom.on(checked)) {
//   console.log("toggleBottom checked");
// } else {
//   console.log("togglebottom UNchecked");
// }

//Аня написала, что на ios верхнее меню "уведомления" заходит туда, куда не надо. Возможно решение
$$(document).on('page:beforein', '.page[data-name="lkNotification"]', function() {
  addLightTheme();
});
//Аня написала, что на ios верхнее меню "уведомления" заходит туда, куда не надо. Возможно решение см выше
$$('#lk-main').on('page:mounted', '.page[data-name="lkNotification"]', function() {
    console.log(localStorage.getItem('toggle_top'));
    console.log(localStorage.getItem('toggle_bottom'));
  var toggleTopPrev = localStorage.getItem('toggle_top');
  var toggleBottomPrev = localStorage.getItem('toggle_bottom');

  FCMPlugin.onNotification(function(data) {
                  console.log(data);
              });

    if (toggleTopPrev == "on" || toggleTopPrev == null) {
      $$('.toggle-top input').prop({
          checked: true,
        });
    } else if(toggleTopPrev == "off"){
      $$('.toggle-top input').prop({
          checked: false,
        });
    }

  if (toggleBottomPrev == "on" || toggleBottomPrev == null) {
    $$('.toggle-bottom input').prop({
        checked: true,
      });
  } else if (toggleBottomPrev == "off") {
    $$('.toggle-bottom input').prop({
        checked: false,
      });
  }

  var toggleTop = app.toggle.create({
    el: '.toggle-top',
    on: {
      change: function () {
        if ($('.toggle-top input').prop('checked') == true) {
          localStorage.setItem('toggle_top', "on");
          FCMPlugin.subscribeToTopic('topicEvents');
          // FCMPlugin.subscribeToTopic('topicEvents',
          // function(msg) {
          //   console.log('toggle ON ' + msg)
          // },
          // function(err){
          //   console.log('Error registering onNotification callback: ' + err);
          // });
        }
        else {
          localStorage.setItem('toggle_top', "off");
          FCMPlugin.unsubscribeFromTopic('topicEvents');
          // FCMPlugin.unsubscribeFromTopic('topicEvents',
          // function(msg) {
          //   console.log('toggle OFF ' + msg)
          // },
          // function(err){
          //   console.log('Error registering onNotification callback: ' + err);
          // });
        }
      },
    }
  });
  var toggleBottom = app.toggle.create({
    el: '.toggle-bottom',
    on: {
      change: function () {
              if ($('.toggle-bottom input').prop('checked') == true) {
        				localStorage.setItem('toggle_bottom', "on");
                FCMPlugin.subscribeToTopic('topicFavorites');
                // FCMPlugin.subscribeToTopic('topicFavorites',
                // function(msg) {
                //   console.log('toggle ON ' + msg)
                // },
                // function(err){
                //   console.log('Error registering onNotification callback: ' + err);
                // });
        			}
        			else {
        				localStorage.setItem('toggle_bottom', "off");
                FCMPlugin.unsubscribeFromTopic('topicFavorites');
                // FCMPlugin.unsubscribeFromTopic('topicFavorites',
                // function(msg) {
                //   console.log('toggle OFF ' + msg)
                // },
                // function(err){
                //   console.log('Error registering onNotification callback: ' + err);
                // });
        			}
          },
    }
  });
    // console.log('ToggleB changed')
    // $$(".toggle-bottom input").addClass('active');
    // $$(".toggle-bottom input").removeAttr('checked');
    // $$(".toggle-bottom input").attr('unchecked');
  // var toggleBottom = app.toggle.get('.toggle-bottom');
  // if (toggleBottom.checked) {
  //   console.log('checked');
  // } else {
  //   console.log('UNchecked');
  // }

});



// document.addEventListener("deviceready", onFCMReady, false);
// function onFCMReady() {
//   FCMPlugin.onNotification(function(data){
//       if(data.wasTapped){
//         //Notification was received on device tray and tapped by the user.
//         alert( JSON.stringify(data) );
//       }else{
//         //Notification was received in foreground. Maybe the user needs to be notified.
//         alert( JSON.stringify(data) );
//       }
//   });
//   FCMPlugin.getToken(function(token){
//       console.info('token ' +token);
//   });
//   FCMPlugin.onNotification(function(data) {
//       console.log(data);
//   });
//   FCMPlugin.onNotification(function(data) {
//       alert( JSON.stringify(data) );
//   });
// }
// app.push = PushNotification.init({
//     "android": {
//         "senderID": "828856969833"
//     },
//     "ios": {
//       "sound": true,
//       "vibration": true,
//       "badge": true
//     },
//     "windows": {}
// });
// app.push.on('registration', function(data) {
//     console.log("registration event: " + data.registrationId);
//     document.getElementById("regId").innerHTML = data.registrationId;
//     var oldRegId = localStorage.getItem('registrationId');
//     if (oldRegId !== data.registrationId) {
//         // Save new registration ID
//         localStorage.setItem('registrationId', data.registrationId);
//         // Post registrationId to your app server as the value has changed
//     }
// });
// app.push.on('error', function(e) {
//     console.log("push error = " + e.message);
// });

// document.addEventListener('deviceready', onDeviceReady, false);
//
// function onDeviceReady() {
//     console.log("device ready");
//     var push = PushNotification.init({
//         android: {}
//     });
//
//     push.on('registration', function(data) {
//         // data.registrationId
//         console.log(data.registrationId);
//     });
//
//     push.on('notification', function(data) {
//         alert("Title:" + data.title + " Message:" + data.message);
//     });
//
//     push.on('error', function(e) {
//         console.log(e.message)
//     });
// }


//Первый вариант, но работает вообще без этого кода

// app.push = PushNotification.init({
//      "android": {
//         "senderID": "828856969833"
//        },  "ios": {
//        "sound": true,
//         "vibration": true,
//         "badge": true
//          },
//         "windows": {}
//         });
//
//     app.push.on('registration', function(data) {
//        var oldRegId = localStorage.getItem('registrationId');
//          if (oldRegId !== data.registrationId) {
//            localStorage.setItem('registrationId', data.registrationId);
//            var token=data.registrationId;
//            app.alert(token);
//             }
//            });
//         app.push.on('error', function(e) {
//                console.log("push error = " + e.message);
//              });
//         app.push.on('notification', function(data) {
//              // console.log('notification event');
//              // var cards = document.getElementById("cards");
//              // var push = '<div class="row">' +
//              //           '<div class="col s12 m6">' +
//              //            '<div class="card darken-1">' +
//              //            '<div class="card-content black-text">' +
//              //        '<span class="card-title black-text">' + data.title + '</span>' +
//              //        '      <p>' + data.message + '</p>' +
//              //       '      <p>' + data.additionalData.foreground + '</p>' +
//              //               '    </div>' +
//              //                '  </div>' +
//              //               ' </div>' +
//              //              '</div>';
//              //            cards.innerHTML += push;
//                     });






document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown(e) {
  e.preventDefault();
    if (($$('#leftpanel').hasClass('active')) || ($$('#rightpanel').hasClass('active'))) { // #leftpanel and #rightpanel are id of both panels.
        console.log('panel');
        app.closePanel();
        return false;
    } else if ($$('.modal-in').length > 0) {
        console.log('modal-in');
        app.sheet.close();
        app.popup.close();
        app.actions.close();
        return false;
    }  else if (app.views.current.router.url == '/') {
        // console.log('home');
        app.dialog.confirm('Выйти из приложения?', function() {
            // var deviceType = device.platform;
            // if(deviceType == “Android” || deviceType == “android”){
            navigator.app.exitApp();
            // }
        },
        function() {
        });
    } else if (app.views.current.router.url == '/rest/') {
        // console.log('home');
        app.dialog.confirm('Выйти из приложения?', function() {
            // var deviceType = device.platform;
            // if(deviceType == “Android” || deviceType == “android”){
            navigator.app.exitApp();
            // }
        },
        function() {
        });
    } else if (app.views.current.router.url == '/map/') {
        // console.log('home');
        app.dialog.confirm('Выйти из приложения?', function() {
            // var deviceType = device.platform;
            // if(deviceType == “Android” || deviceType == “android”){
            navigator.app.exitApp();
            // }
        },
        function() {
        });
    } else if (app.views.current.router.url == '/secured-page/') {
        // console.log('home');
        app.dialog.confirm('Выйти из приложения?', function() {
            // var deviceType = device.platform;
            // if(deviceType == “Android” || deviceType == “android”){
            navigator.app.exitApp();
            // }
        },
        function() {
        });
    } else if (app.views.current.router.url == '/info/') {
        // console.log('home');
        app.dialog.confirm('Выйти из приложения?', function() {
            // var deviceType = device.platform;
            // if(deviceType == “Android” || deviceType == “android”){
            navigator.app.exitApp();
            // }
        },
        function() {
        });
    } else if (app.views.current.router.url == '/markets/') {

        app.dialog.confirm('Выйти из приложения?', function() {
            // var deviceType = device.platform;
            // if(deviceType == “Android” || deviceType == “android”){
            navigator.app.exitApp();
            // }
        },
        function() {
        });
    } else {
        // console.log('router.back');
        app.views.current.router.back();
    }
}



app.preloader.show(); //var app is initialized by now
app.on('pageInit', function (page) {
  // console.log('Page is now initialized');
  app.preloader.hide();
});


// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
//     console.log(device.cordova);
// }
// check network connection
// document.addEventListener("deviceready", networkConfiguration, false);
//
// function networkConfiguration() {
//   console.log("network");
// var offlinePopup = app.popup.create({
//   content: '<div class="popup">'+
//               '<div class="block offlinePopup">'+
//                 '<p class="offlinePopup-title">Устройство в режиме офлайн</p>'+
//                 '<p class="offlinePopup-caption">Выключите Авиарежим или подключитесь к WI-FI</p>'+
//               '</div>'+
//             '</div>',
// });

  document.addEventListener("offline", function(e) {
    // offlinePopup.open();
    // app.view.current.router.refreshPage();
    // app.views.current.router.navigate('/offlinePage/');
    homeView.router.navigate('/offlinePage/', {
      reloadCurrent: true,
    });
    restView.router.navigate('/offlinePage/', {
      reloadCurrent: true,
    });
    infoView.router.navigate('/offlinePage/', {
      reloadCurrent: true,
    });
    lkView.router.navigate('/offlinePage/', {
      reloadCurrent: true,
    });
    // alert("window/offline");
  }, false);

  document.addEventListener("online", function(e) {
    // offlinePopup.close();
    // alert("window/online");
    // app.views.current.router.back();
    homeView.router.navigate('/', {
      reloadCurrent: true,
    });
    restView.router.navigate('/rest/', {
      reloadCurrent: true,
    });
    infoView.router.navigate('/info/', {
      reloadCurrent: true,
    });
    lkView.router.navigate('/secured-page/', {
      reloadCurrent: true,
    });
    app.views.current.router.refreshPage();
    // location.reload();
  }, false);

// }



// $$('#lk-main').on('click', '.convert-form-to-data', function(){
//   var formData = app.form.convertToData('#login-form');
//  app.form.storeFormData('#login-form', localStorage);
//  console.log(formData);
// });
// $$('#lk-main').on('click', '.delete-login-data', function(){
//     app.form.removeFormData('#login-form');
//     var storedData = app.form.removeFormData('#login-form');
//     alert('Form data is deleted')
// });
// app.request.get('./pages/form-send.html', function (data) {
//   console.log(localStorage);
//   console.log('loginData ' + loginData);
// });
//
// $$('#lk-main').on('click', '.save-storage-data', function() {
//     var storedData = app.form.removeFormData('#login-form');
//     var storedData =  app.form.storeFormData('login-form', localStorage);
//     console.log(storedData);
//     alert('Form data is replaced, refresh the browser to reflect the changes')
// });

// function onTabShow() {
//   console.log("linktab");
// }
// app.on('pageInit', 'rest-detail', function (page) {
// $$.get('/pages/rest-detail.php', {}, function (data) {
//         $$('#PAGEPlaceHolder').html(data);
//     });
// });

// function contentShow() {
// app.request.get('/pages/rest-detail.php', function (data) {
//   debugger
//   $$('.articles').html(data);
//   console.log(data);
// });
// }




// var calendarInline = app.calendar.create({
//   containerEl: '#modal-calendar-inline-container',
//   value: [new Date()],
//   weekHeader: false,
//   renderToolbar: function () {
//     return '<div class="toolbar calendar-custom-toolbar no-shadow">' +
//       '<div class="toolbar-inner">' +
//         '<div class="left">' +
//           '<a href="#" class="link icon-only"><i class="icon icon-back ' + (app.theme === 'md' ? 'color-black' : '') + '"></i></a>' +
//         '</div>' +
//         '<div class="center"></div>' +
//         '<div class="right">' +
//           '<a href="#" class="link icon-only"><i class="icon icon-forward ' + (app.theme === 'md' ? 'color-black' : '') + '"></i></a>' +
//         '</div>' +
//       '</div>' +
//     '</div>';
//   },
//   on: {
//     init: function (c) {
//       $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
//       $$('.calendar-custom-toolbar .left .link').on('click', function () {
//         calendarInline.prevMonth();
//       });
//       $$('.calendar-custom-toolbar .right .link').on('click', function () {
//         calendarInline.nextMonth();
//       });
//     },
//     monthYearChangeStart: function (c) {
//       $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
//     }
//   }
// });


// var mainView = app.views.create('.view-main');

// Init/Create views
var homeView = app.views.create('#home', {
  // main: true,
  stackPages: true,
  // pushState: true,
  // pushStateRoot: location.href.split(location.host)[1].split("#page")[0],
  // pushStateSeparator: '#page',
  // pushStateOnLoad: false,
  mdSwipeBack: true,
  on: {
    pageMounted: function() {
      // console.log('kyky');
    }
  },
  url: '/'
});
var restView = app.views.create('#rest', {
  stackPages: true,
  // pushState: true,
  // pushStateRoot: location.href.split(location.host)[1].split("#page")[0],
  // pushStateSeparator: '#page',
  // pushStateOnLoad: false,
  mdSwipeBack: true,
  url: '/rest/'
});
// var marketsView = app.views.create('#markets', {
//   stackPages: true,
//   // pushState: true,
//   // pushStateRoot: location.href.split(location.host)[1].split("#page")[0],
//   // pushStateSeparator: '#page',
//   // pushStateOnLoad: false,
//   mdSwipeBack: true,
//   url: '/news/'
// });
var mapView = app.views.create('#map', {
  stackPages: true,
  mdSwipeBack: true,
  url: '/map/'
});
var lkView = app.views.create('#lk-main', {
  stackPages: true,
  // pushState: true,
  // pushStateRoot: location.href.split(location.host)[1].split("#page")[0],
  // pushStateSeparator: '#page',
  // pushStateOnLoad: false,
  mdSwipeBack: true,
  url: '/secured-page/'
});
var infoView = app.views.create('#info', {
  stackPages: true,
  // pushState: true,
  // pushStateRoot: location.href.split(location.host)[1].split("#page")[0],
  // pushStateSeparator: '#page',
  // pushStateOnLoad: false,
  mdSwipeBack: true,
  url: '/info/'
});

// $$('.tab-link').on('click', function() {
//   var url = document.location.href;
//   var currentMainView = $$('.view-main');
//   // console.log(currentMainView);
//   var newMainViewLink = $$(this).attr('href');
//   // console.log(newMainViewLink);
//   var newMainViewSelector = $$(newMainViewLink);
//   // console.log(newMainViewSelector);
//   currentMainView.removeClass('view-main');
//   newMainViewSelector.addClass('view-main');
// });


function infoTest() {
  var name = this.requestUrl;
}

// $$('#home').on('click', '.rest-click', function(e) {
//   console.log('clicked');
//   app.tab.show('#rest')
// });
// $$('.tab-link[href="#home"]').on('click', function () {
//     var view = app.views.current;
//       view.router.back(view.history[0],{force:true});
// });
// $$('.tab-link[href="#home"]').on('click', function () {
//     var view = app.views.current;
//       view.router.back(view.history[0],{force:true});
// });
// document.addEventListener("click", tabBack, false);
// function tabBack() {
//     var view = app.views.current;
//     console.log(view);
//     if ($$('#home').hasClass('tab-active')) {
//         $$('.tab-link[href="#home"]').on('click', function () {
//               view.router.back(view.history[0],{force:true});
//         });
//         return false;
//     } else if ($$('#rest').hasClass('tab-active')) {
//         $$('.tab-link[href="#rest"]').on('click', function () {
//               view.router.back(view.history[0],{force:true});
//         });
//         return false;
//     }  else {
//         console.log('router.back');
//         app.views.current.router.back();
//     }
// }
$$('#map').on('tab:show', function() {
    // console.log(document.location.href);
    initialMap();
  // createNewMap();

  $('#svg-tiger .tooltipstered').tooltipster({
            animation: 'grow',
            contentAsHTML: true,
            delay: 200,
            interactive: true,
            trackOrigin: true,
            contentCloning: true,
            repositionOnScroll: true,
            theme: '.my-custom-theme',
            trigger: 'custom',
            triggerOpen: {
                click: true,
                tap: true,
            },
            triggerClose: {
                click: true,
                tap: true,
            }
        });
});
// $$('#app').once('click', '.tab-link-map', function() {
//     console.log('test2');
//       createNewMap();
// })

// всплывающие окна при заходе на страницу
// $$('#home').once('page:mounted', '.page[data-name="discountDetail"]', function() {
//   app.sheet.create({
//     el: '.discount-sheet',
//     backdrop: app.device.ios === true ? true : true,
//     closeByOutsideClick: true,
//   });
//   app.sheet.open('.discount-sheet', true);
// });
// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
//     console.log(device.cordova);
// }
// var deviceVersion = parseInt(device.version);
//
// console.log("device.version " + deviceVersion);
// console.log("device.platform " + device.platform);

// lkLogin page events

$$(document).on('page:afterin', '.page[data-name="lkLogin"]', function() {
  // var self = this;
  // var app = self.$app;
  var router = this.$router;

  $('#email-reg-button').click(function () {
    $('#reg-email-form').submit();
  });

  $('#reg-email-form').submit(function () {
      var data = $(this).serialize();
      // console.log(data);
      $.ajax({
          type:'post',
          url:'https://depomoscow.ru/app/ajax/app-registration.php',
          data:data,
          dataType:'html',
          success:function (data) {
            var result = jQuery.parseJSON(data);

            if(result.STATUS === true) {
              app.loginScreen.close();
              $$('#lk-main .lk-registration').remove();
              // router.navigate('/lk-main/');
              app.views.current.router.navigate('/lk-main/');
              localStorage.setItem('jwt', result.TOKEN);
              // console.log(localStorage);
            } else {
              app.dialog.alert(result.MESSAGE, function () {
                // app.loginScreen.close();
                // $$('#lk-main .lk-registration').remove();
                // router.navigate('/lk-main/');
              });
            }

          },
          error:function (data) {
              console.log('error');
          },
      });
      return false;
  });

  $$('.info-social-vk').click(function () {

    var win = cordova.InAppBrowser.open('http://oauth.vk.com/authorize?client_id=7301616&redirect_uri=https://depomoscow.ru/app/pages/social-auth.php?provider=vk&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes,cleardata=yes');

    win.addEventListener( "loadstop", function() {
      win.executeScript(
          { code: "document.cookie" },
          function( values ) {

            function getCookie(name) {
              var value = "; " + values[0];
              var parts = value.split("; " + name + "=");
              if (parts.length == 2) return parts.pop().split(";").shift();
            }


              var token = getCookie('TOKEN');
              // var session = getCookie('PHPSESSID');

            function login(token) {
              localStorage.setItem('jwt', token);
              localStorage.setItem('auth', true);

              console.log(token);
              // console.log(session);

              // setCookie('PHPSESSID', session, {secure: true, httpOnly: true, domain: '.depomoscow.ru'});

              win.close();
              app.loginScreen.close();
              $$('#lk-main .lk-registration').remove();
              app.views.current.router.navigate('/lk-main/');
            }
            if(token !== undefined) {
              setTimeout(login, 1000, token);
            }
          }
          );

    });


    // function setCookie(name, value, options) {
    //
    //   options = options || {
    //     path: '/',
    //   };
    //
    //   if (options.expires instanceof Date) {
    //     options.expires = options.expires.toUTCString();
    //   }
    //
    //   var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    //
    //   for (var optionKey in options) {
    //     updatedCookie += "; " + optionKey;
    //     var optionValue = options[optionKey];
    //     if (optionValue !== true) {
    //       updatedCookie += "=" + optionValue;
    //     }
    //   }
    //
    //   document.cookie = updatedCookie;
    // }


  });

  $$('.info-social-yandex').click(function () {

      var win = cordova.InAppBrowser.open('https://oauth.yandex.ru/authorize?response_type=code&client_id=5df474f46e9741c284150decedf3d58a&display=popup', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes,cleardata=yes');

      win.addEventListener( "loadstop", function() {
          win.executeScript(
              { code: "document.cookie" },
              function( values ) {

                  function getCookie(name) {
                      var value = "; " + values[0];
                      var parts = value.split("; " + name + "=");
                      if (parts.length == 2) return parts.pop().split(";").shift();
                  }


                  var token = getCookie('TOKEN');
                  // var session = getCookie('PHPSESSID');

                  // console.log(token);

                  function login(token) {
                      localStorage.setItem('jwt', token);
                      localStorage.setItem('auth', true);

                      console.log(token);
                      // console.log(session);

                      // setCookie('PHPSESSID', session, {secure: true, httpOnly: true, domain: '.depomoscow.ru'});

                      win.close();
                      app.loginScreen.close();
                      $$('#lk-main .lk-registration').remove();
                      app.views.current.router.navigate('/lk-main/');
                  }

                  setTimeout(login, 1000, token);

              }
          );

      });

  });

  $$('.info-social-google').click(function () {

  var win = cordova.InAppBrowser.open('https://accounts.google.com/o/oauth2/auth?redirect_uri=https://depomoscow.ru/app/pages/social-auth.php?provider=google&response_type=code&client_id=379857301384-p67oqp46grhg5ulgil92c6vpro40rkaq.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes,cleardata=yes');

  win.addEventListener( "loadstop", function() {
    win.executeScript(
        { code: "document.cookie" },
        function( values ) {

          function getCookie(name) {
            var value = "; " + values[0];
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
          }


          var token = getCookie('TOKEN');
          // var session = getCookie('PHPSESSID');

          // console.log(token);

          function login(token) {
            localStorage.setItem('jwt', token);
            localStorage.setItem('auth', true);

            console.log(token);
            // console.log(session);

            // setCookie('PHPSESSID', session, {secure: true, httpOnly: true, domain: '.depomoscow.ru'});

            win.close();
            app.loginScreen.close();
            $$('#lk-main .lk-registration').remove();
            app.views.current.router.navigate('/lk-main/');
          }

          // setTimeout(login, 1000, token);

        }
    );

  });

});

  $('#auth-button').click(function () {
    $('#auth-form').submit();
  });

  $('#auth-form').submit(function () {
    var data = $(this).serialize();
    $.ajax({
      type:'post',
      url:'https://depomoscow.ru/app/ajax/app-authorization.php',
      data:data,
      dataType:'html',
      success:function (data) {
        var result = jQuery.parseJSON(data);

        if(result.STATUS === true) {
          app.loginScreen.close();
          $$('#lk-main .lk-registration').remove();
          // router.navigate('/lk-main/');
          app.views.current.router.navigate('/lk-main/');
          localStorage.setItem('jwt', result.TOKEN);
          localStorage.setItem('auth', true);
          // console.log(localStorage);
        } else {
          app.dialog.alert(result.MESSAGE, function () {
            localStorage.setItem('auth', false);
            // app.loginScreen.close();
            // $$('#lk-main .lk-registration').remove();
            // router.navigate('/lk-main/');
          });
        }

      },
      error:function (data) {
        console.log('error');
      },
    });
    return false;
  });
});


// lkMain page events
$$(document).on('page:init', '.page[data-name="lkMain"]', function() {
    app.methods.performMediaAccessBehavior('.lk-info-user__image');
});
$$(document).on('page:afterin', '.page[data-name="lkMain"]', function() {

  // $('#btn_user-photo-input').click(function () {
  //     $('#user-photo-input').trigger('click');
  // });

  $("#user-photo-input").change(function(){
    readURLUserPhoto(this);
    $('#user-photo').submit();
  });


  function readURLUserPhoto(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#user-photo-src').attr('src', e.target.result);
        // $('.uploaded-photos-item').fadeIn();
      };

      reader.readAsDataURL(input.files[0]);
    }
  }


  $('#user-photo').submit(function () {

    var form = $(this);
    formData = new FormData(form.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)


    $.ajax({
      url: 'https://depomoscow.ru/app/ajax/app-edit-user-info.php',
      type: 'post',
      contentType: false, // важно - убираем форматирование данных по умолчанию
      processData: false, // важно - убираем преобразование строк по умолчанию
      data: formData,
      dataType: 'html',
      success: function (data) {
          result = jQuery.parseJSON(data);
          if (result.STATUS == "false") {
              $('#user-photo-src').attr('src', "");
          }
          // console.log(result);
          app.dialog.alert(result.RESULT);

      },
      error: function (data) {
          result = jQuery.parseJSON(data);
          $('#user-photo-src').attr('src', "");
          // console.log(result);
          app.dialog.alert(result.RESULT);
      }
    });

    return false;
  });

});


// lk events
$$(document).on('page:afterin', '.page[data-name="lkData"]', function() {


  $('#save-data').click(function () {
    $('#data-form').submit();
  });

  $('#change-pass').click(function () {
    $('#change-pass-form').submit();
  });

  $$('#logout').click(function () {
    app.request.get('https://depomoscow.ru/ajax/logout.php', function (data) {
      localStorage.setItem('jwt', '');
      localStorage.setItem('auth', false);
      app.views.current.router.navigate('/login-screen/');
    });
  });


  $('#data-form').submit(function () {
    var data = $(this).serialize();

    // console.log(data);
    // console.log(jQuery.isEmptyObject(data));
    $.ajax({
      url: 'https://depomoscow.ru/app/ajax/app-edit-user-info.php',
      type: 'post',
      data: data,
      dataType: 'html',
      success: function (data) {
        result = jQuery.parseJSON(data);
        // console.log(result);
        app.dialog.alert(result.RESULT);
        $('#data-form')[0].reset();


        if(result.NAME) {
          sessionStorage.setItem('name', result.NAME);
          $('#user-name').attr("placeholder", sessionStorage.name);
          $('.lk-info-user-name').text(sessionStorage.name);
        }
        if(result.EMAIL) {
          // sessionStorage.setItem('email', result.EMAIL);
          $('#user-email').attr("placeholder", sessionStorage.email);
        }
        if(result.PERSONAL_PHONE) {
          sessionStorage.setItem('phone', result.PERSONAL_PHONE);
          $('#user-phone').attr("placeholder", sessionStorage.phone);
          $('.lk-info-user-number').text(sessionStorage.phone);
        }
        if(result.PERSONAL_BIRTHDAY) {
          // sessionStorage.setItem('birthday', result.PERSONAL_BIRTHDAY);
          $('#user-birthday').attr("placeholder", sessionStorage.birthday);
        }


      },
      error: function (data) {
        result = jQuery.parseJSON(data);
        app.dialog.alert(result.RESULT);
        // console.log(data);
      }
    });

    return false;
  });

  $('#change-pass-form').submit(function () {
    var data = $(this).serialize();
    // console.log(data);
    $.ajax({
      url: 'https://depomoscow.ru/app/ajax/change-pass.php',
      type: 'post',
      data: data,
      dataType: 'html',
      success: function (data) {
        result = jQuery.parseJSON(data);
        // console.log(result);
        $('#change-pass-form')[0].reset();
        app.dialog.alert(result.result);

      },
      error: function (data) {
        result = jQuery.parseJSON(data);
        app.dialog.alert(result);
        // console.log(data);
      }
    });

    return false;
  });

});



// lkEnvelope page events
$$(document).on('page:beforein', '.page[data-name="lkEnvelope"]', function() {
  addLightTheme();
});
$$(document).on('page:afterin', '.page[data-name="lkEnvelope"]', function() {

  $('#btn_attachFile').click(function () {
      $('#attachFile').trigger('click');
  });

  $('#send-feedback-form').click(function () {
    $('#feedback-form').submit();
  });

  $("#attachFile").change(function(){
    readURL(this);
  });

  $('.delete-uploaded-photo').click(function () {
    $('.uploaded-photos-item').fadeOut();
    $('#uploaded-photo').attr('src', '');
    $('#attachFile').val('');
  });


  $('#feedback-form').submit(function () {

    var form = $(this);
    formData = new FormData(form.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)


    $.ajax({
      url: 'https://depomoscow.ru/app/ajax/app-feedback-form.php',
      type: 'post',
      contentType: false, // важно - убираем форматирование данных по умолчанию
      processData: false, // важно - убираем преобразование строк по умолчанию
      data: formData,
      dataType: 'html',
      success: function (data) {
        // data = jQuery.parseJSON(data);

        if(data == true) {
          app.dialog.alert('Благодарим вас за ваше сообщение!');
          $('#feedback-form')[0].reset();
          $('.uploaded-photos-item').fadeOut();
          app.views.current.router.back();
        } else {
          app.dialog.alert(data);
        }

      },
      error: function (data) {
        // data = jQuery.parseJSON(data);
        console.log(data);
      }
    });

    return false;
  });




  function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#uploaded-photo').attr('src', e.target.result);
        $('.uploaded-photos-item').fadeIn();
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

});
$$(document).on('page:beforeout', '.page[data-name="lkEnvelope"]', function() {

  if($$('#info').hasClass('tab-active')) {
    addDarkTheme();
  }

});


// Corner detail page events
$$(document).on('page:beforein', '.page[data-name="restDetail"]', function() {
  checkFavorite();
  addDarkTheme();
});
$$(document).on('page:init', '.page[data-name="restDetail"]', function() {
  // StatusBar.styleLightContent();
});
$$(document).on('page:afterin', '.page[data-name="restDetail"]', function() {
  addFavorite();
});
$$(document).on('page:beforeout', '.page[data-name="restDetail"]', function() {

  if($$('#lk-main').hasClass('tab-active')) {
    addLightTheme();
  }

});


// Event detail page events
$$(document).on('page:beforein', '.page[data-name="eventDetail"]', function() {
  checkFavorite();
  addDarkTheme();
});
$$(document).on('page:init', '.page[data-name="eventDetail"]', function() {

  var currentCount = 1;
  var variant = $('.popup-form-item').clone(true);
  $('.popup-form-add').click(function () {

      currentCount++;
      $$(variant.find("input[name*=name]")).attr('name', 'name-'+currentCount);
      $$(variant.find("input[name*=email]")).attr('name', 'email-'+currentCount);
      $$(variant.find("input[name*=phone]")).attr('name', 'phone-'+currentCount);

    $(variant).clone(true).appendTo('.form-item-block').fadeIn('slow').find("input[name*=name]").focus();
  });
  $('.popup-close').click(function () {
    $('.form-item-block label').not(':nth-child(-n+3)').remove();
    currentCount = 1;
  });


  $('#booking-place-button').click(function () {
    $('#booking-place-form').submit();
  });


  $('#booking-place-form').submit(function () {
    var data = $(this).serialize();
    // console.log(data);
    $.ajax({
      url: 'https://depomoscow.ru/app/ajax/app-booking-place.php',
      type: 'post',
      data: data,
      dataType: 'html',
      success: function (data) {
        result = jQuery.parseJSON(data);

        if(result.STATUS == true) {
          $('#booking-place-form')[0].reset();
          $('.form-item-block label').not(':nth-child(-n+3)').remove();
        }
          app.dialog.alert(result.MESSAGE);

      },
      error: function (data) {
        result = jQuery.parseJSON(data);

        app.dialog.alert(result.MESSAGE);
      }
    });

    return false;
  });

});
$$(document).on('page:afterin', '.page[data-name="eventDetail"]', function() {
  addFavorite();
});
$$(document).on('page:beforeout', '.page[data-name="eventDetail"]', function() {

  if($$('#lk-main').hasClass('tab-active')) {
    addLightTheme();
  }

});


// Markets page events
$$(document).on('page:afterin', '.page[data-name="markets"]', function() {

// поиск
  $('#markets-search input').keyup(function () {
    console.log('Y');
    $('#markets-search').submit();
  });

  $('#markets-search').submit(function () {
    var data = $(this).serialize();

    $.ajax({
      type:'post',
      url:'https://depomoscow.ru/app/ajax/app-markets-filter.php',
      data:data,
      dataType:'html',
      success:function (e) {
        $('#markets-container').empty();
        $('#markets-container').append(e);
      },
      error:function (e) {
        console.log('error');
      },
    });
    return false;
  });

});


// Market detail page events
$$(document).on('page:beforein', '.page[data-name="marketDetail"]', function() {
  checkFavorite();
  addDarkTheme();
});
$$(document).on('page:afterin', '.page[data-name="marketDetail"]', function() {
  addFavorite();
});
$$(document).on('page:beforeout', '.page[data-name="marketDetail"]', function() {

  if($$('#lk-main').hasClass('tab-active')) {
    addLightTheme();
  }

});


// Custom functions
function checkFavorite() {

  var id = $$('#add-favorite').data("id");
  // var user = $$('#add-favorite').data("user");
  var iblock = $$('#add-favorite').data("iblock");

  app.request.post('https://depomoscow.ru/ajax/add-favorite.php', {
    // user: user,
    iblock: iblock ,
    element: id ,
    action: 'check'
  }, function (data) {

    // var data = jQuery.parseJSON(data);

    if(data === 'true') {
      $$('#add-favorite').addClass("active");
    } else if(data === 'false'){
      $$('#add-favorite').removeClass("active");
    }
  });

}


// Add/Remove favorite
function addFavorite() {
  $$('#add-favorite').on('click', function () {

    var id = $(this).data("id");
    // var user = $(this).data("user");
    var iblock = $(this).data("iblock");


    if(localStorage.getItem("auth") === "true") {


      if ($(this).hasClass('active') === true) {
        $(this).removeClass("active");

        app.request.post('https://depomoscow.ru/ajax/add-favorite.php', {
          // user: user,
          iblock: iblock,
          element: id,
          action: 'remove'
        }, function (data) {
          // data = jQuery.parseJSON(data);
          console.log(data);

        });

      } else {

        $(this).addClass("active");

        app.request.post('https://depomoscow.ru/ajax/add-favorite.php', {
          // user: user,
          iblock: iblock,
          element: id,
          action: 'add'
        }, function (data) {
          // data = jQuery.parseJSON(data);
          console.log(data);

        });

      }


    } else {

      var toastTop = app.toast.create({
        text: 'Авторизируйтесь в личном кабинете, чтобы иметь возможность сохранять в избранное.',
        position: 'top',
        // closeTimeout: 2000,
        closeButton: true,
      });

      $$('.open-toast-top').on('click', function () {
        toastTop.open();
      });
    }

  });

}


function addLightTheme() {
  $$('.toolbar-container').addClass('add-light-theme');
  $$('.statusbar').addClass('add-light-theme');
  $$('.ios body').addClass('bodyLightTheme');
  $$('.ios .toolbar').addClass('toolbarLightTheme');
  StatusBar.styleDefault();
}

function addDarkTheme() {
  $$('.toolbar-container').removeClass('add-light-theme');
  $$('.statusbar').removeClass('add-light-theme');
  $$('.ios body').removeClass('bodyLightTheme');
  $$('.ios .toolbar').removeClass('toolbarLightTheme');
  StatusBar.styleLightContent();
}
// $$('#home').once('page:mounted', '.page[data-name="childsDetail"]', function() {
//   app.sheet.create({
//     el: '.discount-sheet',
//     backdrop: app.device.ios === true ? true : true,
//     closeByOutsideClick: true,
//   });
//   app.sheet.open('.discount-sheet', true);
// });


var calendarModal = app.calendar.create({
  inputEl: '#calendar-modal',
  openIn: 'customModal',
  header: true,
  footer: true,
  dateFormat: 'MM dd yyyy',
});

// $$('#home').once('page:mounted', '.page[data-name="eventDetail"]', function() {
//   app.sheet.create({
//     el: '.discount-sheet',
//     backdrop: app.device.ios === true ? true : true,
//     closeByOutsideClick: true,
//   });
//   app.sheet.open('.discount-sheet', true);
// });

// $$('#home').once('page:mounted', '.page[data-name="eventDetail"]', function() {
//   app.sheet.create({
//     el: '.discount-sheet',
//     backdrop: app.device.ios === true ? true : true,
//     closeByOutsideClick: true,
//   });
//   app.sheet.open('.discount-sheet', true);
// });



// $$(document).on('page:init', '.page[data-name="eventDetail"]', function() {
//
//   var variant = $('.popup-form-item').clone(true);
//   $('.popup-form-add').click(function () {
//     $(variant).clone(true).appendTo('.form-item-block').fadeIn('slow').find("input[name*=name]").focus();
//   });
//   $('.popup-close').click(function () {
//     $('.form-item-block label').not(':nth-child(-n+3)').remove();
//   });
//
// });
// $$('a').on('click', function (e) {
//
//   console.log('clicked');
// });



// $$('.tab').on('tab:show', function() {
//    app.popup.create({
//   	content: '<div class="popup">'+
//               '<div class="block">'+
//                 '<p>Its Show.</p>'+
//                 '<p><a href="#" class="link popup-close">Close me</a></p>'+
//               '</div>'+
//             '</div>',
//   }).open();
// });



// $$('.tab').on('tab:show', function() {
//   changeToolbarLight();
//   changeToolbarDark();
//   changeNavbarLight();
//   changeNavbarDark();
//   console.log('break');
// });
// app.tab.show('#rest', tabLinkEl, animate)

// Login Screen Demo
// $$('#my-login-screen .login-button').on('click', function() {
//   var username = $$('#my-login-screen [name="username"]').val();
//   var password = $$('#my-login-screen [name="password"]').val();
//
//   // Close login screen
//   app.loginScreen.close('#my-login-screen');
//
//   // Alert username and password
//   app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
// });

// function onTabShow() {
//   console.log("linktab");
// }
// app.on('pageInit', 'rest-detail', function (page) {
// $$.get('/pages/rest-detail.php', {}, function (data) {
//         $$('#PAGEPlaceHolder').html(data);
//     });
// });

// function contentShow() {
// app.request.get('/pages/rest-detail.php', function (data) {
//   debugger
//   $$('.articles').html(data);
//   console.log(data);
// });
// }

$$('#home').on('click', '.rest-click', function(e) {
  // console.log('clicked');
  app.tab.show('#rest');
});
// on: {
//     tabMounted: function () {
//       changeToolbarLight();
//       changeToolbarDark();
//       changeNavbarLight();
//       changeNavbarDark();
//     },
//   },

// $$('#markets').on('tab:show', function() {
//   $$('.toolbar-container').addClass('add-light-theme');
//     $$('.statusbar').addClass('add-light-theme');
//   StatusBar.styleDefault();
// });
$$('#info').on('tab:show', function() {
  $$('.toolbar-container').removeClass('add-light-theme');
    $$('.statusbar').removeClass('add-light-theme');
  // StatusBar.styleLightContent();
});
$$('#map').on('tab:show', function() {
  $$('.toolbar-container').addClass('add-light-theme');
    $$('.statusbar').addClass('add-light-theme');
  // StatusBar.styleDefault();
});
$$('#lk-main').on('tab:show', function() {
  // $$('.toolbar-container').addClass('add-light-theme');
  //   $$('.statusbar').addClass('add-light-theme');

  // StatusBar.styleDefault();
  // var view = app.views.current;
  // if(view.router.currentRoute.name !== 'restDetail' && view.router.currentRoute.name !== 'marketDetail') {
    $$('.toolbar-container').addClass('add-light-theme');
    $$('.statusbar').addClass('add-light-theme');
    // StatusBar.styleDefault();
  // }
});
$$('#rest').on('tab:show', function() {
  // $$('.toolbar-container').addClass('add-light-theme');
  //   $$('.statusbar').addClass('add-light-theme');
    $$('.toolbar-container').removeClass('add-light-theme');
      $$('.statusbar').removeClass('add-light-theme');
  // StatusBar.styleDefault();
});
$$('#home').on('tab:show', function() {
  $$('.toolbar-container').removeClass('add-light-theme');
    $$('.statusbar').removeClass('add-light-theme');
  // StatusBar.styleLightContent();
});
// function changeToolbarLight() {
//       $$('.light-tab-theme').each(function() {
//     if ($$(this).hasClass('tab-link-active')) {
//       $$(this).parents('.toolbar-container').addClass('add-light-theme');
//     }
//     });
// }
//
//
// function changeToolbarDark() {
//       $$('.dark-tab-theme').each(function() {
//     if ($$(this).hasClass('tab-link-active')) {
//       $$(this).parents('.toolbar-container').removeClass('add-light-theme');
//     }
//     });
// }
//
//
// function changeNavbarLight() {
//       $$('.light-tab-theme').each(function() {
//     if ($$(this).hasClass('tab-link-active')) {
//       $$(this).closest('.view-main').addClass('add-light-theme');
//     }
//     });
// }
// function changeNavbarDark() {
//       $$('.dark-tab-theme').each(function() {
//     if ($$(this).hasClass('tab-link-active')) {
//       $$(this).closest('.view-main').removeClass('add-light-theme');
//     }
//     });
// }


// возврат по двойному тапу на начальную страницу вкладки
var lastTapTime = 0;

$$(document).on('click', '.tab-link[href="#home"]', function(e){
  e.preventDefault()
  //try detect double tap
  var timeDiff = (new Date()).getTime() - lastTapTime;
  if(timeDiff < 300){
    var view = app.views.current;
    view.router.back(view.history[0],{force:true});
  }
  lastTapTime = (new Date()).getTime();
});
$$(document).on('click', '.tab-link[href="#rest"]', function(e){
  e.preventDefault()
  //try detect double tap
  var timeDiff = (new Date()).getTime() - lastTapTime;
  if(timeDiff < 300){
    var view = app.views.current;
    view.router.back(view.history[0],{force:true});
  }
  lastTapTime = (new Date()).getTime();
});


//походу не нужен этот блок старый дубль иницилизации карты
function createNewMap() {
  var lastEventListener = null;
  // console.log(lastEventListener);
  var svg = document.getElementById('svg-tiger');
  var object = document.getElementById('object-tiger');
  var img = document.getElementById('floor2');

  lastEventListener = function() {
    var eventsHandler;
    var beforePan;
    beforePan = function(oldPan, newPan) {
      var stopHorizontal = false,
        stopVertical = false,
        gutterWidth = (zoomObject.getSizes().width),
        gutterHeight = (zoomObject.getSizes().height),
        // Computed variables
        sizes = this.getSizes(),
        leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth,
        rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom),
        topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight,
        bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom);

      customPan = {};
      customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
      customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));

      return customPan;
    };
    eventsHandler = {
      haltEventListeners: [
        'touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'
      ],
      init: function(options) {
        var instance = options.instance,
          initialScale = 1,
          pannedX = 0,
          pannedY = 0;

        // Init Hammer
        // Listen only for pointer and touch events
        this.hammer = Hammer(options.svgElement, {
          inputClass: Hammer.SUPPORT_POINTER_EVENTS ?
            Hammer.PointerEventInput : Hammer.TouchInput
        });

        // Enable pinch
        this.hammer.get('pinch').set({
          enable: true
        });

        // Handle double tap
        this.hammer.on('doubletap', function(ev) {
          instance.zoomIn();
        });

        // Handle pan
        this.hammer.on('panstart panmove', function(ev) {
          // On pan start reset panned variables
          if (ev.type === 'panstart') {
            pannedX = 0;
            pannedY = 0;
          }

          // Pan only the difference
          instance.panBy({
            x: ev.deltaX - pannedX,
            y: ev.deltaY - pannedY
          });
          pannedX = ev.deltaX;
          pannedY = ev.deltaY;
        });

        // Handle pinch
        this.hammer.on('pinchstart pinchmove', function(ev) {
          // On pinch start remember initial zoom
          if (ev.type === 'pinchstart') {
            initialScale = instance.getZoom();
            instance.zoomAtPoint(initialScale * ev.scale, {
              x: ev.center.x,
              y: ev.center.y
            });
          }

          instance.zoomAtPoint(initialScale * ev.scale, {
            x: ev.center.x,
            y: ev.center.y
          });
        });

        // Prevent moving the page on some devices when panning over SVG
        options.svgElement.addEventListener('touchmove', function(e) {
          e.preventDefault();
        });
      },

      destroy: function() {
        this.hammer.destroy();
      }
    };

    zoomObject = svgPanZoom('#object-tiger', {
      zoomEnabled: true,
      minZoom: 1,
      fit: false,
      contain: true,
      customEventsHandler: eventsHandler,
      beforePan: beforePan,
      controlIconsEnabled: false,
    });

    zoomImg = svgPanZoom('#floor2', {
      zoomEnabled: true,
      minZoom: 1,
      fit: false,
      contain: true,
      customEventsHandler: eventsHandler,
      beforePan: beforePan,
      controlIconsEnabled: false,
    });

    // Expose variable to use for testing
     zoomObject.setOnZoom(function(level) {
      zoomSvg.zoom(level)
      zoomImg.zoom(level)
      zoomSvg.pan(zoomObject.getPan())
      zoomImg.pan(zoomObject.getPan())
    })

    zoomObject.setOnPan(function(point) {
      zoomSvg.pan(point)
      zoomImg.pan(point)
    })

    zoomSvg.setOnZoom(function(level) {
      zoomObject.zoom(level)
      zoomImg.zoom(level)
      zoomObject.pan(zoomSvg.getPan())
      zoomImg.pan(zoomObject.getPan())
    })

    zoomSvg.setOnPan(function(point) {
      zoomObject.pan(point)
      zoomImg.pan(point)
    })

    zoomImg.setOnZoom(function(level) {
      zoomObject.zoom(level)
      zoomSvg.zoom(level)
      zoomObject.pan(zoomSvg.getPan())
      zoomSvg.pan(zoomObject.getPan())
    })

    zoomImg.setOnPan(function(point) {
      zoomObject.pan(point)
      zoomSvg.pan(point)
    })

    document.getElementById('zoom-in').addEventListener('click', function(ev) {
      ev.preventDefault();

      zoomSvg.zoomIn();
    });

    document.getElementById('zoom-out').addEventListener('click', function(ev) {
      ev.preventDefault();

      zoomSvg.zoomOut();
    });

    // document.getElementById('reset').addEventListener('click', function(ev) {
    //   ev.preventDefault();
    //   zoomSvg.center();
    //   zoomSvg.resetZoom();
    // });

    zoomSvg.zoom(1)
    zoomObject.zoom(1)
    zoomImg.zoom(1)

    zoomSvg.center()
    zoomObject.center()
    zoomImg.center()
  }
// console.log(lastEventListener());
  svg.addEventListener('load', lastEventListener);
  object.addEventListener('load', lastEventListener);
  img.addEventListener('load', lastEventListener);
}
$$('body').on('click', '.black-btn', function (e) {
    $$(this).toggleClass('active');
})

//поделиться дефолтная от framework7
// var acShare = app.actions.create({
//   buttons: [
//   [
//     {
//       text: 'Поделиться',
//       label: true
//     },
//     {
//       text: 'Facebook',
//       color: 'blue',
//     },
//     {
//       text: 'ВКонтакте',
//     },
//     {
//       text: 'Telegram Messenger',
//     },
// ],
// [
//     {
//       text: 'Отмена',
//       color: 'red'
//     }
// ]
// ]
// });
$$('body').on('click', '.share-btn', function () {
    acShare.open();
});
var ac6 = app.actions.create({
  grid: true,
  buttons: [
    [
      {
        text: 'Facebook',
        icon: '<i class="lk-icon lk-icon-fb"></i>'
      },
      {
        text: 'ВКонтакте',
        icon: '<i class="lk-icon lk-icon-vk"></i>'
      },
      {
        text: 'Telegram Messenger',
        icon: '<i class="lk-icon lk-icon-yd"></i>'
      },
    ],
    [
      {
        text: 'Button 1',
        icon: '<img src="http://lorempixel.com/96/96/fashion/4" width="48"/>'
      },
      {
        text: 'Button 2',
        icon: '<img src="http://lorempixel.com/96/96/fashion/5" width="48">'
      },
      {
        text: 'Button 3',
        icon: '<img src="http://lorempixel.com/96/96/fashion/6" width="48">'
      },
    ]
  ]
});
// $$('body').on('click', '.share-btn', function () {
//     acShare.open();
// });
// var ac6 = app.actions.create({
//   grid: true,
//   buttons: [
//     [
//       {
//         text: 'Facebook',
//         icon: '<i class="lk-icon lk-icon-fb"></i>'
//       },
//       {
//         text: 'ВКонтакте',
//         icon: '<i class="lk-icon lk-icon-vk"></i>'
//       },
//       {
//         text: 'Telegram Messenger',
//         icon: '<i class="lk-icon lk-icon-yd"></i>'
//       },
//     ],
//     [
//       {
//         text: 'Button 1',
//         icon: '<img src="http://lorempixel.com/96/96/fashion/4" width="48"/>'
//       },
//       {
//         text: 'Button 2',
//         icon: '<img src="http://lorempixel.com/96/96/fashion/5" width="48">'
//       },
//       {
//         text: 'Button 3',
//         icon: '<img src="http://lorempixel.com/96/96/fashion/6" width="48">'
//       },
//     ]
//   ]
// });
// $$('body').on('click', '.share-btn', function () {
//     ac6.open();
// });

// Сохранение в локалстораже данных
// var storedData = {'username': 'developer',
//                'date': 'Kuntal',
//                'password': 'Parbat',
//                'passwordRepeat': 'Parbat',
//                'telNumber': '9876543210',
//                'email': 'parbat@.com',
//                'apikey': ''};
// window.localStorage.setItem("userdata", JSON.stringify(storedData));
// var retrievedData = window.localStorage.getItem("userdata");
// var  value = JSON.parse(retrievedData);
// if(value.apikey == "") {
// // app.views.create("#landing-screen", true);
// console.log(value.apikey);
// console.log(value.username);
// window.localStorage.clear();
// }


function initialMap() {
  // var lastEventListener = null;
  // console.log(lastEventListener);
  var svg = document.getElementById('svg-tiger');
  var object = document.getElementById('object-tiger');
  var img = document.getElementById('floor2');

 function initMap() {
    var eventsHandler;
    var beforePan;
    beforePan = function(oldPan, newPan) {
      var stopHorizontal = false,
        stopVertical = false,
        gutterWidth = (zoomObject.getSizes().width),
        gutterHeight = (zoomObject.getSizes().height),
        // Computed variables
        sizes = this.getSizes(),
        leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth,
        rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom),
        topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight,
        bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom);

      customPan = {};
      customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
      customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));

      return customPan;
    };
    eventsHandler = {
      haltEventListeners: [
        'touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'
      ],
      init: function(options) {
        var instance = options.instance,
          initialScale = 1,
          pannedX = 0,
          pannedY = 0;

        // Init Hammer
        // Listen only for pointer and touch events
        this.hammer = Hammer(options.svgElement, {
          inputClass: Hammer.SUPPORT_POINTER_EVENTS ?
            Hammer.PointerEventInput : Hammer.TouchInput
        });

        // Enable pinch
        this.hammer.get('pinch').set({
          enable: true
        });

        // Handle double tap
        this.hammer.on('doubletap', function(ev) {
          instance.zoomIn();
        });

        // Handle pan
        this.hammer.on('panstart panmove', function(ev) {
          // On pan start reset panned variables
          if (ev.type === 'panstart') {
            pannedX = 0;
            pannedY = 0;
          }

          // Pan only the difference
          instance.panBy({
            x: ev.deltaX - pannedX,
            y: ev.deltaY - pannedY
          });
          pannedX = ev.deltaX;
          pannedY = ev.deltaY;
        });

        // Handle pinch
        this.hammer.on('pinchstart pinchmove', function(ev) {
          // On pinch start remember initial zoom
          if (ev.type === 'pinchstart') {
            initialScale = instance.getZoom();
            instance.zoomAtPoint(initialScale * ev.scale, {
              x: ev.center.x,
              y: ev.center.y
            });
          }

          instance.zoomAtPoint(initialScale * ev.scale, {
            x: ev.center.x,
            y: ev.center.y
          });
        });

        // Prevent moving the page on some devices when panning over SVG
        options.svgElement.addEventListener('touchmove', function(e) {
          e.preventDefault();
        });
      },

      destroy: function() {
        this.hammer.destroy();
      }
    };

    zoomObject = svgPanZoom('#object-tiger', {
      zoomEnabled: true,
      minZoom: 1,
      fit: false,
      contain: true,
      customEventsHandler: eventsHandler,
      beforePan: beforePan,
      controlIconsEnabled: false,
    });

    zoomImg = svgPanZoom('#floor2', {
      zoomEnabled: true,
      minZoom: 1,
      fit: false,
      contain: true,
      customEventsHandler: eventsHandler,
      beforePan: beforePan,
      controlIconsEnabled: false,
    });

    // Expose variable to use for testing
    zoomSvg = svgPanZoom('#svg-tiger', {
      zoomEnabled: true,
      minZoom: 1,
      fit: false,
      contain: true,
      customEventsHandler: eventsHandler,
      beforePan: beforePan,
      controlIconsEnabled: false,
    });

    zoomObject.setOnZoom(function(level) {
      zoomSvg.zoom(level)
      zoomImg.zoom(level)
      zoomSvg.pan(zoomObject.getPan())
      zoomImg.pan(zoomObject.getPan())
    })

    zoomObject.setOnPan(function(point) {
      zoomSvg.pan(point)
      zoomImg.pan(point)
    })

    zoomSvg.setOnZoom(function(level) {
      zoomObject.zoom(level)
      zoomImg.zoom(level)
      zoomObject.pan(zoomSvg.getPan())
      zoomImg.pan(zoomObject.getPan())
    })

    zoomSvg.setOnPan(function(point) {
      zoomObject.pan(point)
      zoomImg.pan(point)
    })

    zoomImg.setOnZoom(function(level) {
      zoomObject.zoom(level)
      zoomSvg.zoom(level)
      zoomObject.pan(zoomSvg.getPan())
      zoomSvg.pan(zoomObject.getPan())
    })

    zoomImg.setOnPan(function(point) {
      zoomObject.pan(point)
      zoomSvg.pan(point)
    })


    document.getElementById('zoom-in').addEventListener('click', function(ev) {
      ev.preventDefault();

      zoomSvg.zoomIn();
    });

    document.getElementById('zoom-out').addEventListener('click', function(ev) {
      ev.preventDefault();

      zoomSvg.zoomOut();
    });

    // document.getElementById('reset').addEventListener('click', function(ev) {
    //   ev.preventDefault();
    //   zoomSvg.center();
    //   zoomSvg.resetZoom();
    // });

    // zoomSvg.zoom(1)
    // zoomObject.zoom(1)
    //
    // zoomSvg.center()
    // zoomObject.center()
  }
  initMap();
// console.log(lastEventListener());
  // svg.addEventListener('load', lastEventListener);
  // object.addEventListener('load', lastEventListener);
}

function initialPopupMap() {
  // var lastEventListener = null;
  // console.log(lastEventListener);
  var svgPopup = document.getElementById('svg-popup');
  var objectPopup = document.getElementById('object-popup');

 function initModalMap() {
    var eventsHandler;
    var beforePan;
    beforePan = function(oldPan, newPan) {
      var stopHorizontal = false,
        stopVertical = false,
        gutterWidth = (popupObject.getSizes().width),
        gutterHeight = (popupObject.getSizes().height),
        // Computed variables
        sizes = this.getSizes(),
        leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth,
        rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom),
        topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight,
        bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom);

      customPan = {};
      customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
      customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));

      return customPan;
    };
    eventsHandler = {
      haltEventListeners: [
        'touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'
      ],
      init: function(options) {
        var instance = options.instance,
          initialScale = 1,
          pannedX = 0,
          pannedY = 0;

        // Init Hammer
        // Listen only for pointer and touch events
        this.hammer = Hammer(options.svgElement, {
          inputClass: Hammer.SUPPORT_POINTER_EVENTS ?
            Hammer.PointerEventInput : Hammer.TouchInput
        });

        // Enable pinch
        this.hammer.get('pinch').set({
          enable: true
        });

        // Handle double tap
        this.hammer.on('doubletap', function(ev) {
          instance.zoomIn();
        });

        // Handle pan
        this.hammer.on('panstart panmove', function(ev) {
          // On pan start reset panned variables
          if (ev.type === 'panstart') {
            pannedX = 0;
            pannedY = 0;
          }

          // Pan only the difference
          instance.panBy({
            x: ev.deltaX - pannedX,
            y: ev.deltaY - pannedY
          });
          pannedX = ev.deltaX;
          pannedY = ev.deltaY;
        });

        // Handle pinch
        this.hammer.on('pinchstart pinchmove', function(ev) {
          // On pinch start remember initial zoom
          if (ev.type === 'pinchstart') {
            initialScale = instance.getZoom();
            instance.zoomAtPoint(initialScale * ev.scale, {
              x: ev.center.x,
              y: ev.center.y
            });
          }

          instance.zoomAtPoint(initialScale * ev.scale, {
            x: ev.center.x,
            y: ev.center.y
          });
        });

        // Prevent moving the page on some devices when panning over SVG
        options.svgElement.addEventListener('touchmove', function(e) {
          e.preventDefault();
        });
      },

      destroy: function() {
        this.hammer.destroy();
      }
    };

    popupObject = svgPanZoom('#object-popup', {
      zoomEnabled: true,
      minZoom: 1,
      fit: false,
      contain: true,
      customEventsHandler: eventsHandler,
      beforePan: beforePan,
      controlIconsEnabled: false,
    });

    // Expose variable to use for testing
    popupSvg = svgPanZoom('#svg-popup', {
      zoomEnabled: true,
      minZoom: 1,
      fit: false,
      contain: true,
      customEventsHandler: eventsHandler,
      beforePan: beforePan,
      controlIconsEnabled: false,
    });

    popupObject.setOnZoom(function(level) {
      popupSvg.zoom(level)
      popupSvg.pan(popupObject.getPan())
    })

    popupObject.setOnPan(function(point) {
      popupSvg.pan(point)
    })

    popupSvg.setOnZoom(function(level) {
      popupObject.zoom(level)
      popupObject.pan(popupSvg.getPan())
    })

    popupSvg.setOnPan(function(point) {
      popupObject.pan(point)
    })

    document.getElementById('zoom-in-popup').addEventListener('click', function(ev) {
      ev.preventDefault();

      popupSvg.zoomIn();
    });

    document.getElementById('zoom-out-popup').addEventListener('click', function(ev) {
      ev.preventDefault();

      popupSvg.zoomOut();
    });

    // document.getElementById('reset-popup').addEventListener('click', function(ev) {
    //   ev.preventDefault();
    //   popupSvg.center();
    //   popupSvg.resetZoom();
    // });
    // центрирование svg после повторной загрузки
    popupSvg.center();
    popupSvg.resetZoom();

    // zoomSvg.zoom(1)
    // zoomObject.zoom(1)
    //
    // zoomSvg.center()
    // zoomObject.center()
  }
  // initModalMap();
// console.log(lastEventListener());
  // svgPopup.addEventListener('load', initModalMap);
  objectPopup.addEventListener('load', initModalMap, false);
}

// function destroyMap() {
//     popupObject.destroy();
//     popupSvg.destroy();
// }

// $$('#map').on('tab:show', function() {
// {

// var f = function f() {
//     // create the svg element
//     const svg1 = document.getElementById("svg-tiger-container");


//     const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
//     g1.setAttribute("id", "path-to-way");
//     // set width and height
//     // svg1. setAttribute ("viewBox", "0 0 5435 5625" );
//     // svg1.setAttribute("class", "path-loyer");

//     // create a circle
//     const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     cir1.setAttribute("class", "path-corner-border");
//     cir1.setAttribute("id", "path-corner-border");
//     cir1.setAttribute("d", "m 1994.61,3684.48 367.0162,1.0316 9.3808,-996.7141 363.5075,-121.9509 v -558.16 l 1163.224,-4.6904 560.5051,-4.6904 37.5234,98.4988 -2.3452,215.7593");
//     cir1.setAttribute("stroke-dasharray", "4300");
//     cir1.setAttribute("stroke-dashoffset", "4300");

//     const cir2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     cir2.setAttribute("class", "path-corner");
//     cir2.setAttribute("d", "m 1994.61,3684.48 367.0162,1.0316 9.3808,-996.7141 363.5075,-121.9509 v -558.16 l 1163.224,-4.6904 560.5051,-4.6904 37.5234,98.4988 -2.3452,215.7593");
//     cir2.setAttribute("stroke-dasharray", "4300");
//     cir2.setAttribute("stroke-dashoffset", "4300");
//     // cir2.setAttribute("xlink:href", ".path-corner-border");
//     var objClick =  document.getElementById('drawPath');
//     objClick.addEventListener("click", function() {
//     var path1 = document.querySelector('#path-corner-border');
//     var len = path1.getTotalLength();

//     const animate1 = document.createElementNS("http://www.w3.org/2000/svg", "animate");
//     // animate2.setAttribute("xlink:href", "path-corner");
//     animate1.setAttribute("dur", "5000ms");
//     animate1.setAttribute("begin", "an1.begin");
//     animate1.setAttribute("attributeName", "stroke-dashoffset");
//     animate1.setAttribute("values", len + ";0");
//     animate1.setAttribute("fill", "freeze");
//     // attach it to the container
//     cir1.appendChild(animate1);
//     const animate2 = document.createElementNS("http://www.w3.org/2000/svg", "animate");
//     // animate2.setAttribute("xlink:href", "path-corner");
//     animate2.setAttribute("dur", "5000ms");
//     animate2.setAttribute("begin", "indefinite");
//     animate2.setAttribute("attributeName", "stroke-dashoffset");
//     animate2.setAttribute("values", len + ";0");
//     animate2.setAttribute("fill", "freeze");
//     animate2.setAttribute("id", "an1");
//     // attach it to the container
//     cir2.appendChild(animate2);

//     document.getElementById('an1').beginElement();
//     // console.log("Length - " + len);
//       });
//     g1.appendChild(cir1);
//     g1.appendChild(cir2);

//     svg1.appendChild(g1);
//     // attach container to document
//     // document.getElementById("mobile-div").appendChild(svg1);

//   };

//   f();

// }
// });




// Create dynamic Popup
var dynamicPopup = app.popup.create({
     content: '<div class="popup">'+
                  '<a class="link popup-close close-modal-x map-close-modal-x" href="#"><i class="f7-icons color-white">close</i></a>'+
                  '<div class="map-wrap-16">'+
                      '<div class="block map-content-wrapper-16">'+
                        '<div id="mobile-div-popup" class="map-content-16">'+
                            '<svg id="svg-popup" xmlns="http://www.w3.org/2000/svg" class="svg-loyer-corner svg-loyer-16 mobile-svg" viewBox="0 0 5435 5625">' +
                                  '<g id="floor-plan-popup">' +
                                    '<g id="svg-popup-container">' +
                                    '<path id="corner2001" data-name="2001" transform="translate(0)" class="food-market tooltipsteredPopup" data-tooltip-content="#corner-2001" d="m 3332.3954,2912.308 1.4897,-765.6912 44.6901,-44.6902 h 172.8019 l 56.6075,49.1592 v 691.2076 l -113.215,108.7461 -117.6841,1.4896 -40.2211,-34.2624 z"></path>' +
                                    '<path id="corner2002" data-name="2002" transform="translate(0)" class="food-market tooltipsteredPopup" data-tooltip-content="#corner-2002" d="m 3745.0344,2154.0651 52.1385,-53.6281 h 151.9465 l 50.6489,53.6281 -4.469,621.1931 -248.7752,-2.9793 z"></path>' +
                                    '<path id="corner2000" data-name="2000" transform="translate(0)" class="food-market tooltipsteredPopup" data-tooltip-content="#corner-2000" d="m 2983.8122,2827.3967 -1.4896,-695.6766 256.2235,-1.4897 -2.9794,646.5175 -126.622,132.5807 z"></path>' +
                                    '<path id="corner2003" data-name="2003" transform="translate(0)" class="food-market tooltipsteredPopup" data-tooltip-content="#corner-2003" d="m 3032.9714,3389.0029 v -207.0643 l 172.8019,-220.4714 174.2916,138.5394 c 0,0 -271.1202,342.6245 -272.6099,345.6038 -1.4897,2.9794 -74.4836,-56.6075 -74.4836,-56.6075 z"></path>' +
                                    '<path id="corner2004" data-name="2004" transform="translate(0)" class="food-market tooltipsteredPopup" data-tooltip-content="#corner-2004" d="m 3032.9714,3946.1401 -1.4897,-232.3888 430.5151,-549.6888 174.2916,137.0498 -561.6062,679.2902 z"></path>' +
                                    '<path id="corner2005" data-name="2005" transform="translate(0)" class="food-market tooltipsteredPopup" data-tooltip-content="#corner-2005" d="m 3679.4889,3192.3663 -80.4423,-59.5869 -7.4483,-61.0765 148.9671,-189.1883 230.8991,1.4896 -245.7958,306.8724 z"></path>' +
                                    '<path id="corner1" data-name="1" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-1" d="m 478,913 h 279 v 233 l -279,2 z"></path>' +
                                    '<path id="corner2" data-name="2" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-2" d="m 478,1148 279,-2 v 191 H 478 Z"></path>' +
                                    '<path id="corner3" data-name="3" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-3" d="m 478,1337 h 279 v 123 l -279,-1 z"></path>' +
                                    '<path id="corner4" data-name="4" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-4" d="m 478,1461 279,-1 v 292 l -279,5 z"></path>' +
                                    '<path id="corner5" data-name="5" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-5" d="m 478,1757 279,-5 -0.0836,253.7551 L 478,2002 Z"></path>' +
                                    '<path id="corner6" data-name="6" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-6" d="m 478,2002 278.9164,3.7551 L 757,2265 478,2264 Z"></path>' +
                                    '<path id="corner7" data-name="7" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-7" d="m 705,2418 h 251 l -0.81132,273.4431 -251.23452,0.8292 z"></path>' +
                                    '<path id="corner8" data-name="8" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-8" d="M 703.95416,2692.2723 955.18868,2691.4431 956,2958 705.61247,2956.7733 Z"></path>' +
                                    '<path id="corner9" data-name="9" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-9" d="M 705.61247,2956.7733 956,2958 v 298 l -251,-3 z"></path>' +
                                    '<path id="corner11" data-name="11" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-11" d="m 643,3990 h 228 l -2,432.87 -227.23261,0.6817 z"></path>' +
                                    '<path id="corner12" data-name="12" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-12" d="M 641.76739,4423.5517 1224,4420.71 V 4781 H 643 Z"></path>' +
                                    '<path id="corner13" data-name="13" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-13" d="m 879,3990 h 286 v 424 H 884 Z"></path>' +
                                    '<path id="corner14" data-name="14" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-14" d="m 1068,3277 h 273 v 294 l -273,-1 z"></path>' +
                                    '<path id="corner15" data-name="15" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-15" d="m 1068,3277 h 273 l 0.5758,-297.8395 L 1068,2981 Z"></path>' +
                                    '<path id="corner16" data-name="16" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-16" d="m 1068,2981 273.5758,-1.8395 L 1341,2583 h -273 z"></path>' +
                                    '<path id="corner17" data-name="17" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-17" d="m 912,1997.63 199.0702,-1.8495 L 1112,2168 l 17.08,0.08 L 1129,2253 H 912 Z"></path>' +
                                    '<path id="corner18" data-name="18" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-18" d="m 912,1997.63 199.0702,-1.8495 L 1112,1878 l 18,1 -1,-125 H 912 Z"></path>' +
                                    '<path id="corner19" data-name="19" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-19" d="m 911,1073 -1,-306 h 193.94 v 416 H 1076 Z"></path>' +
                                    '<path id="corner20" data-name="20" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-20" d="M 1111.97,767 H 1348 l -0.6201,212.23422 -236.3097,-0.82916 z"></path>' +
                                    '<path id="corner21" data-name="21" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-21" d="m 1111.0702,978.40506 236.3097,0.82916 L 1348,1334 h -49 L 1122,1226.59 V 1183 h -10.03 z"></path>' +
                                    '<path id="corner22" data-name="22" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-22" d="M 1357.7,892.3 1358.1589,766.14091 1549,767 v 123 z"></path>' +
                                    '<path id="corner23" data-name="23" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-23" d="M 1357.7,892.3 1603,890 v 227 l -244.8411,-0.1257 z"></path>' +
                                    '<path id="corner24" data-name="24" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-24" d="M 1348.209,1125.1658 1348,1364 l 138,92 63,-36.8 54,-0.2 v -293 z"></path>' +
                                    '<path id="corner25" data-name="25" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-25" d="m 1091,1753.93 v -160.86 l 265,-0.07 v 205 l -227.5175,0.4412 L 1129,1754 Z"></path>' +
                                    '<path id="corner26" data-name="26" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-26" d="m 1112,1878 h 245 v 290 h -245 z"></path>' +
                                    '<path id="corner27" data-name="27" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-27" d="M 1129.08,2168.08 1357,2168 v 268 h -289 v -183 h 61 z"></path>' +
                                    '<path id="corner28" data-name="28" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-28" d=""></path>' +
                                    '<path id="corner29" data-name="29" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-29" d=""></path>' +
                                    '<path id="corner30" data-name="30" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-30" d="m 1754,841 v 438 h 437 V 841 Z"></path>' +
                                    '<path id="corner31" data-name="31" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-31" d="m 1754,1280 h 437 v 607 l -76.6501,-1.4974 -361.5123,-253.7219 z"></path>' +
                                    '<path id="corner32" data-name="32" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-32" d="m 1748,1836 112.628,-0.2468 250.4053,165.8314 L 2113,2083 h -365 z"></path>' +
                                    '<path id="corner33" data-name="33" transform="translate(0)" class="food-corner tooltipsteredPopup link sheet-open" data-tooltip-content="#corner-33" d="m 1748,2083 h 365 v -31 h 78 v 407.05 h -443 z"></path>' +
                                    '<path id="corner35" data-name="35" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-35" d="m 1745,3176 281,15 v 451 l -281,10 z"></path>' +
                                    '<path id="corner36" data-name="36" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-36" d="m 1741,4167 v -360 h 439 v 360 z"></path>' +
                                    '<path id="corner37" data-name="37" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-37" d="M 2178.76,4545.61 V 4298.97 L 1745,4299 l -0.454,245.6086 z"></path>' +
                                    '<path id="corner38" data-name="38" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-38" d="m 1692,4559 h 187 v 199 h -187 z"></path>' +
                                    '<path id="corner39" data-name="39" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-39" d="m 2830,1467 v 410 l -67.98,-0.31 -44.6,48.31 H 2476 l -0.9668,-456.5632 z"></path>' +
                                    '<path id="corner40" data-name="40" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-40" d="m 2830,1468 -354.9668,0.4368 0.8291,-235.4806 L 2830,1229 Z"></path>' +
                                    '<path id="corner41" data-name="41" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-41" d="M 2475.8623,1232.9562 2476.6915,960.99277 2830,959 v 270 z"></path>' +
                                    '<path id="corner42" data-name="42" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-42" d="M 2830,959 2476.6915,960.99277 2476,662 h 239.49 l 46.51,51 h 68 z"></path>' +
                                    '<path id="corner43" data-name="43" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-43" d="m 2317,508 441.6,-1.3 V 214.8 L 2317,214 Z"></path>' +
                                    '<path id="corner431" data-name="431" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-431" d="M 3034.6,506.7 V 214.8 h -256 v 291.9 z"></path>' +
                                    '<path id="corner432" data-name="432" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-432" d="m 3050.5,214.8 v 291.9 h 260.1 V 214.8 Z"></path>' +
                                    '<path id="corner433" data-name="433" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-433" d="m 3876.9,506.7 h 276 V 214.8 h -276 z"></path>' +
                                    '<path id="corner44" data-name="44" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-44" d=""></path>' +
                                    '<path id="corner45" data-name="45" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-45" d="m 3011,1456 v 427 h 556 v -427 z"></path>' +
                                    '<path id="corner47" data-name="47" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-47" d="m 3567,1456 h 581 v 427 h -581 z"></path>' +
                                    '<path id="corner48" data-name="48" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-48" d="m 3405,673 h 276.49 v 97.29 L 4130,767 v 576 h -725 z"></path>' +
                                    '<path id="corner49" data-name="49" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-49" d=""></path>' +
                                    '<path id="corner50" data-name="50" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-50" d="m 4303,559 v 469 h 460 l -5,281 h 430 l -3.3773,-634.77743 -476.1174,-2.10671 -1.0533,-111.65583 z"></path>' +
                                    '<path id="corner51" data-name="51" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-51" d="m 4302,1309 1,-281 h 460 l -5,281 z"></path>' +
                                    '<path id="corner52" data-name="52" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-52" d="m 4653,1468 1.0686,302.6479 L 4851,1768.42 V 1468 Z"></path>' +
                                    '<path id="corner53" data-name="53" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-53" d="M 4654.0686,1770.6479 4466.4519,1768.3027 4464,1468 h 189 z"></path>' +
                                    '<path id="corner54" data-name="54" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-54" d="m 4464,1468 1,446 h -174 l -1,-446 z"></path>' +
                                    '<path id="corner55" data-name="55" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-55" d="m 4154,2430.5 293.6902,0.3244 L 4449,2118 h -295 z"></path>' +
                                    '<path id="corner56" data-name="56" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-56" d="m 4154,2430.5 293.6902,0.3244 L 4449,2743.03 4154,2743 Z"></path>' +
                                    '<path id="corner57" data-name="57" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-57" d="m 4358.13,2874.4 -5.5115,257.802 h 256.1071 L 4615,2874.4 Z"></path>' +
                                    '<path id="corner58" data-name="58" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-58" d="M 3984.7,3066.1 4190.297,3235.6067 4269,3133.8 l 83.6185,-1.598 5.5115,-257.802 h -216.2 z"></path>' +
                                    '<path id="corner60" data-name="60" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-60" d="m 3984.7,3066.1 205.597,169.5067 -245.2856,303 L 3753,3379.5 Z"></path>' +
                                    '<path id="corner601" data-name="601" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-601" d="m 2425.5,2101 v 452.8 c 55.6259,34.6847 96.3394,19.4713 135.9,0.4 v -453.3 c -43.3107,-35.6162 -88.5791,-36.1499 -135.9,0.1 z"></path>' +
                                    '<path id="corner61" data-name="61" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-61" d="m 3585.05,3559.19 108.61,-134.11 202.9059,171.3136 L 3855,3649.19 h -160 z"></path>' +
                                    '<path id="corner62" data-name="62" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-62" d="m 3461.6543,4192.7018 v 206.8095 l 99.7976,1.2024 L 3559.11,4190.3 Z"></path>' +

                                    '<path id="corner63" data-name="63" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-63" d="m 3328.1,4193.8 0.09,204.5089 133.4643,1.2024 v -206.8095 z"></path>' +
                                    '<path id="corner64" data-name="64" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-64" d="m 3196.96,4190.3 0.1705,206.8065 131.0595,1.2024 -0.09,-204.5089 z"></path>' +
                                    '<path id="corner65" data-name="65" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-65" d="m 3462.8567,4015.9518 -1.2024,176.75 97.4557,-2.4018 -1.06,-177.55 z"></path>' +
                                    '<path id="corner66" data-name="66" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-66" d="M 3303.39,4012.75 3197.4,4167 l -0.44,23.3 257.48,-8.4196 -3.6071,-169.5357 z"></path>' +
                                    '<path id="corner67" data-name="67" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-67" d="m 3458.74,3803.38 4.1167,212.5718 95.1933,-3.2018 -0.55,-209.35 z"></path>' +
                                    '<path id="corner68" data-name="68" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-68" d="M 3450.8329,3816.3566 3303.39,4012.75 l 147.4429,-0.4053 z"></path>' +
                                    '<path id="corner72" data-name="72" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-72" d="m 3886.5532,3777.8072 -1.4896,306.8724 141.5188,1.4896 L 4028,3779 Z"></path>' +
                                    '<path id="corner73" data-name="73" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-73" d=""></path>' +
                                    '<path id="corner74" data-name="74" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-74" d="m 4143,3771 v 620 h 295 v -620 z"></path>' +
                                    '<path id="corner75" data-name="75" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-75" d=""></path>' +
                                    '<path id="corner76" data-name="76" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-76" d="m 4291,4509 h 544 v 291 h -544 z"></path>' +
                                    '<path id="corner77" data-name="77" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-77" d="m 4698,4097 v 277 h 89.8803 v -277.4887 z"></path>' +
                                    '<path id="corner78" data-name="78" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-78" d="m 4591.1,4099 v 268 h 89.7684 v -264.4767 z"></path>' +
                                    '<path id="corner79" data-name="79" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-79" d="m 4571.1069,4083.0246 295.2032,-3.8109 L 4866,3801 h -296 z"></path>' +
                                    '<path id="corner80" data-name="80" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-80" d="m 4570,3679 h 282 v -448 h -282 z"></path>' +
                                    '<path id="corner81" data-name="81" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-81" d="m 4615,2874.4 -6.2744,257.802 257.5744,1.598 0.7,-259.4 z"></path>' +
                                    '<path id="corner82" data-name="82" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-82" d="m 4689,2423 v 322.0353 h 109.7017 v -323.4404 z"></path>' +
                                    '<path id="corner83" data-name="83" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-83" d="m 4556,2420 v 323 h 128.4756 v -322.6075 z"></path>' +
                                    '<path id="corner84" data-name="84" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-84" d="m 4556,2420 v -249 l 304.5174,1.3909 -0.8292,247.9179 z"></path>' +
                                    '<path id="corner85" data-name="85" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-85" d="m 4556,2171 304.5174,1.3909 L 4860,1864 h -304 z"></path>' +
                                    '<path id="corner2006" data-name="2006" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-2006" d="m 2771.3999,2746.3999 v 245.2 h 154.2 v -245.2 z"></path>' +
                                    '<path id="corner2007" data-name="2007" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-2007" d="m 2770.3999,3214.3999 v 245.2 h 154.2 v -245.2 z"></path>' +
                                    '<path id="corner2008" data-name="2008" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-2008" d="m 2770.3999,3786.3999 v 245.2 h 154.2 v -245.2 z"></path>' +
                                    '<path id="corner2009" data-name="2009" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-2009" d=""></path>' +
                                    '<path id="corner434" data-name="434" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-434" d="m 3326.5,214.8 v 291.9 h 276 V 214.8 Z"></path>' +
                                    '<path id="corner101" data-name="101" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-101" d="m 705,3253 251,3 v 189.9 l -248.919,0.7635 z"></path>' +
                                    '<path id="corner102" data-name="102" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-102" d="M 956,3636 H 705 L 707.081,3446.6635 956,3445.9 Z"></path>' +
                                    '<path id="corner341" data-name="341" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-341" d=""></path>' +
                                    '<path id="corner342" data-name="342" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-342" d="m 1749,3027 v -451 l 576,-9 v 450 z"></path>' +
                                    '<path id="corner701" data-name="701" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-701" d="m 4028,4393 -0.1965,-306.7638 -143.2635,-0.6761 2.2096,307.5379 z"></path>' +
                                    '<path id="corner702" data-name="702" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-702" d="m 3738.9941,4087.789 145.5459,-2.2289 2.2096,307.5379 L 3740,4393 Z"></path>' +
                                    '<path id="corner691" data-name="691" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-691" d="M 3586.8258,4524.1085 3934,4521 l -0.9136,150.6186 -347.8134,-4.6582 z"></path>' +
                                    '<path id="corner692" data-name="692" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-692" d="m 3207,4521 379.8258,3.1085 -1.5528,142.8519 -380.4209,1.5527 z"></path>' +
                                    '<path id="corner695" data-name="695" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-695" d="m 3207,4873.6201 v 94.2744 l 282.73,1.4555 v -96.05 z"></path>' +
                                    '<path id="corner90" data-name="90" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-90" d="m 4974.08,4543.21 v 144.85 h 144.13 v -144.85 z"></path>' +
                                    '<path id="corner91" data-name="91" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-91" d="m 4974.08,4331.8 v 154.88 h 144.13 V 4331.8 Z"></path>' +
                                    '<path id="corner435" data-name="435" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-435" d="m 3602.5,214.8 v 291.9 h 274.4 V 214.8 Z"></path>' +
                                    '<path id="corner2010" data-name="2010" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-2010" d="m 447,348 1,173 H 1698 V 348 Z"></path>' +
                                    '<path id="corner2011" data-name="2011" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-2011" d="m 1754,706 v 130 h 437 V 706 Z"></path>' +
                                    '<path id="corner2012" data-name="2012" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-2012" d="m 2082,4812.43 -4,126.31 222.48,2.02 -4.71,-132.99 z"></path>' +
                                    '<path id="corner1037" data-name="1037" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-1037" d="m 2026,3191 v 451 l 291,10 v -476 z"></path>' +
                                    '<path id="corner1066" data-name="1066" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-1066" d="m 3740,3779 -0.9243,304.1899 145.9879,1.4897 1.4896,-306.8724 z"></path>' +
                                    '</g>' +
                                  '</g>' +
                              '</svg>' +
                            '<object id="object-popup" class="img-loyer-16 mobile-svg img-loyer-bg" type="image/svg+xml" data="img/map-svg-1.svg" width="5435" height="5625">'+
                            '</object>'+
                        '</div>'+
                        '<div class="controls-zoom">'+
                                    '<div class="controls-zoom-container">' +
                                        '<a href="javascript:void(0);" class="zoomIn" id="zoom-in-popup"></a>' +
                                        '<a href="javascript:void(0);" class="zoomOut" id="zoom-out-popup"></a>' +
                                    '</div>' +
                                    // '<a href="#" class="map-corners-btn circe">' +
                                    //     '<i class="corners-icon"></i>' +
                                    //     '<span>корнеры</span>' +
                                    // '</a>' +
                          // '<a href="javascript:void(0);" class="fullscreenToggle" id="reset-popup"></a>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
            '</div>',
  on: {
    open: function (popup) {
      // console.log('Popup open');
    },
    opened: function (popup) {
      // console.log('=============');
    },
  }
});
// Events also can be assigned on instance later
dynamicPopup.on('close', function (popup) {
  // console.log('Popup close');
  app.popup.destroy();
});
dynamicPopup.on('closed', function (popup) {
  // console.log('Popup closed');
});

// Open dynamic popup
$$('body').on('click', '.dynamic-popup', function () {
  dynamicPopup.open();
  var self = this;
  var btn = $$('.dynamic-popup');
  var corner = $(self).attr("data-id");
  dynamicPopup.on('opened', function (popup) {
      initialPopupMap();
            var instances = $.tooltipster.instances();
      $.each(instances, function(i, instance){
          instance.close();
      });
      $('#svg-popup .tooltipsteredPopup').tooltipster({
                animation: 'grow',
                contentAsHTML: true,
                delay: 200,
                contentCloning: true,
                interactive: true,
                trackOrigin: true,
                repositionOnScroll: true,
                theme: 'my-custom-theme',
                trigger: 'custom',
                triggerOpen: {
                    click: true,
                    tap: true,
                },
                triggerClose: {
                    click: true,
                    tap: true,
                }
            });
      $('#svg-popup path').removeClass('active-corner');
      $('#svg-popup path[data-tooltip-content="#corner-' + corner + '"]').tooltipster('open');
      $('#svg-popup path[data-tooltip-content="#corner-' + corner + '"]').addClass('active-corner');
  // console.log('this work');
});
});


//закомментировал после последней сборки Тиграна
// $$('#home').on('click', '.favorites', function (e) {
//   if ($$(this).hasClass('active')) {
//     $$(this).removeClass('active');
//   } else {
//     $$(this).addClass('active');
//   }
// });
// $$('#home').on('click', '.star-favorites', function (e) {
//   if ($$(this).hasClass('active')) {
//     $$(this).removeClass('active');
//   } else {
//     $$(this).addClass('active');
//   }
// });



// onDeviceReady: function() {
//     this.receivedEvent('deviceready');
//     document.querySelector("#prepare").addEventListener("touchend", function() {
//         window.QRScanner.prepare(onDone); // show the prompt
//     });
//
//     document.querySelector("#show").addEventListener("touchend", function() {
//         window.QRScanner.show();
//     });
//
//     document.querySelector("#scan").addEventListener("touchend", function() {
//         window.QRScanner.scan(displayContents);
//     });
//
//     function onDone(err, status){
//         if (err) {
//             // here we can handle errors and clean up any loose ends.
//             console.error(err);
//         }
//         if (status.authorized) {
//             // W00t, you have camera access and the scanner is initialized.
//             // QRscanner.show() should feel very fast.
//         } else if (status.denied) {
//             // The video preview will remain black, and scanning is disabled. We can
//             // try to ask the user to change their mind, but we'll have to send them
//             // to their device settings with `QRScanner.openSettings()`.
//         } else {
//             // we didn't get permission, but we didn't get permanently denied. (On
//             // Android, a denial isn't permanent unless the user checks the "Don't
//             // ask again" box.) We can ask again at the next relevant opportunity.
//         }
//     }
//
//     function displayContents(err, text){
//         if(err){
//             // an error occurred, or the scan was canceled (error code `6`)
//         } else {
//             // The scan completed, display the contents of the QR code:
//             alert(text);
//         }
//     }
// }
$$(document).on('page:init', '.page[data-name*="Detail"]', function() {
    var toastTop = app.toast.create({
      text: 'Авторизируйтесь в личном кабинете, чтобы иметь возможность сохранять в избранное.',
      position: 'top',
      // closeTimeout: 2000,
      closeButton: true,
    });

    if (localStorage.getItem("auth") === "false") {
      $$('.open-toast-top').on('click', function () {
         toastTop.open();
       });
    } else {
      console.log(localStorage.getItem("auth"));
    }
});
