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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMoviesUseCase = void 0;
const connection_1 = __importDefault(require("../../../../services/connection"));
class GetMoviesUseCase {
    execute(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const LIMIT = 10;
            const DESC = 1;
            let response = {};
            try {
                const db = yield (0, connection_1.default)(process.env.MONGODB_URI);
                const moviesCollection = db.collection('movies');
                const currentPage = page * LIMIT;
                const moviesResult = (yield moviesCollection
                    .find()
                    .sort({
                    title: DESC,
                })
                    .limit(LIMIT)
                    .skip(currentPage)
                    .toArray());
                response = { statusCode: 200, data: moviesResult, message: 'Lista de filmes carregados com sucesso! :D' };
            }
            catch (err) {
                console.log(err);
                response = { statusCode: 500, message: 'Erro ao carregar os filmes! :(' };
            }
            return response;
        });
    }
}
exports.GetMoviesUseCase = GetMoviesUseCase;
