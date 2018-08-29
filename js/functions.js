//Função para preencher fileiras de poltronas;
function preencherFileira(fileira, nInicial) {
    for(var x = nInicial; x< 49; x+=4){
        var poltrona = document.createElement("div");
        poltrona.classList.add("poltrona");
        poltrona.innerText = x;
        fileira.appendChild(poltrona);
    }
}
//Função para salvar dentro das DIVS box;
function criarPoltronas() {
    var boxes = document.getElementsByClassName("box");
    preencherFileira(boxes[0], 1);
    preencherFileira(boxes[1], 2);
    preencherFileira(boxes[2], 3);
    preencherFileira(boxes[3], 4);
}
//Código Jquery para selecionar e Comprar uma poltrona.
var poltronaExistente;
$(document).ready(function(){
    criarPoltronas();
    $(".poltrona").on('click',function(){
        console.log("poltrona");
        if(poltronaExistente)
        {
            poltronaExistente.removeClass("poltronaSelecionada");
        }
        poltronaExistente =   $(this);
        $(this).addClass("poltronaSelecionada");
    });

    $(".botao").click(function () {
        if(poltronaExistente)
        {
            poltronaExistente.addClass("poltronaComprada");
        }
    });

});
//Função data
    $(document).ready(function () {
        var dNow = new Date();
        var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
        $('#data').val(localdate);
    });

//função para janela pop up

    $(document).ready(function () {

        seletorLinkAbrir = $(".jmodalAbrir");
        seletorLinkFechar = $(".jmodalFechar");
        containerModal = $(".jmodal");

        seletorLinkAbrir.click(function () {
            containerModal.fadeToggle(0);
            return false;
        });

        seletorLinkFechar.click(function () {
            containerModal.fadeToggle(0);
            return false;
        });
    });
    //ver sobre datePickers
    //o usuario deve ter a permissao de alterar a data atual
    //o usuario podera reservar poltronas em datas especificas e armazenas em local historyt
    //e emitir o comprovante de venda da poltrona