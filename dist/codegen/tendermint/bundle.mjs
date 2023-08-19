import * as _62 from "./abci/types";
import * as _63 from "./crypto/keys";
import * as _64 from "./crypto/proof";
import * as _65 from "./libs/bits/types";
import * as _66 from "./p2p/types";
import * as _67 from "./types/block";
import * as _68 from "./types/evidence";
import * as _69 from "./types/params";
import * as _70 from "./types/types";
import * as _71 from "./types/validator";
import * as _72 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._62
    };
    tendermint.crypto = {
        ..._63,
        ..._64
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._65
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._66
    };
    tendermint.types = {
        ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._71
    };
    tendermint.version = {
        ..._72
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map