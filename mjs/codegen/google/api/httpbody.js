import { Any } from "../protobuf/any";
import * as _m0 from "protobufjs/minimal";
function createBaseHttpBody() {
    return {
        contentType: "",
        data: new Uint8Array(),
        extensions: []
    };
}
export const HttpBody = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contentType !== "") {
            writer.uint32(10).string(message.contentType);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        for (const v of message.extensions) {
            Any.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.extensions.push(Any.decode(reader, reader.uint32()));
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
        message.extensions = object.extensions?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            contentType: object.content_type,
            data: object.data,
            extensions: Array.isArray(object?.extensions) ? object.extensions.map((e) => Any.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.content_type = message.contentType;
        obj.data = message.data;
        if (message.extensions) {
            obj.extensions = message.extensions.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.extensions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return HttpBody.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return HttpBody.decode(message.value);
    },
    toProto(message) {
        return HttpBody.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.HttpBody",
            value: HttpBody.encode(message).finish()
        };
    }
};
//# sourceMappingURL=httpbody.js.map