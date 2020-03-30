$("ul").on("click", "li" ,function(){
  $(this).toggleClass("completed");
});

// $("ul").on("mouseOver", "span" ,function(event){
//   $(this).slideToggle("slow");
// });

$("ul").on("click", "span" ,function(event){
  $(this).parent().fadeOut(500 , function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on("keypress" , function(event){
  if(event.which === 13){
    let task=$(this).val();
    $(this).val("");

    $("ul").append("<li><span><i class='fas fa-minus'></i></span> " + task + "</li>")
  }
});

$(".fa-plus").on("click",function(){
  $("input[type='text']").fadeToggle(500);
});
