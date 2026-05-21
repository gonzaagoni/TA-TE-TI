let jugadores = 1

setInterval(()=>{

if(jugadores < 10){

jugadores++

document
.getElementById("jugadores")
.innerText = jugadores

}

},2000)
