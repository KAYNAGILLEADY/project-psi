import Atendimento from '../models/Atendimento.js';

import { Router } from "express";
const router = Router();

// view atendimentos
router.get("/", async (req, res) => {
    let query = req.query;
    query = new Object(query);

    try {
        const result = await Atendimento.find(query).exec();
        return res.status(200).json(result);
    } catch (error) {
        console.log("Erro: "+error);
        return res.status(500).json({msg: "Erro ao buscar"});
    }
})

// create atendimentos
router.post('/', async (req, res) => {
    const {
        data,
        ordem_atendimento,
        problema,
        cliente
    } = req.body;

    // Validação dos dados
    const expressaoValidacao = !data || !ordem_atendimento || !problema || !cliente;
    if (expressaoValidacao) {
        return res.status(422).json({msg: "Falta de propriedade"});
    }

    const novoAtendimento = new Atendimento({
        data, ordem_atendimento, problema, cliente
    });
    
    try {
        await novoAtendimento.save();
        res.status(201).json(novoAtendimento);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Erro ao tentar criar um cliente"});
    }
})

export default router;
