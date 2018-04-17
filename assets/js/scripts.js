$(document).ready(function() {
  // FADE IN OPENING TEXT
  $('.header, .header-p, .header-text button, hr').hide();

  $('.header, hr')
    .delay(500)
    .show(1200);

  $('.header-p')
    .delay(2000)
    .fadeIn(1200);

  $('.header-text button')
    .delay(3250)
    .fadeIn(500);

  // SCROLL TO ABOUT
  $('.header-text button').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#about-us').offset().top
      },
      750
    );
  });

  // SCROLL TO HOURS/MENU SECTION
  $('.about-header button').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.hours-open').offset().top
      },
      750
    );
  });
});
