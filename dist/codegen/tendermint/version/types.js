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
exports.Consensus = exports.App = void 0;
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseApp() {
    return {
        protocol: helpers_1.Long.UZERO,
        software: ""
    };
}
exports.App = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.protocol.isZero()) {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseApp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.uint64();
                    break;
                case 2:
                    message.software = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseApp();
        message.protocol = object.protocol !== undefined && object.protocol !== null ? helpers_1.Long.fromValue(object.protocol) : helpers_1.Long.UZERO;
        message.software = object.software ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            protocol: helpers_1.Long.fromString(object.protocol),
            software: object.software
        };
    },
    toAmino(message) {
        const obj = {};
        obj.protocol = message.protocol ? message.protocol.toString() : undefined;
        obj.software = message.software;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.App.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.App.decode(message.value);
    },
    toProto(message) {
        return exports.App.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.App",
            value: exports.App.encode(message).finish()
        };
    }
};
function createBaseConsensus() {
    return {
        block: helpers_1.Long.UZERO,
        app: helpers_1.Long.UZERO
    };
}
exports.Consensus = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.block.isZero()) {
            writer.uint32(8).uint64(message.block);
        }
        if (!message.app.isZero()) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = reader.uint64();
                    break;
                case 2:
                    message.app = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensus();
        message.block = object.block !== undefined && object.block !== null ? helpers_1.Long.fromValue(object.block) : helpers_1.Long.UZERO;
        message.app = object.app !== undefined && object.app !== null ? helpers_1.Long.fromValue(object.app) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            block: helpers_1.Long.fromString(object.block),
            app: helpers_1.Long.fromString(object.app)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? message.block.toString() : undefined;
        obj.app = message.app ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Consensus.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Consensus.decode(message.value);
    },
    toProto(message) {
        return exports.Consensus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.Consensus",
            value: exports.Consensus.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map