routes = [{
  path: '/',
  // componentUrl: './pages/home.html',
  componentUrl: 'https://depomoscow.ru/app/pages/home.php',
  on: {
    pageMounted: function (e, page) {
      StatusBar.styleLightContent();
      // console.log(infoTest())
    },
    // pageBeforeOut: function (e, page) {
    //   StatusBar.styleDefault();
    // },
    pageAfterIn: function () {
      StatusBar.styleLightContent();

    }
  }
},
  {
    path: '/rest/',
    // componentUrl: './pages/rest.html',
    componentUrl: 'https://depomoscow.ru/app/pages/rest.php',
  },
  {
        path: '/rest-category/:id/',
        componentUrl: 'https://depomoscow.ru/app/pages/rest-category.php?id={{id}}',
        options: {
            context: {
                id: '{{id}}',
            },
        },
    },
  {
    path: '/markets/',
    name: 'markets',
    componentUrl: 'https://depomoscow.ru/app/pages/markets.html',
  },
  {
    path: '/markets-detail/:id/',
    componentUrl: 'https://depomoscow.ru/app/pages/markets-detail.html',
  },
  {
    path: '/info/',
    componentUrl: 'https://depomoscow.ru/app/pages/info.html',
  },
  {
    path: '/map/',
    componentUrl: './pages/map.html',
  },
  {
    path: '/qr/',
    componentUrl: './pages/qr.html',
  },
  // {
  //   path: '/product/:id/',
  //   componentUrl: './pages/product.html',
  // },
  // {
  //   path: '/settings/',
  //   url: './pages/settings.html',
  // },
  {
    path: '/news/',
    // componentUrl: './pages/news.html',
    componentUrl: 'https://depomoscow.ru/app/pages/news.php',
  },
  // Page Loaders & Router
  // {
  //   path: '/about/',
  //   url: './pages/about.html',
  // },
  // {
  //   path: '/catalog/',
  //   componentUrl: './pages/catalog.html',
  // },
  {
    path: '/discounts/',
    // componentUrl: './pages/discounts.html',
    componentUrl: 'https://depomoscow.ru/app/pages/discounts.php',
  },
  {
    path: '/childs/',
    // componentUrl: './pages/childs.html',
    componentUrl: 'https://depomoscow.ru/app/pages/childs.php',
  },
  {
    path: '/events/',
    // componentUrl: './pages/events.html',
    componentUrl: 'https://depomoscow.ru/app/pages/events.php',
  },
  {
    path: '/discount-detail/:id/',
    // componentUrl: './pages/discount-detail.html',
    componentUrl: 'https://depomoscow.ru/app/pages/discount-detail.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
  },
  {
    path: '/childs-detail/:id/',
    componentUrl: 'https://depomoscow.ru/app/pages/childs-detail.html',
  },
  {
    path: '/news-detail/:id/',
    // componentUrl: './pages/news-detail.html',
    componentUrl: 'https://depomoscow.ru/app/pages/news-detail.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
  },
  {
    path: '/event-detail/:id/',
    // componentUrl: './pages/event-detail.html',
    componentUrl: 'https://depomoscow.ru/app/pages/event-detail.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
  },
  {
    path: '/rest-category/:id/',
    // componentUrl: './pages/rest-category.html',
    componentUrl: 'https://depomoscow.ru/app/pages/rest-category.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
  },
  {
    path: '/rest-detail/:id/',
    name: 'restDetail',
    // componentUrl: './pages/rest-detail.html',
    componentUrl: 'https://depomoscow.ru/app/pages/rest-detail.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
    on: {
      pageMounted: function (e, page) {
        StatusBar.styleDefault();
        console.log('page mounted');
      },
      pageInit: function (e, page) {
        console.log(this.username); // -> 'johndoe'
      },
      pageBeforeIn: function (e, page) {
        console.log('page before in');
      },
      pageAfterIn: function (e, page) {
        console.log('page after in');
      },
      pageBeforeOut: function (e, page) {
        console.log('page before out');
      },
      pageAfterOut: function (e, page) {
        console.log('page after out');
      },
      pageBeforeUnmount: function (e, page) {
        console.log('page before unmount');
      },
      pageBeforeRemove: function (e, page) {
        console.log('page before remove');
      }
    },
  },
  // {
  //   path: '/form-send/',
  //   name: 'formSend',
  //   componentUrl: './pages/form-send.html',
  // },
  {
    path: '/login-screen/',
    name: 'loginScreen',
    componentUrl: 'https://depomoscow.ru/app/pages/login-screen.php',
  },
  {
    path: '/login-screen-2/',
    name: 'loginScreen2',
    componentUrl: 'https://depomoscow.ru/app/pages/login-screen-2.php',
  },
  {
   path: '/secured-page/',
   name: 'securedPage',
   async: function (routeTo, routeFrom, resolve, reject) {
     if (false) {
       resolve({
        componentUrl: 'https://depomoscow.ru/app/pages/lk/lk-main.html',
       });
     } else {
       resolve({
           componentUrl: 'https://depomoscow.ru/app/pages/login-screen.php',
       });
     }
   },
},
  {
    path: '/lk-main/',
    name: 'lkMain',
    componentUrl: 'https://depomoscow.ru/app/pages/lk/lk-main.php',
    // options: {
    //     context: {
    //       username: localStorage.getItem('username'),
		  // // telNumber: JSON.parse(window.localStorage['telNumber']),
    //       // email: JSON.parse(window.localStorage['email']),
    //       // date: JSON.parse(window.localStorage['date']),
    //       // password: JSON.parse(window.localStorage['password']),
    //       // passwordRepeat: JSON.parse(window.localStorage['passwordRepeat'])
    //     },
    //  }
  },
//   {
//   path:'/check/',
//   redirect:function(route,resolve,reject){
//     resolve(sessionStorage.length?'/lk-main/':'/login-screen/');
//   }
// },
// {
//   path:'/lk-main/',
//   async(routeTo, routeFrom, resole, reject) {
//       console.log(sessionStorage);
//     if (sessionStorage.length) {
//       resolve({componentUrl: './pages/lk/lk-main.html'})
//     } else {
//       resolve({componentUrl: './pages/login-screen.html'})
//     }
//   }
// },
// {
//     path: '/lk-main/',
//     componentUrl: './pages/lk/lk-main.html',
//     beforeEnter: function(routeTo, routeFrom, resolve, reject){
//         // if(localStorage.getItem('islogin') == null){
//         if (sessionStorage.length) {
//             console.log('warning');
//             app.loginScreen.open('#my-login-screen');
//         } resolve();
//     }
// },
  {
    path: '/lk-data/',
    name: 'lkData',
    componentUrl: 'https://depomoscow.ru/app/pages/lk/lk-data.php',
  },
  {
    path: '/lk-favorites/',
    name: 'lkFavorites',
    componentUrl: 'https://depomoscow.ru/app/pages/lk/lk-favorites.html',
  },
  {
    path: '/lk-notification/',
    name: 'lkNotification',
    componentUrl: 'https://depomoscow.ru/app/pages/lk/lk-notification.html',
  },
  {
    path: '/lk-envelope/',
    name: 'lkEnvelope',
    componentUrl: 'https://depomoscow.ru/app/pages/lk/lk-envelope.html',
  },
  {
    path: '(.*)',
    name: 'error',
    url: './pages/404.html',
  },
];
