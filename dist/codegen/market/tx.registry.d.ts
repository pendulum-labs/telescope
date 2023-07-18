import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgCreateDrop, MsgRedeemDrop, MsgCreateOrder, MsgCancelOrder, MsgMarketOrder } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        createDrop(value: MsgCreateDrop): {
            typeUrl: string;
            value: Uint8Array;
        };
        redeemDrop(value: MsgRedeemDrop): {
            typeUrl: string;
            value: Uint8Array;
        };
        createOrder(value: MsgCreateOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        marketOrder(value: MsgMarketOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        createDrop(value: MsgCreateDrop): {
            typeUrl: string;
            value: MsgCreateDrop;
        };
        redeemDrop(value: MsgRedeemDrop): {
            typeUrl: string;
            value: MsgRedeemDrop;
        };
        createOrder(value: MsgCreateOrder): {
            typeUrl: string;
            value: MsgCreateOrder;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        marketOrder(value: MsgMarketOrder): {
            typeUrl: string;
            value: MsgMarketOrder;
        };
    };
    fromPartial: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        createDrop(value: MsgCreateDrop): {
            typeUrl: string;
            value: MsgCreateDrop;
        };
        redeemDrop(value: MsgRedeemDrop): {
            typeUrl: string;
            value: MsgRedeemDrop;
        };
        createOrder(value: MsgCreateOrder): {
            typeUrl: string;
            value: MsgCreateOrder;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        marketOrder(value: MsgMarketOrder): {
            typeUrl: string;
            value: MsgMarketOrder;
        };
    };
};
