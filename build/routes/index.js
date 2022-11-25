"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const movies_routes_1 = require("./movies.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/movies', movies_routes_1.moviesRoutes);
