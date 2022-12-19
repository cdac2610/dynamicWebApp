//1.basic server
//2.req,resp,routes,status code,content-type:html,json
//3.nodemon

const express = require("express");
const app = express();
const path = require("path");
const trendingTShirts = require("./product-list");

app.use(express.static(path.join(__dirname, "public")));

app.listen(8888, () => console.log("Express server started at 8888"));

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome  of funnyTshirts.com");
});

app.get("/trending", (req, res) => {
  res.status(200);
  res.json(trendingTShirts);
});
