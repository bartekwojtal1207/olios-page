document.addEventListener("DOMContentLoaded",function(){


  console.log('s');

});
$(document).ready(function(){

  $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#menu-toggle").toggleClass("clicked");
        $("#wrapper").toggleClass("toggled");
});
})
