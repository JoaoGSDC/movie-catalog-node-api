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
const globals_1 = require("@jest/globals");
const InsertMoviesUseCase_1 = require("../insertMovies/InsertMoviesUseCase");
const GetMoviesUseCase_1 = require("./GetMoviesUseCase");
(0, globals_1.describe)('GetMovies', () => {
    (0, globals_1.test)('should return positive message', () => __awaiter(void 0, void 0, void 0, function* () {
        const page = 0;
        const insertMoviesUseCase = new InsertMoviesUseCase_1.InsertMoviesUseCase();
        yield insertMoviesUseCase.execute();
        const getMoviesUseCase = new GetMoviesUseCase_1.GetMoviesUseCase();
        const result = yield getMoviesUseCase.execute(page);
        (0, globals_1.expect)(result.message).toBe('Lista de filmes carregados com sucesso! :D');
    }));
});
