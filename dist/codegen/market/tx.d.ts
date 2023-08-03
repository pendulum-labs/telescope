import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface MsgCreatePool {
    creator: string;
    coinA: string;
    coinB: string;
}
export interface MsgCreatePoolProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgCreatePool";
    value: Uint8Array;
}
export interface MsgCreatePoolAmino {
    creator: string;
    coinA: string;
    coinB: string;
}
export interface MsgCreatePoolAminoMsg {
    type: "/pendulumlabs.market.market.MsgCreatePool";
    value: MsgCreatePoolAmino;
}
export interface MsgCreatePoolSDKType {
    creator: string;
    coinA: string;
    coinB: string;
}
export interface MsgCreatePoolResponse {
}
export interface MsgCreatePoolResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgCreatePoolResponse";
    value: Uint8Array;
}
export interface MsgCreatePoolResponseAmino {
}
export interface MsgCreatePoolResponseAminoMsg {
    type: "/pendulumlabs.market.market.MsgCreatePoolResponse";
    value: MsgCreatePoolResponseAmino;
}
export interface MsgCreatePoolResponseSDKType {
}
export interface MsgCreateDrop {
    creator: string;
    pair: string;
    drops: string;
}
export interface MsgCreateDropProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgCreateDrop";
    value: Uint8Array;
}
export interface MsgCreateDropAmino {
    creator: string;
    pair: string;
    drops: string;
}
export interface MsgCreateDropAminoMsg {
    type: "/pendulumlabs.market.market.MsgCreateDrop";
    value: MsgCreateDropAmino;
}
export interface MsgCreateDropSDKType {
    creator: string;
    pair: string;
    drops: string;
}
export interface MsgCreateDropResponse {
}
export interface MsgCreateDropResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgCreateDropResponse";
    value: Uint8Array;
}
export interface MsgCreateDropResponseAmino {
}
export interface MsgCreateDropResponseAminoMsg {
    type: "/pendulumlabs.market.market.MsgCreateDropResponse";
    value: MsgCreateDropResponseAmino;
}
export interface MsgCreateDropResponseSDKType {
}
export interface MsgRedeemDrop {
    creator: string;
    uid: string;
}
export interface MsgRedeemDropProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop";
    value: Uint8Array;
}
export interface MsgRedeemDropAmino {
    creator: string;
    uid: string;
}
export interface MsgRedeemDropAminoMsg {
    type: "/pendulumlabs.market.market.MsgRedeemDrop";
    value: MsgRedeemDropAmino;
}
export interface MsgRedeemDropSDKType {
    creator: string;
    uid: string;
}
export interface MsgRedeemDropResponse {
}
export interface MsgRedeemDropResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgRedeemDropResponse";
    value: Uint8Array;
}
export interface MsgRedeemDropResponseAmino {
}
export interface MsgRedeemDropResponseAminoMsg {
    type: "/pendulumlabs.market.market.MsgRedeemDropResponse";
    value: MsgRedeemDropResponseAmino;
}
export interface MsgRedeemDropResponseSDKType {
}
export interface MsgCreateOrder {
    creator: string;
    denomAsk: string;
    denomBid: string;
    orderType: string;
    amount: string;
    rate: string[];
    prev: string;
    next: string;
}
export interface MsgCreateOrderProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgCreateOrder";
    value: Uint8Array;
}
export interface MsgCreateOrderAmino {
    creator: string;
    denomAsk: string;
    denomBid: string;
    orderType: string;
    amount: string;
    rate: string[];
    prev: string;
    next: string;
}
export interface MsgCreateOrderAminoMsg {
    type: "/pendulumlabs.market.market.MsgCreateOrder";
    value: MsgCreateOrderAmino;
}
export interface MsgCreateOrderSDKType {
    creator: string;
    denomAsk: string;
    denomBid: string;
    orderType: string;
    amount: string;
    rate: string[];
    prev: string;
    next: string;
}
export interface MsgCreateOrderResponse {
}
export interface MsgCreateOrderResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgCreateOrderResponse";
    value: Uint8Array;
}
export interface MsgCreateOrderResponseAmino {
}
export interface MsgCreateOrderResponseAminoMsg {
    type: "/pendulumlabs.market.market.MsgCreateOrderResponse";
    value: MsgCreateOrderResponseAmino;
}
export interface MsgCreateOrderResponseSDKType {
}
export interface MsgCancelOrder {
    creator: string;
    uid: string;
}
export interface MsgCancelOrderProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgCancelOrder";
    value: Uint8Array;
}
export interface MsgCancelOrderAmino {
    creator: string;
    uid: string;
}
export interface MsgCancelOrderAminoMsg {
    type: "/pendulumlabs.market.market.MsgCancelOrder";
    value: MsgCancelOrderAmino;
}
export interface MsgCancelOrderSDKType {
    creator: string;
    uid: string;
}
export interface MsgCancelOrderResponse {
}
export interface MsgCancelOrderResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgCancelOrderResponse";
    value: Uint8Array;
}
export interface MsgCancelOrderResponseAmino {
}
export interface MsgCancelOrderResponseAminoMsg {
    type: "/pendulumlabs.market.market.MsgCancelOrderResponse";
    value: MsgCancelOrderResponseAmino;
}
export interface MsgCancelOrderResponseSDKType {
}
export interface MsgMarketOrder {
    creator: string;
    denomAsk: string;
    denomBid: string;
    amountBid: string;
    /** Slippage is percentage based on (parameter / 1000), 9999 representing as 99.99% */
    slippage: string;
}
export interface MsgMarketOrderProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgMarketOrder";
    value: Uint8Array;
}
export interface MsgMarketOrderAmino {
    creator: string;
    denomAsk: string;
    denomBid: string;
    amountBid: string;
    /** Slippage is percentage based on (parameter / 1000), 9999 representing as 99.99% */
    slippage: string;
}
export interface MsgMarketOrderAminoMsg {
    type: "/pendulumlabs.market.market.MsgMarketOrder";
    value: MsgMarketOrderAmino;
}
export interface MsgMarketOrderSDKType {
    creator: string;
    denomAsk: string;
    denomBid: string;
    amountBid: string;
    slippage: string;
}
export interface MsgMarketOrderResponse {
}
export interface MsgMarketOrderResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.MsgMarketOrderResponse";
    value: Uint8Array;
}
export interface MsgMarketOrderResponseAmino {
}
export interface MsgMarketOrderResponseAminoMsg {
    type: "/pendulumlabs.market.market.MsgMarketOrderResponse";
    value: MsgMarketOrderResponseAmino;
}
export interface MsgMarketOrderResponseSDKType {
}
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool;
    fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool;
    fromAmino(object: MsgCreatePoolAmino): MsgCreatePool;
    toAmino(message: MsgCreatePool): MsgCreatePoolAmino;
    fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool;
    fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool;
    toProto(message: MsgCreatePool): Uint8Array;
    toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
    fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse;
    toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino;
    fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse;
    fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse;
    toProto(message: MsgCreatePoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg;
};
export declare const MsgCreateDrop: {
    encode(message: MsgCreateDrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDrop;
    fromPartial(object: DeepPartial<MsgCreateDrop>): MsgCreateDrop;
    fromAmino(object: MsgCreateDropAmino): MsgCreateDrop;
    toAmino(message: MsgCreateDrop): MsgCreateDropAmino;
    fromAminoMsg(object: MsgCreateDropAminoMsg): MsgCreateDrop;
    fromProtoMsg(message: MsgCreateDropProtoMsg): MsgCreateDrop;
    toProto(message: MsgCreateDrop): Uint8Array;
    toProtoMsg(message: MsgCreateDrop): MsgCreateDropProtoMsg;
};
export declare const MsgCreateDropResponse: {
    encode(_: MsgCreateDropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDropResponse;
    fromPartial(_: DeepPartial<MsgCreateDropResponse>): MsgCreateDropResponse;
    fromAmino(_: MsgCreateDropResponseAmino): MsgCreateDropResponse;
    toAmino(_: MsgCreateDropResponse): MsgCreateDropResponseAmino;
    fromAminoMsg(object: MsgCreateDropResponseAminoMsg): MsgCreateDropResponse;
    fromProtoMsg(message: MsgCreateDropResponseProtoMsg): MsgCreateDropResponse;
    toProto(message: MsgCreateDropResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDropResponse): MsgCreateDropResponseProtoMsg;
};
export declare const MsgRedeemDrop: {
    encode(message: MsgRedeemDrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemDrop;
    fromPartial(object: DeepPartial<MsgRedeemDrop>): MsgRedeemDrop;
    fromAmino(object: MsgRedeemDropAmino): MsgRedeemDrop;
    toAmino(message: MsgRedeemDrop): MsgRedeemDropAmino;
    fromAminoMsg(object: MsgRedeemDropAminoMsg): MsgRedeemDrop;
    fromProtoMsg(message: MsgRedeemDropProtoMsg): MsgRedeemDrop;
    toProto(message: MsgRedeemDrop): Uint8Array;
    toProtoMsg(message: MsgRedeemDrop): MsgRedeemDropProtoMsg;
};
export declare const MsgRedeemDropResponse: {
    encode(_: MsgRedeemDropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemDropResponse;
    fromPartial(_: DeepPartial<MsgRedeemDropResponse>): MsgRedeemDropResponse;
    fromAmino(_: MsgRedeemDropResponseAmino): MsgRedeemDropResponse;
    toAmino(_: MsgRedeemDropResponse): MsgRedeemDropResponseAmino;
    fromAminoMsg(object: MsgRedeemDropResponseAminoMsg): MsgRedeemDropResponse;
    fromProtoMsg(message: MsgRedeemDropResponseProtoMsg): MsgRedeemDropResponse;
    toProto(message: MsgRedeemDropResponse): Uint8Array;
    toProtoMsg(message: MsgRedeemDropResponse): MsgRedeemDropResponseProtoMsg;
};
export declare const MsgCreateOrder: {
    encode(message: MsgCreateOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrder;
    fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder;
    fromAmino(object: MsgCreateOrderAmino): MsgCreateOrder;
    toAmino(message: MsgCreateOrder): MsgCreateOrderAmino;
    fromAminoMsg(object: MsgCreateOrderAminoMsg): MsgCreateOrder;
    fromProtoMsg(message: MsgCreateOrderProtoMsg): MsgCreateOrder;
    toProto(message: MsgCreateOrder): Uint8Array;
    toProtoMsg(message: MsgCreateOrder): MsgCreateOrderProtoMsg;
};
export declare const MsgCreateOrderResponse: {
    encode(_: MsgCreateOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrderResponse;
    fromPartial(_: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse;
    fromAmino(_: MsgCreateOrderResponseAmino): MsgCreateOrderResponse;
    toAmino(_: MsgCreateOrderResponse): MsgCreateOrderResponseAmino;
    fromAminoMsg(object: MsgCreateOrderResponseAminoMsg): MsgCreateOrderResponse;
    fromProtoMsg(message: MsgCreateOrderResponseProtoMsg): MsgCreateOrderResponse;
    toProto(message: MsgCreateOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCreateOrderResponse): MsgCreateOrderResponseProtoMsg;
};
export declare const MsgCancelOrder: {
    encode(message: MsgCancelOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder;
    fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder;
    fromAmino(object: MsgCancelOrderAmino): MsgCancelOrder;
    toAmino(message: MsgCancelOrder): MsgCancelOrderAmino;
    fromAminoMsg(object: MsgCancelOrderAminoMsg): MsgCancelOrder;
    fromProtoMsg(message: MsgCancelOrderProtoMsg): MsgCancelOrder;
    toProto(message: MsgCancelOrder): Uint8Array;
    toProtoMsg(message: MsgCancelOrder): MsgCancelOrderProtoMsg;
};
export declare const MsgCancelOrderResponse: {
    encode(_: MsgCancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse;
    fromAmino(_: MsgCancelOrderResponseAmino): MsgCancelOrderResponse;
    toAmino(_: MsgCancelOrderResponse): MsgCancelOrderResponseAmino;
    fromAminoMsg(object: MsgCancelOrderResponseAminoMsg): MsgCancelOrderResponse;
    fromProtoMsg(message: MsgCancelOrderResponseProtoMsg): MsgCancelOrderResponse;
    toProto(message: MsgCancelOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCancelOrderResponse): MsgCancelOrderResponseProtoMsg;
};
export declare const MsgMarketOrder: {
    encode(message: MsgMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMarketOrder;
    fromPartial(object: DeepPartial<MsgMarketOrder>): MsgMarketOrder;
    fromAmino(object: MsgMarketOrderAmino): MsgMarketOrder;
    toAmino(message: MsgMarketOrder): MsgMarketOrderAmino;
    fromAminoMsg(object: MsgMarketOrderAminoMsg): MsgMarketOrder;
    fromProtoMsg(message: MsgMarketOrderProtoMsg): MsgMarketOrder;
    toProto(message: MsgMarketOrder): Uint8Array;
    toProtoMsg(message: MsgMarketOrder): MsgMarketOrderProtoMsg;
};
export declare const MsgMarketOrderResponse: {
    encode(_: MsgMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMarketOrderResponse;
    fromPartial(_: DeepPartial<MsgMarketOrderResponse>): MsgMarketOrderResponse;
    fromAmino(_: MsgMarketOrderResponseAmino): MsgMarketOrderResponse;
    toAmino(_: MsgMarketOrderResponse): MsgMarketOrderResponseAmino;
    fromAminoMsg(object: MsgMarketOrderResponseAminoMsg): MsgMarketOrderResponse;
    fromProtoMsg(message: MsgMarketOrderResponseProtoMsg): MsgMarketOrderResponse;
    toProto(message: MsgMarketOrderResponse): Uint8Array;
    toProtoMsg(message: MsgMarketOrderResponse): MsgMarketOrderResponseProtoMsg;
};
