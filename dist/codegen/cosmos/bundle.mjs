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
import * as _46 from "./vesting/v1beta1/tx";
import * as _47 from "./vesting/v1beta1/vesting";
import * as _114 from "./authz/v1beta1/tx.amino";
import * as _115 from "./bank/v1beta1/tx.amino";
import * as _116 from "./distribution/v1beta1/tx.amino";
import * as _117 from "./gov/v1beta1/tx.amino";
import * as _118 from "./staking/v1beta1/tx.amino";
import * as _119 from "./vesting/v1beta1/tx.amino";
import * as _120 from "./authz/v1beta1/tx.registry";
import * as _121 from "./bank/v1beta1/tx.registry";
import * as _122 from "./distribution/v1beta1/tx.registry";
import * as _123 from "./gov/v1beta1/tx.registry";
import * as _124 from "./staking/v1beta1/tx.registry";
import * as _125 from "./vesting/v1beta1/tx.registry";
import * as _126 from "./auth/v1beta1/query.rpc.Query";
import * as _127 from "./authz/v1beta1/query.rpc.Query";
import * as _128 from "./bank/v1beta1/query.rpc.Query";
import * as _129 from "./distribution/v1beta1/query.rpc.Query";
import * as _130 from "./gov/v1beta1/query.rpc.Query";
import * as _131 from "./mint/v1beta1/query.rpc.Query";
import * as _132 from "./params/v1beta1/query.rpc.Query";
import * as _133 from "./staking/v1beta1/query.rpc.Query";
import * as _134 from "./tx/v1beta1/service.rpc.Service";
import * as _135 from "./upgrade/v1beta1/query.rpc.Query";
import * as _136 from "./authz/v1beta1/tx.rpc.msg";
import * as _137 from "./bank/v1beta1/tx.rpc.msg";
import * as _138 from "./distribution/v1beta1/tx.rpc.msg";
import * as _139 from "./gov/v1beta1/tx.rpc.msg";
import * as _140 from "./staking/v1beta1/tx.rpc.msg";
import * as _141 from "./vesting/v1beta1/tx.rpc.msg";
import * as _168 from "./rpc.query";
import * as _169 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._2,
            ..._3,
            ..._4,
            ..._126
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
            ..._114,
            ..._120,
            ..._127,
            ..._136
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
            ..._115,
            ..._121,
            ..._128,
            ..._137
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
            ..._116,
            ..._122,
            ..._129,
            ..._138
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._117,
            ..._123,
            ..._130,
            ..._139
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._31,
            ..._32,
            ..._33,
            ..._131
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._34,
            ..._35,
            ..._132
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
            ..._118,
            ..._124,
            ..._133,
            ..._140
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
            ..._134
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._44,
            ..._45,
            ..._135
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._46,
            ..._47,
            ..._119,
            ..._125,
            ..._141
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._168,
        ..._169
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map