$(document).ready(function(){
  var product_counter = 1;
  var card_btn = $("#add_card_button");
  var quanity = $(".result_table");
  quanity.text(product_counter);
  card_btn.on("click",function(){
    product_counter ++;
    quanity.text(product_counter);
  });
  var nav_foto = $(".recomended_product").find("img");

  nav_foto.on("click",function(){
      switch_Foto($(this));
  });
  nav_foto.on("mouseenter",function(){
    $(this).css("opacity","0.5");
  });
  nav_foto.on("mouseleave",function(){
    $(this).css("opacity","1");
  });
  function switch_Foto(img){
    var main_foto = $(".show_product").children();
    var title_seat = $(main_foto).data("title");
    var foto_source = $(main_foto).attr("src");
    var new_foto = $(img).attr("src");
    var product_title = $(img).data("title");
    var title_page = $(".title_description");
    main_foto.css("display","none");
    main_foto.attr("src",new_foto);
    $(img).next().text(title_seat);
    $(img).attr("src",foto_source);
    $(img).data("title",title_seat);
    title_page.text(product_title);
    main_foto.data("title",product_title);
    main_foto.fadeIn(2000);
  };
});
