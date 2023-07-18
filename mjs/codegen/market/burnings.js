import * as _m0 from "protobufjs/minimal";
function createBaseBurnings() {
    return {
        denom: "",
        amount: ""
    };
}
export const Burnings = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBurnings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBurnings();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return Burnings.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Burnings.decode(message.value);
    },
    toProto(message) {
        return Burnings.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Burnings",
            value: Burnings.encode(message).finish()
        };
    }
};
//# sourceMappingURL=burnings.js.map