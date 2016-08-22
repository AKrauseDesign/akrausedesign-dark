// menu toggling
$('.mobile-nav').click(function() {
  $(this).toggleClass('active-nav');
  $('.mobile-nav div:nth-child(2)').toggleClass('active-nav2');
  $('.mobile-menu').toggleClass('menu-open');
});

// hide menu when a-tag is clicked
$('.akd-main-menu a').click(function(e) {
  e.preventDefault();
  $('.mobile-nav').removeClass('active-nav');
  $('.mobile-nav div:nth-child(2)').removeClass('active-nav2');
  $('.mobile-menu').removeClass('menu-open');
});

// smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// add / remove active tab function
var addActive = function(place, subplace, classname) {
  $(place).click(function() {
    $(subplace).removeClass(classname);
    $(this).addClass(classname);
  });
};

addActive('.navigation nav a', 'nav a', 'active-link');
