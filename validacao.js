function verificaSeOhutePossuiUmValorValido (chute) {
    const numero = +chute;

    if  (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido (numero)) {
        elementoChute.innerHTML += `<div>valor inválido: o número secreto tem que estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numerSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numerSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        ` 
    } else if(numero > numerSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long">
        </i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})