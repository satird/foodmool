<template>
  <div class="page no-navbar" data-name="restDetail">
    <div class="page-content">
      <div class="swiper-container main-top-slider swiper-init">
        <div class="swiper-wrapper">
          <div class="swiper-slide main-top-slide">
            <div class="main-top-slide-context">
              <span class="main-top-slide-title">Неделя томатов на рынкеPHP</span>
              <div class="main-top-slide-data-wrap circe">
                <span class="main-top-slide-data-prefix">Только</span>
                <span class="main-top-slide-data-title">01.10</span>
              </div>
            </div>
            <img src="img/beer-slider-2.png" class="main-top-slider-bg" alt="">
          </div>
          <div class="swiper-slide main-top-slide">
            <div class="main-top-slide-context">
              <span class="main-top-slide-title">Пивной день на рынке</span>
              <div class="main-top-slide-data-wrap circe">
                <span class="main-top-slide-data-prefix">Только</span>
                <span class="main-top-slide-data-title">02.10</span>
              </div>
            </div>
            <img src="img/tomats.png" class="main-top-slider-bg" alt="">
          </div>
          <div class="swiper-slide main-top-slide">
            <div class="main-top-slide-context">
              <span class="main-top-slide-title">Неделя сыров на рынке</span>
              <div class="main-top-slide-data-wrap circe">
                <span class="main-top-slide-data-prefix">Только</span>
                <span class="main-top-slide-data-title">03.10</span>
              </div>
            </div>
            <img src="img/markets-block.png" class="main-top-slider-bg" alt="">
          </div>
        </div>
      </div>

      <div class="rest-detail__logo-container">
        <div class="rest-detail__logo-item">
          <img src="img/logo-rest-1.png" alt="">
        </div>
        <div class="rest-detail__logo-item">
          <img src="img/logo-rest-2.png" alt="">
        </div>
      </div>

      <div class="subnavbar subnavbar-after-header no-shadow no-hairline">
        <div class="subnavbar-inner">
          <div class="segmented segmented-raised">
            <a href="#tab1" class="button tab-link tab-link-active">Ресторан</a>
            <a href="#tab2" class="button tab-link">Меню</a>
            <a href="#tab3" class="button tab-link">Адрес</a>
          </div>
        </div>
      </div>

      <div class="tabs">
        <div class="tab tab-active" id="tab1">
          <div class="rest-content-tab tab-1">
            <div class="rest-image">
              <img src="./img/markets-block.png" alt="">
            </div>
            <div class="title-h2 circe">
              <span class="strong">restDetail.titleStrong</span>
              <span class="light">restDetail.titleLight</span>
            </div>
            <div class="rest-article circe">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div class="rest-tags">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid esse minus voluptatem dignissimos ad, hic magni veniam soluta molestias. Tenetur architecto ex laudantium, accusamus est quod cupiditate nihil sapiente.
              <20></20>
            </div>
            <div class="rest-line"></div>
            <div class="title-h3 circe">
              <span class="strong">restDetail.titleStrong</span>
              <span class="light">restDetail.titleLight</span>
            </div>
            <div class="rest-note-wrapper">
              <div class="rest-note">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              <div class="rest-note">
                Lorem ipsum dolor sit amet,
              </div>
            </div>
            <div class="rest-cook-image">
              <img src="./img/markets-block.png" alt="">
            </div>
          </div>
        </div>


        <div class="tab" id="tab2">
          <div class="rest-content-tab">
            <div class="title-h3 circe">
              <span class="strong">Наши блюда</span>
            </div>
          </div>
          <div class="swiper-container menu-swiper swiper-init" data-space-between="10" data-slides-per-view="auto" data-free-mode="true">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="block__item block__item-menu" href="#">
                  <div class="block-image">
                    <img src="./img/markets-block.png" alt="">
                  </div>
                  <div class="block-context circe">
                    <span class="block-context-title strong black-color">title</span>
                    <span class="block-context-text black-color">price</span>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="block__item block__item-menu" href="#">
                  <div class="block-image">
                    <img src="./img/markets-block.png" alt="">
                  </div>
                  <div class="block-context circe">
                    <span class="block-context-title strong black-color">title</span>
                    <span class="block-context-text black-color">price</span>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="block__item block__item-menu" href="#">
                  <div class="block-image">
                    <img src="./img/markets-block.png" alt="">
                  </div>
                  <div class="block-context circe">
                    <span class="block-context-title strong black-color">title</span>
                    <span class="block-context-text black-color">price</span>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="block__item block__item-menu" href="#">
                  <div class="block-image">
                    <img src="./img/markets-block.png" alt="">
                  </div>
                  <div class="block-context circe">
                    <span class="block-context-title strong black-color">title</span>
                    <span class="block-context-text black-color">price</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="rest-line"></div>
          <div class="rest-content-tab">
            <ul class="menu-list circe">
              <li class="menu-item">
                <div class="menu-item-dish light">
                  dish
                </div>
                <div class="menu-item-price bold">
                  price
                </div </li> <li class="menu-item">
                <div class="menu-item-dish light">
                  dish
                </div>
                <div class="menu-item-price bold">
                  price
                </div </li> <li class="menu-item">
                <div class="menu-item-dish light">
                  dish
                </div>
                <div class="menu-item-price bold">
                  price
                </div </li> <li class="menu-item">
                <div class="menu-item-dish light">
                  dish
                </div>
                <div class="menu-item-price bold">
                  price
                </div </li> <li class="menu-item">
                <div class="menu-item-dish light">
                  dish
                </div>
                <div class="menu-item-price bold">
                  price
                </div </li> <li class="menu-item">
                <div class="menu-item-dish light">
                  dish
                </div>
                <div class="menu-item-price bold">
                  price
                </div </li> </ul> </div> </div> <div class="tab" id="tab3">
                <div class="block-title">About restDetail.title3</div>
                <div class="block block-strong">
                  restDetail.description
                </div>
          </div>
        </div>
        <div class="main-blocks light">
          <div class="main-block__heading main-block__heading-com light">
            <span class="block__heading-name">Способы связи</span>
          </div>
          <div class="circe">
            <span class="communication light">ул. Лесная, 20, с 09:00 до 22:00</span>
            <span class="communication light">8 (800) 999 88 77 / depo@mail.ru</span>
            <a href="#" class="communication-link light">depomoskva.ru</a>
            <button class="communication-btn light" type="button">Обратная связь</button>
            <span class="communication-s">Как добраться?</span>
          </div>
        </div>
      </div>
    </div>
    </template>
