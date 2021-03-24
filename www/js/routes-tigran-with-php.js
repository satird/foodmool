routes = [{
    path: '/',
    // componentUrl: './pages/home.html',
    componentUrl: 'https://depomoscow.ru/app/pages/home.php',
    on: {
      pageMounted: function (e, page) {
        // console.log(infoTest());
      },
    },
  },
  {
    path: '/rest/',
    // componentUrl: './pages/rest.html',
    componentUrl: './pages/rest.php',
  },
  {
    path: '/markets/',
    componentUrl: './pages/markets.html',
  },
  {
    path: '/map/',
    componentUrl: './pages/map.html',
  },
  {
    path: '/product/:id/',
    componentUrl: './pages/product.html',
  },
  {
    path: '/settings/',
    url: './pages/settings.html',
  },
  {
    path: '/news/',
    // componentUrl: './pages/news.html',
    componentUrl: './pages/news.php',
  },
  // Page Loaders & Router
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/catalog/',
    componentUrl: './pages/catalog.html',
  },
  {
    path: '/discounts/',
    // componentUrl: './pages/discounts.html',
    componentUrl: './pages/discounts.php',
  },
  {
    path: '/childs/',
    // componentUrl: './pages/childs.html',
    componentUrl: './pages/childs.php',
  },
  {
    path: '/events/',
    // componentUrl: './pages/events.html',
    componentUrl: './pages/events.php',
  },
  {
    path: '/discount-detail/:id/',
    // componentUrl: './pages/discount-detail.html',
    componentUrl: './pages/events.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
  },
  {
    path: '/childs-detail/:id/',
    componentUrl: './pages/childs-detail.html',
  },
  {
    path: '/news-detail/:id/',
    // componentUrl: './pages/news-detail.html',
    componentUrl: './pages/news-detail.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
  },
  {
    path: '/event-detail/:id/',
    // componentUrl: './pages/event-detail.html',
    componentUrl: './pages/event-detail.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
  },
  {
    path: '/rest-category/:id/',
    // componentUrl: './pages/rest-category.html',
    componentUrl: './pages/rest-category.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
  },
  {
    path: '/rest-detail/:id/',
    name: 'restDetail',
    componentUrl: './pages/rest-detail.php?id={{id}}',
    options: {
      context: {
        id: '{{id}}',
      },
    },
    on: {
      pageMounted: function (e, page) {
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
  {
    path: '/form-send/',
    componentUrl: './pages/form-send.html',
  },
  {
    path: '/login-screen/',
    componentUrl: './pages/login-screen.html',
  },
  {
    path: '/login-screen-2/',
    componentUrl: './pages/login-screen-2.html',
  },
  {
   path: '/secured-page/',
   async: function(routeTo, routeFrom, resolve, reject) {
     if (false) {
       resolve({
        componentUrl: './pages/lk/lk-main.html',
       });
     } else {
       resolve({
           componentUrl: './pages/login-screen.html',
       });
     }
   },
},
  {
    path: '/lk-main/',
    componentUrl: './pages/lk/lk-main.html',
    options: {
        context: {
          username: localStorage.getItem('username'),
		  // telNumber: JSON.parse(window.localStorage['telNumber']),
          // email: JSON.parse(window.localStorage['email']),
          // date: JSON.parse(window.localStorage['date']),
          // password: JSON.parse(window.localStorage['password']),
          // passwordRepeat: JSON.parse(window.localStorage['passwordRepeat'])
        },
     }
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
    componentUrl: './pages/lk/lk-data.html',
  },
  {
    path: '/lk-address/',
    componentUrl: './pages/lk/lk-address.html',
  },
  {
    path: '/lk-delivery/',
    componentUrl: './pages/lk/lk-delivery.html',
  },
  {
    path: '/lk-promo/',
    componentUrl: './pages/lk/lk-promo.html',
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
