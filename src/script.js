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
            mensagem = "Garrafas vazias e destampadas devem ser guardadas de cabeça para baixo! O mesmo vale para latas e outros recipientes abertos.";
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
    document.getElementById("jogo").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("containercreditos").style.display = "block";
    document.getElementById("containercreditos").style.animation = "fadein 0.3s";
}

function retornar() {
    somPlay();
    document.getElementById("jogo").style.display = "none";
    document.getElementById("containercreditos").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("telainicial").style.display = "block";
    document.getElementById("telainicial").style.animation = "fadein 0.3s";
    location.reload();
}

function mosquito() {
    somPlay();
    document.getElementById("mosquito").src = "../assets/rip.png";
    document.getElementById("mosquito").style.width = "110px";
}

document.addEventListener('DOMContentLoaded', () => {
    const aedes = document.getElementById("mosquito");

    document.getElementById("mosquito").addEventListener('click', () => {
        if (aedes.id === "mosquito") {
            aedes.id = "mosquitoclicado";
        }
    });
})

document.addEventListener('DOMContentLoaded', (event) => {
    const itens = document.querySelectorAll('.item');
    let clicados = 0;

    itens.forEach((item) => {
        item.addEventListener('click', () => {
            // Se o item ainda não foi clicado (adiciona uma classe 'clicked' para rastreamento)
            if (!item.classList.contains('clicado')) {
                item.classList.add('clicado');
                clicados++;
                
                // Verifica se todos os itens foram clicados
                if (clicados === itens.length) {
                    setTimeout(() => {exibirFinal();}, 5000);
                }
            }
        });
    });
});

function exibirFinal() {
    somWin();
    document.getElementById("final").style.display = "block";
    document.getElementById("final").style.animation = "fadein 0.5s";
    document.getElementById("texto").style.display = "none";
}


function somWin() {
    var win = new Audio('../assets/win.mp3');
    win.play();
}