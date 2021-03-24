// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  precompileTemplates: true,
  view: {
    pushState: true,
    // unloadTabContent: false,
  },
  // App root data
  data: function () {
    return {
      cards: [],
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
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
      ],
      restDetails: [
        {
      id: 1,
            colorBg: 'purple-bg',
            picture: './img/news-block-1.png',
            logo: './img/buffalo-wild-wings-logo-1.png',
            titleStrong: 'Шотландская ',
            titleLight: 'кухня',
            article: 'Пейте по крайней мере два литра воды в день, хорошо, мы знаем, это очень важно. Но вы всегда можете пить только воду: есть бесконечный мир напитков и почти всегда, от фруктового сока до Негрони, есть только одна общая нить, чтобы связать их: дружелюбие. Вы когда-нибудь видели телевизионную рекламу напитка, алкогольного или иного, в котором кто-то пьет в одиночку? В этом случае напиток становится оправданием для общения. Только писатели одни ищут словав середине ночи (может быть, есть кошка, чтобы держать их в компании), остальные разделяют. Или они одиноки на прилавке, как будто из голливудского сценария, ожидая завоевания. Да, да, но ненадолго. С виски на скалах, коньяком, чтобы установить тон, более подростковой Coca-Cola, настой дзен, пока вы ждете. Вы пьете по вкусу, для удовольствия, но также и для социальной',
            tags: '#шотландская #еда #cидр #крылышки',
            cookPosition:'Шеф: ',
            cookName: 'Андрей Шашков',
            note1: 'Стаж 10 лет',
            note2: 'Специализация - шотландская кухня',
            cookImage: './img/we-cooks-slide-4.png',
            address: 'address 1',
            description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
            menu: [
              {dish: "Пичча нон с бараниной", price: "270 ₽"},
              {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
              {dish: "Пичча нон с бараниной", price: "270 ₽"},
              {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
              {dish: "Пичча нон с бараниной", price: "270 ₽"},
              {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
              {dish: "Самса беби с телятиной ", price: "250 ₽"}
            ],
            slider: [
              {
            id: 1,
                  picture: './img/news-block-1.png',
                  title: 'Пичча нон с бараниной ',
                  price: '300 руб.'
              },
              {
            id: 2,
                  picture: './img/news-detail-banner.png',
                  title: 'Кок-самса с сулугуни и зеленью ',
                  price: '300 руб.'
              },
              {
            id: 3,
                  picture: './img/news-block-1.png',
                  title: 'Пичча нон с бараниной ',
                  price: '300 руб.'
              },
              {
            id: 4,
                  picture: './img/news-detail-banner.png',
                  title: 'Кок-самса с сулугуни и зеленью ',
                  price: '300 руб.'
              }
            ]
        },
        {
      id: 2,
      colorBg: 'purple-bg',
      picture: './img/news-block-1.png',
      logo: './img/buffalo-wild-wings-logo-1.png',
      titleStrong: 'Шотландская ',
      titleLight: 'кухня',
      article: 'Пейте по крайней мере два литра воды в день, хорошо, мы знаем, это очень важно. Но вы всегда можете пить только воду: есть бесконечный мир напитков и почти всегда, от фруктового сока до Негрони, есть только одна общая нить, чтобы связать их: дружелюбие. Вы когда-нибудь видели телевизионную рекламу напитка, алкогольного или иного, в котором кто-то пьет в одиночку? В этом случае напиток становится оправданием для общения. Только писатели одни ищут словав середине ночи (может быть, есть кошка, чтобы держать их в компании), остальные разделяют. Или они одиноки на прилавке, как будто из голливудского сценария, ожидая завоевания. Да, да, но ненадолго. С виски на скалах, коньяком, чтобы установить тон, более подростковой Coca-Cola, настой дзен, пока вы ждете. Вы пьете по вкусу, для удовольствия, но также и для социальной',
      tags: '#шотландская #еда #cидр #крылышки',
      cookPosition:'Шеф: ',
      cookName: 'Андрей Шашков',
      note1: 'Стаж 10 лет',
      note2: 'Специализация - шотландская кухня',
      cookImage: './img/we-cooks-slide-4.png',
      address: 'address 1',
      description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
      menu: [
        {dish: "Пичча нон с бараниной", price: "270 ₽"},
        {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
        {dish: "Пичча нон с бараниной", price: "270 ₽"},
        {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
        {dish: "Пичча нон с бараниной", price: "270 ₽"},
        {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
        {dish: "Самса беби с телятиной ", price: "250 ₽"}
      ],
      slider: [
        {
      id: 1,
            picture: './img/news-block-1.png',
            title: 'Пичча нон с бараниной ',
            price: '300 руб.'
        },
        {
      id: 2,
            picture: './img/news-detail-banner.png',
            title: 'Кок-самса с сулугуни и зеленью ',
            price: '300 руб.'
        },
        {
      id: 3,
            picture: './img/news-block-1.png',
            title: 'Пичча нон с бараниной ',
            price: '300 руб.'
        },
        {
      id: 4,
            picture: './img/news-detail-banner.png',
            title: 'Кок-самса с сулугуни и зеленью ',
            price: '300 руб.'
        }
      ]
  },
        {
      id: 3,
      colorBg: 'purple-bg',
      picture: './img/news-block-1.png',
      logo: './img/buffalo-wild-wings-logo-1.png',
      titleStrong: 'Шотландская ',
      titleLight: 'кухня',
      article: 'Пейте по крайней мере два литра воды в день, хорошо, мы знаем, это очень важно. Но вы всегда можете пить только воду: есть бесконечный мир напитков и почти всегда, от фруктового сока до Негрони, есть только одна общая нить, чтобы связать их: дружелюбие. Вы когда-нибудь видели телевизионную рекламу напитка, алкогольного или иного, в котором кто-то пьет в одиночку? В этом случае напиток становится оправданием для общения. Только писатели одни ищут словав середине ночи (может быть, есть кошка, чтобы держать их в компании), остальные разделяют. Или они одиноки на прилавке, как будто из голливудского сценария, ожидая завоевания. Да, да, но ненадолго. С виски на скалах, коньяком, чтобы установить тон, более подростковой Coca-Cola, настой дзен, пока вы ждете. Вы пьете по вкусу, для удовольствия, но также и для социальной',
      tags: '#шотландская #еда #cидр #крылышки',
      cookPosition:'Шеф: ',
      cookName: 'Андрей Шашков',
      note1: 'Стаж 10 лет',
      note2: 'Специализация - шотландская кухня',
      cookImage: './img/we-cooks-slide-4.png',
      address: 'address 1',
      description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
      menu: [
        {dish: "Пичча нон с бараниной", price: "270 ₽"},
        {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
        {dish: "Пичча нон с бараниной", price: "270 ₽"},
        {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
        {dish: "Пичча нон с бараниной", price: "270 ₽"},
        {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
        {dish: "Самса беби с телятиной ", price: "250 ₽"}
      ],
      slider: [
        {
      id: 1,
            picture: './img/news-block-1.png',
            title: 'Пичча нон с бараниной ',
            price: '300 руб.'
        },
        {
      id: 2,
            picture: './img/news-detail-banner.png',
            title: 'Кок-самса с сулугуни и зеленью ',
            price: '300 руб.'
        },
        {
      id: 3,
            picture: './img/news-block-1.png',
            title: 'Пичча нон с бараниной ',
            price: '300 руб.'
        },
        {
      id: 4,
            picture: './img/news-detail-banner.png',
            title: 'Кок-самса с сулугуни и зеленью ',
            price: '300 руб.'
        }
      ]
  },
        {
      id: 4,
      colorBg: 'purple-bg',
      picture: './img/news-block-1.png',
      logo: './img/buffalo-wild-wings-logo-1.png',
      titleStrong: 'Шотландская ',
      titleLight: 'кухня',
      article: 'Пейте по крайней мере два литра воды в день, хорошо, мы знаем, это очень важно. Но вы всегда можете пить только воду: есть бесконечный мир напитков и почти всегда, от фруктового сока до Негрони, есть только одна общая нить, чтобы связать их: дружелюбие. Вы когда-нибудь видели телевизионную рекламу напитка, алкогольного или иного, в котором кто-то пьет в одиночку? В этом случае напиток становится оправданием для общения. Только писатели одни ищут словав середине ночи (может быть, есть кошка, чтобы держать их в компании), остальные разделяют. Или они одиноки на прилавке, как будто из голливудского сценария, ожидая завоевания. Да, да, но ненадолго. С виски на скалах, коньяком, чтобы установить тон, более подростковой Coca-Cola, настой дзен, пока вы ждете. Вы пьете по вкусу, для удовольствия, но также и для социальной',
      tags: '#шотландская #еда #cидр #крылышки',
      cookPosition:'Шеф: ',
      cookName: 'Андрей Шашков',
      note1: 'Стаж 10 лет',
      note2: 'Специализация - шотландская кухня',
      cookImage: './img/we-cooks-slide-4.png',
      address: 'address 1',
      description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
      menu: [
        {dish: "Пичча нон с бараниной", price: "270 ₽"},
        {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
        {dish: "Пичча нон с бараниной", price: "270 ₽"},
        {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
        {dish: "Пичча нон с бараниной", price: "270 ₽"},
        {dish: "Кок-самса с сулугуни и зеленью", price: "230 ₽"},
        {dish: "Самса беби с телятиной ", price: "250 ₽"}
      ],
      slider: [
        {
      id: 1,
            picture: './img/news-block-1.png',
            title: 'Пичча нон с бараниной ',
            price: '300 руб.'
        },
        {
      id: 2,
            picture: './img/news-detail-banner.png',
            title: 'Кок-самса с сулугуни и зеленью ',
            price: '300 руб.'
        },
        {
      id: 3,
            picture: './img/news-block-1.png',
            title: 'Пичча нон с бараниной ',
            price: '300 руб.'
        },
        {
      id: 4,
            picture: './img/news-detail-banner.png',
            title: 'Кок-самса с сулугуни и зеленью ',
            price: '300 руб.'
        }
      ]
  },
      ],
      menuItems: [
        {
      id: 1,
            picture: './img/news-block-1.png',
            title: 'Пичча нон с бараниной ',
            price: '300 руб.'
        },
        {
      id: 2,
            picture: './img/news-detail-banner.png',
            title: 'Кок-самса с сулугуни и зеленью ',
            price: '300 руб.'
        },
        {
      id: 3,
            picture: './img/news-block-1.png',
            title: 'Пичча нон с бараниной ',
            price: '300 руб.'
        },
        {
      id: 4,
            picture: './img/news-detail-banner.png',
            title: 'Кок-самса с сулугуни и зеленью ',
            price: '300 руб.'
        }
      ]
    };
  },
  ready: function() {
    this.getCards();
  },
  // App root methods
  methods: {
      getCards: function() {
        app.request.json('http://localhost:8080/db.json').success(function(res){console.log(res)})
    },
  },
  // App routes
  routes: routes,
});



var mainView = app.views.create('.view-main', {
    url: '/'
});
// var mainView = app.views.create('.view-main');
// app.router.navigate('/', { animate: false});
// function takeJson() {
//   app.request.json('http://localhost:8080/db.json', function (data) {
//     console.log(data);
//     var fa = data
//     console.log(fa);
//     return fa;
//   });
// }


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

var restItems = [
  {
id: 1,
      colorBg: 'purple-bg',
      picture: './img/news-block-1.png',
      logo: './img/buffalo-wild-wings-logo-1.png',
      title: 'Item 1',
      note: 'note 1',
      address: 'address 1'
  },
  {
id: 2,
      colorBg: 'yellow-bg',
      picture: './img/news-detail-banner.png',
      logo: './img/buffalo-wild-wings-logo-1.png',
      title: 'Item 2',
      note: 'note 2',
      address: 'address 2'
  },
  {
id: 3,
      colorBg: 'purple-bg',
      picture: './img/news-block-1.png',
      logo: './img/buffalo-wild-wings-logo-1.png',
      title: 'Item 1',
      note: 'note 1',
      address: 'address 1'
  },
  {
id: 4,
      colorBg: 'yellow-bg',
      picture: './img/news-detail-banner.png',
      logo: './img/buffalo-wild-wings-logo-1.png',
      title: 'Item 2',
      note: 'note 2',
      address: 'address 2'
  }
];

var schoolItems = [
    {
  id: 1,
        picture: './img/we-cooks-slide-1.png',
        string1: 'Летнее меню',
        string2: 'Сергей Лужников',
        data: '06.09'
    },
    {
  id: 2,
        picture: './img/we-cooks-slide-2.png',
        string1: 'Летнее меню',
        string2: 'Сергей Лужников',
        data: '13.09'
    },
    {
  id: 3,
        picture: './img/we-cooks-slide-3.png',
        string1: 'Блюдо для детской кухни',
        string2: 'Анастасия Матюшенко',
        data: '26.09'
    },
    {
  id: 4,
        picture: './img/we-cooks-slide-4.png',
        string1: 'Летнее меню',
        string2: 'Сергей Лужников',
        data: '06.07'
    },
    {
  id: 5,
        picture: './img/we-cooks-slide-5.png',
        string1: 'Блюдо для детской кухни',
        string2: 'Анастасия Матюшенко',
        data: '06.09'
    },
];

var menuItems = [
  {
id: 1,
      picture: './img/news-block-1.png',
      title: 'Пичча нон с бараниной ',
      price: '300 руб.'
  },
  {
id: 2,
      picture: './img/news-detail-banner.png',
      title: 'Кок-самса с сулугуни и зеленью ',
      price: '300 руб.'
  },
  {
id: 3,
      picture: './img/news-block-1.png',
      title: 'Пичча нон с бараниной ',
      price: '300 руб.'
  },
  {
id: 4,
      picture: './img/news-detail-banner.png',
      title: 'Кок-самса с сулугуни и зеленью ',
      price: '300 руб.'
  }
];

// app.request.get('http://localhost:8080/db.json', { username:'foo', password: 'bar' }, function (data) {
//   $$('.login').html(data);
//   console.log(data);
// });



  // app.request.json('http://localhost:8080/db.json', function (data) {
  // let menuItems = { data: menuItems }
  // console.log(menuItems);
  // });



$$("#main").on("tab:mounted", function(){

});

// var template = $$('#template').html();
//
// var compiledTemplate = Template7.compile(template);
//
// var context = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// var html = compiledTemplate(context);


function changeToolbarLight() {
      $$('.light-tab-theme').each(function() {
    if ($$(this).hasClass('tab-link-active')) {
      $$(this).parents('.toolbar-container').addClass('add-light-theme');
    }
    });
}
function changeToolbarDark() {
      $$('.dark-tab-theme').each(function() {
    if ($$(this).hasClass('tab-link-active')) {
      $$(this).parents('.toolbar-container').removeClass('add-light-theme');
    }
    });
}


//Рестораны виртуальный список
function restListStart() {
  var restList = app.virtualList.create({
      el: '.rest-list',
      items: restItems,
  	itemTemplate:
    '<li class="block__item block__item-rest">' +
        '<a href="/product/{{id}}/" class="{{colorBg}}">' +
            '<div class="block-image_large">' +
                '<img src="{{picture}}" alt="">' +
            '</div>' +
            '<div class="block-context-wrap">' +
                '<div class="block-context__logo">' +
                    '<img src="{{logo}}" alt="">' +
                '</div>' +
                '<div class="block-context__info circe">' +
                    '<span class="block-context-title white-color">{{title}}</span>' +
                    '<span class="block-context-note white-color">{{note}}</span>' +
                    '<span class="block-context-address white-color">{{address}}</span>' +
                '</div>' +
            '</div>' +
        '</li>',
        height: function () {
          var arr = Object.keys(this.items).length
          var height = 194 / arr;
          return height;
        },
        routes: routes,
  });
}

//Мастер-классы виртуальный список
function schoolListStart() {
var schoolList = app.virtualList.create({
    el: '.school-list',
    items: schoolItems,
	itemTemplate:
  '<li class="block__item block__item-event">' +
    '<a href="/rest-detail/{{id}}/">' +
        '<div class="block-image">' +
            '<img src="{{picture}}" alt="">' +
        '</div>' +
        '<div class="block-context circe">' +
            '<span class="block-context-text white-color">{{string1}}</span>' +
            '<span class="block-context-text white-color">{{string2}}</span>' +
            '<span class="block-context-large white-color">{{data}}</span>' +
        '</div>' +
    '</a>' +
  '</li>',
  height: function () {
    var arr = Object.keys(this.items).length;
    var height = 194 / arr;
    return height;
  }
});
}
