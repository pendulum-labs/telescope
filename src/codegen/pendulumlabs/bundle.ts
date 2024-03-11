import * as _79 from "../market/burnings";
import * as _80 from "../market/drop";
import * as _81 from "../market/genesis";
import * as _82 from "../market/member";
import * as _83 from "../market/order";
import * as _84 from "../market/params";
import * as _85 from "../market/pool";
import * as _86 from "../market/proposal";
import * as _87 from "../market/query";
import * as _88 from "../market/tx";
import * as _147 from "../market/tx.amino";
import * as _148 from "../market/tx.registry";
import * as _149 from "../market/query.rpc.Query";
import * as _150 from "../market/tx.rpc.msg";
import * as _173 from "./rpc.query";
import * as _174 from "./rpc.tx";
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
      ..._88,
      ..._147,
      ..._148,
      ..._149,
      ..._150
    };
  }
  export const ClientFactory = {
    ..._173,
    ..._174
  };
}