import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    telefone: {
        type: Number,
        unique: true
    },
    status: String,
    qtd_sessoes: Number
});

const Client = mongoose.model("Client", clientSchema);
export default Client;