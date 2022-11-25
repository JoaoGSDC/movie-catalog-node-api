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
const api_1 = require("./api");
(0, globals_1.describe)('API', () => {
    const api = new api_1.Api();
    const params = {
        fields: 'id,title,description,movie_banner,image,director,producer',
        limit: 1,
    };
    (0, globals_1.test)('should return the request params', () => {
        const urlParams = api._handleSetParamsValue(params);
        (0, globals_1.expect)(urlParams).toBe('?fields=id,title,description,movie_banner,image,director,producer&limit=1');
    });
    (0, globals_1.test)('should return items in films api', () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield api.get('films', { params });
        (0, globals_1.expect)(data.length).toBe(1);
    }));
});
