// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  touch: {
    // Disable fast clicks
    fastClicks: false,
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
  // App root methods
  methods: {
    helloWorld: function() {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  on: {
    init: function() {
      // console.log('App initialized')
    },
    pageInit: function() {
      // contentShow();
      //   changeToolbarLight();
      //   changeToolbarDark();
      //   changeNavbarLight();
      //   changeNavbarDark();
      //   console.log('Page initialized')
    },
    tabShow: function() {

    },
  }
});



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
      console.log('kyky');
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
var marketsView = app.views.create('#markets', {
  stackPages: true,
  // pushState: true,
  // pushStateRoot: location.href.split(location.host)[1].split("#page")[0],
  // pushStateSeparator: '#page',
  // pushStateOnLoad: false,
  mdSwipeBack: true,
  url: '/news/'
});
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
  url: '/lk-main/'
});

$$('.tab-link').on('click', function() {
  var url = document.location.href;
  var currentMainView = $$('.view-main');
  // console.log(currentMainView);
  var newMainViewLink = $$(this).attr('href');
  // console.log(newMainViewLink);
  var newMainViewSelector = $$(newMainViewLink);
  // console.log(newMainViewSelector);
  currentMainView.removeClass('view-main');
  newMainViewSelector.addClass('view-main');
});


function infoTest() {
  var name = this.requestUrl;
}

$$('#map').on('tab:show', function() {
  var lastEventListener = null;

  function createNewMap(src) {
    var svg = document.getElementById('map-full');
    document.getElementById('mobile-div').appendChild(svg);

    lastEventListener = function() {
      var eventsHandler;
      var beforePan;
      beforePan = function(oldPan, newPan) {
        var stopHorizontal = false,
          stopVertical = false,
          gutterWidth = (zoomMap.getSizes().width),
          gutterHeight = (zoomMap.getSizes().height),
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
        haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
        init: function(options) {
          var instance = options.instance,
            initialScale = 1,
            pannedX = 0,
            pannedY = 0;

          this.hammer = Hammer(options.svgElement, {
            inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
          });

          this.hammer.get('pinch').set({
            enable: true
          });

          this.hammer.on('doubletap', function(ev) {
            instance.zoomIn();
          });

          this.hammer.on('panstart panmove', function(ev) {
            if (ev.type === 'panstart') {
              pannedX = 0;
              pannedY = 0;
            }

            instance.panBy({
              x: ev.deltaX - pannedX,
              y: ev.deltaY - pannedY
            });
            pannedX = ev.deltaX;
            pannedY = ev.deltaY;
          });

          this.hammer.on('pinchstart pinchmove', function(ev) {
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

          options.svgElement.addEventListener('touchmove', function(e) {
            e.preventDefault();
          });
        },

        destroy: function() {
          this.hammer.destroy();
        }
      };

      zoomMap = svgPanZoom(svg, {
        zoomEnabled: true,
        minZoom: 1,
        fit: false,
        contain: true,
        controlIconsEnabled: false,
        customEventsHandler: eventsHandler,
        beforePan: beforePan,
      });
      document.getElementById('zoom-in').addEventListener('click', function(ev) {
        ev.preventDefault();

        zoomMap.zoomIn();
      });

      document.getElementById('zoom-out').addEventListener('click', function(ev) {
        ev.preventDefault();

        zoomMap.zoomOut();
      });

      document.getElementById('reset').addEventListener('click', function(ev) {
        ev.preventDefault();
        zoomMap.center();
        zoomMap.resetZoom();
      });
    }
    svg.addEventListener('load', lastEventListener)
    return svg
  }

  var lastEmbedSrc = 'img/map-svg-1.svg',
    lastMap = createNewMap(lastEmbedSrc);

  function removeEmbed() {
    svgPanZoom(lastEmbed).destroy()
    lastEmbed.removeEventListener('load', lastEventListener)
    lastEventListener = null
    document.getElementById('container').removeChild(lastEmbed)
    lastEmbed = null
  }

  function clickCorner() {
    var object = document.getElementById("map-full");
    var svgDocument = object.contentDocument;
    var corner = svgDocument.getElementsByClassName("food-corner");
    var gMap = svgDocument.getElementsByClassName("svg-pan-zoom_viewport");
    var tooltipstered = svgDocument.getElementsByClassName("tooltipstered");
    console.log(corner);
  }

  var a = document.getElementById("map-full");
  a.addEventListener("load", function() {
    var svgDoc = a.contentDocument; //get the inner DOM of alpha.svg
    var svgRoot = svgDoc.documentElement;
    var dynamicPopover = app.popover.create({
      targetEl: '.dynamic-popover',
      content: '<div class="popover">'+
                  '<div class="popover-inner">'+
                    '<div class="block">'+
                      '<p>Popover created dynamically.</p>'+
                      '<p><a href="#" class="link popover-close">Close me</a></p>'+
                    '</div>'+
                  '</div>'+
                '</div>',
      // Events
      on: {
        open: function (popover) {
            console.log(this);
          console.log('Popover open');
        },
        opened: function (popover) {
          console.log('Popover opened');
        },
      }
    });
    // Events also can be assigned on instance later
    dynamicPopover.on('close', function (popover) {
      console.log('Popover close');
    });
    dynamicPopover.on('closed', function (popover) {
      console.log('Popover closed');
    });

    // Open dynamic popover
    $(svgRoot).on('click', '.dynamic-popover', function(e) {
        var self = this;
        var cornerId = self.id;
        console.log('cornerId ' + cornerId);
        console.log('this ' + self.id);
      dynamicPopover.open();
    });

  }, false);
});



// $$('#map').once('tab:hide', function() {
//     $$('.page[data-name="map"]').remove();
//     console.log('remove');
// });

// $$('#map').on('tab:show', function() {
//   var eventsHandler;
//   var beforePan;
//
// beforePan = function(oldPan, newPan) {
//     var stopHorizontal = false,
//         stopVertical = false,
//         gutterWidth = (zoomMap.getSizes().width),
//         gutterHeight = (zoomMap.getSizes().height),
//
//         // gutterWidth = 320,
//         // gutterHeight = 320,
//         // Computed variables
//         sizes = this.getSizes(),
//         leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth,
//         rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom),
//         topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight,
//         bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom);
//
//     customPan = {};
//     customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
//     customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));
//
//     return customPan;
// };
//
// eventsHandler = {
//     haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
//     init: function(options) {
//         var instance = options.instance,
//             initialScale = 1,
//             pannedX = 0,
//             pannedY = 0;
//
//         // Init Hammer
//         // Listen only for pointer and touch events
//         this.hammer = Hammer(options.svgElement, {
//             inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
//         });
//
//         // Enable pinch
//         this.hammer.get('pinch').set({ enable: true });
//
//         // Handle double tap
//         this.hammer.on('doubletap', function(ev) {
//             instance.zoomIn();
//         });
//
//         // Handle pan
//         this.hammer.on('panstart panmove', function(ev) {
//             // On pan start reset panned variables
//             if (ev.type === 'panstart') {
//                 pannedX = 0;
//                 pannedY = 0;
//             }
//
//             // Pan only the difference
//             instance.panBy({ x: ev.deltaX - pannedX, y: ev.deltaY - pannedY });
//             pannedX = ev.deltaX;
//             pannedY = ev.deltaY;
//         });
//
//         // Handle pinch
//         this.hammer.on('pinchstart pinchmove', function(ev) {
//             // On pinch start remember initial zoom
//             if (ev.type === 'pinchstart') {
//                 initialScale = instance.getZoom();
//                 instance.zoomAtPoint(initialScale * ev.scale, { x: ev.center.x, y: ev.center.y });
//             }
//
//             instance.zoomAtPoint(initialScale * ev.scale, { x: ev.center.x, y: ev.center.y });
//         });
//
//         // Prevent moving the page on some devices when panning over SVG
//         options.svgElement.addEventListener('touchmove', function(e) { e.preventDefault(); });
//     },
//
//     destroy: function() {
//         this.hammer.destroy();
//     }
// };
//   eventsHandler = {
//     haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
//     init: function(options) {
//       var instance = options.instance,
//         initialScale = 1,
//         pannedX = 0,
//         pannedY = 0;
//
//       this.hammer = Hammer(options.svgElement, {
//         inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
//       });
//       this.hammer.get('pinch').set({
//         enable: true
//       });
//       this.hammer.on('doubletap', function(ev) {
//         instance.zoomIn();
//       });
//       this.hammer.on('panstart panmove', function(ev) {
//         if (ev.type === 'panstart') {
//           pannedX = 0;
//           pannedY = 0;
//         }
//         instance.panBy({
//           x: ev.deltaX - pannedX,
//           y: ev.deltaY - pannedY
//         });
//         pannedX = ev.deltaX;
//         pannedY = ev.deltaY;
//       });
//       this.hammer.on('pinchstart pinchmove', function(ev) {
//         if (ev.type === 'pinchstart') {
//           initialScale = instance.getZoom();
//           instance.zoomAtPoint(initialScale * ev.scale, {
//             x: ev.center.x,
//             y: ev.center.y
//           });
//         }
//         instance.zoomAtPoint(initialScale * ev.scale, {
//           x: ev.center.x,
//           y: ev.center.y
//         });
//       });
//       options.svgElement.addEventListener('touchmove', function(e) {
//         e.preventDefault();
//       });
//     },
//     destroy: function() {
//       this.hammer.destroy();
//     }
//   };
//   var zoomMap = svgPanZoom('#svg7368', {
//     zoomEnabled: true,
//     minZoom: 1,
//     fit: false,
//     contain: true,
//     customEventsHandler: eventsHandler,
//     beforePan: beforePan,
//     controlIconsEnabled: false
//   });
//
//   document.getElementById('zoom-in').addEventListener('click', function(ev) {
//             ev.preventDefault();
//
//             zoomMap.zoomIn();
//         });
//
//         document.getElementById('zoom-out').addEventListener('click', function(ev) {
//             ev.preventDefault();
//
//             zoomMap.zoomOut();
//         });
//
//         document.getElementById('reset').addEventListener('click', function(ev) {
//             ev.preventDefault();
//             zoomMap.center();
//             zoomMap.resetZoom();
//         });
//         $$('.food-corner').click(function() {
//             console.log('kva');
//         })
// });

// всплывающие окна при заходе на страницу
$$('#home').once('page:mounted', '.page[data-name="discountDetail"]', function() {
  app.sheet.create({
    el: '.discount-sheet',
    backdrop: app.device.ios === true ? true : true,
    closeByOutsideClick: true,
  });
  app.sheet.open('.discount-sheet', true);
});

$$('#home').once('page:mounted', '.page[data-name="childsDetail"]', function() {
  app.sheet.create({
    el: '.discount-sheet',
    backdrop: app.device.ios === true ? true : true,
    closeByOutsideClick: true,
  });
  app.sheet.open('.discount-sheet', true);
});


var calendarModal = app.calendar.create({
  inputEl: '#calendar-modal',
  openIn: 'customModal',
  header: true,
  footer: true,
  dateFormat: 'MM dd yyyy',
});

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
  console.log('clicked');
  app.tab.show('#rest')
});
// on: {
//     tabMounted: function () {
//       changeToolbarLight();
//       changeToolbarDark();
//       changeNavbarLight();
//       changeNavbarDark();
//     },
//   },

$$('#markets').on('tab:show', function() {
  $$('.toolbar-container').addClass('add-light-theme');
});
$$('#map').on('tab:show', function() {
  $$('.toolbar-container').addClass('add-light-theme');
});
$$('#lk-main').on('tab:show', function() {
  $$('.toolbar-container').addClass('add-light-theme');
});
$$('#rest').on('tab:show', function() {
  $$('.toolbar-container').addClass('add-light-theme');
});
$$('#home').on('tab:show', function() {
  $$('.toolbar-container').removeClass('add-light-theme');
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
