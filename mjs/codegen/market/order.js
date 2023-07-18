import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseOrder() {
    return {
        uid: Long.UZERO,
        owner: "",
        active: false,
        orderType: "",
        denomAsk: "",
        denomBid: "",
        amount: "",
        rate: [],
        prev: Long.UZERO,
        next: Long.UZERO
    };
}
export const Order = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.uid.isZero()) {
            writer.uint32(8).uint64(message.uid);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        if (message.orderType !== "") {
            writer.uint32(34).string(message.orderType);
        }
        if (message.denomAsk !== "") {
            writer.uint32(42).string(message.denomAsk);
        }
        if (message.denomBid !== "") {
            writer.uint32(50).string(message.denomBid);
        }
        if (message.amount !== "") {
            writer.uint32(58).string(message.amount);
        }
        for (const v of message.rate) {
            writer.uint32(66).string(v);
        }
        if (!message.prev.isZero()) {
            writer.uint32(72).uint64(message.prev);
        }
        if (!message.next.isZero()) {
            writer.uint32(80).uint64(message.next);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.active = reader.bool();
                    break;
                case 4:
                    message.orderType = reader.string();
                    break;
                case 5:
                    message.denomAsk = reader.string();
                    break;
                case 6:
                    message.denomBid = reader.string();
                    break;
                case 7:
                    message.amount = reader.string();
                    break;
                case 8:
                    message.rate.push(reader.string());
                    break;
                case 9:
                    message.prev = reader.uint64();
                    break;
                case 10:
                    message.next = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrder();
        message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
        message.owner = object.owner ?? "";
        message.active = object.active ?? false;
        message.orderType = object.orderType ?? "";
        message.denomAsk = object.denomAsk ?? "";
        message.denomBid = object.denomBid ?? "";
        message.amount = object.amount ?? "";
        message.rate = object.rate?.map(e => e) || [];
        message.prev = object.prev !== undefined && object.prev !== null ? Long.fromValue(object.prev) : Long.UZERO;
        message.next = object.next !== undefined && object.next !== null ? Long.fromValue(object.next) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: Long.fromString(object.uid),
            owner: object.owner,
            active: object.active,
            orderType: object.orderType,
            denomAsk: object.denomAsk,
            denomBid: object.denomBid,
            amount: object.amount,
            rate: Array.isArray(object?.rate) ? object.rate.map((e) => e) : [],
            prev: Long.fromString(object.prev),
            next: Long.fromString(object.next)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        obj.owner = message.owner;
        obj.active = message.active;
        obj.orderType = message.orderType;
        obj.denomAsk = message.denomAsk;
        obj.denomBid = message.denomBid;
        obj.amount = message.amount;
        if (message.rate) {
            obj.rate = message.rate.map(e => e);
        }
        else {
            obj.rate = [];
        }
        obj.prev = message.prev ? message.prev.toString() : undefined;
        obj.next = message.next ? message.next.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Order.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Order.decode(message.value);
    },
    toProto(message) {
        return Order.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Order",
            value: Order.encode(message).finish()
        };
    }
};
function createBaseOrders() {
    return {
        uids: []
    };
}
export const Orders = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.uids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.uids.push(reader.uint64());
                        }
                    }
                    else {
                        message.uids.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrders();
        message.uids = object.uids?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            uids: Array.isArray(object?.uids) ? object.uids.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.uids) {
            obj.uids = message.uids.map(e => e);
        }
        else {
            obj.uids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Orders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Orders.decode(message.value);
    },
    toProto(message) {
        return Orders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Orders",
            value: Orders.encode(message).finish()
        };
    }
};
function createBaseOrderResponse() {
    return {
        uid: Long.UZERO,
        owner: "",
        active: false,
        orderType: "",
        denomAsk: "",
        denomBid: "",
        amount: "",
        rate: [],
        prev: Long.UZERO,
        next: Long.UZERO
    };
}
export const OrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.uid.isZero()) {
            writer.uint32(8).uint64(message.uid);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        if (message.orderType !== "") {
            writer.uint32(34).string(message.orderType);
        }
        if (message.denomAsk !== "") {
            writer.uint32(42).string(message.denomAsk);
        }
        if (message.denomBid !== "") {
            writer.uint32(50).string(message.denomBid);
        }
        if (message.amount !== "") {
            writer.uint32(58).string(message.amount);
        }
        for (const v of message.rate) {
            writer.uint32(66).string(v);
        }
        if (!message.prev.isZero()) {
            writer.uint32(72).uint64(message.prev);
        }
        if (!message.next.isZero()) {
            writer.uint32(80).uint64(message.next);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.active = reader.bool();
                    break;
                case 4:
                    message.orderType = reader.string();
                    break;
                case 5:
                    message.denomAsk = reader.string();
                    break;
                case 6:
                    message.denomBid = reader.string();
                    break;
                case 7:
                    message.amount = reader.string();
                    break;
                case 8:
                    message.rate.push(reader.string());
                    break;
                case 9:
                    message.prev = reader.uint64();
                    break;
                case 10:
                    message.next = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderResponse();
        message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
        message.owner = object.owner ?? "";
        message.active = object.active ?? false;
        message.orderType = object.orderType ?? "";
        message.denomAsk = object.denomAsk ?? "";
        message.denomBid = object.denomBid ?? "";
        message.amount = object.amount ?? "";
        message.rate = object.rate?.map(e => e) || [];
        message.prev = object.prev !== undefined && object.prev !== null ? Long.fromValue(object.prev) : Long.UZERO;
        message.next = object.next !== undefined && object.next !== null ? Long.fromValue(object.next) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: Long.fromString(object.uid),
            owner: object.owner,
            active: object.active,
            orderType: object.orderType,
            denomAsk: object.denomAsk,
            denomBid: object.denomBid,
            amount: object.amount,
            rate: Array.isArray(object?.rate) ? object.rate.map((e) => e) : [],
            prev: Long.fromString(object.prev),
            next: Long.fromString(object.next)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        obj.owner = message.owner;
        obj.active = message.active;
        obj.orderType = message.orderType;
        obj.denomAsk = message.denomAsk;
        obj.denomBid = message.denomBid;
        obj.amount = message.amount;
        if (message.rate) {
            obj.rate = message.rate.map(e => e);
        }
        else {
            obj.rate = [];
        }
        obj.prev = message.prev ? message.prev.toString() : undefined;
        obj.next = message.next ? message.next.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return OrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OrderResponse.decode(message.value);
    },
    toProto(message) {
        return OrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.OrderResponse",
            value: OrderResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=order.js.map