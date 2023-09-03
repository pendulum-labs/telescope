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
exports.MsgMarketOrderResponse = exports.MsgMarketOrder = exports.MsgCancelOrderResponse = exports.MsgCancelOrder = exports.MsgCreateOrderResponse = exports.MsgCreateOrder = exports.MsgRedeemDropResponse = exports.MsgRedeemDrop = exports.MsgCreateDropResponse = exports.MsgCreateDrop = exports.MsgCreatePoolResponse = exports.MsgCreatePool = void 0;
const helpers_1 = require("../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgCreatePool() {
    return {
        creator: "",
        coinA: "",
        coinB: ""
    };
}
exports.MsgCreatePool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.coinA !== "") {
            writer.uint32(18).string(message.coinA);
        }
        if (message.coinB !== "") {
            writer.uint32(26).string(message.coinB);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.coinA = reader.string();
                    break;
                case 3:
                    message.coinB = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePool();
        message.creator = object.creator ?? "";
        message.coinA = object.coinA ?? "";
        message.coinB = object.coinB ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator,
            coinA: object.coinA,
            coinB: object.coinB
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.coinA = message.coinA;
        obj.coinB = message.coinB;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgCreatePool",
            value: exports.MsgCreatePool.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePoolResponse() {
    return {};
}
exports.MsgCreatePoolResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCreatePoolResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgCreatePoolResponse",
            value: exports.MsgCreatePoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDrop() {
    return {
        creator: "",
        pair: "",
        drops: ""
    };
}
exports.MsgCreateDrop = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.pair !== "") {
            writer.uint32(18).string(message.pair);
        }
        if (message.drops !== "") {
            writer.uint32(26).string(message.drops);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDrop();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.pair = reader.string();
                    break;
                case 3:
                    message.drops = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDrop();
        message.creator = object.creator ?? "";
        message.pair = object.pair ?? "";
        message.drops = object.drops ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator,
            pair: object.pair,
            drops: object.drops
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.pair = message.pair;
        obj.drops = message.drops;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDrop.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDrop.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDrop.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
            value: exports.MsgCreateDrop.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDropResponse() {
    return {};
}
exports.MsgCreateDropResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDropResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateDropResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDropResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgCreateDropResponse",
            value: exports.MsgCreateDropResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRedeemDrop() {
    return {
        creator: "",
        uid: ""
    };
}
exports.MsgRedeemDrop = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.uid !== "") {
            writer.uint32(18).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedeemDrop();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRedeemDrop();
        message.creator = object.creator ?? "";
        message.uid = object.uid ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator,
            uid: object.uid
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.uid = message.uid;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRedeemDrop.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRedeemDrop.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRedeemDrop.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
            value: exports.MsgRedeemDrop.encode(message).finish()
        };
    }
};
function createBaseMsgRedeemDropResponse() {
    return {};
}
exports.MsgRedeemDropResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedeemDropResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgRedeemDropResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRedeemDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRedeemDropResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRedeemDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgRedeemDropResponse",
            value: exports.MsgRedeemDropResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateOrder() {
    return {
        creator: "",
        denomAsk: "",
        denomBid: "",
        orderType: "",
        amount: "",
        rate: [],
        prev: "",
        next: ""
    };
}
exports.MsgCreateOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.denomAsk !== "") {
            writer.uint32(18).string(message.denomAsk);
        }
        if (message.denomBid !== "") {
            writer.uint32(26).string(message.denomBid);
        }
        if (message.orderType !== "") {
            writer.uint32(34).string(message.orderType);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        for (const v of message.rate) {
            writer.uint32(50).string(v);
        }
        if (message.prev !== "") {
            writer.uint32(58).string(message.prev);
        }
        if (message.next !== "") {
            writer.uint32(66).string(message.next);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.denomAsk = reader.string();
                    break;
                case 3:
                    message.denomBid = reader.string();
                    break;
                case 4:
                    message.orderType = reader.string();
                    break;
                case 5:
                    message.amount = reader.string();
                    break;
                case 6:
                    message.rate.push(reader.string());
                    break;
                case 7:
                    message.prev = reader.string();
                    break;
                case 8:
                    message.next = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateOrder();
        message.creator = object.creator ?? "";
        message.denomAsk = object.denomAsk ?? "";
        message.denomBid = object.denomBid ?? "";
        message.orderType = object.orderType ?? "";
        message.amount = object.amount ?? "";
        message.rate = object.rate?.map(e => e) || [];
        message.prev = object.prev ?? "";
        message.next = object.next ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator,
            denomAsk: object.denomAsk,
            denomBid: object.denomBid,
            orderType: object.orderType,
            amount: object.amount,
            rate: Array.isArray(object?.rate) ? object.rate.map((e) => e) : [],
            prev: object.prev,
            next: object.next
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.denomAsk = message.denomAsk;
        obj.denomBid = message.denomBid;
        obj.orderType = message.orderType;
        obj.amount = message.amount;
        if (message.rate) {
            obj.rate = message.rate.map(e => e);
        }
        else {
            obj.rate = [];
        }
        obj.prev = message.prev;
        obj.next = message.next;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
            value: exports.MsgCreateOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateOrderResponse() {
    return {
        uid: helpers_1.Long.UZERO
    };
}
exports.MsgCreateOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.uid.isZero()) {
            writer.uint32(8).uint64(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateOrderResponse();
        message.uid = object.uid !== undefined && object.uid !== null ? helpers_1.Long.fromValue(object.uid) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: helpers_1.Long.fromString(object.uid)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgCreateOrderResponse",
            value: exports.MsgCreateOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelOrder() {
    return {
        creator: "",
        uid: ""
    };
}
exports.MsgCancelOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.uid !== "") {
            writer.uint32(18).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelOrder();
        message.creator = object.creator ?? "";
        message.uid = object.uid ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator,
            uid: object.uid
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.uid = message.uid;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
            value: exports.MsgCancelOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCancelOrderResponse() {
    return {};
}
exports.MsgCancelOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCancelOrderResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgCancelOrderResponse",
            value: exports.MsgCancelOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMarketOrder() {
    return {
        creator: "",
        denomAsk: "",
        amountAsk: "",
        denomBid: "",
        amountBid: "",
        slippage: ""
    };
}
exports.MsgMarketOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.denomAsk !== "") {
            writer.uint32(18).string(message.denomAsk);
        }
        if (message.amountAsk !== "") {
            writer.uint32(26).string(message.amountAsk);
        }
        if (message.denomBid !== "") {
            writer.uint32(34).string(message.denomBid);
        }
        if (message.amountBid !== "") {
            writer.uint32(42).string(message.amountBid);
        }
        if (message.slippage !== "") {
            writer.uint32(50).string(message.slippage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.denomAsk = reader.string();
                    break;
                case 3:
                    message.amountAsk = reader.string();
                    break;
                case 4:
                    message.denomBid = reader.string();
                    break;
                case 5:
                    message.amountBid = reader.string();
                    break;
                case 6:
                    message.slippage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMarketOrder();
        message.creator = object.creator ?? "";
        message.denomAsk = object.denomAsk ?? "";
        message.amountAsk = object.amountAsk ?? "";
        message.denomBid = object.denomBid ?? "";
        message.amountBid = object.amountBid ?? "";
        message.slippage = object.slippage ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator,
            denomAsk: object.denomAsk,
            amountAsk: object.amountAsk,
            denomBid: object.denomBid,
            amountBid: object.amountBid,
            slippage: object.slippage
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.denomAsk = message.denomAsk;
        obj.amountAsk = message.amountAsk;
        obj.denomBid = message.denomBid;
        obj.amountBid = message.amountBid;
        obj.slippage = message.slippage;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMarketOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgMarketOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMarketOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
            value: exports.MsgMarketOrder.encode(message).finish()
        };
    }
};
function createBaseMsgMarketOrderResponse() {
    return {
        amountBid: "",
        amountAsk: "",
        slippage: ""
    };
}
exports.MsgMarketOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amountBid !== "") {
            writer.uint32(10).string(message.amountBid);
        }
        if (message.amountAsk !== "") {
            writer.uint32(18).string(message.amountAsk);
        }
        if (message.slippage !== "") {
            writer.uint32(26).string(message.slippage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMarketOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amountBid = reader.string();
                    break;
                case 2:
                    message.amountAsk = reader.string();
                    break;
                case 3:
                    message.slippage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMarketOrderResponse();
        message.amountBid = object.amountBid ?? "";
        message.amountAsk = object.amountAsk ?? "";
        message.slippage = object.slippage ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amountBid: object.amountBid,
            amountAsk: object.amountAsk,
            slippage: object.slippage
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amountBid = message.amountBid;
        obj.amountAsk = message.amountAsk;
        obj.slippage = message.slippage;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMarketOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgMarketOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMarketOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.MsgMarketOrderResponse",
            value: exports.MsgMarketOrderResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map