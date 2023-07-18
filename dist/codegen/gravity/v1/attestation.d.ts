/// <reference types="long" />
import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum ClaimType {
    CLAIM_TYPE_UNSPECIFIED = 0,
    CLAIM_TYPE_SEND_TO_COSMOS = 1,
    CLAIM_TYPE_BATCH_SEND_TO_ETH = 2,
    CLAIM_TYPE_ERC20_DEPLOYED = 3,
    CLAIM_TYPE_LOGIC_CALL_EXECUTED = 4,
    CLAIM_TYPE_VALSET_UPDATED = 5,
    UNRECOGNIZED = -1
}
export declare const ClaimTypeSDKType: typeof ClaimType;
export declare const ClaimTypeAmino: typeof ClaimType;
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 *
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface Attestation {
    observed: boolean;
    votes: string[];
    height: Long;
    claim: Any;
}
export interface AttestationProtoMsg {
    typeUrl: "/gravity.v1.Attestation";
    value: Uint8Array;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 *
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface AttestationAmino {
    observed: boolean;
    votes: string[];
    height: string;
    claim?: AnyAmino;
}
export interface AttestationAminoMsg {
    type: "/gravity.v1.Attestation";
    value: AttestationAmino;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 *
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface AttestationSDKType {
    observed: boolean;
    votes: string[];
    height: Long;
    claim: AnySDKType;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20Token {
    contract: string;
    amount: string;
}
export interface ERC20TokenProtoMsg {
    typeUrl: "/gravity.v1.ERC20Token";
    value: Uint8Array;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20TokenAmino {
    contract: string;
    amount: string;
}
export interface ERC20TokenAminoMsg {
    type: "/gravity.v1.ERC20Token";
    value: ERC20TokenAmino;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20TokenSDKType {
    contract: string;
    amount: string;
}
export declare const Attestation: {
    encode(message: Attestation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attestation;
    fromPartial(object: DeepPartial<Attestation>): Attestation;
    fromAmino(object: AttestationAmino): Attestation;
    toAmino(message: Attestation): AttestationAmino;
    fromAminoMsg(object: AttestationAminoMsg): Attestation;
    fromProtoMsg(message: AttestationProtoMsg): Attestation;
    toProto(message: Attestation): Uint8Array;
    toProtoMsg(message: Attestation): AttestationProtoMsg;
};
export declare const ERC20Token: {
    encode(message: ERC20Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Token;
    fromPartial(object: DeepPartial<ERC20Token>): ERC20Token;
    fromAmino(object: ERC20TokenAmino): ERC20Token;
    toAmino(message: ERC20Token): ERC20TokenAmino;
    fromAminoMsg(object: ERC20TokenAminoMsg): ERC20Token;
    fromProtoMsg(message: ERC20TokenProtoMsg): ERC20Token;
    toProto(message: ERC20Token): Uint8Array;
    toProtoMsg(message: ERC20Token): ERC20TokenProtoMsg;
};
