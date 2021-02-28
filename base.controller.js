"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var express_1 = require("express");
var BaseController = /** @class */ (function () {
    function BaseController() {
        this.router = express_1.Router({ mergeParams: true });
    }
    BaseController.prototype.getRouter = function () {
        return this.router;
    };
    return BaseController;
}());
exports.BaseController = BaseController;
