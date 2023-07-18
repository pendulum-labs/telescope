"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/pendulumlabs.market.market.MsgCreatePool", tx_1.MsgCreatePool], ["/pendulumlabs.market.market.MsgCreateDrop", tx_1.MsgCreateDrop], ["/pendulumlabs.market.market.MsgRedeemDrop", tx_1.MsgRedeemDrop], ["/pendulumlabs.market.market.MsgCreateOrder", tx_1.MsgCreateOrder], ["/pendulumlabs.market.market.MsgCancelOrder", tx_1.MsgCancelOrder], ["/pendulumlabs.market.market.MsgMarketOrder", tx_1.MsgMarketOrder]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createPool(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreatePool",
                value: tx_1.MsgCreatePool.encode(value).finish()
            };
        },
        createDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
                value: tx_1.MsgCreateDrop.encode(value).finish()
            };
        },
        redeemDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
                value: tx_1.MsgRedeemDrop.encode(value).finish()
            };
        },
        createOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
                value: tx_1.MsgCreateOrder.encode(value).finish()
            };
        },
        cancelOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
                value: tx_1.MsgCancelOrder.encode(value).finish()
            };
        },
        marketOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
                value: tx_1.MsgMarketOrder.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createPool(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreatePool",
                value
            };
        },
        createDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
                value
            };
        },
        redeemDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
                value
            };
        },
        createOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
                value
            };
        },
        cancelOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
                value
            };
        },
        marketOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
                value
            };
        }
    },
    fromPartial: {
        createPool(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreatePool",
                value: tx_1.MsgCreatePool.fromPartial(value)
            };
        },
        createDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
                value: tx_1.MsgCreateDrop.fromPartial(value)
            };
        },
        redeemDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
                value: tx_1.MsgRedeemDrop.fromPartial(value)
            };
        },
        createOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
                value: tx_1.MsgCreateOrder.fromPartial(value)
            };
        },
        cancelOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
                value: tx_1.MsgCancelOrder.fromPartial(value)
            };
        },
        marketOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
                value: tx_1.MsgMarketOrder.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map