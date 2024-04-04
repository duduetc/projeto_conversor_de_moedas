let valoresConversao = {
    dolar: {
        euro: 0.92,
        libra: 0.79,
        real: 5.02
    },

    euro: {
        dolar: 1.09,
        libra: 0.86,
        real: 5.46
    },

    libra: {
        dolar: 1.27,
        euro: 1.17,
        real: 6.36
    },

    real: {
        dolar: 0.20,
        euro: 0.18,
        libra: 0.16
    }
};



function converter() {
    let valorUsuario = document.getElementById("valor-usuario").value;

    let moedaOrigem = document.getElementById("moeda1").value;
    let moedaDestino = document.getElementById("moeda2").value;

    let conversao = valorUsuario * valoresConversao[moedaOrigem][moedaDestino];

    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = conversao;

    console.log(conversao);
}

function inverter() {
    let moeda1 = document.getElementById("moeda1").value;
    let moeda2 = document.getElementById("moeda2").value;
    
    document.getElementById("moeda1").value = moeda2;
    document.getElementById("moeda2").value = moeda1;
}