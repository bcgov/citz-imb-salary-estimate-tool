"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @summary This is the Health Endpoint for SET, its purpose is to provide health
 *          checks to dockerization efforts to ensure the container is operating as expected
 * @author LocalNewsTV, Dallascrichmond
 */
const express_1 = __importDefault(require("express"));
const health_controller_1 = require("../controllers/health-controller");
const router = express_1.default.Router();
router.route('/health')
    .get(health_controller_1.getHealth);
exports.default = router;
