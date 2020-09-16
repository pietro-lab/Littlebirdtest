"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});
exports.connection = {
    type: process.env.TYPE,
    host: String(process.env.HOST),
    port: Number(process.env.PORT),
    username: String(process.env.USERDB),
    password: String(process.env.PASSWORD),
    database: String(process.env.DATABASE),
    autoLoadEntities: Boolean(process.env.AUTO_LOAD_ENTITIES),
    synchronize: Boolean(process.env.SYNCHRONIZE)
};
//# sourceMappingURL=connection.js.map