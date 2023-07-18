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
export namespace tendermint {
  export const abci = {
    ..._57
  };
  export const crypto = {
    ..._58,
    ..._59
  };
  export namespace libs {
    export const bits = {
      ..._60
    };
  }
  export const p2p = {
    ..._61
  };
  export const types = {
    ..._62,
    ..._63,
    ..._64,
    ..._65,
    ..._66
  };
  export const version = {
    ..._67
  };
}