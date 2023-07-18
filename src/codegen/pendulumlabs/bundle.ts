import * as _72 from "../market/burnings";
import * as _73 from "../market/drop";
import * as _74 from "../market/genesis";
import * as _75 from "../market/member";
import * as _76 from "../market/order";
import * as _77 from "../market/params";
import * as _78 from "../market/pool";
import * as _79 from "../market/query";
import * as _80 from "../market/tx";
import * as _109 from "../market/tx.amino";
import * as _110 from "../market/tx.registry";
import * as _111 from "../market/query.rpc.Query";
import * as _112 from "../market/tx.rpc.msg";
import * as _118 from "./rpc.query";
import * as _119 from "./rpc.tx";
export namespace pendulumlabs {
  export namespace market {
    export const market = {
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
  }
  export const ClientFactory = {
    ..._118,
    ..._119
  };
}