document
.getElementById("entrar")
.onclick = async ()=>{

  alert("click funciona")
  window.location.href = "torneo.html"
  return

const instagram =
document
.getElementById("instagram")
.value

  if(

instagram == "" ||

!instagram.startsWith("@")

){

document
.getElementById("estado")
.innerText =
"Ingresá un Instagram válido"

return

}


// =======================
// UBICACION
// =======================

navigator
.geolocation
.getCurrentPosition(

(pos)=>{

await fetch("/registro",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

instagram,

lat:
pos.coords.latitude,

lon:
pos.coords.longitude

})

})

window.location.href =
"torneo.html"

}

)

}
