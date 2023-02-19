$(function(){
   $("#chkAll").click(function(){
      var isSelect  = $(this).prop("checked");
       $(".chkSelectStudent").prop("checked",isSelect);
      if(isSelect)
      {
         $(".chkSelectStudent").parents("tr").css("background-color","yellow");
      }else{
         $(".chkSelectStudent").parents("tr").css("background-color","rgb(255,255,255)");
      }
   });
   $(".chkSelectStudent").change(function(){
      var isSelect  = $(this).prop("checked");
      if($(".chkSelectStudent").length == $(".chkSelectStudent:checked").length)
      {
         $("#chkAll").prop("checked",true);
      }
      else{
         $("#chkAll").prop("checked",false);
      }
      if(isSelect)
      {
         $(this).parents("tr").css("background-color","yellow");
      }else{
         $(this).parents("tr").css("background-color","rgb(255,255,255)");
      }
   });
});