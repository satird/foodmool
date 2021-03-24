// Dom7
var $$ = Dom7;

var app  = new Framework7({
  root: '#app',
  id: 'io.framework7.testapp',
  name: 'Framework7',
  theme: 'ios',
  precompileTemplates: true,
  view: {
    pushState: true,
  },
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
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
      ],
      restItems: [
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
      ],
      schoolItems: [
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
      ],
      marketItems: [
        {
      id: 1,
            picture: './img/news-block-1.png',
            logo: './img/buffalo-wild-wings-logo-1.png',
            title: 'Item 1',
            note: 'note 1',
            address: 'address 1'
        },
        {
      id: 2,
            picture: './img/news-detail-banner.png',
            logo: './img/buffalo-wild-wings-logo-1.png',
            title: 'Item 2',
            note: 'note 2',
            address: 'address 2'
        },
        {
      id: 3,
            picture: './img/news-block-1.png',
            logo: './img/buffalo-wild-wings-logo-1.png',
            title: 'Item 1',
            note: 'note 1',
            address: 'address 1'
        },
        {
      id: 4,
            picture: './img/news-detail-banner.png',
            logo: './img/buffalo-wild-wings-logo-1.png',
            title: 'Item 2',
            note: 'note 2',
            address: 'address 2'
        }
      ],
      eventItems: [
          {
        id: 1,
              picture: './img/event-item-1.png',
              string1: 'Летнее меню',
              string2: 'Сергей Лужников',
              data: '06.09'
          },
          {
        id: 2,
              picture: './img/event-1.png',
              string1: 'Летнее меню',
              string2: 'Сергей Лужников',
              data: '13.09'
          },
          {
        id: 3,
              picture: './img/event-item-2.png',
              string1: 'Блюдо для детской кухни',
              string2: 'Анастасия Матюшенко',
              data: '26.09'
          },
          {
        id: 4,
              picture: './img/devilary-top-slider.png',
              string1: 'Летнее меню',
              string2: 'Сергей Лужников',
              data: '06.07'
          },
          {
        id: 5,
              picture: './img/concept-slide-1.png',
              string1: 'Блюдо для детской кухни',
              string2: 'Анастасия Матюшенко',
              data: '06.09'
          },
      ],
      discountItems: [
          {
        id: 1,
              picture: './img/event-item-1.png',
              title: 'Летнее меню',
              note: 'Сергей Лужников',
              before: 'до',
              data: '06.09'
          },
          {
        id: 2,
              picture: './img/event-1.png',
              title: 'Летнее меню',
              note: 'Сергей Лужников',
              before: 'до',
              data: '13.09'
          },
          {
        id: 3,
              picture: './img/event-item-2.png',
              title: 'Летнее меню',
              note: 'Сергей Лужников',
              before: 'до',
              data: '26.09'
          },
          {
        id: 4,
              picture: './img/devilary-top-slider.png',
              title: 'Летнее меню',
              note: 'Сергей Лужников',
              before: 'до',
              data: '06.07'
          },
          {
        id: 5,
              picture: './img/concept-slide-1.png',
              title: 'Летнее меню',
              note: 'Сергей Лужников',
              before: 'до',
              data: '06.09'
          },
      ],
      newsItems: [
          {
        id: 1,
              picture: './img/event-item-1.png',
              string1: 'Летнее меню',
              address: '06.09'
          },
          {
        id: 2,
              picture: './img/event-1.png',
              string1: 'Летнее меню',
              address: '13.09'
          },
          {
        id: 3,
              picture: './img/event-item-2.png',
              string1: 'Блюдо для детской кухни',
              address: '26.09'
          },
          {
        id: 4,
              picture: './img/devilary-top-slider.png',
              string1: 'Летнее меню',
              address: '06.07'
          },
          {
        id: 5,
              picture: './img/concept-slide-1.png',
              string1: 'Блюдо для детской кухни',
              address: '06.09'
          },
      ],
      childsItems: [
          {
        id: 1,
              picture: './img/main-5.png',
              title: 'Летнее меню',
              data: '06.09'
          },
          {
        id: 2,
              picture: './img/event-item-2.png',
              title: 'Летнее меню',
              before: '',
              data: '13.09'
          },
          {
        id: 3,
              picture: './img/event-1.png',
              title: 'Летнее меню',
              before: '',
              data: '26.09'
          },
          {
        id: 4,
              picture: './img/devilary-top-slider.png',
              title: 'Летнее меню',
              before: 'до',
              data: '06.07'
          },
          {
        id: 5,
              picture: './img/concept-slide-1.png',
              title: 'Летнее меню',
              before: 'до',
              data: '06.09'
          },
      ],
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  on: {
    init: function () {
      console.log('App initialized')
    },
    pageInit: function () {
      changeToolbarLight();
      changeToolbarDark();
      changeNavbarLight();
      changeNavbarDark();
      console.log('Page initialized')
    },
  }
});


// $$('#main').on('click', '.block__heading-name', function (e) {
//     console.log('next');
// });
$$('a').on('click', function (e) {
  console.log('clicked');
});


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


function changeNavbarLight() {
      $$('.light-tab-theme').each(function() {
    if ($$(this).hasClass('tab-link-active')) {
      $$(this).closest('.view-main').addClass('add-light-theme');
    }
    });
}
function changeNavbarDark() {
      $$('.dark-tab-theme').each(function() {
    if ($$(this).hasClass('tab-link-active')) {
      $$(this).closest('.view-main').removeClass('add-light-theme');
    }
    });
}






// var discountItems = [
//     {
//   id: 1,
//         picture: './img/event-item-1.png',
//         title: 'Летнее меню',
//         note: 'Сергей Лужников',
//         before: 'до',
//         data: '06.09'
//     },
//     {
//   id: 2,
//         picture: './img/event-1.png',
//         title: 'Летнее меню',
//         note: 'Сергей Лужников',
//         before: 'до',
//         data: '13.09'
//     },
//     {
//   id: 3,
//         picture: './img/event-item-2.png',
//         title: 'Летнее меню',
//         note: 'Сергей Лужников',
//         before: 'до',
//         data: '26.09'
//     },
//     {
//   id: 4,
//         picture: './img/devilary-top-slider.png',
//         title: 'Летнее меню',
//         note: 'Сергей Лужников',
//         before: 'до',
//         data: '06.07'
//     },
//     {
//   id: 5,
//         picture: './img/concept-slide-1.png',
//         title: 'Летнее меню',
//         note: 'Сергей Лужников',
//         before: 'до',
//         data: '06.09'
//     },
// ];
// // debugger
// function discontListStart() {
//   var discountList = app.virtualList.create({
//       el: '.discount-list',
//       items: discountItems,
//   	itemTemplate:
//     '<li class="block__item block__item-rest">' +
//           '<div class="swiper-slide block__item-rest">' +
//             '<a href="#" class="block__item-full">' +
//                 '<img src="{{picture}}" alt="" class="block-img-bg">' +
//                 '<div class="block__item-full-context circe">' +
//                     '<span class="block-context-title white-color">{{title}}</span>' +
//                     '<span class="block-context-address white-color">{{note}}</span>' +
//                     '<div class="block-context-data-wrap circe">' +
//                         '<span class="block-context-data-prefix white-color">{{before}}</span>' +
//                         '<span class="block-context-data-title white-color">{{data}}</span>' +
//                     '</div>' +
//                 '</div>' +
//             '</a>' +
//           '</div>'+
//         '</li>',
//         height: function () {
//           var arr = Object.keys(this.items).length
//           var height = 194 / arr;
//           return height;
//         },
//         routes: routes,
//   });
//   }
// discontListStart()
