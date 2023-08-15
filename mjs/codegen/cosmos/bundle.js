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
import * as _31 from "./params/v1beta1/params";
import * as _32 from "./params/v1beta1/query";
import * as _33 from "./staking/v1beta1/authz";
import * as _34 from "./staking/v1beta1/genesis";
import * as _35 from "./staking/v1beta1/query";
import * as _36 from "./staking/v1beta1/staking";
import * as _37 from "./staking/v1beta1/tx";
import * as _38 from "./tx/signing/v1beta1/signing";
import * as _39 from "./tx/v1beta1/service";
import * as _40 from "./tx/v1beta1/tx";
import * as _41 from "./upgrade/v1beta1/query";
import * as _42 from "./upgrade/v1beta1/upgrade";
import * as _83 from "./authz/v1beta1/tx.amino";
import * as _84 from "./bank/v1beta1/tx.amino";
import * as _85 from "./distribution/v1beta1/tx.amino";
import * as _86 from "./gov/v1beta1/tx.amino";
import * as _87 from "./staking/v1beta1/tx.amino";
import * as _88 from "./authz/v1beta1/tx.registry";
import * as _89 from "./bank/v1beta1/tx.registry";
import * as _90 from "./distribution/v1beta1/tx.registry";
import * as _91 from "./gov/v1beta1/tx.registry";
import * as _92 from "./staking/v1beta1/tx.registry";
import * as _93 from "./auth/v1beta1/query.rpc.Query";
import * as _94 from "./authz/v1beta1/query.rpc.Query";
import * as _95 from "./bank/v1beta1/query.rpc.Query";
import * as _96 from "./distribution/v1beta1/query.rpc.Query";
import * as _97 from "./gov/v1beta1/query.rpc.Query";
import * as _98 from "./params/v1beta1/query.rpc.Query";
import * as _99 from "./staking/v1beta1/query.rpc.Query";
import * as _100 from "./tx/v1beta1/service.rpc.Service";
import * as _101 from "./upgrade/v1beta1/query.rpc.Query";
import * as _102 from "./authz/v1beta1/tx.rpc.msg";
import * as _103 from "./bank/v1beta1/tx.rpc.msg";
import * as _104 from "./distribution/v1beta1/tx.rpc.msg";
import * as _105 from "./gov/v1beta1/tx.rpc.msg";
import * as _106 from "./staking/v1beta1/tx.rpc.msg";
import * as _116 from "./rpc.query";
import * as _117 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._2,
            ..._3,
            ..._4,
            ..._93
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
            ..._83,
            ..._88,
            ..._94,
            ..._102
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
            ..._84,
            ..._89,
            ..._95,
            ..._103
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
            ..._85,
            ..._90,
            ..._96,
            ..._104
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._86,
            ..._91,
            ..._97,
            ..._105
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._31,
            ..._32,
            ..._98
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._33,
            ..._34,
            ..._35,
            ..._36,
            ..._37,
            ..._87,
            ..._92,
            ..._99,
            ..._106
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._38
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._39,
            ..._40,
            ..._100
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._41,
            ..._42,
            ..._101
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._116,
        ..._117
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map