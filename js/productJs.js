$(document).ready(function(){
  var product_counter = 1;
  var card_btn = $("#add_card_button");
  var quanity = $(".result_table");
  quanity.text(product_counter);
  card_btn.on("click",function(){
    product_counter ++;
    quanity.text(product_counter);
  });
});
