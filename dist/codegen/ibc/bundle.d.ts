/// <reference types="long" />
import * as _90 from "./applications/transfer/v1/genesis";
import * as _91 from "./applications/transfer/v1/query";
import * as _92 from "./applications/transfer/v1/transfer";
import * as _93 from "./applications/transfer/v1/tx";
import * as _94 from "./applications/transfer/v2/packet";
import * as _95 from "./core/channel/v1/channel";
import * as _96 from "./core/channel/v1/genesis";
import * as _97 from "./core/channel/v1/query";
import * as _98 from "./core/channel/v1/tx";
import * as _99 from "./core/client/v1/client";
import * as _100 from "./core/client/v1/genesis";
import * as _101 from "./core/client/v1/query";
import * as _102 from "./core/client/v1/tx";
import * as _103 from "./core/commitment/v1/commitment";
import * as _104 from "./core/connection/v1/connection";
import * as _105 from "./core/connection/v1/genesis";
import * as _106 from "./core/connection/v1/query";
import * as _107 from "./core/connection/v1/tx";
import * as _108 from "./core/port/v1/query";
import * as _109 from "./core/types/v1/genesis";
import * as _110 from "./lightclients/localhost/v1/localhost";
import * as _111 from "./lightclients/solomachine/v1/solomachine";
import * as _112 from "./lightclients/solomachine/v2/solomachine";
import * as _113 from "./lightclients/tendermint/v1/tendermint";
import * as _159 from "./applications/transfer/v1/query.rpc.Query";
import * as _160 from "./core/channel/v1/query.rpc.Query";
import * as _161 from "./core/client/v1/query.rpc.Query";
import * as _162 from "./core/connection/v1/query.rpc.Query";
import * as _163 from "./core/port/v1/query.rpc.Query";
import * as _164 from "./applications/transfer/v1/tx.rpc.msg";
import * as _165 from "./core/channel/v1/tx.rpc.msg";
import * as _166 from "./core/client/v1/tx.rpc.msg";
import * as _167 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _164.MsgClientImpl;
                QueryClientImpl: typeof _159.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _91.QueryDenomTraceRequest): Promise<_91.QueryDenomTraceResponse>;
                    denomTraces(request?: _91.QueryDenomTracesRequest): Promise<_91.QueryDenomTracesResponse>;
                    params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _93.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _93.MsgTransfer): {
                            typeUrl: string;
                            value: _93.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _93.MsgTransfer): {
                            typeUrl: string;
                            value: _93.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _93.MsgTransfer) => _93.MsgTransferAmino;
                        fromAmino: (object: _93.MsgTransferAmino) => _93.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _93.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgTransfer;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        timeoutTimestamp?: string | number | import("long").Long;
                    }): _93.MsgTransfer;
                    fromAmino(object: _93.MsgTransferAmino): _93.MsgTransfer;
                    toAmino(message: _93.MsgTransfer): _93.MsgTransferAmino;
                    fromAminoMsg(object: _93.MsgTransferAminoMsg): _93.MsgTransfer;
                    toAminoMsg(message: _93.MsgTransfer): _93.MsgTransferAminoMsg;
                    fromProtoMsg(message: _93.MsgTransferProtoMsg): _93.MsgTransfer;
                    toProto(message: _93.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _93.MsgTransfer): _93.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    encode(_: _93.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgTransferResponse;
                    fromPartial(_: {}): _93.MsgTransferResponse;
                    fromAmino(_: _93.MsgTransferResponseAmino): _93.MsgTransferResponse;
                    toAmino(_: _93.MsgTransferResponse): _93.MsgTransferResponseAmino;
                    fromAminoMsg(object: _93.MsgTransferResponseAminoMsg): _93.MsgTransferResponse;
                    toAminoMsg(message: _93.MsgTransferResponse): _93.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _93.MsgTransferResponseProtoMsg): _93.MsgTransferResponse;
                    toProto(message: _93.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _93.MsgTransferResponse): _93.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    encode(message: _92.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.DenomTrace;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _92.DenomTrace;
                    fromAmino(object: _92.DenomTraceAmino): _92.DenomTrace;
                    toAmino(message: _92.DenomTrace): _92.DenomTraceAmino;
                    fromAminoMsg(object: _92.DenomTraceAminoMsg): _92.DenomTrace;
                    toAminoMsg(message: _92.DenomTrace): _92.DenomTraceAminoMsg;
                    fromProtoMsg(message: _92.DenomTraceProtoMsg): _92.DenomTrace;
                    toProto(message: _92.DenomTrace): Uint8Array;
                    toProtoMsg(message: _92.DenomTrace): _92.DenomTraceProtoMsg;
                };
                Params: {
                    encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Params;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _92.Params;
                    fromAmino(object: _92.ParamsAmino): _92.Params;
                    toAmino(message: _92.Params): _92.ParamsAmino;
                    fromAminoMsg(object: _92.ParamsAminoMsg): _92.Params;
                    toAminoMsg(message: _92.Params): _92.ParamsAminoMsg;
                    fromProtoMsg(message: _92.ParamsProtoMsg): _92.Params;
                    toProto(message: _92.Params): Uint8Array;
                    toProtoMsg(message: _92.Params): _92.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    encode(message: _91.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryDenomTraceRequest;
                    fromPartial(object: {
                        hash?: string;
                    }): _91.QueryDenomTraceRequest;
                    fromAmino(object: _91.QueryDenomTraceRequestAmino): _91.QueryDenomTraceRequest;
                    toAmino(message: _91.QueryDenomTraceRequest): _91.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _91.QueryDenomTraceRequestAminoMsg): _91.QueryDenomTraceRequest;
                    toAminoMsg(message: _91.QueryDenomTraceRequest): _91.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _91.QueryDenomTraceRequestProtoMsg): _91.QueryDenomTraceRequest;
                    toProto(message: _91.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _91.QueryDenomTraceRequest): _91.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    encode(message: _91.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryDenomTraceResponse;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _91.QueryDenomTraceResponse;
                    fromAmino(object: _91.QueryDenomTraceResponseAmino): _91.QueryDenomTraceResponse;
                    toAmino(message: _91.QueryDenomTraceResponse): _91.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _91.QueryDenomTraceResponseAminoMsg): _91.QueryDenomTraceResponse;
                    toAminoMsg(message: _91.QueryDenomTraceResponse): _91.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _91.QueryDenomTraceResponseProtoMsg): _91.QueryDenomTraceResponse;
                    toProto(message: _91.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _91.QueryDenomTraceResponse): _91.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    encode(message: _91.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryDenomTracesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _91.QueryDenomTracesRequest;
                    fromAmino(object: _91.QueryDenomTracesRequestAmino): _91.QueryDenomTracesRequest;
                    toAmino(message: _91.QueryDenomTracesRequest): _91.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _91.QueryDenomTracesRequestAminoMsg): _91.QueryDenomTracesRequest;
                    toAminoMsg(message: _91.QueryDenomTracesRequest): _91.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _91.QueryDenomTracesRequestProtoMsg): _91.QueryDenomTracesRequest;
                    toProto(message: _91.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _91.QueryDenomTracesRequest): _91.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    encode(message: _91.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryDenomTracesResponse;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _91.QueryDenomTracesResponse;
                    fromAmino(object: _91.QueryDenomTracesResponseAmino): _91.QueryDenomTracesResponse;
                    toAmino(message: _91.QueryDenomTracesResponse): _91.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _91.QueryDenomTracesResponseAminoMsg): _91.QueryDenomTracesResponse;
                    toAminoMsg(message: _91.QueryDenomTracesResponse): _91.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _91.QueryDenomTracesResponseProtoMsg): _91.QueryDenomTracesResponse;
                    toProto(message: _91.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _91.QueryDenomTracesResponse): _91.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    encode(_: _91.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsRequest;
                    fromPartial(_: {}): _91.QueryParamsRequest;
                    fromAmino(_: _91.QueryParamsRequestAmino): _91.QueryParamsRequest;
                    toAmino(_: _91.QueryParamsRequest): _91.QueryParamsRequestAmino;
                    fromAminoMsg(object: _91.QueryParamsRequestAminoMsg): _91.QueryParamsRequest;
                    toAminoMsg(message: _91.QueryParamsRequest): _91.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _91.QueryParamsRequestProtoMsg): _91.QueryParamsRequest;
                    toProto(message: _91.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _91.QueryParamsRequest): _91.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    encode(message: _91.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsResponse;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _91.QueryParamsResponse;
                    fromAmino(object: _91.QueryParamsResponseAmino): _91.QueryParamsResponse;
                    toAmino(message: _91.QueryParamsResponse): _91.QueryParamsResponseAmino;
                    fromAminoMsg(object: _91.QueryParamsResponseAminoMsg): _91.QueryParamsResponse;
                    toAminoMsg(message: _91.QueryParamsResponse): _91.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _91.QueryParamsResponseProtoMsg): _91.QueryParamsResponse;
                    toProto(message: _91.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _91.QueryParamsResponse): _91.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.GenesisState;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _90.GenesisState;
                    fromAmino(object: _90.GenesisStateAmino): _90.GenesisState;
                    toAmino(message: _90.GenesisState): _90.GenesisStateAmino;
                    fromAminoMsg(object: _90.GenesisStateAminoMsg): _90.GenesisState;
                    toAminoMsg(message: _90.GenesisState): _90.GenesisStateAminoMsg;
                    fromProtoMsg(message: _90.GenesisStateProtoMsg): _90.GenesisState;
                    toProto(message: _90.GenesisState): Uint8Array;
                    toProtoMsg(message: _90.GenesisState): _90.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _94.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.FungibleTokenPacketData;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _94.FungibleTokenPacketData;
                    fromAmino(object: _94.FungibleTokenPacketDataAmino): _94.FungibleTokenPacketData;
                    toAmino(message: _94.FungibleTokenPacketData): _94.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _94.FungibleTokenPacketDataAminoMsg): _94.FungibleTokenPacketData;
                    toAminoMsg(message: _94.FungibleTokenPacketData): _94.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _94.FungibleTokenPacketDataProtoMsg): _94.FungibleTokenPacketData;
                    toProto(message: _94.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _94.FungibleTokenPacketData): _94.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _165.MsgClientImpl;
                QueryClientImpl: typeof _160.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _97.QueryChannelRequest): Promise<_97.QueryChannelResponse>;
                    channels(request?: _97.QueryChannelsRequest): Promise<_97.QueryChannelsResponse>;
                    connectionChannels(request: _97.QueryConnectionChannelsRequest): Promise<_97.QueryConnectionChannelsResponse>;
                    channelClientState(request: _97.QueryChannelClientStateRequest): Promise<_97.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _97.QueryChannelConsensusStateRequest): Promise<_97.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _97.QueryPacketCommitmentRequest): Promise<_97.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _97.QueryPacketCommitmentsRequest): Promise<_97.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _97.QueryPacketReceiptRequest): Promise<_97.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _97.QueryPacketAcknowledgementRequest): Promise<_97.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _97.QueryPacketAcknowledgementsRequest): Promise<_97.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _97.QueryUnreceivedPacketsRequest): Promise<_97.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _97.QueryUnreceivedAcksRequest): Promise<_97.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _97.QueryNextSequenceReceiveRequest): Promise<_97.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _98.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _98.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _98.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _98.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _98.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _98.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _98.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _98.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _98.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _98.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _98.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _98.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _98.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _98.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _98.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _98.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _98.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _98.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _98.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _98.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _98.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _98.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _98.MsgRecvPacket): {
                            typeUrl: string;
                            value: _98.MsgRecvPacket;
                        };
                        timeout(value: _98.MsgTimeout): {
                            typeUrl: string;
                            value: _98.MsgTimeout;
                        };
                        timeoutOnClose(value: _98.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _98.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _98.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _98.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _98.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _98.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _98.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _98.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _98.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _98.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _98.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _98.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _98.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _98.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _98.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _98.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _98.MsgRecvPacket): {
                            typeUrl: string;
                            value: _98.MsgRecvPacket;
                        };
                        timeout(value: _98.MsgTimeout): {
                            typeUrl: string;
                            value: _98.MsgTimeout;
                        };
                        timeoutOnClose(value: _98.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _98.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _98.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _98.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _98.MsgChannelOpenInit) => _98.MsgChannelOpenInitAmino;
                        fromAmino: (object: _98.MsgChannelOpenInitAmino) => _98.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _98.MsgChannelOpenTry) => _98.MsgChannelOpenTryAmino;
                        fromAmino: (object: _98.MsgChannelOpenTryAmino) => _98.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _98.MsgChannelOpenAck) => _98.MsgChannelOpenAckAmino;
                        fromAmino: (object: _98.MsgChannelOpenAckAmino) => _98.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _98.MsgChannelOpenConfirm) => _98.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _98.MsgChannelOpenConfirmAmino) => _98.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _98.MsgChannelCloseInit) => _98.MsgChannelCloseInitAmino;
                        fromAmino: (object: _98.MsgChannelCloseInitAmino) => _98.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _98.MsgChannelCloseConfirm) => _98.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _98.MsgChannelCloseConfirmAmino) => _98.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _98.MsgRecvPacket) => _98.MsgRecvPacketAmino;
                        fromAmino: (object: _98.MsgRecvPacketAmino) => _98.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _98.MsgTimeout) => _98.MsgTimeoutAmino;
                        fromAmino: (object: _98.MsgTimeoutAmino) => _98.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _98.MsgTimeoutOnClose) => _98.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _98.MsgTimeoutOnCloseAmino) => _98.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _98.MsgAcknowledgement) => _98.MsgAcknowledgementAmino;
                        fromAmino: (object: _98.MsgAcknowledgementAmino) => _98.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _98.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelOpenInit;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _95.State;
                            ordering?: _95.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _98.MsgChannelOpenInit;
                    fromAmino(object: _98.MsgChannelOpenInitAmino): _98.MsgChannelOpenInit;
                    toAmino(message: _98.MsgChannelOpenInit): _98.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _98.MsgChannelOpenInitAminoMsg): _98.MsgChannelOpenInit;
                    toAminoMsg(message: _98.MsgChannelOpenInit): _98.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelOpenInitProtoMsg): _98.MsgChannelOpenInit;
                    toProto(message: _98.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelOpenInit): _98.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _98.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelOpenInitResponse;
                    fromPartial(_: {}): _98.MsgChannelOpenInitResponse;
                    fromAmino(_: _98.MsgChannelOpenInitResponseAmino): _98.MsgChannelOpenInitResponse;
                    toAmino(_: _98.MsgChannelOpenInitResponse): _98.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _98.MsgChannelOpenInitResponseAminoMsg): _98.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _98.MsgChannelOpenInitResponse): _98.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelOpenInitResponseProtoMsg): _98.MsgChannelOpenInitResponse;
                    toProto(message: _98.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelOpenInitResponse): _98.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    encode(message: _98.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelOpenTry;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _95.State;
                            ordering?: _95.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _98.MsgChannelOpenTry;
                    fromAmino(object: _98.MsgChannelOpenTryAmino): _98.MsgChannelOpenTry;
                    toAmino(message: _98.MsgChannelOpenTry): _98.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _98.MsgChannelOpenTryAminoMsg): _98.MsgChannelOpenTry;
                    toAminoMsg(message: _98.MsgChannelOpenTry): _98.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelOpenTryProtoMsg): _98.MsgChannelOpenTry;
                    toProto(message: _98.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelOpenTry): _98.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _98.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelOpenTryResponse;
                    fromPartial(_: {}): _98.MsgChannelOpenTryResponse;
                    fromAmino(_: _98.MsgChannelOpenTryResponseAmino): _98.MsgChannelOpenTryResponse;
                    toAmino(_: _98.MsgChannelOpenTryResponse): _98.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _98.MsgChannelOpenTryResponseAminoMsg): _98.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _98.MsgChannelOpenTryResponse): _98.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelOpenTryResponseProtoMsg): _98.MsgChannelOpenTryResponse;
                    toProto(message: _98.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelOpenTryResponse): _98.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    encode(message: _98.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelOpenAck;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _98.MsgChannelOpenAck;
                    fromAmino(object: _98.MsgChannelOpenAckAmino): _98.MsgChannelOpenAck;
                    toAmino(message: _98.MsgChannelOpenAck): _98.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _98.MsgChannelOpenAckAminoMsg): _98.MsgChannelOpenAck;
                    toAminoMsg(message: _98.MsgChannelOpenAck): _98.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelOpenAckProtoMsg): _98.MsgChannelOpenAck;
                    toProto(message: _98.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelOpenAck): _98.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _98.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelOpenAckResponse;
                    fromPartial(_: {}): _98.MsgChannelOpenAckResponse;
                    fromAmino(_: _98.MsgChannelOpenAckResponseAmino): _98.MsgChannelOpenAckResponse;
                    toAmino(_: _98.MsgChannelOpenAckResponse): _98.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _98.MsgChannelOpenAckResponseAminoMsg): _98.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _98.MsgChannelOpenAckResponse): _98.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelOpenAckResponseProtoMsg): _98.MsgChannelOpenAckResponse;
                    toProto(message: _98.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelOpenAckResponse): _98.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _98.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelOpenConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _98.MsgChannelOpenConfirm;
                    fromAmino(object: _98.MsgChannelOpenConfirmAmino): _98.MsgChannelOpenConfirm;
                    toAmino(message: _98.MsgChannelOpenConfirm): _98.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _98.MsgChannelOpenConfirmAminoMsg): _98.MsgChannelOpenConfirm;
                    toAminoMsg(message: _98.MsgChannelOpenConfirm): _98.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelOpenConfirmProtoMsg): _98.MsgChannelOpenConfirm;
                    toProto(message: _98.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelOpenConfirm): _98.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _98.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelOpenConfirmResponse;
                    fromPartial(_: {}): _98.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _98.MsgChannelOpenConfirmResponseAmino): _98.MsgChannelOpenConfirmResponse;
                    toAmino(_: _98.MsgChannelOpenConfirmResponse): _98.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _98.MsgChannelOpenConfirmResponseAminoMsg): _98.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _98.MsgChannelOpenConfirmResponse): _98.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelOpenConfirmResponseProtoMsg): _98.MsgChannelOpenConfirmResponse;
                    toProto(message: _98.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelOpenConfirmResponse): _98.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    encode(message: _98.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelCloseInit;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _98.MsgChannelCloseInit;
                    fromAmino(object: _98.MsgChannelCloseInitAmino): _98.MsgChannelCloseInit;
                    toAmino(message: _98.MsgChannelCloseInit): _98.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _98.MsgChannelCloseInitAminoMsg): _98.MsgChannelCloseInit;
                    toAminoMsg(message: _98.MsgChannelCloseInit): _98.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelCloseInitProtoMsg): _98.MsgChannelCloseInit;
                    toProto(message: _98.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelCloseInit): _98.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _98.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelCloseInitResponse;
                    fromPartial(_: {}): _98.MsgChannelCloseInitResponse;
                    fromAmino(_: _98.MsgChannelCloseInitResponseAmino): _98.MsgChannelCloseInitResponse;
                    toAmino(_: _98.MsgChannelCloseInitResponse): _98.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _98.MsgChannelCloseInitResponseAminoMsg): _98.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _98.MsgChannelCloseInitResponse): _98.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelCloseInitResponseProtoMsg): _98.MsgChannelCloseInitResponse;
                    toProto(message: _98.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelCloseInitResponse): _98.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _98.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelCloseConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _98.MsgChannelCloseConfirm;
                    fromAmino(object: _98.MsgChannelCloseConfirmAmino): _98.MsgChannelCloseConfirm;
                    toAmino(message: _98.MsgChannelCloseConfirm): _98.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _98.MsgChannelCloseConfirmAminoMsg): _98.MsgChannelCloseConfirm;
                    toAminoMsg(message: _98.MsgChannelCloseConfirm): _98.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelCloseConfirmProtoMsg): _98.MsgChannelCloseConfirm;
                    toProto(message: _98.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelCloseConfirm): _98.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _98.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgChannelCloseConfirmResponse;
                    fromPartial(_: {}): _98.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _98.MsgChannelCloseConfirmResponseAmino): _98.MsgChannelCloseConfirmResponse;
                    toAmino(_: _98.MsgChannelCloseConfirmResponse): _98.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _98.MsgChannelCloseConfirmResponseAminoMsg): _98.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _98.MsgChannelCloseConfirmResponse): _98.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgChannelCloseConfirmResponseProtoMsg): _98.MsgChannelCloseConfirmResponse;
                    toProto(message: _98.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgChannelCloseConfirmResponse): _98.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    encode(message: _98.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgRecvPacket;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            timeoutTimestamp?: string | number | import("long").Long;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _98.MsgRecvPacket;
                    fromAmino(object: _98.MsgRecvPacketAmino): _98.MsgRecvPacket;
                    toAmino(message: _98.MsgRecvPacket): _98.MsgRecvPacketAmino;
                    fromAminoMsg(object: _98.MsgRecvPacketAminoMsg): _98.MsgRecvPacket;
                    toAminoMsg(message: _98.MsgRecvPacket): _98.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _98.MsgRecvPacketProtoMsg): _98.MsgRecvPacket;
                    toProto(message: _98.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _98.MsgRecvPacket): _98.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    encode(_: _98.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgRecvPacketResponse;
                    fromPartial(_: {}): _98.MsgRecvPacketResponse;
                    fromAmino(_: _98.MsgRecvPacketResponseAmino): _98.MsgRecvPacketResponse;
                    toAmino(_: _98.MsgRecvPacketResponse): _98.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _98.MsgRecvPacketResponseAminoMsg): _98.MsgRecvPacketResponse;
                    toAminoMsg(message: _98.MsgRecvPacketResponse): _98.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgRecvPacketResponseProtoMsg): _98.MsgRecvPacketResponse;
                    toProto(message: _98.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgRecvPacketResponse): _98.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    encode(message: _98.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgTimeout;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            timeoutTimestamp?: string | number | import("long").Long;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        nextSequenceRecv?: string | number | import("long").Long;
                        signer?: string;
                    }): _98.MsgTimeout;
                    fromAmino(object: _98.MsgTimeoutAmino): _98.MsgTimeout;
                    toAmino(message: _98.MsgTimeout): _98.MsgTimeoutAmino;
                    fromAminoMsg(object: _98.MsgTimeoutAminoMsg): _98.MsgTimeout;
                    toAminoMsg(message: _98.MsgTimeout): _98.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _98.MsgTimeoutProtoMsg): _98.MsgTimeout;
                    toProto(message: _98.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _98.MsgTimeout): _98.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    encode(_: _98.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgTimeoutResponse;
                    fromPartial(_: {}): _98.MsgTimeoutResponse;
                    fromAmino(_: _98.MsgTimeoutResponseAmino): _98.MsgTimeoutResponse;
                    toAmino(_: _98.MsgTimeoutResponse): _98.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _98.MsgTimeoutResponseAminoMsg): _98.MsgTimeoutResponse;
                    toAminoMsg(message: _98.MsgTimeoutResponse): _98.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgTimeoutResponseProtoMsg): _98.MsgTimeoutResponse;
                    toProto(message: _98.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgTimeoutResponse): _98.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    encode(message: _98.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgTimeoutOnClose;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            timeoutTimestamp?: string | number | import("long").Long;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        nextSequenceRecv?: string | number | import("long").Long;
                        signer?: string;
                    }): _98.MsgTimeoutOnClose;
                    fromAmino(object: _98.MsgTimeoutOnCloseAmino): _98.MsgTimeoutOnClose;
                    toAmino(message: _98.MsgTimeoutOnClose): _98.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _98.MsgTimeoutOnCloseAminoMsg): _98.MsgTimeoutOnClose;
                    toAminoMsg(message: _98.MsgTimeoutOnClose): _98.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _98.MsgTimeoutOnCloseProtoMsg): _98.MsgTimeoutOnClose;
                    toProto(message: _98.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _98.MsgTimeoutOnClose): _98.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _98.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgTimeoutOnCloseResponse;
                    fromPartial(_: {}): _98.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _98.MsgTimeoutOnCloseResponseAmino): _98.MsgTimeoutOnCloseResponse;
                    toAmino(_: _98.MsgTimeoutOnCloseResponse): _98.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _98.MsgTimeoutOnCloseResponseAminoMsg): _98.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _98.MsgTimeoutOnCloseResponse): _98.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgTimeoutOnCloseResponseProtoMsg): _98.MsgTimeoutOnCloseResponse;
                    toProto(message: _98.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgTimeoutOnCloseResponse): _98.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    encode(message: _98.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgAcknowledgement;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            timeoutTimestamp?: string | number | import("long").Long;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _98.MsgAcknowledgement;
                    fromAmino(object: _98.MsgAcknowledgementAmino): _98.MsgAcknowledgement;
                    toAmino(message: _98.MsgAcknowledgement): _98.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _98.MsgAcknowledgementAminoMsg): _98.MsgAcknowledgement;
                    toAminoMsg(message: _98.MsgAcknowledgement): _98.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _98.MsgAcknowledgementProtoMsg): _98.MsgAcknowledgement;
                    toProto(message: _98.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _98.MsgAcknowledgement): _98.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _98.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgAcknowledgementResponse;
                    fromPartial(_: {}): _98.MsgAcknowledgementResponse;
                    fromAmino(_: _98.MsgAcknowledgementResponseAmino): _98.MsgAcknowledgementResponse;
                    toAmino(_: _98.MsgAcknowledgementResponse): _98.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _98.MsgAcknowledgementResponseAminoMsg): _98.MsgAcknowledgementResponse;
                    toAminoMsg(message: _98.MsgAcknowledgementResponse): _98.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgAcknowledgementResponseProtoMsg): _98.MsgAcknowledgementResponse;
                    toProto(message: _98.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgAcknowledgementResponse): _98.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    encode(message: _97.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryChannelRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _97.QueryChannelRequest;
                    fromAmino(object: _97.QueryChannelRequestAmino): _97.QueryChannelRequest;
                    toAmino(message: _97.QueryChannelRequest): _97.QueryChannelRequestAmino;
                    fromAminoMsg(object: _97.QueryChannelRequestAminoMsg): _97.QueryChannelRequest;
                    toAminoMsg(message: _97.QueryChannelRequest): _97.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryChannelRequestProtoMsg): _97.QueryChannelRequest;
                    toProto(message: _97.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryChannelRequest): _97.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    encode(message: _97.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryChannelResponse;
                    fromPartial(object: {
                        channel?: {
                            state?: _95.State;
                            ordering?: _95.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryChannelResponse;
                    fromAmino(object: _97.QueryChannelResponseAmino): _97.QueryChannelResponse;
                    toAmino(message: _97.QueryChannelResponse): _97.QueryChannelResponseAmino;
                    fromAminoMsg(object: _97.QueryChannelResponseAminoMsg): _97.QueryChannelResponse;
                    toAminoMsg(message: _97.QueryChannelResponse): _97.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryChannelResponseProtoMsg): _97.QueryChannelResponse;
                    toProto(message: _97.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryChannelResponse): _97.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    encode(message: _97.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryChannelsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _97.QueryChannelsRequest;
                    fromAmino(object: _97.QueryChannelsRequestAmino): _97.QueryChannelsRequest;
                    toAmino(message: _97.QueryChannelsRequest): _97.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _97.QueryChannelsRequestAminoMsg): _97.QueryChannelsRequest;
                    toAminoMsg(message: _97.QueryChannelsRequest): _97.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryChannelsRequestProtoMsg): _97.QueryChannelsRequest;
                    toProto(message: _97.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryChannelsRequest): _97.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    encode(message: _97.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _95.State;
                            ordering?: _95.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryChannelsResponse;
                    fromAmino(object: _97.QueryChannelsResponseAmino): _97.QueryChannelsResponse;
                    toAmino(message: _97.QueryChannelsResponse): _97.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _97.QueryChannelsResponseAminoMsg): _97.QueryChannelsResponse;
                    toAminoMsg(message: _97.QueryChannelsResponse): _97.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryChannelsResponseProtoMsg): _97.QueryChannelsResponse;
                    toProto(message: _97.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryChannelsResponse): _97.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _97.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryConnectionChannelsRequest;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _97.QueryConnectionChannelsRequest;
                    fromAmino(object: _97.QueryConnectionChannelsRequestAmino): _97.QueryConnectionChannelsRequest;
                    toAmino(message: _97.QueryConnectionChannelsRequest): _97.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _97.QueryConnectionChannelsRequestAminoMsg): _97.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _97.QueryConnectionChannelsRequest): _97.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryConnectionChannelsRequestProtoMsg): _97.QueryConnectionChannelsRequest;
                    toProto(message: _97.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryConnectionChannelsRequest): _97.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _97.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryConnectionChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _95.State;
                            ordering?: _95.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryConnectionChannelsResponse;
                    fromAmino(object: _97.QueryConnectionChannelsResponseAmino): _97.QueryConnectionChannelsResponse;
                    toAmino(message: _97.QueryConnectionChannelsResponse): _97.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _97.QueryConnectionChannelsResponseAminoMsg): _97.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _97.QueryConnectionChannelsResponse): _97.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryConnectionChannelsResponseProtoMsg): _97.QueryConnectionChannelsResponse;
                    toProto(message: _97.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryConnectionChannelsResponse): _97.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _97.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryChannelClientStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _97.QueryChannelClientStateRequest;
                    fromAmino(object: _97.QueryChannelClientStateRequestAmino): _97.QueryChannelClientStateRequest;
                    toAmino(message: _97.QueryChannelClientStateRequest): _97.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _97.QueryChannelClientStateRequestAminoMsg): _97.QueryChannelClientStateRequest;
                    toAminoMsg(message: _97.QueryChannelClientStateRequest): _97.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryChannelClientStateRequestProtoMsg): _97.QueryChannelClientStateRequest;
                    toProto(message: _97.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryChannelClientStateRequest): _97.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _97.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryChannelClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryChannelClientStateResponse;
                    fromAmino(object: _97.QueryChannelClientStateResponseAmino): _97.QueryChannelClientStateResponse;
                    toAmino(message: _97.QueryChannelClientStateResponse): _97.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _97.QueryChannelClientStateResponseAminoMsg): _97.QueryChannelClientStateResponse;
                    toAminoMsg(message: _97.QueryChannelClientStateResponse): _97.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryChannelClientStateResponseProtoMsg): _97.QueryChannelClientStateResponse;
                    toProto(message: _97.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryChannelClientStateResponse): _97.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _97.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryChannelConsensusStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: string | number | import("long").Long;
                        revisionHeight?: string | number | import("long").Long;
                    }): _97.QueryChannelConsensusStateRequest;
                    fromAmino(object: _97.QueryChannelConsensusStateRequestAmino): _97.QueryChannelConsensusStateRequest;
                    toAmino(message: _97.QueryChannelConsensusStateRequest): _97.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _97.QueryChannelConsensusStateRequestAminoMsg): _97.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _97.QueryChannelConsensusStateRequest): _97.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryChannelConsensusStateRequestProtoMsg): _97.QueryChannelConsensusStateRequest;
                    toProto(message: _97.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryChannelConsensusStateRequest): _97.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _97.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryChannelConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryChannelConsensusStateResponse;
                    fromAmino(object: _97.QueryChannelConsensusStateResponseAmino): _97.QueryChannelConsensusStateResponse;
                    toAmino(message: _97.QueryChannelConsensusStateResponse): _97.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _97.QueryChannelConsensusStateResponseAminoMsg): _97.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _97.QueryChannelConsensusStateResponse): _97.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryChannelConsensusStateResponseProtoMsg): _97.QueryChannelConsensusStateResponse;
                    toProto(message: _97.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryChannelConsensusStateResponse): _97.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _97.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketCommitmentRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                    }): _97.QueryPacketCommitmentRequest;
                    fromAmino(object: _97.QueryPacketCommitmentRequestAmino): _97.QueryPacketCommitmentRequest;
                    toAmino(message: _97.QueryPacketCommitmentRequest): _97.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _97.QueryPacketCommitmentRequestAminoMsg): _97.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _97.QueryPacketCommitmentRequest): _97.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketCommitmentRequestProtoMsg): _97.QueryPacketCommitmentRequest;
                    toProto(message: _97.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketCommitmentRequest): _97.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _97.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketCommitmentResponse;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryPacketCommitmentResponse;
                    fromAmino(object: _97.QueryPacketCommitmentResponseAmino): _97.QueryPacketCommitmentResponse;
                    toAmino(message: _97.QueryPacketCommitmentResponse): _97.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _97.QueryPacketCommitmentResponseAminoMsg): _97.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _97.QueryPacketCommitmentResponse): _97.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketCommitmentResponseProtoMsg): _97.QueryPacketCommitmentResponse;
                    toProto(message: _97.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketCommitmentResponse): _97.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _97.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketCommitmentsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _97.QueryPacketCommitmentsRequest;
                    fromAmino(object: _97.QueryPacketCommitmentsRequestAmino): _97.QueryPacketCommitmentsRequest;
                    toAmino(message: _97.QueryPacketCommitmentsRequest): _97.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _97.QueryPacketCommitmentsRequestAminoMsg): _97.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _97.QueryPacketCommitmentsRequest): _97.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketCommitmentsRequestProtoMsg): _97.QueryPacketCommitmentsRequest;
                    toProto(message: _97.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketCommitmentsRequest): _97.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _97.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketCommitmentsResponse;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryPacketCommitmentsResponse;
                    fromAmino(object: _97.QueryPacketCommitmentsResponseAmino): _97.QueryPacketCommitmentsResponse;
                    toAmino(message: _97.QueryPacketCommitmentsResponse): _97.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _97.QueryPacketCommitmentsResponseAminoMsg): _97.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _97.QueryPacketCommitmentsResponse): _97.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketCommitmentsResponseProtoMsg): _97.QueryPacketCommitmentsResponse;
                    toProto(message: _97.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketCommitmentsResponse): _97.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _97.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketReceiptRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                    }): _97.QueryPacketReceiptRequest;
                    fromAmino(object: _97.QueryPacketReceiptRequestAmino): _97.QueryPacketReceiptRequest;
                    toAmino(message: _97.QueryPacketReceiptRequest): _97.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _97.QueryPacketReceiptRequestAminoMsg): _97.QueryPacketReceiptRequest;
                    toAminoMsg(message: _97.QueryPacketReceiptRequest): _97.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketReceiptRequestProtoMsg): _97.QueryPacketReceiptRequest;
                    toProto(message: _97.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketReceiptRequest): _97.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _97.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketReceiptResponse;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryPacketReceiptResponse;
                    fromAmino(object: _97.QueryPacketReceiptResponseAmino): _97.QueryPacketReceiptResponse;
                    toAmino(message: _97.QueryPacketReceiptResponse): _97.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _97.QueryPacketReceiptResponseAminoMsg): _97.QueryPacketReceiptResponse;
                    toAminoMsg(message: _97.QueryPacketReceiptResponse): _97.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketReceiptResponseProtoMsg): _97.QueryPacketReceiptResponse;
                    toProto(message: _97.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketReceiptResponse): _97.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _97.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketAcknowledgementRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                    }): _97.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _97.QueryPacketAcknowledgementRequestAmino): _97.QueryPacketAcknowledgementRequest;
                    toAmino(message: _97.QueryPacketAcknowledgementRequest): _97.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _97.QueryPacketAcknowledgementRequestAminoMsg): _97.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _97.QueryPacketAcknowledgementRequest): _97.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketAcknowledgementRequestProtoMsg): _97.QueryPacketAcknowledgementRequest;
                    toProto(message: _97.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketAcknowledgementRequest): _97.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _97.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketAcknowledgementResponse;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _97.QueryPacketAcknowledgementResponseAmino): _97.QueryPacketAcknowledgementResponse;
                    toAmino(message: _97.QueryPacketAcknowledgementResponse): _97.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _97.QueryPacketAcknowledgementResponseAminoMsg): _97.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _97.QueryPacketAcknowledgementResponse): _97.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketAcknowledgementResponseProtoMsg): _97.QueryPacketAcknowledgementResponse;
                    toProto(message: _97.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketAcknowledgementResponse): _97.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _97.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: (string | number | import("long").Long)[];
                    }): _97.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _97.QueryPacketAcknowledgementsRequestAmino): _97.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _97.QueryPacketAcknowledgementsRequest): _97.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _97.QueryPacketAcknowledgementsRequestAminoMsg): _97.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _97.QueryPacketAcknowledgementsRequest): _97.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketAcknowledgementsRequestProtoMsg): _97.QueryPacketAcknowledgementsRequest;
                    toProto(message: _97.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketAcknowledgementsRequest): _97.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _97.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _97.QueryPacketAcknowledgementsResponseAmino): _97.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _97.QueryPacketAcknowledgementsResponse): _97.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _97.QueryPacketAcknowledgementsResponseAminoMsg): _97.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _97.QueryPacketAcknowledgementsResponse): _97.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryPacketAcknowledgementsResponseProtoMsg): _97.QueryPacketAcknowledgementsResponse;
                    toProto(message: _97.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryPacketAcknowledgementsResponse): _97.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _97.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryUnreceivedPacketsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: (string | number | import("long").Long)[];
                    }): _97.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _97.QueryUnreceivedPacketsRequestAmino): _97.QueryUnreceivedPacketsRequest;
                    toAmino(message: _97.QueryUnreceivedPacketsRequest): _97.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _97.QueryUnreceivedPacketsRequestAminoMsg): _97.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _97.QueryUnreceivedPacketsRequest): _97.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryUnreceivedPacketsRequestProtoMsg): _97.QueryUnreceivedPacketsRequest;
                    toProto(message: _97.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryUnreceivedPacketsRequest): _97.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _97.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryUnreceivedPacketsResponse;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").Long)[];
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _97.QueryUnreceivedPacketsResponseAmino): _97.QueryUnreceivedPacketsResponse;
                    toAmino(message: _97.QueryUnreceivedPacketsResponse): _97.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _97.QueryUnreceivedPacketsResponseAminoMsg): _97.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _97.QueryUnreceivedPacketsResponse): _97.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryUnreceivedPacketsResponseProtoMsg): _97.QueryUnreceivedPacketsResponse;
                    toProto(message: _97.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryUnreceivedPacketsResponse): _97.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _97.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryUnreceivedAcksRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: (string | number | import("long").Long)[];
                    }): _97.QueryUnreceivedAcksRequest;
                    fromAmino(object: _97.QueryUnreceivedAcksRequestAmino): _97.QueryUnreceivedAcksRequest;
                    toAmino(message: _97.QueryUnreceivedAcksRequest): _97.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _97.QueryUnreceivedAcksRequestAminoMsg): _97.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _97.QueryUnreceivedAcksRequest): _97.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryUnreceivedAcksRequestProtoMsg): _97.QueryUnreceivedAcksRequest;
                    toProto(message: _97.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryUnreceivedAcksRequest): _97.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _97.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryUnreceivedAcksResponse;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").Long)[];
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryUnreceivedAcksResponse;
                    fromAmino(object: _97.QueryUnreceivedAcksResponseAmino): _97.QueryUnreceivedAcksResponse;
                    toAmino(message: _97.QueryUnreceivedAcksResponse): _97.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _97.QueryUnreceivedAcksResponseAminoMsg): _97.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _97.QueryUnreceivedAcksResponse): _97.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryUnreceivedAcksResponseProtoMsg): _97.QueryUnreceivedAcksResponse;
                    toProto(message: _97.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryUnreceivedAcksResponse): _97.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _97.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryNextSequenceReceiveRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _97.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _97.QueryNextSequenceReceiveRequestAmino): _97.QueryNextSequenceReceiveRequest;
                    toAmino(message: _97.QueryNextSequenceReceiveRequest): _97.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _97.QueryNextSequenceReceiveRequestAminoMsg): _97.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _97.QueryNextSequenceReceiveRequest): _97.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryNextSequenceReceiveRequestProtoMsg): _97.QueryNextSequenceReceiveRequest;
                    toProto(message: _97.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryNextSequenceReceiveRequest): _97.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _97.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryNextSequenceReceiveResponse;
                    fromPartial(object: {
                        nextSequenceReceive?: string | number | import("long").Long;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _97.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _97.QueryNextSequenceReceiveResponseAmino): _97.QueryNextSequenceReceiveResponse;
                    toAmino(message: _97.QueryNextSequenceReceiveResponse): _97.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _97.QueryNextSequenceReceiveResponseAminoMsg): _97.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _97.QueryNextSequenceReceiveResponse): _97.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryNextSequenceReceiveResponseProtoMsg): _97.QueryNextSequenceReceiveResponse;
                    toProto(message: _97.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryNextSequenceReceiveResponse): _97.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                    fromPartial(object: {
                        channels?: {
                            state?: _95.State;
                            ordering?: _95.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                        }[];
                        nextChannelSequence?: string | number | import("long").Long;
                    }): _96.GenesisState;
                    fromAmino(object: _96.GenesisStateAmino): _96.GenesisState;
                    toAmino(message: _96.GenesisState): _96.GenesisStateAmino;
                    fromAminoMsg(object: _96.GenesisStateAminoMsg): _96.GenesisState;
                    toAminoMsg(message: _96.GenesisState): _96.GenesisStateAminoMsg;
                    fromProtoMsg(message: _96.GenesisStateProtoMsg): _96.GenesisState;
                    toProto(message: _96.GenesisState): Uint8Array;
                    toProtoMsg(message: _96.GenesisState): _96.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    encode(message: _96.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.PacketSequence;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                    }): _96.PacketSequence;
                    fromAmino(object: _96.PacketSequenceAmino): _96.PacketSequence;
                    toAmino(message: _96.PacketSequence): _96.PacketSequenceAmino;
                    fromAminoMsg(object: _96.PacketSequenceAminoMsg): _96.PacketSequence;
                    toAminoMsg(message: _96.PacketSequence): _96.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _96.PacketSequenceProtoMsg): _96.PacketSequence;
                    toProto(message: _96.PacketSequence): Uint8Array;
                    toProtoMsg(message: _96.PacketSequence): _96.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _95.State;
                stateToJSON(object: _95.State): string;
                orderFromJSON(object: any): _95.Order;
                orderToJSON(object: _95.Order): string;
                State: typeof _95.State;
                StateSDKType: typeof _95.State;
                StateAmino: typeof _95.State;
                Order: typeof _95.Order;
                OrderSDKType: typeof _95.Order;
                OrderAmino: typeof _95.Order;
                Channel: {
                    encode(message: _95.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Channel;
                    fromPartial(object: {
                        state?: _95.State;
                        ordering?: _95.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _95.Channel;
                    fromAmino(object: _95.ChannelAmino): _95.Channel;
                    toAmino(message: _95.Channel): _95.ChannelAmino;
                    fromAminoMsg(object: _95.ChannelAminoMsg): _95.Channel;
                    toAminoMsg(message: _95.Channel): _95.ChannelAminoMsg;
                    fromProtoMsg(message: _95.ChannelProtoMsg): _95.Channel;
                    toProto(message: _95.Channel): Uint8Array;
                    toProtoMsg(message: _95.Channel): _95.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    encode(message: _95.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.IdentifiedChannel;
                    fromPartial(object: {
                        state?: _95.State;
                        ordering?: _95.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _95.IdentifiedChannel;
                    fromAmino(object: _95.IdentifiedChannelAmino): _95.IdentifiedChannel;
                    toAmino(message: _95.IdentifiedChannel): _95.IdentifiedChannelAmino;
                    fromAminoMsg(object: _95.IdentifiedChannelAminoMsg): _95.IdentifiedChannel;
                    toAminoMsg(message: _95.IdentifiedChannel): _95.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _95.IdentifiedChannelProtoMsg): _95.IdentifiedChannel;
                    toProto(message: _95.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _95.IdentifiedChannel): _95.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    encode(message: _95.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Counterparty;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _95.Counterparty;
                    fromAmino(object: _95.CounterpartyAmino): _95.Counterparty;
                    toAmino(message: _95.Counterparty): _95.CounterpartyAmino;
                    fromAminoMsg(object: _95.CounterpartyAminoMsg): _95.Counterparty;
                    toAminoMsg(message: _95.Counterparty): _95.CounterpartyAminoMsg;
                    fromProtoMsg(message: _95.CounterpartyProtoMsg): _95.Counterparty;
                    toProto(message: _95.Counterparty): Uint8Array;
                    toProtoMsg(message: _95.Counterparty): _95.CounterpartyProtoMsg;
                };
                Packet: {
                    encode(message: _95.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Packet;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        timeoutTimestamp?: string | number | import("long").Long;
                    }): _95.Packet;
                    fromAmino(object: _95.PacketAmino): _95.Packet;
                    toAmino(message: _95.Packet): _95.PacketAmino;
                    fromAminoMsg(object: _95.PacketAminoMsg): _95.Packet;
                    toAminoMsg(message: _95.Packet): _95.PacketAminoMsg;
                    fromProtoMsg(message: _95.PacketProtoMsg): _95.Packet;
                    toProto(message: _95.Packet): Uint8Array;
                    toProtoMsg(message: _95.Packet): _95.PacketProtoMsg;
                };
                PacketState: {
                    encode(message: _95.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.PacketState;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                        data?: Uint8Array;
                    }): _95.PacketState;
                    fromAmino(object: _95.PacketStateAmino): _95.PacketState;
                    toAmino(message: _95.PacketState): _95.PacketStateAmino;
                    fromAminoMsg(object: _95.PacketStateAminoMsg): _95.PacketState;
                    toAminoMsg(message: _95.PacketState): _95.PacketStateAminoMsg;
                    fromProtoMsg(message: _95.PacketStateProtoMsg): _95.PacketState;
                    toProto(message: _95.PacketState): Uint8Array;
                    toProtoMsg(message: _95.PacketState): _95.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    encode(message: _95.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Acknowledgement;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _95.Acknowledgement;
                    fromAmino(object: _95.AcknowledgementAmino): _95.Acknowledgement;
                    toAmino(message: _95.Acknowledgement): _95.AcknowledgementAmino;
                    fromAminoMsg(object: _95.AcknowledgementAminoMsg): _95.Acknowledgement;
                    toAminoMsg(message: _95.Acknowledgement): _95.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _95.AcknowledgementProtoMsg): _95.Acknowledgement;
                    toProto(message: _95.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _95.Acknowledgement): _95.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _166.MsgClientImpl;
                QueryClientImpl: typeof _161.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _101.QueryClientStateRequest): Promise<_101.QueryClientStateResponse>;
                    clientStates(request?: _101.QueryClientStatesRequest): Promise<_101.QueryClientStatesResponse>;
                    consensusState(request: _101.QueryConsensusStateRequest): Promise<_101.QueryConsensusStateResponse>;
                    consensusStates(request: _101.QueryConsensusStatesRequest): Promise<_101.QueryConsensusStatesResponse>;
                    clientStatus(request: _101.QueryClientStatusRequest): Promise<_101.QueryClientStatusResponse>;
                    clientParams(request?: _101.QueryClientParamsRequest): Promise<_101.QueryClientParamsResponse>;
                    upgradedClientState(request?: _101.QueryUpgradedClientStateRequest): Promise<_101.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _101.QueryUpgradedConsensusStateRequest): Promise<_101.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _102.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _102.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _102.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _102.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _102.MsgCreateClient): {
                            typeUrl: string;
                            value: _102.MsgCreateClient;
                        };
                        updateClient(value: _102.MsgUpdateClient): {
                            typeUrl: string;
                            value: _102.MsgUpdateClient;
                        };
                        upgradeClient(value: _102.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _102.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _102.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _102.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _102.MsgCreateClient): {
                            typeUrl: string;
                            value: _102.MsgCreateClient;
                        };
                        updateClient(value: _102.MsgUpdateClient): {
                            typeUrl: string;
                            value: _102.MsgUpdateClient;
                        };
                        upgradeClient(value: _102.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _102.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _102.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _102.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _102.MsgCreateClient) => _102.MsgCreateClientAmino;
                        fromAmino: (object: _102.MsgCreateClientAmino) => _102.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _102.MsgUpdateClient) => _102.MsgUpdateClientAmino;
                        fromAmino: (object: _102.MsgUpdateClientAmino) => _102.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _102.MsgUpgradeClient) => _102.MsgUpgradeClientAmino;
                        fromAmino: (object: _102.MsgUpgradeClientAmino) => _102.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _102.MsgSubmitMisbehaviour) => _102.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _102.MsgSubmitMisbehaviourAmino) => _102.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _102.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgCreateClient;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _102.MsgCreateClient;
                    fromAmino(object: _102.MsgCreateClientAmino): _102.MsgCreateClient;
                    toAmino(message: _102.MsgCreateClient): _102.MsgCreateClientAmino;
                    fromAminoMsg(object: _102.MsgCreateClientAminoMsg): _102.MsgCreateClient;
                    toAminoMsg(message: _102.MsgCreateClient): _102.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _102.MsgCreateClientProtoMsg): _102.MsgCreateClient;
                    toProto(message: _102.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _102.MsgCreateClient): _102.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    encode(_: _102.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgCreateClientResponse;
                    fromPartial(_: {}): _102.MsgCreateClientResponse;
                    fromAmino(_: _102.MsgCreateClientResponseAmino): _102.MsgCreateClientResponse;
                    toAmino(_: _102.MsgCreateClientResponse): _102.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _102.MsgCreateClientResponseAminoMsg): _102.MsgCreateClientResponse;
                    toAminoMsg(message: _102.MsgCreateClientResponse): _102.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _102.MsgCreateClientResponseProtoMsg): _102.MsgCreateClientResponse;
                    toProto(message: _102.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _102.MsgCreateClientResponse): _102.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    encode(message: _102.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateClient;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _102.MsgUpdateClient;
                    fromAmino(object: _102.MsgUpdateClientAmino): _102.MsgUpdateClient;
                    toAmino(message: _102.MsgUpdateClient): _102.MsgUpdateClientAmino;
                    fromAminoMsg(object: _102.MsgUpdateClientAminoMsg): _102.MsgUpdateClient;
                    toAminoMsg(message: _102.MsgUpdateClient): _102.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _102.MsgUpdateClientProtoMsg): _102.MsgUpdateClient;
                    toProto(message: _102.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _102.MsgUpdateClient): _102.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    encode(_: _102.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateClientResponse;
                    fromPartial(_: {}): _102.MsgUpdateClientResponse;
                    fromAmino(_: _102.MsgUpdateClientResponseAmino): _102.MsgUpdateClientResponse;
                    toAmino(_: _102.MsgUpdateClientResponse): _102.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _102.MsgUpdateClientResponseAminoMsg): _102.MsgUpdateClientResponse;
                    toAminoMsg(message: _102.MsgUpdateClientResponse): _102.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _102.MsgUpdateClientResponseProtoMsg): _102.MsgUpdateClientResponse;
                    toProto(message: _102.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _102.MsgUpdateClientResponse): _102.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    encode(message: _102.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpgradeClient;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _102.MsgUpgradeClient;
                    fromAmino(object: _102.MsgUpgradeClientAmino): _102.MsgUpgradeClient;
                    toAmino(message: _102.MsgUpgradeClient): _102.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _102.MsgUpgradeClientAminoMsg): _102.MsgUpgradeClient;
                    toAminoMsg(message: _102.MsgUpgradeClient): _102.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _102.MsgUpgradeClientProtoMsg): _102.MsgUpgradeClient;
                    toProto(message: _102.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _102.MsgUpgradeClient): _102.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _102.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpgradeClientResponse;
                    fromPartial(_: {}): _102.MsgUpgradeClientResponse;
                    fromAmino(_: _102.MsgUpgradeClientResponseAmino): _102.MsgUpgradeClientResponse;
                    toAmino(_: _102.MsgUpgradeClientResponse): _102.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _102.MsgUpgradeClientResponseAminoMsg): _102.MsgUpgradeClientResponse;
                    toAminoMsg(message: _102.MsgUpgradeClientResponse): _102.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _102.MsgUpgradeClientResponseProtoMsg): _102.MsgUpgradeClientResponse;
                    toProto(message: _102.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _102.MsgUpgradeClientResponse): _102.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _102.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSubmitMisbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _102.MsgSubmitMisbehaviour;
                    fromAmino(object: _102.MsgSubmitMisbehaviourAmino): _102.MsgSubmitMisbehaviour;
                    toAmino(message: _102.MsgSubmitMisbehaviour): _102.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _102.MsgSubmitMisbehaviourAminoMsg): _102.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _102.MsgSubmitMisbehaviour): _102.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _102.MsgSubmitMisbehaviourProtoMsg): _102.MsgSubmitMisbehaviour;
                    toProto(message: _102.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _102.MsgSubmitMisbehaviour): _102.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _102.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: {}): _102.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _102.MsgSubmitMisbehaviourResponseAmino): _102.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _102.MsgSubmitMisbehaviourResponse): _102.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _102.MsgSubmitMisbehaviourResponseAminoMsg): _102.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _102.MsgSubmitMisbehaviourResponse): _102.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _102.MsgSubmitMisbehaviourResponseProtoMsg): _102.MsgSubmitMisbehaviourResponse;
                    toProto(message: _102.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _102.MsgSubmitMisbehaviourResponse): _102.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    encode(message: _101.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryClientStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _101.QueryClientStateRequest;
                    fromAmino(object: _101.QueryClientStateRequestAmino): _101.QueryClientStateRequest;
                    toAmino(message: _101.QueryClientStateRequest): _101.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _101.QueryClientStateRequestAminoMsg): _101.QueryClientStateRequest;
                    toAminoMsg(message: _101.QueryClientStateRequest): _101.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryClientStateRequestProtoMsg): _101.QueryClientStateRequest;
                    toProto(message: _101.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryClientStateRequest): _101.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    encode(message: _101.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryClientStateResponse;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _101.QueryClientStateResponse;
                    fromAmino(object: _101.QueryClientStateResponseAmino): _101.QueryClientStateResponse;
                    toAmino(message: _101.QueryClientStateResponse): _101.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _101.QueryClientStateResponseAminoMsg): _101.QueryClientStateResponse;
                    toAminoMsg(message: _101.QueryClientStateResponse): _101.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryClientStateResponseProtoMsg): _101.QueryClientStateResponse;
                    toProto(message: _101.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryClientStateResponse): _101.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    encode(message: _101.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryClientStatesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _101.QueryClientStatesRequest;
                    fromAmino(object: _101.QueryClientStatesRequestAmino): _101.QueryClientStatesRequest;
                    toAmino(message: _101.QueryClientStatesRequest): _101.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _101.QueryClientStatesRequestAminoMsg): _101.QueryClientStatesRequest;
                    toAminoMsg(message: _101.QueryClientStatesRequest): _101.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryClientStatesRequestProtoMsg): _101.QueryClientStatesRequest;
                    toProto(message: _101.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryClientStatesRequest): _101.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    encode(message: _101.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryClientStatesResponse;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _101.QueryClientStatesResponse;
                    fromAmino(object: _101.QueryClientStatesResponseAmino): _101.QueryClientStatesResponse;
                    toAmino(message: _101.QueryClientStatesResponse): _101.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _101.QueryClientStatesResponseAminoMsg): _101.QueryClientStatesResponse;
                    toAminoMsg(message: _101.QueryClientStatesResponse): _101.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryClientStatesResponseProtoMsg): _101.QueryClientStatesResponse;
                    toProto(message: _101.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryClientStatesResponse): _101.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    encode(message: _101.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryConsensusStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: string | number | import("long").Long;
                        revisionHeight?: string | number | import("long").Long;
                        latestHeight?: boolean;
                    }): _101.QueryConsensusStateRequest;
                    fromAmino(object: _101.QueryConsensusStateRequestAmino): _101.QueryConsensusStateRequest;
                    toAmino(message: _101.QueryConsensusStateRequest): _101.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _101.QueryConsensusStateRequestAminoMsg): _101.QueryConsensusStateRequest;
                    toAminoMsg(message: _101.QueryConsensusStateRequest): _101.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryConsensusStateRequestProtoMsg): _101.QueryConsensusStateRequest;
                    toProto(message: _101.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryConsensusStateRequest): _101.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    encode(message: _101.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _101.QueryConsensusStateResponse;
                    fromAmino(object: _101.QueryConsensusStateResponseAmino): _101.QueryConsensusStateResponse;
                    toAmino(message: _101.QueryConsensusStateResponse): _101.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _101.QueryConsensusStateResponseAminoMsg): _101.QueryConsensusStateResponse;
                    toAminoMsg(message: _101.QueryConsensusStateResponse): _101.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryConsensusStateResponseProtoMsg): _101.QueryConsensusStateResponse;
                    toProto(message: _101.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryConsensusStateResponse): _101.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _101.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryConsensusStatesRequest;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _101.QueryConsensusStatesRequest;
                    fromAmino(object: _101.QueryConsensusStatesRequestAmino): _101.QueryConsensusStatesRequest;
                    toAmino(message: _101.QueryConsensusStatesRequest): _101.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _101.QueryConsensusStatesRequestAminoMsg): _101.QueryConsensusStatesRequest;
                    toAminoMsg(message: _101.QueryConsensusStatesRequest): _101.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryConsensusStatesRequestProtoMsg): _101.QueryConsensusStatesRequest;
                    toProto(message: _101.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryConsensusStatesRequest): _101.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _101.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryConsensusStatesResponse;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _101.QueryConsensusStatesResponse;
                    fromAmino(object: _101.QueryConsensusStatesResponseAmino): _101.QueryConsensusStatesResponse;
                    toAmino(message: _101.QueryConsensusStatesResponse): _101.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _101.QueryConsensusStatesResponseAminoMsg): _101.QueryConsensusStatesResponse;
                    toAminoMsg(message: _101.QueryConsensusStatesResponse): _101.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryConsensusStatesResponseProtoMsg): _101.QueryConsensusStatesResponse;
                    toProto(message: _101.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryConsensusStatesResponse): _101.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    encode(message: _101.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryClientStatusRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _101.QueryClientStatusRequest;
                    fromAmino(object: _101.QueryClientStatusRequestAmino): _101.QueryClientStatusRequest;
                    toAmino(message: _101.QueryClientStatusRequest): _101.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _101.QueryClientStatusRequestAminoMsg): _101.QueryClientStatusRequest;
                    toAminoMsg(message: _101.QueryClientStatusRequest): _101.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryClientStatusRequestProtoMsg): _101.QueryClientStatusRequest;
                    toProto(message: _101.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryClientStatusRequest): _101.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    encode(message: _101.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryClientStatusResponse;
                    fromPartial(object: {
                        status?: string;
                    }): _101.QueryClientStatusResponse;
                    fromAmino(object: _101.QueryClientStatusResponseAmino): _101.QueryClientStatusResponse;
                    toAmino(message: _101.QueryClientStatusResponse): _101.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _101.QueryClientStatusResponseAminoMsg): _101.QueryClientStatusResponse;
                    toAminoMsg(message: _101.QueryClientStatusResponse): _101.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryClientStatusResponseProtoMsg): _101.QueryClientStatusResponse;
                    toProto(message: _101.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryClientStatusResponse): _101.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    encode(_: _101.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryClientParamsRequest;
                    fromPartial(_: {}): _101.QueryClientParamsRequest;
                    fromAmino(_: _101.QueryClientParamsRequestAmino): _101.QueryClientParamsRequest;
                    toAmino(_: _101.QueryClientParamsRequest): _101.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _101.QueryClientParamsRequestAminoMsg): _101.QueryClientParamsRequest;
                    toAminoMsg(message: _101.QueryClientParamsRequest): _101.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryClientParamsRequestProtoMsg): _101.QueryClientParamsRequest;
                    toProto(message: _101.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryClientParamsRequest): _101.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    encode(message: _101.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryClientParamsResponse;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _101.QueryClientParamsResponse;
                    fromAmino(object: _101.QueryClientParamsResponseAmino): _101.QueryClientParamsResponse;
                    toAmino(message: _101.QueryClientParamsResponse): _101.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _101.QueryClientParamsResponseAminoMsg): _101.QueryClientParamsResponse;
                    toAminoMsg(message: _101.QueryClientParamsResponse): _101.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryClientParamsResponseProtoMsg): _101.QueryClientParamsResponse;
                    toProto(message: _101.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryClientParamsResponse): _101.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _101.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryUpgradedClientStateRequest;
                    fromPartial(_: {}): _101.QueryUpgradedClientStateRequest;
                    fromAmino(_: _101.QueryUpgradedClientStateRequestAmino): _101.QueryUpgradedClientStateRequest;
                    toAmino(_: _101.QueryUpgradedClientStateRequest): _101.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _101.QueryUpgradedClientStateRequestAminoMsg): _101.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _101.QueryUpgradedClientStateRequest): _101.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryUpgradedClientStateRequestProtoMsg): _101.QueryUpgradedClientStateRequest;
                    toProto(message: _101.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryUpgradedClientStateRequest): _101.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _101.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryUpgradedClientStateResponse;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _101.QueryUpgradedClientStateResponse;
                    fromAmino(object: _101.QueryUpgradedClientStateResponseAmino): _101.QueryUpgradedClientStateResponse;
                    toAmino(message: _101.QueryUpgradedClientStateResponse): _101.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _101.QueryUpgradedClientStateResponseAminoMsg): _101.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _101.QueryUpgradedClientStateResponse): _101.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryUpgradedClientStateResponseProtoMsg): _101.QueryUpgradedClientStateResponse;
                    toProto(message: _101.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryUpgradedClientStateResponse): _101.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _101.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: {}): _101.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _101.QueryUpgradedConsensusStateRequestAmino): _101.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _101.QueryUpgradedConsensusStateRequest): _101.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _101.QueryUpgradedConsensusStateRequestAminoMsg): _101.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _101.QueryUpgradedConsensusStateRequest): _101.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryUpgradedConsensusStateRequestProtoMsg): _101.QueryUpgradedConsensusStateRequest;
                    toProto(message: _101.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryUpgradedConsensusStateRequest): _101.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _101.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _101.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _101.QueryUpgradedConsensusStateResponseAmino): _101.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _101.QueryUpgradedConsensusStateResponse): _101.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _101.QueryUpgradedConsensusStateResponseAminoMsg): _101.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _101.QueryUpgradedConsensusStateResponse): _101.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryUpgradedConsensusStateResponseProtoMsg): _101.QueryUpgradedConsensusStateResponse;
                    toProto(message: _101.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryUpgradedConsensusStateResponse): _101.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _100.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisState;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string | number | import("long").Long;
                                    revisionHeight?: string | number | import("long").Long;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: string | number | import("long").Long;
                    }): _100.GenesisState;
                    fromAmino(object: _100.GenesisStateAmino): _100.GenesisState;
                    toAmino(message: _100.GenesisState): _100.GenesisStateAmino;
                    fromAminoMsg(object: _100.GenesisStateAminoMsg): _100.GenesisState;
                    toAminoMsg(message: _100.GenesisState): _100.GenesisStateAminoMsg;
                    fromProtoMsg(message: _100.GenesisStateProtoMsg): _100.GenesisState;
                    toProto(message: _100.GenesisState): Uint8Array;
                    toProtoMsg(message: _100.GenesisState): _100.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    encode(message: _100.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisMetadata;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _100.GenesisMetadata;
                    fromAmino(object: _100.GenesisMetadataAmino): _100.GenesisMetadata;
                    toAmino(message: _100.GenesisMetadata): _100.GenesisMetadataAmino;
                    fromAminoMsg(object: _100.GenesisMetadataAminoMsg): _100.GenesisMetadata;
                    toAminoMsg(message: _100.GenesisMetadata): _100.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _100.GenesisMetadataProtoMsg): _100.GenesisMetadata;
                    toProto(message: _100.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _100.GenesisMetadata): _100.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _100.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.IdentifiedGenesisMetadata;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _100.IdentifiedGenesisMetadata;
                    fromAmino(object: _100.IdentifiedGenesisMetadataAmino): _100.IdentifiedGenesisMetadata;
                    toAmino(message: _100.IdentifiedGenesisMetadata): _100.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _100.IdentifiedGenesisMetadataAminoMsg): _100.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _100.IdentifiedGenesisMetadata): _100.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _100.IdentifiedGenesisMetadataProtoMsg): _100.IdentifiedGenesisMetadata;
                    toProto(message: _100.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _100.IdentifiedGenesisMetadata): _100.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    encode(message: _99.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.IdentifiedClientState;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _99.IdentifiedClientState;
                    fromAmino(object: _99.IdentifiedClientStateAmino): _99.IdentifiedClientState;
                    toAmino(message: _99.IdentifiedClientState): _99.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _99.IdentifiedClientStateAminoMsg): _99.IdentifiedClientState;
                    toAminoMsg(message: _99.IdentifiedClientState): _99.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _99.IdentifiedClientStateProtoMsg): _99.IdentifiedClientState;
                    toProto(message: _99.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _99.IdentifiedClientState): _99.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    encode(message: _99.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ConsensusStateWithHeight;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _99.ConsensusStateWithHeight;
                    fromAmino(object: _99.ConsensusStateWithHeightAmino): _99.ConsensusStateWithHeight;
                    toAmino(message: _99.ConsensusStateWithHeight): _99.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _99.ConsensusStateWithHeightAminoMsg): _99.ConsensusStateWithHeight;
                    toAminoMsg(message: _99.ConsensusStateWithHeight): _99.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _99.ConsensusStateWithHeightProtoMsg): _99.ConsensusStateWithHeight;
                    toProto(message: _99.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _99.ConsensusStateWithHeight): _99.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    encode(message: _99.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ClientConsensusStates;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _99.ClientConsensusStates;
                    fromAmino(object: _99.ClientConsensusStatesAmino): _99.ClientConsensusStates;
                    toAmino(message: _99.ClientConsensusStates): _99.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _99.ClientConsensusStatesAminoMsg): _99.ClientConsensusStates;
                    toAminoMsg(message: _99.ClientConsensusStates): _99.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _99.ClientConsensusStatesProtoMsg): _99.ClientConsensusStates;
                    toProto(message: _99.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _99.ClientConsensusStates): _99.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    encode(message: _99.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ClientUpdateProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _99.ClientUpdateProposal;
                    fromAmino(object: _99.ClientUpdateProposalAmino): _99.ClientUpdateProposal;
                    toAmino(message: _99.ClientUpdateProposal): _99.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _99.ClientUpdateProposalAminoMsg): _99.ClientUpdateProposal;
                    toAminoMsg(message: _99.ClientUpdateProposal): _99.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _99.ClientUpdateProposalProtoMsg): _99.ClientUpdateProposal;
                    toProto(message: _99.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _99.ClientUpdateProposal): _99.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    encode(message: _99.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.UpgradeProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: string | number | import("long").Long;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _99.UpgradeProposal;
                    fromAmino(object: _99.UpgradeProposalAmino): _99.UpgradeProposal;
                    toAmino(message: _99.UpgradeProposal): _99.UpgradeProposalAmino;
                    fromAminoMsg(object: _99.UpgradeProposalAminoMsg): _99.UpgradeProposal;
                    toAminoMsg(message: _99.UpgradeProposal): _99.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _99.UpgradeProposalProtoMsg): _99.UpgradeProposal;
                    toProto(message: _99.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _99.UpgradeProposal): _99.UpgradeProposalProtoMsg;
                };
                Height: {
                    encode(message: _99.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Height;
                    fromPartial(object: {
                        revisionNumber?: string | number | import("long").Long;
                        revisionHeight?: string | number | import("long").Long;
                    }): _99.Height;
                    fromAmino(object: _99.HeightAmino): _99.Height;
                    toAmino(message: _99.Height): _99.HeightAmino;
                    fromAminoMsg(object: _99.HeightAminoMsg): _99.Height;
                    toAminoMsg(message: _99.Height): _99.HeightAminoMsg;
                    fromProtoMsg(message: _99.HeightProtoMsg): _99.Height;
                    toProto(message: _99.Height): Uint8Array;
                    toProtoMsg(message: _99.Height): _99.HeightProtoMsg;
                };
                Params: {
                    encode(message: _99.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Params;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _99.Params;
                    fromAmino(object: _99.ParamsAmino): _99.Params;
                    toAmino(message: _99.Params): _99.ParamsAmino;
                    fromAminoMsg(object: _99.ParamsAminoMsg): _99.Params;
                    toAminoMsg(message: _99.Params): _99.ParamsAminoMsg;
                    fromProtoMsg(message: _99.ParamsProtoMsg): _99.Params;
                    toProto(message: _99.Params): Uint8Array;
                    toProtoMsg(message: _99.Params): _99.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _103.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MerkleRoot;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _103.MerkleRoot;
                    fromAmino(object: _103.MerkleRootAmino): _103.MerkleRoot;
                    toAmino(message: _103.MerkleRoot): _103.MerkleRootAmino;
                    fromAminoMsg(object: _103.MerkleRootAminoMsg): _103.MerkleRoot;
                    toAminoMsg(message: _103.MerkleRoot): _103.MerkleRootAminoMsg;
                    fromProtoMsg(message: _103.MerkleRootProtoMsg): _103.MerkleRoot;
                    toProto(message: _103.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _103.MerkleRoot): _103.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    encode(message: _103.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MerklePrefix;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _103.MerklePrefix;
                    fromAmino(object: _103.MerklePrefixAmino): _103.MerklePrefix;
                    toAmino(message: _103.MerklePrefix): _103.MerklePrefixAmino;
                    fromAminoMsg(object: _103.MerklePrefixAminoMsg): _103.MerklePrefix;
                    toAminoMsg(message: _103.MerklePrefix): _103.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _103.MerklePrefixProtoMsg): _103.MerklePrefix;
                    toProto(message: _103.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _103.MerklePrefix): _103.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    encode(message: _103.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MerklePath;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _103.MerklePath;
                    fromAmino(object: _103.MerklePathAmino): _103.MerklePath;
                    toAmino(message: _103.MerklePath): _103.MerklePathAmino;
                    fromAminoMsg(object: _103.MerklePathAminoMsg): _103.MerklePath;
                    toAminoMsg(message: _103.MerklePath): _103.MerklePathAminoMsg;
                    fromProtoMsg(message: _103.MerklePathProtoMsg): _103.MerklePath;
                    toProto(message: _103.MerklePath): Uint8Array;
                    toProtoMsg(message: _103.MerklePath): _103.MerklePathProtoMsg;
                };
                MerkleProof: {
                    encode(message: _103.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MerkleProof;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _103.MerkleProof;
                    fromAmino(object: _103.MerkleProofAmino): _103.MerkleProof;
                    toAmino(message: _103.MerkleProof): _103.MerkleProofAmino;
                    fromAminoMsg(object: _103.MerkleProofAminoMsg): _103.MerkleProof;
                    toAminoMsg(message: _103.MerkleProof): _103.MerkleProofAminoMsg;
                    fromProtoMsg(message: _103.MerkleProofProtoMsg): _103.MerkleProof;
                    toProto(message: _103.MerkleProof): Uint8Array;
                    toProtoMsg(message: _103.MerkleProof): _103.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _167.MsgClientImpl;
                QueryClientImpl: typeof _162.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _106.QueryConnectionRequest): Promise<_106.QueryConnectionResponse>;
                    connections(request?: _106.QueryConnectionsRequest): Promise<_106.QueryConnectionsResponse>;
                    clientConnections(request: _106.QueryClientConnectionsRequest): Promise<_106.QueryClientConnectionsResponse>;
                    connectionClientState(request: _106.QueryConnectionClientStateRequest): Promise<_106.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _106.QueryConnectionConsensusStateRequest): Promise<_106.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _107.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _107.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _107.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _107.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _107.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _107.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _107.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _107.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _107.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _107.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _107.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _107.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _107.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _107.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _107.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _107.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _107.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _107.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _107.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _107.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _107.MsgConnectionOpenInit) => _107.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _107.MsgConnectionOpenInitAmino) => _107.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _107.MsgConnectionOpenTry) => _107.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _107.MsgConnectionOpenTryAmino) => _107.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _107.MsgConnectionOpenAck) => _107.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _107.MsgConnectionOpenAckAmino) => _107.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _107.MsgConnectionOpenConfirm) => _107.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _107.MsgConnectionOpenConfirmAmino) => _107.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _107.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgConnectionOpenInit;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: string | number | import("long").Long;
                        signer?: string;
                    }): _107.MsgConnectionOpenInit;
                    fromAmino(object: _107.MsgConnectionOpenInitAmino): _107.MsgConnectionOpenInit;
                    toAmino(message: _107.MsgConnectionOpenInit): _107.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _107.MsgConnectionOpenInitAminoMsg): _107.MsgConnectionOpenInit;
                    toAminoMsg(message: _107.MsgConnectionOpenInit): _107.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _107.MsgConnectionOpenInitProtoMsg): _107.MsgConnectionOpenInit;
                    toProto(message: _107.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _107.MsgConnectionOpenInit): _107.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _107.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgConnectionOpenInitResponse;
                    fromPartial(_: {}): _107.MsgConnectionOpenInitResponse;
                    fromAmino(_: _107.MsgConnectionOpenInitResponseAmino): _107.MsgConnectionOpenInitResponse;
                    toAmino(_: _107.MsgConnectionOpenInitResponse): _107.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _107.MsgConnectionOpenInitResponseAminoMsg): _107.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _107.MsgConnectionOpenInitResponse): _107.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _107.MsgConnectionOpenInitResponseProtoMsg): _107.MsgConnectionOpenInitResponse;
                    toProto(message: _107.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _107.MsgConnectionOpenInitResponse): _107.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    encode(message: _107.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgConnectionOpenTry;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long").Long;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _107.MsgConnectionOpenTry;
                    fromAmino(object: _107.MsgConnectionOpenTryAmino): _107.MsgConnectionOpenTry;
                    toAmino(message: _107.MsgConnectionOpenTry): _107.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _107.MsgConnectionOpenTryAminoMsg): _107.MsgConnectionOpenTry;
                    toAminoMsg(message: _107.MsgConnectionOpenTry): _107.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _107.MsgConnectionOpenTryProtoMsg): _107.MsgConnectionOpenTry;
                    toProto(message: _107.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _107.MsgConnectionOpenTry): _107.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _107.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgConnectionOpenTryResponse;
                    fromPartial(_: {}): _107.MsgConnectionOpenTryResponse;
                    fromAmino(_: _107.MsgConnectionOpenTryResponseAmino): _107.MsgConnectionOpenTryResponse;
                    toAmino(_: _107.MsgConnectionOpenTryResponse): _107.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _107.MsgConnectionOpenTryResponseAminoMsg): _107.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _107.MsgConnectionOpenTryResponse): _107.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _107.MsgConnectionOpenTryResponseProtoMsg): _107.MsgConnectionOpenTryResponse;
                    toProto(message: _107.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _107.MsgConnectionOpenTryResponse): _107.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    encode(message: _107.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgConnectionOpenAck;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _107.MsgConnectionOpenAck;
                    fromAmino(object: _107.MsgConnectionOpenAckAmino): _107.MsgConnectionOpenAck;
                    toAmino(message: _107.MsgConnectionOpenAck): _107.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _107.MsgConnectionOpenAckAminoMsg): _107.MsgConnectionOpenAck;
                    toAminoMsg(message: _107.MsgConnectionOpenAck): _107.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _107.MsgConnectionOpenAckProtoMsg): _107.MsgConnectionOpenAck;
                    toProto(message: _107.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _107.MsgConnectionOpenAck): _107.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _107.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgConnectionOpenAckResponse;
                    fromPartial(_: {}): _107.MsgConnectionOpenAckResponse;
                    fromAmino(_: _107.MsgConnectionOpenAckResponseAmino): _107.MsgConnectionOpenAckResponse;
                    toAmino(_: _107.MsgConnectionOpenAckResponse): _107.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _107.MsgConnectionOpenAckResponseAminoMsg): _107.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _107.MsgConnectionOpenAckResponse): _107.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _107.MsgConnectionOpenAckResponseProtoMsg): _107.MsgConnectionOpenAckResponse;
                    toProto(message: _107.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _107.MsgConnectionOpenAckResponse): _107.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _107.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgConnectionOpenConfirm;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _107.MsgConnectionOpenConfirm;
                    fromAmino(object: _107.MsgConnectionOpenConfirmAmino): _107.MsgConnectionOpenConfirm;
                    toAmino(message: _107.MsgConnectionOpenConfirm): _107.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _107.MsgConnectionOpenConfirmAminoMsg): _107.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _107.MsgConnectionOpenConfirm): _107.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _107.MsgConnectionOpenConfirmProtoMsg): _107.MsgConnectionOpenConfirm;
                    toProto(message: _107.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _107.MsgConnectionOpenConfirm): _107.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _107.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: {}): _107.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _107.MsgConnectionOpenConfirmResponseAmino): _107.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _107.MsgConnectionOpenConfirmResponse): _107.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _107.MsgConnectionOpenConfirmResponseAminoMsg): _107.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _107.MsgConnectionOpenConfirmResponse): _107.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _107.MsgConnectionOpenConfirmResponseProtoMsg): _107.MsgConnectionOpenConfirmResponse;
                    toProto(message: _107.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _107.MsgConnectionOpenConfirmResponse): _107.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    encode(message: _106.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryConnectionRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _106.QueryConnectionRequest;
                    fromAmino(object: _106.QueryConnectionRequestAmino): _106.QueryConnectionRequest;
                    toAmino(message: _106.QueryConnectionRequest): _106.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _106.QueryConnectionRequestAminoMsg): _106.QueryConnectionRequest;
                    toAminoMsg(message: _106.QueryConnectionRequest): _106.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryConnectionRequestProtoMsg): _106.QueryConnectionRequest;
                    toProto(message: _106.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryConnectionRequest): _106.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    encode(message: _106.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryConnectionResponse;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _104.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _106.QueryConnectionResponse;
                    fromAmino(object: _106.QueryConnectionResponseAmino): _106.QueryConnectionResponse;
                    toAmino(message: _106.QueryConnectionResponse): _106.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _106.QueryConnectionResponseAminoMsg): _106.QueryConnectionResponse;
                    toAminoMsg(message: _106.QueryConnectionResponse): _106.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryConnectionResponseProtoMsg): _106.QueryConnectionResponse;
                    toProto(message: _106.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryConnectionResponse): _106.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    encode(message: _106.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryConnectionsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _106.QueryConnectionsRequest;
                    fromAmino(object: _106.QueryConnectionsRequestAmino): _106.QueryConnectionsRequest;
                    toAmino(message: _106.QueryConnectionsRequest): _106.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _106.QueryConnectionsRequestAminoMsg): _106.QueryConnectionsRequest;
                    toAminoMsg(message: _106.QueryConnectionsRequest): _106.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryConnectionsRequestProtoMsg): _106.QueryConnectionsRequest;
                    toProto(message: _106.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryConnectionsRequest): _106.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    encode(message: _106.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryConnectionsResponse;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _104.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _106.QueryConnectionsResponse;
                    fromAmino(object: _106.QueryConnectionsResponseAmino): _106.QueryConnectionsResponse;
                    toAmino(message: _106.QueryConnectionsResponse): _106.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _106.QueryConnectionsResponseAminoMsg): _106.QueryConnectionsResponse;
                    toAminoMsg(message: _106.QueryConnectionsResponse): _106.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryConnectionsResponseProtoMsg): _106.QueryConnectionsResponse;
                    toProto(message: _106.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryConnectionsResponse): _106.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _106.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryClientConnectionsRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _106.QueryClientConnectionsRequest;
                    fromAmino(object: _106.QueryClientConnectionsRequestAmino): _106.QueryClientConnectionsRequest;
                    toAmino(message: _106.QueryClientConnectionsRequest): _106.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _106.QueryClientConnectionsRequestAminoMsg): _106.QueryClientConnectionsRequest;
                    toAminoMsg(message: _106.QueryClientConnectionsRequest): _106.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryClientConnectionsRequestProtoMsg): _106.QueryClientConnectionsRequest;
                    toProto(message: _106.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryClientConnectionsRequest): _106.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _106.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryClientConnectionsResponse;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _106.QueryClientConnectionsResponse;
                    fromAmino(object: _106.QueryClientConnectionsResponseAmino): _106.QueryClientConnectionsResponse;
                    toAmino(message: _106.QueryClientConnectionsResponse): _106.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _106.QueryClientConnectionsResponseAminoMsg): _106.QueryClientConnectionsResponse;
                    toAminoMsg(message: _106.QueryClientConnectionsResponse): _106.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryClientConnectionsResponseProtoMsg): _106.QueryClientConnectionsResponse;
                    toProto(message: _106.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryClientConnectionsResponse): _106.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _106.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryConnectionClientStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _106.QueryConnectionClientStateRequest;
                    fromAmino(object: _106.QueryConnectionClientStateRequestAmino): _106.QueryConnectionClientStateRequest;
                    toAmino(message: _106.QueryConnectionClientStateRequest): _106.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _106.QueryConnectionClientStateRequestAminoMsg): _106.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _106.QueryConnectionClientStateRequest): _106.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryConnectionClientStateRequestProtoMsg): _106.QueryConnectionClientStateRequest;
                    toProto(message: _106.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryConnectionClientStateRequest): _106.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _106.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryConnectionClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _106.QueryConnectionClientStateResponse;
                    fromAmino(object: _106.QueryConnectionClientStateResponseAmino): _106.QueryConnectionClientStateResponse;
                    toAmino(message: _106.QueryConnectionClientStateResponse): _106.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _106.QueryConnectionClientStateResponseAminoMsg): _106.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _106.QueryConnectionClientStateResponse): _106.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryConnectionClientStateResponseProtoMsg): _106.QueryConnectionClientStateResponse;
                    toProto(message: _106.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryConnectionClientStateResponse): _106.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _106.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryConnectionConsensusStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: string | number | import("long").Long;
                        revisionHeight?: string | number | import("long").Long;
                    }): _106.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _106.QueryConnectionConsensusStateRequestAmino): _106.QueryConnectionConsensusStateRequest;
                    toAmino(message: _106.QueryConnectionConsensusStateRequest): _106.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _106.QueryConnectionConsensusStateRequestAminoMsg): _106.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _106.QueryConnectionConsensusStateRequest): _106.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryConnectionConsensusStateRequestProtoMsg): _106.QueryConnectionConsensusStateRequest;
                    toProto(message: _106.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryConnectionConsensusStateRequest): _106.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _106.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryConnectionConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _106.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _106.QueryConnectionConsensusStateResponseAmino): _106.QueryConnectionConsensusStateResponse;
                    toAmino(message: _106.QueryConnectionConsensusStateResponse): _106.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _106.QueryConnectionConsensusStateResponseAminoMsg): _106.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _106.QueryConnectionConsensusStateResponse): _106.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryConnectionConsensusStateResponseProtoMsg): _106.QueryConnectionConsensusStateResponse;
                    toProto(message: _106.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryConnectionConsensusStateResponse): _106.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _105.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GenesisState;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _104.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: string | number | import("long").Long;
                        params?: {
                            maxExpectedTimePerBlock?: string | number | import("long").Long;
                        };
                    }): _105.GenesisState;
                    fromAmino(object: _105.GenesisStateAmino): _105.GenesisState;
                    toAmino(message: _105.GenesisState): _105.GenesisStateAmino;
                    fromAminoMsg(object: _105.GenesisStateAminoMsg): _105.GenesisState;
                    toAminoMsg(message: _105.GenesisState): _105.GenesisStateAminoMsg;
                    fromProtoMsg(message: _105.GenesisStateProtoMsg): _105.GenesisState;
                    toProto(message: _105.GenesisState): Uint8Array;
                    toProtoMsg(message: _105.GenesisState): _105.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _104.State;
                stateToJSON(object: _104.State): string;
                State: typeof _104.State;
                StateSDKType: typeof _104.State;
                StateAmino: typeof _104.State;
                ConnectionEnd: {
                    encode(message: _104.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ConnectionEnd;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _104.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long").Long;
                    }): _104.ConnectionEnd;
                    fromAmino(object: _104.ConnectionEndAmino): _104.ConnectionEnd;
                    toAmino(message: _104.ConnectionEnd): _104.ConnectionEndAmino;
                    fromAminoMsg(object: _104.ConnectionEndAminoMsg): _104.ConnectionEnd;
                    toAminoMsg(message: _104.ConnectionEnd): _104.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _104.ConnectionEndProtoMsg): _104.ConnectionEnd;
                    toProto(message: _104.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _104.ConnectionEnd): _104.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    encode(message: _104.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.IdentifiedConnection;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _104.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long").Long;
                    }): _104.IdentifiedConnection;
                    fromAmino(object: _104.IdentifiedConnectionAmino): _104.IdentifiedConnection;
                    toAmino(message: _104.IdentifiedConnection): _104.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _104.IdentifiedConnectionAminoMsg): _104.IdentifiedConnection;
                    toAminoMsg(message: _104.IdentifiedConnection): _104.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _104.IdentifiedConnectionProtoMsg): _104.IdentifiedConnection;
                    toProto(message: _104.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _104.IdentifiedConnection): _104.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    encode(message: _104.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Counterparty;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _104.Counterparty;
                    fromAmino(object: _104.CounterpartyAmino): _104.Counterparty;
                    toAmino(message: _104.Counterparty): _104.CounterpartyAmino;
                    fromAminoMsg(object: _104.CounterpartyAminoMsg): _104.Counterparty;
                    toAminoMsg(message: _104.Counterparty): _104.CounterpartyAminoMsg;
                    fromProtoMsg(message: _104.CounterpartyProtoMsg): _104.Counterparty;
                    toProto(message: _104.Counterparty): Uint8Array;
                    toProtoMsg(message: _104.Counterparty): _104.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    encode(message: _104.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ClientPaths;
                    fromPartial(object: {
                        paths?: string[];
                    }): _104.ClientPaths;
                    fromAmino(object: _104.ClientPathsAmino): _104.ClientPaths;
                    toAmino(message: _104.ClientPaths): _104.ClientPathsAmino;
                    fromAminoMsg(object: _104.ClientPathsAminoMsg): _104.ClientPaths;
                    toAminoMsg(message: _104.ClientPaths): _104.ClientPathsAminoMsg;
                    fromProtoMsg(message: _104.ClientPathsProtoMsg): _104.ClientPaths;
                    toProto(message: _104.ClientPaths): Uint8Array;
                    toProtoMsg(message: _104.ClientPaths): _104.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    encode(message: _104.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ConnectionPaths;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _104.ConnectionPaths;
                    fromAmino(object: _104.ConnectionPathsAmino): _104.ConnectionPaths;
                    toAmino(message: _104.ConnectionPaths): _104.ConnectionPathsAmino;
                    fromAminoMsg(object: _104.ConnectionPathsAminoMsg): _104.ConnectionPaths;
                    toAminoMsg(message: _104.ConnectionPaths): _104.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _104.ConnectionPathsProtoMsg): _104.ConnectionPaths;
                    toProto(message: _104.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _104.ConnectionPaths): _104.ConnectionPathsProtoMsg;
                };
                Version: {
                    encode(message: _104.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Version;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _104.Version;
                    fromAmino(object: _104.VersionAmino): _104.Version;
                    toAmino(message: _104.Version): _104.VersionAmino;
                    fromAminoMsg(object: _104.VersionAminoMsg): _104.Version;
                    toAminoMsg(message: _104.Version): _104.VersionAminoMsg;
                    fromProtoMsg(message: _104.VersionProtoMsg): _104.Version;
                    toProto(message: _104.Version): Uint8Array;
                    toProtoMsg(message: _104.Version): _104.VersionProtoMsg;
                };
                Params: {
                    encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: string | number | import("long").Long;
                    }): _104.Params;
                    fromAmino(object: _104.ParamsAmino): _104.Params;
                    toAmino(message: _104.Params): _104.ParamsAmino;
                    fromAminoMsg(object: _104.ParamsAminoMsg): _104.Params;
                    toAminoMsg(message: _104.Params): _104.ParamsAminoMsg;
                    fromProtoMsg(message: _104.ParamsProtoMsg): _104.Params;
                    toProto(message: _104.Params): Uint8Array;
                    toProtoMsg(message: _104.Params): _104.ParamsProtoMsg;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _163.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _108.QueryAppVersionRequest): Promise<_108.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    encode(message: _108.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryAppVersionRequest;
                    fromPartial(object: {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _95.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    }): _108.QueryAppVersionRequest;
                    fromAmino(object: _108.QueryAppVersionRequestAmino): _108.QueryAppVersionRequest;
                    toAmino(message: _108.QueryAppVersionRequest): _108.QueryAppVersionRequestAmino;
                    fromAminoMsg(object: _108.QueryAppVersionRequestAminoMsg): _108.QueryAppVersionRequest;
                    toAminoMsg(message: _108.QueryAppVersionRequest): _108.QueryAppVersionRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryAppVersionRequestProtoMsg): _108.QueryAppVersionRequest;
                    toProto(message: _108.QueryAppVersionRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryAppVersionRequest): _108.QueryAppVersionRequestProtoMsg;
                };
                QueryAppVersionResponse: {
                    encode(message: _108.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryAppVersionResponse;
                    fromPartial(object: {
                        portId?: string;
                        version?: string;
                    }): _108.QueryAppVersionResponse;
                    fromAmino(object: _108.QueryAppVersionResponseAmino): _108.QueryAppVersionResponse;
                    toAmino(message: _108.QueryAppVersionResponse): _108.QueryAppVersionResponseAmino;
                    fromAminoMsg(object: _108.QueryAppVersionResponseAminoMsg): _108.QueryAppVersionResponse;
                    toAminoMsg(message: _108.QueryAppVersionResponse): _108.QueryAppVersionResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryAppVersionResponseProtoMsg): _108.QueryAppVersionResponse;
                    toProto(message: _108.QueryAppVersionResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryAppVersionResponse): _108.QueryAppVersionResponseProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
                    fromPartial(object: {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: string | number | import("long").Long;
                                        revisionHeight?: string | number | import("long").Long;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: string | number | import("long").Long;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _104.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: string | number | import("long").Long;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: string | number | import("long").Long;
                            params?: {
                                maxExpectedTimePerBlock?: string | number | import("long").Long;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _95.State;
                                ordering?: _95.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").Long;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").Long;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").Long;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").Long;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").Long;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").Long;
                            }[];
                            nextChannelSequence?: string | number | import("long").Long;
                        };
                    }): _109.GenesisState;
                    fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                    toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                    fromAminoMsg(object: _109.GenesisStateAminoMsg): _109.GenesisState;
                    toAminoMsg(message: _109.GenesisState): _109.GenesisStateAminoMsg;
                    fromProtoMsg(message: _109.GenesisStateProtoMsg): _109.GenesisState;
                    toProto(message: _109.GenesisState): Uint8Array;
                    toProtoMsg(message: _109.GenesisState): _109.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _110.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _110.ClientState;
                    fromAmino(object: _110.ClientStateAmino): _110.ClientState;
                    toAmino(message: _110.ClientState): _110.ClientStateAmino;
                    fromAminoMsg(object: _110.ClientStateAminoMsg): _110.ClientState;
                    toAminoMsg(message: _110.ClientState): _110.ClientStateAminoMsg;
                    fromProtoMsg(message: _110.ClientStateProtoMsg): _110.ClientState;
                    toProto(message: _110.ClientState): Uint8Array;
                    toProtoMsg(message: _110.ClientState): _110.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _111.DataType;
                dataTypeToJSON(object: _111.DataType): string;
                DataType: typeof _111.DataType;
                DataTypeSDKType: typeof _111.DataType;
                DataTypeAmino: typeof _111.DataType;
                ClientState: {
                    encode(message: _111.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientState;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        frozenSequence?: string | number | import("long").Long;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long").Long;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _111.ClientState;
                    fromAmino(object: _111.ClientStateAmino): _111.ClientState;
                    toAmino(message: _111.ClientState): _111.ClientStateAmino;
                    fromAminoMsg(object: _111.ClientStateAminoMsg): _111.ClientState;
                    toAminoMsg(message: _111.ClientState): _111.ClientStateAminoMsg;
                    fromProtoMsg(message: _111.ClientStateProtoMsg): _111.ClientState;
                    toProto(message: _111.ClientState): Uint8Array;
                    toProtoMsg(message: _111.ClientState): _111.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _111.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long").Long;
                    }): _111.ConsensusState;
                    fromAmino(object: _111.ConsensusStateAmino): _111.ConsensusState;
                    toAmino(message: _111.ConsensusState): _111.ConsensusStateAmino;
                    fromAminoMsg(object: _111.ConsensusStateAminoMsg): _111.ConsensusState;
                    toAminoMsg(message: _111.ConsensusState): _111.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _111.ConsensusStateProtoMsg): _111.ConsensusState;
                    toProto(message: _111.ConsensusState): Uint8Array;
                    toProtoMsg(message: _111.ConsensusState): _111.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _111.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Header;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _111.Header;
                    fromAmino(object: _111.HeaderAmino): _111.Header;
                    toAmino(message: _111.Header): _111.HeaderAmino;
                    fromAminoMsg(object: _111.HeaderAminoMsg): _111.Header;
                    toAminoMsg(message: _111.Header): _111.HeaderAminoMsg;
                    fromProtoMsg(message: _111.HeaderProtoMsg): _111.Header;
                    toProto(message: _111.Header): Uint8Array;
                    toProtoMsg(message: _111.Header): _111.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _111.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long").Long;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _111.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _111.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                    }): _111.Misbehaviour;
                    fromAmino(object: _111.MisbehaviourAmino): _111.Misbehaviour;
                    toAmino(message: _111.Misbehaviour): _111.MisbehaviourAmino;
                    fromAminoMsg(object: _111.MisbehaviourAminoMsg): _111.Misbehaviour;
                    toAminoMsg(message: _111.Misbehaviour): _111.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _111.MisbehaviourProtoMsg): _111.Misbehaviour;
                    toProto(message: _111.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _111.Misbehaviour): _111.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _111.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _111.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _111.SignatureAndData;
                    fromAmino(object: _111.SignatureAndDataAmino): _111.SignatureAndData;
                    toAmino(message: _111.SignatureAndData): _111.SignatureAndDataAmino;
                    fromAminoMsg(object: _111.SignatureAndDataAminoMsg): _111.SignatureAndData;
                    toAminoMsg(message: _111.SignatureAndData): _111.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _111.SignatureAndDataProtoMsg): _111.SignatureAndData;
                    toProto(message: _111.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _111.SignatureAndData): _111.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _111.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _111.TimestampedSignatureData;
                    fromAmino(object: _111.TimestampedSignatureDataAmino): _111.TimestampedSignatureData;
                    toAmino(message: _111.TimestampedSignatureData): _111.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _111.TimestampedSignatureDataAminoMsg): _111.TimestampedSignatureData;
                    toAminoMsg(message: _111.TimestampedSignatureData): _111.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _111.TimestampedSignatureDataProtoMsg): _111.TimestampedSignatureData;
                    toProto(message: _111.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _111.TimestampedSignatureData): _111.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _111.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.SignBytes;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        diversifier?: string;
                        dataType?: _111.DataType;
                        data?: Uint8Array;
                    }): _111.SignBytes;
                    fromAmino(object: _111.SignBytesAmino): _111.SignBytes;
                    toAmino(message: _111.SignBytes): _111.SignBytesAmino;
                    fromAminoMsg(object: _111.SignBytesAminoMsg): _111.SignBytes;
                    toAminoMsg(message: _111.SignBytes): _111.SignBytesAminoMsg;
                    fromProtoMsg(message: _111.SignBytesProtoMsg): _111.SignBytes;
                    toProto(message: _111.SignBytes): Uint8Array;
                    toProtoMsg(message: _111.SignBytes): _111.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _111.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _111.HeaderData;
                    fromAmino(object: _111.HeaderDataAmino): _111.HeaderData;
                    toAmino(message: _111.HeaderData): _111.HeaderDataAmino;
                    fromAminoMsg(object: _111.HeaderDataAminoMsg): _111.HeaderData;
                    toAminoMsg(message: _111.HeaderData): _111.HeaderDataAminoMsg;
                    fromProtoMsg(message: _111.HeaderDataProtoMsg): _111.HeaderData;
                    toProto(message: _111.HeaderData): Uint8Array;
                    toProtoMsg(message: _111.HeaderData): _111.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _111.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _111.ClientStateData;
                    fromAmino(object: _111.ClientStateDataAmino): _111.ClientStateData;
                    toAmino(message: _111.ClientStateData): _111.ClientStateDataAmino;
                    fromAminoMsg(object: _111.ClientStateDataAminoMsg): _111.ClientStateData;
                    toAminoMsg(message: _111.ClientStateData): _111.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _111.ClientStateDataProtoMsg): _111.ClientStateData;
                    toProto(message: _111.ClientStateData): Uint8Array;
                    toProtoMsg(message: _111.ClientStateData): _111.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _111.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _111.ConsensusStateData;
                    fromAmino(object: _111.ConsensusStateDataAmino): _111.ConsensusStateData;
                    toAmino(message: _111.ConsensusStateData): _111.ConsensusStateDataAmino;
                    fromAminoMsg(object: _111.ConsensusStateDataAminoMsg): _111.ConsensusStateData;
                    toAminoMsg(message: _111.ConsensusStateData): _111.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _111.ConsensusStateDataProtoMsg): _111.ConsensusStateData;
                    toProto(message: _111.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _111.ConsensusStateData): _111.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _111.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _104.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        };
                    }): _111.ConnectionStateData;
                    fromAmino(object: _111.ConnectionStateDataAmino): _111.ConnectionStateData;
                    toAmino(message: _111.ConnectionStateData): _111.ConnectionStateDataAmino;
                    fromAminoMsg(object: _111.ConnectionStateDataAminoMsg): _111.ConnectionStateData;
                    toAminoMsg(message: _111.ConnectionStateData): _111.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _111.ConnectionStateDataProtoMsg): _111.ConnectionStateData;
                    toProto(message: _111.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _111.ConnectionStateData): _111.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _111.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _95.State;
                            ordering?: _95.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _111.ChannelStateData;
                    fromAmino(object: _111.ChannelStateDataAmino): _111.ChannelStateData;
                    toAmino(message: _111.ChannelStateData): _111.ChannelStateDataAmino;
                    fromAminoMsg(object: _111.ChannelStateDataAminoMsg): _111.ChannelStateData;
                    toAminoMsg(message: _111.ChannelStateData): _111.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _111.ChannelStateDataProtoMsg): _111.ChannelStateData;
                    toProto(message: _111.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _111.ChannelStateData): _111.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _111.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _111.PacketCommitmentData;
                    fromAmino(object: _111.PacketCommitmentDataAmino): _111.PacketCommitmentData;
                    toAmino(message: _111.PacketCommitmentData): _111.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _111.PacketCommitmentDataAminoMsg): _111.PacketCommitmentData;
                    toAminoMsg(message: _111.PacketCommitmentData): _111.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _111.PacketCommitmentDataProtoMsg): _111.PacketCommitmentData;
                    toProto(message: _111.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _111.PacketCommitmentData): _111.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _111.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _111.PacketAcknowledgementData;
                    fromAmino(object: _111.PacketAcknowledgementDataAmino): _111.PacketAcknowledgementData;
                    toAmino(message: _111.PacketAcknowledgementData): _111.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _111.PacketAcknowledgementDataAminoMsg): _111.PacketAcknowledgementData;
                    toAminoMsg(message: _111.PacketAcknowledgementData): _111.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _111.PacketAcknowledgementDataProtoMsg): _111.PacketAcknowledgementData;
                    toProto(message: _111.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _111.PacketAcknowledgementData): _111.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _111.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _111.PacketReceiptAbsenceData;
                    fromAmino(object: _111.PacketReceiptAbsenceDataAmino): _111.PacketReceiptAbsenceData;
                    toAmino(message: _111.PacketReceiptAbsenceData): _111.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _111.PacketReceiptAbsenceDataAminoMsg): _111.PacketReceiptAbsenceData;
                    toAminoMsg(message: _111.PacketReceiptAbsenceData): _111.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _111.PacketReceiptAbsenceDataProtoMsg): _111.PacketReceiptAbsenceData;
                    toProto(message: _111.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _111.PacketReceiptAbsenceData): _111.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _111.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long").Long;
                    }): _111.NextSequenceRecvData;
                    fromAmino(object: _111.NextSequenceRecvDataAmino): _111.NextSequenceRecvData;
                    toAmino(message: _111.NextSequenceRecvData): _111.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _111.NextSequenceRecvDataAminoMsg): _111.NextSequenceRecvData;
                    toAminoMsg(message: _111.NextSequenceRecvData): _111.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _111.NextSequenceRecvDataProtoMsg): _111.NextSequenceRecvData;
                    toProto(message: _111.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _111.NextSequenceRecvData): _111.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _112.DataType;
                dataTypeToJSON(object: _112.DataType): string;
                DataType: typeof _112.DataType;
                DataTypeSDKType: typeof _112.DataType;
                DataTypeAmino: typeof _112.DataType;
                ClientState: {
                    encode(message: _112.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ClientState;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long").Long;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _112.ClientState;
                    fromAmino(object: _112.ClientStateAmino): _112.ClientState;
                    toAmino(message: _112.ClientState): _112.ClientStateAmino;
                    fromAminoMsg(object: _112.ClientStateAminoMsg): _112.ClientState;
                    toAminoMsg(message: _112.ClientState): _112.ClientStateAminoMsg;
                    fromProtoMsg(message: _112.ClientStateProtoMsg): _112.ClientState;
                    toProto(message: _112.ClientState): Uint8Array;
                    toProtoMsg(message: _112.ClientState): _112.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _112.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long").Long;
                    }): _112.ConsensusState;
                    fromAmino(object: _112.ConsensusStateAmino): _112.ConsensusState;
                    toAmino(message: _112.ConsensusState): _112.ConsensusStateAmino;
                    fromAminoMsg(object: _112.ConsensusStateAminoMsg): _112.ConsensusState;
                    toAminoMsg(message: _112.ConsensusState): _112.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _112.ConsensusStateProtoMsg): _112.ConsensusState;
                    toProto(message: _112.ConsensusState): Uint8Array;
                    toProtoMsg(message: _112.ConsensusState): _112.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _112.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Header;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _112.Header;
                    fromAmino(object: _112.HeaderAmino): _112.Header;
                    toAmino(message: _112.Header): _112.HeaderAmino;
                    fromAminoMsg(object: _112.HeaderAminoMsg): _112.Header;
                    toAminoMsg(message: _112.Header): _112.HeaderAminoMsg;
                    fromProtoMsg(message: _112.HeaderProtoMsg): _112.Header;
                    toProto(message: _112.Header): Uint8Array;
                    toProtoMsg(message: _112.Header): _112.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _112.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long").Long;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _112.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _112.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                    }): _112.Misbehaviour;
                    fromAmino(object: _112.MisbehaviourAmino): _112.Misbehaviour;
                    toAmino(message: _112.Misbehaviour): _112.MisbehaviourAmino;
                    fromAminoMsg(object: _112.MisbehaviourAminoMsg): _112.Misbehaviour;
                    toAminoMsg(message: _112.Misbehaviour): _112.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _112.MisbehaviourProtoMsg): _112.Misbehaviour;
                    toProto(message: _112.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _112.Misbehaviour): _112.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _112.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _112.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _112.SignatureAndData;
                    fromAmino(object: _112.SignatureAndDataAmino): _112.SignatureAndData;
                    toAmino(message: _112.SignatureAndData): _112.SignatureAndDataAmino;
                    fromAminoMsg(object: _112.SignatureAndDataAminoMsg): _112.SignatureAndData;
                    toAminoMsg(message: _112.SignatureAndData): _112.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _112.SignatureAndDataProtoMsg): _112.SignatureAndData;
                    toProto(message: _112.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _112.SignatureAndData): _112.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _112.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _112.TimestampedSignatureData;
                    fromAmino(object: _112.TimestampedSignatureDataAmino): _112.TimestampedSignatureData;
                    toAmino(message: _112.TimestampedSignatureData): _112.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _112.TimestampedSignatureDataAminoMsg): _112.TimestampedSignatureData;
                    toAminoMsg(message: _112.TimestampedSignatureData): _112.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _112.TimestampedSignatureDataProtoMsg): _112.TimestampedSignatureData;
                    toProto(message: _112.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _112.TimestampedSignatureData): _112.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _112.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.SignBytes;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        diversifier?: string;
                        dataType?: _112.DataType;
                        data?: Uint8Array;
                    }): _112.SignBytes;
                    fromAmino(object: _112.SignBytesAmino): _112.SignBytes;
                    toAmino(message: _112.SignBytes): _112.SignBytesAmino;
                    fromAminoMsg(object: _112.SignBytesAminoMsg): _112.SignBytes;
                    toAminoMsg(message: _112.SignBytes): _112.SignBytesAminoMsg;
                    fromProtoMsg(message: _112.SignBytesProtoMsg): _112.SignBytes;
                    toProto(message: _112.SignBytes): Uint8Array;
                    toProtoMsg(message: _112.SignBytes): _112.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _112.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _112.HeaderData;
                    fromAmino(object: _112.HeaderDataAmino): _112.HeaderData;
                    toAmino(message: _112.HeaderData): _112.HeaderDataAmino;
                    fromAminoMsg(object: _112.HeaderDataAminoMsg): _112.HeaderData;
                    toAminoMsg(message: _112.HeaderData): _112.HeaderDataAminoMsg;
                    fromProtoMsg(message: _112.HeaderDataProtoMsg): _112.HeaderData;
                    toProto(message: _112.HeaderData): Uint8Array;
                    toProtoMsg(message: _112.HeaderData): _112.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _112.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _112.ClientStateData;
                    fromAmino(object: _112.ClientStateDataAmino): _112.ClientStateData;
                    toAmino(message: _112.ClientStateData): _112.ClientStateDataAmino;
                    fromAminoMsg(object: _112.ClientStateDataAminoMsg): _112.ClientStateData;
                    toAminoMsg(message: _112.ClientStateData): _112.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _112.ClientStateDataProtoMsg): _112.ClientStateData;
                    toProto(message: _112.ClientStateData): Uint8Array;
                    toProtoMsg(message: _112.ClientStateData): _112.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _112.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _112.ConsensusStateData;
                    fromAmino(object: _112.ConsensusStateDataAmino): _112.ConsensusStateData;
                    toAmino(message: _112.ConsensusStateData): _112.ConsensusStateDataAmino;
                    fromAminoMsg(object: _112.ConsensusStateDataAminoMsg): _112.ConsensusStateData;
                    toAminoMsg(message: _112.ConsensusStateData): _112.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _112.ConsensusStateDataProtoMsg): _112.ConsensusStateData;
                    toProto(message: _112.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _112.ConsensusStateData): _112.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _112.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _104.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        };
                    }): _112.ConnectionStateData;
                    fromAmino(object: _112.ConnectionStateDataAmino): _112.ConnectionStateData;
                    toAmino(message: _112.ConnectionStateData): _112.ConnectionStateDataAmino;
                    fromAminoMsg(object: _112.ConnectionStateDataAminoMsg): _112.ConnectionStateData;
                    toAminoMsg(message: _112.ConnectionStateData): _112.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _112.ConnectionStateDataProtoMsg): _112.ConnectionStateData;
                    toProto(message: _112.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _112.ConnectionStateData): _112.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _112.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _95.State;
                            ordering?: _95.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _112.ChannelStateData;
                    fromAmino(object: _112.ChannelStateDataAmino): _112.ChannelStateData;
                    toAmino(message: _112.ChannelStateData): _112.ChannelStateDataAmino;
                    fromAminoMsg(object: _112.ChannelStateDataAminoMsg): _112.ChannelStateData;
                    toAminoMsg(message: _112.ChannelStateData): _112.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _112.ChannelStateDataProtoMsg): _112.ChannelStateData;
                    toProto(message: _112.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _112.ChannelStateData): _112.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _112.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _112.PacketCommitmentData;
                    fromAmino(object: _112.PacketCommitmentDataAmino): _112.PacketCommitmentData;
                    toAmino(message: _112.PacketCommitmentData): _112.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _112.PacketCommitmentDataAminoMsg): _112.PacketCommitmentData;
                    toAminoMsg(message: _112.PacketCommitmentData): _112.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _112.PacketCommitmentDataProtoMsg): _112.PacketCommitmentData;
                    toProto(message: _112.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _112.PacketCommitmentData): _112.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _112.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _112.PacketAcknowledgementData;
                    fromAmino(object: _112.PacketAcknowledgementDataAmino): _112.PacketAcknowledgementData;
                    toAmino(message: _112.PacketAcknowledgementData): _112.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _112.PacketAcknowledgementDataAminoMsg): _112.PacketAcknowledgementData;
                    toAminoMsg(message: _112.PacketAcknowledgementData): _112.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _112.PacketAcknowledgementDataProtoMsg): _112.PacketAcknowledgementData;
                    toProto(message: _112.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _112.PacketAcknowledgementData): _112.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _112.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _112.PacketReceiptAbsenceData;
                    fromAmino(object: _112.PacketReceiptAbsenceDataAmino): _112.PacketReceiptAbsenceData;
                    toAmino(message: _112.PacketReceiptAbsenceData): _112.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _112.PacketReceiptAbsenceDataAminoMsg): _112.PacketReceiptAbsenceData;
                    toAminoMsg(message: _112.PacketReceiptAbsenceData): _112.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _112.PacketReceiptAbsenceDataProtoMsg): _112.PacketReceiptAbsenceData;
                    toProto(message: _112.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _112.PacketReceiptAbsenceData): _112.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _112.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long").Long;
                    }): _112.NextSequenceRecvData;
                    fromAmino(object: _112.NextSequenceRecvDataAmino): _112.NextSequenceRecvData;
                    toAmino(message: _112.NextSequenceRecvData): _112.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _112.NextSequenceRecvDataAminoMsg): _112.NextSequenceRecvData;
                    toAminoMsg(message: _112.NextSequenceRecvData): _112.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _112.NextSequenceRecvDataProtoMsg): _112.NextSequenceRecvData;
                    toProto(message: _112.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _112.NextSequenceRecvData): _112.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _113.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: string | number | import("long").Long;
                            denominator?: string | number | import("long").Long;
                        };
                        trustingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        latestHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _113.ClientState;
                    fromAmino(object: _113.ClientStateAmino): _113.ClientState;
                    toAmino(message: _113.ClientState): _113.ClientStateAmino;
                    fromAminoMsg(object: _113.ClientStateAminoMsg): _113.ClientState;
                    toAminoMsg(message: _113.ClientState): _113.ClientStateAminoMsg;
                    fromProtoMsg(message: _113.ClientStateProtoMsg): _113.ClientState;
                    toProto(message: _113.ClientState): Uint8Array;
                    toProtoMsg(message: _113.ClientState): _113.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _113.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ConsensusState;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _113.ConsensusState;
                    fromAmino(object: _113.ConsensusStateAmino): _113.ConsensusState;
                    toAmino(message: _113.ConsensusState): _113.ConsensusStateAmino;
                    fromAminoMsg(object: _113.ConsensusStateAminoMsg): _113.ConsensusState;
                    toAminoMsg(message: _113.ConsensusState): _113.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _113.ConsensusStateProtoMsg): _113.ConsensusState;
                    toProto(message: _113.ConsensusState): Uint8Array;
                    toProtoMsg(message: _113.ConsensusState): _113.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _113.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        header1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").Long;
                                        app?: string | number | import("long").Long;
                                    };
                                    chainId?: string;
                                    height?: string | number | import("long").Long;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long").Long;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                };
                                totalVotingPower?: string | number | import("long").Long;
                            };
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                };
                                totalVotingPower?: string | number | import("long").Long;
                            };
                        };
                        header2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").Long;
                                        app?: string | number | import("long").Long;
                                    };
                                    chainId?: string;
                                    height?: string | number | import("long").Long;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long").Long;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                };
                                totalVotingPower?: string | number | import("long").Long;
                            };
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                };
                                totalVotingPower?: string | number | import("long").Long;
                            };
                        };
                    }): _113.Misbehaviour;
                    fromAmino(object: _113.MisbehaviourAmino): _113.Misbehaviour;
                    toAmino(message: _113.Misbehaviour): _113.MisbehaviourAmino;
                    fromAminoMsg(object: _113.MisbehaviourAminoMsg): _113.Misbehaviour;
                    toAminoMsg(message: _113.Misbehaviour): _113.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _113.MisbehaviourProtoMsg): _113.Misbehaviour;
                    toProto(message: _113.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _113.Misbehaviour): _113.MisbehaviourProtoMsg;
                };
                Header: {
                    encode(message: _113.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Header;
                    fromPartial(object: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long;
                                    app?: string | number | import("long").Long;
                                };
                                chainId?: string;
                                height?: string | number | import("long").Long;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: string | number | import("long").Long;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").Long;
                                proposerPriority?: string | number | import("long").Long;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").Long;
                                proposerPriority?: string | number | import("long").Long;
                            };
                            totalVotingPower?: string | number | import("long").Long;
                        };
                        trustedHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").Long;
                                proposerPriority?: string | number | import("long").Long;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").Long;
                                proposerPriority?: string | number | import("long").Long;
                            };
                            totalVotingPower?: string | number | import("long").Long;
                        };
                    }): _113.Header;
                    fromAmino(object: _113.HeaderAmino): _113.Header;
                    toAmino(message: _113.Header): _113.HeaderAmino;
                    fromAminoMsg(object: _113.HeaderAminoMsg): _113.Header;
                    toAminoMsg(message: _113.Header): _113.HeaderAminoMsg;
                    fromProtoMsg(message: _113.HeaderProtoMsg): _113.Header;
                    toProto(message: _113.Header): Uint8Array;
                    toProtoMsg(message: _113.Header): _113.HeaderProtoMsg;
                };
                Fraction: {
                    encode(message: _113.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Fraction;
                    fromPartial(object: {
                        numerator?: string | number | import("long").Long;
                        denominator?: string | number | import("long").Long;
                    }): _113.Fraction;
                    fromAmino(object: _113.FractionAmino): _113.Fraction;
                    toAmino(message: _113.Fraction): _113.FractionAmino;
                    fromAminoMsg(object: _113.FractionAminoMsg): _113.Fraction;
                    toAminoMsg(message: _113.Fraction): _113.FractionAminoMsg;
                    fromProtoMsg(message: _113.FractionProtoMsg): _113.Fraction;
                    toProto(message: _113.Fraction): Uint8Array;
                    toProtoMsg(message: _113.Fraction): _113.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _164.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _165.MsgClientImpl;
                    };
                    client: {
                        v1: _166.MsgClientImpl;
                    };
                    connection: {
                        v1: _167.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _91.QueryDenomTraceRequest): Promise<_91.QueryDenomTraceResponse>;
                            denomTraces(request?: _91.QueryDenomTracesRequest): Promise<_91.QueryDenomTracesResponse>;
                            params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _97.QueryChannelRequest): Promise<_97.QueryChannelResponse>;
                            channels(request?: _97.QueryChannelsRequest): Promise<_97.QueryChannelsResponse>;
                            connectionChannels(request: _97.QueryConnectionChannelsRequest): Promise<_97.QueryConnectionChannelsResponse>;
                            channelClientState(request: _97.QueryChannelClientStateRequest): Promise<_97.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _97.QueryChannelConsensusStateRequest): Promise<_97.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _97.QueryPacketCommitmentRequest): Promise<_97.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _97.QueryPacketCommitmentsRequest): Promise<_97.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _97.QueryPacketReceiptRequest): Promise<_97.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _97.QueryPacketAcknowledgementRequest): Promise<_97.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _97.QueryPacketAcknowledgementsRequest): Promise<_97.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _97.QueryUnreceivedPacketsRequest): Promise<_97.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _97.QueryUnreceivedAcksRequest): Promise<_97.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _97.QueryNextSequenceReceiveRequest): Promise<_97.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _101.QueryClientStateRequest): Promise<_101.QueryClientStateResponse>;
                            clientStates(request?: _101.QueryClientStatesRequest): Promise<_101.QueryClientStatesResponse>;
                            consensusState(request: _101.QueryConsensusStateRequest): Promise<_101.QueryConsensusStateResponse>;
                            consensusStates(request: _101.QueryConsensusStatesRequest): Promise<_101.QueryConsensusStatesResponse>;
                            clientStatus(request: _101.QueryClientStatusRequest): Promise<_101.QueryClientStatusResponse>;
                            clientParams(request?: _101.QueryClientParamsRequest): Promise<_101.QueryClientParamsResponse>;
                            upgradedClientState(request?: _101.QueryUpgradedClientStateRequest): Promise<_101.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _101.QueryUpgradedConsensusStateRequest): Promise<_101.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _106.QueryConnectionRequest): Promise<_106.QueryConnectionResponse>;
                            connections(request?: _106.QueryConnectionsRequest): Promise<_106.QueryConnectionsResponse>;
                            clientConnections(request: _106.QueryClientConnectionsRequest): Promise<_106.QueryClientConnectionsResponse>;
                            connectionClientState(request: _106.QueryConnectionClientStateRequest): Promise<_106.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _106.QueryConnectionConsensusStateRequest): Promise<_106.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _108.QueryAppVersionRequest): Promise<_108.QueryAppVersionResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
