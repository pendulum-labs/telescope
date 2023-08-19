/// <reference types="long" />
import * as _62 from "./abci/types";
import * as _63 from "./crypto/keys";
import * as _64 from "./crypto/proof";
import * as _65 from "./libs/bits/types";
import * as _66 from "./p2p/types";
import * as _67 from "./types/block";
import * as _68 from "./types/evidence";
import * as _69 from "./types/params";
import * as _70 from "./types/types";
import * as _71 from "./types/validator";
import * as _72 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _62.CheckTxType;
        checkTxTypeToJSON(object: _62.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _62.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _62.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _62.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _62.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _62.EvidenceType;
        evidenceTypeToJSON(object: _62.EvidenceType): string;
        CheckTxType: typeof _62.CheckTxType;
        CheckTxTypeSDKType: typeof _62.CheckTxType;
        CheckTxTypeAmino: typeof _62.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _62.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _62.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _62.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _62.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _62.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _62.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _62.EvidenceType;
        EvidenceTypeSDKType: typeof _62.EvidenceType;
        EvidenceTypeAmino: typeof _62.EvidenceType;
        Request: {
            encode(message: _62.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Request;
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
                        type?: _62.EvidenceType;
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
                    type?: _62.CheckTxType;
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
            }): _62.Request;
            fromAmino(object: _62.RequestAmino): _62.Request;
            toAmino(message: _62.Request): _62.RequestAmino;
            fromAminoMsg(object: _62.RequestAminoMsg): _62.Request;
            fromProtoMsg(message: _62.RequestProtoMsg): _62.Request;
            toProto(message: _62.Request): Uint8Array;
            toProtoMsg(message: _62.Request): _62.RequestProtoMsg;
        };
        RequestEcho: {
            encode(message: _62.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _62.RequestEcho;
            fromAmino(object: _62.RequestEchoAmino): _62.RequestEcho;
            toAmino(message: _62.RequestEcho): _62.RequestEchoAmino;
            fromAminoMsg(object: _62.RequestEchoAminoMsg): _62.RequestEcho;
            fromProtoMsg(message: _62.RequestEchoProtoMsg): _62.RequestEcho;
            toProto(message: _62.RequestEcho): Uint8Array;
            toProtoMsg(message: _62.RequestEcho): _62.RequestEchoProtoMsg;
        };
        RequestFlush: {
            encode(_: _62.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestFlush;
            fromPartial(_: {}): _62.RequestFlush;
            fromAmino(_: _62.RequestFlushAmino): _62.RequestFlush;
            toAmino(_: _62.RequestFlush): _62.RequestFlushAmino;
            fromAminoMsg(object: _62.RequestFlushAminoMsg): _62.RequestFlush;
            fromProtoMsg(message: _62.RequestFlushProtoMsg): _62.RequestFlush;
            toProto(message: _62.RequestFlush): Uint8Array;
            toProtoMsg(message: _62.RequestFlush): _62.RequestFlushProtoMsg;
        };
        RequestInfo: {
            encode(message: _62.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long").Long;
                p2pVersion?: string | number | import("long").Long;
            }): _62.RequestInfo;
            fromAmino(object: _62.RequestInfoAmino): _62.RequestInfo;
            toAmino(message: _62.RequestInfo): _62.RequestInfoAmino;
            fromAminoMsg(object: _62.RequestInfoAminoMsg): _62.RequestInfo;
            fromProtoMsg(message: _62.RequestInfoProtoMsg): _62.RequestInfo;
            toProto(message: _62.RequestInfo): Uint8Array;
            toProtoMsg(message: _62.RequestInfo): _62.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            encode(message: _62.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _62.RequestSetOption;
            fromAmino(object: _62.RequestSetOptionAmino): _62.RequestSetOption;
            toAmino(message: _62.RequestSetOption): _62.RequestSetOptionAmino;
            fromAminoMsg(object: _62.RequestSetOptionAminoMsg): _62.RequestSetOption;
            fromProtoMsg(message: _62.RequestSetOptionProtoMsg): _62.RequestSetOption;
            toProto(message: _62.RequestSetOption): Uint8Array;
            toProtoMsg(message: _62.RequestSetOption): _62.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            encode(message: _62.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestInitChain;
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
            }): _62.RequestInitChain;
            fromAmino(object: _62.RequestInitChainAmino): _62.RequestInitChain;
            toAmino(message: _62.RequestInitChain): _62.RequestInitChainAmino;
            fromAminoMsg(object: _62.RequestInitChainAminoMsg): _62.RequestInitChain;
            fromProtoMsg(message: _62.RequestInitChainProtoMsg): _62.RequestInitChain;
            toProto(message: _62.RequestInitChain): Uint8Array;
            toProtoMsg(message: _62.RequestInitChain): _62.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            encode(message: _62.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long").Long;
                prove?: boolean;
            }): _62.RequestQuery;
            fromAmino(object: _62.RequestQueryAmino): _62.RequestQuery;
            toAmino(message: _62.RequestQuery): _62.RequestQueryAmino;
            fromAminoMsg(object: _62.RequestQueryAminoMsg): _62.RequestQuery;
            fromProtoMsg(message: _62.RequestQueryProtoMsg): _62.RequestQuery;
            toProto(message: _62.RequestQuery): Uint8Array;
            toProtoMsg(message: _62.RequestQuery): _62.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            encode(message: _62.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestBeginBlock;
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
                    type?: _62.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    height?: string | number | import("long").Long;
                    time?: Date;
                    totalVotingPower?: string | number | import("long").Long;
                }[];
            }): _62.RequestBeginBlock;
            fromAmino(object: _62.RequestBeginBlockAmino): _62.RequestBeginBlock;
            toAmino(message: _62.RequestBeginBlock): _62.RequestBeginBlockAmino;
            fromAminoMsg(object: _62.RequestBeginBlockAminoMsg): _62.RequestBeginBlock;
            fromProtoMsg(message: _62.RequestBeginBlockProtoMsg): _62.RequestBeginBlock;
            toProto(message: _62.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _62.RequestBeginBlock): _62.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            encode(message: _62.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _62.CheckTxType;
            }): _62.RequestCheckTx;
            fromAmino(object: _62.RequestCheckTxAmino): _62.RequestCheckTx;
            toAmino(message: _62.RequestCheckTx): _62.RequestCheckTxAmino;
            fromAminoMsg(object: _62.RequestCheckTxAminoMsg): _62.RequestCheckTx;
            fromProtoMsg(message: _62.RequestCheckTxProtoMsg): _62.RequestCheckTx;
            toProto(message: _62.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _62.RequestCheckTx): _62.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            encode(message: _62.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _62.RequestDeliverTx;
            fromAmino(object: _62.RequestDeliverTxAmino): _62.RequestDeliverTx;
            toAmino(message: _62.RequestDeliverTx): _62.RequestDeliverTxAmino;
            fromAminoMsg(object: _62.RequestDeliverTxAminoMsg): _62.RequestDeliverTx;
            fromProtoMsg(message: _62.RequestDeliverTxProtoMsg): _62.RequestDeliverTx;
            toProto(message: _62.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _62.RequestDeliverTx): _62.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            encode(message: _62.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestEndBlock;
            fromPartial(object: {
                height?: string | number | import("long").Long;
            }): _62.RequestEndBlock;
            fromAmino(object: _62.RequestEndBlockAmino): _62.RequestEndBlock;
            toAmino(message: _62.RequestEndBlock): _62.RequestEndBlockAmino;
            fromAminoMsg(object: _62.RequestEndBlockAminoMsg): _62.RequestEndBlock;
            fromProtoMsg(message: _62.RequestEndBlockProtoMsg): _62.RequestEndBlock;
            toProto(message: _62.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _62.RequestEndBlock): _62.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            encode(_: _62.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestCommit;
            fromPartial(_: {}): _62.RequestCommit;
            fromAmino(_: _62.RequestCommitAmino): _62.RequestCommit;
            toAmino(_: _62.RequestCommit): _62.RequestCommitAmino;
            fromAminoMsg(object: _62.RequestCommitAminoMsg): _62.RequestCommit;
            fromProtoMsg(message: _62.RequestCommitProtoMsg): _62.RequestCommit;
            toProto(message: _62.RequestCommit): Uint8Array;
            toProtoMsg(message: _62.RequestCommit): _62.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            encode(_: _62.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestListSnapshots;
            fromPartial(_: {}): _62.RequestListSnapshots;
            fromAmino(_: _62.RequestListSnapshotsAmino): _62.RequestListSnapshots;
            toAmino(_: _62.RequestListSnapshots): _62.RequestListSnapshotsAmino;
            fromAminoMsg(object: _62.RequestListSnapshotsAminoMsg): _62.RequestListSnapshots;
            fromProtoMsg(message: _62.RequestListSnapshotsProtoMsg): _62.RequestListSnapshots;
            toProto(message: _62.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _62.RequestListSnapshots): _62.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            encode(message: _62.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _62.RequestOfferSnapshot;
            fromAmino(object: _62.RequestOfferSnapshotAmino): _62.RequestOfferSnapshot;
            toAmino(message: _62.RequestOfferSnapshot): _62.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _62.RequestOfferSnapshotAminoMsg): _62.RequestOfferSnapshot;
            fromProtoMsg(message: _62.RequestOfferSnapshotProtoMsg): _62.RequestOfferSnapshot;
            toProto(message: _62.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _62.RequestOfferSnapshot): _62.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _62.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunk?: number;
            }): _62.RequestLoadSnapshotChunk;
            fromAmino(object: _62.RequestLoadSnapshotChunkAmino): _62.RequestLoadSnapshotChunk;
            toAmino(message: _62.RequestLoadSnapshotChunk): _62.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _62.RequestLoadSnapshotChunkAminoMsg): _62.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _62.RequestLoadSnapshotChunkProtoMsg): _62.RequestLoadSnapshotChunk;
            toProto(message: _62.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _62.RequestLoadSnapshotChunk): _62.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            encode(message: _62.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _62.RequestApplySnapshotChunk;
            fromAmino(object: _62.RequestApplySnapshotChunkAmino): _62.RequestApplySnapshotChunk;
            toAmino(message: _62.RequestApplySnapshotChunk): _62.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _62.RequestApplySnapshotChunkAminoMsg): _62.RequestApplySnapshotChunk;
            fromProtoMsg(message: _62.RequestApplySnapshotChunkProtoMsg): _62.RequestApplySnapshotChunk;
            toProto(message: _62.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _62.RequestApplySnapshotChunk): _62.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            encode(message: _62.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Response;
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
                    result?: _62.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _62.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _62.Response;
            fromAmino(object: _62.ResponseAmino): _62.Response;
            toAmino(message: _62.Response): _62.ResponseAmino;
            fromAminoMsg(object: _62.ResponseAminoMsg): _62.Response;
            fromProtoMsg(message: _62.ResponseProtoMsg): _62.Response;
            toProto(message: _62.Response): Uint8Array;
            toProtoMsg(message: _62.Response): _62.ResponseProtoMsg;
        };
        ResponseException: {
            encode(message: _62.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _62.ResponseException;
            fromAmino(object: _62.ResponseExceptionAmino): _62.ResponseException;
            toAmino(message: _62.ResponseException): _62.ResponseExceptionAmino;
            fromAminoMsg(object: _62.ResponseExceptionAminoMsg): _62.ResponseException;
            fromProtoMsg(message: _62.ResponseExceptionProtoMsg): _62.ResponseException;
            toProto(message: _62.ResponseException): Uint8Array;
            toProtoMsg(message: _62.ResponseException): _62.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            encode(message: _62.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _62.ResponseEcho;
            fromAmino(object: _62.ResponseEchoAmino): _62.ResponseEcho;
            toAmino(message: _62.ResponseEcho): _62.ResponseEchoAmino;
            fromAminoMsg(object: _62.ResponseEchoAminoMsg): _62.ResponseEcho;
            fromProtoMsg(message: _62.ResponseEchoProtoMsg): _62.ResponseEcho;
            toProto(message: _62.ResponseEcho): Uint8Array;
            toProtoMsg(message: _62.ResponseEcho): _62.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            encode(_: _62.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseFlush;
            fromPartial(_: {}): _62.ResponseFlush;
            fromAmino(_: _62.ResponseFlushAmino): _62.ResponseFlush;
            toAmino(_: _62.ResponseFlush): _62.ResponseFlushAmino;
            fromAminoMsg(object: _62.ResponseFlushAminoMsg): _62.ResponseFlush;
            fromProtoMsg(message: _62.ResponseFlushProtoMsg): _62.ResponseFlush;
            toProto(message: _62.ResponseFlush): Uint8Array;
            toProtoMsg(message: _62.ResponseFlush): _62.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            encode(message: _62.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long").Long;
                lastBlockHeight?: string | number | import("long").Long;
                lastBlockAppHash?: Uint8Array;
            }): _62.ResponseInfo;
            fromAmino(object: _62.ResponseInfoAmino): _62.ResponseInfo;
            toAmino(message: _62.ResponseInfo): _62.ResponseInfoAmino;
            fromAminoMsg(object: _62.ResponseInfoAminoMsg): _62.ResponseInfo;
            fromProtoMsg(message: _62.ResponseInfoProtoMsg): _62.ResponseInfo;
            toProto(message: _62.ResponseInfo): Uint8Array;
            toProtoMsg(message: _62.ResponseInfo): _62.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            encode(message: _62.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _62.ResponseSetOption;
            fromAmino(object: _62.ResponseSetOptionAmino): _62.ResponseSetOption;
            toAmino(message: _62.ResponseSetOption): _62.ResponseSetOptionAmino;
            fromAminoMsg(object: _62.ResponseSetOptionAminoMsg): _62.ResponseSetOption;
            fromProtoMsg(message: _62.ResponseSetOptionProtoMsg): _62.ResponseSetOption;
            toProto(message: _62.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _62.ResponseSetOption): _62.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            encode(message: _62.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseInitChain;
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
            }): _62.ResponseInitChain;
            fromAmino(object: _62.ResponseInitChainAmino): _62.ResponseInitChain;
            toAmino(message: _62.ResponseInitChain): _62.ResponseInitChainAmino;
            fromAminoMsg(object: _62.ResponseInitChainAminoMsg): _62.ResponseInitChain;
            fromProtoMsg(message: _62.ResponseInitChainProtoMsg): _62.ResponseInitChain;
            toProto(message: _62.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _62.ResponseInitChain): _62.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            encode(message: _62.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseQuery;
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
            }): _62.ResponseQuery;
            fromAmino(object: _62.ResponseQueryAmino): _62.ResponseQuery;
            toAmino(message: _62.ResponseQuery): _62.ResponseQueryAmino;
            fromAminoMsg(object: _62.ResponseQueryAminoMsg): _62.ResponseQuery;
            fromProtoMsg(message: _62.ResponseQueryProtoMsg): _62.ResponseQuery;
            toProto(message: _62.ResponseQuery): Uint8Array;
            toProtoMsg(message: _62.ResponseQuery): _62.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            encode(message: _62.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _62.ResponseBeginBlock;
            fromAmino(object: _62.ResponseBeginBlockAmino): _62.ResponseBeginBlock;
            toAmino(message: _62.ResponseBeginBlock): _62.ResponseBeginBlockAmino;
            fromAminoMsg(object: _62.ResponseBeginBlockAminoMsg): _62.ResponseBeginBlock;
            fromProtoMsg(message: _62.ResponseBeginBlockProtoMsg): _62.ResponseBeginBlock;
            toProto(message: _62.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _62.ResponseBeginBlock): _62.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            encode(message: _62.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseCheckTx;
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
            }): _62.ResponseCheckTx;
            fromAmino(object: _62.ResponseCheckTxAmino): _62.ResponseCheckTx;
            toAmino(message: _62.ResponseCheckTx): _62.ResponseCheckTxAmino;
            fromAminoMsg(object: _62.ResponseCheckTxAminoMsg): _62.ResponseCheckTx;
            fromProtoMsg(message: _62.ResponseCheckTxProtoMsg): _62.ResponseCheckTx;
            toProto(message: _62.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _62.ResponseCheckTx): _62.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            encode(message: _62.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseDeliverTx;
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
            }): _62.ResponseDeliverTx;
            fromAmino(object: _62.ResponseDeliverTxAmino): _62.ResponseDeliverTx;
            toAmino(message: _62.ResponseDeliverTx): _62.ResponseDeliverTxAmino;
            fromAminoMsg(object: _62.ResponseDeliverTxAminoMsg): _62.ResponseDeliverTx;
            fromProtoMsg(message: _62.ResponseDeliverTxProtoMsg): _62.ResponseDeliverTx;
            toProto(message: _62.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _62.ResponseDeliverTx): _62.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            encode(message: _62.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseEndBlock;
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
            }): _62.ResponseEndBlock;
            fromAmino(object: _62.ResponseEndBlockAmino): _62.ResponseEndBlock;
            toAmino(message: _62.ResponseEndBlock): _62.ResponseEndBlockAmino;
            fromAminoMsg(object: _62.ResponseEndBlockAminoMsg): _62.ResponseEndBlock;
            fromProtoMsg(message: _62.ResponseEndBlockProtoMsg): _62.ResponseEndBlock;
            toProto(message: _62.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _62.ResponseEndBlock): _62.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            encode(message: _62.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long").Long;
            }): _62.ResponseCommit;
            fromAmino(object: _62.ResponseCommitAmino): _62.ResponseCommit;
            toAmino(message: _62.ResponseCommit): _62.ResponseCommitAmino;
            fromAminoMsg(object: _62.ResponseCommitAminoMsg): _62.ResponseCommit;
            fromProtoMsg(message: _62.ResponseCommitProtoMsg): _62.ResponseCommit;
            toProto(message: _62.ResponseCommit): Uint8Array;
            toProtoMsg(message: _62.ResponseCommit): _62.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            encode(message: _62.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _62.ResponseListSnapshots;
            fromAmino(object: _62.ResponseListSnapshotsAmino): _62.ResponseListSnapshots;
            toAmino(message: _62.ResponseListSnapshots): _62.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _62.ResponseListSnapshotsAminoMsg): _62.ResponseListSnapshots;
            fromProtoMsg(message: _62.ResponseListSnapshotsProtoMsg): _62.ResponseListSnapshots;
            toProto(message: _62.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _62.ResponseListSnapshots): _62.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            encode(message: _62.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _62.ResponseOfferSnapshot_Result;
            }): _62.ResponseOfferSnapshot;
            fromAmino(object: _62.ResponseOfferSnapshotAmino): _62.ResponseOfferSnapshot;
            toAmino(message: _62.ResponseOfferSnapshot): _62.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _62.ResponseOfferSnapshotAminoMsg): _62.ResponseOfferSnapshot;
            fromProtoMsg(message: _62.ResponseOfferSnapshotProtoMsg): _62.ResponseOfferSnapshot;
            toProto(message: _62.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _62.ResponseOfferSnapshot): _62.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _62.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _62.ResponseLoadSnapshotChunk;
            fromAmino(object: _62.ResponseLoadSnapshotChunkAmino): _62.ResponseLoadSnapshotChunk;
            toAmino(message: _62.ResponseLoadSnapshotChunk): _62.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _62.ResponseLoadSnapshotChunkAminoMsg): _62.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _62.ResponseLoadSnapshotChunkProtoMsg): _62.ResponseLoadSnapshotChunk;
            toProto(message: _62.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _62.ResponseLoadSnapshotChunk): _62.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _62.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _62.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _62.ResponseApplySnapshotChunk;
            fromAmino(object: _62.ResponseApplySnapshotChunkAmino): _62.ResponseApplySnapshotChunk;
            toAmino(message: _62.ResponseApplySnapshotChunk): _62.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _62.ResponseApplySnapshotChunkAminoMsg): _62.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _62.ResponseApplySnapshotChunkProtoMsg): _62.ResponseApplySnapshotChunk;
            toProto(message: _62.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _62.ResponseApplySnapshotChunk): _62.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            encode(message: _62.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ConsensusParams;
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
            }): _62.ConsensusParams;
            fromAmino(object: _62.ConsensusParamsAmino): _62.ConsensusParams;
            toAmino(message: _62.ConsensusParams): _62.ConsensusParamsAmino;
            fromAminoMsg(object: _62.ConsensusParamsAminoMsg): _62.ConsensusParams;
            fromProtoMsg(message: _62.ConsensusParamsProtoMsg): _62.ConsensusParams;
            toProto(message: _62.ConsensusParams): Uint8Array;
            toProtoMsg(message: _62.ConsensusParams): _62.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            encode(message: _62.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long;
                maxGas?: string | number | import("long").Long;
            }): _62.BlockParams;
            fromAmino(object: _62.BlockParamsAmino): _62.BlockParams;
            toAmino(message: _62.BlockParams): _62.BlockParamsAmino;
            fromAminoMsg(object: _62.BlockParamsAminoMsg): _62.BlockParams;
            fromProtoMsg(message: _62.BlockParamsProtoMsg): _62.BlockParams;
            toProto(message: _62.BlockParams): Uint8Array;
            toProtoMsg(message: _62.BlockParams): _62.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            encode(message: _62.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _62.LastCommitInfo;
            fromAmino(object: _62.LastCommitInfoAmino): _62.LastCommitInfo;
            toAmino(message: _62.LastCommitInfo): _62.LastCommitInfoAmino;
            fromAminoMsg(object: _62.LastCommitInfoAminoMsg): _62.LastCommitInfo;
            fromProtoMsg(message: _62.LastCommitInfoProtoMsg): _62.LastCommitInfo;
            toProto(message: _62.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _62.LastCommitInfo): _62.LastCommitInfoProtoMsg;
        };
        Event: {
            encode(message: _62.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _62.Event;
            fromAmino(object: _62.EventAmino): _62.Event;
            toAmino(message: _62.Event): _62.EventAmino;
            fromAminoMsg(object: _62.EventAminoMsg): _62.Event;
            fromProtoMsg(message: _62.EventProtoMsg): _62.Event;
            toProto(message: _62.Event): Uint8Array;
            toProtoMsg(message: _62.Event): _62.EventProtoMsg;
        };
        EventAttribute: {
            encode(message: _62.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _62.EventAttribute;
            fromAmino(object: _62.EventAttributeAmino): _62.EventAttribute;
            toAmino(message: _62.EventAttribute): _62.EventAttributeAmino;
            fromAminoMsg(object: _62.EventAttributeAminoMsg): _62.EventAttribute;
            fromProtoMsg(message: _62.EventAttributeProtoMsg): _62.EventAttribute;
            toProto(message: _62.EventAttribute): Uint8Array;
            toProtoMsg(message: _62.EventAttribute): _62.EventAttributeProtoMsg;
        };
        TxResult: {
            encode(message: _62.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.TxResult;
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
            }): _62.TxResult;
            fromAmino(object: _62.TxResultAmino): _62.TxResult;
            toAmino(message: _62.TxResult): _62.TxResultAmino;
            fromAminoMsg(object: _62.TxResultAminoMsg): _62.TxResult;
            fromProtoMsg(message: _62.TxResultProtoMsg): _62.TxResult;
            toProto(message: _62.TxResult): Uint8Array;
            toProtoMsg(message: _62.TxResult): _62.TxResultProtoMsg;
        };
        Validator: {
            encode(message: _62.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long").Long;
            }): _62.Validator;
            fromAmino(object: _62.ValidatorAmino): _62.Validator;
            toAmino(message: _62.Validator): _62.ValidatorAmino;
            fromAminoMsg(object: _62.ValidatorAminoMsg): _62.Validator;
            fromProtoMsg(message: _62.ValidatorProtoMsg): _62.Validator;
            toProto(message: _62.Validator): Uint8Array;
            toProtoMsg(message: _62.Validator): _62.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            encode(message: _62.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long").Long;
            }): _62.ValidatorUpdate;
            fromAmino(object: _62.ValidatorUpdateAmino): _62.ValidatorUpdate;
            toAmino(message: _62.ValidatorUpdate): _62.ValidatorUpdateAmino;
            fromAminoMsg(object: _62.ValidatorUpdateAminoMsg): _62.ValidatorUpdate;
            fromProtoMsg(message: _62.ValidatorUpdateProtoMsg): _62.ValidatorUpdate;
            toProto(message: _62.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _62.ValidatorUpdate): _62.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            encode(message: _62.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                signedLastBlock?: boolean;
            }): _62.VoteInfo;
            fromAmino(object: _62.VoteInfoAmino): _62.VoteInfo;
            toAmino(message: _62.VoteInfo): _62.VoteInfoAmino;
            fromAminoMsg(object: _62.VoteInfoAminoMsg): _62.VoteInfo;
            fromProtoMsg(message: _62.VoteInfoProtoMsg): _62.VoteInfo;
            toProto(message: _62.VoteInfo): Uint8Array;
            toProtoMsg(message: _62.VoteInfo): _62.VoteInfoProtoMsg;
        };
        Evidence: {
            encode(message: _62.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Evidence;
            fromPartial(object: {
                type?: _62.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                height?: string | number | import("long").Long;
                time?: Date;
                totalVotingPower?: string | number | import("long").Long;
            }): _62.Evidence;
            fromAmino(object: _62.EvidenceAmino): _62.Evidence;
            toAmino(message: _62.Evidence): _62.EvidenceAmino;
            fromAminoMsg(object: _62.EvidenceAminoMsg): _62.Evidence;
            fromProtoMsg(message: _62.EvidenceProtoMsg): _62.Evidence;
            toProto(message: _62.Evidence): Uint8Array;
            toProtoMsg(message: _62.Evidence): _62.EvidenceProtoMsg;
        };
        Snapshot: {
            encode(message: _62.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _62.Snapshot;
            fromAmino(object: _62.SnapshotAmino): _62.Snapshot;
            toAmino(message: _62.Snapshot): _62.SnapshotAmino;
            fromAminoMsg(object: _62.SnapshotAminoMsg): _62.Snapshot;
            fromProtoMsg(message: _62.SnapshotProtoMsg): _62.Snapshot;
            toProto(message: _62.Snapshot): Uint8Array;
            toProtoMsg(message: _62.Snapshot): _62.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _64.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Proof;
            fromPartial(object: {
                total?: string | number | import("long").Long;
                index?: string | number | import("long").Long;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _64.Proof;
            fromAmino(object: _64.ProofAmino): _64.Proof;
            toAmino(message: _64.Proof): _64.ProofAmino;
            fromAminoMsg(object: _64.ProofAminoMsg): _64.Proof;
            fromProtoMsg(message: _64.ProofProtoMsg): _64.Proof;
            toProto(message: _64.Proof): Uint8Array;
            toProtoMsg(message: _64.Proof): _64.ProofProtoMsg;
        };
        ValueOp: {
            encode(message: _64.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _64.ValueOp;
            fromAmino(object: _64.ValueOpAmino): _64.ValueOp;
            toAmino(message: _64.ValueOp): _64.ValueOpAmino;
            fromAminoMsg(object: _64.ValueOpAminoMsg): _64.ValueOp;
            fromProtoMsg(message: _64.ValueOpProtoMsg): _64.ValueOp;
            toProto(message: _64.ValueOp): Uint8Array;
            toProtoMsg(message: _64.ValueOp): _64.ValueOpProtoMsg;
        };
        DominoOp: {
            encode(message: _64.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _64.DominoOp;
            fromAmino(object: _64.DominoOpAmino): _64.DominoOp;
            toAmino(message: _64.DominoOp): _64.DominoOpAmino;
            fromAminoMsg(object: _64.DominoOpAminoMsg): _64.DominoOp;
            fromProtoMsg(message: _64.DominoOpProtoMsg): _64.DominoOp;
            toProto(message: _64.DominoOp): Uint8Array;
            toProtoMsg(message: _64.DominoOp): _64.DominoOpProtoMsg;
        };
        ProofOp: {
            encode(message: _64.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _64.ProofOp;
            fromAmino(object: _64.ProofOpAmino): _64.ProofOp;
            toAmino(message: _64.ProofOp): _64.ProofOpAmino;
            fromAminoMsg(object: _64.ProofOpAminoMsg): _64.ProofOp;
            fromProtoMsg(message: _64.ProofOpProtoMsg): _64.ProofOp;
            toProto(message: _64.ProofOp): Uint8Array;
            toProtoMsg(message: _64.ProofOp): _64.ProofOpProtoMsg;
        };
        ProofOps: {
            encode(message: _64.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _64.ProofOps;
            fromAmino(object: _64.ProofOpsAmino): _64.ProofOps;
            toAmino(message: _64.ProofOps): _64.ProofOpsAmino;
            fromAminoMsg(object: _64.ProofOpsAminoMsg): _64.ProofOps;
            fromProtoMsg(message: _64.ProofOpsProtoMsg): _64.ProofOps;
            toProto(message: _64.ProofOps): Uint8Array;
            toProtoMsg(message: _64.ProofOps): _64.ProofOpsProtoMsg;
        };
        PublicKey: {
            encode(message: _63.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _63.PublicKey;
            fromAmino(object: _63.PublicKeyAmino): _63.PublicKey;
            toAmino(message: _63.PublicKey): _63.PublicKeyAmino;
            fromAminoMsg(object: _63.PublicKeyAminoMsg): _63.PublicKey;
            fromProtoMsg(message: _63.PublicKeyProtoMsg): _63.PublicKey;
            toProto(message: _63.PublicKey): Uint8Array;
            toProtoMsg(message: _63.PublicKey): _63.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _65.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long").Long;
                    elems?: (string | number | import("long").Long)[];
                }): _65.BitArray;
                fromAmino(object: _65.BitArrayAmino): _65.BitArray;
                toAmino(message: _65.BitArray): _65.BitArrayAmino;
                fromAminoMsg(object: _65.BitArrayAminoMsg): _65.BitArray;
                fromProtoMsg(message: _65.BitArrayProtoMsg): _65.BitArray;
                toProto(message: _65.BitArray): Uint8Array;
                toProtoMsg(message: _65.BitArray): _65.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _66.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.NetAddress;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _66.NetAddress;
            fromAmino(object: _66.NetAddressAmino): _66.NetAddress;
            toAmino(message: _66.NetAddress): _66.NetAddressAmino;
            fromAminoMsg(object: _66.NetAddressAminoMsg): _66.NetAddress;
            fromProtoMsg(message: _66.NetAddressProtoMsg): _66.NetAddress;
            toProto(message: _66.NetAddress): Uint8Array;
            toProtoMsg(message: _66.NetAddress): _66.NetAddressProtoMsg;
        };
        ProtocolVersion: {
            encode(message: _66.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long").Long;
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _66.ProtocolVersion;
            fromAmino(object: _66.ProtocolVersionAmino): _66.ProtocolVersion;
            toAmino(message: _66.ProtocolVersion): _66.ProtocolVersionAmino;
            fromAminoMsg(object: _66.ProtocolVersionAminoMsg): _66.ProtocolVersion;
            fromProtoMsg(message: _66.ProtocolVersionProtoMsg): _66.ProtocolVersion;
            toProto(message: _66.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _66.ProtocolVersion): _66.ProtocolVersionProtoMsg;
        };
        DefaultNodeInfo: {
            encode(message: _66.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.DefaultNodeInfo;
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
            }): _66.DefaultNodeInfo;
            fromAmino(object: _66.DefaultNodeInfoAmino): _66.DefaultNodeInfo;
            toAmino(message: _66.DefaultNodeInfo): _66.DefaultNodeInfoAmino;
            fromAminoMsg(object: _66.DefaultNodeInfoAminoMsg): _66.DefaultNodeInfo;
            fromProtoMsg(message: _66.DefaultNodeInfoProtoMsg): _66.DefaultNodeInfo;
            toProto(message: _66.DefaultNodeInfo): Uint8Array;
            toProtoMsg(message: _66.DefaultNodeInfo): _66.DefaultNodeInfoProtoMsg;
        };
        DefaultNodeInfoOther: {
            encode(message: _66.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.DefaultNodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _66.DefaultNodeInfoOther;
            fromAmino(object: _66.DefaultNodeInfoOtherAmino): _66.DefaultNodeInfoOther;
            toAmino(message: _66.DefaultNodeInfoOther): _66.DefaultNodeInfoOtherAmino;
            fromAminoMsg(object: _66.DefaultNodeInfoOtherAminoMsg): _66.DefaultNodeInfoOther;
            fromProtoMsg(message: _66.DefaultNodeInfoOtherProtoMsg): _66.DefaultNodeInfoOther;
            toProto(message: _66.DefaultNodeInfoOther): Uint8Array;
            toProtoMsg(message: _66.DefaultNodeInfoOther): _66.DefaultNodeInfoOtherProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _71.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ValidatorSet;
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
            }): _71.ValidatorSet;
            fromAmino(object: _71.ValidatorSetAmino): _71.ValidatorSet;
            toAmino(message: _71.ValidatorSet): _71.ValidatorSetAmino;
            fromAminoMsg(object: _71.ValidatorSetAminoMsg): _71.ValidatorSet;
            fromProtoMsg(message: _71.ValidatorSetProtoMsg): _71.ValidatorSet;
            toProto(message: _71.ValidatorSet): Uint8Array;
            toProtoMsg(message: _71.ValidatorSet): _71.ValidatorSetProtoMsg;
        };
        Validator: {
            encode(message: _71.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
                proposerPriority?: string | number | import("long").Long;
            }): _71.Validator;
            fromAmino(object: _71.ValidatorAmino): _71.Validator;
            toAmino(message: _71.Validator): _71.ValidatorAmino;
            fromAminoMsg(object: _71.ValidatorAminoMsg): _71.Validator;
            fromProtoMsg(message: _71.ValidatorProtoMsg): _71.Validator;
            toProto(message: _71.Validator): Uint8Array;
            toProtoMsg(message: _71.Validator): _71.ValidatorProtoMsg;
        };
        SimpleValidator: {
            encode(message: _71.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
            }): _71.SimpleValidator;
            fromAmino(object: _71.SimpleValidatorAmino): _71.SimpleValidator;
            toAmino(message: _71.SimpleValidator): _71.SimpleValidatorAmino;
            fromAminoMsg(object: _71.SimpleValidatorAminoMsg): _71.SimpleValidator;
            fromProtoMsg(message: _71.SimpleValidatorProtoMsg): _71.SimpleValidator;
            toProto(message: _71.SimpleValidator): Uint8Array;
            toProtoMsg(message: _71.SimpleValidator): _71.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _70.BlockIDFlag;
        blockIDFlagToJSON(object: _70.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _70.SignedMsgType;
        signedMsgTypeToJSON(object: _70.SignedMsgType): string;
        BlockIDFlag: typeof _70.BlockIDFlag;
        BlockIDFlagSDKType: typeof _70.BlockIDFlag;
        BlockIDFlagAmino: typeof _70.BlockIDFlag;
        SignedMsgType: typeof _70.SignedMsgType;
        SignedMsgTypeSDKType: typeof _70.SignedMsgType;
        SignedMsgTypeAmino: typeof _70.SignedMsgType;
        PartSetHeader: {
            encode(message: _70.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _70.PartSetHeader;
            fromAmino(object: _70.PartSetHeaderAmino): _70.PartSetHeader;
            toAmino(message: _70.PartSetHeader): _70.PartSetHeaderAmino;
            fromAminoMsg(object: _70.PartSetHeaderAminoMsg): _70.PartSetHeader;
            fromProtoMsg(message: _70.PartSetHeaderProtoMsg): _70.PartSetHeader;
            toProto(message: _70.PartSetHeader): Uint8Array;
            toProtoMsg(message: _70.PartSetHeader): _70.PartSetHeaderProtoMsg;
        };
        Part: {
            encode(message: _70.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _70.Part;
            fromAmino(object: _70.PartAmino): _70.Part;
            toAmino(message: _70.Part): _70.PartAmino;
            fromAminoMsg(object: _70.PartAminoMsg): _70.Part;
            fromProtoMsg(message: _70.PartProtoMsg): _70.Part;
            toProto(message: _70.Part): Uint8Array;
            toProtoMsg(message: _70.Part): _70.PartProtoMsg;
        };
        BlockID: {
            encode(message: _70.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _70.BlockID;
            fromAmino(object: _70.BlockIDAmino): _70.BlockID;
            toAmino(message: _70.BlockID): _70.BlockIDAmino;
            fromAminoMsg(object: _70.BlockIDAminoMsg): _70.BlockID;
            fromProtoMsg(message: _70.BlockIDProtoMsg): _70.BlockID;
            toProto(message: _70.BlockID): Uint8Array;
            toProtoMsg(message: _70.BlockID): _70.BlockIDProtoMsg;
        };
        Header: {
            encode(message: _70.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Header;
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
            }): _70.Header;
            fromAmino(object: _70.HeaderAmino): _70.Header;
            toAmino(message: _70.Header): _70.HeaderAmino;
            fromAminoMsg(object: _70.HeaderAminoMsg): _70.Header;
            fromProtoMsg(message: _70.HeaderProtoMsg): _70.Header;
            toProto(message: _70.Header): Uint8Array;
            toProtoMsg(message: _70.Header): _70.HeaderProtoMsg;
        };
        Data: {
            encode(message: _70.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _70.Data;
            fromAmino(object: _70.DataAmino): _70.Data;
            toAmino(message: _70.Data): _70.DataAmino;
            fromAminoMsg(object: _70.DataAminoMsg): _70.Data;
            fromProtoMsg(message: _70.DataProtoMsg): _70.Data;
            toProto(message: _70.Data): Uint8Array;
            toProtoMsg(message: _70.Data): _70.DataProtoMsg;
        };
        Vote: {
            encode(message: _70.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Vote;
            fromPartial(object: {
                type?: _70.SignedMsgType;
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
            }): _70.Vote;
            fromAmino(object: _70.VoteAmino): _70.Vote;
            toAmino(message: _70.Vote): _70.VoteAmino;
            fromAminoMsg(object: _70.VoteAminoMsg): _70.Vote;
            fromProtoMsg(message: _70.VoteProtoMsg): _70.Vote;
            toProto(message: _70.Vote): Uint8Array;
            toProtoMsg(message: _70.Vote): _70.VoteProtoMsg;
        };
        Commit: {
            encode(message: _70.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Commit;
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
                    blockIdFlag?: _70.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _70.Commit;
            fromAmino(object: _70.CommitAmino): _70.Commit;
            toAmino(message: _70.Commit): _70.CommitAmino;
            fromAminoMsg(object: _70.CommitAminoMsg): _70.Commit;
            fromProtoMsg(message: _70.CommitProtoMsg): _70.Commit;
            toProto(message: _70.Commit): Uint8Array;
            toProtoMsg(message: _70.Commit): _70.CommitProtoMsg;
        };
        CommitSig: {
            encode(message: _70.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _70.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _70.CommitSig;
            fromAmino(object: _70.CommitSigAmino): _70.CommitSig;
            toAmino(message: _70.CommitSig): _70.CommitSigAmino;
            fromAminoMsg(object: _70.CommitSigAminoMsg): _70.CommitSig;
            fromProtoMsg(message: _70.CommitSigProtoMsg): _70.CommitSig;
            toProto(message: _70.CommitSig): Uint8Array;
            toProtoMsg(message: _70.CommitSig): _70.CommitSigProtoMsg;
        };
        Proposal: {
            encode(message: _70.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Proposal;
            fromPartial(object: {
                type?: _70.SignedMsgType;
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
            }): _70.Proposal;
            fromAmino(object: _70.ProposalAmino): _70.Proposal;
            toAmino(message: _70.Proposal): _70.ProposalAmino;
            fromAminoMsg(object: _70.ProposalAminoMsg): _70.Proposal;
            fromProtoMsg(message: _70.ProposalProtoMsg): _70.Proposal;
            toProto(message: _70.Proposal): Uint8Array;
            toProtoMsg(message: _70.Proposal): _70.ProposalProtoMsg;
        };
        SignedHeader: {
            encode(message: _70.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.SignedHeader;
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
                        blockIdFlag?: _70.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _70.SignedHeader;
            fromAmino(object: _70.SignedHeaderAmino): _70.SignedHeader;
            toAmino(message: _70.SignedHeader): _70.SignedHeaderAmino;
            fromAminoMsg(object: _70.SignedHeaderAminoMsg): _70.SignedHeader;
            fromProtoMsg(message: _70.SignedHeaderProtoMsg): _70.SignedHeader;
            toProto(message: _70.SignedHeader): Uint8Array;
            toProtoMsg(message: _70.SignedHeader): _70.SignedHeaderProtoMsg;
        };
        LightBlock: {
            encode(message: _70.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.LightBlock;
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
                            blockIdFlag?: _70.BlockIDFlag;
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
            }): _70.LightBlock;
            fromAmino(object: _70.LightBlockAmino): _70.LightBlock;
            toAmino(message: _70.LightBlock): _70.LightBlockAmino;
            fromAminoMsg(object: _70.LightBlockAminoMsg): _70.LightBlock;
            fromProtoMsg(message: _70.LightBlockProtoMsg): _70.LightBlock;
            toProto(message: _70.LightBlock): Uint8Array;
            toProtoMsg(message: _70.LightBlock): _70.LightBlockProtoMsg;
        };
        BlockMeta: {
            encode(message: _70.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.BlockMeta;
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
            }): _70.BlockMeta;
            fromAmino(object: _70.BlockMetaAmino): _70.BlockMeta;
            toAmino(message: _70.BlockMeta): _70.BlockMetaAmino;
            fromAminoMsg(object: _70.BlockMetaAminoMsg): _70.BlockMeta;
            fromProtoMsg(message: _70.BlockMetaProtoMsg): _70.BlockMeta;
            toProto(message: _70.BlockMeta): Uint8Array;
            toProtoMsg(message: _70.BlockMeta): _70.BlockMetaProtoMsg;
        };
        TxProof: {
            encode(message: _70.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _70.TxProof;
            fromAmino(object: _70.TxProofAmino): _70.TxProof;
            toAmino(message: _70.TxProof): _70.TxProofAmino;
            fromAminoMsg(object: _70.TxProofAminoMsg): _70.TxProof;
            fromProtoMsg(message: _70.TxProofProtoMsg): _70.TxProof;
            toProto(message: _70.TxProof): Uint8Array;
            toProtoMsg(message: _70.TxProof): _70.TxProofProtoMsg;
        };
        ConsensusParams: {
            encode(message: _69.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ConsensusParams;
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
            }): _69.ConsensusParams;
            fromAmino(object: _69.ConsensusParamsAmino): _69.ConsensusParams;
            toAmino(message: _69.ConsensusParams): _69.ConsensusParamsAmino;
            fromAminoMsg(object: _69.ConsensusParamsAminoMsg): _69.ConsensusParams;
            fromProtoMsg(message: _69.ConsensusParamsProtoMsg): _69.ConsensusParams;
            toProto(message: _69.ConsensusParams): Uint8Array;
            toProtoMsg(message: _69.ConsensusParams): _69.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            encode(message: _69.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long;
                maxGas?: string | number | import("long").Long;
                timeIotaMs?: string | number | import("long").Long;
            }): _69.BlockParams;
            fromAmino(object: _69.BlockParamsAmino): _69.BlockParams;
            toAmino(message: _69.BlockParams): _69.BlockParamsAmino;
            fromAminoMsg(object: _69.BlockParamsAminoMsg): _69.BlockParams;
            fromProtoMsg(message: _69.BlockParamsProtoMsg): _69.BlockParams;
            toProto(message: _69.BlockParams): Uint8Array;
            toProtoMsg(message: _69.BlockParams): _69.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            encode(message: _69.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long").Long;
                maxAgeDuration?: {
                    seconds?: string | number | import("long").Long;
                    nanos?: number;
                };
                maxBytes?: string | number | import("long").Long;
            }): _69.EvidenceParams;
            fromAmino(object: _69.EvidenceParamsAmino): _69.EvidenceParams;
            toAmino(message: _69.EvidenceParams): _69.EvidenceParamsAmino;
            fromAminoMsg(object: _69.EvidenceParamsAminoMsg): _69.EvidenceParams;
            fromProtoMsg(message: _69.EvidenceParamsProtoMsg): _69.EvidenceParams;
            toProto(message: _69.EvidenceParams): Uint8Array;
            toProtoMsg(message: _69.EvidenceParams): _69.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            encode(message: _69.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _69.ValidatorParams;
            fromAmino(object: _69.ValidatorParamsAmino): _69.ValidatorParams;
            toAmino(message: _69.ValidatorParams): _69.ValidatorParamsAmino;
            fromAminoMsg(object: _69.ValidatorParamsAminoMsg): _69.ValidatorParams;
            fromProtoMsg(message: _69.ValidatorParamsProtoMsg): _69.ValidatorParams;
            toProto(message: _69.ValidatorParams): Uint8Array;
            toProtoMsg(message: _69.ValidatorParams): _69.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            encode(message: _69.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.VersionParams;
            fromPartial(object: {
                appVersion?: string | number | import("long").Long;
            }): _69.VersionParams;
            fromAmino(object: _69.VersionParamsAmino): _69.VersionParams;
            toAmino(message: _69.VersionParams): _69.VersionParamsAmino;
            fromAminoMsg(object: _69.VersionParamsAminoMsg): _69.VersionParams;
            fromProtoMsg(message: _69.VersionParamsProtoMsg): _69.VersionParams;
            toProto(message: _69.VersionParams): Uint8Array;
            toProtoMsg(message: _69.VersionParams): _69.VersionParamsProtoMsg;
        };
        HashedParams: {
            encode(message: _69.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long").Long;
                blockMaxGas?: string | number | import("long").Long;
            }): _69.HashedParams;
            fromAmino(object: _69.HashedParamsAmino): _69.HashedParams;
            toAmino(message: _69.HashedParams): _69.HashedParamsAmino;
            fromAminoMsg(object: _69.HashedParamsAminoMsg): _69.HashedParams;
            fromProtoMsg(message: _69.HashedParamsProtoMsg): _69.HashedParams;
            toProto(message: _69.HashedParams): Uint8Array;
            toProtoMsg(message: _69.HashedParams): _69.HashedParamsProtoMsg;
        };
        Evidence: {
            encode(message: _68.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _70.SignedMsgType;
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
                        type?: _70.SignedMsgType;
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
                                    blockIdFlag?: _70.BlockIDFlag;
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
            }): _68.Evidence;
            fromAmino(object: _68.EvidenceAmino): _68.Evidence;
            toAmino(message: _68.Evidence): _68.EvidenceAmino;
            fromAminoMsg(object: _68.EvidenceAminoMsg): _68.Evidence;
            fromProtoMsg(message: _68.EvidenceProtoMsg): _68.Evidence;
            toProto(message: _68.Evidence): Uint8Array;
            toProtoMsg(message: _68.Evidence): _68.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            encode(message: _68.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _70.SignedMsgType;
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
                    type?: _70.SignedMsgType;
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
            }): _68.DuplicateVoteEvidence;
            fromAmino(object: _68.DuplicateVoteEvidenceAmino): _68.DuplicateVoteEvidence;
            toAmino(message: _68.DuplicateVoteEvidence): _68.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _68.DuplicateVoteEvidenceAminoMsg): _68.DuplicateVoteEvidence;
            fromProtoMsg(message: _68.DuplicateVoteEvidenceProtoMsg): _68.DuplicateVoteEvidence;
            toProto(message: _68.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _68.DuplicateVoteEvidence): _68.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            encode(message: _68.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.LightClientAttackEvidence;
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
                                blockIdFlag?: _70.BlockIDFlag;
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
            }): _68.LightClientAttackEvidence;
            fromAmino(object: _68.LightClientAttackEvidenceAmino): _68.LightClientAttackEvidence;
            toAmino(message: _68.LightClientAttackEvidence): _68.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _68.LightClientAttackEvidenceAminoMsg): _68.LightClientAttackEvidence;
            fromProtoMsg(message: _68.LightClientAttackEvidenceProtoMsg): _68.LightClientAttackEvidence;
            toProto(message: _68.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _68.LightClientAttackEvidence): _68.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            encode(message: _68.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _70.SignedMsgType;
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
                            type?: _70.SignedMsgType;
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
                                        blockIdFlag?: _70.BlockIDFlag;
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
            }): _68.EvidenceList;
            fromAmino(object: _68.EvidenceListAmino): _68.EvidenceList;
            toAmino(message: _68.EvidenceList): _68.EvidenceListAmino;
            fromAminoMsg(object: _68.EvidenceListAminoMsg): _68.EvidenceList;
            fromProtoMsg(message: _68.EvidenceListProtoMsg): _68.EvidenceList;
            toProto(message: _68.EvidenceList): Uint8Array;
            toProtoMsg(message: _68.EvidenceList): _68.EvidenceListProtoMsg;
        };
        Block: {
            encode(message: _67.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Block;
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
                                type?: _70.SignedMsgType;
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
                                type?: _70.SignedMsgType;
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
                                            blockIdFlag?: _70.BlockIDFlag;
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
                        blockIdFlag?: _70.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _67.Block;
            fromAmino(object: _67.BlockAmino): _67.Block;
            toAmino(message: _67.Block): _67.BlockAmino;
            fromAminoMsg(object: _67.BlockAminoMsg): _67.Block;
            fromProtoMsg(message: _67.BlockProtoMsg): _67.Block;
            toProto(message: _67.Block): Uint8Array;
            toProtoMsg(message: _67.Block): _67.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            encode(message: _72.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.App;
            fromPartial(object: {
                protocol?: string | number | import("long").Long;
                software?: string;
            }): _72.App;
            fromAmino(object: _72.AppAmino): _72.App;
            toAmino(message: _72.App): _72.AppAmino;
            fromAminoMsg(object: _72.AppAminoMsg): _72.App;
            fromProtoMsg(message: _72.AppProtoMsg): _72.App;
            toProto(message: _72.App): Uint8Array;
            toProtoMsg(message: _72.App): _72.AppProtoMsg;
        };
        Consensus: {
            encode(message: _72.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Consensus;
            fromPartial(object: {
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _72.Consensus;
            fromAmino(object: _72.ConsensusAmino): _72.Consensus;
            toAmino(message: _72.Consensus): _72.ConsensusAmino;
            fromAminoMsg(object: _72.ConsensusAminoMsg): _72.Consensus;
            fromProtoMsg(message: _72.ConsensusProtoMsg): _72.Consensus;
            toProto(message: _72.Consensus): Uint8Array;
            toProtoMsg(message: _72.Consensus): _72.ConsensusProtoMsg;
        };
    };
}
