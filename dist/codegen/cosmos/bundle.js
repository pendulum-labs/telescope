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
exports.cosmos = void 0;
const _2 = __importStar(require("./auth/v1beta1/auth"));
const _3 = __importStar(require("./auth/v1beta1/genesis"));
const _4 = __importStar(require("./auth/v1beta1/query"));
const _5 = __importStar(require("./authz/v1beta1/authz"));
const _6 = __importStar(require("./authz/v1beta1/event"));
const _7 = __importStar(require("./authz/v1beta1/genesis"));
const _8 = __importStar(require("./authz/v1beta1/query"));
const _9 = __importStar(require("./authz/v1beta1/tx"));
const _10 = __importStar(require("./bank/v1beta1/authz"));
const _11 = __importStar(require("./bank/v1beta1/bank"));
const _12 = __importStar(require("./bank/v1beta1/genesis"));
const _13 = __importStar(require("./bank/v1beta1/query"));
const _14 = __importStar(require("./bank/v1beta1/tx"));
const _15 = __importStar(require("./base/abci/v1beta1/abci"));
const _16 = __importStar(require("./base/query/v1beta1/pagination"));
const _17 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _18 = __importStar(require("./base/v1beta1/coin"));
const _19 = __importStar(require("./crypto/ed25519/keys"));
const _20 = __importStar(require("./crypto/multisig/keys"));
const _21 = __importStar(require("./crypto/secp256k1/keys"));
const _22 = __importStar(require("./crypto/secp256r1/keys"));
const _23 = __importStar(require("./distribution/v1beta1/distribution"));
const _24 = __importStar(require("./distribution/v1beta1/genesis"));
const _25 = __importStar(require("./distribution/v1beta1/query"));
const _26 = __importStar(require("./distribution/v1beta1/tx"));
const _27 = __importStar(require("./gov/v1beta1/genesis"));
const _28 = __importStar(require("./gov/v1beta1/gov"));
const _29 = __importStar(require("./gov/v1beta1/query"));
const _30 = __importStar(require("./gov/v1beta1/tx"));
const _31 = __importStar(require("./staking/v1beta1/authz"));
const _32 = __importStar(require("./staking/v1beta1/genesis"));
const _33 = __importStar(require("./staking/v1beta1/query"));
const _34 = __importStar(require("./staking/v1beta1/staking"));
const _35 = __importStar(require("./staking/v1beta1/tx"));
const _36 = __importStar(require("./tx/signing/v1beta1/signing"));
const _37 = __importStar(require("./tx/v1beta1/service"));
const _38 = __importStar(require("./tx/v1beta1/tx"));
const _39 = __importStar(require("./upgrade/v1beta1/query"));
const _40 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _81 = __importStar(require("./authz/v1beta1/tx.amino"));
const _82 = __importStar(require("./bank/v1beta1/tx.amino"));
const _83 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _84 = __importStar(require("./gov/v1beta1/tx.amino"));
const _85 = __importStar(require("./staking/v1beta1/tx.amino"));
const _86 = __importStar(require("./authz/v1beta1/tx.registry"));
const _87 = __importStar(require("./bank/v1beta1/tx.registry"));
const _88 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _89 = __importStar(require("./gov/v1beta1/tx.registry"));
const _90 = __importStar(require("./staking/v1beta1/tx.registry"));
const _91 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _92 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _93 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _94 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _95 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _96 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _97 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _98 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _99 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _100 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _101 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _102 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _103 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _113 = __importStar(require("./rpc.query"));
const _114 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._2,
            ..._3,
            ..._4,
            ..._91
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._5,
            ..._6,
            ..._7,
            ..._8,
            ..._9,
            ..._81,
            ..._86,
            ..._92,
            ..._99
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._10,
            ..._11,
            ..._12,
            ..._13,
            ..._14,
            ..._82,
            ..._87,
            ..._93,
            ..._100
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._15
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._16
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._17
            };
        })(reflection = base.reflection || (base.reflection = {}));
        base.v1beta1 = {
            ..._18
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._19
        };
        crypto.multisig = {
            ..._20
        };
        crypto.secp256k1 = {
            ..._21
        };
        crypto.secp256r1 = {
            ..._22
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._23,
            ..._24,
            ..._25,
            ..._26,
            ..._83,
            ..._88,
            ..._94,
            ..._101
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._84,
            ..._89,
            ..._95,
            ..._102
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._31,
            ..._32,
            ..._33,
            ..._34,
            ..._35,
            ..._85,
            ..._90,
            ..._96,
            ..._103
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._36
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._37,
            ..._38,
            ..._97
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._39,
            ..._40,
            ..._98
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._113,
        ..._114
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map