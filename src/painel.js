const painelAtualiza = () => {
    localStorage.setItem('atualiza', 1)
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

    localStorage.setItem('tempo', `${minute}:${second}`)
    localStorage.setItem('periodoTempo', periodoTempos)

    localStorage.setItem('horarioPPartida', horarioPPartida)

    localStorage.setItem('tituloAcima', tituloAcima)


    localStorage.setItem('tituloAviso', tituloAviso)

    localStorage.setItem('avisoInfoImportante', avisoInfoImportante)
    
    
    localStorage.setItem('uniTimeA', `background-image: linear-gradient(to left, ${meiaoTA} 33%, ${shortTA} 30%, ${shortTA} 66%, ${camisaTA} 66%, ${camisaTA} 100%);`)

    localStorage.setItem('uniTimeB', `background-image: linear-gradient(to left, ${meiaoTB} 33%, ${shortTB} 30%, ${shortTB} 66%, ${camisaTB} 66%, ${camisaTB} 100%);`)
    
}
document.addEventListener('click', () => {

 painelAtualiza()
})

const geradordeTimes = async () => {
  const response =  await fetch('/src/times')
  const data = await response.json()

  data.map( (time) => {
    const selTime = document.querySelectorAll('.geraTimes')
  

    for(let i = 0; i < selTime.length; i++){
      selTime[i].innerHTML += `<option>${time.nome}</option>`
    }

    
  })
}
geradordeTimes();

async function selecionaTime() {
  const response =  await fetch('/src/times')
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
  imgTimeA.setAttribute('src', data[aoVivoA].logo)  
  localStorage.setItem('imgTimeA',data[aoVivoA].logo)

  

  const imgTimeB = document.querySelector('#imgTimeB')
  imgTimeB.setAttribute('src', data[aoVivoB].logo)  
  
  localStorage.setItem('imgTimeB',data[aoVivoB].logo)



  const imgProximaA = document.querySelector('#imgProximaA')
  imgProximaA.setAttribute('src', data[proximoJogoA].logo)  
  localStorage.setItem('imgProximaA',data[proximoJogoA].logo)



  const imgProximaB = document.querySelector('#imgProximaB')
  imgProximaB.setAttribute('src', data[proximoJogoB].logo)  
  localStorage.setItem('imgProximaB',data[proximoJogoB].logo)

  //times Mostrador

  localStorage.setItem('mostraTimeA', timeAoVivoA)
  localStorage.setItem('mostraTimeB', timeAoVivoB)
  localStorage.setItem('TimePJogoA', TimePJogoA)
  localStorage.setItem('TimePJogoB', TimePJogoB)

  

  
  timeA.textContent = timeAoVivoA.toUpperCase()
  timeB.textContent = timeAoVivoB.toUpperCase()



  
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
  if(localStorage.getItem('intervalo') == '1'){
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
  

}
function mostrarInfoInicio() {
  document.querySelector('#blocoCima').classList.remove('dnone')
  document.querySelector('#blocoBaixo').classList.add('dnone')
}

function abrirNovaJanela() {
  window.open("/placar.html", "Placar Online", "height=600,width=1200");
}