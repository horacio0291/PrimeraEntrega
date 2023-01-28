const { Router } = require("express");
const fs = require("fs");
const cartsRouter = Router();

let newId = 0;
let carts = [];

const autoIncrementalId = () => {
  newId++;
  return newId;
};

cartsRouter.post("/", (req, res) => {
  let newCart = { id: autoIncrementalId(), products: [] };
  carts.push(newCart);
  res.send(carts);
});

cartsRouter.get('/:cid')

module.exports = cartsRouter;
