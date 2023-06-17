import Client from "../models/Client.js";

import { Router } from "express";
const router = Router();

// view clients
router.get("/", async (req, res) => {
    let query = req.query;
    query = new Object(query);

    try {
        const result = await Client.find(query).exec();
        res.status(200).json(result);
    } catch (error) {
        console.log("Erro: "+error);
        res.status(500).json({msg: "Erro ao buscar"});
    }
    res.status(422).json({msg: "A busca não foi possível"});
})

// search by id
/*
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const query = await Client.find({id: id}).exec();
    } catch (error) {
        console.log("Erro: "+error);
        res.status(500).json({msg: "Erro ao buscar"});
    }
    res.status(200).json(query);
})
*/

// create client
router.post("/", async (req, res) => {
    const {
        nome,
        idade,
        telefone,
        status,
        qtd_sessoes
    } = req.body;

    // Validação dos dados
    const expressaoValidacao = !nome || !idade || !telefone || !status || !qtd_sessoes;
    if (expressaoValidacao) {
        return res.status(422).json({msg: "Falta de propriedade"});
    }

    const novoCliente = new Client({
        nome, idade, telefone, status, qtd_sessoes
    });
    
    try {
        await novoCliente.save();
        res.status(201).json(novoCliente);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Erro ao tentar criar um cliente"});
    }
    
})

export default router;