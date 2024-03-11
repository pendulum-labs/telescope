import * as _56 from "./v1/attestation";
import * as _57 from "./v1/batch";
import * as _58 from "./v1/ethereum_signer";
import * as _59 from "./v1/genesis";
import * as _60 from "./v1/msgs";
import * as _61 from "./v1/pool";
import * as _62 from "./v1/query";
import * as _63 from "./v1/types";
import * as _142 from "./v1/msgs.amino";
import * as _143 from "./v1/msgs.registry";
import * as _144 from "./v1/query.rpc.Query";
import * as _145 from "./v1/msgs.rpc.msg";
import * as _170 from "./rpc.query";
import * as _171 from "./rpc.tx";
export namespace gravity {
  export const v1 = {
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
  export const ClientFactory = {
    ..._170,
    ..._171
  };
}