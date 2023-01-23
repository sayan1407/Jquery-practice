$(function() {
  var flickrAPI = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
 $.getJSON(flickrAPI,{
   tags : "sun,beach",
   tagmode : "Any",
   format : "json"
 }).done(function(data){
    //console.log(data);
    $.each(data.items,function(index,value){
      console.log(value.media.m);
      $("<img>").attr("src",value.media.m).appendTo("#flickr");
      if(index == 5)
       return false;
    });
 }).fail(function(){
  alert("can't call the api");
 });

});