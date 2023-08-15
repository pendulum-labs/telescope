import * as _74 from "../market/burnings";
import * as _75 from "../market/drop";
import * as _76 from "../market/genesis";
import * as _77 from "../market/member";
import * as _78 from "../market/order";
import * as _79 from "../market/params";
import * as _80 from "../market/pool";
import * as _81 from "../market/query";
import * as _82 from "../market/tx";
import * as _112 from "../market/tx.amino";
import * as _113 from "../market/tx.registry";
import * as _114 from "../market/query.rpc.Query";
import * as _115 from "../market/tx.rpc.msg";
import * as _121 from "./rpc.query";
import * as _122 from "./rpc.tx";
export var pendulumlabs;
(function (pendulumlabs) {
    let market;
    (function (market_1) {
        market_1.market = {
            ..._74,
            ..._75,
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._80,
            ..._81,
            ..._82,
            ..._112,
            ..._113,
            ..._114,
            ..._115
        };
    })(market = pendulumlabs.market || (pendulumlabs.market = {}));
    pendulumlabs.ClientFactory = {
        ..._121,
        ..._122
    };
})(pendulumlabs || (pendulumlabs = {}));
//# sourceMappingURL=bundle.js.map