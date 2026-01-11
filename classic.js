const secaoItalao = document.getElementById("italo-secao");
const secaoManoel = document.getElementById("caixeta-manoelica");
const secaoFabio = document.getElementById("fabio-secao");
const botaoItalao = document.getElementById("botao-italo")
const botaoManoel = document.getElementById("botao-manoel");
const botaoFabio = document.getElementById("botao-fabio");

function funcaoItalao() {
    if (secaoItalao.style.display === "none") {
        secaoItalao.style.display = "flex";
    } else {
        secaoItalao.style.display = "none";
    }
}

function funcaoManoelica() {
    if (secaoManoel.style.display === "none") {
        secaoManoel.style.display = "flex";
    } else {
        secaoManoel.style.display = "none";
    }
}

function funcaoFabio() {
    if (secaoFabio.style.display === "none") {
        secaoFabio.style.display = "flex";
    } else {
        secaoFabio.style.display = "none";
    }
}

botaoItalao.addEventListener("click", funcaoItalao);
botaoManoel.addEventListener("click", funcaoManoelica);
botaoFabio.addEventListener("click", funcaoFabio);
