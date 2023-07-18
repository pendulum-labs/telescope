import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseProof() {
    return {
        total: Long.ZERO,
        index: Long.ZERO,
        leafHash: new Uint8Array(),
        aunts: []
    };
}
export const Proof = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.total.isZero()) {
            writer.uint32(8).int64(message.total);
        }
        if (!message.index.isZero()) {
            writer.uint32(16).int64(message.index);
        }
        if (message.leafHash.length !== 0) {
            writer.uint32(26).bytes(message.leafHash);
        }
        for (const v of message.aunts) {
            writer.uint32(34).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.int64();
                    break;
                case 2:
                    message.index = reader.int64();
                    break;
                case 3:
                    message.leafHash = reader.bytes();
                    break;
                case 4:
                    message.aunts.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProof();
        message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.ZERO;
        message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
        message.leafHash = object.leafHash ?? new Uint8Array();
        message.aunts = object.aunts?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            total: Long.fromString(object.total),
            index: Long.fromString(object.index),
            leafHash: object.leaf_hash,
            aunts: Array.isArray(object?.aunts) ? object.aunts.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.total = message.total ? message.total.toString() : undefined;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.leaf_hash = message.leafHash;
        if (message.aunts) {
            obj.aunts = message.aunts.map(e => e);
        }
        else {
            obj.aunts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Proof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Proof.decode(message.value);
    },
    toProto(message) {
        return Proof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.Proof",
            value: Proof.encode(message).finish()
        };
    }
};
function createBaseValueOp() {
    return {
        key: new Uint8Array(),
        proof: Proof.fromPartial({})
    };
}
export const ValueOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValueOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.proof = Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValueOp();
        message.key = object.key ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            proof: object?.proof ? Proof.fromAmino(object.proof) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValueOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ValueOp.decode(message.value);
    },
    toProto(message) {
        return ValueOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.ValueOp",
            value: ValueOp.encode(message).finish()
        };
    }
};
function createBaseDominoOp() {
    return {
        key: "",
        input: "",
        output: ""
    };
}
export const DominoOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.input !== "") {
            writer.uint32(18).string(message.input);
        }
        if (message.output !== "") {
            writer.uint32(26).string(message.output);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDominoOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.input = reader.string();
                    break;
                case 3:
                    message.output = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDominoOp();
        message.key = object.key ?? "";
        message.input = object.input ?? "";
        message.output = object.output ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            input: object.input,
            output: object.output
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.input = message.input;
        obj.output = message.output;
        return obj;
    },
    fromAminoMsg(object) {
        return DominoOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DominoOp.decode(message.value);
    },
    toProto(message) {
        return DominoOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.DominoOp",
            value: DominoOp.encode(message).finish()
        };
    }
};
function createBaseProofOp() {
    return {
        type: "",
        key: new Uint8Array(),
        data: new Uint8Array()
    };
}
export const ProofOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProofOp();
        message.type = object.type ?? "";
        message.key = object.key ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            type: object.type,
            key: object.key,
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.key = message.key;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return ProofOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProofOp.decode(message.value);
    },
    toProto(message) {
        return ProofOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.ProofOp",
            value: ProofOp.encode(message).finish()
        };
    }
};
function createBaseProofOps() {
    return {
        ops: []
    };
}
export const ProofOps = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ops) {
            ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ops.push(ProofOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProofOps();
        message.ops = object.ops?.map(e => ProofOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            ops: Array.isArray(object?.ops) ? object.ops.map((e) => ProofOp.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(e => e ? ProofOp.toAmino(e) : undefined);
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ProofOps.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProofOps.decode(message.value);
    },
    toProto(message) {
        return ProofOps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.ProofOps",
            value: ProofOps.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proof.js.map