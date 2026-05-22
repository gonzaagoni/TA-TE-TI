
document
.getElementById("entrar")
.onclick = async ()=>{

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

navigator
.geolocation
.getCurrentPosition(

async(pos)=>{

try{

await fetch("/registro",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

instagram,

lat:pos.coords.latitude,

lon:pos.coords.longitude

})

})

window.location.href =
"/torneo.html"

}catch(error){

document
.getElementById("estado")
.innerText =
"Error al ingresar"

}

},

()=>{

document
.getElementById("estado")
.innerText =
"Tenés que permitir ubicación"

}

)

}
