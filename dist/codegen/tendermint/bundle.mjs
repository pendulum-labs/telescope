import * as _57 from "./abci/types";
import * as _58 from "./crypto/keys";
import * as _59 from "./crypto/proof";
import * as _60 from "./libs/bits/types";
import * as _61 from "./p2p/types";
import * as _62 from "./types/block";
import * as _63 from "./types/evidence";
import * as _64 from "./types/params";
import * as _65 from "./types/types";
import * as _66 from "./types/validator";
import * as _67 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._57
    };
    tendermint.crypto = {
        ..._58,
        ..._59
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._60
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._61
    };
    tendermint.types = {
        ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._66
    };
    tendermint.version = {
        ..._67
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map