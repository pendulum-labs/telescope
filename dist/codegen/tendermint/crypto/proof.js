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
exports.ProofOps = exports.ProofOp = exports.DominoOp = exports.ValueOp = exports.Proof = void 0;
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseProof() {
    return {
        total: helpers_1.Long.ZERO,
        index: helpers_1.Long.ZERO,
        leafHash: new Uint8Array(),
        aunts: []
    };
}
exports.Proof = {
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
        message.total = object.total !== undefined && object.total !== null ? helpers_1.Long.fromValue(object.total) : helpers_1.Long.ZERO;
        message.index = object.index !== undefined && object.index !== null ? helpers_1.Long.fromValue(object.index) : helpers_1.Long.ZERO;
        message.leafHash = object.leafHash ?? new Uint8Array();
        message.aunts = object.aunts?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            total: helpers_1.Long.fromString(object.total),
            index: helpers_1.Long.fromString(object.index),
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
        return exports.Proof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Proof.decode(message.value);
    },
    toProto(message) {
        return exports.Proof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.Proof",
            value: exports.Proof.encode(message).finish()
        };
    }
};
function createBaseValueOp() {
    return {
        key: new Uint8Array(),
        proof: exports.Proof.fromPartial({})
    };
}
exports.ValueOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.proof !== undefined) {
            exports.Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
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
                    message.proof = exports.Proof.decode(reader, reader.uint32());
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
        message.proof = object.proof !== undefined && object.proof !== null ? exports.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            proof: object?.proof ? exports.Proof.fromAmino(object.proof) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.proof = message.proof ? exports.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValueOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValueOp.decode(message.value);
    },
    toProto(message) {
        return exports.ValueOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.ValueOp",
            value: exports.ValueOp.encode(message).finish()
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
exports.DominoOp = {
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
        return exports.DominoOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DominoOp.decode(message.value);
    },
    toProto(message) {
        return exports.DominoOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.DominoOp",
            value: exports.DominoOp.encode(message).finish()
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
exports.ProofOp = {
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
        return exports.ProofOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProofOp.decode(message.value);
    },
    toProto(message) {
        return exports.ProofOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.ProofOp",
            value: exports.ProofOp.encode(message).finish()
        };
    }
};
function createBaseProofOps() {
    return {
        ops: []
    };
}
exports.ProofOps = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ops) {
            exports.ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.ops.push(exports.ProofOp.decode(reader, reader.uint32()));
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
        message.ops = object.ops?.map(e => exports.ProofOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            ops: Array.isArray(object?.ops) ? object.ops.map((e) => exports.ProofOp.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(e => e ? exports.ProofOp.toAmino(e) : undefined);
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProofOps.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProofOps.decode(message.value);
    },
    toProto(message) {
        return exports.ProofOps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.ProofOps",
            value: exports.ProofOps.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proof.js.map