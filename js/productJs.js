$(document).ready(function(){
  var product_counter = 1;
  var card_btn = $("#add_card_button");
  var quanity = $(".result_table");
  quanity.text(product_counter);
  card_btn.on("click",function(){
    product_counter ++;
    quanity.text(product_counter);
  });
  var produkt = $(".recomended_product").find("img");

  produkt.on("mouseenter",function(){
    var produkt_selected = $(".show_product").children();
    var foto_source = $(produkt_selected).attr("src");
    var new_foto = $(this).attr("src");
    console.log("mainfoto"+foto_source);
    console.log("drugiefoto"+new_foto);
    produkt_selected.attr("src",new_foto);
    $(this).attr("src",foto_source);

  });

});
