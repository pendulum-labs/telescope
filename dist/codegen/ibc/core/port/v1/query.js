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
exports.QueryAppVersionResponse = exports.QueryAppVersionRequest = void 0;
const channel_1 = require("../../channel/v1/channel");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../../helpers");
function createBaseQueryAppVersionRequest() {
    return {
        portId: "",
        connectionId: "",
        ordering: 0,
        counterparty: channel_1.Counterparty.fromPartial({}),
        proposedVersion: ""
    };
}
exports.QueryAppVersionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.ordering !== 0) {
            writer.uint32(24).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            channel_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.proposedVersion !== "") {
            writer.uint32(42).string(message.proposedVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppVersionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.ordering = reader.int32();
                    break;
                case 4:
                    message.counterparty = channel_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proposedVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAppVersionRequest();
        message.portId = object.portId ?? "";
        message.connectionId = object.connectionId ?? "";
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? channel_1.Counterparty.fromPartial(object.counterparty) : undefined;
        message.proposedVersion = object.proposedVersion ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            portId: object.port_id,
            connectionId: object.connection_id,
            ordering: (0, helpers_1.isSet)(object.ordering) ? (0, channel_1.orderFromJSON)(object.ordering) : -1,
            counterparty: object?.counterparty ? channel_1.Counterparty.fromAmino(object.counterparty) : undefined,
            proposedVersion: object.proposed_version
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.connection_id = message.connectionId;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? channel_1.Counterparty.toAmino(message.counterparty) : undefined;
        obj.proposed_version = message.proposedVersion;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAppVersionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppVersionRequest",
            value: exports.QueryAppVersionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppVersionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppVersionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.port.v1.QueryAppVersionRequest",
            value: exports.QueryAppVersionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAppVersionResponse() {
    return {
        portId: "",
        version: ""
    };
}
exports.QueryAppVersionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppVersionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAppVersionResponse();
        message.portId = object.portId ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            portId: object.port_id,
            version: object.version
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAppVersionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppVersionResponse",
            value: exports.QueryAppVersionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppVersionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppVersionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.port.v1.QueryAppVersionResponse",
            value: exports.QueryAppVersionResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map