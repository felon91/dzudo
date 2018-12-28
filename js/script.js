$(document).ready(function () {

  const addClass = function (target, selector, selectorActive) {
    if (target.closest(selector)) {
      target.closest(selector).parentElement.classList.toggle(selectorActive);
    }
  };

  const search = document.querySelector(`.search`);
  search.addEventListener(`click`, function (event) {
    event.stopPropagation();
    if(this.querySelector(`button`).getAttribute(`disabled`) === `disabled`) {
      console.log('da');
      event.preventDefault();
      this.querySelector(`button`).removeAttribute(`disabled`);
      addClass(event.target, `.search__button`, `search__block--active`);
    }
  });

  const body = document.querySelector(`body`);
  body.addEventListener(`click`, function (event) {
    if(search.querySelector(`.search__block`).classList.contains(`search__block--active`)) {
      search.querySelector(`.search__block`).classList.remove(`search__block--active`);
      search.querySelector(`button`).setAttribute(`disabled`, `disabled`);
    }
  });

  const menu = document.querySelector(`.menu`);

  const menuOpen = document.querySelectorAll(`.menu__open`);

  menuOpen.forEach((item) => {
    item.addEventListener(`click`, function (event) {
      event.preventDefault();
      const parentLink = event.target.closest(`a`);
      addClass(parentLink, `a`, `menu__parent--active`)
    });
  });

  const hamburger = document.querySelector(`.header__hamburger`);
  hamburger.addEventListener(`click`, function(event) {
    addClass(event.target, `.header__hamburger`, `header__hamburger--active`);
    if (menu.classList.contains('menu--active')) {
      menu.classList.remove(`menu--active`);
    } else {
      menu.classList.add(`menu--active`);
    }
  });

  const allTags = document.querySelector(`.all-tags__btn`);
  if (allTags) {
    allTags.addEventListener(`click`, function (event) {
      event.preventDefault();
      addClass(event.target, `.all-tags__btn`, `all-tags--active`);
      if(event.target.closest(`.all-tags--active`)) {
        event.target.closest(`.all-tags__btn`).querySelector(`span`).textContent = `свернуть`;
      } else {
        event.target.closest(`.all-tags__btn`).querySelector(`span`).textContent = `показать все`;
      }
    });
  }

  const mapButton = document.querySelector(`.dzudo-info__map a`);
  if (mapButton) {
    mapButton.addEventListener(`click`, function (event) {
      event.preventDefault();
      const popup = document.querySelector(`.popup`);
      const opacity = document.querySelector(`.opacity`);
      if (popup) {
        popup.classList.add(`popup--active`);
        opacity.classList.add(`opacity--active`);
      }
    });
  }

  const opacity = document.querySelector(`.opacity`);
  const popupClose = document.querySelector(`.popup__close`);
  const popupOk = document.querySelector(`.popup__ok`);
  if (opacity || popupClose || popupOk) {
    opacity.addEventListener(`click`, function (event) {
      event.preventDefault();
      const popup = document.querySelector(`.popup`);
      opacity.classList.remove(`opacity--active`);
      popup.classList.remove(`popup--active`);
    });

    popupClose.addEventListener(`click`, function (event) {
      event.preventDefault();
      const popup = document.querySelector(`.popup`);
      opacity.classList.remove(`opacity--active`);
      popup.classList.remove(`popup--active`);
    });

    popupOk.addEventListener(`click`, function (event) {
      event.preventDefault();
      const popup = document.querySelector(`.popup`);
      opacity.classList.remove(`opacity--active`);
      popup.classList.remove(`popup--active`);
    });
  }

  const typeMaps = document.querySelectorAll(`.sort__maps a`);

  typeMaps.forEach((item) => {
    item.addEventListener(`click`, function (event) {
      event.preventDefault();

      if (!event.target.classList.contains(`.sort__active`)) {
        const sortActive = document.querySelector(`.sort__active`);
        sortActive.classList.remove(`sort__active`);
        event.target.classList.add(`sort__active`);

        if (event.target.dataset.type === `map`) {

          if (event.target.closest(`.clubs`).classList.contains(`clubs--list`)) {
            event.target.closest(`.clubs`).classList.remove(`clubs--list`);
          }

          event.target.closest(`.clubs`).classList.add(`clubs--map`);
        }

        if (event.target.dataset.type === `list`) {

          if (event.target.closest(`.clubs`).classList.contains(`clubs--map`)) {
            event.target.closest(`.clubs`).classList.remove(`clubs--map`);
          }

          event.target.closest(`.clubs`).classList.add(`clubs--list`);

        }

      }

      const parentBlock = event.target.closest(`.clubs`);

      //addClass(parentBlock, `a`, `menu__parent--active`)
    });
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    loop: true,
    navText: [],
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $('[data-fancybox="images"]').fancybox({
    thumbs : {
      autoStart : true,
      axis      : 'x'
    },
    baseClass: "my-fancybox",
    buttons: [
      //"zoom",
      //"share",
      //"slideShow",
      //"fullScreen",
      //"download",
      //"thumbs",
      "close"
    ],
    btnTpl: {
      close:
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
      '<img src="img/close.png" alt="">' +
      "</button>",
      // Arrows
      arrowLeft:
      '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;">' +
      '<img src="img/arrow-left.png" alt="">' +
      "</a>",
      arrowRight:
      '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;">' +
      '<img src="img/arrow-right.png" alt="">' +
      "</a>",
    }
  });

  $('select').styler();
  $(".mask").mask("+7 (999) 999-99-99");
  const datepicker = new Datepickk({
    container: document.querySelector('.datepicker__block'),
    inline:true,
    range: true,
    tooltips: {
      date: new Date(),
      text: 'Текст'
    },
  });

  datepicker.lang = 'ru';
});

$(window).resize(function () {

  if (window.innerWidth >= 780) {
    $(".top-menu").removeAttr('style');
    $(".top-menu").removeClass('top-menu-active');
  }

});