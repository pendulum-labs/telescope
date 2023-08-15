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
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._93
    };
  }
  export namespace authz {
    export const v1beta1 = {
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
  }
  export namespace bank {
    export const v1beta1 = {
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
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._15
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._19
    };
    export const multisig = {
      ..._20
    };
    export const secp256k1 = {
      ..._21
    };
    export const secp256r1 = {
      ..._22
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._85,
      ..._90,
      ..._96,
      ..._104
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._86,
      ..._91,
      ..._97,
      ..._105
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._98
    };
  }
  export namespace staking {
    export const v1beta1 = {
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
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._38
      };
    }
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._100
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._101
    };
  }
  export const ClientFactory = {
    ..._116,
    ..._117
  };
}