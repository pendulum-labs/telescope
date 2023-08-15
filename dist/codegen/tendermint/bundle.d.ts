/// <reference types="long" />
import * as _59 from "./abci/types";
import * as _60 from "./crypto/keys";
import * as _61 from "./crypto/proof";
import * as _62 from "./libs/bits/types";
import * as _63 from "./p2p/types";
import * as _64 from "./types/block";
import * as _65 from "./types/evidence";
import * as _66 from "./types/params";
import * as _67 from "./types/types";
import * as _68 from "./types/validator";
import * as _69 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _59.CheckTxType;
        checkTxTypeToJSON(object: _59.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _59.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _59.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _59.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _59.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _59.EvidenceType;
        evidenceTypeToJSON(object: _59.EvidenceType): string;
        CheckTxType: typeof _59.CheckTxType;
        CheckTxTypeSDKType: typeof _59.CheckTxType;
        CheckTxTypeAmino: typeof _59.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _59.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _59.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _59.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _59.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _59.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _59.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _59.EvidenceType;
        EvidenceTypeSDKType: typeof _59.EvidenceType;
        EvidenceTypeAmino: typeof _59.EvidenceType;
        Request: {
            encode(message: _59.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Request;
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
                        type?: _59.EvidenceType;
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
                    type?: _59.CheckTxType;
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
            }): _59.Request;
            fromAmino(object: _59.RequestAmino): _59.Request;
            toAmino(message: _59.Request): _59.RequestAmino;
            fromAminoMsg(object: _59.RequestAminoMsg): _59.Request;
            fromProtoMsg(message: _59.RequestProtoMsg): _59.Request;
            toProto(message: _59.Request): Uint8Array;
            toProtoMsg(message: _59.Request): _59.RequestProtoMsg;
        };
        RequestEcho: {
            encode(message: _59.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _59.RequestEcho;
            fromAmino(object: _59.RequestEchoAmino): _59.RequestEcho;
            toAmino(message: _59.RequestEcho): _59.RequestEchoAmino;
            fromAminoMsg(object: _59.RequestEchoAminoMsg): _59.RequestEcho;
            fromProtoMsg(message: _59.RequestEchoProtoMsg): _59.RequestEcho;
            toProto(message: _59.RequestEcho): Uint8Array;
            toProtoMsg(message: _59.RequestEcho): _59.RequestEchoProtoMsg;
        };
        RequestFlush: {
            encode(_: _59.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestFlush;
            fromPartial(_: {}): _59.RequestFlush;
            fromAmino(_: _59.RequestFlushAmino): _59.RequestFlush;
            toAmino(_: _59.RequestFlush): _59.RequestFlushAmino;
            fromAminoMsg(object: _59.RequestFlushAminoMsg): _59.RequestFlush;
            fromProtoMsg(message: _59.RequestFlushProtoMsg): _59.RequestFlush;
            toProto(message: _59.RequestFlush): Uint8Array;
            toProtoMsg(message: _59.RequestFlush): _59.RequestFlushProtoMsg;
        };
        RequestInfo: {
            encode(message: _59.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long").Long;
                p2pVersion?: string | number | import("long").Long;
            }): _59.RequestInfo;
            fromAmino(object: _59.RequestInfoAmino): _59.RequestInfo;
            toAmino(message: _59.RequestInfo): _59.RequestInfoAmino;
            fromAminoMsg(object: _59.RequestInfoAminoMsg): _59.RequestInfo;
            fromProtoMsg(message: _59.RequestInfoProtoMsg): _59.RequestInfo;
            toProto(message: _59.RequestInfo): Uint8Array;
            toProtoMsg(message: _59.RequestInfo): _59.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            encode(message: _59.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _59.RequestSetOption;
            fromAmino(object: _59.RequestSetOptionAmino): _59.RequestSetOption;
            toAmino(message: _59.RequestSetOption): _59.RequestSetOptionAmino;
            fromAminoMsg(object: _59.RequestSetOptionAminoMsg): _59.RequestSetOption;
            fromProtoMsg(message: _59.RequestSetOptionProtoMsg): _59.RequestSetOption;
            toProto(message: _59.RequestSetOption): Uint8Array;
            toProtoMsg(message: _59.RequestSetOption): _59.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            encode(message: _59.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestInitChain;
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
            }): _59.RequestInitChain;
            fromAmino(object: _59.RequestInitChainAmino): _59.RequestInitChain;
            toAmino(message: _59.RequestInitChain): _59.RequestInitChainAmino;
            fromAminoMsg(object: _59.RequestInitChainAminoMsg): _59.RequestInitChain;
            fromProtoMsg(message: _59.RequestInitChainProtoMsg): _59.RequestInitChain;
            toProto(message: _59.RequestInitChain): Uint8Array;
            toProtoMsg(message: _59.RequestInitChain): _59.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            encode(message: _59.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long").Long;
                prove?: boolean;
            }): _59.RequestQuery;
            fromAmino(object: _59.RequestQueryAmino): _59.RequestQuery;
            toAmino(message: _59.RequestQuery): _59.RequestQueryAmino;
            fromAminoMsg(object: _59.RequestQueryAminoMsg): _59.RequestQuery;
            fromProtoMsg(message: _59.RequestQueryProtoMsg): _59.RequestQuery;
            toProto(message: _59.RequestQuery): Uint8Array;
            toProtoMsg(message: _59.RequestQuery): _59.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            encode(message: _59.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestBeginBlock;
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
                    type?: _59.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    height?: string | number | import("long").Long;
                    time?: Date;
                    totalVotingPower?: string | number | import("long").Long;
                }[];
            }): _59.RequestBeginBlock;
            fromAmino(object: _59.RequestBeginBlockAmino): _59.RequestBeginBlock;
            toAmino(message: _59.RequestBeginBlock): _59.RequestBeginBlockAmino;
            fromAminoMsg(object: _59.RequestBeginBlockAminoMsg): _59.RequestBeginBlock;
            fromProtoMsg(message: _59.RequestBeginBlockProtoMsg): _59.RequestBeginBlock;
            toProto(message: _59.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _59.RequestBeginBlock): _59.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            encode(message: _59.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _59.CheckTxType;
            }): _59.RequestCheckTx;
            fromAmino(object: _59.RequestCheckTxAmino): _59.RequestCheckTx;
            toAmino(message: _59.RequestCheckTx): _59.RequestCheckTxAmino;
            fromAminoMsg(object: _59.RequestCheckTxAminoMsg): _59.RequestCheckTx;
            fromProtoMsg(message: _59.RequestCheckTxProtoMsg): _59.RequestCheckTx;
            toProto(message: _59.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _59.RequestCheckTx): _59.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            encode(message: _59.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _59.RequestDeliverTx;
            fromAmino(object: _59.RequestDeliverTxAmino): _59.RequestDeliverTx;
            toAmino(message: _59.RequestDeliverTx): _59.RequestDeliverTxAmino;
            fromAminoMsg(object: _59.RequestDeliverTxAminoMsg): _59.RequestDeliverTx;
            fromProtoMsg(message: _59.RequestDeliverTxProtoMsg): _59.RequestDeliverTx;
            toProto(message: _59.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _59.RequestDeliverTx): _59.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            encode(message: _59.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestEndBlock;
            fromPartial(object: {
                height?: string | number | import("long").Long;
            }): _59.RequestEndBlock;
            fromAmino(object: _59.RequestEndBlockAmino): _59.RequestEndBlock;
            toAmino(message: _59.RequestEndBlock): _59.RequestEndBlockAmino;
            fromAminoMsg(object: _59.RequestEndBlockAminoMsg): _59.RequestEndBlock;
            fromProtoMsg(message: _59.RequestEndBlockProtoMsg): _59.RequestEndBlock;
            toProto(message: _59.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _59.RequestEndBlock): _59.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            encode(_: _59.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestCommit;
            fromPartial(_: {}): _59.RequestCommit;
            fromAmino(_: _59.RequestCommitAmino): _59.RequestCommit;
            toAmino(_: _59.RequestCommit): _59.RequestCommitAmino;
            fromAminoMsg(object: _59.RequestCommitAminoMsg): _59.RequestCommit;
            fromProtoMsg(message: _59.RequestCommitProtoMsg): _59.RequestCommit;
            toProto(message: _59.RequestCommit): Uint8Array;
            toProtoMsg(message: _59.RequestCommit): _59.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            encode(_: _59.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestListSnapshots;
            fromPartial(_: {}): _59.RequestListSnapshots;
            fromAmino(_: _59.RequestListSnapshotsAmino): _59.RequestListSnapshots;
            toAmino(_: _59.RequestListSnapshots): _59.RequestListSnapshotsAmino;
            fromAminoMsg(object: _59.RequestListSnapshotsAminoMsg): _59.RequestListSnapshots;
            fromProtoMsg(message: _59.RequestListSnapshotsProtoMsg): _59.RequestListSnapshots;
            toProto(message: _59.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _59.RequestListSnapshots): _59.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            encode(message: _59.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _59.RequestOfferSnapshot;
            fromAmino(object: _59.RequestOfferSnapshotAmino): _59.RequestOfferSnapshot;
            toAmino(message: _59.RequestOfferSnapshot): _59.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _59.RequestOfferSnapshotAminoMsg): _59.RequestOfferSnapshot;
            fromProtoMsg(message: _59.RequestOfferSnapshotProtoMsg): _59.RequestOfferSnapshot;
            toProto(message: _59.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _59.RequestOfferSnapshot): _59.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _59.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunk?: number;
            }): _59.RequestLoadSnapshotChunk;
            fromAmino(object: _59.RequestLoadSnapshotChunkAmino): _59.RequestLoadSnapshotChunk;
            toAmino(message: _59.RequestLoadSnapshotChunk): _59.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _59.RequestLoadSnapshotChunkAminoMsg): _59.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _59.RequestLoadSnapshotChunkProtoMsg): _59.RequestLoadSnapshotChunk;
            toProto(message: _59.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _59.RequestLoadSnapshotChunk): _59.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            encode(message: _59.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _59.RequestApplySnapshotChunk;
            fromAmino(object: _59.RequestApplySnapshotChunkAmino): _59.RequestApplySnapshotChunk;
            toAmino(message: _59.RequestApplySnapshotChunk): _59.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _59.RequestApplySnapshotChunkAminoMsg): _59.RequestApplySnapshotChunk;
            fromProtoMsg(message: _59.RequestApplySnapshotChunkProtoMsg): _59.RequestApplySnapshotChunk;
            toProto(message: _59.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _59.RequestApplySnapshotChunk): _59.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            encode(message: _59.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Response;
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
                    result?: _59.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _59.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _59.Response;
            fromAmino(object: _59.ResponseAmino): _59.Response;
            toAmino(message: _59.Response): _59.ResponseAmino;
            fromAminoMsg(object: _59.ResponseAminoMsg): _59.Response;
            fromProtoMsg(message: _59.ResponseProtoMsg): _59.Response;
            toProto(message: _59.Response): Uint8Array;
            toProtoMsg(message: _59.Response): _59.ResponseProtoMsg;
        };
        ResponseException: {
            encode(message: _59.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _59.ResponseException;
            fromAmino(object: _59.ResponseExceptionAmino): _59.ResponseException;
            toAmino(message: _59.ResponseException): _59.ResponseExceptionAmino;
            fromAminoMsg(object: _59.ResponseExceptionAminoMsg): _59.ResponseException;
            fromProtoMsg(message: _59.ResponseExceptionProtoMsg): _59.ResponseException;
            toProto(message: _59.ResponseException): Uint8Array;
            toProtoMsg(message: _59.ResponseException): _59.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            encode(message: _59.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _59.ResponseEcho;
            fromAmino(object: _59.ResponseEchoAmino): _59.ResponseEcho;
            toAmino(message: _59.ResponseEcho): _59.ResponseEchoAmino;
            fromAminoMsg(object: _59.ResponseEchoAminoMsg): _59.ResponseEcho;
            fromProtoMsg(message: _59.ResponseEchoProtoMsg): _59.ResponseEcho;
            toProto(message: _59.ResponseEcho): Uint8Array;
            toProtoMsg(message: _59.ResponseEcho): _59.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            encode(_: _59.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseFlush;
            fromPartial(_: {}): _59.ResponseFlush;
            fromAmino(_: _59.ResponseFlushAmino): _59.ResponseFlush;
            toAmino(_: _59.ResponseFlush): _59.ResponseFlushAmino;
            fromAminoMsg(object: _59.ResponseFlushAminoMsg): _59.ResponseFlush;
            fromProtoMsg(message: _59.ResponseFlushProtoMsg): _59.ResponseFlush;
            toProto(message: _59.ResponseFlush): Uint8Array;
            toProtoMsg(message: _59.ResponseFlush): _59.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            encode(message: _59.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long").Long;
                lastBlockHeight?: string | number | import("long").Long;
                lastBlockAppHash?: Uint8Array;
            }): _59.ResponseInfo;
            fromAmino(object: _59.ResponseInfoAmino): _59.ResponseInfo;
            toAmino(message: _59.ResponseInfo): _59.ResponseInfoAmino;
            fromAminoMsg(object: _59.ResponseInfoAminoMsg): _59.ResponseInfo;
            fromProtoMsg(message: _59.ResponseInfoProtoMsg): _59.ResponseInfo;
            toProto(message: _59.ResponseInfo): Uint8Array;
            toProtoMsg(message: _59.ResponseInfo): _59.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            encode(message: _59.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _59.ResponseSetOption;
            fromAmino(object: _59.ResponseSetOptionAmino): _59.ResponseSetOption;
            toAmino(message: _59.ResponseSetOption): _59.ResponseSetOptionAmino;
            fromAminoMsg(object: _59.ResponseSetOptionAminoMsg): _59.ResponseSetOption;
            fromProtoMsg(message: _59.ResponseSetOptionProtoMsg): _59.ResponseSetOption;
            toProto(message: _59.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _59.ResponseSetOption): _59.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            encode(message: _59.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseInitChain;
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
            }): _59.ResponseInitChain;
            fromAmino(object: _59.ResponseInitChainAmino): _59.ResponseInitChain;
            toAmino(message: _59.ResponseInitChain): _59.ResponseInitChainAmino;
            fromAminoMsg(object: _59.ResponseInitChainAminoMsg): _59.ResponseInitChain;
            fromProtoMsg(message: _59.ResponseInitChainProtoMsg): _59.ResponseInitChain;
            toProto(message: _59.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _59.ResponseInitChain): _59.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            encode(message: _59.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseQuery;
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
            }): _59.ResponseQuery;
            fromAmino(object: _59.ResponseQueryAmino): _59.ResponseQuery;
            toAmino(message: _59.ResponseQuery): _59.ResponseQueryAmino;
            fromAminoMsg(object: _59.ResponseQueryAminoMsg): _59.ResponseQuery;
            fromProtoMsg(message: _59.ResponseQueryProtoMsg): _59.ResponseQuery;
            toProto(message: _59.ResponseQuery): Uint8Array;
            toProtoMsg(message: _59.ResponseQuery): _59.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            encode(message: _59.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _59.ResponseBeginBlock;
            fromAmino(object: _59.ResponseBeginBlockAmino): _59.ResponseBeginBlock;
            toAmino(message: _59.ResponseBeginBlock): _59.ResponseBeginBlockAmino;
            fromAminoMsg(object: _59.ResponseBeginBlockAminoMsg): _59.ResponseBeginBlock;
            fromProtoMsg(message: _59.ResponseBeginBlockProtoMsg): _59.ResponseBeginBlock;
            toProto(message: _59.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _59.ResponseBeginBlock): _59.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            encode(message: _59.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseCheckTx;
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
            }): _59.ResponseCheckTx;
            fromAmino(object: _59.ResponseCheckTxAmino): _59.ResponseCheckTx;
            toAmino(message: _59.ResponseCheckTx): _59.ResponseCheckTxAmino;
            fromAminoMsg(object: _59.ResponseCheckTxAminoMsg): _59.ResponseCheckTx;
            fromProtoMsg(message: _59.ResponseCheckTxProtoMsg): _59.ResponseCheckTx;
            toProto(message: _59.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _59.ResponseCheckTx): _59.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            encode(message: _59.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseDeliverTx;
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
            }): _59.ResponseDeliverTx;
            fromAmino(object: _59.ResponseDeliverTxAmino): _59.ResponseDeliverTx;
            toAmino(message: _59.ResponseDeliverTx): _59.ResponseDeliverTxAmino;
            fromAminoMsg(object: _59.ResponseDeliverTxAminoMsg): _59.ResponseDeliverTx;
            fromProtoMsg(message: _59.ResponseDeliverTxProtoMsg): _59.ResponseDeliverTx;
            toProto(message: _59.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _59.ResponseDeliverTx): _59.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            encode(message: _59.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseEndBlock;
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
            }): _59.ResponseEndBlock;
            fromAmino(object: _59.ResponseEndBlockAmino): _59.ResponseEndBlock;
            toAmino(message: _59.ResponseEndBlock): _59.ResponseEndBlockAmino;
            fromAminoMsg(object: _59.ResponseEndBlockAminoMsg): _59.ResponseEndBlock;
            fromProtoMsg(message: _59.ResponseEndBlockProtoMsg): _59.ResponseEndBlock;
            toProto(message: _59.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _59.ResponseEndBlock): _59.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            encode(message: _59.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long").Long;
            }): _59.ResponseCommit;
            fromAmino(object: _59.ResponseCommitAmino): _59.ResponseCommit;
            toAmino(message: _59.ResponseCommit): _59.ResponseCommitAmino;
            fromAminoMsg(object: _59.ResponseCommitAminoMsg): _59.ResponseCommit;
            fromProtoMsg(message: _59.ResponseCommitProtoMsg): _59.ResponseCommit;
            toProto(message: _59.ResponseCommit): Uint8Array;
            toProtoMsg(message: _59.ResponseCommit): _59.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            encode(message: _59.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _59.ResponseListSnapshots;
            fromAmino(object: _59.ResponseListSnapshotsAmino): _59.ResponseListSnapshots;
            toAmino(message: _59.ResponseListSnapshots): _59.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _59.ResponseListSnapshotsAminoMsg): _59.ResponseListSnapshots;
            fromProtoMsg(message: _59.ResponseListSnapshotsProtoMsg): _59.ResponseListSnapshots;
            toProto(message: _59.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _59.ResponseListSnapshots): _59.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            encode(message: _59.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _59.ResponseOfferSnapshot_Result;
            }): _59.ResponseOfferSnapshot;
            fromAmino(object: _59.ResponseOfferSnapshotAmino): _59.ResponseOfferSnapshot;
            toAmino(message: _59.ResponseOfferSnapshot): _59.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _59.ResponseOfferSnapshotAminoMsg): _59.ResponseOfferSnapshot;
            fromProtoMsg(message: _59.ResponseOfferSnapshotProtoMsg): _59.ResponseOfferSnapshot;
            toProto(message: _59.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _59.ResponseOfferSnapshot): _59.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _59.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _59.ResponseLoadSnapshotChunk;
            fromAmino(object: _59.ResponseLoadSnapshotChunkAmino): _59.ResponseLoadSnapshotChunk;
            toAmino(message: _59.ResponseLoadSnapshotChunk): _59.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _59.ResponseLoadSnapshotChunkAminoMsg): _59.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _59.ResponseLoadSnapshotChunkProtoMsg): _59.ResponseLoadSnapshotChunk;
            toProto(message: _59.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _59.ResponseLoadSnapshotChunk): _59.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _59.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _59.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _59.ResponseApplySnapshotChunk;
            fromAmino(object: _59.ResponseApplySnapshotChunkAmino): _59.ResponseApplySnapshotChunk;
            toAmino(message: _59.ResponseApplySnapshotChunk): _59.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _59.ResponseApplySnapshotChunkAminoMsg): _59.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _59.ResponseApplySnapshotChunkProtoMsg): _59.ResponseApplySnapshotChunk;
            toProto(message: _59.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _59.ResponseApplySnapshotChunk): _59.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            encode(message: _59.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ConsensusParams;
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
            }): _59.ConsensusParams;
            fromAmino(object: _59.ConsensusParamsAmino): _59.ConsensusParams;
            toAmino(message: _59.ConsensusParams): _59.ConsensusParamsAmino;
            fromAminoMsg(object: _59.ConsensusParamsAminoMsg): _59.ConsensusParams;
            fromProtoMsg(message: _59.ConsensusParamsProtoMsg): _59.ConsensusParams;
            toProto(message: _59.ConsensusParams): Uint8Array;
            toProtoMsg(message: _59.ConsensusParams): _59.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            encode(message: _59.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long;
                maxGas?: string | number | import("long").Long;
            }): _59.BlockParams;
            fromAmino(object: _59.BlockParamsAmino): _59.BlockParams;
            toAmino(message: _59.BlockParams): _59.BlockParamsAmino;
            fromAminoMsg(object: _59.BlockParamsAminoMsg): _59.BlockParams;
            fromProtoMsg(message: _59.BlockParamsProtoMsg): _59.BlockParams;
            toProto(message: _59.BlockParams): Uint8Array;
            toProtoMsg(message: _59.BlockParams): _59.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            encode(message: _59.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _59.LastCommitInfo;
            fromAmino(object: _59.LastCommitInfoAmino): _59.LastCommitInfo;
            toAmino(message: _59.LastCommitInfo): _59.LastCommitInfoAmino;
            fromAminoMsg(object: _59.LastCommitInfoAminoMsg): _59.LastCommitInfo;
            fromProtoMsg(message: _59.LastCommitInfoProtoMsg): _59.LastCommitInfo;
            toProto(message: _59.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _59.LastCommitInfo): _59.LastCommitInfoProtoMsg;
        };
        Event: {
            encode(message: _59.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _59.Event;
            fromAmino(object: _59.EventAmino): _59.Event;
            toAmino(message: _59.Event): _59.EventAmino;
            fromAminoMsg(object: _59.EventAminoMsg): _59.Event;
            fromProtoMsg(message: _59.EventProtoMsg): _59.Event;
            toProto(message: _59.Event): Uint8Array;
            toProtoMsg(message: _59.Event): _59.EventProtoMsg;
        };
        EventAttribute: {
            encode(message: _59.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _59.EventAttribute;
            fromAmino(object: _59.EventAttributeAmino): _59.EventAttribute;
            toAmino(message: _59.EventAttribute): _59.EventAttributeAmino;
            fromAminoMsg(object: _59.EventAttributeAminoMsg): _59.EventAttribute;
            fromProtoMsg(message: _59.EventAttributeProtoMsg): _59.EventAttribute;
            toProto(message: _59.EventAttribute): Uint8Array;
            toProtoMsg(message: _59.EventAttribute): _59.EventAttributeProtoMsg;
        };
        TxResult: {
            encode(message: _59.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.TxResult;
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
            }): _59.TxResult;
            fromAmino(object: _59.TxResultAmino): _59.TxResult;
            toAmino(message: _59.TxResult): _59.TxResultAmino;
            fromAminoMsg(object: _59.TxResultAminoMsg): _59.TxResult;
            fromProtoMsg(message: _59.TxResultProtoMsg): _59.TxResult;
            toProto(message: _59.TxResult): Uint8Array;
            toProtoMsg(message: _59.TxResult): _59.TxResultProtoMsg;
        };
        Validator: {
            encode(message: _59.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long").Long;
            }): _59.Validator;
            fromAmino(object: _59.ValidatorAmino): _59.Validator;
            toAmino(message: _59.Validator): _59.ValidatorAmino;
            fromAminoMsg(object: _59.ValidatorAminoMsg): _59.Validator;
            fromProtoMsg(message: _59.ValidatorProtoMsg): _59.Validator;
            toProto(message: _59.Validator): Uint8Array;
            toProtoMsg(message: _59.Validator): _59.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            encode(message: _59.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long").Long;
            }): _59.ValidatorUpdate;
            fromAmino(object: _59.ValidatorUpdateAmino): _59.ValidatorUpdate;
            toAmino(message: _59.ValidatorUpdate): _59.ValidatorUpdateAmino;
            fromAminoMsg(object: _59.ValidatorUpdateAminoMsg): _59.ValidatorUpdate;
            fromProtoMsg(message: _59.ValidatorUpdateProtoMsg): _59.ValidatorUpdate;
            toProto(message: _59.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _59.ValidatorUpdate): _59.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            encode(message: _59.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                signedLastBlock?: boolean;
            }): _59.VoteInfo;
            fromAmino(object: _59.VoteInfoAmino): _59.VoteInfo;
            toAmino(message: _59.VoteInfo): _59.VoteInfoAmino;
            fromAminoMsg(object: _59.VoteInfoAminoMsg): _59.VoteInfo;
            fromProtoMsg(message: _59.VoteInfoProtoMsg): _59.VoteInfo;
            toProto(message: _59.VoteInfo): Uint8Array;
            toProtoMsg(message: _59.VoteInfo): _59.VoteInfoProtoMsg;
        };
        Evidence: {
            encode(message: _59.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Evidence;
            fromPartial(object: {
                type?: _59.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                height?: string | number | import("long").Long;
                time?: Date;
                totalVotingPower?: string | number | import("long").Long;
            }): _59.Evidence;
            fromAmino(object: _59.EvidenceAmino): _59.Evidence;
            toAmino(message: _59.Evidence): _59.EvidenceAmino;
            fromAminoMsg(object: _59.EvidenceAminoMsg): _59.Evidence;
            fromProtoMsg(message: _59.EvidenceProtoMsg): _59.Evidence;
            toProto(message: _59.Evidence): Uint8Array;
            toProtoMsg(message: _59.Evidence): _59.EvidenceProtoMsg;
        };
        Snapshot: {
            encode(message: _59.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _59.Snapshot;
            fromAmino(object: _59.SnapshotAmino): _59.Snapshot;
            toAmino(message: _59.Snapshot): _59.SnapshotAmino;
            fromAminoMsg(object: _59.SnapshotAminoMsg): _59.Snapshot;
            fromProtoMsg(message: _59.SnapshotProtoMsg): _59.Snapshot;
            toProto(message: _59.Snapshot): Uint8Array;
            toProtoMsg(message: _59.Snapshot): _59.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _61.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Proof;
            fromPartial(object: {
                total?: string | number | import("long").Long;
                index?: string | number | import("long").Long;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _61.Proof;
            fromAmino(object: _61.ProofAmino): _61.Proof;
            toAmino(message: _61.Proof): _61.ProofAmino;
            fromAminoMsg(object: _61.ProofAminoMsg): _61.Proof;
            fromProtoMsg(message: _61.ProofProtoMsg): _61.Proof;
            toProto(message: _61.Proof): Uint8Array;
            toProtoMsg(message: _61.Proof): _61.ProofProtoMsg;
        };
        ValueOp: {
            encode(message: _61.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _61.ValueOp;
            fromAmino(object: _61.ValueOpAmino): _61.ValueOp;
            toAmino(message: _61.ValueOp): _61.ValueOpAmino;
            fromAminoMsg(object: _61.ValueOpAminoMsg): _61.ValueOp;
            fromProtoMsg(message: _61.ValueOpProtoMsg): _61.ValueOp;
            toProto(message: _61.ValueOp): Uint8Array;
            toProtoMsg(message: _61.ValueOp): _61.ValueOpProtoMsg;
        };
        DominoOp: {
            encode(message: _61.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _61.DominoOp;
            fromAmino(object: _61.DominoOpAmino): _61.DominoOp;
            toAmino(message: _61.DominoOp): _61.DominoOpAmino;
            fromAminoMsg(object: _61.DominoOpAminoMsg): _61.DominoOp;
            fromProtoMsg(message: _61.DominoOpProtoMsg): _61.DominoOp;
            toProto(message: _61.DominoOp): Uint8Array;
            toProtoMsg(message: _61.DominoOp): _61.DominoOpProtoMsg;
        };
        ProofOp: {
            encode(message: _61.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _61.ProofOp;
            fromAmino(object: _61.ProofOpAmino): _61.ProofOp;
            toAmino(message: _61.ProofOp): _61.ProofOpAmino;
            fromAminoMsg(object: _61.ProofOpAminoMsg): _61.ProofOp;
            fromProtoMsg(message: _61.ProofOpProtoMsg): _61.ProofOp;
            toProto(message: _61.ProofOp): Uint8Array;
            toProtoMsg(message: _61.ProofOp): _61.ProofOpProtoMsg;
        };
        ProofOps: {
            encode(message: _61.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _61.ProofOps;
            fromAmino(object: _61.ProofOpsAmino): _61.ProofOps;
            toAmino(message: _61.ProofOps): _61.ProofOpsAmino;
            fromAminoMsg(object: _61.ProofOpsAminoMsg): _61.ProofOps;
            fromProtoMsg(message: _61.ProofOpsProtoMsg): _61.ProofOps;
            toProto(message: _61.ProofOps): Uint8Array;
            toProtoMsg(message: _61.ProofOps): _61.ProofOpsProtoMsg;
        };
        PublicKey: {
            encode(message: _60.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _60.PublicKey;
            fromAmino(object: _60.PublicKeyAmino): _60.PublicKey;
            toAmino(message: _60.PublicKey): _60.PublicKeyAmino;
            fromAminoMsg(object: _60.PublicKeyAminoMsg): _60.PublicKey;
            fromProtoMsg(message: _60.PublicKeyProtoMsg): _60.PublicKey;
            toProto(message: _60.PublicKey): Uint8Array;
            toProtoMsg(message: _60.PublicKey): _60.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _62.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long").Long;
                    elems?: (string | number | import("long").Long)[];
                }): _62.BitArray;
                fromAmino(object: _62.BitArrayAmino): _62.BitArray;
                toAmino(message: _62.BitArray): _62.BitArrayAmino;
                fromAminoMsg(object: _62.BitArrayAminoMsg): _62.BitArray;
                fromProtoMsg(message: _62.BitArrayProtoMsg): _62.BitArray;
                toProto(message: _62.BitArray): Uint8Array;
                toProtoMsg(message: _62.BitArray): _62.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _63.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.NetAddress;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _63.NetAddress;
            fromAmino(object: _63.NetAddressAmino): _63.NetAddress;
            toAmino(message: _63.NetAddress): _63.NetAddressAmino;
            fromAminoMsg(object: _63.NetAddressAminoMsg): _63.NetAddress;
            fromProtoMsg(message: _63.NetAddressProtoMsg): _63.NetAddress;
            toProto(message: _63.NetAddress): Uint8Array;
            toProtoMsg(message: _63.NetAddress): _63.NetAddressProtoMsg;
        };
        ProtocolVersion: {
            encode(message: _63.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long").Long;
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _63.ProtocolVersion;
            fromAmino(object: _63.ProtocolVersionAmino): _63.ProtocolVersion;
            toAmino(message: _63.ProtocolVersion): _63.ProtocolVersionAmino;
            fromAminoMsg(object: _63.ProtocolVersionAminoMsg): _63.ProtocolVersion;
            fromProtoMsg(message: _63.ProtocolVersionProtoMsg): _63.ProtocolVersion;
            toProto(message: _63.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _63.ProtocolVersion): _63.ProtocolVersionProtoMsg;
        };
        DefaultNodeInfo: {
            encode(message: _63.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DefaultNodeInfo;
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
            }): _63.DefaultNodeInfo;
            fromAmino(object: _63.DefaultNodeInfoAmino): _63.DefaultNodeInfo;
            toAmino(message: _63.DefaultNodeInfo): _63.DefaultNodeInfoAmino;
            fromAminoMsg(object: _63.DefaultNodeInfoAminoMsg): _63.DefaultNodeInfo;
            fromProtoMsg(message: _63.DefaultNodeInfoProtoMsg): _63.DefaultNodeInfo;
            toProto(message: _63.DefaultNodeInfo): Uint8Array;
            toProtoMsg(message: _63.DefaultNodeInfo): _63.DefaultNodeInfoProtoMsg;
        };
        DefaultNodeInfoOther: {
            encode(message: _63.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DefaultNodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _63.DefaultNodeInfoOther;
            fromAmino(object: _63.DefaultNodeInfoOtherAmino): _63.DefaultNodeInfoOther;
            toAmino(message: _63.DefaultNodeInfoOther): _63.DefaultNodeInfoOtherAmino;
            fromAminoMsg(object: _63.DefaultNodeInfoOtherAminoMsg): _63.DefaultNodeInfoOther;
            fromProtoMsg(message: _63.DefaultNodeInfoOtherProtoMsg): _63.DefaultNodeInfoOther;
            toProto(message: _63.DefaultNodeInfoOther): Uint8Array;
            toProtoMsg(message: _63.DefaultNodeInfoOther): _63.DefaultNodeInfoOtherProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _68.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ValidatorSet;
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
            }): _68.ValidatorSet;
            fromAmino(object: _68.ValidatorSetAmino): _68.ValidatorSet;
            toAmino(message: _68.ValidatorSet): _68.ValidatorSetAmino;
            fromAminoMsg(object: _68.ValidatorSetAminoMsg): _68.ValidatorSet;
            fromProtoMsg(message: _68.ValidatorSetProtoMsg): _68.ValidatorSet;
            toProto(message: _68.ValidatorSet): Uint8Array;
            toProtoMsg(message: _68.ValidatorSet): _68.ValidatorSetProtoMsg;
        };
        Validator: {
            encode(message: _68.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
                proposerPriority?: string | number | import("long").Long;
            }): _68.Validator;
            fromAmino(object: _68.ValidatorAmino): _68.Validator;
            toAmino(message: _68.Validator): _68.ValidatorAmino;
            fromAminoMsg(object: _68.ValidatorAminoMsg): _68.Validator;
            fromProtoMsg(message: _68.ValidatorProtoMsg): _68.Validator;
            toProto(message: _68.Validator): Uint8Array;
            toProtoMsg(message: _68.Validator): _68.ValidatorProtoMsg;
        };
        SimpleValidator: {
            encode(message: _68.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
            }): _68.SimpleValidator;
            fromAmino(object: _68.SimpleValidatorAmino): _68.SimpleValidator;
            toAmino(message: _68.SimpleValidator): _68.SimpleValidatorAmino;
            fromAminoMsg(object: _68.SimpleValidatorAminoMsg): _68.SimpleValidator;
            fromProtoMsg(message: _68.SimpleValidatorProtoMsg): _68.SimpleValidator;
            toProto(message: _68.SimpleValidator): Uint8Array;
            toProtoMsg(message: _68.SimpleValidator): _68.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _67.BlockIDFlag;
        blockIDFlagToJSON(object: _67.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _67.SignedMsgType;
        signedMsgTypeToJSON(object: _67.SignedMsgType): string;
        BlockIDFlag: typeof _67.BlockIDFlag;
        BlockIDFlagSDKType: typeof _67.BlockIDFlag;
        BlockIDFlagAmino: typeof _67.BlockIDFlag;
        SignedMsgType: typeof _67.SignedMsgType;
        SignedMsgTypeSDKType: typeof _67.SignedMsgType;
        SignedMsgTypeAmino: typeof _67.SignedMsgType;
        PartSetHeader: {
            encode(message: _67.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _67.PartSetHeader;
            fromAmino(object: _67.PartSetHeaderAmino): _67.PartSetHeader;
            toAmino(message: _67.PartSetHeader): _67.PartSetHeaderAmino;
            fromAminoMsg(object: _67.PartSetHeaderAminoMsg): _67.PartSetHeader;
            fromProtoMsg(message: _67.PartSetHeaderProtoMsg): _67.PartSetHeader;
            toProto(message: _67.PartSetHeader): Uint8Array;
            toProtoMsg(message: _67.PartSetHeader): _67.PartSetHeaderProtoMsg;
        };
        Part: {
            encode(message: _67.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _67.Part;
            fromAmino(object: _67.PartAmino): _67.Part;
            toAmino(message: _67.Part): _67.PartAmino;
            fromAminoMsg(object: _67.PartAminoMsg): _67.Part;
            fromProtoMsg(message: _67.PartProtoMsg): _67.Part;
            toProto(message: _67.Part): Uint8Array;
            toProtoMsg(message: _67.Part): _67.PartProtoMsg;
        };
        BlockID: {
            encode(message: _67.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _67.BlockID;
            fromAmino(object: _67.BlockIDAmino): _67.BlockID;
            toAmino(message: _67.BlockID): _67.BlockIDAmino;
            fromAminoMsg(object: _67.BlockIDAminoMsg): _67.BlockID;
            fromProtoMsg(message: _67.BlockIDProtoMsg): _67.BlockID;
            toProto(message: _67.BlockID): Uint8Array;
            toProtoMsg(message: _67.BlockID): _67.BlockIDProtoMsg;
        };
        Header: {
            encode(message: _67.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Header;
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
            }): _67.Header;
            fromAmino(object: _67.HeaderAmino): _67.Header;
            toAmino(message: _67.Header): _67.HeaderAmino;
            fromAminoMsg(object: _67.HeaderAminoMsg): _67.Header;
            fromProtoMsg(message: _67.HeaderProtoMsg): _67.Header;
            toProto(message: _67.Header): Uint8Array;
            toProtoMsg(message: _67.Header): _67.HeaderProtoMsg;
        };
        Data: {
            encode(message: _67.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _67.Data;
            fromAmino(object: _67.DataAmino): _67.Data;
            toAmino(message: _67.Data): _67.DataAmino;
            fromAminoMsg(object: _67.DataAminoMsg): _67.Data;
            fromProtoMsg(message: _67.DataProtoMsg): _67.Data;
            toProto(message: _67.Data): Uint8Array;
            toProtoMsg(message: _67.Data): _67.DataProtoMsg;
        };
        Vote: {
            encode(message: _67.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Vote;
            fromPartial(object: {
                type?: _67.SignedMsgType;
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
            }): _67.Vote;
            fromAmino(object: _67.VoteAmino): _67.Vote;
            toAmino(message: _67.Vote): _67.VoteAmino;
            fromAminoMsg(object: _67.VoteAminoMsg): _67.Vote;
            fromProtoMsg(message: _67.VoteProtoMsg): _67.Vote;
            toProto(message: _67.Vote): Uint8Array;
            toProtoMsg(message: _67.Vote): _67.VoteProtoMsg;
        };
        Commit: {
            encode(message: _67.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Commit;
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
                    blockIdFlag?: _67.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _67.Commit;
            fromAmino(object: _67.CommitAmino): _67.Commit;
            toAmino(message: _67.Commit): _67.CommitAmino;
            fromAminoMsg(object: _67.CommitAminoMsg): _67.Commit;
            fromProtoMsg(message: _67.CommitProtoMsg): _67.Commit;
            toProto(message: _67.Commit): Uint8Array;
            toProtoMsg(message: _67.Commit): _67.CommitProtoMsg;
        };
        CommitSig: {
            encode(message: _67.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _67.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _67.CommitSig;
            fromAmino(object: _67.CommitSigAmino): _67.CommitSig;
            toAmino(message: _67.CommitSig): _67.CommitSigAmino;
            fromAminoMsg(object: _67.CommitSigAminoMsg): _67.CommitSig;
            fromProtoMsg(message: _67.CommitSigProtoMsg): _67.CommitSig;
            toProto(message: _67.CommitSig): Uint8Array;
            toProtoMsg(message: _67.CommitSig): _67.CommitSigProtoMsg;
        };
        Proposal: {
            encode(message: _67.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Proposal;
            fromPartial(object: {
                type?: _67.SignedMsgType;
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
            }): _67.Proposal;
            fromAmino(object: _67.ProposalAmino): _67.Proposal;
            toAmino(message: _67.Proposal): _67.ProposalAmino;
            fromAminoMsg(object: _67.ProposalAminoMsg): _67.Proposal;
            fromProtoMsg(message: _67.ProposalProtoMsg): _67.Proposal;
            toProto(message: _67.Proposal): Uint8Array;
            toProtoMsg(message: _67.Proposal): _67.ProposalProtoMsg;
        };
        SignedHeader: {
            encode(message: _67.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.SignedHeader;
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
                        blockIdFlag?: _67.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _67.SignedHeader;
            fromAmino(object: _67.SignedHeaderAmino): _67.SignedHeader;
            toAmino(message: _67.SignedHeader): _67.SignedHeaderAmino;
            fromAminoMsg(object: _67.SignedHeaderAminoMsg): _67.SignedHeader;
            fromProtoMsg(message: _67.SignedHeaderProtoMsg): _67.SignedHeader;
            toProto(message: _67.SignedHeader): Uint8Array;
            toProtoMsg(message: _67.SignedHeader): _67.SignedHeaderProtoMsg;
        };
        LightBlock: {
            encode(message: _67.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.LightBlock;
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
                            blockIdFlag?: _67.BlockIDFlag;
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
            }): _67.LightBlock;
            fromAmino(object: _67.LightBlockAmino): _67.LightBlock;
            toAmino(message: _67.LightBlock): _67.LightBlockAmino;
            fromAminoMsg(object: _67.LightBlockAminoMsg): _67.LightBlock;
            fromProtoMsg(message: _67.LightBlockProtoMsg): _67.LightBlock;
            toProto(message: _67.LightBlock): Uint8Array;
            toProtoMsg(message: _67.LightBlock): _67.LightBlockProtoMsg;
        };
        BlockMeta: {
            encode(message: _67.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.BlockMeta;
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
            }): _67.BlockMeta;
            fromAmino(object: _67.BlockMetaAmino): _67.BlockMeta;
            toAmino(message: _67.BlockMeta): _67.BlockMetaAmino;
            fromAminoMsg(object: _67.BlockMetaAminoMsg): _67.BlockMeta;
            fromProtoMsg(message: _67.BlockMetaProtoMsg): _67.BlockMeta;
            toProto(message: _67.BlockMeta): Uint8Array;
            toProtoMsg(message: _67.BlockMeta): _67.BlockMetaProtoMsg;
        };
        TxProof: {
            encode(message: _67.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _67.TxProof;
            fromAmino(object: _67.TxProofAmino): _67.TxProof;
            toAmino(message: _67.TxProof): _67.TxProofAmino;
            fromAminoMsg(object: _67.TxProofAminoMsg): _67.TxProof;
            fromProtoMsg(message: _67.TxProofProtoMsg): _67.TxProof;
            toProto(message: _67.TxProof): Uint8Array;
            toProtoMsg(message: _67.TxProof): _67.TxProofProtoMsg;
        };
        ConsensusParams: {
            encode(message: _66.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ConsensusParams;
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
            }): _66.ConsensusParams;
            fromAmino(object: _66.ConsensusParamsAmino): _66.ConsensusParams;
            toAmino(message: _66.ConsensusParams): _66.ConsensusParamsAmino;
            fromAminoMsg(object: _66.ConsensusParamsAminoMsg): _66.ConsensusParams;
            fromProtoMsg(message: _66.ConsensusParamsProtoMsg): _66.ConsensusParams;
            toProto(message: _66.ConsensusParams): Uint8Array;
            toProtoMsg(message: _66.ConsensusParams): _66.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            encode(message: _66.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long;
                maxGas?: string | number | import("long").Long;
                timeIotaMs?: string | number | import("long").Long;
            }): _66.BlockParams;
            fromAmino(object: _66.BlockParamsAmino): _66.BlockParams;
            toAmino(message: _66.BlockParams): _66.BlockParamsAmino;
            fromAminoMsg(object: _66.BlockParamsAminoMsg): _66.BlockParams;
            fromProtoMsg(message: _66.BlockParamsProtoMsg): _66.BlockParams;
            toProto(message: _66.BlockParams): Uint8Array;
            toProtoMsg(message: _66.BlockParams): _66.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            encode(message: _66.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long").Long;
                maxAgeDuration?: {
                    seconds?: string | number | import("long").Long;
                    nanos?: number;
                };
                maxBytes?: string | number | import("long").Long;
            }): _66.EvidenceParams;
            fromAmino(object: _66.EvidenceParamsAmino): _66.EvidenceParams;
            toAmino(message: _66.EvidenceParams): _66.EvidenceParamsAmino;
            fromAminoMsg(object: _66.EvidenceParamsAminoMsg): _66.EvidenceParams;
            fromProtoMsg(message: _66.EvidenceParamsProtoMsg): _66.EvidenceParams;
            toProto(message: _66.EvidenceParams): Uint8Array;
            toProtoMsg(message: _66.EvidenceParams): _66.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            encode(message: _66.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _66.ValidatorParams;
            fromAmino(object: _66.ValidatorParamsAmino): _66.ValidatorParams;
            toAmino(message: _66.ValidatorParams): _66.ValidatorParamsAmino;
            fromAminoMsg(object: _66.ValidatorParamsAminoMsg): _66.ValidatorParams;
            fromProtoMsg(message: _66.ValidatorParamsProtoMsg): _66.ValidatorParams;
            toProto(message: _66.ValidatorParams): Uint8Array;
            toProtoMsg(message: _66.ValidatorParams): _66.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            encode(message: _66.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.VersionParams;
            fromPartial(object: {
                appVersion?: string | number | import("long").Long;
            }): _66.VersionParams;
            fromAmino(object: _66.VersionParamsAmino): _66.VersionParams;
            toAmino(message: _66.VersionParams): _66.VersionParamsAmino;
            fromAminoMsg(object: _66.VersionParamsAminoMsg): _66.VersionParams;
            fromProtoMsg(message: _66.VersionParamsProtoMsg): _66.VersionParams;
            toProto(message: _66.VersionParams): Uint8Array;
            toProtoMsg(message: _66.VersionParams): _66.VersionParamsProtoMsg;
        };
        HashedParams: {
            encode(message: _66.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long").Long;
                blockMaxGas?: string | number | import("long").Long;
            }): _66.HashedParams;
            fromAmino(object: _66.HashedParamsAmino): _66.HashedParams;
            toAmino(message: _66.HashedParams): _66.HashedParamsAmino;
            fromAminoMsg(object: _66.HashedParamsAminoMsg): _66.HashedParams;
            fromProtoMsg(message: _66.HashedParamsProtoMsg): _66.HashedParams;
            toProto(message: _66.HashedParams): Uint8Array;
            toProtoMsg(message: _66.HashedParams): _66.HashedParamsProtoMsg;
        };
        Evidence: {
            encode(message: _65.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _67.SignedMsgType;
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
                        type?: _67.SignedMsgType;
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
                                    blockIdFlag?: _67.BlockIDFlag;
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
            }): _65.Evidence;
            fromAmino(object: _65.EvidenceAmino): _65.Evidence;
            toAmino(message: _65.Evidence): _65.EvidenceAmino;
            fromAminoMsg(object: _65.EvidenceAminoMsg): _65.Evidence;
            fromProtoMsg(message: _65.EvidenceProtoMsg): _65.Evidence;
            toProto(message: _65.Evidence): Uint8Array;
            toProtoMsg(message: _65.Evidence): _65.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            encode(message: _65.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _67.SignedMsgType;
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
                    type?: _67.SignedMsgType;
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
            }): _65.DuplicateVoteEvidence;
            fromAmino(object: _65.DuplicateVoteEvidenceAmino): _65.DuplicateVoteEvidence;
            toAmino(message: _65.DuplicateVoteEvidence): _65.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _65.DuplicateVoteEvidenceAminoMsg): _65.DuplicateVoteEvidence;
            fromProtoMsg(message: _65.DuplicateVoteEvidenceProtoMsg): _65.DuplicateVoteEvidence;
            toProto(message: _65.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _65.DuplicateVoteEvidence): _65.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            encode(message: _65.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.LightClientAttackEvidence;
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
                                blockIdFlag?: _67.BlockIDFlag;
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
            }): _65.LightClientAttackEvidence;
            fromAmino(object: _65.LightClientAttackEvidenceAmino): _65.LightClientAttackEvidence;
            toAmino(message: _65.LightClientAttackEvidence): _65.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _65.LightClientAttackEvidenceAminoMsg): _65.LightClientAttackEvidence;
            fromProtoMsg(message: _65.LightClientAttackEvidenceProtoMsg): _65.LightClientAttackEvidence;
            toProto(message: _65.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _65.LightClientAttackEvidence): _65.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            encode(message: _65.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _67.SignedMsgType;
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
                            type?: _67.SignedMsgType;
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
                                        blockIdFlag?: _67.BlockIDFlag;
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
            }): _65.EvidenceList;
            fromAmino(object: _65.EvidenceListAmino): _65.EvidenceList;
            toAmino(message: _65.EvidenceList): _65.EvidenceListAmino;
            fromAminoMsg(object: _65.EvidenceListAminoMsg): _65.EvidenceList;
            fromProtoMsg(message: _65.EvidenceListProtoMsg): _65.EvidenceList;
            toProto(message: _65.EvidenceList): Uint8Array;
            toProtoMsg(message: _65.EvidenceList): _65.EvidenceListProtoMsg;
        };
        Block: {
            encode(message: _64.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Block;
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
                                type?: _67.SignedMsgType;
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
                                type?: _67.SignedMsgType;
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
                                            blockIdFlag?: _67.BlockIDFlag;
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
                        blockIdFlag?: _67.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _64.Block;
            fromAmino(object: _64.BlockAmino): _64.Block;
            toAmino(message: _64.Block): _64.BlockAmino;
            fromAminoMsg(object: _64.BlockAminoMsg): _64.Block;
            fromProtoMsg(message: _64.BlockProtoMsg): _64.Block;
            toProto(message: _64.Block): Uint8Array;
            toProtoMsg(message: _64.Block): _64.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            encode(message: _69.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.App;
            fromPartial(object: {
                protocol?: string | number | import("long").Long;
                software?: string;
            }): _69.App;
            fromAmino(object: _69.AppAmino): _69.App;
            toAmino(message: _69.App): _69.AppAmino;
            fromAminoMsg(object: _69.AppAminoMsg): _69.App;
            fromProtoMsg(message: _69.AppProtoMsg): _69.App;
            toProto(message: _69.App): Uint8Array;
            toProtoMsg(message: _69.App): _69.AppProtoMsg;
        };
        Consensus: {
            encode(message: _69.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Consensus;
            fromPartial(object: {
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _69.Consensus;
            fromAmino(object: _69.ConsensusAmino): _69.Consensus;
            toAmino(message: _69.Consensus): _69.ConsensusAmino;
            fromAminoMsg(object: _69.ConsensusAminoMsg): _69.Consensus;
            fromProtoMsg(message: _69.ConsensusProtoMsg): _69.Consensus;
            toProto(message: _69.Consensus): Uint8Array;
            toProtoMsg(message: _69.Consensus): _69.ConsensusProtoMsg;
        };
    };
}
