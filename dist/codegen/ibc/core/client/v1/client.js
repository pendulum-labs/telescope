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
exports.Params = exports.Height = exports.UpgradeProposal = exports.ClientUpdateProposal = exports.ClientConsensusStates = exports.ConsensusStateWithHeight = exports.IdentifiedClientState = void 0;
const any_1 = require("../../../../google/protobuf/any");
const upgrade_1 = require("../../../../cosmos/upgrade/v1beta1/upgrade");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseIdentifiedClientState() {
    return {
        clientId: "",
        clientState: any_1.Any.fromPartial({})
    };
}
exports.IdentifiedClientState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedClientState();
        message.clientId = object.clientId ?? "";
        message.clientState = object.clientState !== undefined && object.clientState !== null ? any_1.Any.fromPartial(object.clientState) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            clientId: object.client_id,
            clientState: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.client_state = message.clientState ? any_1.Any.toAmino(message.clientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IdentifiedClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedClientState",
            value: exports.IdentifiedClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IdentifiedClientState.decode(message.value);
    },
    toProto(message) {
        return exports.IdentifiedClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
            value: exports.IdentifiedClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusStateWithHeight() {
    return {
        height: exports.Height.fromPartial({}),
        consensusState: any_1.Any.fromPartial({})
    };
}
exports.ConsensusStateWithHeight = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== undefined) {
            exports.Height.encode(message.height, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateWithHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = exports.Height.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateWithHeight();
        message.height = object.height !== undefined && object.height !== null ? exports.Height.fromPartial(object.height) : undefined;
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? any_1.Any.fromPartial(object.consensusState) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: object?.height ? exports.Height.fromAmino(object.height) : undefined,
            consensusState: object?.consensus_state ? any_1.Any.fromAmino(object.consensus_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? exports.Height.toAmino(message.height) : undefined;
        obj.consensus_state = message.consensusState ? any_1.Any.toAmino(message.consensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusStateWithHeight.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateWithHeight",
            value: exports.ConsensusStateWithHeight.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConsensusStateWithHeight.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusStateWithHeight.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
            value: exports.ConsensusStateWithHeight.encode(message).finish()
        };
    }
};
function createBaseClientConsensusStates() {
    return {
        clientId: "",
        consensusStates: []
    };
}
exports.ClientConsensusStates = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.consensusStates) {
            exports.ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientConsensusStates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.consensusStates.push(exports.ConsensusStateWithHeight.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClientConsensusStates();
        message.clientId = object.clientId ?? "";
        message.consensusStates = object.consensusStates?.map(e => exports.ConsensusStateWithHeight.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            clientId: object.client_id,
            consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => exports.ConsensusStateWithHeight.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        if (message.consensusStates) {
            obj.consensus_states = message.consensusStates.map(e => e ? exports.ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientConsensusStates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientConsensusStates",
            value: exports.ClientConsensusStates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientConsensusStates.decode(message.value);
    },
    toProto(message) {
        return exports.ClientConsensusStates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
            value: exports.ClientConsensusStates.encode(message).finish()
        };
    }
};
function createBaseClientUpdateProposal() {
    return {
        title: "",
        description: "",
        subjectClientId: "",
        substituteClientId: ""
    };
}
exports.ClientUpdateProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.subjectClientId !== "") {
            writer.uint32(26).string(message.subjectClientId);
        }
        if (message.substituteClientId !== "") {
            writer.uint32(34).string(message.substituteClientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.subjectClientId = reader.string();
                    break;
                case 4:
                    message.substituteClientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClientUpdateProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.subjectClientId = object.subjectClientId ?? "";
        message.substituteClientId = object.substituteClientId ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            subjectClientId: object.subject_client_id,
            substituteClientId: object.substitute_client_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.subject_client_id = message.subjectClientId;
        obj.substitute_client_id = message.substituteClientId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientUpdateProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientUpdateProposal",
            value: exports.ClientUpdateProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ClientUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
            value: exports.ClientUpdateProposal.encode(message).finish()
        };
    }
};
function createBaseUpgradeProposal() {
    return {
        title: "",
        description: "",
        plan: upgrade_1.Plan.fromPartial({}),
        upgradedClientState: any_1.Any.fromPartial({})
    };
}
exports.UpgradeProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        if (message.upgradedClientState !== undefined) {
            any_1.Any.encode(message.upgradedClientState, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpgradeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.upgradedClientState = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? any_1.Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            plan: object?.plan ? upgrade_1.Plan.fromAmino(object.plan) : undefined,
            upgradedClientState: object?.upgraded_client_state ? any_1.Any.fromAmino(object.upgraded_client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.plan = message.plan ? upgrade_1.Plan.toAmino(message.plan) : undefined;
        obj.upgraded_client_state = message.upgradedClientState ? any_1.Any.toAmino(message.upgradedClientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UpgradeProposal",
            value: exports.UpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.UpgradeProposal",
            value: exports.UpgradeProposal.encode(message).finish()
        };
    }
};
function createBaseHeight() {
    return {
        revisionNumber: helpers_1.Long.UZERO,
        revisionHeight: helpers_1.Long.UZERO
    };
}
exports.Height = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.revisionNumber.isZero()) {
            writer.uint32(8).uint64(message.revisionNumber);
        }
        if (!message.revisionHeight.isZero()) {
            writer.uint32(16).uint64(message.revisionHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revisionNumber = reader.uint64();
                    break;
                case 2:
                    message.revisionHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHeight();
        message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? helpers_1.Long.fromValue(object.revisionNumber) : helpers_1.Long.UZERO;
        message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? helpers_1.Long.fromValue(object.revisionHeight) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            revisionNumber: helpers_1.Long.fromString(object.revision_number || "0", true),
            revisionHeight: helpers_1.Long.fromString(object.revision_height || "0", true)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
        obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Height.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Height",
            value: exports.Height.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Height.decode(message.value);
    },
    toProto(message) {
        return exports.Height.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.Height",
            value: exports.Height.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        allowedClients: []
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.allowedClients) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowedClients.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.allowedClients = object.allowedClients?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            allowedClients: Array.isArray(object?.allowed_clients) ? object.allowed_clients.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.allowedClients) {
            obj.allowed_clients = message.allowedClients.map(e => e);
        }
        else {
            obj.allowed_clients = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=client.js.map