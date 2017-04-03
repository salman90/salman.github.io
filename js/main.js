$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#section1');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $('nav.navbar-default').css('background-color', '#ffffff');
        $('nav.navbar-default .navbar-nav>li>a, nav.navbar-default .navbar-brand').css('color', '#000');
      } else {
        $('nav.navbar-default').css('background-color', 'transparent');
        $('nav.navbar-default .navbar-nav>li>a, nav.navbar-default .navbar-brand').css('color', '#000');
      }
    });
  }
});

function collapseNavOnClick() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });



function respond() {
  navbarColourChange();
}

$(document).ready(function() {
  respond();
});
