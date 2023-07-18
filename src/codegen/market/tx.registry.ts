//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgCreateDrop, MsgRedeemDrop, MsgCreateOrder, MsgCancelOrder, MsgMarketOrder } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pendulumlabs.market.market.MsgCreatePool", MsgCreatePool], ["/pendulumlabs.market.market.MsgCreateDrop", MsgCreateDrop], ["/pendulumlabs.market.market.MsgRedeemDrop", MsgRedeemDrop], ["/pendulumlabs.market.market.MsgCreateOrder", MsgCreateOrder], ["/pendulumlabs.market.market.MsgCancelOrder", MsgCancelOrder], ["/pendulumlabs.market.market.MsgMarketOrder", MsgMarketOrder]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    createDrop(value: MsgCreateDrop) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
        value: MsgCreateDrop.encode(value).finish()
      };
    },
    redeemDrop(value: MsgRedeemDrop) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
        value: MsgRedeemDrop.encode(value).finish()
      };
    },
    createOrder(value: MsgCreateOrder) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
        value: MsgCreateOrder.encode(value).finish()
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
        value: MsgCancelOrder.encode(value).finish()
      };
    },
    marketOrder(value: MsgMarketOrder) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
        value: MsgMarketOrder.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCreatePool",
        value
      };
    },
    createDrop(value: MsgCreateDrop) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
        value
      };
    },
    redeemDrop(value: MsgRedeemDrop) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
        value
      };
    },
    createOrder(value: MsgCreateOrder) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
        value
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
        value
      };
    },
    marketOrder(value: MsgMarketOrder) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
        value
      };
    }
  },
  fromPartial: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    createDrop(value: MsgCreateDrop) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
        value: MsgCreateDrop.fromPartial(value)
      };
    },
    redeemDrop(value: MsgRedeemDrop) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
        value: MsgRedeemDrop.fromPartial(value)
      };
    },
    createOrder(value: MsgCreateOrder) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
        value: MsgCreateOrder.fromPartial(value)
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
        value: MsgCancelOrder.fromPartial(value)
      };
    },
    marketOrder(value: MsgMarketOrder) {
      return {
        typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
        value: MsgMarketOrder.fromPartial(value)
      };
    }
  }
};