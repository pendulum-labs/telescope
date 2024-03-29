import * as _75 from "./dao/v1/dao";
import * as _76 from "./dao/v1/genesis";
import * as _77 from "./dao/v1/params";
import * as _78 from "./dao/v1/query";
import * as _146 from "./dao/v1/query.rpc.Query";
import * as _172 from "./rpc.query";
export namespace onomyprotocol {
  export namespace dao {
    export const v1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._146
    };
  }
  export const ClientFactory = {
    ..._172
  };
}