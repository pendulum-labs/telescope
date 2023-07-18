import { MsgCreatePool, MsgCreateDrop, MsgRedeemDrop, MsgCreateOrder, MsgCancelOrder, MsgMarketOrder } from "./tx";
export declare const AminoConverter: {
    "/pendulumlabs.market.market.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: MsgCreatePool) => import("./tx").MsgCreatePoolAmino;
        fromAmino: (object: import("./tx").MsgCreatePoolAmino) => MsgCreatePool;
    };
    "/pendulumlabs.market.market.MsgCreateDrop": {
        aminoType: string;
        toAmino: (message: MsgCreateDrop) => import("./tx").MsgCreateDropAmino;
        fromAmino: (object: import("./tx").MsgCreateDropAmino) => MsgCreateDrop;
    };
    "/pendulumlabs.market.market.MsgRedeemDrop": {
        aminoType: string;
        toAmino: (message: MsgRedeemDrop) => import("./tx").MsgRedeemDropAmino;
        fromAmino: (object: import("./tx").MsgRedeemDropAmino) => MsgRedeemDrop;
    };
    "/pendulumlabs.market.market.MsgCreateOrder": {
        aminoType: string;
        toAmino: (message: MsgCreateOrder) => import("./tx").MsgCreateOrderAmino;
        fromAmino: (object: import("./tx").MsgCreateOrderAmino) => MsgCreateOrder;
    };
    "/pendulumlabs.market.market.MsgCancelOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelOrder) => import("./tx").MsgCancelOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelOrderAmino) => MsgCancelOrder;
    };
    "/pendulumlabs.market.market.MsgMarketOrder": {
        aminoType: string;
        toAmino: (message: MsgMarketOrder) => import("./tx").MsgMarketOrderAmino;
        fromAmino: (object: import("./tx").MsgMarketOrderAmino) => MsgMarketOrder;
    };
};
