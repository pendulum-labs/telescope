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
const _31 = __importStar(require("./mint/v1beta1/genesis"));
const _32 = __importStar(require("./mint/v1beta1/mint"));
const _33 = __importStar(require("./mint/v1beta1/query"));
const _34 = __importStar(require("./params/v1beta1/params"));
const _35 = __importStar(require("./params/v1beta1/query"));
const _36 = __importStar(require("./staking/v1beta1/authz"));
const _37 = __importStar(require("./staking/v1beta1/genesis"));
const _38 = __importStar(require("./staking/v1beta1/query"));
const _39 = __importStar(require("./staking/v1beta1/staking"));
const _40 = __importStar(require("./staking/v1beta1/tx"));
const _41 = __importStar(require("./tx/signing/v1beta1/signing"));
const _42 = __importStar(require("./tx/v1beta1/service"));
const _43 = __importStar(require("./tx/v1beta1/tx"));
const _44 = __importStar(require("./upgrade/v1beta1/query"));
const _45 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _46 = __importStar(require("./vesting/v1beta1/tx"));
const _47 = __importStar(require("./vesting/v1beta1/vesting"));
const _89 = __importStar(require("./authz/v1beta1/tx.amino"));
const _90 = __importStar(require("./bank/v1beta1/tx.amino"));
const _91 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _92 = __importStar(require("./gov/v1beta1/tx.amino"));
const _93 = __importStar(require("./staking/v1beta1/tx.amino"));
const _94 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _95 = __importStar(require("./authz/v1beta1/tx.registry"));
const _96 = __importStar(require("./bank/v1beta1/tx.registry"));
const _97 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _98 = __importStar(require("./gov/v1beta1/tx.registry"));
const _99 = __importStar(require("./staking/v1beta1/tx.registry"));
const _100 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _101 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _102 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _103 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _104 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _105 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _106 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _107 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _108 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _109 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _110 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _111 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _112 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _113 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _114 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _115 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _116 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _126 = __importStar(require("./rpc.query"));
const _127 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._2,
            ..._3,
            ..._4,
            ..._101
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
            ..._89,
            ..._95,
            ..._102,
            ..._111
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
            ..._90,
            ..._96,
            ..._103,
            ..._112
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
            ..._91,
            ..._97,
            ..._104,
            ..._113
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._92,
            ..._98,
            ..._105,
            ..._114
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._31,
            ..._32,
            ..._33,
            ..._106
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._34,
            ..._35,
            ..._107
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._36,
            ..._37,
            ..._38,
            ..._39,
            ..._40,
            ..._93,
            ..._99,
            ..._108,
            ..._115
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._41
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._42,
            ..._43,
            ..._109
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._44,
            ..._45,
            ..._110
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._46,
            ..._47,
            ..._94,
            ..._100,
            ..._116
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._126,
        ..._127
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map