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
exports.MsgClientImpl = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.connectionOpenInit = this.connectionOpenInit.bind(this);
        this.connectionOpenTry = this.connectionOpenTry.bind(this);
        this.connectionOpenAck = this.connectionOpenAck.bind(this);
        this.connectionOpenConfirm = this.connectionOpenConfirm.bind(this);
    }
    connectionOpenInit(request) {
        const data = tx_1.MsgConnectionOpenInit.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
        return promise.then(data => tx_1.MsgConnectionOpenInitResponse.decode(new _m0.Reader(data)));
    }
    connectionOpenTry(request) {
        const data = tx_1.MsgConnectionOpenTry.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
        return promise.then(data => tx_1.MsgConnectionOpenTryResponse.decode(new _m0.Reader(data)));
    }
    connectionOpenAck(request) {
        const data = tx_1.MsgConnectionOpenAck.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
        return promise.then(data => tx_1.MsgConnectionOpenAckResponse.decode(new _m0.Reader(data)));
    }
    connectionOpenConfirm(request) {
        const data = tx_1.MsgConnectionOpenConfirm.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
        return promise.then(data => tx_1.MsgConnectionOpenConfirmResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map