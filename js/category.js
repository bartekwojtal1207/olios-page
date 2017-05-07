$(document).ready(function(){

  var show_more_link = $(".footer_category");
  //$(".map_box").css("display","none");
  $(show_more_link).on("click",function(){
      $(".map_box").slideToggle(1000);
  });
});
