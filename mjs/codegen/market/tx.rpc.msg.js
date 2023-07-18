import * as _m0 from "protobufjs/minimal";
import { MsgCreatePool, MsgCreatePoolResponse, MsgCreateDrop, MsgCreateDropResponse, MsgRedeemDrop, MsgRedeemDropResponse, MsgCreateOrder, MsgCreateOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgMarketOrder, MsgMarketOrderResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "CreatePool", data);
        return promise.then(data => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
    }
    createDrop(request) {
        const data = MsgCreateDrop.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "CreateDrop", data);
        return promise.then(data => MsgCreateDropResponse.decode(new _m0.Reader(data)));
    }
    redeemDrop(request) {
        const data = MsgRedeemDrop.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "RedeemDrop", data);
        return promise.then(data => MsgRedeemDropResponse.decode(new _m0.Reader(data)));
    }
    createOrder(request) {
        const data = MsgCreateOrder.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "CreateOrder", data);
        return promise.then(data => MsgCreateOrderResponse.decode(new _m0.Reader(data)));
    }
    cancelOrder(request) {
        const data = MsgCancelOrder.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "CancelOrder", data);
        return promise.then(data => MsgCancelOrderResponse.decode(new _m0.Reader(data)));
    }
    marketOrder(request) {
        const data = MsgMarketOrder.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Msg", "MarketOrder", data);
        return promise.then(data => MsgMarketOrderResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map