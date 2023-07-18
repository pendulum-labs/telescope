"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/pendulumlabs.market.market.MsgCreatePool": {
        aminoType: "/pendulumlabs.market.market.MsgCreatePool",
        toAmino: tx_1.MsgCreatePool.toAmino,
        fromAmino: tx_1.MsgCreatePool.fromAmino
    },
    "/pendulumlabs.market.market.MsgCreateDrop": {
        aminoType: "/pendulumlabs.market.market.MsgCreateDrop",
        toAmino: tx_1.MsgCreateDrop.toAmino,
        fromAmino: tx_1.MsgCreateDrop.fromAmino
    },
    "/pendulumlabs.market.market.MsgRedeemDrop": {
        aminoType: "/pendulumlabs.market.market.MsgRedeemDrop",
        toAmino: tx_1.MsgRedeemDrop.toAmino,
        fromAmino: tx_1.MsgRedeemDrop.fromAmino
    },
    "/pendulumlabs.market.market.MsgCreateOrder": {
        aminoType: "/pendulumlabs.market.market.MsgCreateOrder",
        toAmino: tx_1.MsgCreateOrder.toAmino,
        fromAmino: tx_1.MsgCreateOrder.fromAmino
    },
    "/pendulumlabs.market.market.MsgCancelOrder": {
        aminoType: "/pendulumlabs.market.market.MsgCancelOrder",
        toAmino: tx_1.MsgCancelOrder.toAmino,
        fromAmino: tx_1.MsgCancelOrder.fromAmino
    },
    "/pendulumlabs.market.market.MsgMarketOrder": {
        aminoType: "/pendulumlabs.market.market.MsgMarketOrder",
        toAmino: tx_1.MsgMarketOrder.toAmino,
        fromAmino: tx_1.MsgMarketOrder.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map