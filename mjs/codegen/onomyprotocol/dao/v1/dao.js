import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
function createBaseFundTreasuryProposal() {
    return {
        sender: "",
        title: "",
        description: "",
        amount: []
    };
}
export const FundTreasuryProposal = {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            title: object.title,
            description: object.description,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.title = message.title;
        obj.description = message.description;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FundTreasuryProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FundTreasuryProposal.decode(message.value);
    },
    toProto(message) {
        return FundTreasuryProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.FundTreasuryProposal",
            value: FundTreasuryProposal.encode(message).finish()
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
export const ExchangeWithTreasuryProposal = {
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
            CoinsExchangePair.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.coinsPairs.push(CoinsExchangePair.decode(reader, reader.uint32()));
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
        message.coinsPairs = object.coinsPairs?.map(e => CoinsExchangePair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            title: object.title,
            description: object.description,
            coinsPairs: Array.isArray(object?.coins_pairs) ? object.coins_pairs.map((e) => CoinsExchangePair.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.title = message.title;
        obj.description = message.description;
        if (message.coinsPairs) {
            obj.coins_pairs = message.coinsPairs.map(e => e ? CoinsExchangePair.toAmino(e) : undefined);
        }
        else {
            obj.coins_pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ExchangeWithTreasuryProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExchangeWithTreasuryProposal.decode(message.value);
    },
    toProto(message) {
        return ExchangeWithTreasuryProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.ExchangeWithTreasuryProposal",
            value: ExchangeWithTreasuryProposal.encode(message).finish()
        };
    }
};
function createBaseCoinsExchangePair() {
    return {
        coinAsk: Coin.fromPartial({}),
        coinBid: Coin.fromPartial({})
    };
}
export const CoinsExchangePair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.coinAsk !== undefined) {
            Coin.encode(message.coinAsk, writer.uint32(10).fork()).ldelim();
        }
        if (message.coinBid !== undefined) {
            Coin.encode(message.coinBid, writer.uint32(18).fork()).ldelim();
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
                    message.coinAsk = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.coinBid = Coin.decode(reader, reader.uint32());
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
        message.coinAsk = object.coinAsk !== undefined && object.coinAsk !== null ? Coin.fromPartial(object.coinAsk) : undefined;
        message.coinBid = object.coinBid !== undefined && object.coinBid !== null ? Coin.fromPartial(object.coinBid) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            coinAsk: object?.coin_ask ? Coin.fromAmino(object.coin_ask) : undefined,
            coinBid: object?.coin_bid ? Coin.fromAmino(object.coin_bid) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.coin_ask = message.coinAsk ? Coin.toAmino(message.coinAsk) : undefined;
        obj.coin_bid = message.coinBid ? Coin.toAmino(message.coinBid) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CoinsExchangePair.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CoinsExchangePair.decode(message.value);
    },
    toProto(message) {
        return CoinsExchangePair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.CoinsExchangePair",
            value: CoinsExchangePair.encode(message).finish()
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
export const FundAccountProposal = {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            recipient: object.recipient,
            title: object.title,
            description: object.description,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.recipient = message.recipient;
        obj.title = message.title;
        obj.description = message.description;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FundAccountProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FundAccountProposal.decode(message.value);
    },
    toProto(message) {
        return FundAccountProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.FundAccountProposal",
            value: FundAccountProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=dao.js.map