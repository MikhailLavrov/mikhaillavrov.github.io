(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");
  var body = document.querySelector("body");
  
  toggle.addEventListener("click", function() {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      body.classList.remove("scroll-lock");
    } else {
      menu.classList.add("open");
      body.classList.add("scroll-lock");
    }
    
  });
  
  close.addEventListener("click", function(e) {
    menu.classList.remove("open");
    body.classList.remove("scroll-lock");
  });
  
  const outerClose = (evt) => {
    var scrollLockEl = document.querySelector('.scroll-lock');

    if (menu.classList.contains("open")) {
      if (evt.target === scrollLockEl) {
        menu.classList.remove("open");
        body.classList.remove("scroll-lock");
      };
    };
  };

  document.addEventListener('click', outerClose);

  // Close menu after click on smaller screens
  $(window).on("resize", function() {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function() {
        body.classList.remove("scroll-lock");
        menu.classList.remove("open");
      });
    }
  });

  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: false,
    margin: 30,
    nav: true,
    // autoplay:true,
    autoplayTimeout:4000,
    lazyLoad: true,
    responsiveClass: true,
    autoHeight:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });
})(jQuery);
