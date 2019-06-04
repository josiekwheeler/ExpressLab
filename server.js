"use strict";
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", routes);

const port = 3001;

app.listen(port,() => console.log(`Server is running on port ${port}`));