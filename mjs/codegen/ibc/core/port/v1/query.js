import { Counterparty, orderFromJSON } from "../../channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseQueryAppVersionRequest() {
    return {
        portId: "",
        connectionId: "",
        ordering: 0,
        counterparty: Counterparty.fromPartial({}),
        proposedVersion: ""
    };
}
export const QueryAppVersionRequest = {
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
            Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
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
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
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
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.proposedVersion = object.proposedVersion ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            portId: object.port_id,
            connectionId: object.connection_id,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: object?.counterparty ? Counterparty.fromAmino(object.counterparty) : undefined,
            proposedVersion: object.proposed_version
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId;
        obj.connection_id = message.connectionId;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        obj.proposed_version = message.proposedVersion;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAppVersionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppVersionRequest",
            value: QueryAppVersionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAppVersionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAppVersionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.port.v1.QueryAppVersionRequest",
            value: QueryAppVersionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAppVersionResponse() {
    return {
        portId: "",
        version: ""
    };
}
export const QueryAppVersionResponse = {
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
        return QueryAppVersionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppVersionResponse",
            value: QueryAppVersionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAppVersionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAppVersionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.port.v1.QueryAppVersionResponse",
            value: QueryAppVersionResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map