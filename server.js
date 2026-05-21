const express = require("express")

const app = express()

app.use(express.json())

app.use(express.static("public"))


// =======================
// REGISTRO
// =======================

app.post("/registro",(req,res)=>{

console.log("\n========== NUEVO JUGADOR ==========")

console.log(req.body)

res.sendStatus(200)

})


// =======================
// START
// =======================

const PORT =
process.env.PORT || 3000

app.listen(PORT,()=>{

console.log("Servidor iniciado")

})

