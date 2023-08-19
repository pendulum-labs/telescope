import * as _73 from "./dao/v1/dao";
import * as _74 from "./dao/v1/genesis";
import * as _75 from "./dao/v1/params";
import * as _76 from "./dao/v1/query";
import * as _115 from "./dao/v1/query.rpc.Query";
import * as _124 from "./rpc.query";
export var onomyprotocol;
(function (onomyprotocol) {
    let dao;
    (function (dao) {
        dao.v1 = {
            ..._73,
            ..._74,
            ..._75,
            ..._76,
            ..._115
        };
    })(dao = onomyprotocol.dao || (onomyprotocol.dao = {}));
    onomyprotocol.ClientFactory = {
        ..._124
    };
})(onomyprotocol || (onomyprotocol = {}));
//# sourceMappingURL=bundle.js.map