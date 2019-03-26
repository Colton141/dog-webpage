$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    // $("a").removeClass();
    $("body").addClass("lightTheme");
    // $("a").addClass(light-theme);
  });
  $("button#dark").click(function(){
    $("body").removeClass();
    // $("a").removeClass();
    $("body").addClass("darkTheme");
    // $("a").addClass(dark-theme);
  });
});
