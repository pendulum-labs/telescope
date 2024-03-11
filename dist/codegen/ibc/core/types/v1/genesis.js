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
exports.GenesisState = void 0;
const genesis_1 = require("../../client/v1/genesis");
const genesis_2 = require("../../connection/v1/genesis");
const genesis_3 = require("../../channel/v1/genesis");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        clientGenesis: genesis_1.GenesisState.fromPartial({}),
        connectionGenesis: genesis_2.GenesisState.fromPartial({}),
        channelGenesis: genesis_3.GenesisState.fromPartial({})
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientGenesis !== undefined) {
            genesis_1.GenesisState.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
        }
        if (message.connectionGenesis !== undefined) {
            genesis_2.GenesisState.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
        }
        if (message.channelGenesis !== undefined) {
            genesis_3.GenesisState.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientGenesis = genesis_1.GenesisState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.connectionGenesis = genesis_2.GenesisState.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.channelGenesis = genesis_3.GenesisState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.clientGenesis = object.clientGenesis !== undefined && object.clientGenesis !== null ? genesis_1.GenesisState.fromPartial(object.clientGenesis) : undefined;
        message.connectionGenesis = object.connectionGenesis !== undefined && object.connectionGenesis !== null ? genesis_2.GenesisState.fromPartial(object.connectionGenesis) : undefined;
        message.channelGenesis = object.channelGenesis !== undefined && object.channelGenesis !== null ? genesis_3.GenesisState.fromPartial(object.channelGenesis) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            clientGenesis: object?.client_genesis ? genesis_1.GenesisState.fromAmino(object.client_genesis) : undefined,
            connectionGenesis: object?.connection_genesis ? genesis_2.GenesisState.fromAmino(object.connection_genesis) : undefined,
            channelGenesis: object?.channel_genesis ? genesis_3.GenesisState.fromAmino(object.channel_genesis) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_genesis = message.clientGenesis ? genesis_1.GenesisState.toAmino(message.clientGenesis) : undefined;
        obj.connection_genesis = message.connectionGenesis ? genesis_2.GenesisState.toAmino(message.connectionGenesis) : undefined;
        obj.channel_genesis = message.channelGenesis ? genesis_3.GenesisState.toAmino(message.channelGenesis) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.types.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map