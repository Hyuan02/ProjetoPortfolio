let i=0;
$(document).ready(function (){
  $('body').hide();
  $('body').fadeIn(300);
  $('#conteudo2').hide();
  $('#conteudo3').hide();
  $('#carrosel img').eq(0).on("click",function(){
    i = 0;
    $('#conteudo1').fadeIn(400);
    $('#conteudo2').hide();
    $('#conteudo3').hide();
  });
  $('#carrosel img:eq(1)').on("click",function(){
    i = 1;
    $('#conteudo1').hide();
    $('#conteudo2').fadeIn(400);
    $('#conteudo3').hide();
  });
  $('#carrosel img:eq(2)').on("click",function(){
    i = 2;
    $('#conteudo1').hide();
    $('#conteudo2').hide();
    $('#conteudo3').fadeIn(400);
  });
  $("#conteudo1").on("swipeRight",slide);
  $("#conteudo2").on("swipeRight",slide);
  $("#conteudo3").on("swipeRight",slide);
  setInterval(slide,3000);
  function slide(){
    i++;
    if(i>2)
      i=0;
    switch(i){
      case 0:
      $('#conteudo1').fadeIn(400);
      $('#conteudo2').hide();
      $('#conteudo3').hide();
      break;
      case 1:
      $('#conteudo1').hide();
      $('#conteudo2').fadeIn(400);
      $('#conteudo3').hide();
      break;
      case 2:
      $('#conteudo1').hide();
      $('#conteudo2').hide();
      $('#conteudo3').fadeIn(400);
      break;
    }
  }
  $("form").on("click",function(){
    $.fancybox.open('<div id="message"><h2>Aviso</h2><p>O formulário ainda não está funcionando, volte em breve!</p></div>');
  });
});
