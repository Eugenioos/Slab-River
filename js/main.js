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



