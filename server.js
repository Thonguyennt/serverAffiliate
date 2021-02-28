"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var test_1 = require("./controllers/testController/test");
var app = express_1.default();
var port = process.env.PORT ? parseInt(process.env.PORT) : 3001;
/**
 * Configure controller route
 */
var testCtr = new test_1.TestController();
app.use(testCtr.ROUTER_PREFIX, testCtr.getRouter());
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port);
});
module.exports = app;
