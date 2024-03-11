import { Metadata } from "../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
function createBaseDenomMetadataProposal() {
    return {
        sender: "",
        title: "",
        description: "",
        metadata: Metadata.fromPartial({})
    };
}
export const DenomMetadataProposal = {
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
            Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
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
                    message.metadata = Metadata.decode(reader, reader.uint32());
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
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            title: object.title,
            description: object.description,
            metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.title = message.title;
        obj.description = message.description;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DenomMetadataProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DenomMetadataProposal.decode(message.value);
    },
    toProto(message) {
        return DenomMetadataProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.DenomMetadataProposal",
            value: DenomMetadataProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposal.js.map