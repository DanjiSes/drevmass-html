$(function() {

  // Reviews slider
  $('.js-reviews-slider').slick({
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '80px',
    slidesToScroll: 5,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  // Reviews popup
  $('.js-review-img').magnificPopup({
    type: 'image',
    tClose: 'Закрыть (Esc)',
    tLoading: 'Загрузка...',
    gallery: {
      enabled: true,
      tPrev: 'Предыдущий (Стрелка влево)',
      tNext: 'Следующий (Стрелка вправо)',
      tCounter: '%curr% из %total%'
    },
    image: {
      tError: '<a href="%url%">Изображение</a> не может быть загружено.'
    },
    ajax: {
      tError: '<a href="%url%">Запрос</a> венул ошибку.'
    }
  });

  // Gallery popup
  $('.js-gallery-img').magnificPopup({
    type: 'image',
    tClose: 'Закрыть (Esc)',
    tLoading: 'Загрузка...',
    gallery: {
      enabled: true,
      tPrev: 'Предыдущий (Стрелка влево)',
      tNext: 'Следующий (Стрелка вправо)',
      tCounter: '%curr% из %total%'
    },
    image: {
      tError: '<a href="%url%">Изображение</a> не может быть загружено.'
    },
    ajax: {
      tError: '<a href="%url%">Запрос</a> венул ошибку.'
    }
  });

  // Order block sliders

  $('.js-bigPreviewSlider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-previewsSlider',
    arrows: false,
    dots: false,
  });

  $('.js-previewsSlider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.js-bigPreviewSlider',
    focusOnSelect: true,
    arrows: false,
    dots: false,
  });

  // Smooth scroll

  $(".js-scrollTo").click(function (){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
});
});
