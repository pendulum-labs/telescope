import { Header } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { toBase64, fromBase64 } from "@cosmjs/encoding";
import { encodeBech32Pubkey, decodeBech32Pubkey } from "@cosmjs/amino";
/** BondStatus is the status of a validator. */
export var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (BondStatus = {}));
export const BondStatusSDKType = BondStatus;
export const BondStatusAmino = BondStatus;
export function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
export function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        case BondStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseHistoricalInfo() {
    return {
        header: Header.fromPartial({}),
        valset: []
    };
}
export const HistoricalInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(Validator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHistoricalInfo();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.valset = object.valset?.map(e => Validator.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            header: object?.header ? Header.fromAmino(object.header) : undefined,
            valset: Array.isArray(object?.valset) ? object.valset.map((e) => Validator.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return HistoricalInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HistoricalInfo",
            value: HistoricalInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return HistoricalInfo.decode(message.value);
    },
    toProto(message) {
        return HistoricalInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
            value: HistoricalInfo.encode(message).finish()
        };
    }
};
function createBaseCommissionRates() {
    return {
        rate: "",
        maxRate: "",
        maxChangeRate: ""
    };
}
export const CommissionRates = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(message.rate);
        }
        if (message.maxRate !== "") {
            writer.uint32(18).string(message.maxRate);
        }
        if (message.maxChangeRate !== "") {
            writer.uint32(26).string(message.maxChangeRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommissionRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = reader.string();
                    break;
                case 2:
                    message.maxRate = reader.string();
                    break;
                case 3:
                    message.maxChangeRate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommissionRates();
        message.rate = object.rate ?? "";
        message.maxRate = object.maxRate ?? "";
        message.maxChangeRate = object.maxChangeRate ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            rate: object.rate,
            maxRate: object.max_rate,
            maxChangeRate: object.max_change_rate
        };
    },
    toAmino(message) {
        const obj = {};
        obj.rate = message.rate;
        obj.max_rate = message.maxRate;
        obj.max_change_rate = message.maxChangeRate;
        return obj;
    },
    fromAminoMsg(object) {
        return CommissionRates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommissionRates",
            value: CommissionRates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommissionRates.decode(message.value);
    },
    toProto(message) {
        return CommissionRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
            value: CommissionRates.encode(message).finish()
        };
    }
};
function createBaseCommission() {
    return {
        commissionRates: CommissionRates.fromPartial({}),
        updateTime: new Date()
    };
}
export const Commission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.commissionRates !== undefined) {
            CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateTime !== undefined) {
            Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commissionRates = CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? CommissionRates.fromPartial(object.commissionRates) : undefined;
        message.updateTime = object.updateTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            commissionRates: object?.commission_rates ? CommissionRates.fromAmino(object.commission_rates) : undefined,
            updateTime: object.update_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.commission_rates = message.commissionRates ? CommissionRates.toAmino(message.commissionRates) : undefined;
        obj.update_time = message.updateTime;
        return obj;
    },
    fromAminoMsg(object) {
        return Commission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Commission",
            value: Commission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Commission.decode(message.value);
    },
    toProto(message) {
        return Commission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Commission",
            value: Commission.encode(message).finish()
        };
    }
};
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        securityContact: "",
        details: ""
    };
}
export const Description = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDescription();
        message.moniker = object.moniker ?? "";
        message.identity = object.identity ?? "";
        message.website = object.website ?? "";
        message.securityContact = object.securityContact ?? "";
        message.details = object.details ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            moniker: object.moniker,
            identity: object.identity,
            website: object.website,
            securityContact: object.security_contact,
            details: object.details
        };
    },
    toAmino(message) {
        const obj = {};
        obj.moniker = message.moniker;
        obj.identity = message.identity;
        obj.website = message.website;
        obj.security_contact = message.securityContact;
        obj.details = message.details;
        return obj;
    },
    fromAminoMsg(object) {
        return Description.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Description",
            value: Description.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Description.decode(message.value);
    },
    toProto(message) {
        return Description.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Description",
            value: Description.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        operatorAddress: "",
        consensusPubkey: Any.fromPartial({}),
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: Description.fromPartial({}),
        unbondingHeight: Long.ZERO,
        unbondingTime: new Date(),
        commission: Commission.fromPartial({}),
        minSelfDelegation: ""
    };
}
export const Validator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(50).string(message.delegatorShares);
        }
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (!message.unbondingHeight.isZero()) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.consensusPubkey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegatorShares = reader.string();
                    break;
                case 7:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbondingHeight = reader.int64();
                    break;
                case 9:
                    message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.minSelfDelegation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operatorAddress = object.operatorAddress ?? "";
        message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegatorShares = object.delegatorShares ?? "";
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? Long.fromValue(object.unbondingHeight) : Long.ZERO;
        message.unbondingTime = object.unbondingTime ?? undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            operatorAddress: object.operator_address,
            consensusPubkey: encodeBech32Pubkey({
                type: "tendermint/PubKeySecp256k1",
                value: toBase64(object.consensus_pubkey.value)
            }, "cosmos"),
            jailed: object.jailed,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: object.tokens,
            delegatorShares: object.delegator_shares,
            description: object?.description ? Description.fromAmino(object.description) : undefined,
            unbondingHeight: Long.fromString(object.unbonding_height),
            unbondingTime: object.unbonding_time,
            commission: object?.commission ? Commission.fromAmino(object.commission) : undefined,
            minSelfDelegation: object.min_self_delegation
        };
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operatorAddress;
        obj.consensus_pubkey = message.consensusPubkey ? {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: fromBase64(decodeBech32Pubkey(message.consensusPubkey).value)
        } : undefined;
        obj.jailed = message.jailed;
        obj.status = message.status;
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegatorShares;
        obj.description = message.description ? Description.toAmino(message.description) : undefined;
        obj.unbonding_height = message.unbondingHeight ? message.unbondingHeight.toString() : undefined;
        obj.unbonding_time = message.unbondingTime;
        obj.commission = message.commission ? Commission.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.minSelfDelegation;
        return obj;
    },
    fromAminoMsg(object) {
        return Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
function createBaseValAddresses() {
    return {
        addresses: []
    };
}
export const ValAddresses = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValAddresses.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValAddresses",
            value: ValAddresses.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValAddresses.decode(message.value);
    },
    toProto(message) {
        return ValAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
            value: ValAddresses.encode(message).finish()
        };
    }
};
function createBaseDVPair() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
export const DVPair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVPair();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            validatorAddress: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return DVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPair",
            value: DVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVPair.decode(message.value);
    },
    toProto(message) {
        return DVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPair",
            value: DVPair.encode(message).finish()
        };
    }
};
function createBaseDVPairs() {
    return {
        pairs: []
    };
}
export const DVPairs = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairs) {
            DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(DVPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => DVPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => DVPair.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? DVPair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DVPairs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPairs",
            value: DVPairs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVPairs.decode(message.value);
    },
    toProto(message) {
        return DVPairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPairs",
            value: DVPairs.encode(message).finish()
        };
    }
};
function createBaseDVVTriplet() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: ""
    };
}
export const DVVTriplet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplet();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            validatorSrcAddress: object.validator_src_address,
            validatorDstAddress: object.validator_dst_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return DVVTriplet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplet",
            value: DVVTriplet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVVTriplet.decode(message.value);
    },
    toProto(message) {
        return DVVTriplet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
            value: DVVTriplet.encode(message).finish()
        };
    }
};
function createBaseDVVTriplets() {
    return {
        triplets: []
    };
}
export const DVVTriplets = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.triplets) {
            DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => DVVTriplet.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            triplets: Array.isArray(object?.triplets) ? object.triplets.map((e) => DVVTriplet.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? DVVTriplet.toAmino(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DVVTriplets.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplets",
            value: DVVTriplets.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVVTriplets.decode(message.value);
    },
    toProto(message) {
        return DVVTriplets.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
            value: DVVTriplets.encode(message).finish()
        };
    }
};
function createBaseDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        shares: ""
    };
}
export const Delegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(message.shares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.shares = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.shares = object.shares ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            validatorAddress: object.validator_address,
            shares: object.shares
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.shares = message.shares;
        return obj;
    },
    fromAminoMsg(object) {
        return Delegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Delegation",
            value: Delegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Delegation.decode(message.value);
    },
    toProto(message) {
        return Delegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Delegation",
            value: Delegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        entries: []
    };
}
export const UnbondingDelegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        for (const v of message.entries) {
            UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            validatorAddress: object.validator_address,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => UnbondingDelegationEntry.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UnbondingDelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegation",
            value: UnbondingDelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UnbondingDelegation.decode(message.value);
    },
    toProto(message) {
        return UnbondingDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
            value: UnbondingDelegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegationEntry() {
    return {
        creationHeight: Long.ZERO,
        completionTime: new Date(),
        initialBalance: "",
        balance: ""
    };
}
export const UnbondingDelegationEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.creationHeight.isZero()) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? Long.fromValue(object.creationHeight) : Long.ZERO;
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creationHeight: Long.fromString(object.creation_height),
            completionTime: object.completion_time,
            initialBalance: object.initial_balance,
            balance: object.balance
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
        obj.completion_time = message.completionTime;
        obj.initial_balance = message.initialBalance;
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return UnbondingDelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegationEntry",
            value: UnbondingDelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UnbondingDelegationEntry.decode(message.value);
    },
    toProto(message) {
        return UnbondingDelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
            value: UnbondingDelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntry() {
    return {
        creationHeight: Long.ZERO,
        completionTime: new Date(),
        initialBalance: "",
        sharesDst: ""
    };
}
export const RedelegationEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.creationHeight.isZero()) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== "") {
            writer.uint32(34).string(message.sharesDst);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.sharesDst = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? Long.fromValue(object.creationHeight) : Long.ZERO;
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.sharesDst = object.sharesDst ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creationHeight: Long.fromString(object.creation_height),
            completionTime: object.completion_time,
            initialBalance: object.initial_balance,
            sharesDst: object.shares_dst
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
        obj.completion_time = message.completionTime;
        obj.initial_balance = message.initialBalance;
        obj.shares_dst = message.sharesDst;
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntry",
            value: RedelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RedelegationEntry.decode(message.value);
    },
    toProto(message) {
        return RedelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
            value: RedelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegation() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        entries: []
    };
}
export const Redelegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        for (const v of message.entries) {
            RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        message.entries = object.entries?.map(e => RedelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            validatorSrcAddress: object.validator_src_address,
            validatorDstAddress: object.validator_dst_address,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => RedelegationEntry.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? RedelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Redelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Redelegation",
            value: Redelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Redelegation.decode(message.value);
    },
    toProto(message) {
        return Redelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Redelegation",
            value: Redelegation.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        unbondingTime: Duration.fromPartial({}),
        maxValidators: 0,
        maxEntries: 0,
        historicalEntries: 0,
        bondDenom: "",
        minGlobalSelfDelegation: ""
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.unbondingTime !== undefined) {
            Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxValidators !== 0) {
            writer.uint32(16).uint32(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(24).uint32(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(32).uint32(message.historicalEntries);
        }
        if (message.bondDenom !== "") {
            writer.uint32(42).string(message.bondDenom);
        }
        if (message.minGlobalSelfDelegation !== "") {
            writer.uint32(82).string(message.minGlobalSelfDelegation);
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
                    message.unbondingTime = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxValidators = reader.uint32();
                    break;
                case 3:
                    message.maxEntries = reader.uint32();
                    break;
                case 4:
                    message.historicalEntries = reader.uint32();
                    break;
                case 5:
                    message.bondDenom = reader.string();
                    break;
                case 10:
                    message.minGlobalSelfDelegation = reader.string();
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
        message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Duration.fromPartial(object.unbondingTime) : undefined;
        message.maxValidators = object.maxValidators ?? 0;
        message.maxEntries = object.maxEntries ?? 0;
        message.historicalEntries = object.historicalEntries ?? 0;
        message.bondDenom = object.bondDenom ?? "";
        message.minGlobalSelfDelegation = object.minGlobalSelfDelegation ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            unbondingTime: object?.unbonding_time ? Duration.fromAmino(object.unbonding_time) : undefined,
            maxValidators: object.max_validators,
            maxEntries: object.max_entries,
            historicalEntries: object.historical_entries,
            bondDenom: object.bond_denom,
            minGlobalSelfDelegation: object.min_global_self_delegation
        };
    },
    toAmino(message) {
        const obj = {};
        obj.unbonding_time = message.unbondingTime ? Duration.toAmino(message.unbondingTime) : undefined;
        obj.max_validators = message.maxValidators;
        obj.max_entries = message.maxEntries;
        obj.historical_entries = message.historicalEntries;
        obj.bond_denom = message.bondDenom;
        obj.min_global_self_delegation = message.minGlobalSelfDelegation;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseDelegationResponse() {
    return {
        delegation: Delegation.fromPartial({}),
        balance: Coin.fromPartial({})
    };
}
export const DelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation !== undefined) {
            Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegation: object?.delegation ? Delegation.fromAmino(object.delegation) : undefined,
            balance: object?.balance ? Coin.fromAmino(object.balance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegation = message.delegation ? Delegation.toAmino(message.delegation) : undefined;
        obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationResponse",
            value: DelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegationResponse.decode(message.value);
    },
    toProto(message) {
        return DelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
            value: DelegationResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntryResponse() {
    return {
        redelegationEntry: RedelegationEntry.fromPartial({}),
        balance: ""
    };
}
export const RedelegationEntryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.redelegationEntry !== undefined) {
            RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntryResponse();
        message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            redelegationEntry: object?.redelegation_entry ? RedelegationEntry.fromAmino(object.redelegation_entry) : undefined,
            balance: object.balance
        };
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation_entry = message.redelegationEntry ? RedelegationEntry.toAmino(message.redelegationEntry) : undefined;
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationEntryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntryResponse",
            value: RedelegationEntryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RedelegationEntryResponse.decode(message.value);
    },
    toProto(message) {
        return RedelegationEntryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
            value: RedelegationEntryResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationResponse() {
    return {
        redelegation: Redelegation.fromPartial({}),
        entries: []
    };
}
export const RedelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.redelegation !== undefined) {
            Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegationResponse();
        message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
        message.entries = object.entries?.map(e => RedelegationEntryResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            redelegation: object?.redelegation ? Redelegation.fromAmino(object.redelegation) : undefined,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => RedelegationEntryResponse.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation = message.redelegation ? Redelegation.toAmino(message.redelegation) : undefined;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationResponse",
            value: RedelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RedelegationResponse.decode(message.value);
    },
    toProto(message) {
        return RedelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
            value: RedelegationResponse.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        notBondedTokens: "",
        bondedTokens: ""
    };
}
export const Pool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.notBondedTokens !== "") {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== "") {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notBondedTokens = reader.string();
                    break;
                case 2:
                    message.bondedTokens = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.notBondedTokens = object.notBondedTokens ?? "";
        message.bondedTokens = object.bondedTokens ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            notBondedTokens: object.not_bonded_tokens,
            bondedTokens: object.bonded_tokens
        };
    },
    toAmino(message) {
        const obj = {};
        obj.not_bonded_tokens = message.notBondedTokens;
        obj.bonded_tokens = message.bondedTokens;
        return obj;
    },
    fromAminoMsg(object) {
        return Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pool",
            value: Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Pool.decode(message.value);
    },
    toProto(message) {
        return Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Pool",
            value: Pool.encode(message).finish()
        };
    }
};
//# sourceMappingURL=staking.js.map