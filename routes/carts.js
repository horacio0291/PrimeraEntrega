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

  fs.readFile("./carts.json", "utf8", async (err, data) => {
    carts = JSON.parse(data);

    let totalProducts = JSON.parse(await products.getProducts());
    let productId = totalProducts.find((prod) => prod.id == pid);

    let newProduct = { id: productId.id, quantity: 1 };

    let cartsToArray = Array.from(carts[0].products);

    let isInCart = cartsToArray.find((product) => product.id == pid);
    if (isInCart) {
      carts[cid - 1].products[pid].quantity += 1;
    } else {
      carts[cid - 1].products.push(newProduct);
    }

    let json = JSON.stringify(carts);

    await fs.promises.writeFile("./carts.json", json);
  });

  res.send("Added");
});

module.exports = cartsRouter;
