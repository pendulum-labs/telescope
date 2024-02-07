/// <reference types="long" />
import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Order {
    uid: Long;
    owner: string;
    status: string;
    orderType: string;
    denomAsk: string;
    denomBid: string;
    amount: string;
    rate: string[];
    prev: Long;
    next: Long;
    begTime: Long;
    updTime: Long;
}
export interface OrderProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Order";
    value: Uint8Array;
}
export interface OrderAmino {
    uid: string;
    owner: string;
    status: string;
    orderType: string;
    denomAsk: string;
    denomBid: string;
    amount: string;
    rate: string[];
    prev: string;
    next: string;
    beg_time: string;
    upd_time: string;
}
export interface OrderAminoMsg {
    type: "/pendulumlabs.market.market.Order";
    value: OrderAmino;
}
export interface OrderSDKType {
    uid: Long;
    owner: string;
    status: string;
    orderType: string;
    denomAsk: string;
    denomBid: string;
    amount: string;
    rate: string[];
    prev: Long;
    next: Long;
    beg_time: Long;
    upd_time: Long;
}
export interface Orders {
    uids: Long[];
}
export interface OrdersProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Orders";
    value: Uint8Array;
}
export interface OrdersAmino {
    uids: string[];
}
export interface OrdersAminoMsg {
    type: "/pendulumlabs.market.market.Orders";
    value: OrdersAmino;
}
export interface OrdersSDKType {
    uids: Long[];
}
export interface OrderResponse {
    uid: Long;
    owner: string;
    status: string;
    orderType: string;
    denomAsk: string;
    denomBid: string;
    amount: string;
    rate: string[];
    prev: Long;
    next: Long;
    begTime: Long;
    updTime: Long;
}
export interface OrderResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.OrderResponse";
    value: Uint8Array;
}
export interface OrderResponseAmino {
    uid: string;
    owner: string;
    status: string;
    orderType: string;
    denomAsk: string;
    denomBid: string;
    amount: string;
    rate: string[];
    prev: string;
    next: string;
    beg_time: string;
    upd_time: string;
}
export interface OrderResponseAminoMsg {
    type: "/pendulumlabs.market.market.OrderResponse";
    value: OrderResponseAmino;
}
export interface OrderResponseSDKType {
    uid: Long;
    owner: string;
    status: string;
    orderType: string;
    denomAsk: string;
    denomBid: string;
    amount: string;
    rate: string[];
    prev: Long;
    next: Long;
    beg_time: Long;
    upd_time: Long;
}
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromPartial(object: DeepPartial<Order>): Order;
    fromAmino(object: OrderAmino): Order;
    toAmino(message: Order): OrderAmino;
    fromAminoMsg(object: OrderAminoMsg): Order;
    fromProtoMsg(message: OrderProtoMsg): Order;
    toProto(message: Order): Uint8Array;
    toProtoMsg(message: Order): OrderProtoMsg;
};
export declare const Orders: {
    encode(message: Orders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Orders;
    fromPartial(object: DeepPartial<Orders>): Orders;
    fromAmino(object: OrdersAmino): Orders;
    toAmino(message: Orders): OrdersAmino;
    fromAminoMsg(object: OrdersAminoMsg): Orders;
    fromProtoMsg(message: OrdersProtoMsg): Orders;
    toProto(message: Orders): Uint8Array;
    toProtoMsg(message: Orders): OrdersProtoMsg;
};
export declare const OrderResponse: {
    encode(message: OrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderResponse;
    fromPartial(object: DeepPartial<OrderResponse>): OrderResponse;
    fromAmino(object: OrderResponseAmino): OrderResponse;
    toAmino(message: OrderResponse): OrderResponseAmino;
    fromAminoMsg(object: OrderResponseAminoMsg): OrderResponse;
    fromProtoMsg(message: OrderResponseProtoMsg): OrderResponse;
    toProto(message: OrderResponse): Uint8Array;
    toProtoMsg(message: OrderResponse): OrderResponseProtoMsg;
};
