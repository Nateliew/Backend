const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db/models/index");
const { stock } = db;

//the folder location for router and controller
const StocksRouter = require("./routers/StockRouter");
const StocksController = require("./controllers/StockController");

//Listen to the port
const PORT = process.env.PORT || 3000;

const app = express();

const stocksController = new StocksController(stock);
const stocksRouter = new StocksRouter(express, stocksController).routes();

app.use(cors());
app.use(express.json());

//the page that stores the data
app.use("/", stocksRouter);

app.listen(PORT, () => {
  console.log("Application listening to port 3000");
});
