const mongoose = require("mongoose");

const Produto = mongoose.model("Produto", {
    nome: String,
    valor: Number,
    disponivel: Boolean
});

module.exports = Produto;