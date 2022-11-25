"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMoviesController = void 0;
const GetMoviesUseCase_1 = require("./GetMoviesUseCase");
class GetMoviesController {
    handle(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { page } = req.query;
            const getMoviesUseCase = new GetMoviesUseCase_1.GetMoviesUseCase();
            const result = yield getMoviesUseCase.execute(Number(page));
            return res.status(result.statusCode).json((_a = result.data) !== null && _a !== void 0 ? _a : result.message);
        });
    }
}
exports.GetMoviesController = GetMoviesController;
