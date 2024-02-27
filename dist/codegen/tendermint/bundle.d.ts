/// <reference types="long" />
import * as _64 from "./abci/types";
import * as _65 from "./crypto/keys";
import * as _66 from "./crypto/proof";
import * as _67 from "./libs/bits/types";
import * as _68 from "./p2p/types";
import * as _69 from "./types/block";
import * as _70 from "./types/evidence";
import * as _71 from "./types/params";
import * as _72 from "./types/types";
import * as _73 from "./types/validator";
import * as _74 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _64.CheckTxType;
        checkTxTypeToJSON(object: _64.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _64.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _64.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _64.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _64.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _64.EvidenceType;
        evidenceTypeToJSON(object: _64.EvidenceType): string;
        CheckTxType: typeof _64.CheckTxType;
        CheckTxTypeSDKType: typeof _64.CheckTxType;
        CheckTxTypeAmino: typeof _64.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _64.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _64.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _64.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _64.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _64.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _64.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _64.EvidenceType;
        EvidenceTypeSDKType: typeof _64.EvidenceType;
        EvidenceTypeAmino: typeof _64.EvidenceType;
        Request: {
            encode(message: _64.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Request;
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
                        type?: _64.EvidenceType;
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
                    type?: _64.CheckTxType;
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
            }): _64.Request;
            fromAmino(object: _64.RequestAmino): _64.Request;
            toAmino(message: _64.Request): _64.RequestAmino;
            fromAminoMsg(object: _64.RequestAminoMsg): _64.Request;
            fromProtoMsg(message: _64.RequestProtoMsg): _64.Request;
            toProto(message: _64.Request): Uint8Array;
            toProtoMsg(message: _64.Request): _64.RequestProtoMsg;
        };
        RequestEcho: {
            encode(message: _64.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _64.RequestEcho;
            fromAmino(object: _64.RequestEchoAmino): _64.RequestEcho;
            toAmino(message: _64.RequestEcho): _64.RequestEchoAmino;
            fromAminoMsg(object: _64.RequestEchoAminoMsg): _64.RequestEcho;
            fromProtoMsg(message: _64.RequestEchoProtoMsg): _64.RequestEcho;
            toProto(message: _64.RequestEcho): Uint8Array;
            toProtoMsg(message: _64.RequestEcho): _64.RequestEchoProtoMsg;
        };
        RequestFlush: {
            encode(_: _64.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestFlush;
            fromPartial(_: {}): _64.RequestFlush;
            fromAmino(_: _64.RequestFlushAmino): _64.RequestFlush;
            toAmino(_: _64.RequestFlush): _64.RequestFlushAmino;
            fromAminoMsg(object: _64.RequestFlushAminoMsg): _64.RequestFlush;
            fromProtoMsg(message: _64.RequestFlushProtoMsg): _64.RequestFlush;
            toProto(message: _64.RequestFlush): Uint8Array;
            toProtoMsg(message: _64.RequestFlush): _64.RequestFlushProtoMsg;
        };
        RequestInfo: {
            encode(message: _64.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long").Long;
                p2pVersion?: string | number | import("long").Long;
            }): _64.RequestInfo;
            fromAmino(object: _64.RequestInfoAmino): _64.RequestInfo;
            toAmino(message: _64.RequestInfo): _64.RequestInfoAmino;
            fromAminoMsg(object: _64.RequestInfoAminoMsg): _64.RequestInfo;
            fromProtoMsg(message: _64.RequestInfoProtoMsg): _64.RequestInfo;
            toProto(message: _64.RequestInfo): Uint8Array;
            toProtoMsg(message: _64.RequestInfo): _64.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            encode(message: _64.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _64.RequestSetOption;
            fromAmino(object: _64.RequestSetOptionAmino): _64.RequestSetOption;
            toAmino(message: _64.RequestSetOption): _64.RequestSetOptionAmino;
            fromAminoMsg(object: _64.RequestSetOptionAminoMsg): _64.RequestSetOption;
            fromProtoMsg(message: _64.RequestSetOptionProtoMsg): _64.RequestSetOption;
            toProto(message: _64.RequestSetOption): Uint8Array;
            toProtoMsg(message: _64.RequestSetOption): _64.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            encode(message: _64.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestInitChain;
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
            }): _64.RequestInitChain;
            fromAmino(object: _64.RequestInitChainAmino): _64.RequestInitChain;
            toAmino(message: _64.RequestInitChain): _64.RequestInitChainAmino;
            fromAminoMsg(object: _64.RequestInitChainAminoMsg): _64.RequestInitChain;
            fromProtoMsg(message: _64.RequestInitChainProtoMsg): _64.RequestInitChain;
            toProto(message: _64.RequestInitChain): Uint8Array;
            toProtoMsg(message: _64.RequestInitChain): _64.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            encode(message: _64.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long").Long;
                prove?: boolean;
            }): _64.RequestQuery;
            fromAmino(object: _64.RequestQueryAmino): _64.RequestQuery;
            toAmino(message: _64.RequestQuery): _64.RequestQueryAmino;
            fromAminoMsg(object: _64.RequestQueryAminoMsg): _64.RequestQuery;
            fromProtoMsg(message: _64.RequestQueryProtoMsg): _64.RequestQuery;
            toProto(message: _64.RequestQuery): Uint8Array;
            toProtoMsg(message: _64.RequestQuery): _64.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            encode(message: _64.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestBeginBlock;
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
                    type?: _64.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    height?: string | number | import("long").Long;
                    time?: Date;
                    totalVotingPower?: string | number | import("long").Long;
                }[];
            }): _64.RequestBeginBlock;
            fromAmino(object: _64.RequestBeginBlockAmino): _64.RequestBeginBlock;
            toAmino(message: _64.RequestBeginBlock): _64.RequestBeginBlockAmino;
            fromAminoMsg(object: _64.RequestBeginBlockAminoMsg): _64.RequestBeginBlock;
            fromProtoMsg(message: _64.RequestBeginBlockProtoMsg): _64.RequestBeginBlock;
            toProto(message: _64.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _64.RequestBeginBlock): _64.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            encode(message: _64.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _64.CheckTxType;
            }): _64.RequestCheckTx;
            fromAmino(object: _64.RequestCheckTxAmino): _64.RequestCheckTx;
            toAmino(message: _64.RequestCheckTx): _64.RequestCheckTxAmino;
            fromAminoMsg(object: _64.RequestCheckTxAminoMsg): _64.RequestCheckTx;
            fromProtoMsg(message: _64.RequestCheckTxProtoMsg): _64.RequestCheckTx;
            toProto(message: _64.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _64.RequestCheckTx): _64.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            encode(message: _64.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _64.RequestDeliverTx;
            fromAmino(object: _64.RequestDeliverTxAmino): _64.RequestDeliverTx;
            toAmino(message: _64.RequestDeliverTx): _64.RequestDeliverTxAmino;
            fromAminoMsg(object: _64.RequestDeliverTxAminoMsg): _64.RequestDeliverTx;
            fromProtoMsg(message: _64.RequestDeliverTxProtoMsg): _64.RequestDeliverTx;
            toProto(message: _64.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _64.RequestDeliverTx): _64.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            encode(message: _64.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestEndBlock;
            fromPartial(object: {
                height?: string | number | import("long").Long;
            }): _64.RequestEndBlock;
            fromAmino(object: _64.RequestEndBlockAmino): _64.RequestEndBlock;
            toAmino(message: _64.RequestEndBlock): _64.RequestEndBlockAmino;
            fromAminoMsg(object: _64.RequestEndBlockAminoMsg): _64.RequestEndBlock;
            fromProtoMsg(message: _64.RequestEndBlockProtoMsg): _64.RequestEndBlock;
            toProto(message: _64.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _64.RequestEndBlock): _64.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            encode(_: _64.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestCommit;
            fromPartial(_: {}): _64.RequestCommit;
            fromAmino(_: _64.RequestCommitAmino): _64.RequestCommit;
            toAmino(_: _64.RequestCommit): _64.RequestCommitAmino;
            fromAminoMsg(object: _64.RequestCommitAminoMsg): _64.RequestCommit;
            fromProtoMsg(message: _64.RequestCommitProtoMsg): _64.RequestCommit;
            toProto(message: _64.RequestCommit): Uint8Array;
            toProtoMsg(message: _64.RequestCommit): _64.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            encode(_: _64.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestListSnapshots;
            fromPartial(_: {}): _64.RequestListSnapshots;
            fromAmino(_: _64.RequestListSnapshotsAmino): _64.RequestListSnapshots;
            toAmino(_: _64.RequestListSnapshots): _64.RequestListSnapshotsAmino;
            fromAminoMsg(object: _64.RequestListSnapshotsAminoMsg): _64.RequestListSnapshots;
            fromProtoMsg(message: _64.RequestListSnapshotsProtoMsg): _64.RequestListSnapshots;
            toProto(message: _64.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _64.RequestListSnapshots): _64.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            encode(message: _64.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _64.RequestOfferSnapshot;
            fromAmino(object: _64.RequestOfferSnapshotAmino): _64.RequestOfferSnapshot;
            toAmino(message: _64.RequestOfferSnapshot): _64.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _64.RequestOfferSnapshotAminoMsg): _64.RequestOfferSnapshot;
            fromProtoMsg(message: _64.RequestOfferSnapshotProtoMsg): _64.RequestOfferSnapshot;
            toProto(message: _64.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _64.RequestOfferSnapshot): _64.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _64.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunk?: number;
            }): _64.RequestLoadSnapshotChunk;
            fromAmino(object: _64.RequestLoadSnapshotChunkAmino): _64.RequestLoadSnapshotChunk;
            toAmino(message: _64.RequestLoadSnapshotChunk): _64.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _64.RequestLoadSnapshotChunkAminoMsg): _64.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _64.RequestLoadSnapshotChunkProtoMsg): _64.RequestLoadSnapshotChunk;
            toProto(message: _64.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _64.RequestLoadSnapshotChunk): _64.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            encode(message: _64.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _64.RequestApplySnapshotChunk;
            fromAmino(object: _64.RequestApplySnapshotChunkAmino): _64.RequestApplySnapshotChunk;
            toAmino(message: _64.RequestApplySnapshotChunk): _64.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _64.RequestApplySnapshotChunkAminoMsg): _64.RequestApplySnapshotChunk;
            fromProtoMsg(message: _64.RequestApplySnapshotChunkProtoMsg): _64.RequestApplySnapshotChunk;
            toProto(message: _64.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _64.RequestApplySnapshotChunk): _64.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            encode(message: _64.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Response;
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
                    result?: _64.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _64.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _64.Response;
            fromAmino(object: _64.ResponseAmino): _64.Response;
            toAmino(message: _64.Response): _64.ResponseAmino;
            fromAminoMsg(object: _64.ResponseAminoMsg): _64.Response;
            fromProtoMsg(message: _64.ResponseProtoMsg): _64.Response;
            toProto(message: _64.Response): Uint8Array;
            toProtoMsg(message: _64.Response): _64.ResponseProtoMsg;
        };
        ResponseException: {
            encode(message: _64.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _64.ResponseException;
            fromAmino(object: _64.ResponseExceptionAmino): _64.ResponseException;
            toAmino(message: _64.ResponseException): _64.ResponseExceptionAmino;
            fromAminoMsg(object: _64.ResponseExceptionAminoMsg): _64.ResponseException;
            fromProtoMsg(message: _64.ResponseExceptionProtoMsg): _64.ResponseException;
            toProto(message: _64.ResponseException): Uint8Array;
            toProtoMsg(message: _64.ResponseException): _64.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            encode(message: _64.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _64.ResponseEcho;
            fromAmino(object: _64.ResponseEchoAmino): _64.ResponseEcho;
            toAmino(message: _64.ResponseEcho): _64.ResponseEchoAmino;
            fromAminoMsg(object: _64.ResponseEchoAminoMsg): _64.ResponseEcho;
            fromProtoMsg(message: _64.ResponseEchoProtoMsg): _64.ResponseEcho;
            toProto(message: _64.ResponseEcho): Uint8Array;
            toProtoMsg(message: _64.ResponseEcho): _64.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            encode(_: _64.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseFlush;
            fromPartial(_: {}): _64.ResponseFlush;
            fromAmino(_: _64.ResponseFlushAmino): _64.ResponseFlush;
            toAmino(_: _64.ResponseFlush): _64.ResponseFlushAmino;
            fromAminoMsg(object: _64.ResponseFlushAminoMsg): _64.ResponseFlush;
            fromProtoMsg(message: _64.ResponseFlushProtoMsg): _64.ResponseFlush;
            toProto(message: _64.ResponseFlush): Uint8Array;
            toProtoMsg(message: _64.ResponseFlush): _64.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            encode(message: _64.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long").Long;
                lastBlockHeight?: string | number | import("long").Long;
                lastBlockAppHash?: Uint8Array;
            }): _64.ResponseInfo;
            fromAmino(object: _64.ResponseInfoAmino): _64.ResponseInfo;
            toAmino(message: _64.ResponseInfo): _64.ResponseInfoAmino;
            fromAminoMsg(object: _64.ResponseInfoAminoMsg): _64.ResponseInfo;
            fromProtoMsg(message: _64.ResponseInfoProtoMsg): _64.ResponseInfo;
            toProto(message: _64.ResponseInfo): Uint8Array;
            toProtoMsg(message: _64.ResponseInfo): _64.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            encode(message: _64.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _64.ResponseSetOption;
            fromAmino(object: _64.ResponseSetOptionAmino): _64.ResponseSetOption;
            toAmino(message: _64.ResponseSetOption): _64.ResponseSetOptionAmino;
            fromAminoMsg(object: _64.ResponseSetOptionAminoMsg): _64.ResponseSetOption;
            fromProtoMsg(message: _64.ResponseSetOptionProtoMsg): _64.ResponseSetOption;
            toProto(message: _64.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _64.ResponseSetOption): _64.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            encode(message: _64.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseInitChain;
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
            }): _64.ResponseInitChain;
            fromAmino(object: _64.ResponseInitChainAmino): _64.ResponseInitChain;
            toAmino(message: _64.ResponseInitChain): _64.ResponseInitChainAmino;
            fromAminoMsg(object: _64.ResponseInitChainAminoMsg): _64.ResponseInitChain;
            fromProtoMsg(message: _64.ResponseInitChainProtoMsg): _64.ResponseInitChain;
            toProto(message: _64.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _64.ResponseInitChain): _64.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            encode(message: _64.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseQuery;
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
            }): _64.ResponseQuery;
            fromAmino(object: _64.ResponseQueryAmino): _64.ResponseQuery;
            toAmino(message: _64.ResponseQuery): _64.ResponseQueryAmino;
            fromAminoMsg(object: _64.ResponseQueryAminoMsg): _64.ResponseQuery;
            fromProtoMsg(message: _64.ResponseQueryProtoMsg): _64.ResponseQuery;
            toProto(message: _64.ResponseQuery): Uint8Array;
            toProtoMsg(message: _64.ResponseQuery): _64.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            encode(message: _64.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _64.ResponseBeginBlock;
            fromAmino(object: _64.ResponseBeginBlockAmino): _64.ResponseBeginBlock;
            toAmino(message: _64.ResponseBeginBlock): _64.ResponseBeginBlockAmino;
            fromAminoMsg(object: _64.ResponseBeginBlockAminoMsg): _64.ResponseBeginBlock;
            fromProtoMsg(message: _64.ResponseBeginBlockProtoMsg): _64.ResponseBeginBlock;
            toProto(message: _64.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _64.ResponseBeginBlock): _64.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            encode(message: _64.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseCheckTx;
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
            }): _64.ResponseCheckTx;
            fromAmino(object: _64.ResponseCheckTxAmino): _64.ResponseCheckTx;
            toAmino(message: _64.ResponseCheckTx): _64.ResponseCheckTxAmino;
            fromAminoMsg(object: _64.ResponseCheckTxAminoMsg): _64.ResponseCheckTx;
            fromProtoMsg(message: _64.ResponseCheckTxProtoMsg): _64.ResponseCheckTx;
            toProto(message: _64.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _64.ResponseCheckTx): _64.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            encode(message: _64.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseDeliverTx;
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
            }): _64.ResponseDeliverTx;
            fromAmino(object: _64.ResponseDeliverTxAmino): _64.ResponseDeliverTx;
            toAmino(message: _64.ResponseDeliverTx): _64.ResponseDeliverTxAmino;
            fromAminoMsg(object: _64.ResponseDeliverTxAminoMsg): _64.ResponseDeliverTx;
            fromProtoMsg(message: _64.ResponseDeliverTxProtoMsg): _64.ResponseDeliverTx;
            toProto(message: _64.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _64.ResponseDeliverTx): _64.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            encode(message: _64.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseEndBlock;
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
            }): _64.ResponseEndBlock;
            fromAmino(object: _64.ResponseEndBlockAmino): _64.ResponseEndBlock;
            toAmino(message: _64.ResponseEndBlock): _64.ResponseEndBlockAmino;
            fromAminoMsg(object: _64.ResponseEndBlockAminoMsg): _64.ResponseEndBlock;
            fromProtoMsg(message: _64.ResponseEndBlockProtoMsg): _64.ResponseEndBlock;
            toProto(message: _64.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _64.ResponseEndBlock): _64.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            encode(message: _64.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long").Long;
            }): _64.ResponseCommit;
            fromAmino(object: _64.ResponseCommitAmino): _64.ResponseCommit;
            toAmino(message: _64.ResponseCommit): _64.ResponseCommitAmino;
            fromAminoMsg(object: _64.ResponseCommitAminoMsg): _64.ResponseCommit;
            fromProtoMsg(message: _64.ResponseCommitProtoMsg): _64.ResponseCommit;
            toProto(message: _64.ResponseCommit): Uint8Array;
            toProtoMsg(message: _64.ResponseCommit): _64.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            encode(message: _64.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _64.ResponseListSnapshots;
            fromAmino(object: _64.ResponseListSnapshotsAmino): _64.ResponseListSnapshots;
            toAmino(message: _64.ResponseListSnapshots): _64.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _64.ResponseListSnapshotsAminoMsg): _64.ResponseListSnapshots;
            fromProtoMsg(message: _64.ResponseListSnapshotsProtoMsg): _64.ResponseListSnapshots;
            toProto(message: _64.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _64.ResponseListSnapshots): _64.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            encode(message: _64.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _64.ResponseOfferSnapshot_Result;
            }): _64.ResponseOfferSnapshot;
            fromAmino(object: _64.ResponseOfferSnapshotAmino): _64.ResponseOfferSnapshot;
            toAmino(message: _64.ResponseOfferSnapshot): _64.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _64.ResponseOfferSnapshotAminoMsg): _64.ResponseOfferSnapshot;
            fromProtoMsg(message: _64.ResponseOfferSnapshotProtoMsg): _64.ResponseOfferSnapshot;
            toProto(message: _64.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _64.ResponseOfferSnapshot): _64.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _64.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _64.ResponseLoadSnapshotChunk;
            fromAmino(object: _64.ResponseLoadSnapshotChunkAmino): _64.ResponseLoadSnapshotChunk;
            toAmino(message: _64.ResponseLoadSnapshotChunk): _64.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _64.ResponseLoadSnapshotChunkAminoMsg): _64.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _64.ResponseLoadSnapshotChunkProtoMsg): _64.ResponseLoadSnapshotChunk;
            toProto(message: _64.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _64.ResponseLoadSnapshotChunk): _64.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _64.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _64.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _64.ResponseApplySnapshotChunk;
            fromAmino(object: _64.ResponseApplySnapshotChunkAmino): _64.ResponseApplySnapshotChunk;
            toAmino(message: _64.ResponseApplySnapshotChunk): _64.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _64.ResponseApplySnapshotChunkAminoMsg): _64.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _64.ResponseApplySnapshotChunkProtoMsg): _64.ResponseApplySnapshotChunk;
            toProto(message: _64.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _64.ResponseApplySnapshotChunk): _64.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            encode(message: _64.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ConsensusParams;
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
            }): _64.BlockParams;
            fromAmino(object: _64.BlockParamsAmino): _64.BlockParams;
            toAmino(message: _64.BlockParams): _64.BlockParamsAmino;
            fromAminoMsg(object: _64.BlockParamsAminoMsg): _64.BlockParams;
            fromProtoMsg(message: _64.BlockParamsProtoMsg): _64.BlockParams;
            toProto(message: _64.BlockParams): Uint8Array;
            toProtoMsg(message: _64.BlockParams): _64.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            encode(message: _64.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _64.LastCommitInfo;
            fromAmino(object: _64.LastCommitInfoAmino): _64.LastCommitInfo;
            toAmino(message: _64.LastCommitInfo): _64.LastCommitInfoAmino;
            fromAminoMsg(object: _64.LastCommitInfoAminoMsg): _64.LastCommitInfo;
            fromProtoMsg(message: _64.LastCommitInfoProtoMsg): _64.LastCommitInfo;
            toProto(message: _64.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _64.LastCommitInfo): _64.LastCommitInfoProtoMsg;
        };
        Event: {
            encode(message: _64.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _64.Event;
            fromAmino(object: _64.EventAmino): _64.Event;
            toAmino(message: _64.Event): _64.EventAmino;
            fromAminoMsg(object: _64.EventAminoMsg): _64.Event;
            fromProtoMsg(message: _64.EventProtoMsg): _64.Event;
            toProto(message: _64.Event): Uint8Array;
            toProtoMsg(message: _64.Event): _64.EventProtoMsg;
        };
        EventAttribute: {
            encode(message: _64.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _64.EventAttribute;
            fromAmino(object: _64.EventAttributeAmino): _64.EventAttribute;
            toAmino(message: _64.EventAttribute): _64.EventAttributeAmino;
            fromAminoMsg(object: _64.EventAttributeAminoMsg): _64.EventAttribute;
            fromProtoMsg(message: _64.EventAttributeProtoMsg): _64.EventAttribute;
            toProto(message: _64.EventAttribute): Uint8Array;
            toProtoMsg(message: _64.EventAttribute): _64.EventAttributeProtoMsg;
        };
        TxResult: {
            encode(message: _64.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TxResult;
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
            }): _64.TxResult;
            fromAmino(object: _64.TxResultAmino): _64.TxResult;
            toAmino(message: _64.TxResult): _64.TxResultAmino;
            fromAminoMsg(object: _64.TxResultAminoMsg): _64.TxResult;
            fromProtoMsg(message: _64.TxResultProtoMsg): _64.TxResult;
            toProto(message: _64.TxResult): Uint8Array;
            toProtoMsg(message: _64.TxResult): _64.TxResultProtoMsg;
        };
        Validator: {
            encode(message: _64.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long").Long;
            }): _64.Validator;
            fromAmino(object: _64.ValidatorAmino): _64.Validator;
            toAmino(message: _64.Validator): _64.ValidatorAmino;
            fromAminoMsg(object: _64.ValidatorAminoMsg): _64.Validator;
            fromProtoMsg(message: _64.ValidatorProtoMsg): _64.Validator;
            toProto(message: _64.Validator): Uint8Array;
            toProtoMsg(message: _64.Validator): _64.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            encode(message: _64.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long").Long;
            }): _64.ValidatorUpdate;
            fromAmino(object: _64.ValidatorUpdateAmino): _64.ValidatorUpdate;
            toAmino(message: _64.ValidatorUpdate): _64.ValidatorUpdateAmino;
            fromAminoMsg(object: _64.ValidatorUpdateAminoMsg): _64.ValidatorUpdate;
            fromProtoMsg(message: _64.ValidatorUpdateProtoMsg): _64.ValidatorUpdate;
            toProto(message: _64.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _64.ValidatorUpdate): _64.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            encode(message: _64.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                signedLastBlock?: boolean;
            }): _64.VoteInfo;
            fromAmino(object: _64.VoteInfoAmino): _64.VoteInfo;
            toAmino(message: _64.VoteInfo): _64.VoteInfoAmino;
            fromAminoMsg(object: _64.VoteInfoAminoMsg): _64.VoteInfo;
            fromProtoMsg(message: _64.VoteInfoProtoMsg): _64.VoteInfo;
            toProto(message: _64.VoteInfo): Uint8Array;
            toProtoMsg(message: _64.VoteInfo): _64.VoteInfoProtoMsg;
        };
        Evidence: {
            encode(message: _64.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Evidence;
            fromPartial(object: {
                type?: _64.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                height?: string | number | import("long").Long;
                time?: Date;
                totalVotingPower?: string | number | import("long").Long;
            }): _64.Evidence;
            fromAmino(object: _64.EvidenceAmino): _64.Evidence;
            toAmino(message: _64.Evidence): _64.EvidenceAmino;
            fromAminoMsg(object: _64.EvidenceAminoMsg): _64.Evidence;
            fromProtoMsg(message: _64.EvidenceProtoMsg): _64.Evidence;
            toProto(message: _64.Evidence): Uint8Array;
            toProtoMsg(message: _64.Evidence): _64.EvidenceProtoMsg;
        };
        Snapshot: {
            encode(message: _64.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _64.Snapshot;
            fromAmino(object: _64.SnapshotAmino): _64.Snapshot;
            toAmino(message: _64.Snapshot): _64.SnapshotAmino;
            fromAminoMsg(object: _64.SnapshotAminoMsg): _64.Snapshot;
            fromProtoMsg(message: _64.SnapshotProtoMsg): _64.Snapshot;
            toProto(message: _64.Snapshot): Uint8Array;
            toProtoMsg(message: _64.Snapshot): _64.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _66.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Proof;
            fromPartial(object: {
                total?: string | number | import("long").Long;
                index?: string | number | import("long").Long;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _66.Proof;
            fromAmino(object: _66.ProofAmino): _66.Proof;
            toAmino(message: _66.Proof): _66.ProofAmino;
            fromAminoMsg(object: _66.ProofAminoMsg): _66.Proof;
            fromProtoMsg(message: _66.ProofProtoMsg): _66.Proof;
            toProto(message: _66.Proof): Uint8Array;
            toProtoMsg(message: _66.Proof): _66.ProofProtoMsg;
        };
        ValueOp: {
            encode(message: _66.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _66.ValueOp;
            fromAmino(object: _66.ValueOpAmino): _66.ValueOp;
            toAmino(message: _66.ValueOp): _66.ValueOpAmino;
            fromAminoMsg(object: _66.ValueOpAminoMsg): _66.ValueOp;
            fromProtoMsg(message: _66.ValueOpProtoMsg): _66.ValueOp;
            toProto(message: _66.ValueOp): Uint8Array;
            toProtoMsg(message: _66.ValueOp): _66.ValueOpProtoMsg;
        };
        DominoOp: {
            encode(message: _66.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _66.DominoOp;
            fromAmino(object: _66.DominoOpAmino): _66.DominoOp;
            toAmino(message: _66.DominoOp): _66.DominoOpAmino;
            fromAminoMsg(object: _66.DominoOpAminoMsg): _66.DominoOp;
            fromProtoMsg(message: _66.DominoOpProtoMsg): _66.DominoOp;
            toProto(message: _66.DominoOp): Uint8Array;
            toProtoMsg(message: _66.DominoOp): _66.DominoOpProtoMsg;
        };
        ProofOp: {
            encode(message: _66.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _66.ProofOp;
            fromAmino(object: _66.ProofOpAmino): _66.ProofOp;
            toAmino(message: _66.ProofOp): _66.ProofOpAmino;
            fromAminoMsg(object: _66.ProofOpAminoMsg): _66.ProofOp;
            fromProtoMsg(message: _66.ProofOpProtoMsg): _66.ProofOp;
            toProto(message: _66.ProofOp): Uint8Array;
            toProtoMsg(message: _66.ProofOp): _66.ProofOpProtoMsg;
        };
        ProofOps: {
            encode(message: _66.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _66.ProofOps;
            fromAmino(object: _66.ProofOpsAmino): _66.ProofOps;
            toAmino(message: _66.ProofOps): _66.ProofOpsAmino;
            fromAminoMsg(object: _66.ProofOpsAminoMsg): _66.ProofOps;
            fromProtoMsg(message: _66.ProofOpsProtoMsg): _66.ProofOps;
            toProto(message: _66.ProofOps): Uint8Array;
            toProtoMsg(message: _66.ProofOps): _66.ProofOpsProtoMsg;
        };
        PublicKey: {
            encode(message: _65.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _65.PublicKey;
            fromAmino(object: _65.PublicKeyAmino): _65.PublicKey;
            toAmino(message: _65.PublicKey): _65.PublicKeyAmino;
            fromAminoMsg(object: _65.PublicKeyAminoMsg): _65.PublicKey;
            fromProtoMsg(message: _65.PublicKeyProtoMsg): _65.PublicKey;
            toProto(message: _65.PublicKey): Uint8Array;
            toProtoMsg(message: _65.PublicKey): _65.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _67.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long").Long;
                    elems?: (string | number | import("long").Long)[];
                }): _67.BitArray;
                fromAmino(object: _67.BitArrayAmino): _67.BitArray;
                toAmino(message: _67.BitArray): _67.BitArrayAmino;
                fromAminoMsg(object: _67.BitArrayAminoMsg): _67.BitArray;
                fromProtoMsg(message: _67.BitArrayProtoMsg): _67.BitArray;
                toProto(message: _67.BitArray): Uint8Array;
                toProtoMsg(message: _67.BitArray): _67.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _68.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.NetAddress;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _68.NetAddress;
            fromAmino(object: _68.NetAddressAmino): _68.NetAddress;
            toAmino(message: _68.NetAddress): _68.NetAddressAmino;
            fromAminoMsg(object: _68.NetAddressAminoMsg): _68.NetAddress;
            fromProtoMsg(message: _68.NetAddressProtoMsg): _68.NetAddress;
            toProto(message: _68.NetAddress): Uint8Array;
            toProtoMsg(message: _68.NetAddress): _68.NetAddressProtoMsg;
        };
        ProtocolVersion: {
            encode(message: _68.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long").Long;
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _68.ProtocolVersion;
            fromAmino(object: _68.ProtocolVersionAmino): _68.ProtocolVersion;
            toAmino(message: _68.ProtocolVersion): _68.ProtocolVersionAmino;
            fromAminoMsg(object: _68.ProtocolVersionAminoMsg): _68.ProtocolVersion;
            fromProtoMsg(message: _68.ProtocolVersionProtoMsg): _68.ProtocolVersion;
            toProto(message: _68.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _68.ProtocolVersion): _68.ProtocolVersionProtoMsg;
        };
        DefaultNodeInfo: {
            encode(message: _68.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.DefaultNodeInfo;
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
            }): _68.DefaultNodeInfo;
            fromAmino(object: _68.DefaultNodeInfoAmino): _68.DefaultNodeInfo;
            toAmino(message: _68.DefaultNodeInfo): _68.DefaultNodeInfoAmino;
            fromAminoMsg(object: _68.DefaultNodeInfoAminoMsg): _68.DefaultNodeInfo;
            fromProtoMsg(message: _68.DefaultNodeInfoProtoMsg): _68.DefaultNodeInfo;
            toProto(message: _68.DefaultNodeInfo): Uint8Array;
            toProtoMsg(message: _68.DefaultNodeInfo): _68.DefaultNodeInfoProtoMsg;
        };
        DefaultNodeInfoOther: {
            encode(message: _68.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.DefaultNodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _68.DefaultNodeInfoOther;
            fromAmino(object: _68.DefaultNodeInfoOtherAmino): _68.DefaultNodeInfoOther;
            toAmino(message: _68.DefaultNodeInfoOther): _68.DefaultNodeInfoOtherAmino;
            fromAminoMsg(object: _68.DefaultNodeInfoOtherAminoMsg): _68.DefaultNodeInfoOther;
            fromProtoMsg(message: _68.DefaultNodeInfoOtherProtoMsg): _68.DefaultNodeInfoOther;
            toProto(message: _68.DefaultNodeInfoOther): Uint8Array;
            toProtoMsg(message: _68.DefaultNodeInfoOther): _68.DefaultNodeInfoOtherProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _73.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ValidatorSet;
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
            }): _73.ValidatorSet;
            fromAmino(object: _73.ValidatorSetAmino): _73.ValidatorSet;
            toAmino(message: _73.ValidatorSet): _73.ValidatorSetAmino;
            fromAminoMsg(object: _73.ValidatorSetAminoMsg): _73.ValidatorSet;
            fromProtoMsg(message: _73.ValidatorSetProtoMsg): _73.ValidatorSet;
            toProto(message: _73.ValidatorSet): Uint8Array;
            toProtoMsg(message: _73.ValidatorSet): _73.ValidatorSetProtoMsg;
        };
        Validator: {
            encode(message: _73.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
                proposerPriority?: string | number | import("long").Long;
            }): _73.Validator;
            fromAmino(object: _73.ValidatorAmino): _73.Validator;
            toAmino(message: _73.Validator): _73.ValidatorAmino;
            fromAminoMsg(object: _73.ValidatorAminoMsg): _73.Validator;
            fromProtoMsg(message: _73.ValidatorProtoMsg): _73.Validator;
            toProto(message: _73.Validator): Uint8Array;
            toProtoMsg(message: _73.Validator): _73.ValidatorProtoMsg;
        };
        SimpleValidator: {
            encode(message: _73.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
            }): _73.SimpleValidator;
            fromAmino(object: _73.SimpleValidatorAmino): _73.SimpleValidator;
            toAmino(message: _73.SimpleValidator): _73.SimpleValidatorAmino;
            fromAminoMsg(object: _73.SimpleValidatorAminoMsg): _73.SimpleValidator;
            fromProtoMsg(message: _73.SimpleValidatorProtoMsg): _73.SimpleValidator;
            toProto(message: _73.SimpleValidator): Uint8Array;
            toProtoMsg(message: _73.SimpleValidator): _73.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _72.BlockIDFlag;
        blockIDFlagToJSON(object: _72.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _72.SignedMsgType;
        signedMsgTypeToJSON(object: _72.SignedMsgType): string;
        BlockIDFlag: typeof _72.BlockIDFlag;
        BlockIDFlagSDKType: typeof _72.BlockIDFlag;
        BlockIDFlagAmino: typeof _72.BlockIDFlag;
        SignedMsgType: typeof _72.SignedMsgType;
        SignedMsgTypeSDKType: typeof _72.SignedMsgType;
        SignedMsgTypeAmino: typeof _72.SignedMsgType;
        PartSetHeader: {
            encode(message: _72.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _72.PartSetHeader;
            fromAmino(object: _72.PartSetHeaderAmino): _72.PartSetHeader;
            toAmino(message: _72.PartSetHeader): _72.PartSetHeaderAmino;
            fromAminoMsg(object: _72.PartSetHeaderAminoMsg): _72.PartSetHeader;
            fromProtoMsg(message: _72.PartSetHeaderProtoMsg): _72.PartSetHeader;
            toProto(message: _72.PartSetHeader): Uint8Array;
            toProtoMsg(message: _72.PartSetHeader): _72.PartSetHeaderProtoMsg;
        };
        Part: {
            encode(message: _72.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _72.Part;
            fromAmino(object: _72.PartAmino): _72.Part;
            toAmino(message: _72.Part): _72.PartAmino;
            fromAminoMsg(object: _72.PartAminoMsg): _72.Part;
            fromProtoMsg(message: _72.PartProtoMsg): _72.Part;
            toProto(message: _72.Part): Uint8Array;
            toProtoMsg(message: _72.Part): _72.PartProtoMsg;
        };
        BlockID: {
            encode(message: _72.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _72.BlockID;
            fromAmino(object: _72.BlockIDAmino): _72.BlockID;
            toAmino(message: _72.BlockID): _72.BlockIDAmino;
            fromAminoMsg(object: _72.BlockIDAminoMsg): _72.BlockID;
            fromProtoMsg(message: _72.BlockIDProtoMsg): _72.BlockID;
            toProto(message: _72.BlockID): Uint8Array;
            toProtoMsg(message: _72.BlockID): _72.BlockIDProtoMsg;
        };
        Header: {
            encode(message: _72.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Header;
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
            }): _72.Header;
            fromAmino(object: _72.HeaderAmino): _72.Header;
            toAmino(message: _72.Header): _72.HeaderAmino;
            fromAminoMsg(object: _72.HeaderAminoMsg): _72.Header;
            fromProtoMsg(message: _72.HeaderProtoMsg): _72.Header;
            toProto(message: _72.Header): Uint8Array;
            toProtoMsg(message: _72.Header): _72.HeaderProtoMsg;
        };
        Data: {
            encode(message: _72.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _72.Data;
            fromAmino(object: _72.DataAmino): _72.Data;
            toAmino(message: _72.Data): _72.DataAmino;
            fromAminoMsg(object: _72.DataAminoMsg): _72.Data;
            fromProtoMsg(message: _72.DataProtoMsg): _72.Data;
            toProto(message: _72.Data): Uint8Array;
            toProtoMsg(message: _72.Data): _72.DataProtoMsg;
        };
        Vote: {
            encode(message: _72.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Vote;
            fromPartial(object: {
                type?: _72.SignedMsgType;
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
            }): _72.Vote;
            fromAmino(object: _72.VoteAmino): _72.Vote;
            toAmino(message: _72.Vote): _72.VoteAmino;
            fromAminoMsg(object: _72.VoteAminoMsg): _72.Vote;
            fromProtoMsg(message: _72.VoteProtoMsg): _72.Vote;
            toProto(message: _72.Vote): Uint8Array;
            toProtoMsg(message: _72.Vote): _72.VoteProtoMsg;
        };
        Commit: {
            encode(message: _72.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Commit;
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
                    blockIdFlag?: _72.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _72.Commit;
            fromAmino(object: _72.CommitAmino): _72.Commit;
            toAmino(message: _72.Commit): _72.CommitAmino;
            fromAminoMsg(object: _72.CommitAminoMsg): _72.Commit;
            fromProtoMsg(message: _72.CommitProtoMsg): _72.Commit;
            toProto(message: _72.Commit): Uint8Array;
            toProtoMsg(message: _72.Commit): _72.CommitProtoMsg;
        };
        CommitSig: {
            encode(message: _72.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _72.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _72.CommitSig;
            fromAmino(object: _72.CommitSigAmino): _72.CommitSig;
            toAmino(message: _72.CommitSig): _72.CommitSigAmino;
            fromAminoMsg(object: _72.CommitSigAminoMsg): _72.CommitSig;
            fromProtoMsg(message: _72.CommitSigProtoMsg): _72.CommitSig;
            toProto(message: _72.CommitSig): Uint8Array;
            toProtoMsg(message: _72.CommitSig): _72.CommitSigProtoMsg;
        };
        Proposal: {
            encode(message: _72.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Proposal;
            fromPartial(object: {
                type?: _72.SignedMsgType;
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
            }): _72.Proposal;
            fromAmino(object: _72.ProposalAmino): _72.Proposal;
            toAmino(message: _72.Proposal): _72.ProposalAmino;
            fromAminoMsg(object: _72.ProposalAminoMsg): _72.Proposal;
            fromProtoMsg(message: _72.ProposalProtoMsg): _72.Proposal;
            toProto(message: _72.Proposal): Uint8Array;
            toProtoMsg(message: _72.Proposal): _72.ProposalProtoMsg;
        };
        SignedHeader: {
            encode(message: _72.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SignedHeader;
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
                        blockIdFlag?: _72.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _72.SignedHeader;
            fromAmino(object: _72.SignedHeaderAmino): _72.SignedHeader;
            toAmino(message: _72.SignedHeader): _72.SignedHeaderAmino;
            fromAminoMsg(object: _72.SignedHeaderAminoMsg): _72.SignedHeader;
            fromProtoMsg(message: _72.SignedHeaderProtoMsg): _72.SignedHeader;
            toProto(message: _72.SignedHeader): Uint8Array;
            toProtoMsg(message: _72.SignedHeader): _72.SignedHeaderProtoMsg;
        };
        LightBlock: {
            encode(message: _72.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.LightBlock;
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
                            blockIdFlag?: _72.BlockIDFlag;
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
            }): _72.LightBlock;
            fromAmino(object: _72.LightBlockAmino): _72.LightBlock;
            toAmino(message: _72.LightBlock): _72.LightBlockAmino;
            fromAminoMsg(object: _72.LightBlockAminoMsg): _72.LightBlock;
            fromProtoMsg(message: _72.LightBlockProtoMsg): _72.LightBlock;
            toProto(message: _72.LightBlock): Uint8Array;
            toProtoMsg(message: _72.LightBlock): _72.LightBlockProtoMsg;
        };
        BlockMeta: {
            encode(message: _72.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.BlockMeta;
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
            }): _72.BlockMeta;
            fromAmino(object: _72.BlockMetaAmino): _72.BlockMeta;
            toAmino(message: _72.BlockMeta): _72.BlockMetaAmino;
            fromAminoMsg(object: _72.BlockMetaAminoMsg): _72.BlockMeta;
            fromProtoMsg(message: _72.BlockMetaProtoMsg): _72.BlockMeta;
            toProto(message: _72.BlockMeta): Uint8Array;
            toProtoMsg(message: _72.BlockMeta): _72.BlockMetaProtoMsg;
        };
        TxProof: {
            encode(message: _72.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _72.TxProof;
            fromAmino(object: _72.TxProofAmino): _72.TxProof;
            toAmino(message: _72.TxProof): _72.TxProofAmino;
            fromAminoMsg(object: _72.TxProofAminoMsg): _72.TxProof;
            fromProtoMsg(message: _72.TxProofProtoMsg): _72.TxProof;
            toProto(message: _72.TxProof): Uint8Array;
            toProtoMsg(message: _72.TxProof): _72.TxProofProtoMsg;
        };
        ConsensusParams: {
            encode(message: _71.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ConsensusParams;
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
            }): _71.ConsensusParams;
            fromAmino(object: _71.ConsensusParamsAmino): _71.ConsensusParams;
            toAmino(message: _71.ConsensusParams): _71.ConsensusParamsAmino;
            fromAminoMsg(object: _71.ConsensusParamsAminoMsg): _71.ConsensusParams;
            fromProtoMsg(message: _71.ConsensusParamsProtoMsg): _71.ConsensusParams;
            toProto(message: _71.ConsensusParams): Uint8Array;
            toProtoMsg(message: _71.ConsensusParams): _71.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            encode(message: _71.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long;
                maxGas?: string | number | import("long").Long;
                timeIotaMs?: string | number | import("long").Long;
            }): _71.BlockParams;
            fromAmino(object: _71.BlockParamsAmino): _71.BlockParams;
            toAmino(message: _71.BlockParams): _71.BlockParamsAmino;
            fromAminoMsg(object: _71.BlockParamsAminoMsg): _71.BlockParams;
            fromProtoMsg(message: _71.BlockParamsProtoMsg): _71.BlockParams;
            toProto(message: _71.BlockParams): Uint8Array;
            toProtoMsg(message: _71.BlockParams): _71.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            encode(message: _71.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long").Long;
                maxAgeDuration?: {
                    seconds?: string | number | import("long").Long;
                    nanos?: number;
                };
                maxBytes?: string | number | import("long").Long;
            }): _71.EvidenceParams;
            fromAmino(object: _71.EvidenceParamsAmino): _71.EvidenceParams;
            toAmino(message: _71.EvidenceParams): _71.EvidenceParamsAmino;
            fromAminoMsg(object: _71.EvidenceParamsAminoMsg): _71.EvidenceParams;
            fromProtoMsg(message: _71.EvidenceParamsProtoMsg): _71.EvidenceParams;
            toProto(message: _71.EvidenceParams): Uint8Array;
            toProtoMsg(message: _71.EvidenceParams): _71.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            encode(message: _71.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _71.ValidatorParams;
            fromAmino(object: _71.ValidatorParamsAmino): _71.ValidatorParams;
            toAmino(message: _71.ValidatorParams): _71.ValidatorParamsAmino;
            fromAminoMsg(object: _71.ValidatorParamsAminoMsg): _71.ValidatorParams;
            fromProtoMsg(message: _71.ValidatorParamsProtoMsg): _71.ValidatorParams;
            toProto(message: _71.ValidatorParams): Uint8Array;
            toProtoMsg(message: _71.ValidatorParams): _71.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            encode(message: _71.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.VersionParams;
            fromPartial(object: {
                appVersion?: string | number | import("long").Long;
            }): _71.VersionParams;
            fromAmino(object: _71.VersionParamsAmino): _71.VersionParams;
            toAmino(message: _71.VersionParams): _71.VersionParamsAmino;
            fromAminoMsg(object: _71.VersionParamsAminoMsg): _71.VersionParams;
            fromProtoMsg(message: _71.VersionParamsProtoMsg): _71.VersionParams;
            toProto(message: _71.VersionParams): Uint8Array;
            toProtoMsg(message: _71.VersionParams): _71.VersionParamsProtoMsg;
        };
        HashedParams: {
            encode(message: _71.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long").Long;
                blockMaxGas?: string | number | import("long").Long;
            }): _71.HashedParams;
            fromAmino(object: _71.HashedParamsAmino): _71.HashedParams;
            toAmino(message: _71.HashedParams): _71.HashedParamsAmino;
            fromAminoMsg(object: _71.HashedParamsAminoMsg): _71.HashedParams;
            fromProtoMsg(message: _71.HashedParamsProtoMsg): _71.HashedParams;
            toProto(message: _71.HashedParams): Uint8Array;
            toProtoMsg(message: _71.HashedParams): _71.HashedParamsProtoMsg;
        };
        Evidence: {
            encode(message: _70.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _72.SignedMsgType;
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
                        type?: _72.SignedMsgType;
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
                                    blockIdFlag?: _72.BlockIDFlag;
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
            }): _70.Evidence;
            fromAmino(object: _70.EvidenceAmino): _70.Evidence;
            toAmino(message: _70.Evidence): _70.EvidenceAmino;
            fromAminoMsg(object: _70.EvidenceAminoMsg): _70.Evidence;
            fromProtoMsg(message: _70.EvidenceProtoMsg): _70.Evidence;
            toProto(message: _70.Evidence): Uint8Array;
            toProtoMsg(message: _70.Evidence): _70.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            encode(message: _70.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _72.SignedMsgType;
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
                    type?: _72.SignedMsgType;
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
            }): _70.DuplicateVoteEvidence;
            fromAmino(object: _70.DuplicateVoteEvidenceAmino): _70.DuplicateVoteEvidence;
            toAmino(message: _70.DuplicateVoteEvidence): _70.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _70.DuplicateVoteEvidenceAminoMsg): _70.DuplicateVoteEvidence;
            fromProtoMsg(message: _70.DuplicateVoteEvidenceProtoMsg): _70.DuplicateVoteEvidence;
            toProto(message: _70.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _70.DuplicateVoteEvidence): _70.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            encode(message: _70.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.LightClientAttackEvidence;
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
                                blockIdFlag?: _72.BlockIDFlag;
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
            }): _70.LightClientAttackEvidence;
            fromAmino(object: _70.LightClientAttackEvidenceAmino): _70.LightClientAttackEvidence;
            toAmino(message: _70.LightClientAttackEvidence): _70.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _70.LightClientAttackEvidenceAminoMsg): _70.LightClientAttackEvidence;
            fromProtoMsg(message: _70.LightClientAttackEvidenceProtoMsg): _70.LightClientAttackEvidence;
            toProto(message: _70.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _70.LightClientAttackEvidence): _70.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            encode(message: _70.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _72.SignedMsgType;
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
                            type?: _72.SignedMsgType;
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
                                        blockIdFlag?: _72.BlockIDFlag;
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
            }): _70.EvidenceList;
            fromAmino(object: _70.EvidenceListAmino): _70.EvidenceList;
            toAmino(message: _70.EvidenceList): _70.EvidenceListAmino;
            fromAminoMsg(object: _70.EvidenceListAminoMsg): _70.EvidenceList;
            fromProtoMsg(message: _70.EvidenceListProtoMsg): _70.EvidenceList;
            toProto(message: _70.EvidenceList): Uint8Array;
            toProtoMsg(message: _70.EvidenceList): _70.EvidenceListProtoMsg;
        };
        Block: {
            encode(message: _69.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Block;
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
                                type?: _72.SignedMsgType;
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
                                type?: _72.SignedMsgType;
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
                                            blockIdFlag?: _72.BlockIDFlag;
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
                        blockIdFlag?: _72.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _69.Block;
            fromAmino(object: _69.BlockAmino): _69.Block;
            toAmino(message: _69.Block): _69.BlockAmino;
            fromAminoMsg(object: _69.BlockAminoMsg): _69.Block;
            fromProtoMsg(message: _69.BlockProtoMsg): _69.Block;
            toProto(message: _69.Block): Uint8Array;
            toProtoMsg(message: _69.Block): _69.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            encode(message: _74.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.App;
            fromPartial(object: {
                protocol?: string | number | import("long").Long;
                software?: string;
            }): _74.App;
            fromAmino(object: _74.AppAmino): _74.App;
            toAmino(message: _74.App): _74.AppAmino;
            fromAminoMsg(object: _74.AppAminoMsg): _74.App;
            fromProtoMsg(message: _74.AppProtoMsg): _74.App;
            toProto(message: _74.App): Uint8Array;
            toProtoMsg(message: _74.App): _74.AppProtoMsg;
        };
        Consensus: {
            encode(message: _74.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Consensus;
            fromPartial(object: {
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _74.Consensus;
            fromAmino(object: _74.ConsensusAmino): _74.Consensus;
            toAmino(message: _74.Consensus): _74.ConsensusAmino;
            fromAminoMsg(object: _74.ConsensusAminoMsg): _74.Consensus;
            fromProtoMsg(message: _74.ConsensusProtoMsg): _74.Consensus;
            toProto(message: _74.Consensus): Uint8Array;
            toProtoMsg(message: _74.Consensus): _74.ConsensusProtoMsg;
        };
    };
}
