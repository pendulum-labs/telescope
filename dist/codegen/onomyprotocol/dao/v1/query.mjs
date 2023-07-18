import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTreasuryRequest() {
    return {};
}
export const QueryTreasuryRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTreasuryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryTreasuryRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTreasuryRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTreasuryRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTreasuryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.QueryTreasuryRequest",
            value: QueryTreasuryRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTreasuryResponse() {
    return {
        treasuryBalance: []
    };
}
export const QueryTreasuryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.treasuryBalance) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTreasuryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.treasuryBalance.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTreasuryResponse();
        message.treasuryBalance = object.treasuryBalance?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            treasuryBalance: Array.isArray(object?.treasury_balance) ? object.treasury_balance.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.treasuryBalance) {
            obj.treasury_balance = message.treasuryBalance.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.treasury_balance = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTreasuryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTreasuryResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTreasuryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.QueryTreasuryResponse",
            value: QueryTreasuryResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map