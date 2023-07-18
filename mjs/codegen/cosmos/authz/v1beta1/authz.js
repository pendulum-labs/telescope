import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseGenericAuthorization() {
    return {
        msg: ""
    };
}
export const GenericAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenericAuthorization();
        message.msg = object.msg ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            msg: object.msg
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg = message.msg;
        return obj;
    },
    fromAminoMsg(object) {
        return GenericAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenericAuthorization",
            value: GenericAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenericAuthorization.decode(message.value);
    },
    toProto(message) {
        return GenericAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
            value: GenericAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        authorization: undefined,
        expiration: undefined
    };
}
export const Grant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorization = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authorization: object?.authorization ? Any.fromAmino(object.authorization) : undefined,
            expiration: object.expiration
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authorization = message.authorization ? Any.toAmino(message.authorization) : undefined;
        obj.expiration = message.expiration;
        return obj;
    },
    fromAminoMsg(object) {
        return Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Grant.decode(message.value);
    },
    toProto(message) {
        return Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.Grant",
            value: Grant.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authz.js.map