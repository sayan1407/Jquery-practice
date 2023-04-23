$(function(){
   
   $("#terms").change(function(){
      var isChecked = $(this).prop("checked");     
      if(isChecked)
      {         
          $("button").prop("disabled",false);
      }
      else{
         $("button").prop("disabled",true);
      }
   })
});