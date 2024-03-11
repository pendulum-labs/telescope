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
import * as _122 from "../market/tx.amino";
import * as _123 from "../market/tx.registry";
import * as _124 from "../market/query.rpc.Query";
import * as _125 from "../market/tx.rpc.msg";
import * as _131 from "./rpc.query";
import * as _132 from "./rpc.tx";
export var pendulumlabs;
(function (pendulumlabs) {
    let market;
    (function (market_1) {
        market_1.market = {
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
            ..._122,
            ..._123,
            ..._124,
            ..._125
        };
    })(market = pendulumlabs.market || (pendulumlabs.market = {}));
    pendulumlabs.ClientFactory = {
        ..._131,
        ..._132
    };
})(pendulumlabs || (pendulumlabs = {}));
//# sourceMappingURL=bundle.js.map