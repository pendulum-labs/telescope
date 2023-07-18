import { MsgCreatePool, MsgCreateDrop, MsgRedeemDrop, MsgCreateOrder, MsgCancelOrder, MsgMarketOrder } from "./tx";
export const registry = [["/pendulumlabs.market.market.MsgCreatePool", MsgCreatePool], ["/pendulumlabs.market.market.MsgCreateDrop", MsgCreateDrop], ["/pendulumlabs.market.market.MsgRedeemDrop", MsgRedeemDrop], ["/pendulumlabs.market.market.MsgCreateOrder", MsgCreateOrder], ["/pendulumlabs.market.market.MsgCancelOrder", MsgCancelOrder], ["/pendulumlabs.market.market.MsgMarketOrder", MsgMarketOrder]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createPool(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreatePool",
                value: MsgCreatePool.encode(value).finish()
            };
        },
        createDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
                value: MsgCreateDrop.encode(value).finish()
            };
        },
        redeemDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
                value: MsgRedeemDrop.encode(value).finish()
            };
        },
        createOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
                value: MsgCreateOrder.encode(value).finish()
            };
        },
        cancelOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
                value: MsgCancelOrder.encode(value).finish()
            };
        },
        marketOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
                value: MsgMarketOrder.encode(value).finish()
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
                value: MsgCreatePool.fromPartial(value)
            };
        },
        createDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
                value: MsgCreateDrop.fromPartial(value)
            };
        },
        redeemDrop(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
                value: MsgRedeemDrop.fromPartial(value)
            };
        },
        createOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
                value: MsgCreateOrder.fromPartial(value)
            };
        },
        cancelOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
                value: MsgCancelOrder.fromPartial(value)
            };
        },
        marketOrder(value) {
            return {
                typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
                value: MsgMarketOrder.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map