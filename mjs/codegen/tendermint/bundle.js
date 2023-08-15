import * as _59 from "./abci/types";
import * as _60 from "./crypto/keys";
import * as _61 from "./crypto/proof";
import * as _62 from "./libs/bits/types";
import * as _63 from "./p2p/types";
import * as _64 from "./types/block";
import * as _65 from "./types/evidence";
import * as _66 from "./types/params";
import * as _67 from "./types/types";
import * as _68 from "./types/validator";
import * as _69 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._59
    };
    tendermint.crypto = {
        ..._60,
        ..._61
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._62
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._63
    };
    tendermint.types = {
        ..._64,
        ..._65,
        ..._66,
        ..._67,
        ..._68
    };
    tendermint.version = {
        ..._69
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map