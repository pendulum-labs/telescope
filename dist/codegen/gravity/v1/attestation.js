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
exports.ERC20Token = exports.Attestation = exports.claimTypeToJSON = exports.claimTypeFromJSON = exports.ClaimTypeAmino = exports.ClaimTypeSDKType = exports.ClaimType = void 0;
const any_1 = require("../../google/protobuf/any");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
var ClaimType;
(function (ClaimType) {
    ClaimType[ClaimType["CLAIM_TYPE_UNSPECIFIED"] = 0] = "CLAIM_TYPE_UNSPECIFIED";
    ClaimType[ClaimType["CLAIM_TYPE_SEND_TO_COSMOS"] = 1] = "CLAIM_TYPE_SEND_TO_COSMOS";
    ClaimType[ClaimType["CLAIM_TYPE_BATCH_SEND_TO_ETH"] = 2] = "CLAIM_TYPE_BATCH_SEND_TO_ETH";
    ClaimType[ClaimType["CLAIM_TYPE_ERC20_DEPLOYED"] = 3] = "CLAIM_TYPE_ERC20_DEPLOYED";
    ClaimType[ClaimType["CLAIM_TYPE_LOGIC_CALL_EXECUTED"] = 4] = "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
    ClaimType[ClaimType["CLAIM_TYPE_VALSET_UPDATED"] = 5] = "CLAIM_TYPE_VALSET_UPDATED";
    ClaimType[ClaimType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimType || (exports.ClaimType = ClaimType = {}));
exports.ClaimTypeSDKType = ClaimType;
exports.ClaimTypeAmino = ClaimType;
function claimTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CLAIM_TYPE_UNSPECIFIED":
            return ClaimType.CLAIM_TYPE_UNSPECIFIED;
        case 1:
        case "CLAIM_TYPE_SEND_TO_COSMOS":
            return ClaimType.CLAIM_TYPE_SEND_TO_COSMOS;
        case 2:
        case "CLAIM_TYPE_BATCH_SEND_TO_ETH":
            return ClaimType.CLAIM_TYPE_BATCH_SEND_TO_ETH;
        case 3:
        case "CLAIM_TYPE_ERC20_DEPLOYED":
            return ClaimType.CLAIM_TYPE_ERC20_DEPLOYED;
        case 4:
        case "CLAIM_TYPE_LOGIC_CALL_EXECUTED":
            return ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED;
        case 5:
        case "CLAIM_TYPE_VALSET_UPDATED":
            return ClaimType.CLAIM_TYPE_VALSET_UPDATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClaimType.UNRECOGNIZED;
    }
}
exports.claimTypeFromJSON = claimTypeFromJSON;
function claimTypeToJSON(object) {
    switch (object) {
        case ClaimType.CLAIM_TYPE_UNSPECIFIED:
            return "CLAIM_TYPE_UNSPECIFIED";
        case ClaimType.CLAIM_TYPE_SEND_TO_COSMOS:
            return "CLAIM_TYPE_SEND_TO_COSMOS";
        case ClaimType.CLAIM_TYPE_BATCH_SEND_TO_ETH:
            return "CLAIM_TYPE_BATCH_SEND_TO_ETH";
        case ClaimType.CLAIM_TYPE_ERC20_DEPLOYED:
            return "CLAIM_TYPE_ERC20_DEPLOYED";
        case ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED:
            return "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
        case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
            return "CLAIM_TYPE_VALSET_UPDATED";
        case ClaimType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.claimTypeToJSON = claimTypeToJSON;
function createBaseAttestation() {
    return {
        observed: false,
        votes: [],
        height: helpers_1.Long.UZERO,
        claim: any_1.Any.fromPartial({})
    };
}
exports.Attestation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.observed === true) {
            writer.uint32(8).bool(message.observed);
        }
        for (const v of message.votes) {
            writer.uint32(18).string(v);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.claim !== undefined) {
            any_1.Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttestation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.observed = reader.bool();
                    break;
                case 2:
                    message.votes.push(reader.string());
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                case 4:
                    message.claim = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAttestation();
        message.observed = object.observed ?? false;
        message.votes = object.votes?.map(e => e) || [];
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        message.claim = object.claim !== undefined && object.claim !== null ? any_1.Any.fromPartial(object.claim) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            observed: object.observed,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => e) : [],
            height: helpers_1.Long.fromString(object.height),
            claim: object?.claim ? any_1.Any.fromAmino(object.claim) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.observed = message.observed;
        if (message.votes) {
            obj.votes = message.votes.map(e => e);
        }
        else {
            obj.votes = [];
        }
        obj.height = message.height ? message.height.toString() : undefined;
        obj.claim = message.claim ? any_1.Any.toAmino(message.claim) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Attestation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Attestation.decode(message.value);
    },
    toProto(message) {
        return exports.Attestation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.Attestation",
            value: exports.Attestation.encode(message).finish()
        };
    }
};
function createBaseERC20Token() {
    return {
        contract: "",
        amount: ""
    };
}
exports.ERC20Token = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20Token();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseERC20Token();
        message.contract = object.contract ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            contract: object.contract,
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.contract = message.contract;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ERC20Token.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ERC20Token.decode(message.value);
    },
    toProto(message) {
        return exports.ERC20Token.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.ERC20Token",
            value: exports.ERC20Token.encode(message).finish()
        };
    }
};
//# sourceMappingURL=attestation.js.map