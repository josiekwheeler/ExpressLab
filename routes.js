"use strict";
const express = require("express");
const cartitems = require("./cart-items");
const router =  express.Router();
const pool = require("./pg-connection-pool");

console.log(pool);

function selectAll(res) {
    pool.query("select * from ShoppingCart order by id").then(result => res.json(result.rows));
}

router.get("/cartitems", (req, res) => {
    selectAll(res);
});

router.post("/cartitems", (req, res) => {
    console.log(req.body);
  pool.query ("insert into ShoppingCart (product, price, quantity) values ($1::text, $2::int, $3::int)", [
      req.body.product,
      req.body.price,
      req.body.quantity
  ]).then (()=> {
      selectAll(res);
  });
});

router.put("/cartitems/:id", (req, res) => {
   pool.query("update ShoppingCart set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int", [
       req.body.product,
       req.body.price,
       req.body.quantity,
       Number(req.params.id)
   ]).then(()=> {
       selectAll(res)
   });
});

router.delete("/cartitems/:id", (req, res) => {
  pool.query("delete from ShoppingCart where id=$1::int", [Number(req.params.id)]).then(() => {
    selectAll(res);
  });
});

module.exports = router;