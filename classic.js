const secaoItalao = document.getElementById("italo-secao");
const secaoManoel = document.getElementById("caixeta-manoelica");
const secaoFabio = document.getElementById("fabio-secao");
const botaoItalao = document.getElementById("botao-italo");
const botaoManoel = document.getElementById("botao-manoel");
const botaoOtavio = document.getElementById("botao-otavio");
const botaoFabio = document.getElementById("botao-fabio");
const botaoCaio = document.getElementById("botao-caio");
const secaoCaio = document.getElementById("caio-secao");
const secoes = document.querySelector(".francisco-imagens");

let selecionado = "";

function funcaoItalao() {
    if (selecionado === "italo") {
        secoes.innerHTML = "";
        selecionado = "";
    } else {
        selecionado = "italo";
        secoes.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center;" class="secao" id="italo-secao" >
            <h1 class="italo">Bilompa</h1>
            <img class="imagem" src="https://static.wikia.nocookie.net/65f08f96-529c-4af4-b8d4-0b72a982e467/scale-to-width/755"/>
        </div>`
    }
}

function funcaoManoelica() {
    if (selecionado === "manoel") {
        secoes.innerHTML = "";
        selecionado = "";
    } else {
        selecionado = "manoel";
        secoes.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center;" class="secao" id="caixeta-manoelica">
            <h1 class="manoel">amostradinho awards</h1> 
            <img class="imagem" src="https://m.media-amazon.com/images/I/41Kyl0hCAZL._UF894,1000_QL80_.jpg"/>
        </div>`
    }
}

function funcaoOtavica() {
    if (selecionado === "otavio") {
        secoes.innerHTML = "";
        selecionado = "";
    } else {
        selecionado = "otavio";
        secoes.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center;" class="secao" id="otavio-secao">
            <h1 class="otavio">Muelando na autoescola!</h1>
            <img class="imagem" src="https://i.ytimg.com/vi/-1pwQdHU_8c/maxresdefault.jpg"/>
        </div>`
    }
}

function funcaoFabio() {
    if (selecionado === "fabio") {
        secoes.innerHTML = "";
        selecionado = "";
    } else {
        selecionado = "fabio";
        secoes.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center;" class="secao" id="fabio-secao">
            <h1 class="fabonnie">borabillompa</h1>
            <img class="imagem" src="https://static.jojowiki.com/images/thumb/6/69/latest/20201130220440/Jotaro_SC_Infobox_Manga.png/400px-Jotaro_SC_Infobox_Manga.png"/>
        </div>`
    }
}

function funcaoCaio() {
    if (selecionado === "caio") {
        secoes.innerHTML = "";
        selecionado = "";
    } else {
        selecionado = "caio";
        secoes.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center;" class="secao" id="caio-secao">
            <h1 class="cayork">Olha o bingus miniiino</h1>
            <img class="imagem" src="./assets/bingus.webp"/>
        </div>`
    }
}

botaoItalao.addEventListener("click", funcaoItalao);
botaoManoel.addEventListener("click", funcaoManoelica);
botaoOtavio.addEventListener("click", funcaoOtavica);
botaoFabio.addEventListener("click", funcaoFabio);
botaoCaio.addEventListener("click", funcaoCaio);


const easterInput = document.getElementById("input-easter-egg");
const confirmarBotao = document.getElementById("confirmar");
const easterEgg = document.getElementById("easter-egg");
const easterMensagem = document.getElementById("easter-mensagem");
const cantoEaster = document.getElementById("canto-easter-egg");

const senhaMeiaSete = /(?:67)|(?:seis|meia|six) (?:sete|seven)/i;
const senhaFranciscao = /(?:classic|franciscao|banana)/i;
const senhaLabubu = /[fl]abubu/i;
const senhaBatata = /(?:batata frita|batata|frita)/i;

confirmarBotao.addEventListener = ("click", (e) => {
    e.preventDefault();
})

cantoEaster.addEventListener("submit", (e) => {
    e.preventDefault();
    const senha = easterInput.value;
    if (senha === "") {
        alert("Escreve alguma coisa! Frase, palavra, número...")
        return;
    }
    if (senhaMeiaSete.test(senha)) {
        easterEgg.innerHTML = `<h1 style="font-size: 150px; text-align: center; color: white; height: 40px;">SIX SEVEN</h1>
                                <img src="https://www.thenews.com.pk/assets/uploads/updates/2025-09-01/1340580_7982010_fnl_updates.jpg" />`;
    } else if (senhaFranciscao.test(senha)) {
        easterEgg.innerHTML = `<h1 style="font-size: 150px; text-align: center; color: white; height: 40px;">classic.</h1>
                                <img src="./assets/Captura de tela 2025-12-27 152020.png"/>`;
    } else if (senhaLabubu.test(senha)) {
        easterEgg.innerHTML = `<h1 style="font-size: 150px; text-align: center; color: white; height: 40px;">fabubu attack!</h1>
                                <img src="./assets/fabubu.jpg"/>`;
    } else {
        easterMensagem.textContent = "Sabe de nada!";
        easterEgg.innerHTML = "";
        return;
    }
    window.scrollTo({
        top: 50,
        behavior: 'smooth'
    })
})

const botaoPerguntar = document.getElementById("perguntar");
const resposta = document.getElementById("resposta");
const inputPergunta = document.getElementById("pergunta-input");

const respostas = ["Fogo na área",
    "Hmmm sei não Willis",
    "Me dá uma banana e eu te digo",
    "ÉÉÉÉÉ RAPAZ VAI FUNDO QUE É RASO",
    "Sim",
    "Não",
    "Talvez hein",
    "Te respondo no bar do pinto",
    "Os timbus me disseram que não",
    "Segundo Aldus com certeza!",
    "Receba!",
    "Tô embriagado demais pra responder...",
    "Miniino!",
    "AEEEE LUIZÃO"
];

botaoPerguntar.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputPergunta.value === "") {
        resposta.textContent = "Escreve alguma coisa, ANIMAL.";
        return;
    }
    resposta.textContent = respostas[Math.floor(Math.random() * respostas.length)];
})

const classicBtn = document.getElementById("classic-btn");
const classicVideo = document.getElementById("classic-video");

classicBtn.addEventListener("click", () => {
    classicVideo.classList.toggle("hidden");
})