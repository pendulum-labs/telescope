import * as _68 from "./dao/v1/dao";
import * as _69 from "./dao/v1/genesis";
import * as _70 from "./dao/v1/params";
import * as _71 from "./dao/v1/query";
import * as _108 from "./dao/v1/query.rpc.Query";
import * as _117 from "./rpc.query";
export var onomyprotocol;
(function (onomyprotocol) {
    let dao;
    (function (dao) {
        dao.v1 = {
            ..._68,
            ..._69,
            ..._70,
            ..._71,
            ..._108
        };
    })(dao = onomyprotocol.dao || (onomyprotocol.dao = {}));
    onomyprotocol.ClientFactory = {
        ..._117
    };
})(onomyprotocol || (onomyprotocol = {}));
//# sourceMappingURL=bundle.js.map