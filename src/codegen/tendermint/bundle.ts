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
export namespace tendermint {
  export const abci = {
    ..._64
  };
  export const crypto = {
    ..._65,
    ..._66
  };
  export namespace libs {
    export const bits = {
      ..._67
    };
  }
  export const p2p = {
    ..._68
  };
  export const types = {
    ..._69,
    ..._70,
    ..._71,
    ..._72,
    ..._73
  };
  export const version = {
    ..._74
  };
}