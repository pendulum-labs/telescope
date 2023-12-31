"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onomyprotocol = void 0;
const _73 = __importStar(require("./dao/v1/dao"));
const _74 = __importStar(require("./dao/v1/genesis"));
const _75 = __importStar(require("./dao/v1/params"));
const _76 = __importStar(require("./dao/v1/query"));
const _115 = __importStar(require("./dao/v1/query.rpc.Query"));
const _124 = __importStar(require("./rpc.query"));
var onomyprotocol;
(function (onomyprotocol) {
    let dao;
    (function (dao) {
        dao.v1 = {
            ..._73,
            ..._74,
            ..._75,
            ..._76,
            ..._115
        };
    })(dao = onomyprotocol.dao || (onomyprotocol.dao = {}));
    onomyprotocol.ClientFactory = {
        ..._124
    };
})(onomyprotocol || (exports.onomyprotocol = onomyprotocol = {}));
//# sourceMappingURL=bundle.js.map