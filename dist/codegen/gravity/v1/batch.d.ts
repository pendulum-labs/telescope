/// <reference types="long" />
import { ERC20Token, ERC20TokenAmino, ERC20TokenSDKType } from "./attestation";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatch {
    batchNonce: Long;
    batchTimeout: Long;
    transactions: OutgoingTransferTx[];
    tokenContract: string;
    block: Long;
}
export interface OutgoingTxBatchProtoMsg {
    typeUrl: "/gravity.v1.OutgoingTxBatch";
    value: Uint8Array;
}
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatchAmino {
    batch_nonce: string;
    batch_timeout: string;
    transactions: OutgoingTransferTxAmino[];
    token_contract: string;
    block: string;
}
export interface OutgoingTxBatchAminoMsg {
    type: "/gravity.v1.OutgoingTxBatch";
    value: OutgoingTxBatchAmino;
}
/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatchSDKType {
    batch_nonce: Long;
    batch_timeout: Long;
    transactions: OutgoingTransferTxSDKType[];
    token_contract: string;
    block: Long;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTx {
    id: Long;
    sender: string;
    destAddress: string;
    erc20Token: ERC20Token;
    erc20Fee: ERC20Token;
}
export interface OutgoingTransferTxProtoMsg {
    typeUrl: "/gravity.v1.OutgoingTransferTx";
    value: Uint8Array;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTxAmino {
    id: string;
    sender: string;
    dest_address: string;
    erc20_token?: ERC20TokenAmino;
    erc20_fee?: ERC20TokenAmino;
}
export interface OutgoingTransferTxAminoMsg {
    type: "/gravity.v1.OutgoingTransferTx";
    value: OutgoingTransferTxAmino;
}
/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTxSDKType {
    id: Long;
    sender: string;
    dest_address: string;
    erc20_token: ERC20TokenSDKType;
    erc20_fee: ERC20TokenSDKType;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCall {
    transfers: ERC20Token[];
    fees: ERC20Token[];
    logicContractAddress: string;
    payload: Uint8Array;
    timeout: Long;
    invalidationId: Uint8Array;
    invalidationNonce: Long;
    block: Long;
}
export interface OutgoingLogicCallProtoMsg {
    typeUrl: "/gravity.v1.OutgoingLogicCall";
    value: Uint8Array;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCallAmino {
    transfers: ERC20TokenAmino[];
    fees: ERC20TokenAmino[];
    logic_contract_address: string;
    payload: Uint8Array;
    timeout: string;
    invalidation_id: Uint8Array;
    invalidation_nonce: string;
    block: string;
}
export interface OutgoingLogicCallAminoMsg {
    type: "/gravity.v1.OutgoingLogicCall";
    value: OutgoingLogicCallAmino;
}
/** OutgoingLogicCall represents an individual logic call from gravity to ETH */
export interface OutgoingLogicCallSDKType {
    transfers: ERC20TokenSDKType[];
    fees: ERC20TokenSDKType[];
    logic_contract_address: string;
    payload: Uint8Array;
    timeout: Long;
    invalidation_id: Uint8Array;
    invalidation_nonce: Long;
    block: Long;
}
export declare const OutgoingTxBatch: {
    encode(message: OutgoingTxBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTxBatch;
    fromPartial(object: DeepPartial<OutgoingTxBatch>): OutgoingTxBatch;
    fromAmino(object: OutgoingTxBatchAmino): OutgoingTxBatch;
    toAmino(message: OutgoingTxBatch): OutgoingTxBatchAmino;
    fromAminoMsg(object: OutgoingTxBatchAminoMsg): OutgoingTxBatch;
    fromProtoMsg(message: OutgoingTxBatchProtoMsg): OutgoingTxBatch;
    toProto(message: OutgoingTxBatch): Uint8Array;
    toProtoMsg(message: OutgoingTxBatch): OutgoingTxBatchProtoMsg;
};
export declare const OutgoingTransferTx: {
    encode(message: OutgoingTransferTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTransferTx;
    fromPartial(object: DeepPartial<OutgoingTransferTx>): OutgoingTransferTx;
    fromAmino(object: OutgoingTransferTxAmino): OutgoingTransferTx;
    toAmino(message: OutgoingTransferTx): OutgoingTransferTxAmino;
    fromAminoMsg(object: OutgoingTransferTxAminoMsg): OutgoingTransferTx;
    fromProtoMsg(message: OutgoingTransferTxProtoMsg): OutgoingTransferTx;
    toProto(message: OutgoingTransferTx): Uint8Array;
    toProtoMsg(message: OutgoingTransferTx): OutgoingTransferTxProtoMsg;
};
export declare const OutgoingLogicCall: {
    encode(message: OutgoingLogicCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingLogicCall;
    fromPartial(object: DeepPartial<OutgoingLogicCall>): OutgoingLogicCall;
    fromAmino(object: OutgoingLogicCallAmino): OutgoingLogicCall;
    toAmino(message: OutgoingLogicCall): OutgoingLogicCallAmino;
    fromAminoMsg(object: OutgoingLogicCallAminoMsg): OutgoingLogicCall;
    fromProtoMsg(message: OutgoingLogicCallProtoMsg): OutgoingLogicCall;
    toProto(message: OutgoingLogicCall): Uint8Array;
    toProtoMsg(message: OutgoingLogicCall): OutgoingLogicCallProtoMsg;
};
