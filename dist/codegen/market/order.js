"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResponse = exports.Orders = exports.Order = void 0;
const helpers_1 = require("../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseOrder() {
    return {
        uid: helpers_1.Long.UZERO,
        owner: "",
        status: "",
        orderType: "",
        denomAsk: "",
        denomBid: "",
        amount: "",
        rate: [],
        prev: helpers_1.Long.UZERO,
        next: helpers_1.Long.UZERO,
        begTime: helpers_1.Long.ZERO,
        updTime: helpers_1.Long.ZERO
    };
}
exports.Order = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.uid.isZero()) {
            writer.uint32(8).uint64(message.uid);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.status !== "") {
            writer.uint32(26).string(message.status);
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
        if (!message.begTime.isZero()) {
            writer.uint32(88).int64(message.begTime);
        }
        if (!message.updTime.isZero()) {
            writer.uint32(96).int64(message.updTime);
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
                    message.status = reader.string();
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
                case 11:
                    message.begTime = reader.int64();
                    break;
                case 12:
                    message.updTime = reader.int64();
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
        message.uid = object.uid !== undefined && object.uid !== null ? helpers_1.Long.fromValue(object.uid) : helpers_1.Long.UZERO;
        message.owner = object.owner ?? "";
        message.status = object.status ?? "";
        message.orderType = object.orderType ?? "";
        message.denomAsk = object.denomAsk ?? "";
        message.denomBid = object.denomBid ?? "";
        message.amount = object.amount ?? "";
        message.rate = object.rate?.map(e => e) || [];
        message.prev = object.prev !== undefined && object.prev !== null ? helpers_1.Long.fromValue(object.prev) : helpers_1.Long.UZERO;
        message.next = object.next !== undefined && object.next !== null ? helpers_1.Long.fromValue(object.next) : helpers_1.Long.UZERO;
        message.begTime = object.begTime !== undefined && object.begTime !== null ? helpers_1.Long.fromValue(object.begTime) : helpers_1.Long.ZERO;
        message.updTime = object.updTime !== undefined && object.updTime !== null ? helpers_1.Long.fromValue(object.updTime) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: helpers_1.Long.fromString(object.uid),
            owner: object.owner,
            status: object.status,
            orderType: object.orderType,
            denomAsk: object.denomAsk,
            denomBid: object.denomBid,
            amount: object.amount,
            rate: Array.isArray(object?.rate) ? object.rate.map((e) => e) : [],
            prev: helpers_1.Long.fromString(object.prev),
            next: helpers_1.Long.fromString(object.next),
            begTime: helpers_1.Long.fromString(object.beg_time),
            updTime: helpers_1.Long.fromString(object.upd_time)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        obj.owner = message.owner;
        obj.status = message.status;
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
        obj.beg_time = message.begTime ? message.begTime.toString() : undefined;
        obj.upd_time = message.updTime ? message.updTime.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Order.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Order.decode(message.value);
    },
    toProto(message) {
        return exports.Order.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Order",
            value: exports.Order.encode(message).finish()
        };
    }
};
function createBaseOrders() {
    return {
        uids: []
    };
}
exports.Orders = {
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
        message.uids = object.uids?.map(e => helpers_1.Long.fromValue(e)) || [];
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
        return exports.Orders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Orders.decode(message.value);
    },
    toProto(message) {
        return exports.Orders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Orders",
            value: exports.Orders.encode(message).finish()
        };
    }
};
function createBaseOrderResponse() {
    return {
        uid: helpers_1.Long.UZERO,
        owner: "",
        status: "",
        orderType: "",
        denomAsk: "",
        denomBid: "",
        amount: "",
        rate: [],
        prev: helpers_1.Long.UZERO,
        next: helpers_1.Long.UZERO,
        begTime: helpers_1.Long.ZERO,
        updTime: helpers_1.Long.ZERO
    };
}
exports.OrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.uid.isZero()) {
            writer.uint32(8).uint64(message.uid);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.status !== "") {
            writer.uint32(26).string(message.status);
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
        if (!message.begTime.isZero()) {
            writer.uint32(88).int64(message.begTime);
        }
        if (!message.updTime.isZero()) {
            writer.uint32(96).int64(message.updTime);
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
                    message.status = reader.string();
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
                case 11:
                    message.begTime = reader.int64();
                    break;
                case 12:
                    message.updTime = reader.int64();
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
        message.uid = object.uid !== undefined && object.uid !== null ? helpers_1.Long.fromValue(object.uid) : helpers_1.Long.UZERO;
        message.owner = object.owner ?? "";
        message.status = object.status ?? "";
        message.orderType = object.orderType ?? "";
        message.denomAsk = object.denomAsk ?? "";
        message.denomBid = object.denomBid ?? "";
        message.amount = object.amount ?? "";
        message.rate = object.rate?.map(e => e) || [];
        message.prev = object.prev !== undefined && object.prev !== null ? helpers_1.Long.fromValue(object.prev) : helpers_1.Long.UZERO;
        message.next = object.next !== undefined && object.next !== null ? helpers_1.Long.fromValue(object.next) : helpers_1.Long.UZERO;
        message.begTime = object.begTime !== undefined && object.begTime !== null ? helpers_1.Long.fromValue(object.begTime) : helpers_1.Long.ZERO;
        message.updTime = object.updTime !== undefined && object.updTime !== null ? helpers_1.Long.fromValue(object.updTime) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: helpers_1.Long.fromString(object.uid),
            owner: object.owner,
            status: object.status,
            orderType: object.orderType,
            denomAsk: object.denomAsk,
            denomBid: object.denomBid,
            amount: object.amount,
            rate: Array.isArray(object?.rate) ? object.rate.map((e) => e) : [],
            prev: helpers_1.Long.fromString(object.prev),
            next: helpers_1.Long.fromString(object.next),
            begTime: helpers_1.Long.fromString(object.beg_time),
            updTime: helpers_1.Long.fromString(object.upd_time)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        obj.owner = message.owner;
        obj.status = message.status;
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
        obj.beg_time = message.begTime ? message.begTime.toString() : undefined;
        obj.upd_time = message.updTime ? message.updTime.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.OrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.OrderResponse",
            value: exports.OrderResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=order.js.map