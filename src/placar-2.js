var segundos = () => {
    return localStorage.getItem('segundos') * 1000;


}
function tocaSom(n) {
    const torcida = document.querySelectorAll('audio')[0]
    if (n == 1) {
        torcida.volume = 0.2
        torcida.play()
        torcida.loop = true;
    } else {
        torcida.loop = false;
        torcida.pause();
        torcida.currentTime = 0;
    }

}
// tocaSom(1)
function golTorcida() {
    const torcida = document.querySelectorAll('audio')[1]
    torcida.volume = 1
    torcida.play()
    // torcida.loop = true;  

}

var atualizaOn = () => {

    const timeCasa = document.querySelector('#timeCasa')
    const timeVisitante = document.querySelector('#timeVisitante')

    const periodoTempoMostra = document.querySelector('#periodoTempoMostra')
    const horarioPPartida = document.querySelector('#horarioPPartida')

    const mostraPLed = document.querySelector('#mostraPLed')


    const tituloAcima = document.querySelector('#tituloAcima')
    const avisoInfoImportante = document.querySelector('#avisoInfoImportante')

    const goldeCasaimg = document.querySelector('#goldeCasa')
    const goldoVisitanteimg = document.querySelector('#goldoVisitante')

    goldeCasaimg.setAttribute('style', `background-image: url('${localStorage.getItem('imgTimeA')}'); background-size: contain; background-repeat: no-repeat;background-position: center;`)
    goldoVisitanteimg.setAttribute('style', `background-image: url('${localStorage.getItem('imgTimeB')}'); background-size: contain; background-repeat: no-repeat;background-position: center;`)


    //mostrador time
    const mostraTimeA = document.querySelector('#mostraTimeA')
    const mostraTimeB = document.querySelector('#mostraTimeB')

    const proPTimeA = document.querySelector('#proPTimeA')
    const proPTimeB = document.querySelector('#proPTimeB')

    //uniformes dos times

    const uniTimeA = document.querySelector('#uniTimeA')
    const uniTimeB = document.querySelector('#uniTimeB')


    const imgTimeCimaA = document.querySelector('#imgTimeCimaA')
    const imgTimeCimaB = document.querySelector('#imgTimeCimaB')

    const timaCentroA = document.querySelector('#timaCentroA')
    const timaCentroB = document.querySelector('#timaCentroB')

    const proximoLogoTimeA = document.querySelector('#proximoLogoTimeA')
    const proximoLogoTimeB = document.querySelector('#proximoLogoTimeB')



    const faltasCasa = document.querySelector('#faltasCasa')
    const faltasVisitante = document.querySelector('#faltasVisitante')


    timeCasa.textContent = localStorage.getItem('golC')
    timeVisitante.textContent = localStorage.getItem('golV')

    timeTempo.textContent = localStorage.getItem('tempo')
    periodoTempoMostra.textContent = localStorage.getItem('periodoTempo')

    faltasCasa.textContent = localStorage.getItem('faltasC')
    faltasVisitante.textContent = localStorage.getItem('faltasV')

    imgTimeCimaA.setAttribute('src', localStorage.getItem('imgTimeA'))
    timaCentroA.setAttribute('src', localStorage.getItem('imgTimeA'))

    imgTimeCimaB.setAttribute('src', localStorage.getItem('imgTimeB'))
    timaCentroB.setAttribute('src', localStorage.getItem('imgTimeB'))

    proximoLogoTimeA.setAttribute('src', localStorage.getItem('imgProximaA'))
    proximoLogoTimeB.setAttribute('src', localStorage.getItem('imgProximaB'))


    uniTimeA.setAttribute('style', localStorage.getItem('uniTimeA'))
    uniTimeB.setAttribute('style', localStorage.getItem('uniTimeB'))

    tituloAcima.textContent = localStorage.getItem('tituloAcima')
    avisoInfoImportante.textContent = localStorage.getItem('avisoInfoImportante')

    mostraTimeA.textContent = localStorage.getItem('mostraTimeA').toUpperCase()
    mostraTimeB.textContent = localStorage.getItem('mostraTimeB').toUpperCase()

    proPTimeA.textContent = localStorage.getItem('TimePJogoA').toUpperCase()
    proPTimeB.textContent = localStorage.getItem('TimePJogoB').toUpperCase()

    mostraPLed.textContent = localStorage.getItem('letDigital')

    horarioPPartida.textContent = localStorage.getItem('horarioPPartida')

    const mostrador = document.querySelector('#mostrador')
    if (localStorage.getItem('intervalo') == '0') {

        document.querySelector('#intervaloOn').style.display = 'none'
        mostrador.textContent = 'AO VIVO'

    } else {
        document.querySelector('#intervaloOn').style.display = 'block'
        mostrador.textContent = 'INTERVALO'
        const alteraImgSlides = document.querySelector('#alteraImgSlides')
        var images = JSON.parse(localStorage.getItem('imagemSlide'))
        const secon = segundos()
        let i = 0;
        setInterval(() => {
            // const imgP = document.querySelector('img')
            // const intervaloOn = document.querySelector('#intervaloOn')
            // //<img id="alteraImgSlides" src="./src/logos/cartaz.jpg" alt="">
            // imgP.setAttribute('id', 'alteraImgSlides')
            // imgP.setAttribute('alt', 'Futuro Consultoria')
            // intervaloOn.appendChild(imgP)

            i = i < images.length - 1 ? i + 1 : 0;
            alteraImgSlides.src = images[i]
        }, 10000);
    }

}
function retiraGol() {
    document.querySelector('#aberturaGol').innerHTML = ``
    document.querySelector('#aberturaGol').classList.remove('gol')

}
// window.onstorage = () => { };
// //setInterval('atualizaOn()', 1000)
function limpaCC() {
    const idTime = document.querySelector('#goldeCasa')
    const idTimeB = document.querySelector('#goldoVisitante')
    idTime.classList.remove('showTimeA')
    idTimeB.classList.remove('showTimeB')
}
function sTimeA() {

    const idTime = document.querySelector('#goldeCasa')
    idTime.classList.add('showTimeA')
    // setTimeout(limpaCC, 5000)
}
function sTimeB() {

    const idTime = document.querySelector('#goldoVisitante')

    idTime.classList.add('showTimeB')
    // setTimeout(limpaCC, 5000)

}

window.onstorage = function (e) {
    const verificaAudioTorcida = localStorage.getItem('audioTorcida')
    console.log(verificaAudioTorcida)
    if (verificaAudioTorcida == 1) {
        tocaSom(1)
    } else {
        tocaSom(0)
    }
    var golAtualC = document.querySelector('#timeCasa').textContent
    var golAtualV = document.querySelector('#timeVisitante').textContent
    const d = localStorage.getItem('mstimes')
    if (d == 0) {
        sTimeA()
        localStorage.setItem('mstimes', 0)
    } else if (d == 1) {
        sTimeB()
        localStorage.setItem('mstimes', 1)
    } else {
        limpaCC()
        localStorage.setItem('mstimes', 2)
    }

    if (e.key == 'sai') {
        if (localStorage.getItem('sai') == 0) {
            const po = document.querySelector('#po')
            po.classList.add('animSai')
        }
    }
    if (e.key == 'golC') {

        const gca = localStorage.getItem('golC')
        if (parseInt(golAtualC) - 1 < gca) {
            document.querySelector('#aberturaGol').innerHTML = `<div>
            <img id="" src="${localStorage.getItem('imgTimeA')}" alt="">
        </div>`
            golTorcida()
        }
        document.querySelector('#aberturaGol').classList.add('gol')

        setTimeout('retiraGol()', 5000)

    } else if (e.key == 'golV') {

        const gcv = localStorage.getItem('golV')
        if (parseInt(golAtualV) - 1 < gcv) {
            document.querySelector('#aberturaGol').innerHTML = `<div>
        <img id="" src="${localStorage.getItem('imgTimeB')}" alt="">
    </div>`
            golTorcida()
        }

        document.querySelector('#aberturaGol').classList.add('gol')

        setTimeout('retiraGol()', 5000)

    } else {

    }
    if (e.key == 'stop') {
        if (localStorage.getItem('stop') == 1)
            retiraGol()
        localStorage.setItem('stop', 0)
    }

    atualizaOn()

};
atualizaOn()


function horaAtual() {
    const horaAtualVivo = document.querySelector('#horaAtualVivo')
    const atual = new Date()
    const hora = atual.getHours()
    const minutos = atual.getMinutes()

    if (minutos.toString().length == 1) {
        var minutosC = `0${minutos.toString()}`
    } else {
        var minutosC = `${minutos.toString()}`
    }

    horaAtualVivo.innerHTML = `${hora}<span class="tickSegundos">:</span>${minutosC}`

}
//setInterval('horaAtual()', 1000)

