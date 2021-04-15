$(function() {

  // Reviews slider
  $('.js-reviews-slider').slick({
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '80px',
    slidesToScroll: 5,
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
});
