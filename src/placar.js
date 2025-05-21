var segundos = () => {
  return  localStorage.getItem('segundos') * 1000;
    

}
var atualizaOn = () => {
    const timeCasa = document.querySelector('#timeCasa')
    const timeVisitante = document.querySelector('#timeVisitante')

    const periodoTempoMostra = document.querySelector('#periodoTempoMostra')
    const horarioPPartida = document.querySelector('#horarioPPartida')


    const tituloAcima = document.querySelector('#tituloAcima')
    const avisoInfoImportante = document.querySelector('#avisoInfoImportante')



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


    horarioPPartida.textContent = localStorage.getItem('horarioPPartida')

    const mostrador = document.querySelector('#mostrador')
    if (localStorage.getItem('intervalo') == '0') {
        document.querySelector('#intervaloOn').style.display = 'none'
        const linkk = window.location.pathname
        if(linkk == '/placar-2.html') {
            mostrador.textContent = 'AO VIVO'
        } else {
            mostrador.textContent = 'INTERVALO'
        }
        
        

    } else {
        
        document.querySelector('#intervaloOn').style.display = 'block'
        mostrador.textContent = 'INTERVALO'
        const alteraImgSlides = document.querySelector('#alteraImgSlides')
        

        var images = JSON.parse(localStorage.getItem('imagemSlide'))
        const secon = segundos()
        let i = 0;
        setInterval( () => {
                      
            i = i < images.length - 1 ? i + 1 : 0;
            alteraImgSlides.src = images[i]
            

        }, 10000);


    }







}
atualizaOn()


function retiraGol() {
    document.querySelector('#goldeCasa').classList.remove('goll')
    document.querySelector('#goldoVisitante').classList.remove('goll')
    document.querySelector('#placarComImgCimaA').classList.remove('dnone')
    document.querySelector('#placarComImgCimaB').classList.remove('dnone')
}
// window.onstorage = () => { };
// //setInterval('atualizaOn()', 1000)
window.onstorage = function (e) {
    var golAtualC = document.querySelector('#timeCasa').textContent
    var golAtualV = document.querySelector('#timeVisitante').textContent

    if (e.key == 'golC') {
        const gca = localStorage.getItem('golC')
        if(parseInt(golAtualC) - 1 < gca){ 
            document.querySelector('#goldeCasa').classList.add('goll')
        document.querySelector('#placarComImgCimaA').classList.add('dnone')
        document.querySelector('#placarComImgCimaB').classList.add('dnone')
        
        }
        setTimeout('retiraGol()', 6000)
        

    } else if (e.key == 'golV') {
        const gcv = localStorage.getItem('golV')
        if(parseInt(golAtualV) - 1 < gcv){
        document.querySelector('#goldoVisitante').classList.add('goll')
        document.querySelector('#placarComImgCimaA').classList.add('dnone')
        document.querySelector('#placarComImgCimaB').classList.add('dnone')
        }
        setTimeout('retiraGol()', 6000)

    } else {
        
    }
    atualizaOn()

};

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
setInterval('horaAtual()', 1000)

