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
exports.FundAccountProposal = exports.CoinsExchangePair = exports.ExchangeWithTreasuryProposal = exports.FundTreasuryProposal = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseFundTreasuryProposal() {
    return {
        sender: "",
        title: "",
        description: "",
        amount: []
    };
}
exports.FundTreasuryProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundTreasuryProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFundTreasuryProposal();
        message.sender = object.sender ?? "";
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            title: object.title,
            description: object.description,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.title = message.title;
        obj.description = message.description;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FundTreasuryProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FundTreasuryProposal.decode(message.value);
    },
    toProto(message) {
        return exports.FundTreasuryProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.FundTreasuryProposal",
            value: exports.FundTreasuryProposal.encode(message).finish()
        };
    }
};
function createBaseExchangeWithTreasuryProposal() {
    return {
        sender: "",
        title: "",
        description: "",
        coinsPairs: []
    };
}
exports.ExchangeWithTreasuryProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.coinsPairs) {
            exports.CoinsExchangePair.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExchangeWithTreasuryProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.coinsPairs.push(exports.CoinsExchangePair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExchangeWithTreasuryProposal();
        message.sender = object.sender ?? "";
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.coinsPairs = object.coinsPairs?.map(e => exports.CoinsExchangePair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            title: object.title,
            description: object.description,
            coinsPairs: Array.isArray(object?.coins_pairs) ? object.coins_pairs.map((e) => exports.CoinsExchangePair.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.title = message.title;
        obj.description = message.description;
        if (message.coinsPairs) {
            obj.coins_pairs = message.coinsPairs.map(e => e ? exports.CoinsExchangePair.toAmino(e) : undefined);
        }
        else {
            obj.coins_pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExchangeWithTreasuryProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExchangeWithTreasuryProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ExchangeWithTreasuryProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.ExchangeWithTreasuryProposal",
            value: exports.ExchangeWithTreasuryProposal.encode(message).finish()
        };
    }
};
function createBaseCoinsExchangePair() {
    return {
        coinAsk: undefined,
        coinBid: undefined
    };
}
exports.CoinsExchangePair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.coinAsk !== undefined) {
            coin_1.Coin.encode(message.coinAsk, writer.uint32(10).fork()).ldelim();
        }
        if (message.coinBid !== undefined) {
            coin_1.Coin.encode(message.coinBid, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoinsExchangePair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coinAsk = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.coinBid = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCoinsExchangePair();
        message.coinAsk = object.coinAsk !== undefined && object.coinAsk !== null ? coin_1.Coin.fromPartial(object.coinAsk) : undefined;
        message.coinBid = object.coinBid !== undefined && object.coinBid !== null ? coin_1.Coin.fromPartial(object.coinBid) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            coinAsk: object?.coin_ask ? coin_1.Coin.fromAmino(object.coin_ask) : undefined,
            coinBid: object?.coin_bid ? coin_1.Coin.fromAmino(object.coin_bid) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.coin_ask = message.coinAsk ? coin_1.Coin.toAmino(message.coinAsk) : undefined;
        obj.coin_bid = message.coinBid ? coin_1.Coin.toAmino(message.coinBid) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CoinsExchangePair.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CoinsExchangePair.decode(message.value);
    },
    toProto(message) {
        return exports.CoinsExchangePair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.CoinsExchangePair",
            value: exports.CoinsExchangePair.encode(message).finish()
        };
    }
};
function createBaseFundAccountProposal() {
    return {
        recipient: "",
        title: "",
        description: "",
        amount: []
    };
}
exports.FundAccountProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.recipient !== "") {
            writer.uint32(10).string(message.recipient);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundAccountProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipient = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFundAccountProposal();
        message.recipient = object.recipient ?? "";
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            recipient: object.recipient,
            title: object.title,
            description: object.description,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.recipient = message.recipient;
        obj.title = message.title;
        obj.description = message.description;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FundAccountProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FundAccountProposal.decode(message.value);
    },
    toProto(message) {
        return exports.FundAccountProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.FundAccountProposal",
            value: exports.FundAccountProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=dao.js.map