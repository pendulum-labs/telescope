import { Params } from "./params";
import { Pool } from "./pool";
import { Drop } from "./drop";
import { Member } from "./member";
import { Burnings } from "./burnings";
import { Order } from "./order";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        poolList: [],
        dropList: [],
        memberList: [],
        burningsList: [],
        orderList: []
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.poolList) {
            Pool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dropList) {
            Drop.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.memberList) {
            Member.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.burningsList) {
            Burnings.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.orderList) {
            Order.encode(v, writer.uint32(50).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolList.push(Pool.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.dropList.push(Drop.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.memberList.push(Member.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.burningsList.push(Burnings.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.orderList.push(Order.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
        message.dropList = object.dropList?.map(e => Drop.fromPartial(e)) || [];
        message.memberList = object.memberList?.map(e => Member.fromPartial(e)) || [];
        message.burningsList = object.burningsList?.map(e => Burnings.fromPartial(e)) || [];
        message.orderList = object.orderList?.map(e => Order.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            poolList: Array.isArray(object?.poolList) ? object.poolList.map((e) => Pool.fromAmino(e)) : [],
            dropList: Array.isArray(object?.dropList) ? object.dropList.map((e) => Drop.fromAmino(e)) : [],
            memberList: Array.isArray(object?.memberList) ? object.memberList.map((e) => Member.fromAmino(e)) : [],
            burningsList: Array.isArray(object?.burningsList) ? object.burningsList.map((e) => Burnings.fromAmino(e)) : [],
            orderList: Array.isArray(object?.orderList) ? object.orderList.map((e) => Order.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.poolList) {
            obj.poolList = message.poolList.map(e => e ? Pool.toAmino(e) : undefined);
        }
        else {
            obj.poolList = [];
        }
        if (message.dropList) {
            obj.dropList = message.dropList.map(e => e ? Drop.toAmino(e) : undefined);
        }
        else {
            obj.dropList = [];
        }
        if (message.memberList) {
            obj.memberList = message.memberList.map(e => e ? Member.toAmino(e) : undefined);
        }
        else {
            obj.memberList = [];
        }
        if (message.burningsList) {
            obj.burningsList = message.burningsList.map(e => e ? Burnings.toAmino(e) : undefined);
        }
        else {
            obj.burningsList = [];
        }
        if (message.orderList) {
            obj.orderList = message.orderList.map(e => e ? Order.toAmino(e) : undefined);
        }
        else {
            obj.orderList = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map