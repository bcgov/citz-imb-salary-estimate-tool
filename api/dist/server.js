"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @summary Server listener for SETS Express API
 * @author LocalNewsTV, Dallascrichmond
 */
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("./express"));
dotenv_1.default.config();
const port = process.env.API_PORT || 3000;
express_1.default.listen(port, () => {
    // eslint-disable-next-line no-console
    console.info(`[server]: Server started on port ${port}`);
});
