import * as _m0 from "protobufjs/minimal";
function createBasePool() {
    return {
        pair: "",
        denom1: "",
        denom2: "",
        leaders: [],
        drops: ""
    };
}
export const Pool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pair !== "") {
            writer.uint32(10).string(message.pair);
        }
        if (message.denom1 !== "") {
            writer.uint32(18).string(message.denom1);
        }
        if (message.denom2 !== "") {
            writer.uint32(26).string(message.denom2);
        }
        for (const v of message.leaders) {
            Leader.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.drops !== "") {
            writer.uint32(42).string(message.drops);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pair = reader.string();
                    break;
                case 2:
                    message.denom1 = reader.string();
                    break;
                case 3:
                    message.denom2 = reader.string();
                    break;
                case 4:
                    message.leaders.push(Leader.decode(reader, reader.uint32()));
                    break;
                case 5:
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
        const message = createBasePool();
        message.pair = object.pair ?? "";
        message.denom1 = object.denom1 ?? "";
        message.denom2 = object.denom2 ?? "";
        message.leaders = object.leaders?.map(e => Leader.fromPartial(e)) || [];
        message.drops = object.drops ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            pair: object.pair,
            denom1: object.denom1,
            denom2: object.denom2,
            leaders: Array.isArray(object?.leaders) ? object.leaders.map((e) => Leader.fromAmino(e)) : [],
            drops: object.drops
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pair = message.pair;
        obj.denom1 = message.denom1;
        obj.denom2 = message.denom2;
        if (message.leaders) {
            obj.leaders = message.leaders.map(e => e ? Leader.toAmino(e) : undefined);
        }
        else {
            obj.leaders = [];
        }
        obj.drops = message.drops;
        return obj;
    },
    fromAminoMsg(object) {
        return Pool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Pool.decode(message.value);
    },
    toProto(message) {
        return Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Pool",
            value: Pool.encode(message).finish()
        };
    }
};
function createBaseLeader() {
    return {
        address: "",
        drops: ""
    };
}
export const Leader = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.drops !== "") {
            writer.uint32(18).string(message.drops);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
        const message = createBaseLeader();
        message.address = object.address ?? "";
        message.drops = object.drops ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            drops: object.drops
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.drops = message.drops;
        return obj;
    },
    fromAminoMsg(object) {
        return Leader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Leader.decode(message.value);
    },
    toProto(message) {
        return Leader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Leader",
            value: Leader.encode(message).finish()
        };
    }
};
//# sourceMappingURL=pool.js.map