import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/multisig/keys";
import * as _21 from "./crypto/secp256k1/keys";
import * as _22 from "./crypto/secp256r1/keys";
import * as _23 from "./distribution/v1beta1/distribution";
import * as _24 from "./distribution/v1beta1/genesis";
import * as _25 from "./distribution/v1beta1/query";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./gov/v1beta1/genesis";
import * as _28 from "./gov/v1beta1/gov";
import * as _29 from "./gov/v1beta1/query";
import * as _30 from "./gov/v1beta1/tx";
import * as _31 from "./mint/v1beta1/genesis";
import * as _32 from "./mint/v1beta1/mint";
import * as _33 from "./mint/v1beta1/query";
import * as _34 from "./params/v1beta1/params";
import * as _35 from "./params/v1beta1/query";
import * as _36 from "./staking/v1beta1/authz";
import * as _37 from "./staking/v1beta1/genesis";
import * as _38 from "./staking/v1beta1/query";
import * as _39 from "./staking/v1beta1/staking";
import * as _40 from "./staking/v1beta1/tx";
import * as _41 from "./tx/signing/v1beta1/signing";
import * as _42 from "./tx/v1beta1/service";
import * as _43 from "./tx/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/query";
import * as _45 from "./upgrade/v1beta1/upgrade";
import * as _86 from "./authz/v1beta1/tx.amino";
import * as _87 from "./bank/v1beta1/tx.amino";
import * as _88 from "./distribution/v1beta1/tx.amino";
import * as _89 from "./gov/v1beta1/tx.amino";
import * as _90 from "./staking/v1beta1/tx.amino";
import * as _91 from "./authz/v1beta1/tx.registry";
import * as _92 from "./bank/v1beta1/tx.registry";
import * as _93 from "./distribution/v1beta1/tx.registry";
import * as _94 from "./gov/v1beta1/tx.registry";
import * as _95 from "./staking/v1beta1/tx.registry";
import * as _96 from "./auth/v1beta1/query.rpc.Query";
import * as _97 from "./authz/v1beta1/query.rpc.Query";
import * as _98 from "./bank/v1beta1/query.rpc.Query";
import * as _99 from "./distribution/v1beta1/query.rpc.Query";
import * as _100 from "./gov/v1beta1/query.rpc.Query";
import * as _101 from "./mint/v1beta1/query.rpc.Query";
import * as _102 from "./params/v1beta1/query.rpc.Query";
import * as _103 from "./staking/v1beta1/query.rpc.Query";
import * as _104 from "./tx/v1beta1/service.rpc.Service";
import * as _105 from "./upgrade/v1beta1/query.rpc.Query";
import * as _106 from "./authz/v1beta1/tx.rpc.msg";
import * as _107 from "./bank/v1beta1/tx.rpc.msg";
import * as _108 from "./distribution/v1beta1/tx.rpc.msg";
import * as _109 from "./gov/v1beta1/tx.rpc.msg";
import * as _110 from "./staking/v1beta1/tx.rpc.msg";
import * as _120 from "./rpc.query";
import * as _121 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._2,
            ..._3,
            ..._4,
            ..._96
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
            ..._86,
            ..._91,
            ..._97,
            ..._106
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
            ..._87,
            ..._92,
            ..._98,
            ..._107
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
            ..._88,
            ..._93,
            ..._99,
            ..._108
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._89,
            ..._94,
            ..._100,
            ..._109
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._31,
            ..._32,
            ..._33,
            ..._101
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._34,
            ..._35,
            ..._102
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
            ..._90,
            ..._95,
            ..._103,
            ..._110
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
            ..._104
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._44,
            ..._45,
            ..._105
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._120,
        ..._121
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map