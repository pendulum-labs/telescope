import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        clientGenesis: GenesisState1.fromPartial({}),
        connectionGenesis: GenesisState2.fromPartial({}),
        channelGenesis: GenesisState3.fromPartial({})
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientGenesis !== undefined) {
            GenesisState1.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
        }
        if (message.connectionGenesis !== undefined) {
            GenesisState2.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
        }
        if (message.channelGenesis !== undefined) {
            GenesisState3.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
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
                    message.clientGenesis = GenesisState1.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.connectionGenesis = GenesisState2.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.channelGenesis = GenesisState3.decode(reader, reader.uint32());
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
        message.clientGenesis = object.clientGenesis !== undefined && object.clientGenesis !== null ? GenesisState1.fromPartial(object.clientGenesis) : undefined;
        message.connectionGenesis = object.connectionGenesis !== undefined && object.connectionGenesis !== null ? GenesisState2.fromPartial(object.connectionGenesis) : undefined;
        message.channelGenesis = object.channelGenesis !== undefined && object.channelGenesis !== null ? GenesisState3.fromPartial(object.channelGenesis) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            clientGenesis: object?.client_genesis ? GenesisState1.fromAmino(object.client_genesis) : undefined,
            connectionGenesis: object?.connection_genesis ? GenesisState2.fromAmino(object.connection_genesis) : undefined,
            channelGenesis: object?.channel_genesis ? GenesisState3.fromAmino(object.channel_genesis) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_genesis = message.clientGenesis ? GenesisState1.toAmino(message.clientGenesis) : undefined;
        obj.connection_genesis = message.connectionGenesis ? GenesisState2.toAmino(message.connectionGenesis) : undefined;
        obj.channel_genesis = message.channelGenesis ? GenesisState3.toAmino(message.channelGenesis) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.types.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map