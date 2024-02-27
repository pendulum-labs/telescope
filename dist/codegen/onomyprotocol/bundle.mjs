import * as _75 from "./dao/v1/dao";
import * as _76 from "./dao/v1/genesis";
import * as _77 from "./dao/v1/params";
import * as _78 from "./dao/v1/query";
import * as _120 from "./dao/v1/query.rpc.Query";
import * as _129 from "./rpc.query";
export var onomyprotocol;
(function (onomyprotocol) {
    let dao;
    (function (dao) {
        dao.v1 = {
            ..._75,
            ..._76,
            ..._77,
            ..._78,
            ..._120
        };
    })(dao = onomyprotocol.dao || (onomyprotocol.dao = {}));
    onomyprotocol.ClientFactory = {
        ..._129
    };
})(onomyprotocol || (onomyprotocol = {}));
//# sourceMappingURL=bundle.js.map