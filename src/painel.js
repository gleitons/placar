console.log('Criado por: Gleiton Ap. Soares de Souza')
console.warn('www.gleiton.com.br')
console.error('Todos os direitos reservados ao criador')
console.log('.....')

const btnGols = document.querySelectorAll('.placaCentral i');


function desativarTorcida(valor) {
  const btnnfo = document.querySelector('#torcidaAudio');
  if (valor === 1) {
    localStorage.setItem('audioTorcida', 1);
    btnnfo.textContent = 'DESATIVAR SOM JOGO';
    btnnfo.setAttribute('onclick', 'desativarTorcida(0)');
  } else {
    localStorage.setItem('audioTorcida', 0);
    btnnfo.textContent = 'ATIVAR SOM JOGO';
    btnnfo.setAttribute('onclick', 'desativarTorcida(1)');
  }
}

function verificaLetras() {
  const letDigital = document.querySelector('#letDigital').value
  const qtdLetras = letDigital.length


  
  cRestante.textContent = (qtdLetras - (46)).toString().replace('-', '')

}

function golsAtivos(seta) {
  
  
  if(seta == '0') {
    const goldeCasa = parseInt(golCasa.value) + 1
    golCasa.value = goldeCasa

  } else if (seta == '1') {
    const goldeCasa = parseInt(golCasa.value) - 1
    golCasa.value = goldeCasa

  } else if (seta == '2') {
    const goldeVisitante = parseInt(golVisitante.value) + 1
    golVisitante.value = goldeVisitante

  } else  {
    const goldeVisitante = parseInt(golVisitante.value) - 1
    golVisitante.value = goldeVisitante

  }
  
}

const painelAtualiza = () => {
  localStorage.setItem('atualiza', 1)
  const letDigital = document.querySelector('#mostraPainelS').textContent
  const golCasa = document.querySelector('#golCasa').value
  const golVisitante = document.querySelector('#golVisitante').value
  const horarioPPartida = document.querySelector('#horarioPPartida').value

  const tituloAviso = document.querySelector('#tituloAviso').value

  const avisoInfoImportante = document.querySelector('#avisoInfoImportante').value

  const tituloAcima = document.querySelector('#tituloAcima').value

  

  //uniforme
  const camisaTA = document.querySelector('#camisaTA').value
  const shortTA = document.querySelector('#shortTA').value
  const meiaoTA = document.querySelector('#meiaoTA').value




  const camisaTB = document.querySelector('#camisaTB').value
  const shortTB = document.querySelector('#shortTB').value
  const meiaoTB = document.querySelector('#meiaoTB').value

  const faltasC = document.querySelector('#fCasa').value
  const faltasV = document.querySelector('#fVisitante').value

  localStorage.setItem('golC', golCasa);
  localStorage.setItem('golV', golVisitante)
  localStorage.setItem('faltasC', faltasC);
  localStorage.setItem('faltasV', faltasV)

  const minute = document.querySelector('#minute').textContent
  const second = document.querySelector('#second').textContent
  const millisecond = document.querySelector('#millisecond').textContent

  const periodoTempos = document.querySelector('#periodoTempo').value

  localStorage.setItem('letDigital', letDigital.toUpperCase())

  localStorage.setItem('tempo', `${minute}:${second}`)
  localStorage.setItem('periodoTempo', periodoTempos)

  localStorage.setItem('horarioPPartida', horarioPPartida)

  localStorage.setItem('tituloAcima', tituloAcima)


  localStorage.setItem('tituloAviso', tituloAviso)

  localStorage.setItem('avisoInfoImportante', avisoInfoImportante)


  localStorage.setItem('uniTimeA', `background-image: linear-gradient(to left, ${meiaoTA} 33%, ${shortTA} 30%, ${shortTA} 66%, ${camisaTA} 66%, ${camisaTA} 100%);`)

  localStorage.setItem('uniTimeB', `background-image: linear-gradient(to left, ${meiaoTB} 33%, ${shortTB} 30%, ${shortTB} 66%, ${camisaTB} 66%, ${camisaTB} 100%);`)


  const mensagensPadrao = [`${localStorage.getItem('mostraTimeA')} x ${localStorage.getItem('mostraTimeB')}`,`PROX: ${localStorage.getItem('TimePJogoA')} x ${localStorage.getItem('TimePJogoB')} - ${localStorage.getItem('horarioPPartida')}hs`,`FALTAS: ${localStorage.getItem('mostraTimeA')}: ${localStorage.getItem('faltasC')} - ${localStorage.getItem('mostraTimeB')}: ${localStorage.getItem('faltasV')}`, `REALIZACAO: PREFEITURA E SECRETARIA DE ESPORTE`]

  localStorage.setItem('itensAtualizado', JSON.stringify(mensagensPadrao))

}

if(localStorage.getItem('atualizador') == null) {
  localStorage.setItem('atualiador', 0)
} else {
  var numbT = localStorage.getItem('atualizador')
} 

document.addEventListener('onclick', () => {
  localStorage.setItem('atualiador', numbT + 1)
})


const geradordeTimes = async () => {
  const response = await fetch('/src/times')
  const data = await response.json()

  data.map((time) => {
    const selTime = document.querySelectorAll('.geraTimes')


    for (let i = 0; i < selTime.length; i++) {
      selTime[i].innerHTML += `<option>${time.nome}</option>`
    }


  })
}
geradordeTimes();

async function selecionaTime() {
  const response = await fetch('/src/times')
  const data = await response.json()

  const timeA = document.querySelector('#timeA')
  const timeB = document.querySelector('#timeB')

  const aoVivoa = document.querySelector('#aovivoTimeA')
  const aoVivoA = document.querySelector("#aovivoTimeA").selectedIndex
  const timeAoVivoA = aoVivoa.options[aoVivoa.selectedIndex].textContent


  const aoVivob = document.querySelector('#aovivoTimeB')
  const aoVivoB = document.querySelector("#aovivoTimeB").selectedIndex
  const timeAoVivoB = aoVivob.options[aoVivob.selectedIndex].textContent

  const proximoJogoa = document.querySelector('#sTime01')
  const proximoJogoA = document.querySelector("#sTime01").selectedIndex
  const TimePJogoA = proximoJogoa.options[proximoJogoa.selectedIndex].textContent



  const proximoJogob = document.querySelector('#sTime02')
  const proximoJogoB = document.querySelector("#sTime02").selectedIndex
  const TimePJogoB = proximoJogob.options[proximoJogob.selectedIndex].textContent


  const imgTimeA = document.querySelector('#imgTimeA')
  imgTimeA.setAttribute('src', data[aoVivoA].logom)
  localStorage.setItem('imgTimeA', data[aoVivoA].logo)



  const imgTimeB = document.querySelector('#imgTimeB')
  imgTimeB.setAttribute('src', data[aoVivoB].logom)

  localStorage.setItem('imgTimeB', data[aoVivoB].logo)



  const imgProximaA = document.querySelector('#imgProximaA')
  imgProximaA.setAttribute('src', data[proximoJogoA].logom)
  localStorage.setItem('imgProximaA', data[proximoJogoA].logo)



  const imgProximaB = document.querySelector('#imgProximaB')
  imgProximaB.setAttribute('src', data[proximoJogoB].logom)
  localStorage.setItem('imgProximaB', data[proximoJogoB].logo)

  //times Mostrador

  localStorage.setItem('mostraTimeA', timeAoVivoA)
  localStorage.setItem('mostraTimeB', timeAoVivoB)
  localStorage.setItem('TimePJogoA', TimePJogoA)
  localStorage.setItem('TimePJogoB', TimePJogoB)




  timeA.textContent = timeAoVivoA.toUpperCase()
  timeB.textContent = timeAoVivoB.toUpperCase()

  faltasHomeA.textContent = timeAoVivoA.toUpperCase()
  faltasHomeB.textContent = timeAoVivoB.toUpperCase()

  uniFA.textContent = timeAoVivoA.toUpperCase()
  uniFB.textContent = timeAoVivoB.toUpperCase()




}




//setInterval('painelAtualiza()', 1000)


"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}
localStorage.setItem('intervalo', 0)
localStorage.setItem('situacao', 0)

function intervalo() {
  if (localStorage.getItem('intervalo') == '1') {
    localStorage.setItem('intervalo', 0)
    localStorage.setItem('situacao', 0)
  } else {
    localStorage.setItem('intervalo', 1)
    localStorage.setItem('situacao', 1)
  }

}

function mostraInfoAdd() {
  document.querySelector('#blocoCima').classList.add('dnone')
  document.querySelector('#blocoBaixo').classList.remove('dnone')
  document.querySelector('#blocoImagens').classList.add('dnone')


}
function mostraIntervalo() {
  document.querySelector('#blocoCima').classList.add('dnone')
  document.querySelector('#blocoBaixo').classList.add('dnone')
  document.querySelector('#blocoImagens').classList.remove('dnone')


}
function mostrarInfoInicio() {
  document.querySelector('#blocoCima').classList.remove('dnone')
  document.querySelector('#blocoBaixo').classList.add('dnone')
  document.querySelector('#blocoImagens').classList.add('dnone')

}

function abrirNovaJanela() {
  localStorage.setItem('sai', 0)
  setTimeout(()=>{window.open("/placar.html", "Placar Online", "height=1000,width=1920")}, 0)
  
}
function abrirNovaJanela2() {
  window.open("/placar-2.html", "Placar Online", "height=1000,width=1920");
}
function fecharDivSlide(idDiv) {
  document.querySelector(`#divSlide${idDiv}`).remove()
}
function adicionarImgSlide() {

  if (document.querySelectorAll('.divImg').length == null) {
    var numeroDiv = 0
  } else {
    var numeroDiv = (document.querySelectorAll('.divImg').length) + 1
  }
 
  const OndeAddimage = document.querySelector('#imagensGeradas')
  const divImg = document.createElement('div')
  const inputImgDiv = document.createElement('input')
  inputImgDiv.setAttribute('type', 'text')
  divImg.setAttribute('id', `divSlide${numeroDiv}`)
  inputImgDiv.setAttribute('class', 'inputImagens')


  const btnImg = document.createElement('button')
  btnImg.setAttribute('onclick', `fecharDivSlide(${numeroDiv})`)
  btnImg.textContent = 'x'

  divImg.appendChild(inputImgDiv)
  divImg.appendChild(btnImg)

  OndeAddimage.appendChild(divImg)
}


function pegarImagensSlide() {
  var imgArray = []
  const imagensTotais = document.querySelectorAll('.inputImagens');
  for (let i = 0; i < imagensTotais.length; i++) {
     
    if (imagensTotais[i].value != '') {
      const linkimg = imagensTotais[i].value;
      imgArray.push(linkimg)
    }



    localStorage.setItem('imagemSlide', JSON.stringify(imgArray))
  }
  btnCarrega.textContent = `Carregando ${imgArray.length} Imagens...`

  setTimeout(() => {
    btnCarrega.textContent = `Imagens Carregadas`
  }, 10000)
  setTimeout(() => {
    btnCarrega.textContent = `Enviar Imagens`
  }, 12000)
  


}
function segundosImg() {
  localStorage.setItem('segundos', document.querySelector('#segundosImagens').value)
}

function carregaLetreiro() {
  const mPadraoA = document.querySelector('#mPadrao')
  const mPadrao = mPadraoA.options[mPadraoA.selectedIndex].value
  const data = JSON.parse(localStorage.getItem('itensAtualizado'))
  const mostraPainelS = document.querySelector('#mostraPainelS')
  
  if(document.querySelector('#letDigital').value == '') {
    if(mPadrao == '0') {
      mostraPainelS.textContent = document.querySelector('#letDigital').value
    } else if (mPadrao == '1') {
      mostraPainelS.textContent = data[0].toUpperCase()
    } else if (mPadrao == '2') {
      mostraPainelS.textContent = data[1].toUpperCase()
    } else if (mPadrao == '3'){
      mostraPainelS.textContent = data[2].toString().toUpperCase()
    }  else {
      mostraPainelS.textContent =  data[3].toUpperCase()
    }
  
  } else {
    mostraPainelS.textContent = document.querySelector('#letDigital').value.toUpperCase()
  }

  
}
document.addEventListener('mousemove', () => {
  eventos()
  
}, 'keyup')
document.addEventListener('keyup', () => {
  eventos()
  
},)
document.addEventListener('click', () => {
  eventos()
  
},)
function eventos() {
  carregaLetreiro()
  painelAtualiza()
}
function mostraShowT(n) {
  localStorage.setItem('mstimes', n)
}
function paraAnimacao() {
  localStorage.setItem('stop', 1)
}

function darkMode(sel) {
  if(sel == 0){
    const seletorTema = document.querySelector('#seletorTema')
    seletorTema.setAttribute('onclick', 'darkMode(1)')
    localStorage.setItem('dmode', 0)
  } else {
    seletorTema.setAttribute('onclick', 'darkMode(0)')
    localStorage.setItem('dmode', 1)
  }
  

  const icone = document.querySelector('#temaDark').src
  const alterb = document.querySelector('#temaDark')

  if(icone == 'https://placaronline.netlify.app/src/logos/dark.png') {
    alterb.setAttribute('src', '/src/logos/light.png')
  } else {
    alterb.setAttribute('src', 'https://placaronline.netlify.app/src/logos/dark.png')
  }
  const corpo = document.body.classList.toggle('temaDark')

  blocoCima.classList.toggle('temaDark')
  blocoImagens.classList.toggle('temaDark')
  letreiro.classList.toggle('temaDark')
  const pnc = document.querySelector('.painelControle')
  pnc.classList.toggle('temaDark')
  
}

const ldigital = document.querySelector('#ldigital')
ldigital.addEventListener('click',() => {
  const escondeJanela = document.querySelector('#escondeJanela')
  escondeJanela.classList.toggle('dnone')
  if(ldigital.textContent == '*Abrir: Letreiro Digital') {
    ldigital.textContent = '*Fechar: Letreiro Digital'
  } else {
    ldigital.textContent = '*Abrir: Letreiro Digital'
  }
  
})