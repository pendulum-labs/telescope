import * as _79 from "../market/burnings";
import * as _80 from "../market/drop";
import * as _81 from "../market/genesis";
import * as _82 from "../market/member";
import * as _83 from "../market/order";
import * as _84 from "../market/params";
import * as _85 from "../market/pool";
import * as _86 from "../market/query";
import * as _87 from "../market/tx";
import * as _121 from "../market/tx.amino";
import * as _122 from "../market/tx.registry";
import * as _123 from "../market/query.rpc.Query";
import * as _124 from "../market/tx.rpc.msg";
import * as _130 from "./rpc.query";
import * as _131 from "./rpc.tx";
export namespace pendulumlabs {
  export namespace market {
    export const market = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._121,
      ..._122,
      ..._123,
      ..._124
    };
  }
  export const ClientFactory = {
    ..._130,
    ..._131
  };
}