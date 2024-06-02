function mostrarMensagem(texto) {
    let mensagem;
    switch (texto) {
        case 'msgLixo':
            mensagem = "Lembre-se de tampar latas de lixo, barris, caixas d'água e outros recipientes que possam acumular água!";
            break;
        case 'msgVasos':
            mensagem = "Coloque pedras e areia nos pratos e bordas de vasos! Desta forma, o mosquito não colocará larvas na água.";
            break;
        case 'msgPneus':
            mensagem = "Cuidado com os pneus! Guarde-os em locais cobertos para evitar que armazenem água parada.";
            break;
        case 'msgCacos':
            mensagem = "Cacos no muro também podem servir de criadouro para os mosquitos! Coloque areia ou concreto para preenchê-los.";
            break;
        case 'msgCaixa':
            mensagem = "Garrafas vazias e destampadas devem ser guardadas de cabeça para baixo!";
            break;
    }
    const divTeste = document.getElementById("teste");
    divTeste.style.display = "block";
    divTeste.style.animation = "none";
    divTeste.offsetHeight;
    divTeste.style.animation = "fadein 0.5s";
    document.getElementById("msg").innerText = mensagem;
    somClique();
}

function ocultarMensagem() {
    const divTeste = document.getElementById("teste");
    divTeste.style.animation = "fadeout 0.5s";
    divTeste.addEventListener('animationend', function checar() {
        divTeste.style.display = "none";
        divTeste.style.animation = "none";
        divTeste.removeEventListener('animationend', checar);
    });
}

function iniciarJogo() {
    document.getElementById("jogar").style.display = "none";
    document.getElementById("creditos").style.display = "none";
    document.getElementById("jogo").style.display = "block";   
}

function mostrarCreditos() {
    document.getElementById("jogar").style.display = "none";
    document.getElementById("creditos").style.display = "none";
    document.getElementById("containerCreditos").style.display = "block";
}

function aedes() {
    document.getElementById("aedes").src = "D:\\Users\\Anna\\Desktop\\ANÁLISE E DESENVOLVIMENTO DE SISTEMAS\\Unifor\\S2\\Interação Humano-Computador\\jogo\\assets\\rip.png";
    document.getElementById("aedes").style.width = "120px";
}

function somClique() {
    var clique = new Audio('../assets/clique.mp3');
    clique.play();
}
