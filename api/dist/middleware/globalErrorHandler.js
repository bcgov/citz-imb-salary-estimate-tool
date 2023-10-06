"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = ({ res, next, }) => {
    res.status(500).json({
        message: 'Internal Server Error',
    });
    next();
};
exports.default = globalErrorHandler;
