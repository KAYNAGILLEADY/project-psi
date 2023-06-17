import mongoose from "mongoose";

const atendimentoSchema = new mongoose.Schema({
    data: Date, // AAAA-MM-DD
    ordem_atendimento: Number,
    problema: String,
    cliente: mongoose.Schema.Types.ObjectId
});

const Atendimento = mongoose.model("Atendimento", atendimentoSchema);
export default Atendimento; 