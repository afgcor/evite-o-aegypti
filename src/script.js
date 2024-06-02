function tela1() {
    somPlay();
    document.getElementById("telainicial").style.display = "none";
    document.getElementById("tela1").style.display = "block";
    document.getElementById("tela1").style.animation = "fadein 0.3s";
}


function tela2() {
    somPlay();
    pushNome();
    document.getElementById("tela1").style.display = "none";
    document.getElementById("tela2").style.display = "block";
    document.getElementById("tela2").style.animation = "fadein 0.3s";
}

function iniciarJogo() {
    somPlay();
    document.getElementById("tela2").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    document.getElementById("jogo").style.animation = "fadein 0.3s";
}

function pushNome(nome) {
    var nome = (document.getElementsByName("nome")[0].value);
    if (nome === "") {
        document.getElementById("nomeusuario").innerText = "Usuário";
    } else {
        var capitalizado = nome.substring(0, 1).toUpperCase() + nome.substring(1).toLowerCase();
        document.getElementById("nomeusuario").innerText = capitalizado;
    }
}

function somPlay() {
    var play = new Audio('../assets/play.mp3');
    play.play();
}

function somClique() {
    var clique = new Audio('../assets/clique.mp3');
    clique.play();
}

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
    const divTexto = document.getElementById("texto");
    divTexto.style.display = "block";
    divTexto.style.animation = "none";
    divTexto.offsetHeight;
    divTexto.style.animation = "fadein 0.5s";
    document.getElementById("msg").innerText = mensagem;
    somClique();
}

function ocultarMensagem() {
    const divTeste = document.getElementById("texto");
    divTeste.style.animation = "fadeout 0.3s";
    divTeste.addEventListener('animationend', function checar() {
        divTeste.style.display = "none";
        divTeste.style.animation = "none";
        divTeste.removeEventListener('animationend', checar);
    });
}

function mostrarCreditos() {
    somPlay();
    document.getElementById("telainicial").style.display = "none";
    document.getElementById("containercreditos").style.display = "block";
    document.getElementById("containercreditos").style.animation = "fadein 0.3s";
}

function retornar() {
    somPlay();
    document.getElementById("jogo").style.display = "none";
    document.getElementById("containercreditos").style.display = "none";
    document.getElementById("telainicial").style.display = "block";
    document.getElementById("telainicial").style.animation = "fadein 0.3s";
    location.reload();
}

function aedes() {
    document.getElementById("aedes").src = "D:\\Users\\Anna\\Desktop\\ANÁLISE E DESENVOLVIMENTO DE SISTEMAS\\Unifor\\S2\\Interação Humano-Computador\\jogo\\assets\\rip.png";
    document.getElementById("aedes").style.width = "110px";
}