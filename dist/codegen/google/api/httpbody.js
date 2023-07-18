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
exports.HttpBody = void 0;
const any_1 = require("../protobuf/any");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseHttpBody() {
    return {
        contentType: "",
        data: new Uint8Array(),
        extensions: []
    };
}
exports.HttpBody = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contentType !== "") {
            writer.uint32(10).string(message.contentType);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        for (const v of message.extensions) {
            any_1.Any.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttpBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentType = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.extensions.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHttpBody();
        message.contentType = object.contentType ?? "";
        message.data = object.data ?? new Uint8Array();
        message.extensions = object.extensions?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            contentType: object.content_type,
            data: object.data,
            extensions: Array.isArray(object?.extensions) ? object.extensions.map((e) => any_1.Any.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.content_type = message.contentType;
        obj.data = message.data;
        if (message.extensions) {
            obj.extensions = message.extensions.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.extensions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HttpBody.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.HttpBody.decode(message.value);
    },
    toProto(message) {
        return exports.HttpBody.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.HttpBody",
            value: exports.HttpBody.encode(message).finish()
        };
    }
};
//# sourceMappingURL=httpbody.js.map