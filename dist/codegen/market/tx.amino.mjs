//@ts-nocheck
import { MsgCreatePool, MsgCreateDrop, MsgRedeemDrop, MsgCreateOrder, MsgCancelOrder, MsgMarketOrder } from "./tx";
export const AminoConverter = {
    "/pendulumlabs.market.market.MsgCreatePool": {
        aminoType: "/pendulumlabs.market.market.MsgCreatePool",
        toAmino: MsgCreatePool.toAmino,
        fromAmino: MsgCreatePool.fromAmino
    },
    "/pendulumlabs.market.market.MsgCreateDrop": {
        aminoType: "/pendulumlabs.market.market.MsgCreateDrop",
        toAmino: MsgCreateDrop.toAmino,
        fromAmino: MsgCreateDrop.fromAmino
    },
    "/pendulumlabs.market.market.MsgRedeemDrop": {
        aminoType: "/pendulumlabs.market.market.MsgRedeemDrop",
        toAmino: MsgRedeemDrop.toAmino,
        fromAmino: MsgRedeemDrop.fromAmino
    },
    "/pendulumlabs.market.market.MsgCreateOrder": {
        aminoType: "/pendulumlabs.market.market.MsgCreateOrder",
        toAmino: MsgCreateOrder.toAmino,
        fromAmino: MsgCreateOrder.fromAmino
    },
    "/pendulumlabs.market.market.MsgCancelOrder": {
        aminoType: "/pendulumlabs.market.market.MsgCancelOrder",
        toAmino: MsgCancelOrder.toAmino,
        fromAmino: MsgCancelOrder.fromAmino
    },
    "/pendulumlabs.market.market.MsgMarketOrder": {
        aminoType: "/pendulumlabs.market.market.MsgMarketOrder",
        toAmino: MsgMarketOrder.toAmino,
        fromAmino: MsgMarketOrder.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map