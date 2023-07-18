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
exports.gravity = void 0;
const _49 = __importStar(require("./v1/attestation"));
const _50 = __importStar(require("./v1/batch"));
const _51 = __importStar(require("./v1/ethereum_signer"));
const _52 = __importStar(require("./v1/genesis"));
const _53 = __importStar(require("./v1/msgs"));
const _54 = __importStar(require("./v1/pool"));
const _55 = __importStar(require("./v1/query"));
const _56 = __importStar(require("./v1/types"));
const _104 = __importStar(require("./v1/msgs.amino"));
const _105 = __importStar(require("./v1/msgs.registry"));
const _106 = __importStar(require("./v1/query.rpc.Query"));
const _107 = __importStar(require("./v1/msgs.rpc.msg"));
const _115 = __importStar(require("./rpc.query"));
const _116 = __importStar(require("./rpc.tx"));
var gravity;
(function (gravity) {
    gravity.v1 = {
        ..._49,
        ..._50,
        ..._51,
        ..._52,
        ..._53,
        ..._54,
        ..._55,
        ..._56,
        ..._104,
        ..._105,
        ..._106,
        ..._107
    };
    gravity.ClientFactory = {
        ..._115,
        ..._116
    };
})(gravity || (exports.gravity = gravity = {}));
//# sourceMappingURL=bundle.js.map