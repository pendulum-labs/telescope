import * as _70 from "./dao/v1/dao";
import * as _71 from "./dao/v1/genesis";
import * as _72 from "./dao/v1/params";
import * as _73 from "./dao/v1/query";
import * as _111 from "./dao/v1/query.rpc.Query";
import * as _120 from "./rpc.query";
export var onomyprotocol;
(function (onomyprotocol) {
    let dao;
    (function (dao) {
        dao.v1 = {
            ..._70,
            ..._71,
            ..._72,
            ..._73,
            ..._111
        };
    })(dao = onomyprotocol.dao || (onomyprotocol.dao = {}));
    onomyprotocol.ClientFactory = {
        ..._120
    };
})(onomyprotocol || (onomyprotocol = {}));
//# sourceMappingURL=bundle.js.map