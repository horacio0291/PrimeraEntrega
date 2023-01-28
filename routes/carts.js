const { Router } = require("express");
const fs = require("fs");
const cartsRouter = Router();
const CartManager = require("../../CartManager");
const manager = new CartManager("./carts.json");

let = newCart = {id:0, products:[]}

cartsRouter.post("/add", async (req, res) => {
    await manager.addCart(newCart);
    res.send("Added Cart successfully");
  });




module.exports = cartsRouter;


// let newId = 0;
// let carts = [];

// const autoIncrementalId = () => {
//   newId++;
//   return newId;
// };

// cartsRouter.post("/", (req, res) => {
//   let newCart = { id: autoIncrementalId(), products: [] };
//   carts.push(newCart);
//   res.send(carts);
// });

// cartsRouter.get('/:cid', (req,res)=>{
//     let id = req.params.cid;
// })