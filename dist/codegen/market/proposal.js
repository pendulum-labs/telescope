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
exports.DenomMetadataProposal = void 0;
const bank_1 = require("../cosmos/bank/v1beta1/bank");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseDenomMetadataProposal() {
    return {
        sender: "",
        title: "",
        description: "",
        metadata: bank_1.Metadata.fromPartial({})
    };
}
exports.DenomMetadataProposal = {
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
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomMetadataProposal();
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
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomMetadataProposal();
        message.sender = object.sender ?? "";
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? bank_1.Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            title: object.title,
            description: object.description,
            metadata: object?.metadata ? bank_1.Metadata.fromAmino(object.metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.title = message.title;
        obj.description = message.description;
        obj.metadata = message.metadata ? bank_1.Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomMetadataProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DenomMetadataProposal.decode(message.value);
    },
    toProto(message) {
        return exports.DenomMetadataProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.DenomMetadataProposal",
            value: exports.DenomMetadataProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposal.js.map