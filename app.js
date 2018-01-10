const express = require("express");
const path = require("path");

const app = express();

app.use("/dist", express.static(__dirname + "/dist"));
app.get("/", (req, res) => res.sendfile(path.join(__dirname + "/default.htm")));

app.listen(2004);
