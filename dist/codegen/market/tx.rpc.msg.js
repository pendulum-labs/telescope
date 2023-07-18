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
        this.createPool = this.createPool.bind(this);
        this.createDrop = this.createDrop.bind(this);
        this.redeemDrop = this.redeemDrop.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.marketOrder = this.marketOrder.bind(this);
    }
    createPool(request) {
        const data = tx_1.MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "CreatePool", data);
        return promise.then(data => tx_1.MsgCreatePoolResponse.decode(new _m0.Reader(data)));
    }
    createDrop(request) {
        const data = tx_1.MsgCreateDrop.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "CreateDrop", data);
        return promise.then(data => tx_1.MsgCreateDropResponse.decode(new _m0.Reader(data)));
    }
    redeemDrop(request) {
        const data = tx_1.MsgRedeemDrop.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "RedeemDrop", data);
        return promise.then(data => tx_1.MsgRedeemDropResponse.decode(new _m0.Reader(data)));
    }
    createOrder(request) {
        const data = tx_1.MsgCreateOrder.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "CreateOrder", data);
        return promise.then(data => tx_1.MsgCreateOrderResponse.decode(new _m0.Reader(data)));
    }
    cancelOrder(request) {
        const data = tx_1.MsgCancelOrder.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "CancelOrder", data);
        return promise.then(data => tx_1.MsgCancelOrderResponse.decode(new _m0.Reader(data)));
    }
    marketOrder(request) {
        const data = tx_1.MsgMarketOrder.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "MarketOrder", data);
        return promise.then(data => tx_1.MsgMarketOrderResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map