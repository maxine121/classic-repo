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
const senhaLuizao = /(?:luizao|luizão)/i;

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
    } else if (senhaBatata.test(senha)) {
        easterEgg.innerHTML = `<h1 style="font-size: 150px; text-align: center; color: white; height: 40px;">minha mãe comia batata frita...</h1>
                                <img style="margin-top: 200px;" src="./assets/mae_batata.gif">`
    } else if (senhaLuizao.test(senha)) {
        easterEgg.innerHTML = `<h1 style="font-size: 150px; text-align: center; color: white; height: 40px;">aeeeee luizããão!!</h1>
                                <img src="./assets/luizao_minions.gif"/>`;                 
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

//SEÇÃO RPG WIP -----------------------------------------------------------

const rpgContainer = document.getElementById("rpg-container-atual");
const rpgTexto = document.getElementById("rpg-texto");
const rpgEscolhas = document.getElementById("escolhas");

const continuarBtn = document.getElementById("continuar-btn");

continuarBtn.disabled = true;
continuarBtn.style.cursor = "not-allowed";

const personagens = [
    {
        nome: "Caio",
        hp: 100,
        ataques: [
            {
                nome: "Cajadada",
                dano: 5,
                custoMana: 0
            },
            {
                nome: "Bola de fogo (10 mana)",
                dano: 15,
                custoMana: 10
            }
        ],
        mana: 40,
        imagem: "https://i.postimg.cc/Bb73x5PP/Mago-caio.png"
    },
    {
        nome: "Otávio",
        hp: 150,
        ataques: [
            {
                nome: "Soco",
                dano: 5,
                custoMana: 0
            },
            {
                nome: "Atropelar (10 mana)",
                dano: 20,
                custoMana: 10
            }
        ],
        mana: 20,
        imagem: "https://i.postimg.cc/1tNDxMPj/cavaleiro-otavio.png"
    },
    {
        nome: "Manoel",
        hp: 120,
        ataques: [
            {
                nome: "Flechada",
                dano: 5,
                custoMana: 0
            },
            {
                nome: "Timbus e suas aventuras (5 mana)",
                dano: 10,
                custoMana: 5
            }
        ],
        mana: 30,
        imagem: "https://i.postimg.cc/JhFdcTPF/manoel-arqueiro.png"
    },
    {
        nome: "Fábio",
        hp: 67,
        ataques: [
            {
                nome: "Mordida",
                dano: 5,
                custoMana: 0
            },
            {
                nome: "Tiro de Glock (20 mana)",
                dano: 20,
                custoMana: 20
            }
        ],
        mana: 15,
        imagem: "https://i.postimg.cc/httB2510/fabio-atirador.png"
    }
]

const inimigos = [{
    nome: "Tutorialdus",
    hp: 50,
    ataque: 5,
    imagem: "https://i.postimg.cc/Cxnd19yX/Captura-de-tela-2025-12-27-232200.png"
},
{
    nome: "João Camposnês",
    hp: 15,
    ataque: 67,
    imagem: "https://i.postimg.cc/rFN29J1V/campos.png"
},
{
    nome: "Xitalo",
    hp: 50,
    ataque: 10,
    imagem: "https://i.postimg.cc/rm2LJYPj/italo-malvado.png"
}];

rpgContainer.innerHTML = `
<img id="caio" src=${personagens[0].imagem} />
<img id="otavio" src=${personagens[1].imagem} />
<img id="manoel" src=${personagens[2].imagem} />
<img id="fabio" src=${personagens[3].imagem} />`

const caioEscolha = document.getElementById("caio");
const otavioEscolha = document.getElementById("otavio");
const manoelEscolha = document.getElementById("manoel");
const fabioEscolha = document.getElementById("fabio");

let personagem = {};

const mostrarBatalha = (batalhaNumero) => {
    continuarBtn.disabled = true;
    continuarBtn.style.cursor = "not-allowed"; 
    if (batalhaNumero === 1) {
        
        if (inimigos[0].hp <= 0) {
            rpgEscolhas.textContent = "A sua vitória chamou a atenção de alguém importante..."
            rpgContainer.innerHTML = `<img src=${personagem.imagem} />`
            rpgTexto.textContent = "Se atreve a continuar?"
            continuarBtn.disabled = false;
            continuarBtn.style.cursor = "pointer"; 
            return;
        }
        if (personagem.hp <= 0) {
            rpgEscolhas.textContent = "Você PERDEU a demo! KKKKKKKKKKK PRA ALDUS!"
            rpgContainer.innerHTML = `<img src=${personagem.imagem} />`
            rpgTexto.textContent = "O jogo final sai em breve."
            return;
        }
        rpgEscolhas.textContent = "Hora da batalha! Tutorialdus se aproxima com um tabuleiro de xadrez!"
        rpgContainer. innerHTML = `
        <div id="versus-container">
            <div id="canto-heroi">
                <h2>${personagem.nome}</h2>
                <img class="pequeno" src=${personagem.imagem} />
                <p>HP: ${personagem.hp}</p>
                <p>Mana: ${personagem.mana}</p>
                <button class="preto" id="ataque-normal">${personagem.ataques[0].nome}</button>
                <button class="preto" id="ataque-especial" ${personagem.mana >= personagem.ataques[1].custoMana ? null : "disabled"}>${personagem.ataques[1].nome}</button>
            </div>
            <div id="canto-inimigo">
                <h2>${inimigos[0].nome}</h2>
                <img class="pequeno" src=${inimigos[0].imagem} />
                <p>HP: ${inimigos[0].hp}</p>
            </div>
        </div>
        `

        const ataqueNormal = document.getElementById("ataque-normal");
        const ataqueEspecial = document.getElementById("ataque-especial");
        ataqueNormal.addEventListener("click", () => {
        personagem.hp -= inimigos[0].ataque;
        inimigos[0].hp -= personagem.ataques[0].dano;
        mostrarBatalha(batalhas);
        });

        ataqueEspecial.addEventListener("click", () => {
            personagem.hp -= inimigos[0].ataque;
            inimigos[0].hp -= personagem.ataques[1].dano;
            personagem.mana -= personagem.ataques[1].custoMana;
            mostrarBatalha(batalhas);
        });
    }
    if (batalhaNumero === 2) {
        
        if (inimigos[1].hp <= 0) {
            rpgEscolhas.textContent = "Você Venceu a demo!"
            rpgContainer.innerHTML = `<img src=${personagem.imagem} />`
            rpgTexto.textContent = "O jogo final sai em breve."
            rpgTexto.style.color = "yellow";
            rpgTexto.style.fontSize = "30px";
            continuarBtn.disabled = false;
            continuarBtn.style.cursor = "pointer"; 
            return;
        }
        if (personagem.hp <= 0) {
            rpgEscolhas.textContent = "Você PERDEU a demo! KKKKKKKKKKK PRA JC!"
            rpgContainer.innerHTML = `<img src=${personagem.imagem} />`
            rpgTexto.style.color = "yellow";
            rpgTexto.style.fontSize = "30px";
            rpgTexto.textContent = "Dica: JC causa 67 de dano."
            return;
        }
        if (personagem.nome === "Fábio") {
            rpgTexto.textContent = "Luizão deu um pente pra Glock de Fábio! Aeeee Luizão!";
            rpgTexto.style.color = "yellow";
            rpgTexto.style.fontSize = "30px";
            personagem.mana = 67;
        }
        rpgEscolhas.textContent = "Hora da batalha! João Camposnês chega com tudo em Recífia!"
        rpgContainer. innerHTML = `
        <div id="versus-container">
            <div id="canto-heroi">
                <h2>${personagem.nome}</h2>
                <img class="pequeno" src=${personagem.imagem} />
                <p>HP: ${personagem.hp}</p>
                <p>Mana: ${personagem.mana}</p>
                <button class="preto" id="ataque-normal">${personagem.ataques[0].nome}</button>
                <button class="preto" id="ataque-especial" ${personagem.mana >= personagem.ataques[1].custoMana ? null : "disabled"}>${personagem.ataques[1].nome}</button>
            </div>
            <div id="canto-inimigo">
                <h2>${inimigos[1].nome}</h2>
                <img class="pequeno" src=${inimigos[1].imagem} />
                <p>HP: ${inimigos[1].hp}</p>
            </div>
        </div>
        `

        const ataqueNormal = document.getElementById("ataque-normal");
        const ataqueEspecial = document.getElementById("ataque-especial");
        ataqueNormal.addEventListener("click", () => {
        personagem.hp -= inimigos[1].ataque;
        inimigos[1].hp -= personagem.ataques[0].dano;
        mostrarBatalha(batalhas);
        });

        ataqueEspecial.addEventListener("click", () => {
            personagem.hp -= inimigos[1].ataque;
            inimigos[1].hp -= personagem.ataques[1].dano;
            personagem.mana -= personagem.ataques[1].custoMana;
            mostrarBatalha(batalhas);
        });
    }
}

const mostrarPersonagem = (personagem) => {
    rpgContainer.innerHTML = `<img src=${personagem.imagem} />`
    rpgEscolhas.textContent = "Seu personagem:";
    continuarBtn.disabled = false;
    continuarBtn.style.cursor = "pointer";
}

caioEscolha.addEventListener("click", () => {
    personagem = personagens[0];
    rpgTexto.textContent = "Caio, o grande mago, encara o desafio! Com seu grande cajado Lá Ele, pode lançar bolas de fogo!"
    mostrarPersonagem(personagem);
})

otavioEscolha.addEventListener("click", () => {
    personagem = personagens[1];
    rpgTexto.textContent = "Pode não ser tão inteligente, mas esse guerreiro compensa na força bruta! Ele tem um soco potente e uma CNH!"
    mostrarPersonagem(personagem);
})

manoelEscolha.addEventListener("click", () => {
    personagem = personagens[2];
    rpgTexto.textContent = "Um arqueiro ágil e astuto! Fortemente ligado com os Timbus do CB."
    mostrarPersonagem(personagem);
})

fabioEscolha.addEventListener("click", () => {
    personagem = personagens[3];
    rpgTexto.textContent = "Não se meta com ele! Fábio, um agiota barra pesada, está preparado para tudo com sua Glock sem balas! Pera...";
    mostrarPersonagem(personagem);
})

let batalhas = 0;

continuarBtn.addEventListener("click", () => {
    batalhas++;
    mostrarBatalha(batalhas);
    

})



