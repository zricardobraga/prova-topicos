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
        type: Date,
<<<<<<< HEAD
        default: Date.now
    },
=======
        defaut: Date.now,
     },
>>>>>>> 4b6d61f3b7298d9321e0411e39c8727b6d6fdcbb
},
);

export default model ("produtos", produtoSchema);