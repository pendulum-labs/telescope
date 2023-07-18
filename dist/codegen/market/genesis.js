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
const params_1 = require("./params");
const pool_1 = require("./pool");
const drop_1 = require("./drop");
const member_1 = require("./member");
const burnings_1 = require("./burnings");
const order_1 = require("./order");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        poolList: [],
        dropList: [],
        memberList: [],
        burningsList: [],
        orderList: []
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.poolList) {
            pool_1.Pool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dropList) {
            drop_1.Drop.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.memberList) {
            member_1.Member.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.burningsList) {
            burnings_1.Burnings.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.orderList) {
            order_1.Order.encode(v, writer.uint32(50).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolList.push(pool_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.dropList.push(drop_1.Drop.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.memberList.push(member_1.Member.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.burningsList.push(burnings_1.Burnings.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.orderList.push(order_1.Order.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.poolList = object.poolList?.map(e => pool_1.Pool.fromPartial(e)) || [];
        message.dropList = object.dropList?.map(e => drop_1.Drop.fromPartial(e)) || [];
        message.memberList = object.memberList?.map(e => member_1.Member.fromPartial(e)) || [];
        message.burningsList = object.burningsList?.map(e => burnings_1.Burnings.fromPartial(e)) || [];
        message.orderList = object.orderList?.map(e => order_1.Order.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined,
            poolList: Array.isArray(object?.poolList) ? object.poolList.map((e) => pool_1.Pool.fromAmino(e)) : [],
            dropList: Array.isArray(object?.dropList) ? object.dropList.map((e) => drop_1.Drop.fromAmino(e)) : [],
            memberList: Array.isArray(object?.memberList) ? object.memberList.map((e) => member_1.Member.fromAmino(e)) : [],
            burningsList: Array.isArray(object?.burningsList) ? object.burningsList.map((e) => burnings_1.Burnings.fromAmino(e)) : [],
            orderList: Array.isArray(object?.orderList) ? object.orderList.map((e) => order_1.Order.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.poolList) {
            obj.poolList = message.poolList.map(e => e ? pool_1.Pool.toAmino(e) : undefined);
        }
        else {
            obj.poolList = [];
        }
        if (message.dropList) {
            obj.dropList = message.dropList.map(e => e ? drop_1.Drop.toAmino(e) : undefined);
        }
        else {
            obj.dropList = [];
        }
        if (message.memberList) {
            obj.memberList = message.memberList.map(e => e ? member_1.Member.toAmino(e) : undefined);
        }
        else {
            obj.memberList = [];
        }
        if (message.burningsList) {
            obj.burningsList = message.burningsList.map(e => e ? burnings_1.Burnings.toAmino(e) : undefined);
        }
        else {
            obj.burningsList = [];
        }
        if (message.orderList) {
            obj.orderList = message.orderList.map(e => e ? order_1.Order.toAmino(e) : undefined);
        }
        else {
            obj.orderList = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map