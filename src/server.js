const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./app/routes/usersRoutes");
require("dotenv").config();

const port = process.env.API_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log("Server is running"));
