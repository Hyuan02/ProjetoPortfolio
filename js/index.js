let i=0;
let atual;
$(document).ready(function(){
  function slider(){
    i == 2 ? i=0 : i++;
    exibirImg(i);
  }
  function desapareceCarrosel(){
    $("#conteudo1, #conteudo2, #conteudo3").velocity({
      display:"none"
    });
  }
  function exibirImg(num){
    desapareceCarrosel();
    $("#conteudo"+(num+1)).velocity({
      display:"initial"
    });
  }

  desapareceCarrosel();
  setInterval(slider,3000);
  exibirImg(0);
  $("#carrosel img").eq(0).click(()=>exibirImg(0));
  $("#carrosel img").eq(1).click(()=>exibirImg(1));
  $("#carrosel img").eq(2).click(()=>exibirImg(2));
});
