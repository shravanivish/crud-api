const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

const customers = [
  { id: 1, name: "name1" },
  { id: 2, name: "name2" },
  { id: 3, name: "name3" },
  { id: 4, name: "name4" },
];

let maxId = 4;

app.get("/customers/:id", (req, res) => {
  res.send(customers.find((customer) => customer.id == req.params.id));
});

app.get("/customers", (req, res) => {
  res.send(customers);
});

app.post("/customers", (req, res) => {
  const newId = maxId + 1;
  maxId = newId;
  customers.push({ id: newId, name: req.body.name });
  res.send(customers);
});

app.delete("/customers/:id", (req, res) => {
  res.send(customers.filter((customer) => customer.id != req.params.id));
});

app.put("/customers/:id", (req, res) => {
  let customer = customers.find((customer) => customer.id == req.params.id);
  customer.name = req.body.name;
  res.send(customers);
});
