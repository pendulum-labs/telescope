import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** FundTreasuryProposal details a dao fund treasury proposal. */
export interface FundTreasuryProposal {
    sender: string;
    title: string;
    description: string;
    amount: Coin[];
}
export interface FundTreasuryProposalProtoMsg {
    typeUrl: "/onomyprotocol.dao.v1.FundTreasuryProposal";
    value: Uint8Array;
}
/** FundTreasuryProposal details a dao fund treasury proposal. */
export interface FundTreasuryProposalAmino {
    sender: string;
    title: string;
    description: string;
    amount: CoinAmino[];
}
export interface FundTreasuryProposalAminoMsg {
    type: "/onomyprotocol.dao.v1.FundTreasuryProposal";
    value: FundTreasuryProposalAmino;
}
/** FundTreasuryProposal details a dao fund treasury proposal. */
export interface FundTreasuryProposalSDKType {
    sender: string;
    title: string;
    description: string;
    amount: CoinSDKType[];
}
/** ExchangeWithTreasuryProposal details a dao exchange with treasury proposal. */
export interface ExchangeWithTreasuryProposal {
    sender: string;
    title: string;
    description: string;
    coinsPairs: CoinsExchangePair[];
}
export interface ExchangeWithTreasuryProposalProtoMsg {
    typeUrl: "/onomyprotocol.dao.v1.ExchangeWithTreasuryProposal";
    value: Uint8Array;
}
/** ExchangeWithTreasuryProposal details a dao exchange with treasury proposal. */
export interface ExchangeWithTreasuryProposalAmino {
    sender: string;
    title: string;
    description: string;
    coins_pairs: CoinsExchangePairAmino[];
}
export interface ExchangeWithTreasuryProposalAminoMsg {
    type: "/onomyprotocol.dao.v1.ExchangeWithTreasuryProposal";
    value: ExchangeWithTreasuryProposalAmino;
}
/** ExchangeWithTreasuryProposal details a dao exchange with treasury proposal. */
export interface ExchangeWithTreasuryProposalSDKType {
    sender: string;
    title: string;
    description: string;
    coins_pairs: CoinsExchangePairSDKType[];
}
/** CoinsExchangePair is an ask/bid coins pair to exchange. */
export interface CoinsExchangePair {
    coinAsk: Coin;
    coinBid: Coin;
}
export interface CoinsExchangePairProtoMsg {
    typeUrl: "/onomyprotocol.dao.v1.CoinsExchangePair";
    value: Uint8Array;
}
/** CoinsExchangePair is an ask/bid coins pair to exchange. */
export interface CoinsExchangePairAmino {
    coin_ask?: CoinAmino;
    coin_bid?: CoinAmino;
}
export interface CoinsExchangePairAminoMsg {
    type: "/onomyprotocol.dao.v1.CoinsExchangePair";
    value: CoinsExchangePairAmino;
}
/** CoinsExchangePair is an ask/bid coins pair to exchange. */
export interface CoinsExchangePairSDKType {
    coin_ask: CoinSDKType;
    coin_bid: CoinSDKType;
}
/** FundAccountProposal details a dao fund account proposal. */
export interface FundAccountProposal {
    recipient: string;
    title: string;
    description: string;
    amount: Coin[];
}
export interface FundAccountProposalProtoMsg {
    typeUrl: "/onomyprotocol.dao.v1.FundAccountProposal";
    value: Uint8Array;
}
/** FundAccountProposal details a dao fund account proposal. */
export interface FundAccountProposalAmino {
    recipient: string;
    title: string;
    description: string;
    amount: CoinAmino[];
}
export interface FundAccountProposalAminoMsg {
    type: "/onomyprotocol.dao.v1.FundAccountProposal";
    value: FundAccountProposalAmino;
}
/** FundAccountProposal details a dao fund account proposal. */
export interface FundAccountProposalSDKType {
    recipient: string;
    title: string;
    description: string;
    amount: CoinSDKType[];
}
export declare const FundTreasuryProposal: {
    encode(message: FundTreasuryProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundTreasuryProposal;
    fromPartial(object: DeepPartial<FundTreasuryProposal>): FundTreasuryProposal;
    fromAmino(object: FundTreasuryProposalAmino): FundTreasuryProposal;
    toAmino(message: FundTreasuryProposal): FundTreasuryProposalAmino;
    fromAminoMsg(object: FundTreasuryProposalAminoMsg): FundTreasuryProposal;
    fromProtoMsg(message: FundTreasuryProposalProtoMsg): FundTreasuryProposal;
    toProto(message: FundTreasuryProposal): Uint8Array;
    toProtoMsg(message: FundTreasuryProposal): FundTreasuryProposalProtoMsg;
};
export declare const ExchangeWithTreasuryProposal: {
    encode(message: ExchangeWithTreasuryProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeWithTreasuryProposal;
    fromPartial(object: DeepPartial<ExchangeWithTreasuryProposal>): ExchangeWithTreasuryProposal;
    fromAmino(object: ExchangeWithTreasuryProposalAmino): ExchangeWithTreasuryProposal;
    toAmino(message: ExchangeWithTreasuryProposal): ExchangeWithTreasuryProposalAmino;
    fromAminoMsg(object: ExchangeWithTreasuryProposalAminoMsg): ExchangeWithTreasuryProposal;
    fromProtoMsg(message: ExchangeWithTreasuryProposalProtoMsg): ExchangeWithTreasuryProposal;
    toProto(message: ExchangeWithTreasuryProposal): Uint8Array;
    toProtoMsg(message: ExchangeWithTreasuryProposal): ExchangeWithTreasuryProposalProtoMsg;
};
export declare const CoinsExchangePair: {
    encode(message: CoinsExchangePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinsExchangePair;
    fromPartial(object: DeepPartial<CoinsExchangePair>): CoinsExchangePair;
    fromAmino(object: CoinsExchangePairAmino): CoinsExchangePair;
    toAmino(message: CoinsExchangePair): CoinsExchangePairAmino;
    fromAminoMsg(object: CoinsExchangePairAminoMsg): CoinsExchangePair;
    fromProtoMsg(message: CoinsExchangePairProtoMsg): CoinsExchangePair;
    toProto(message: CoinsExchangePair): Uint8Array;
    toProtoMsg(message: CoinsExchangePair): CoinsExchangePairProtoMsg;
};
export declare const FundAccountProposal: {
    encode(message: FundAccountProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundAccountProposal;
    fromPartial(object: DeepPartial<FundAccountProposal>): FundAccountProposal;
    fromAmino(object: FundAccountProposalAmino): FundAccountProposal;
    toAmino(message: FundAccountProposal): FundAccountProposalAmino;
    fromAminoMsg(object: FundAccountProposalAminoMsg): FundAccountProposal;
    fromProtoMsg(message: FundAccountProposalProtoMsg): FundAccountProposal;
    toProto(message: FundAccountProposal): Uint8Array;
    toProtoMsg(message: FundAccountProposal): FundAccountProposalProtoMsg;
};
