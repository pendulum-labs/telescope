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
export namespace tendermint {
  export const abci = {
    ..._59
  };
  export const crypto = {
    ..._60,
    ..._61
  };
  export namespace libs {
    export const bits = {
      ..._62
    };
  }
  export const p2p = {
    ..._63
  };
  export const types = {
    ..._64,
    ..._65,
    ..._66,
    ..._67,
    ..._68
  };
  export const version = {
    ..._69
  };
}