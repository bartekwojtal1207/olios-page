
$(document).ready(function(){
  var product_counter = 0;
  var plus_item_btn = $(".triangle");
  var minus_item_btn = $(".triangle_bottom");
  var quanity = $(".result_table");
  var add_order_btn = $("#add_card_button");
  var order_panel  = $(".order");
  var order_element = $(".order p span");

  quanity.text(product_counter);

  plus_item_btn.on("click",function(){
    product_counter ++;
    quanity.text(product_counter);
  });
  minus_item_btn.on("click",function(klik){
    product_counter --;
    if(product_counter <= 0){
      product_counter =0;
    }
    quanity.text(product_counter);
  });
  order_panel.css("width","0").css("border","0em");
  add_order_btn.on("click",function(){
    order_element.text(product_counter);
    order_panel.animate({
      display: "visible",
      width: "14em",
      border: ".1em",
      border: "solid",
      border: "lightgray"
    },2000).delay(2000).animate({
      width: "0em",
      border: "0em"
    },2000)
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
  // zoom product
  var zoom = 25;
  var zoom_h = 24;
  var zoom_btn = $(".circle").first();
  var reduction_btn = $(".circle").last();

  // var zoom_btn = $(".circle");
  $(zoom_btn).on("click",function(){
    console.log(reduction_btn);
    zoom ++;
    zoom_h ++;
    var main_foto = $(".show_product").children();
    main_foto.css("width",zoom+"em")
    main_foto.css("height",zoom_h+"em")
  });
  $(reduction_btn).on("click",function(){
    console.log(':sdas');
    zoom --;
    zoom_h --;
    var main_foto = $(".show_product").children();
    main_foto.css("width",zoom+"em")
    main_foto.css("height",zoom_h+"em")
  });

});
