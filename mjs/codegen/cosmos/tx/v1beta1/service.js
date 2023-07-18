import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** OrderBy defines the sorting order */
export var OrderBy;
(function (OrderBy) {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
    OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy || (OrderBy = {}));
export const OrderBySDKType = OrderBy;
export const OrderByAmino = OrderBy;
export function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
export function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        case OrderBy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
    BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode || (BroadcastMode = {}));
export const BroadcastModeSDKType = BroadcastMode;
export const BroadcastModeAmino = BroadcastMode;
export function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
export function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        case BroadcastMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseGetTxsEventRequest() {
    return {
        events: [],
        pagination: PageRequest.fromPartial({}),
        orderBy: 0
    };
}
export const GetTxsEventRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.events) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderBy !== 0) {
            writer.uint32(24).int32(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(reader.string());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderBy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetTxsEventRequest();
        message.events = object.events?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.orderBy = object.orderBy ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => e) : [],
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
            orderBy: isSet(object.order_by) ? orderByFromJSON(object.order_by) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e);
        }
        else {
            obj.events = [];
        }
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.order_by = message.orderBy;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxsEventRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxsEventRequest",
            value: GetTxsEventRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxsEventRequest.decode(message.value);
    },
    toProto(message) {
        return GetTxsEventRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
            value: GetTxsEventRequest.encode(message).finish()
        };
    }
};
function createBaseGetTxsEventResponse() {
    return {
        txs: [],
        txResponses: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const GetTxsEventResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.txResponses) {
            TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        const message = createBaseGetTxsEventResponse();
        message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
        message.txResponses = object.txResponses?.map(e => TxResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => Tx.fromAmino(e)) : [],
            txResponses: Array.isArray(object?.tx_responses) ? object.tx_responses.map((e) => TxResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? Tx.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        if (message.txResponses) {
            obj.tx_responses = message.txResponses.map(e => e ? TxResponse.toAmino(e) : undefined);
        }
        else {
            obj.tx_responses = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxsEventResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxsEventResponse",
            value: GetTxsEventResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxsEventResponse.decode(message.value);
    },
    toProto(message) {
        return GetTxsEventResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
            value: GetTxsEventResponse.encode(message).finish()
        };
    }
};
function createBaseBroadcastTxRequest() {
    return {
        txBytes: new Uint8Array(),
        mode: 0
    };
}
export const BroadcastTxRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txBytes = reader.bytes();
                    break;
                case 2:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxRequest();
        message.txBytes = object.txBytes ?? new Uint8Array();
        message.mode = object.mode ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            txBytes: object.tx_bytes,
            mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx_bytes = message.txBytes;
        obj.mode = message.mode;
        return obj;
    },
    fromAminoMsg(object) {
        return BroadcastTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BroadcastTxRequest",
            value: BroadcastTxRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BroadcastTxRequest.decode(message.value);
    },
    toProto(message) {
        return BroadcastTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
            value: BroadcastTxRequest.encode(message).finish()
        };
    }
};
function createBaseBroadcastTxResponse() {
    return {
        txResponse: TxResponse.fromPartial({})
    };
}
export const BroadcastTxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txResponse !== undefined) {
            TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txResponse = TxResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxResponse();
        message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            txResponse: object?.tx_response ? TxResponse.fromAmino(object.tx_response) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BroadcastTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BroadcastTxResponse",
            value: BroadcastTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BroadcastTxResponse.decode(message.value);
    },
    toProto(message) {
        return BroadcastTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
            value: BroadcastTxResponse.encode(message).finish()
        };
    }
};
function createBaseSimulateRequest() {
    return {
        tx: Tx.fromPartial({}),
        txBytes: new Uint8Array()
    };
}
export const SimulateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txBytes.length !== 0) {
            writer.uint32(18).bytes(message.txBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.txBytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSimulateRequest();
        message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
        message.txBytes = object.txBytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            tx: object?.tx ? Tx.fromAmino(object.tx) : undefined,
            txBytes: object.tx_bytes
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
        obj.tx_bytes = message.txBytes;
        return obj;
    },
    fromAminoMsg(object) {
        return SimulateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulateRequest",
            value: SimulateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SimulateRequest.decode(message.value);
    },
    toProto(message) {
        return SimulateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
            value: SimulateRequest.encode(message).finish()
        };
    }
};
function createBaseSimulateResponse() {
    return {
        gasInfo: GasInfo.fromPartial({}),
        result: Result.fromPartial({})
    };
}
export const SimulateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gasInfo !== undefined) {
            GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasInfo = GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSimulateResponse();
        message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
        message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            gasInfo: object?.gas_info ? GasInfo.fromAmino(object.gas_info) : undefined,
            result: object?.result ? Result.fromAmino(object.result) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gas_info = message.gasInfo ? GasInfo.toAmino(message.gasInfo) : undefined;
        obj.result = message.result ? Result.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SimulateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulateResponse",
            value: SimulateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SimulateResponse.decode(message.value);
    },
    toProto(message) {
        return SimulateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
            value: SimulateResponse.encode(message).finish()
        };
    }
};
function createBaseGetTxRequest() {
    return {
        hash: ""
    };
}
export const GetTxRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetTxRequest();
        message.hash = object.hash ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxRequest",
            value: GetTxRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxRequest.decode(message.value);
    },
    toProto(message) {
        return GetTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
            value: GetTxRequest.encode(message).finish()
        };
    }
};
function createBaseGetTxResponse() {
    return {
        tx: Tx.fromPartial({}),
        txResponse: TxResponse.fromPartial({})
    };
}
export const GetTxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txResponse !== undefined) {
            TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.txResponse = TxResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetTxResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
        message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            tx: object?.tx ? Tx.fromAmino(object.tx) : undefined,
            txResponse: object?.tx_response ? TxResponse.fromAmino(object.tx_response) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
        obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxResponse",
            value: GetTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxResponse.decode(message.value);
    },
    toProto(message) {
        return GetTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
            value: GetTxResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=service.js.map