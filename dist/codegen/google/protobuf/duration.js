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
exports.Duration = void 0;
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseDuration() {
    return {
        seconds: helpers_1.Long.ZERO,
        nanos: 0
    };
}
exports.Duration = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.seconds.isZero()) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.int64();
                    break;
                case 2:
                    message.nanos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDuration();
        message.seconds = object.seconds !== undefined && object.seconds !== null ? helpers_1.Long.fromValue(object.seconds) : helpers_1.Long.ZERO;
        message.nanos = object.nanos ?? 0;
        return message;
    },
    fromAmino(object) {
        const value = parseInt(object);
        return {
            seconds: helpers_1.Long.fromNumber(Math.floor(value / 1000000000)),
            nanos: value % 1000000000
        };
    },
    toAmino(message) {
        return (message.seconds.toInt() * 1000000000 + message.nanos).toString();
    },
    fromAminoMsg(object) {
        return exports.Duration.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Duration.decode(message.value);
    },
    toProto(message) {
        return exports.Duration.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Duration",
            value: exports.Duration.encode(message).finish()
        };
    }
};
//# sourceMappingURL=duration.js.map