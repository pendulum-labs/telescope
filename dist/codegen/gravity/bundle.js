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
const _56 = __importStar(require("./v1/attestation"));
const _57 = __importStar(require("./v1/batch"));
const _58 = __importStar(require("./v1/ethereum_signer"));
const _59 = __importStar(require("./v1/genesis"));
const _60 = __importStar(require("./v1/msgs"));
const _61 = __importStar(require("./v1/pool"));
const _62 = __importStar(require("./v1/query"));
const _63 = __importStar(require("./v1/types"));
const _142 = __importStar(require("./v1/msgs.amino"));
const _143 = __importStar(require("./v1/msgs.registry"));
const _144 = __importStar(require("./v1/query.rpc.Query"));
const _145 = __importStar(require("./v1/msgs.rpc.msg"));
const _170 = __importStar(require("./rpc.query"));
const _171 = __importStar(require("./rpc.tx"));
var gravity;
(function (gravity) {
    gravity.v1 = {
        ..._56,
        ..._57,
        ..._58,
        ..._59,
        ..._60,
        ..._61,
        ..._62,
        ..._63,
        ..._142,
        ..._143,
        ..._144,
        ..._145
    };
    gravity.ClientFactory = {
        ..._170,
        ..._171
    };
})(gravity || (exports.gravity = gravity = {}));
//# sourceMappingURL=bundle.js.map