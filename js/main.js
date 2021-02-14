(function () {
  'use strict';

  // iPad and iPod detection
  var isiPad = function () {
    return navigator.platform.indexOf('iPad') != -1;
  };

  var isiPhone = function () {
    return (
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPod') != -1
    );
  };

  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  var burgerMenu = function () {
    $('.js-es-nav-toggle').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);
      if ($('body').hasClass('menu-show')) {
        $('body').removeClass('menu-show');
        $('#es-main-nav > .js-es-nav-toggle').removeClass('show');
      } else {
        $('body').addClass('menu-show');
        setTimeout(function () {
          $('#es-main-nav > .js-es-nav-toggle').addClass('show');
        }, 900);
      }
    });
  };

  // Animations

  var contentWayPoint = function () {
    var i = 0;
    $('.animate-box').waypoint(
      function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function () {
            $('body .animate-box.item-animate').each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn animated');
                  } else {
                    el.addClass('fadeInUp animated');
                  }

                  el.removeClass('item-animate');
                },
                k * 100,
                'easeInOutExpo'
              );
            });
          }, 100);
        }
      },
      { offset: '85%' }
    );
  };

  // Document on load.
  $(function () {
    fullHeight();
    burgerMenu();
    // Animations
    contentWayPoint();
  });
})();

// $(function(){
//   let reviews = $('.reviews');
//   let reviewsTop = reviews.offset().top;
//   $(window).scroll(function(){
//     let windowTop = $(this).scrollTop();
//     if (windowTop > reviewsTop) {
//       console.log('Добавить')
//       $('.es-map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A69fc9d7ace4b5cfaa5dd3af2e5d9e5aad50e2c8f3535261fd4bbb0496185b27b&amp;width=100%&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>')
//       $(window).unbind('scroll')
//     }
//   })
// });


