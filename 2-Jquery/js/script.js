$(function() {
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];
  var i = 1;
  $(".gallery").find("img").click(function(){
     i = (i+1)%images.length;
     $(this).attr("src",images[i]);
  })
 $("ul li").eq(1).css("background-color","green");

});