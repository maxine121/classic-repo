const secaoItalao = document.getElementById("italo-secao");
const secaoManoel = document.getElementById("caixeta-manoelica");
const secaoFabio = document.getElementById("fabio-secao");
const botaoItalao = document.getElementById("botao-italo")
const botaoManoel = document.getElementById("botao-manoel");
const botaoFabio = document.getElementById("botao-fabio");
const botaoCaio = document.getElementById("botao-caio");
const secaoCaio = document.getElementById("caio-secao");

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

function funcaoCaio() {
    if (secaoCaio.style.display === "none") {
        secaoCaio.style.display = "flex";
    } else {
        secaoCaio.style.display = "none";
    }
}

botaoItalao.addEventListener("click", funcaoItalao);
botaoManoel.addEventListener("click", funcaoManoelica);
botaoFabio.addEventListener("click", funcaoFabio);
botaoCaio.addEventListener("click", funcaoCaio);


const easterInput = document.getElementById("input-easter-egg");
const confirmarBotao = document.getElementById("confirmar");
const easterEgg = document.getElementById("easter-egg");
const easterMensagem = document.getElementById("easter-mensagem")

const senhaMeiaSete = /(?:67)|(?:meia|six) (?:sete|seven)/i;
const senhaFranciscao = /(?:classic|franciscao|banana)/i;
const senhaLabubu = /(?:labubu)/i;

confirmarBotao.addEventListener("click", () => {
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
                                <img src="https://media.discordapp.net/attachments/1373399163429195829/1391222097778442402/Franciscao.jpg?ex=6966ea8b&is=6965990b&hm=332c8fdad57b4a75b0e2c67a43499b638882704e95cf5d65aa86292b58be5557&=&format=webp&width=864&height=842" />`;
    } else {
        easterEgg.innerHTML = "";
        return;
    }
    window.scrollTo({
        top: 50,
        behavior: 'smooth'
    })
})

easterInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
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
                                <img src="https://media.discordapp.net/attachments/1373399163429195829/1391222097778442402/Franciscao.jpg?ex=6966ea8b&is=6965990b&hm=332c8fdad57b4a75b0e2c67a43499b638882704e95cf5d65aa86292b58be5557&=&format=webp&width=864&height=842" />`;
        } else {
            easterEgg.innerHTML = "";
            easterMensagem.textContent = "errou!";
            easterInput.value = "";
            return;
        }
        easterMensagem.textContent = "acertou! Quer tentar outro easter egg?";
        easterInput.value = "";
        window.scrollTo({
            top: 50,
            behavior: 'smooth'
        })
    }
})