var http = require('http');
const express = require("express");
let app = express();
app.all("/api/*", (req, res, next) => {
    console.dir(req);
    res.json(req);
});
http.createServer(app).listen(8091);