import * as _90 from "./applications/transfer/v1/genesis";
import * as _91 from "./applications/transfer/v1/query";
import * as _92 from "./applications/transfer/v1/transfer";
import * as _93 from "./applications/transfer/v1/tx";
import * as _94 from "./applications/transfer/v2/packet";
import * as _95 from "./core/channel/v1/channel";
import * as _96 from "./core/channel/v1/genesis";
import * as _97 from "./core/channel/v1/query";
import * as _98 from "./core/channel/v1/tx";
import * as _99 from "./core/client/v1/client";
import * as _100 from "./core/client/v1/genesis";
import * as _101 from "./core/client/v1/query";
import * as _102 from "./core/client/v1/tx";
import * as _103 from "./core/commitment/v1/commitment";
import * as _104 from "./core/connection/v1/connection";
import * as _105 from "./core/connection/v1/genesis";
import * as _106 from "./core/connection/v1/query";
import * as _107 from "./core/connection/v1/tx";
import * as _108 from "./core/port/v1/query";
import * as _109 from "./core/types/v1/genesis";
import * as _110 from "./lightclients/localhost/v1/localhost";
import * as _111 from "./lightclients/solomachine/v1/solomachine";
import * as _112 from "./lightclients/solomachine/v2/solomachine";
import * as _113 from "./lightclients/tendermint/v1/tendermint";
import * as _151 from "./applications/transfer/v1/tx.amino";
import * as _152 from "./core/channel/v1/tx.amino";
import * as _153 from "./core/client/v1/tx.amino";
import * as _154 from "./core/connection/v1/tx.amino";
import * as _155 from "./applications/transfer/v1/tx.registry";
import * as _156 from "./core/channel/v1/tx.registry";
import * as _157 from "./core/client/v1/tx.registry";
import * as _158 from "./core/connection/v1/tx.registry";
import * as _159 from "./applications/transfer/v1/query.rpc.Query";
import * as _160 from "./core/channel/v1/query.rpc.Query";
import * as _161 from "./core/client/v1/query.rpc.Query";
import * as _162 from "./core/connection/v1/query.rpc.Query";
import * as _163 from "./core/port/v1/query.rpc.Query";
import * as _164 from "./applications/transfer/v1/tx.rpc.msg";
import * as _165 from "./core/channel/v1/tx.rpc.msg";
import * as _166 from "./core/client/v1/tx.rpc.msg";
import * as _167 from "./core/connection/v1/tx.rpc.msg";
import * as _175 from "./rpc.query";
import * as _176 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._90,
        ..._91,
        ..._92,
        ..._93,
        ..._151,
        ..._155,
        ..._159,
        ..._164
      };
      export const v2 = {
        ..._94
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._95,
        ..._96,
        ..._97,
        ..._98,
        ..._152,
        ..._156,
        ..._160,
        ..._165
      };
    }
    export namespace client {
      export const v1 = {
        ..._99,
        ..._100,
        ..._101,
        ..._102,
        ..._153,
        ..._157,
        ..._161,
        ..._166
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._103
      };
    }
    export namespace connection {
      export const v1 = {
        ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._154,
        ..._158,
        ..._162,
        ..._167
      };
    }
    export namespace port {
      export const v1 = {
        ..._108,
        ..._163
      };
    }
    export namespace types {
      export const v1 = {
        ..._109
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._110
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._111
      };
      export const v2 = {
        ..._112
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._113
      };
    }
  }
  export const ClientFactory = {
    ..._175,
    ..._176
  };
}