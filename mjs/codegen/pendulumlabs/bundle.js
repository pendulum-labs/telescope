import * as _77 from "../market/burnings";
import * as _78 from "../market/drop";
import * as _79 from "../market/genesis";
import * as _80 from "../market/member";
import * as _81 from "../market/order";
import * as _82 from "../market/params";
import * as _83 from "../market/pool";
import * as _84 from "../market/query";
import * as _85 from "../market/tx";
import * as _116 from "../market/tx.amino";
import * as _117 from "../market/tx.registry";
import * as _118 from "../market/query.rpc.Query";
import * as _119 from "../market/tx.rpc.msg";
import * as _125 from "./rpc.query";
import * as _126 from "./rpc.tx";
export var pendulumlabs;
(function (pendulumlabs) {
    let market;
    (function (market_1) {
        market_1.market = {
            ..._77,
            ..._78,
            ..._79,
            ..._80,
            ..._81,
            ..._82,
            ..._83,
            ..._84,
            ..._85,
            ..._116,
            ..._117,
            ..._118,
            ..._119
        };
    })(market = pendulumlabs.market || (pendulumlabs.market = {}));
    pendulumlabs.ClientFactory = {
        ..._125,
        ..._126
    };
})(pendulumlabs || (pendulumlabs = {}));
//# sourceMappingURL=bundle.js.map