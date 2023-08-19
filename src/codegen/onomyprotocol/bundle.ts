import * as _73 from "./dao/v1/dao";
import * as _74 from "./dao/v1/genesis";
import * as _75 from "./dao/v1/params";
import * as _76 from "./dao/v1/query";
import * as _115 from "./dao/v1/query.rpc.Query";
import * as _124 from "./rpc.query";
export namespace onomyprotocol {
  export namespace dao {
    export const v1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._115
    };
  }
  export const ClientFactory = {
    ..._124
  };
}