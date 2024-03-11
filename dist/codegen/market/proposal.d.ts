import { Metadata, MetadataAmino, MetadataSDKType } from "../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** DenomMetadataProposal details adding denom metadata */
export interface DenomMetadataProposal {
    sender: string;
    title: string;
    description: string;
    metadata: Metadata;
}
export interface DenomMetadataProposalProtoMsg {
    typeUrl: "/pendulumlabs.market.market.DenomMetadataProposal";
    value: Uint8Array;
}
/** DenomMetadataProposal details adding denom metadata */
export interface DenomMetadataProposalAmino {
    sender: string;
    title: string;
    description: string;
    metadata?: MetadataAmino;
}
export interface DenomMetadataProposalAminoMsg {
    type: "/pendulumlabs.market.market.DenomMetadataProposal";
    value: DenomMetadataProposalAmino;
}
/** DenomMetadataProposal details adding denom metadata */
export interface DenomMetadataProposalSDKType {
    sender: string;
    title: string;
    description: string;
    metadata: MetadataSDKType;
}
export declare const DenomMetadataProposal: {
    encode(message: DenomMetadataProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomMetadataProposal;
    fromPartial(object: DeepPartial<DenomMetadataProposal>): DenomMetadataProposal;
    fromAmino(object: DenomMetadataProposalAmino): DenomMetadataProposal;
    toAmino(message: DenomMetadataProposal): DenomMetadataProposalAmino;
    fromAminoMsg(object: DenomMetadataProposalAminoMsg): DenomMetadataProposal;
    fromProtoMsg(message: DenomMetadataProposalProtoMsg): DenomMetadataProposal;
    toProto(message: DenomMetadataProposal): Uint8Array;
    toProtoMsg(message: DenomMetadataProposal): DenomMetadataProposalProtoMsg;
};
