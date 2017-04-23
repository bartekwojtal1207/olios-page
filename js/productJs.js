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
    var main_foto = $(".show_product").children();
    main_foto.css("display","none");
    var title_seat = $(main_foto).data("title");
    var foto_source = $(main_foto).attr("src");
    var new_foto = $(this).attr("src");
    var product_title = $(this).data("title");
    var title_page = $(".title_description");
    main_foto.attr("src",new_foto);
    main_foto.data("title",product_title);
    $(this).next().text(title_seat);
    title_page.text(product_title);
    $(this).attr("src",foto_source);
    $(this).data("title",title_seat);
    main_foto.fadeIn(2000);
//    main_foto.data("title");
    console.log(product_title);
    console.log(title_seat);
  });
  nav_foto.on("mouseenter",function(){
    $(this).css("opacity","0.5");
  });
  nav_foto.on("mouseleave",function(){
    $(this).css("opacity","1");
  });

});
