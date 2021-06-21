import { model, Schema } from "mongoose";

const produtoSchema = new Schema({
    nome: {
        type: String,
        required: [true, "O campo nome é obrigatório"],
    },
    codigoBarras: {
        type: String,
        required: [true, "O campo código de barras é obrigatório"],
    },

    preco: {
       type: Number,
       required: [true, "O campo preço é obrigatório"]
    },

    criadoEm: {
        type: Date
    },
},
);

export default model ("produtos", produtoSchema);