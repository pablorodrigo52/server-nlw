"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.get('/hello', function (request, response) {
    response.json({ 'name': 'Hello World' });
});
app.listen(3333);
