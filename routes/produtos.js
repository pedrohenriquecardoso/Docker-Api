const express = require("express");
const Produto = require("../models/produto");
const router = express.Router();


router.get("/", async (req, res) => {
  await Produto.find((err, all = []) => {
    if (err) res.send("ERRO PARA BUSCAR");
    res.json(all);
  });
});

router.post("/", (req, res) => {
  const produto = new Produto(req.body);
  produto
    .save()
    .then((savedProduto) => res.json(savedProduto))
    .catch(() => res.send("ERRO AO CADASTRAR"));
});

router.put("/:id", (req, res) => {
  console.log("ID:" + req.params.id);
  console.log("BODY:" + JSON.stringify(req.body));
  Produto.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send("ATUALIZADO COM SUCESSO"))
    .catch(() => res.send("ERRO AO ATUALIZAR"));
});

router.delete("/:id", (req, res) => {
  Produto.findByIdAndDelete(req.params.id)
    .then(() => res.send("REMOVIDO COM SUCESSO"))
    .catch(() => res.send("ERRO AO REMOVER"));
});

module.exports = router;