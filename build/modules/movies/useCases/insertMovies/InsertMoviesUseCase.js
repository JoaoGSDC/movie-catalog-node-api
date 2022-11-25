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
exports.InsertMoviesUseCase = void 0;
const api_1 = require("../../../../services/api");
const connection_1 = __importDefault(require("../../../../services/connection"));
class InsertMoviesUseCase {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const LIMIT = 50;
            const api = new api_1.Api();
            let films = [];
            let response = {};
            try {
                films = yield api.get('films', {
                    params: {
                        fields: 'id,title,description,movie_banner,image,director,producer',
                        limit: LIMIT,
                    },
                });
                const db = yield (0, connection_1.default)(process.env.MONGODB_URI);
                const moviesCollection = db.collection('movies');
                films.forEach((movie) => __awaiter(this, void 0, void 0, function* () { return moviesCollection.insertOne(movie); }));
                response = { statusCode: 201, message: 'Filmes adicionados com sucesso! :D' };
            }
            catch (err) {
                console.log(err);
                response = { statusCode: 500, message: 'Erro ao adicionar filmes! :(' };
            }
            return response;
        });
    }
}
exports.InsertMoviesUseCase = InsertMoviesUseCase;
