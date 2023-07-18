import * as _68 from "./dao/v1/dao";
import * as _69 from "./dao/v1/genesis";
import * as _70 from "./dao/v1/params";
import * as _71 from "./dao/v1/query";
import * as _108 from "./dao/v1/query.rpc.Query";
import * as _117 from "./rpc.query";
export namespace onomyprotocol {
  export namespace dao {
    export const v1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._108
    };
  }
  export const ClientFactory = {
    ..._117
  };
}