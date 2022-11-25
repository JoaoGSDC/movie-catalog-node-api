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
exports.Api = void 0;
class Api {
    get(route, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const configuration = Object.assign(Object.assign({}, config), { method: 'GET' });
            let params = this._handleSetParamsValue(config.params);
            const url = `${process.env.BASE_URL}${route}${params}`;
            const res = yield fetch(url, configuration);
            const data = res.json();
            return data;
        });
    }
    _handleSetParamsValue(configParams) {
        let params = '';
        if (!configParams) {
            return params;
        }
        Object.keys(configParams).map((key, index) => {
            if (index === 0) {
                params = `?${key}=${configParams[key]}`;
            }
            else {
                params += `&${key}=${configParams[key]}`;
            }
        });
        return params;
    }
}
exports.Api = Api;
