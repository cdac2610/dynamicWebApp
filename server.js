//1.basic server
//2.req,resp,routes,status code,content-type:html,json
//3.nodemon

const express = require("express");
const app = express();
const path = require("path");
const trendingTShirts = require("./product-list");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8888, () => console.log("Express server started at 8888"));

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome  of funnyTshirts.com");
});

app.get("/product/trending", (req, res) => {
  res.status(200);
  res.json(trendingTShirts);
});

app.get("/product/:productId", (req, resp) => {
  resp.status(200);
  console.log("productId : " + req.params.productId);
  resp.json(trendingTShirts[req.params.productId - 1]);
});

app.get("/admin/new", (req, resp) => {
  resp.sendFile(__dirname + "/public/new-product.html");
});

app.post("/admin/addProduct", (req, resp) => {
  //collect all info ,prepare tshirts,tshirt update list
  const body = req.body;
  const tShirt = {
    id: trendingTShirts.length + 1,
    color: body.color,
    size: body.size,
    quote: body.quote,
    price: body.price,
  };
  trendingTShirts.push(tShirt);
  resp.send("added Tshirt with quote :" + tShirt.quote);
});
