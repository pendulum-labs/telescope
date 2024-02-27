import * as _64 from "./abci/types";
import * as _65 from "./crypto/keys";
import * as _66 from "./crypto/proof";
import * as _67 from "./libs/bits/types";
import * as _68 from "./p2p/types";
import * as _69 from "./types/block";
import * as _70 from "./types/evidence";
import * as _71 from "./types/params";
import * as _72 from "./types/types";
import * as _73 from "./types/validator";
import * as _74 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._64
    };
    tendermint.crypto = {
        ..._65,
        ..._66
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._67
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._68
    };
    tendermint.types = {
        ..._69,
        ..._70,
        ..._71,
        ..._72,
        ..._73
    };
    tendermint.version = {
        ..._74
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map