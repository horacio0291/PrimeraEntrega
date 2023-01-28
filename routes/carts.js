const { Router } = require("express");
const fs = require("fs");
const cartsRouter = Router();
const CartManager = require("../../CartManager");
const manager = new CartManager("./carts.json");
const products = new CartManager("./products.json");

let = newCart = { id: 0, products: [] };
let = newProduct = { id: 0, quantity: 1 };

cartsRouter.post("/add", async (req, res) => {
  await manager.addCart(newCart);
  res.send("Added Cart successfully");
  res.send();
});

cartsRouter.get("/:cid", async (req, res) => {
  let id = req.params.cid;
  let cartId = await manager.getCartById(id);
  if (!cartId) {
    res.send("404 - ID not found");
  } else {
    res.send(cartId.products);
  }
});

cartsRouter.post("/:cid/product/:pid", async (req, res) => {
  let cid = req.params.cid;
  let pid = req.params.pid;

  let cartId = await manager.getCartById(cid);
  let totalProducts = JSON.parse(await products.getProducts());

  let productId = totalProducts.find((prod) => prod.id == pid);

  cartId.products.push({ id: productId.id, quantity: 10 });
  await manager.saveProduct()

  res.send(cartId);
});

module.exports = cartsRouter;
