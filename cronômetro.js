var ss = 0;
var mm = 0;
var hh = 0;


var inicio = document.getElementById('inicio')
var parado = document.getElementById("Parar")
var zerado = document.getElementById("zerar")
var segundos = document.getElementById("segundos")
var minutos = document.getElementById("minutos")
var horas = document.getElementById("horas")

var cron

function iniciar(){
cron = setInterval(counter,1000)
inicio.disabled=true

}



function parar(){
clearInterval(cron)
inicio.disabled=false
}

function zerar(){
    inicio.disabled=false
    clearInterval(cron)
    ss=0
    mm=0
    hh=0
    segundos.innerHTML='00'
    minutos.innerHTML='00'
    horas.innerHTML='00'
}
function counter(){
    ss++
    if(ss==60){
        ss=0
        mm++
        mm<10?mm='0'+mm:mm=mm
        minutos.innerHTML=mm
    }
    ss<10?ss='0'+ss:ss=ss
    segundos.innerHTML = ss
    if(mm==60){
        mm=0
        hh++
        hh<10?hh='0'+hh:hh=hh
        horas.innerHTML = hh
    }
   
  
  
}

zerado.addEventListener('click',zerar)
parado.addEventListener('click',parar)
inicio.addEventListener('click',iniciar)
