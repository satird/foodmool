// Dom7
var $$ = Dom7;
// Framework7 App main instance
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
      myVarRest: "db-home-1.json",
      infoMapRest: "db-rest-1.json",
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

  // App routes
  routes: routes,
  on: {
    init: function() {
      // console.log('App initialized')
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
    } else if (app.views.current.router.url == '/lk-main/') {
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
        console.log('router.back');
        app.views.current.router.back();
    }
}


app.preloader.show(); //var app is initialized by now
app.on('pageInit', function (page) {
  // console.log('Page is now initialized');
  app.preloader.hide();
});


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
})
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
$$('#my-login-screen .login-button').on('click', function() {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

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
  $$('.toolbar-container').addClass('add-light-theme');
    $$('.statusbar').addClass('add-light-theme');
  // StatusBar.styleDefault();
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

$$('#map').on('tab:show', function() {
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
});




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
                                      '<path id="corner1" data-name="1" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-1" d="m 478,913 h 279 v 233 l -279,2 z"></path>' +
                                      '<path id="corner2" data-name="2" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-2" d="m 478,1148 279,-2 v 191 H 478 Z"></path>' +
                                      '<path id="corner3" data-name="3" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-3" d="m 478,1337 h 279 v 123 l -279,-1 z"></path>' +
                                      '<path id="corner4" data-name="4" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-4" d="m 478,1461 279,-1 v 292 l -279,5 z"></path>' +
                                      '<path id="corner5" data-name="5" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-5" d="m 478,1757 279,-5 -0.0836,253.7551 L 478,2002 Z"></path>' +
                                      '<path id="corner6" data-name="6" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-6" d="m 478,2002 278.9164,3.7551 L 757,2265 478,2264 Z"></path>' +
                                      '<path id="corner7" data-name="7" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-7" d="m 705,2418 h 251 l -0.81132,273.4431 -251.23452,0.8292 z"></path>' +
                                      '<path id="corner8" data-name="8" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-8" d="M 703.95416,2692.2723 955.18868,2691.4431 956,2958 705.61247,2956.7733 Z"></path>' +
                                      '<path id="corner9" data-name="9" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-9" d="M 705.61247,2956.7733 956,2958 v 298 l -251,-3 z"></path>' +
                                      '<path id="corner10" data-name="10" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-10" d="m 705,3253 251,3 v 380 H 705 Z"></path>' +
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
                                      '<path id="corner30" data-name="30" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-30" d="m 1754,767 h 437 v 512 h -437 z"></path>' +
                                      '<path id="corner31" data-name="31" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-31" d="m 1754,1280 h 437 v 607 l -76.6501,-1.4974 -361.5123,-253.7219 z"></path>' +
                                      '<path id="corner32" data-name="32" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-32" d="m 1748,1836 112.628,-0.2468 250.4053,165.8314 L 2113,2083 h -365 z"></path>' +
                                      '<path id="corner33" data-name="33" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-33" d="m 1748,2083 h 365 v -31 h 78 v 407.05 h -443 z"></path>' +
                                      '<path id="corner34" data-name="34" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-34" d="m 1749,2576 571,1 v 450 h -571 z"></path>' +
                                      '<path id="corner35" data-name="35" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-35" d="m 1745,3652 v -476 h 572 v 476 z"></path>' +
                                      '<path id="corner36" data-name="36" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-36" d="m 1741,4167 v -360 h 439 v 360 z"></path>' +
                                      '<path id="corner37" data-name="37" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-37" d="M 2178.76,4545.61 V 4298.97 L 1745,4299 l -0.454,245.6086 z"></path>' +
                                      '<path id="corner38" data-name="38" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-38" d="m 1692,4559 h 187 v 199 h -187 z"></path>' +
                                      '<path id="corner39" data-name="39" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-39" d="m 2830,1467 v 410 l -67.98,-0.31 -44.6,48.31 H 2476 l -0.9668,-456.5632 z"></path>' +
                                      '<path id="corner40" data-name="40" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-40" d="m 2830,1468 -354.9668,0.4368 0.8291,-235.4806 L 2830,1229 Z"></path>' +
                                      '<path id="corner41" data-name="41" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-41" d="M 2475.8623,1232.9562 2476.6915,960.99277 2830,959 v 270 z"></path>' +
                                      '<path id="corner42" data-name="42" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-42" d="M 2830,959 2476.6915,960.99277 2476,662 h 239.49 l 46.51,51 h 68 z"></path>' +
                                      '<path id="corner43" data-name="43" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-43" d="m 2317,214 h 720 v 294 h -720 z"></path>' +
                                      '<path id="corner44" data-name="44" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-44" d=""></path>' +
                                      '<path id="corner45" data-name="45" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-45" d=""></path>' +
                                      '<path id="corner46" data-name="46" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-46" d=""></path>' +
                                      '<path id="corner47" data-name="47" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-47" d="m 3567,1456 h 581 v 427 h -581 z"></path>' +
                                      '<path id="corner48" data-name="48" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-48" d="m 3405,673 h 276.49 v 97.29 L 4130,767 v 576 h -725 z"></path>' +
                                      '<path id="corner49" data-name="49" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-49" d=""></path>' +
                                      '<path id="corner50" data-name="50" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-50" d=""></path>' +
                                      '<path id="corner51" data-name="51" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-51" d="m 4302,1309 1,-281 h 460 l -5,281 z"></path>' +
                                      '<path id="corner52" data-name="52" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-52" d="m 4653,1468 1.0686,302.6479 L 4851,1768.42 V 1468 Z"></path>' +
                                      '<path id="corner53" data-name="53" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-53" d="M 4654.0686,1770.6479 4466.4519,1768.3027 4464,1468 h 189 z"></path>' +
                                      '<path id="corner54" data-name="54" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-54" d="m 4464,1468 1,446 h -174 l -1,-446 z"></path>' +
                                      '<path id="corner55" data-name="55" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-55" d="m 4154,2430.5 293.6902,0.3244 L 4449,2118 h -295 z"></path>' +
                                      '<path id="corner56" data-name="56" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-56" d="m 4154,2430.5 293.6902,0.3244 L 4449,2743.03 4154,2743 Z"></path>' +
                                      '<path id="corner57" data-name="57" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-57" d="m 4167,2926.56 0.5,-52.57 234.51,0.43 -2.01,52.14 1.9586,206.6547 L 4269,3133.8 Z"></path>' +
                                      '<path id="corner58" data-name="58" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-58" d="m 4017.05,3027.19 108.61,-134.11 41.34,33.48 102,207.24 -55.8308,67.4258 z"></path>' +
                                      '<path id="corner59" data-name="59" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-59" d="m 3876.05,3200.19 108.61,-134.11 202.7119,171.4965 -114.9153,143.0578 z"></path>' +
                                      '<path id="corner60" data-name="60" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-60" d="m 3733.05,3378.19 108.61,-134.11 200.3089,172.9051 -113.7427,140.7126 z"></path>' +
                                      '<path id="corner61" data-name="61" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-61" d="m 3585.05,3559.19 108.61,-134.11 202.9059,171.3136 L 3855,3649.19 h -160 z"></path>' +
                                      '<path id="corner62" data-name="62" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-62" d="m 3405.2445,4272.9866 v 125.4687 L 3578,4399 l -1.5552,-129.5312 z"></path>' +
                                      '<path id="corner63" data-name="63" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-63" d="m 3405.2445,4272.9866 -205.2059,-1.1726 v 125.4687 l 205.2059,1.1726 z"></path>' +
                                      '<path id="corner64" data-name="64" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-64" d="m 3405.2445,4272.9866 171.2003,-3.5178 1.1726,-103.1892 -172.3729,1.1726 z"></path>' +
                                      '<path id="corner65" data-name="65" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-65" d="m 3405.2445,4272.9866 -205.2059,-1.1726 -2.5786,-104.764 207.7845,0.4022 z"></path>' +
                                      '<path id="corner66" data-name="66" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-66" d="m 3405.2445,4167.4522 v -104.3619 l 172.3729,-3.5178 v 106.7071 z"></path>' +
                                      '<path id="corner67" data-name="67" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-67" d="m 3197.46,4167.05 207.7845,0.4022 -1.1726,-134.8496 h -114.9153 z"></path>' +
                                      '<path id="corner68" data-name="68" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-68" d="m 3405.2445,4063.0903 7.0356,-195.825 42.9399,-63.8153 h 102.32 l 22.4226,0.4947 -2.3452,255.6278 z"></path>' +
                                      '<path id="corner69" data-name="69" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-69" d=""></path>' +
                                      '<path id="corner70" data-name="70" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-70" d=""></path>' +
                                      '<path id="corner71" data-name="71" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-71" d=""></path>' +
                                      '<path id="corner72" data-name="72" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-72" d=""></path>' +
                                      '<path id="corner73" data-name="73" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-73" d=""></path>' +
                                      '<path id="corner74" data-name="74" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-74" d=""></path>' +
                                      '<path id="corner75" data-name="75" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-75" d=""></path>' +
                                      '<path id="corner76" data-name="76" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-76" d="m 4291,4509 h 544 v 291 h -544 z"></path>' +
                                      '<path id="corner77" data-name="77" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-77" d="m 4866,4239 -79.427,1.1537 L 4788,4099 l -89.9973,0.5587 0.039,285.998 L 4866,4387 Z"></path>' +
                                      '<path id="corner78" data-name="78" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-78" d="M 4786.573,4240.1537 4866,4239 v -153 h -59 l -20.06,-4 -215.8331,1.0246 L 4571.06,4387 4698.0417,4385.5567 4698,4097 l 90,2 z"></path>' +
                                      '<path id="corner79" data-name="79" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-79" d="m 4571.1069,4083.0246 295.2032,-3.8109 L 4866,3801 h -296 z"></path>' +
                                      '<path id="corner80" data-name="80" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-80" d="m 4570,3679 h 282 v -448 h -282 z"></path>' +
                                      '<path id="corner81" data-name="81" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-81" d="m 4401.9586,3133.2147 0.051,-258.7947 h 465 l -0.7,259.38 z"></path>' +
                                      '<path id="corner82" data-name="82" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-82" d="m 4860,2641 -80.74,2.352 L 4779,2440 l -90.1181,0.2086 0.8292,303.4714 L 4860,2743 Z"></path>' +
                                      '<path id="corner83" data-name="83" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-83" d="m 4860,2641 -80.74,2.352 L 4779,2440 l -90.1181,0.2086 0.8292,303.4714 L 4556,2743 v -323 l 223,1 17,10 h 64 z"></path>' +
                                      '<path id="corner84" data-name="84" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-84" d="m 4556,2420 v -249 l 304.5174,1.3909 -0.8292,247.9179 z"></path>' +
                                      '<path id="corner85" data-name="85" transform="translate(0)" class="food-corner tooltipsteredPopup" data-tooltip-content="#corner-85" d="m 4556,2171 304.5174,1.3909 L 4860,1864 h -304 z"></path>' +
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

$$('#home').on('click', '.favorites', function (e) {
  if ($$(this).hasClass('active')) {
    $$(this).removeClass('active');
  } else {
    $$(this).addClass('active');
  }
});
$$('#home').on('click', '.star-favorites', function (e) {
  if ($$(this).hasClass('active')) {
    $$(this).removeClass('active');
  } else {
    $$(this).addClass('active');
  }
});



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
