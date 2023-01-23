$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
   //$(".red-box").fadeOut(2000);
   //$(".red-box").fadeIn(1000);
   ////$(".red-box").fadeTo(1000,0.5);
   //$(".blue-box").fadeToggle();
   //$(".green-box").hide(2000);
   //$(".green-box").show(3000);
   //$(".blue-box").toggle();
  //$(".green-box").toggle();
    // $("p").slideUp(1000);
    $("p").hide();
     $("p").slideDown(2000);
     $(".blue-box").animate({
      "margin-left" : "+=200px",
      "opacity" : "0",
      "height" : "50px",
      "width" : "50px",
      "margin-top" : "25px"
     },2000)


});