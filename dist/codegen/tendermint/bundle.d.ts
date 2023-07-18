/// <reference types="long" />
import * as _57 from "./abci/types";
import * as _58 from "./crypto/keys";
import * as _59 from "./crypto/proof";
import * as _60 from "./libs/bits/types";
import * as _61 from "./p2p/types";
import * as _62 from "./types/block";
import * as _63 from "./types/evidence";
import * as _64 from "./types/params";
import * as _65 from "./types/types";
import * as _66 from "./types/validator";
import * as _67 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _57.CheckTxType;
        checkTxTypeToJSON(object: _57.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _57.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _57.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _57.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _57.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _57.EvidenceType;
        evidenceTypeToJSON(object: _57.EvidenceType): string;
        CheckTxType: typeof _57.CheckTxType;
        CheckTxTypeSDKType: typeof _57.CheckTxType;
        CheckTxTypeAmino: typeof _57.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _57.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _57.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _57.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _57.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _57.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _57.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _57.EvidenceType;
        EvidenceTypeSDKType: typeof _57.EvidenceType;
        EvidenceTypeAmino: typeof _57.EvidenceType;
        Request: {
            encode(message: _57.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Request;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: string | number | import("long").Long;
                    p2pVersion?: string | number | import("long").Long;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long;
                            maxGas?: string | number | import("long").Long;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").Long;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").Long;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").Long;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: string | number | import("long").Long;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string | number | import("long").Long;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
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
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long").Long;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _57.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").Long;
                        };
                        height?: string | number | import("long").Long;
                        time?: Date;
                        totalVotingPower?: string | number | import("long").Long;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _57.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: string | number | import("long").Long;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: string | number | import("long").Long;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _57.Request;
            fromAmino(object: _57.RequestAmino): _57.Request;
            toAmino(message: _57.Request): _57.RequestAmino;
            fromAminoMsg(object: _57.RequestAminoMsg): _57.Request;
            fromProtoMsg(message: _57.RequestProtoMsg): _57.Request;
            toProto(message: _57.Request): Uint8Array;
            toProtoMsg(message: _57.Request): _57.RequestProtoMsg;
        };
        RequestEcho: {
            encode(message: _57.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _57.RequestEcho;
            fromAmino(object: _57.RequestEchoAmino): _57.RequestEcho;
            toAmino(message: _57.RequestEcho): _57.RequestEchoAmino;
            fromAminoMsg(object: _57.RequestEchoAminoMsg): _57.RequestEcho;
            fromProtoMsg(message: _57.RequestEchoProtoMsg): _57.RequestEcho;
            toProto(message: _57.RequestEcho): Uint8Array;
            toProtoMsg(message: _57.RequestEcho): _57.RequestEchoProtoMsg;
        };
        RequestFlush: {
            encode(_: _57.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestFlush;
            fromPartial(_: {}): _57.RequestFlush;
            fromAmino(_: _57.RequestFlushAmino): _57.RequestFlush;
            toAmino(_: _57.RequestFlush): _57.RequestFlushAmino;
            fromAminoMsg(object: _57.RequestFlushAminoMsg): _57.RequestFlush;
            fromProtoMsg(message: _57.RequestFlushProtoMsg): _57.RequestFlush;
            toProto(message: _57.RequestFlush): Uint8Array;
            toProtoMsg(message: _57.RequestFlush): _57.RequestFlushProtoMsg;
        };
        RequestInfo: {
            encode(message: _57.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long").Long;
                p2pVersion?: string | number | import("long").Long;
            }): _57.RequestInfo;
            fromAmino(object: _57.RequestInfoAmino): _57.RequestInfo;
            toAmino(message: _57.RequestInfo): _57.RequestInfoAmino;
            fromAminoMsg(object: _57.RequestInfoAminoMsg): _57.RequestInfo;
            fromProtoMsg(message: _57.RequestInfoProtoMsg): _57.RequestInfo;
            toProto(message: _57.RequestInfo): Uint8Array;
            toProtoMsg(message: _57.RequestInfo): _57.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            encode(message: _57.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _57.RequestSetOption;
            fromAmino(object: _57.RequestSetOptionAmino): _57.RequestSetOption;
            toAmino(message: _57.RequestSetOption): _57.RequestSetOptionAmino;
            fromAminoMsg(object: _57.RequestSetOptionAminoMsg): _57.RequestSetOption;
            fromProtoMsg(message: _57.RequestSetOptionProtoMsg): _57.RequestSetOption;
            toProto(message: _57.RequestSetOption): Uint8Array;
            toProtoMsg(message: _57.RequestSetOption): _57.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            encode(message: _57.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestInitChain;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").Long;
                        maxGas?: string | number | import("long").Long;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").Long;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").Long;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").Long;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: string | number | import("long").Long;
            }): _57.RequestInitChain;
            fromAmino(object: _57.RequestInitChainAmino): _57.RequestInitChain;
            toAmino(message: _57.RequestInitChain): _57.RequestInitChainAmino;
            fromAminoMsg(object: _57.RequestInitChainAminoMsg): _57.RequestInitChain;
            fromProtoMsg(message: _57.RequestInitChainProtoMsg): _57.RequestInitChain;
            toProto(message: _57.RequestInitChain): Uint8Array;
            toProtoMsg(message: _57.RequestInitChain): _57.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            encode(message: _57.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long").Long;
                prove?: boolean;
            }): _57.RequestQuery;
            fromAmino(object: _57.RequestQueryAmino): _57.RequestQuery;
            toAmino(message: _57.RequestQuery): _57.RequestQueryAmino;
            fromAminoMsg(object: _57.RequestQueryAminoMsg): _57.RequestQuery;
            fromProtoMsg(message: _57.RequestQueryProtoMsg): _57.RequestQuery;
            toProto(message: _57.RequestQuery): Uint8Array;
            toProtoMsg(message: _57.RequestQuery): _57.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            encode(message: _57.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestBeginBlock;
            fromPartial(object: {
                hash?: Uint8Array;
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
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").Long;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _57.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    height?: string | number | import("long").Long;
                    time?: Date;
                    totalVotingPower?: string | number | import("long").Long;
                }[];
            }): _57.RequestBeginBlock;
            fromAmino(object: _57.RequestBeginBlockAmino): _57.RequestBeginBlock;
            toAmino(message: _57.RequestBeginBlock): _57.RequestBeginBlockAmino;
            fromAminoMsg(object: _57.RequestBeginBlockAminoMsg): _57.RequestBeginBlock;
            fromProtoMsg(message: _57.RequestBeginBlockProtoMsg): _57.RequestBeginBlock;
            toProto(message: _57.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _57.RequestBeginBlock): _57.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            encode(message: _57.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _57.CheckTxType;
            }): _57.RequestCheckTx;
            fromAmino(object: _57.RequestCheckTxAmino): _57.RequestCheckTx;
            toAmino(message: _57.RequestCheckTx): _57.RequestCheckTxAmino;
            fromAminoMsg(object: _57.RequestCheckTxAminoMsg): _57.RequestCheckTx;
            fromProtoMsg(message: _57.RequestCheckTxProtoMsg): _57.RequestCheckTx;
            toProto(message: _57.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _57.RequestCheckTx): _57.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            encode(message: _57.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _57.RequestDeliverTx;
            fromAmino(object: _57.RequestDeliverTxAmino): _57.RequestDeliverTx;
            toAmino(message: _57.RequestDeliverTx): _57.RequestDeliverTxAmino;
            fromAminoMsg(object: _57.RequestDeliverTxAminoMsg): _57.RequestDeliverTx;
            fromProtoMsg(message: _57.RequestDeliverTxProtoMsg): _57.RequestDeliverTx;
            toProto(message: _57.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _57.RequestDeliverTx): _57.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            encode(message: _57.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestEndBlock;
            fromPartial(object: {
                height?: string | number | import("long").Long;
            }): _57.RequestEndBlock;
            fromAmino(object: _57.RequestEndBlockAmino): _57.RequestEndBlock;
            toAmino(message: _57.RequestEndBlock): _57.RequestEndBlockAmino;
            fromAminoMsg(object: _57.RequestEndBlockAminoMsg): _57.RequestEndBlock;
            fromProtoMsg(message: _57.RequestEndBlockProtoMsg): _57.RequestEndBlock;
            toProto(message: _57.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _57.RequestEndBlock): _57.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            encode(_: _57.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestCommit;
            fromPartial(_: {}): _57.RequestCommit;
            fromAmino(_: _57.RequestCommitAmino): _57.RequestCommit;
            toAmino(_: _57.RequestCommit): _57.RequestCommitAmino;
            fromAminoMsg(object: _57.RequestCommitAminoMsg): _57.RequestCommit;
            fromProtoMsg(message: _57.RequestCommitProtoMsg): _57.RequestCommit;
            toProto(message: _57.RequestCommit): Uint8Array;
            toProtoMsg(message: _57.RequestCommit): _57.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            encode(_: _57.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestListSnapshots;
            fromPartial(_: {}): _57.RequestListSnapshots;
            fromAmino(_: _57.RequestListSnapshotsAmino): _57.RequestListSnapshots;
            toAmino(_: _57.RequestListSnapshots): _57.RequestListSnapshotsAmino;
            fromAminoMsg(object: _57.RequestListSnapshotsAminoMsg): _57.RequestListSnapshots;
            fromProtoMsg(message: _57.RequestListSnapshotsProtoMsg): _57.RequestListSnapshots;
            toProto(message: _57.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _57.RequestListSnapshots): _57.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            encode(message: _57.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _57.RequestOfferSnapshot;
            fromAmino(object: _57.RequestOfferSnapshotAmino): _57.RequestOfferSnapshot;
            toAmino(message: _57.RequestOfferSnapshot): _57.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _57.RequestOfferSnapshotAminoMsg): _57.RequestOfferSnapshot;
            fromProtoMsg(message: _57.RequestOfferSnapshotProtoMsg): _57.RequestOfferSnapshot;
            toProto(message: _57.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _57.RequestOfferSnapshot): _57.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _57.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunk?: number;
            }): _57.RequestLoadSnapshotChunk;
            fromAmino(object: _57.RequestLoadSnapshotChunkAmino): _57.RequestLoadSnapshotChunk;
            toAmino(message: _57.RequestLoadSnapshotChunk): _57.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _57.RequestLoadSnapshotChunkAminoMsg): _57.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _57.RequestLoadSnapshotChunkProtoMsg): _57.RequestLoadSnapshotChunk;
            toProto(message: _57.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _57.RequestLoadSnapshotChunk): _57.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            encode(message: _57.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _57.RequestApplySnapshotChunk;
            fromAmino(object: _57.RequestApplySnapshotChunkAmino): _57.RequestApplySnapshotChunk;
            toAmino(message: _57.RequestApplySnapshotChunk): _57.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _57.RequestApplySnapshotChunkAminoMsg): _57.RequestApplySnapshotChunk;
            fromProtoMsg(message: _57.RequestApplySnapshotChunkProtoMsg): _57.RequestApplySnapshotChunk;
            toProto(message: _57.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _57.RequestApplySnapshotChunk): _57.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            encode(message: _57.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Response;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: string | number | import("long").Long;
                    lastBlockHeight?: string | number | import("long").Long;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long;
                            maxGas?: string | number | import("long").Long;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").Long;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").Long;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").Long;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string | number | import("long").Long;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long").Long;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").Long;
                    gasUsed?: string | number | import("long").Long;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").Long;
                    gasUsed?: string | number | import("long").Long;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").Long;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long;
                            maxGas?: string | number | import("long").Long;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").Long;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").Long;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: string | number | import("long").Long;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: string | number | import("long").Long;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _57.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _57.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _57.Response;
            fromAmino(object: _57.ResponseAmino): _57.Response;
            toAmino(message: _57.Response): _57.ResponseAmino;
            fromAminoMsg(object: _57.ResponseAminoMsg): _57.Response;
            fromProtoMsg(message: _57.ResponseProtoMsg): _57.Response;
            toProto(message: _57.Response): Uint8Array;
            toProtoMsg(message: _57.Response): _57.ResponseProtoMsg;
        };
        ResponseException: {
            encode(message: _57.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _57.ResponseException;
            fromAmino(object: _57.ResponseExceptionAmino): _57.ResponseException;
            toAmino(message: _57.ResponseException): _57.ResponseExceptionAmino;
            fromAminoMsg(object: _57.ResponseExceptionAminoMsg): _57.ResponseException;
            fromProtoMsg(message: _57.ResponseExceptionProtoMsg): _57.ResponseException;
            toProto(message: _57.ResponseException): Uint8Array;
            toProtoMsg(message: _57.ResponseException): _57.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            encode(message: _57.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _57.ResponseEcho;
            fromAmino(object: _57.ResponseEchoAmino): _57.ResponseEcho;
            toAmino(message: _57.ResponseEcho): _57.ResponseEchoAmino;
            fromAminoMsg(object: _57.ResponseEchoAminoMsg): _57.ResponseEcho;
            fromProtoMsg(message: _57.ResponseEchoProtoMsg): _57.ResponseEcho;
            toProto(message: _57.ResponseEcho): Uint8Array;
            toProtoMsg(message: _57.ResponseEcho): _57.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            encode(_: _57.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseFlush;
            fromPartial(_: {}): _57.ResponseFlush;
            fromAmino(_: _57.ResponseFlushAmino): _57.ResponseFlush;
            toAmino(_: _57.ResponseFlush): _57.ResponseFlushAmino;
            fromAminoMsg(object: _57.ResponseFlushAminoMsg): _57.ResponseFlush;
            fromProtoMsg(message: _57.ResponseFlushProtoMsg): _57.ResponseFlush;
            toProto(message: _57.ResponseFlush): Uint8Array;
            toProtoMsg(message: _57.ResponseFlush): _57.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            encode(message: _57.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long").Long;
                lastBlockHeight?: string | number | import("long").Long;
                lastBlockAppHash?: Uint8Array;
            }): _57.ResponseInfo;
            fromAmino(object: _57.ResponseInfoAmino): _57.ResponseInfo;
            toAmino(message: _57.ResponseInfo): _57.ResponseInfoAmino;
            fromAminoMsg(object: _57.ResponseInfoAminoMsg): _57.ResponseInfo;
            fromProtoMsg(message: _57.ResponseInfoProtoMsg): _57.ResponseInfo;
            toProto(message: _57.ResponseInfo): Uint8Array;
            toProtoMsg(message: _57.ResponseInfo): _57.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            encode(message: _57.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _57.ResponseSetOption;
            fromAmino(object: _57.ResponseSetOptionAmino): _57.ResponseSetOption;
            toAmino(message: _57.ResponseSetOption): _57.ResponseSetOptionAmino;
            fromAminoMsg(object: _57.ResponseSetOptionAminoMsg): _57.ResponseSetOption;
            fromProtoMsg(message: _57.ResponseSetOptionProtoMsg): _57.ResponseSetOption;
            toProto(message: _57.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _57.ResponseSetOption): _57.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            encode(message: _57.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseInitChain;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").Long;
                        maxGas?: string | number | import("long").Long;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").Long;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").Long;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").Long;
                }[];
                appHash?: Uint8Array;
            }): _57.ResponseInitChain;
            fromAmino(object: _57.ResponseInitChainAmino): _57.ResponseInitChain;
            toAmino(message: _57.ResponseInitChain): _57.ResponseInitChainAmino;
            fromAminoMsg(object: _57.ResponseInitChainAminoMsg): _57.ResponseInitChain;
            fromProtoMsg(message: _57.ResponseInitChainProtoMsg): _57.ResponseInitChain;
            toProto(message: _57.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _57.ResponseInitChain): _57.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            encode(message: _57.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseQuery;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: string | number | import("long").Long;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: string | number | import("long").Long;
                codespace?: string;
            }): _57.ResponseQuery;
            fromAmino(object: _57.ResponseQueryAmino): _57.ResponseQuery;
            toAmino(message: _57.ResponseQuery): _57.ResponseQueryAmino;
            fromAminoMsg(object: _57.ResponseQueryAminoMsg): _57.ResponseQuery;
            fromProtoMsg(message: _57.ResponseQueryProtoMsg): _57.ResponseQuery;
            toProto(message: _57.ResponseQuery): Uint8Array;
            toProtoMsg(message: _57.ResponseQuery): _57.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            encode(message: _57.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _57.ResponseBeginBlock;
            fromAmino(object: _57.ResponseBeginBlockAmino): _57.ResponseBeginBlock;
            toAmino(message: _57.ResponseBeginBlock): _57.ResponseBeginBlockAmino;
            fromAminoMsg(object: _57.ResponseBeginBlockAminoMsg): _57.ResponseBeginBlock;
            fromProtoMsg(message: _57.ResponseBeginBlockProtoMsg): _57.ResponseBeginBlock;
            toProto(message: _57.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _57.ResponseBeginBlock): _57.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            encode(message: _57.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseCheckTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long").Long;
                gasUsed?: string | number | import("long").Long;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _57.ResponseCheckTx;
            fromAmino(object: _57.ResponseCheckTxAmino): _57.ResponseCheckTx;
            toAmino(message: _57.ResponseCheckTx): _57.ResponseCheckTxAmino;
            fromAminoMsg(object: _57.ResponseCheckTxAminoMsg): _57.ResponseCheckTx;
            fromProtoMsg(message: _57.ResponseCheckTxProtoMsg): _57.ResponseCheckTx;
            toProto(message: _57.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _57.ResponseCheckTx): _57.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            encode(message: _57.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseDeliverTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long").Long;
                gasUsed?: string | number | import("long").Long;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _57.ResponseDeliverTx;
            fromAmino(object: _57.ResponseDeliverTxAmino): _57.ResponseDeliverTx;
            toAmino(message: _57.ResponseDeliverTx): _57.ResponseDeliverTxAmino;
            fromAminoMsg(object: _57.ResponseDeliverTxAminoMsg): _57.ResponseDeliverTx;
            fromProtoMsg(message: _57.ResponseDeliverTxProtoMsg): _57.ResponseDeliverTx;
            toProto(message: _57.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _57.ResponseDeliverTx): _57.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            encode(message: _57.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseEndBlock;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").Long;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string | number | import("long").Long;
                        maxGas?: string | number | import("long").Long;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").Long;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").Long;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _57.ResponseEndBlock;
            fromAmino(object: _57.ResponseEndBlockAmino): _57.ResponseEndBlock;
            toAmino(message: _57.ResponseEndBlock): _57.ResponseEndBlockAmino;
            fromAminoMsg(object: _57.ResponseEndBlockAminoMsg): _57.ResponseEndBlock;
            fromProtoMsg(message: _57.ResponseEndBlockProtoMsg): _57.ResponseEndBlock;
            toProto(message: _57.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _57.ResponseEndBlock): _57.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            encode(message: _57.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long").Long;
            }): _57.ResponseCommit;
            fromAmino(object: _57.ResponseCommitAmino): _57.ResponseCommit;
            toAmino(message: _57.ResponseCommit): _57.ResponseCommitAmino;
            fromAminoMsg(object: _57.ResponseCommitAminoMsg): _57.ResponseCommit;
            fromProtoMsg(message: _57.ResponseCommitProtoMsg): _57.ResponseCommit;
            toProto(message: _57.ResponseCommit): Uint8Array;
            toProtoMsg(message: _57.ResponseCommit): _57.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            encode(message: _57.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _57.ResponseListSnapshots;
            fromAmino(object: _57.ResponseListSnapshotsAmino): _57.ResponseListSnapshots;
            toAmino(message: _57.ResponseListSnapshots): _57.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _57.ResponseListSnapshotsAminoMsg): _57.ResponseListSnapshots;
            fromProtoMsg(message: _57.ResponseListSnapshotsProtoMsg): _57.ResponseListSnapshots;
            toProto(message: _57.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _57.ResponseListSnapshots): _57.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            encode(message: _57.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _57.ResponseOfferSnapshot_Result;
            }): _57.ResponseOfferSnapshot;
            fromAmino(object: _57.ResponseOfferSnapshotAmino): _57.ResponseOfferSnapshot;
            toAmino(message: _57.ResponseOfferSnapshot): _57.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _57.ResponseOfferSnapshotAminoMsg): _57.ResponseOfferSnapshot;
            fromProtoMsg(message: _57.ResponseOfferSnapshotProtoMsg): _57.ResponseOfferSnapshot;
            toProto(message: _57.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _57.ResponseOfferSnapshot): _57.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _57.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _57.ResponseLoadSnapshotChunk;
            fromAmino(object: _57.ResponseLoadSnapshotChunkAmino): _57.ResponseLoadSnapshotChunk;
            toAmino(message: _57.ResponseLoadSnapshotChunk): _57.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _57.ResponseLoadSnapshotChunkAminoMsg): _57.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _57.ResponseLoadSnapshotChunkProtoMsg): _57.ResponseLoadSnapshotChunk;
            toProto(message: _57.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _57.ResponseLoadSnapshotChunk): _57.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _57.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _57.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _57.ResponseApplySnapshotChunk;
            fromAmino(object: _57.ResponseApplySnapshotChunkAmino): _57.ResponseApplySnapshotChunk;
            toAmino(message: _57.ResponseApplySnapshotChunk): _57.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _57.ResponseApplySnapshotChunkAminoMsg): _57.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _57.ResponseApplySnapshotChunkProtoMsg): _57.ResponseApplySnapshotChunk;
            toProto(message: _57.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _57.ResponseApplySnapshotChunk): _57.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            encode(message: _57.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long").Long;
                    maxGas?: string | number | import("long").Long;
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long").Long;
                    maxAgeDuration?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long").Long;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long").Long;
                };
            }): _57.ConsensusParams;
            fromAmino(object: _57.ConsensusParamsAmino): _57.ConsensusParams;
            toAmino(message: _57.ConsensusParams): _57.ConsensusParamsAmino;
            fromAminoMsg(object: _57.ConsensusParamsAminoMsg): _57.ConsensusParams;
            fromProtoMsg(message: _57.ConsensusParamsProtoMsg): _57.ConsensusParams;
            toProto(message: _57.ConsensusParams): Uint8Array;
            toProtoMsg(message: _57.ConsensusParams): _57.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            encode(message: _57.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long;
                maxGas?: string | number | import("long").Long;
            }): _57.BlockParams;
            fromAmino(object: _57.BlockParamsAmino): _57.BlockParams;
            toAmino(message: _57.BlockParams): _57.BlockParamsAmino;
            fromAminoMsg(object: _57.BlockParamsAminoMsg): _57.BlockParams;
            fromProtoMsg(message: _57.BlockParamsProtoMsg): _57.BlockParams;
            toProto(message: _57.BlockParams): Uint8Array;
            toProtoMsg(message: _57.BlockParams): _57.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            encode(message: _57.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _57.LastCommitInfo;
            fromAmino(object: _57.LastCommitInfoAmino): _57.LastCommitInfo;
            toAmino(message: _57.LastCommitInfo): _57.LastCommitInfoAmino;
            fromAminoMsg(object: _57.LastCommitInfoAminoMsg): _57.LastCommitInfo;
            fromProtoMsg(message: _57.LastCommitInfoProtoMsg): _57.LastCommitInfo;
            toProto(message: _57.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _57.LastCommitInfo): _57.LastCommitInfoProtoMsg;
        };
        Event: {
            encode(message: _57.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _57.Event;
            fromAmino(object: _57.EventAmino): _57.Event;
            toAmino(message: _57.Event): _57.EventAmino;
            fromAminoMsg(object: _57.EventAminoMsg): _57.Event;
            fromProtoMsg(message: _57.EventProtoMsg): _57.Event;
            toProto(message: _57.Event): Uint8Array;
            toProtoMsg(message: _57.Event): _57.EventProtoMsg;
        };
        EventAttribute: {
            encode(message: _57.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _57.EventAttribute;
            fromAmino(object: _57.EventAttributeAmino): _57.EventAttribute;
            toAmino(message: _57.EventAttribute): _57.EventAttributeAmino;
            fromAminoMsg(object: _57.EventAttributeAminoMsg): _57.EventAttribute;
            fromProtoMsg(message: _57.EventAttributeProtoMsg): _57.EventAttribute;
            toProto(message: _57.EventAttribute): Uint8Array;
            toProtoMsg(message: _57.EventAttribute): _57.EventAttributeProtoMsg;
        };
        TxResult: {
            encode(message: _57.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TxResult;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").Long;
                    gasUsed?: string | number | import("long").Long;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _57.TxResult;
            fromAmino(object: _57.TxResultAmino): _57.TxResult;
            toAmino(message: _57.TxResult): _57.TxResultAmino;
            fromAminoMsg(object: _57.TxResultAminoMsg): _57.TxResult;
            fromProtoMsg(message: _57.TxResultProtoMsg): _57.TxResult;
            toProto(message: _57.TxResult): Uint8Array;
            toProtoMsg(message: _57.TxResult): _57.TxResultProtoMsg;
        };
        Validator: {
            encode(message: _57.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long").Long;
            }): _57.Validator;
            fromAmino(object: _57.ValidatorAmino): _57.Validator;
            toAmino(message: _57.Validator): _57.ValidatorAmino;
            fromAminoMsg(object: _57.ValidatorAminoMsg): _57.Validator;
            fromProtoMsg(message: _57.ValidatorProtoMsg): _57.Validator;
            toProto(message: _57.Validator): Uint8Array;
            toProtoMsg(message: _57.Validator): _57.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            encode(message: _57.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long").Long;
            }): _57.ValidatorUpdate;
            fromAmino(object: _57.ValidatorUpdateAmino): _57.ValidatorUpdate;
            toAmino(message: _57.ValidatorUpdate): _57.ValidatorUpdateAmino;
            fromAminoMsg(object: _57.ValidatorUpdateAminoMsg): _57.ValidatorUpdate;
            fromProtoMsg(message: _57.ValidatorUpdateProtoMsg): _57.ValidatorUpdate;
            toProto(message: _57.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _57.ValidatorUpdate): _57.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            encode(message: _57.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                signedLastBlock?: boolean;
            }): _57.VoteInfo;
            fromAmino(object: _57.VoteInfoAmino): _57.VoteInfo;
            toAmino(message: _57.VoteInfo): _57.VoteInfoAmino;
            fromAminoMsg(object: _57.VoteInfoAminoMsg): _57.VoteInfo;
            fromProtoMsg(message: _57.VoteInfoProtoMsg): _57.VoteInfo;
            toProto(message: _57.VoteInfo): Uint8Array;
            toProtoMsg(message: _57.VoteInfo): _57.VoteInfoProtoMsg;
        };
        Evidence: {
            encode(message: _57.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Evidence;
            fromPartial(object: {
                type?: _57.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                height?: string | number | import("long").Long;
                time?: Date;
                totalVotingPower?: string | number | import("long").Long;
            }): _57.Evidence;
            fromAmino(object: _57.EvidenceAmino): _57.Evidence;
            toAmino(message: _57.Evidence): _57.EvidenceAmino;
            fromAminoMsg(object: _57.EvidenceAminoMsg): _57.Evidence;
            fromProtoMsg(message: _57.EvidenceProtoMsg): _57.Evidence;
            toProto(message: _57.Evidence): Uint8Array;
            toProtoMsg(message: _57.Evidence): _57.EvidenceProtoMsg;
        };
        Snapshot: {
            encode(message: _57.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _57.Snapshot;
            fromAmino(object: _57.SnapshotAmino): _57.Snapshot;
            toAmino(message: _57.Snapshot): _57.SnapshotAmino;
            fromAminoMsg(object: _57.SnapshotAminoMsg): _57.Snapshot;
            fromProtoMsg(message: _57.SnapshotProtoMsg): _57.Snapshot;
            toProto(message: _57.Snapshot): Uint8Array;
            toProtoMsg(message: _57.Snapshot): _57.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _59.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Proof;
            fromPartial(object: {
                total?: string | number | import("long").Long;
                index?: string | number | import("long").Long;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _59.Proof;
            fromAmino(object: _59.ProofAmino): _59.Proof;
            toAmino(message: _59.Proof): _59.ProofAmino;
            fromAminoMsg(object: _59.ProofAminoMsg): _59.Proof;
            fromProtoMsg(message: _59.ProofProtoMsg): _59.Proof;
            toProto(message: _59.Proof): Uint8Array;
            toProtoMsg(message: _59.Proof): _59.ProofProtoMsg;
        };
        ValueOp: {
            encode(message: _59.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _59.ValueOp;
            fromAmino(object: _59.ValueOpAmino): _59.ValueOp;
            toAmino(message: _59.ValueOp): _59.ValueOpAmino;
            fromAminoMsg(object: _59.ValueOpAminoMsg): _59.ValueOp;
            fromProtoMsg(message: _59.ValueOpProtoMsg): _59.ValueOp;
            toProto(message: _59.ValueOp): Uint8Array;
            toProtoMsg(message: _59.ValueOp): _59.ValueOpProtoMsg;
        };
        DominoOp: {
            encode(message: _59.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _59.DominoOp;
            fromAmino(object: _59.DominoOpAmino): _59.DominoOp;
            toAmino(message: _59.DominoOp): _59.DominoOpAmino;
            fromAminoMsg(object: _59.DominoOpAminoMsg): _59.DominoOp;
            fromProtoMsg(message: _59.DominoOpProtoMsg): _59.DominoOp;
            toProto(message: _59.DominoOp): Uint8Array;
            toProtoMsg(message: _59.DominoOp): _59.DominoOpProtoMsg;
        };
        ProofOp: {
            encode(message: _59.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _59.ProofOp;
            fromAmino(object: _59.ProofOpAmino): _59.ProofOp;
            toAmino(message: _59.ProofOp): _59.ProofOpAmino;
            fromAminoMsg(object: _59.ProofOpAminoMsg): _59.ProofOp;
            fromProtoMsg(message: _59.ProofOpProtoMsg): _59.ProofOp;
            toProto(message: _59.ProofOp): Uint8Array;
            toProtoMsg(message: _59.ProofOp): _59.ProofOpProtoMsg;
        };
        ProofOps: {
            encode(message: _59.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _59.ProofOps;
            fromAmino(object: _59.ProofOpsAmino): _59.ProofOps;
            toAmino(message: _59.ProofOps): _59.ProofOpsAmino;
            fromAminoMsg(object: _59.ProofOpsAminoMsg): _59.ProofOps;
            fromProtoMsg(message: _59.ProofOpsProtoMsg): _59.ProofOps;
            toProto(message: _59.ProofOps): Uint8Array;
            toProtoMsg(message: _59.ProofOps): _59.ProofOpsProtoMsg;
        };
        PublicKey: {
            encode(message: _58.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _58.PublicKey;
            fromAmino(object: _58.PublicKeyAmino): _58.PublicKey;
            toAmino(message: _58.PublicKey): _58.PublicKeyAmino;
            fromAminoMsg(object: _58.PublicKeyAminoMsg): _58.PublicKey;
            fromProtoMsg(message: _58.PublicKeyProtoMsg): _58.PublicKey;
            toProto(message: _58.PublicKey): Uint8Array;
            toProtoMsg(message: _58.PublicKey): _58.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _60.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long").Long;
                    elems?: (string | number | import("long").Long)[];
                }): _60.BitArray;
                fromAmino(object: _60.BitArrayAmino): _60.BitArray;
                toAmino(message: _60.BitArray): _60.BitArrayAmino;
                fromAminoMsg(object: _60.BitArrayAminoMsg): _60.BitArray;
                fromProtoMsg(message: _60.BitArrayProtoMsg): _60.BitArray;
                toProto(message: _60.BitArray): Uint8Array;
                toProtoMsg(message: _60.BitArray): _60.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _61.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.NetAddress;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _61.NetAddress;
            fromAmino(object: _61.NetAddressAmino): _61.NetAddress;
            toAmino(message: _61.NetAddress): _61.NetAddressAmino;
            fromAminoMsg(object: _61.NetAddressAminoMsg): _61.NetAddress;
            fromProtoMsg(message: _61.NetAddressProtoMsg): _61.NetAddress;
            toProto(message: _61.NetAddress): Uint8Array;
            toProtoMsg(message: _61.NetAddress): _61.NetAddressProtoMsg;
        };
        ProtocolVersion: {
            encode(message: _61.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long").Long;
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _61.ProtocolVersion;
            fromAmino(object: _61.ProtocolVersionAmino): _61.ProtocolVersion;
            toAmino(message: _61.ProtocolVersion): _61.ProtocolVersionAmino;
            fromAminoMsg(object: _61.ProtocolVersionAminoMsg): _61.ProtocolVersion;
            fromProtoMsg(message: _61.ProtocolVersionProtoMsg): _61.ProtocolVersion;
            toProto(message: _61.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _61.ProtocolVersion): _61.ProtocolVersionProtoMsg;
        };
        DefaultNodeInfo: {
            encode(message: _61.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.DefaultNodeInfo;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: string | number | import("long").Long;
                    block?: string | number | import("long").Long;
                    app?: string | number | import("long").Long;
                };
                defaultNodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _61.DefaultNodeInfo;
            fromAmino(object: _61.DefaultNodeInfoAmino): _61.DefaultNodeInfo;
            toAmino(message: _61.DefaultNodeInfo): _61.DefaultNodeInfoAmino;
            fromAminoMsg(object: _61.DefaultNodeInfoAminoMsg): _61.DefaultNodeInfo;
            fromProtoMsg(message: _61.DefaultNodeInfoProtoMsg): _61.DefaultNodeInfo;
            toProto(message: _61.DefaultNodeInfo): Uint8Array;
            toProtoMsg(message: _61.DefaultNodeInfo): _61.DefaultNodeInfoProtoMsg;
        };
        DefaultNodeInfoOther: {
            encode(message: _61.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.DefaultNodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _61.DefaultNodeInfoOther;
            fromAmino(object: _61.DefaultNodeInfoOtherAmino): _61.DefaultNodeInfoOther;
            toAmino(message: _61.DefaultNodeInfoOther): _61.DefaultNodeInfoOtherAmino;
            fromAminoMsg(object: _61.DefaultNodeInfoOtherAminoMsg): _61.DefaultNodeInfoOther;
            fromProtoMsg(message: _61.DefaultNodeInfoOtherProtoMsg): _61.DefaultNodeInfoOther;
            toProto(message: _61.DefaultNodeInfoOther): Uint8Array;
            toProtoMsg(message: _61.DefaultNodeInfoOther): _61.DefaultNodeInfoOtherProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _66.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ValidatorSet;
            fromPartial(object: {
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
            }): _66.ValidatorSet;
            fromAmino(object: _66.ValidatorSetAmino): _66.ValidatorSet;
            toAmino(message: _66.ValidatorSet): _66.ValidatorSetAmino;
            fromAminoMsg(object: _66.ValidatorSetAminoMsg): _66.ValidatorSet;
            fromProtoMsg(message: _66.ValidatorSetProtoMsg): _66.ValidatorSet;
            toProto(message: _66.ValidatorSet): Uint8Array;
            toProtoMsg(message: _66.ValidatorSet): _66.ValidatorSetProtoMsg;
        };
        Validator: {
            encode(message: _66.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
                proposerPriority?: string | number | import("long").Long;
            }): _66.Validator;
            fromAmino(object: _66.ValidatorAmino): _66.Validator;
            toAmino(message: _66.Validator): _66.ValidatorAmino;
            fromAminoMsg(object: _66.ValidatorAminoMsg): _66.Validator;
            fromProtoMsg(message: _66.ValidatorProtoMsg): _66.Validator;
            toProto(message: _66.Validator): Uint8Array;
            toProtoMsg(message: _66.Validator): _66.ValidatorProtoMsg;
        };
        SimpleValidator: {
            encode(message: _66.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
            }): _66.SimpleValidator;
            fromAmino(object: _66.SimpleValidatorAmino): _66.SimpleValidator;
            toAmino(message: _66.SimpleValidator): _66.SimpleValidatorAmino;
            fromAminoMsg(object: _66.SimpleValidatorAminoMsg): _66.SimpleValidator;
            fromProtoMsg(message: _66.SimpleValidatorProtoMsg): _66.SimpleValidator;
            toProto(message: _66.SimpleValidator): Uint8Array;
            toProtoMsg(message: _66.SimpleValidator): _66.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _65.BlockIDFlag;
        blockIDFlagToJSON(object: _65.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _65.SignedMsgType;
        signedMsgTypeToJSON(object: _65.SignedMsgType): string;
        BlockIDFlag: typeof _65.BlockIDFlag;
        BlockIDFlagSDKType: typeof _65.BlockIDFlag;
        BlockIDFlagAmino: typeof _65.BlockIDFlag;
        SignedMsgType: typeof _65.SignedMsgType;
        SignedMsgTypeSDKType: typeof _65.SignedMsgType;
        SignedMsgTypeAmino: typeof _65.SignedMsgType;
        PartSetHeader: {
            encode(message: _65.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _65.PartSetHeader;
            fromAmino(object: _65.PartSetHeaderAmino): _65.PartSetHeader;
            toAmino(message: _65.PartSetHeader): _65.PartSetHeaderAmino;
            fromAminoMsg(object: _65.PartSetHeaderAminoMsg): _65.PartSetHeader;
            fromProtoMsg(message: _65.PartSetHeaderProtoMsg): _65.PartSetHeader;
            toProto(message: _65.PartSetHeader): Uint8Array;
            toProtoMsg(message: _65.PartSetHeader): _65.PartSetHeaderProtoMsg;
        };
        Part: {
            encode(message: _65.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _65.Part;
            fromAmino(object: _65.PartAmino): _65.Part;
            toAmino(message: _65.Part): _65.PartAmino;
            fromAminoMsg(object: _65.PartAminoMsg): _65.Part;
            fromProtoMsg(message: _65.PartProtoMsg): _65.Part;
            toProto(message: _65.Part): Uint8Array;
            toProtoMsg(message: _65.Part): _65.PartProtoMsg;
        };
        BlockID: {
            encode(message: _65.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _65.BlockID;
            fromAmino(object: _65.BlockIDAmino): _65.BlockID;
            toAmino(message: _65.BlockID): _65.BlockIDAmino;
            fromAminoMsg(object: _65.BlockIDAminoMsg): _65.BlockID;
            fromProtoMsg(message: _65.BlockIDProtoMsg): _65.BlockID;
            toProto(message: _65.BlockID): Uint8Array;
            toProtoMsg(message: _65.BlockID): _65.BlockIDProtoMsg;
        };
        Header: {
            encode(message: _65.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Header;
            fromPartial(object: {
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
            }): _65.Header;
            fromAmino(object: _65.HeaderAmino): _65.Header;
            toAmino(message: _65.Header): _65.HeaderAmino;
            fromAminoMsg(object: _65.HeaderAminoMsg): _65.Header;
            fromProtoMsg(message: _65.HeaderProtoMsg): _65.Header;
            toProto(message: _65.Header): Uint8Array;
            toProtoMsg(message: _65.Header): _65.HeaderProtoMsg;
        };
        Data: {
            encode(message: _65.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _65.Data;
            fromAmino(object: _65.DataAmino): _65.Data;
            toAmino(message: _65.Data): _65.DataAmino;
            fromAminoMsg(object: _65.DataAminoMsg): _65.Data;
            fromProtoMsg(message: _65.DataProtoMsg): _65.Data;
            toProto(message: _65.Data): Uint8Array;
            toProtoMsg(message: _65.Data): _65.DataProtoMsg;
        };
        Vote: {
            encode(message: _65.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Vote;
            fromPartial(object: {
                type?: _65.SignedMsgType;
                height?: string | number | import("long").Long;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _65.Vote;
            fromAmino(object: _65.VoteAmino): _65.Vote;
            toAmino(message: _65.Vote): _65.VoteAmino;
            fromAminoMsg(object: _65.VoteAminoMsg): _65.Vote;
            fromProtoMsg(message: _65.VoteProtoMsg): _65.Vote;
            toProto(message: _65.Vote): Uint8Array;
            toProtoMsg(message: _65.Vote): _65.VoteProtoMsg;
        };
        Commit: {
            encode(message: _65.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Commit;
            fromPartial(object: {
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
                    blockIdFlag?: _65.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _65.Commit;
            fromAmino(object: _65.CommitAmino): _65.Commit;
            toAmino(message: _65.Commit): _65.CommitAmino;
            fromAminoMsg(object: _65.CommitAminoMsg): _65.Commit;
            fromProtoMsg(message: _65.CommitProtoMsg): _65.Commit;
            toProto(message: _65.Commit): Uint8Array;
            toProtoMsg(message: _65.Commit): _65.CommitProtoMsg;
        };
        CommitSig: {
            encode(message: _65.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _65.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _65.CommitSig;
            fromAmino(object: _65.CommitSigAmino): _65.CommitSig;
            toAmino(message: _65.CommitSig): _65.CommitSigAmino;
            fromAminoMsg(object: _65.CommitSigAminoMsg): _65.CommitSig;
            fromProtoMsg(message: _65.CommitSigProtoMsg): _65.CommitSig;
            toProto(message: _65.CommitSig): Uint8Array;
            toProtoMsg(message: _65.CommitSig): _65.CommitSigProtoMsg;
        };
        Proposal: {
            encode(message: _65.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Proposal;
            fromPartial(object: {
                type?: _65.SignedMsgType;
                height?: string | number | import("long").Long;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _65.Proposal;
            fromAmino(object: _65.ProposalAmino): _65.Proposal;
            toAmino(message: _65.Proposal): _65.ProposalAmino;
            fromAminoMsg(object: _65.ProposalAminoMsg): _65.Proposal;
            fromProtoMsg(message: _65.ProposalProtoMsg): _65.Proposal;
            toProto(message: _65.Proposal): Uint8Array;
            toProtoMsg(message: _65.Proposal): _65.ProposalProtoMsg;
        };
        SignedHeader: {
            encode(message: _65.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SignedHeader;
            fromPartial(object: {
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
                        blockIdFlag?: _65.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _65.SignedHeader;
            fromAmino(object: _65.SignedHeaderAmino): _65.SignedHeader;
            toAmino(message: _65.SignedHeader): _65.SignedHeaderAmino;
            fromAminoMsg(object: _65.SignedHeaderAminoMsg): _65.SignedHeader;
            fromProtoMsg(message: _65.SignedHeaderProtoMsg): _65.SignedHeader;
            toProto(message: _65.SignedHeader): Uint8Array;
            toProtoMsg(message: _65.SignedHeader): _65.SignedHeaderProtoMsg;
        };
        LightBlock: {
            encode(message: _65.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.LightBlock;
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
                            blockIdFlag?: _65.BlockIDFlag;
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
            }): _65.LightBlock;
            fromAmino(object: _65.LightBlockAmino): _65.LightBlock;
            toAmino(message: _65.LightBlock): _65.LightBlockAmino;
            fromAminoMsg(object: _65.LightBlockAminoMsg): _65.LightBlock;
            fromProtoMsg(message: _65.LightBlockProtoMsg): _65.LightBlock;
            toProto(message: _65.LightBlock): Uint8Array;
            toProtoMsg(message: _65.LightBlock): _65.LightBlockProtoMsg;
        };
        BlockMeta: {
            encode(message: _65.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BlockMeta;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: string | number | import("long").Long;
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
                numTxs?: string | number | import("long").Long;
            }): _65.BlockMeta;
            fromAmino(object: _65.BlockMetaAmino): _65.BlockMeta;
            toAmino(message: _65.BlockMeta): _65.BlockMetaAmino;
            fromAminoMsg(object: _65.BlockMetaAminoMsg): _65.BlockMeta;
            fromProtoMsg(message: _65.BlockMetaProtoMsg): _65.BlockMeta;
            toProto(message: _65.BlockMeta): Uint8Array;
            toProtoMsg(message: _65.BlockMeta): _65.BlockMetaProtoMsg;
        };
        TxProof: {
            encode(message: _65.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _65.TxProof;
            fromAmino(object: _65.TxProofAmino): _65.TxProof;
            toAmino(message: _65.TxProof): _65.TxProofAmino;
            fromAminoMsg(object: _65.TxProofAminoMsg): _65.TxProof;
            fromProtoMsg(message: _65.TxProofProtoMsg): _65.TxProof;
            toProto(message: _65.TxProof): Uint8Array;
            toProtoMsg(message: _65.TxProof): _65.TxProofProtoMsg;
        };
        ConsensusParams: {
            encode(message: _64.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long").Long;
                    maxGas?: string | number | import("long").Long;
                    timeIotaMs?: string | number | import("long").Long;
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long").Long;
                    maxAgeDuration?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long").Long;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long").Long;
                };
            }): _64.ConsensusParams;
            fromAmino(object: _64.ConsensusParamsAmino): _64.ConsensusParams;
            toAmino(message: _64.ConsensusParams): _64.ConsensusParamsAmino;
            fromAminoMsg(object: _64.ConsensusParamsAminoMsg): _64.ConsensusParams;
            fromProtoMsg(message: _64.ConsensusParamsProtoMsg): _64.ConsensusParams;
            toProto(message: _64.ConsensusParams): Uint8Array;
            toProtoMsg(message: _64.ConsensusParams): _64.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            encode(message: _64.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long;
                maxGas?: string | number | import("long").Long;
                timeIotaMs?: string | number | import("long").Long;
            }): _64.BlockParams;
            fromAmino(object: _64.BlockParamsAmino): _64.BlockParams;
            toAmino(message: _64.BlockParams): _64.BlockParamsAmino;
            fromAminoMsg(object: _64.BlockParamsAminoMsg): _64.BlockParams;
            fromProtoMsg(message: _64.BlockParamsProtoMsg): _64.BlockParams;
            toProto(message: _64.BlockParams): Uint8Array;
            toProtoMsg(message: _64.BlockParams): _64.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            encode(message: _64.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long").Long;
                maxAgeDuration?: {
                    seconds?: string | number | import("long").Long;
                    nanos?: number;
                };
                maxBytes?: string | number | import("long").Long;
            }): _64.EvidenceParams;
            fromAmino(object: _64.EvidenceParamsAmino): _64.EvidenceParams;
            toAmino(message: _64.EvidenceParams): _64.EvidenceParamsAmino;
            fromAminoMsg(object: _64.EvidenceParamsAminoMsg): _64.EvidenceParams;
            fromProtoMsg(message: _64.EvidenceParamsProtoMsg): _64.EvidenceParams;
            toProto(message: _64.EvidenceParams): Uint8Array;
            toProtoMsg(message: _64.EvidenceParams): _64.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            encode(message: _64.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _64.ValidatorParams;
            fromAmino(object: _64.ValidatorParamsAmino): _64.ValidatorParams;
            toAmino(message: _64.ValidatorParams): _64.ValidatorParamsAmino;
            fromAminoMsg(object: _64.ValidatorParamsAminoMsg): _64.ValidatorParams;
            fromProtoMsg(message: _64.ValidatorParamsProtoMsg): _64.ValidatorParams;
            toProto(message: _64.ValidatorParams): Uint8Array;
            toProtoMsg(message: _64.ValidatorParams): _64.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            encode(message: _64.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.VersionParams;
            fromPartial(object: {
                appVersion?: string | number | import("long").Long;
            }): _64.VersionParams;
            fromAmino(object: _64.VersionParamsAmino): _64.VersionParams;
            toAmino(message: _64.VersionParams): _64.VersionParamsAmino;
            fromAminoMsg(object: _64.VersionParamsAminoMsg): _64.VersionParams;
            fromProtoMsg(message: _64.VersionParamsProtoMsg): _64.VersionParams;
            toProto(message: _64.VersionParams): Uint8Array;
            toProtoMsg(message: _64.VersionParams): _64.VersionParamsProtoMsg;
        };
        HashedParams: {
            encode(message: _64.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long").Long;
                blockMaxGas?: string | number | import("long").Long;
            }): _64.HashedParams;
            fromAmino(object: _64.HashedParamsAmino): _64.HashedParams;
            toAmino(message: _64.HashedParams): _64.HashedParamsAmino;
            fromAminoMsg(object: _64.HashedParamsAminoMsg): _64.HashedParams;
            fromProtoMsg(message: _64.HashedParamsProtoMsg): _64.HashedParams;
            toProto(message: _64.HashedParams): Uint8Array;
            toProtoMsg(message: _64.HashedParams): _64.HashedParamsProtoMsg;
        };
        Evidence: {
            encode(message: _63.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _65.SignedMsgType;
                        height?: string | number | import("long").Long;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _65.SignedMsgType;
                        height?: string | number | import("long").Long;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: string | number | import("long").Long;
                    validatorPower?: string | number | import("long").Long;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
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
                                    blockIdFlag?: _65.BlockIDFlag;
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
                    };
                    commonHeight?: string | number | import("long").Long;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").Long;
                        proposerPriority?: string | number | import("long").Long;
                    }[];
                    totalVotingPower?: string | number | import("long").Long;
                    timestamp?: Date;
                };
            }): _63.Evidence;
            fromAmino(object: _63.EvidenceAmino): _63.Evidence;
            toAmino(message: _63.Evidence): _63.EvidenceAmino;
            fromAminoMsg(object: _63.EvidenceAminoMsg): _63.Evidence;
            fromProtoMsg(message: _63.EvidenceProtoMsg): _63.Evidence;
            toProto(message: _63.Evidence): Uint8Array;
            toProtoMsg(message: _63.Evidence): _63.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            encode(message: _63.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _65.SignedMsgType;
                    height?: string | number | import("long").Long;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _65.SignedMsgType;
                    height?: string | number | import("long").Long;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: string | number | import("long").Long;
                validatorPower?: string | number | import("long").Long;
                timestamp?: Date;
            }): _63.DuplicateVoteEvidence;
            fromAmino(object: _63.DuplicateVoteEvidenceAmino): _63.DuplicateVoteEvidence;
            toAmino(message: _63.DuplicateVoteEvidence): _63.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _63.DuplicateVoteEvidenceAminoMsg): _63.DuplicateVoteEvidence;
            fromProtoMsg(message: _63.DuplicateVoteEvidenceProtoMsg): _63.DuplicateVoteEvidence;
            toProto(message: _63.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _63.DuplicateVoteEvidence): _63.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            encode(message: _63.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.LightClientAttackEvidence;
            fromPartial(object: {
                conflictingBlock?: {
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
                                blockIdFlag?: _65.BlockIDFlag;
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
                };
                commonHeight?: string | number | import("long").Long;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").Long;
                    proposerPriority?: string | number | import("long").Long;
                }[];
                totalVotingPower?: string | number | import("long").Long;
                timestamp?: Date;
            }): _63.LightClientAttackEvidence;
            fromAmino(object: _63.LightClientAttackEvidenceAmino): _63.LightClientAttackEvidence;
            toAmino(message: _63.LightClientAttackEvidence): _63.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _63.LightClientAttackEvidenceAminoMsg): _63.LightClientAttackEvidence;
            fromProtoMsg(message: _63.LightClientAttackEvidenceProtoMsg): _63.LightClientAttackEvidence;
            toProto(message: _63.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _63.LightClientAttackEvidence): _63.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            encode(message: _63.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _65.SignedMsgType;
                            height?: string | number | import("long").Long;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _65.SignedMsgType;
                            height?: string | number | import("long").Long;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: string | number | import("long").Long;
                        validatorPower?: string | number | import("long").Long;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
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
                                        blockIdFlag?: _65.BlockIDFlag;
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
                        };
                        commonHeight?: string | number | import("long").Long;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").Long;
                            proposerPriority?: string | number | import("long").Long;
                        }[];
                        totalVotingPower?: string | number | import("long").Long;
                        timestamp?: Date;
                    };
                }[];
            }): _63.EvidenceList;
            fromAmino(object: _63.EvidenceListAmino): _63.EvidenceList;
            toAmino(message: _63.EvidenceList): _63.EvidenceListAmino;
            fromAminoMsg(object: _63.EvidenceListAminoMsg): _63.EvidenceList;
            fromProtoMsg(message: _63.EvidenceListProtoMsg): _63.EvidenceList;
            toProto(message: _63.EvidenceList): Uint8Array;
            toProtoMsg(message: _63.EvidenceList): _63.EvidenceListProtoMsg;
        };
        Block: {
            encode(message: _62.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Block;
            fromPartial(object: {
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
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _65.SignedMsgType;
                                height?: string | number | import("long").Long;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _65.SignedMsgType;
                                height?: string | number | import("long").Long;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: string | number | import("long").Long;
                            validatorPower?: string | number | import("long").Long;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
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
                                            blockIdFlag?: _65.BlockIDFlag;
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
                            };
                            commonHeight?: string | number | import("long").Long;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").Long;
                                proposerPriority?: string | number | import("long").Long;
                            }[];
                            totalVotingPower?: string | number | import("long").Long;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
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
                        blockIdFlag?: _65.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _62.Block;
            fromAmino(object: _62.BlockAmino): _62.Block;
            toAmino(message: _62.Block): _62.BlockAmino;
            fromAminoMsg(object: _62.BlockAminoMsg): _62.Block;
            fromProtoMsg(message: _62.BlockProtoMsg): _62.Block;
            toProto(message: _62.Block): Uint8Array;
            toProtoMsg(message: _62.Block): _62.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            encode(message: _67.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.App;
            fromPartial(object: {
                protocol?: string | number | import("long").Long;
                software?: string;
            }): _67.App;
            fromAmino(object: _67.AppAmino): _67.App;
            toAmino(message: _67.App): _67.AppAmino;
            fromAminoMsg(object: _67.AppAminoMsg): _67.App;
            fromProtoMsg(message: _67.AppProtoMsg): _67.App;
            toProto(message: _67.App): Uint8Array;
            toProtoMsg(message: _67.App): _67.AppProtoMsg;
        };
        Consensus: {
            encode(message: _67.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Consensus;
            fromPartial(object: {
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _67.Consensus;
            fromAmino(object: _67.ConsensusAmino): _67.Consensus;
            toAmino(message: _67.Consensus): _67.ConsensusAmino;
            fromAminoMsg(object: _67.ConsensusAminoMsg): _67.Consensus;
            fromProtoMsg(message: _67.ConsensusProtoMsg): _67.Consensus;
            toProto(message: _67.Consensus): Uint8Array;
            toProtoMsg(message: _67.Consensus): _67.ConsensusProtoMsg;
        };
    };
}
