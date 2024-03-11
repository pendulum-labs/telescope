"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ibc = void 0;
const _90 = __importStar(require("./applications/transfer/v1/genesis"));
const _91 = __importStar(require("./applications/transfer/v1/query"));
const _92 = __importStar(require("./applications/transfer/v1/transfer"));
const _93 = __importStar(require("./applications/transfer/v1/tx"));
const _94 = __importStar(require("./applications/transfer/v2/packet"));
const _95 = __importStar(require("./core/channel/v1/channel"));
const _96 = __importStar(require("./core/channel/v1/genesis"));
const _97 = __importStar(require("./core/channel/v1/query"));
const _98 = __importStar(require("./core/channel/v1/tx"));
const _99 = __importStar(require("./core/client/v1/client"));
const _100 = __importStar(require("./core/client/v1/genesis"));
const _101 = __importStar(require("./core/client/v1/query"));
const _102 = __importStar(require("./core/client/v1/tx"));
const _103 = __importStar(require("./core/commitment/v1/commitment"));
const _104 = __importStar(require("./core/connection/v1/connection"));
const _105 = __importStar(require("./core/connection/v1/genesis"));
const _106 = __importStar(require("./core/connection/v1/query"));
const _107 = __importStar(require("./core/connection/v1/tx"));
const _108 = __importStar(require("./core/port/v1/query"));
const _109 = __importStar(require("./core/types/v1/genesis"));
const _110 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _111 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _112 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _113 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _151 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _152 = __importStar(require("./core/channel/v1/tx.amino"));
const _153 = __importStar(require("./core/client/v1/tx.amino"));
const _154 = __importStar(require("./core/connection/v1/tx.amino"));
const _155 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _156 = __importStar(require("./core/channel/v1/tx.registry"));
const _157 = __importStar(require("./core/client/v1/tx.registry"));
const _158 = __importStar(require("./core/connection/v1/tx.registry"));
const _159 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _160 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _161 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _162 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _163 = __importStar(require("./core/port/v1/query.rpc.Query"));
const _164 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _165 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _166 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _167 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _175 = __importStar(require("./rpc.query"));
const _176 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._90,
                ..._91,
                ..._92,
                ..._93,
                ..._151,
                ..._155,
                ..._159,
                ..._164
            };
            transfer.v2 = {
                ..._94
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._95,
                ..._96,
                ..._97,
                ..._98,
                ..._152,
                ..._156,
                ..._160,
                ..._165
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._99,
                ..._100,
                ..._101,
                ..._102,
                ..._153,
                ..._157,
                ..._161,
                ..._166
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._103
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._104,
                ..._105,
                ..._106,
                ..._107,
                ..._154,
                ..._158,
                ..._162,
                ..._167
            };
        })(connection = core.connection || (core.connection = {}));
        let port;
        (function (port) {
            port.v1 = {
                ..._108,
                ..._163
            };
        })(port = core.port || (core.port = {}));
        let types;
        (function (types) {
            types.v1 = {
                ..._109
            };
        })(types = core.types || (core.types = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._110
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._111
            };
            solomachine.v2 = {
                ..._112
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._113
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._175,
        ..._176
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map