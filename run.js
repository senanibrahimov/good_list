let express = require("express");
let app = express();

const uuid = require("uuid");

const goods = [
  { id: uuid(), name: "test1", price: 21, count: 100 },
  { id: uuid(), name: "test2", price: 21, count: 100 },
  { id: uuid(), name: "test3", price: 33, count: 100 },
  { id: uuid(), name: "test4", price: 33, count: 100 },
  { id: uuid(), name: "test5", price: 33, count: 100 },
  { id: uuid(), name: "test6", price: 33, count: 100 },
  { id: uuid(), name: "test7", price: 33, count: 100 },
  { id: uuid(), name: "test8", price: 33, count: 100 },
  { id: uuid(), name: "test9", price: 33, count: 100 },
  { id: uuid(), name: "test10", price: 33, count: 100 },
];

app.listen(3000, () => {
  console.log("listening on 3000");
});
app.get("/", async (_, res) => {
  res.json(goods);
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const goodsWithId = goods.filter((element) => element.id === id);
  res.json(goodsWithId);
});
