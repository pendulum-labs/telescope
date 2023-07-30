import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
    return {
        earnRates: "",
        burnRate: "",
        burnCoin: "",
        marketFee: ""
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.earnRates !== "") {
            writer.uint32(10).string(message.earnRates);
        }
        if (message.burnRate !== "") {
            writer.uint32(18).string(message.burnRate);
        }
        if (message.burnCoin !== "") {
            writer.uint32(26).string(message.burnCoin);
        }
        if (message.marketFee !== "") {
            writer.uint32(34).string(message.marketFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.earnRates = reader.string();
                    break;
                case 2:
                    message.burnRate = reader.string();
                    break;
                case 3:
                    message.burnCoin = reader.string();
                    break;
                case 4:
                    message.marketFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.earnRates = object.earnRates ?? "";
        message.burnRate = object.burnRate ?? "";
        message.burnCoin = object.burnCoin ?? "";
        message.marketFee = object.marketFee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            earnRates: object.earn_rates,
            burnRate: object.burn_rate,
            burnCoin: object.burn_coin,
            marketFee: object.market_fee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.earn_rates = message.earnRates;
        obj.burn_rate = message.burnRate;
        obj.burn_coin = message.burnCoin;
        obj.market_fee = message.marketFee;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map