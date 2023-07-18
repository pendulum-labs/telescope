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
exports.pendulumlabs = void 0;
const _72 = __importStar(require("../market/burnings"));
const _73 = __importStar(require("../market/drop"));
const _74 = __importStar(require("../market/genesis"));
const _75 = __importStar(require("../market/member"));
const _76 = __importStar(require("../market/order"));
const _77 = __importStar(require("../market/params"));
const _78 = __importStar(require("../market/pool"));
const _79 = __importStar(require("../market/query"));
const _80 = __importStar(require("../market/tx"));
const _109 = __importStar(require("../market/tx.amino"));
const _110 = __importStar(require("../market/tx.registry"));
const _111 = __importStar(require("../market/query.rpc.Query"));
const _112 = __importStar(require("../market/tx.rpc.msg"));
const _118 = __importStar(require("./rpc.query"));
const _119 = __importStar(require("./rpc.tx"));
var pendulumlabs;
(function (pendulumlabs) {
    let market;
    (function (market_1) {
        market_1.market = {
            ..._72,
            ..._73,
            ..._74,
            ..._75,
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._80,
            ..._109,
            ..._110,
            ..._111,
            ..._112
        };
    })(market = pendulumlabs.market || (pendulumlabs.market = {}));
    pendulumlabs.ClientFactory = {
        ..._118,
        ..._119
    };
})(pendulumlabs || (exports.pendulumlabs = pendulumlabs = {}));
//# sourceMappingURL=bundle.js.map