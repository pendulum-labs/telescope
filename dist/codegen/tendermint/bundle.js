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
exports.tendermint = void 0;
const _62 = __importStar(require("./abci/types"));
const _63 = __importStar(require("./crypto/keys"));
const _64 = __importStar(require("./crypto/proof"));
const _65 = __importStar(require("./libs/bits/types"));
const _66 = __importStar(require("./p2p/types"));
const _67 = __importStar(require("./types/block"));
const _68 = __importStar(require("./types/evidence"));
const _69 = __importStar(require("./types/params"));
const _70 = __importStar(require("./types/types"));
const _71 = __importStar(require("./types/validator"));
const _72 = __importStar(require("./version/types"));
var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._62
    };
    tendermint.crypto = {
        ..._63,
        ..._64
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._65
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._66
    };
    tendermint.types = {
        ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._71
    };
    tendermint.version = {
        ..._72
    };
})(tendermint || (exports.tendermint = tendermint = {}));
//# sourceMappingURL=bundle.js.map