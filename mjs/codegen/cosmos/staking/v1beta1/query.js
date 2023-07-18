import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params } from "./staking";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryValidatorsRequest() {
    return {
        status: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryValidatorsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsRequest();
        message.status = object.status ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            status: object.status,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorsRequest",
            value: QueryValidatorsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
            value: QueryValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorsResponse() {
    return {
        validators: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryValidatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsResponse();
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorsResponse",
            value: QueryValidatorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
            value: QueryValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorRequest() {
    return {
        validatorAddr: ""
    };
}
export const QueryValidatorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorRequest",
            value: QueryValidatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
            value: QueryValidatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorResponse() {
    return {
        validator: Validator.fromPartial({})
    };
}
export const QueryValidatorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorResponse();
        message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validator: object?.validator ? Validator.fromAmino(object.validator) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorResponse",
            value: QueryValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
            value: QueryValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorDelegationsRequest() {
    return {
        validatorAddr: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryValidatorDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorDelegationsRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddr: object.validator_addr,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorDelegationsRequest",
            value: QueryValidatorDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
            value: QueryValidatorDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorDelegationsResponse() {
    return {
        delegationResponses: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryValidatorDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.delegationResponses) {
            DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorDelegationsResponse();
        message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegationResponses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e) => DelegationResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.delegationResponses) {
            obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorDelegationsResponse",
            value: QueryValidatorDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
            value: QueryValidatorDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
    return {
        validatorAddr: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryValidatorUnbondingDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddr: object.validator_addr,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorUnbondingDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
            value: QueryValidatorUnbondingDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorUnbondingDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorUnbondingDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
            value: QueryValidatorUnbondingDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
    return {
        unbondingResponses: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryValidatorUnbondingDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.unbondingResponses) {
            UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            unbondingResponses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e) => UnbondingDelegation.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.unbondingResponses) {
            obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorUnbondingDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
            value: QueryValidatorUnbondingDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorUnbondingDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorUnbondingDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
            value: QueryValidatorUnbondingDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: ""
    };
}
export const QueryDelegationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddr: object.delegator_addr,
            validatorAddr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegatorAddr;
        obj.validator_addr = message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRequest",
            value: QueryDelegationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
            value: QueryDelegationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationResponse() {
    return {
        delegationResponse: DelegationResponse.fromPartial({})
    };
}
export const QueryDelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegationResponse !== undefined) {
            DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationResponse();
        message.delegationResponse = object.delegationResponse !== undefined && object.delegationResponse !== null ? DelegationResponse.fromPartial(object.delegationResponse) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegationResponse: object?.delegation_response ? DelegationResponse.fromAmino(object.delegation_response) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegation_response = message.delegationResponse ? DelegationResponse.toAmino(message.delegationResponse) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationResponse",
            value: QueryDelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
            value: QueryDelegationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnbondingDelegationRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: ""
    };
}
export const QueryUnbondingDelegationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingDelegationRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddr: object.delegator_addr,
            validatorAddr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegatorAddr;
        obj.validator_addr = message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnbondingDelegationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnbondingDelegationRequest",
            value: QueryUnbondingDelegationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnbondingDelegationRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnbondingDelegationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
            value: QueryUnbondingDelegationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnbondingDelegationResponse() {
    return {
        unbond: UnbondingDelegation.fromPartial({})
    };
}
export const QueryUnbondingDelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.unbond !== undefined) {
            UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingDelegationResponse();
        message.unbond = object.unbond !== undefined && object.unbond !== null ? UnbondingDelegation.fromPartial(object.unbond) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            unbond: object?.unbond ? UnbondingDelegation.fromAmino(object.unbond) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.unbond = message.unbond ? UnbondingDelegation.toAmino(message.unbond) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnbondingDelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnbondingDelegationResponse",
            value: QueryUnbondingDelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnbondingDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnbondingDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
            value: QueryUnbondingDelegationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorDelegationsRequest() {
    return {
        delegatorAddr: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDelegatorDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorDelegationsRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddr: object.delegator_addr,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegatorAddr;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorDelegationsRequest",
            value: QueryDelegatorDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
            value: QueryDelegatorDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorDelegationsResponse() {
    return {
        delegationResponses: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDelegatorDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.delegationResponses) {
            DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorDelegationsResponse();
        message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegationResponses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e) => DelegationResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.delegationResponses) {
            obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorDelegationsResponse",
            value: QueryDelegatorDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
            value: QueryDelegatorDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
    return {
        delegatorAddr: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDelegatorUnbondingDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddr: object.delegator_addr,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegatorAddr;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorUnbondingDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
            value: QueryDelegatorUnbondingDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorUnbondingDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorUnbondingDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
            value: QueryDelegatorUnbondingDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
    return {
        unbondingResponses: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDelegatorUnbondingDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.unbondingResponses) {
            UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            unbondingResponses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e) => UnbondingDelegation.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.unbondingResponses) {
            obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorUnbondingDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
            value: QueryDelegatorUnbondingDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorUnbondingDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorUnbondingDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
            value: QueryDelegatorUnbondingDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRedelegationsRequest() {
    return {
        delegatorAddr: "",
        srcValidatorAddr: "",
        dstValidatorAddr: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryRedelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.srcValidatorAddr !== "") {
            writer.uint32(18).string(message.srcValidatorAddr);
        }
        if (message.dstValidatorAddr !== "") {
            writer.uint32(26).string(message.dstValidatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.srcValidatorAddr = reader.string();
                    break;
                case 3:
                    message.dstValidatorAddr = reader.string();
                    break;
                case 4:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryRedelegationsRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.srcValidatorAddr = object.srcValidatorAddr ?? "";
        message.dstValidatorAddr = object.dstValidatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddr: object.delegator_addr,
            srcValidatorAddr: object.src_validator_addr,
            dstValidatorAddr: object.dst_validator_addr,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegatorAddr;
        obj.src_validator_addr = message.srcValidatorAddr;
        obj.dst_validator_addr = message.dstValidatorAddr;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRedelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryRedelegationsRequest",
            value: QueryRedelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryRedelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRedelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
            value: QueryRedelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRedelegationsResponse() {
    return {
        redelegationResponses: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryRedelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.redelegationResponses) {
            RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryRedelegationsResponse();
        message.redelegationResponses = object.redelegationResponses?.map(e => RedelegationResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            redelegationResponses: Array.isArray(object?.redelegation_responses) ? object.redelegation_responses.map((e) => RedelegationResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.redelegationResponses) {
            obj.redelegation_responses = message.redelegationResponses.map(e => e ? RedelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.redelegation_responses = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRedelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryRedelegationsResponse",
            value: QueryRedelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryRedelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRedelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
            value: QueryRedelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsRequest() {
    return {
        delegatorAddr: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDelegatorValidatorsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddr: object.delegator_addr,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegatorAddr;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorValidatorsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
            value: QueryDelegatorValidatorsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
            value: QueryDelegatorValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsResponse() {
    return {
        validators: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDelegatorValidatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorValidatorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
            value: QueryDelegatorValidatorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
            value: QueryDelegatorValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: ""
    };
}
export const QueryDelegatorValidatorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddr: object.delegator_addr,
            validatorAddr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegatorAddr;
        obj.validator_addr = message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorValidatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorRequest",
            value: QueryDelegatorValidatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorValidatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorValidatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
            value: QueryDelegatorValidatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorResponse() {
    return {
        validator: Validator.fromPartial({})
    };
}
export const QueryDelegatorValidatorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorResponse();
        message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validator: object?.validator ? Validator.fromAmino(object.validator) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorResponse",
            value: QueryDelegatorValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
            value: QueryDelegatorValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalInfoRequest() {
    return {
        height: Long.ZERO
    };
}
export const QueryHistoricalInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalInfoRequest();
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            height: Long.fromString(object.height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryHistoricalInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryHistoricalInfoRequest",
            value: QueryHistoricalInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryHistoricalInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryHistoricalInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
            value: QueryHistoricalInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalInfoResponse() {
    return {
        hist: HistoricalInfo.fromPartial({})
    };
}
export const QueryHistoricalInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hist !== undefined) {
            HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hist = HistoricalInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalInfoResponse();
        message.hist = object.hist !== undefined && object.hist !== null ? HistoricalInfo.fromPartial(object.hist) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            hist: object?.hist ? HistoricalInfo.fromAmino(object.hist) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hist = message.hist ? HistoricalInfo.toAmino(message.hist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryHistoricalInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryHistoricalInfoResponse",
            value: QueryHistoricalInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryHistoricalInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryHistoricalInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
            value: QueryHistoricalInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolRequest() {
    return {};
}
export const QueryPoolRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
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
        const message = createBaseQueryPoolRequest();
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
        return QueryPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPoolRequest",
            value: QueryPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
            value: QueryPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: Pool.fromPartial({})
    };
}
export const QueryPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pool: object?.pool ? Pool.fromAmino(object.pool) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPoolResponse",
            value: QueryPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
            value: QueryPoolResponse.encode(message).finish()
        };
    }
};
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map