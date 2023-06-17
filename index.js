// imports routes
import routerAtendimento from "./routes/atendimentos.js";
import routerClientes from "./routes/clientes.js"

import { startDB } from "./database/db.js";
import express from "express";

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send("Olá, Mundo!!")
})

//Routes
// Preciso privar estas rotas!!!!!!!!!!
app.use("/clientes", routerClientes);
app.use('/atendimentos', routerAtendimento);

startDB();
app.listen(8080, () => 
    console.log("Api on")
)