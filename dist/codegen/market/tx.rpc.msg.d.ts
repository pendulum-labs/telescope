import { Rpc } from "../helpers";
import { MsgCreatePool, MsgCreatePoolResponse, MsgCreateDrop, MsgCreateDropResponse, MsgRedeemDrop, MsgRedeemDropResponse, MsgCreateOrder, MsgCreateOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgMarketOrder, MsgMarketOrderResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    createDrop(request: MsgCreateDrop): Promise<MsgCreateDropResponse>;
    redeemDrop(request: MsgRedeemDrop): Promise<MsgRedeemDropResponse>;
    createOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    marketOrder(request: MsgMarketOrder): Promise<MsgMarketOrderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    createDrop(request: MsgCreateDrop): Promise<MsgCreateDropResponse>;
    redeemDrop(request: MsgRedeemDrop): Promise<MsgRedeemDropResponse>;
    createOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    marketOrder(request: MsgMarketOrder): Promise<MsgMarketOrderResponse>;
}
