"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
class HomeController {
    index(req, res) {
        res.send('Home');
    }
}
exports.homeController = new HomeController();
exports.default = exports.homeController;
