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
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._126
    };
  }
  export namespace authz {
    export const v1beta1 = {
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
  }
  export namespace bank {
    export const v1beta1 = {
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
      ..._116,
      ..._122,
      ..._129,
      ..._138
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._117,
      ..._123,
      ..._130,
      ..._139
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._131
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._132
    };
  }
  export namespace staking {
    export const v1beta1 = {
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
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._41
      };
    }
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._134
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._135
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._119,
      ..._125,
      ..._141
    };
  }
  export const ClientFactory = {
    ..._168,
    ..._169
  };
}