 $('.submenu a').on('click',function(e){
  e.preventDefault();
  offset = 110;
  trg = $(this).attr('href');
  postop = $(trg).offset().top - offset;
  $("html,body").animate({scrollTop:postop},1500);
})
