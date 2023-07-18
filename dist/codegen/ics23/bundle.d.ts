import * as _0 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _0.HashOp;
    hashOpToJSON(object: _0.HashOp): string;
    lengthOpFromJSON(object: any): _0.LengthOp;
    lengthOpToJSON(object: _0.LengthOp): string;
    HashOp: typeof _0.HashOp;
    HashOpSDKType: typeof _0.HashOp;
    HashOpAmino: typeof _0.HashOp;
    LengthOp: typeof _0.LengthOp;
    LengthOpSDKType: typeof _0.LengthOp;
    LengthOpAmino: typeof _0.LengthOp;
    ExistenceProof: {
        encode(message: _0.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _0.ExistenceProof;
        fromAmino(object: _0.ExistenceProofAmino): _0.ExistenceProof;
        toAmino(message: _0.ExistenceProof): _0.ExistenceProofAmino;
        fromAminoMsg(object: _0.ExistenceProofAminoMsg): _0.ExistenceProof;
        fromProtoMsg(message: _0.ExistenceProofProtoMsg): _0.ExistenceProof;
        toProto(message: _0.ExistenceProof): Uint8Array;
        toProtoMsg(message: _0.ExistenceProof): _0.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        encode(message: _0.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _0.NonExistenceProof;
        fromAmino(object: _0.NonExistenceProofAmino): _0.NonExistenceProof;
        toAmino(message: _0.NonExistenceProof): _0.NonExistenceProofAmino;
        fromAminoMsg(object: _0.NonExistenceProofAminoMsg): _0.NonExistenceProof;
        fromProtoMsg(message: _0.NonExistenceProofProtoMsg): _0.NonExistenceProof;
        toProto(message: _0.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _0.NonExistenceProof): _0.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        encode(message: _0.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
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
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _0.HashOp;
                                prehashKey?: _0.HashOp;
                                prehashValue?: _0.HashOp;
                                length?: _0.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _0.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _0.CommitmentProof;
        fromAmino(object: _0.CommitmentProofAmino): _0.CommitmentProof;
        toAmino(message: _0.CommitmentProof): _0.CommitmentProofAmino;
        fromAminoMsg(object: _0.CommitmentProofAminoMsg): _0.CommitmentProof;
        fromProtoMsg(message: _0.CommitmentProofProtoMsg): _0.CommitmentProof;
        toProto(message: _0.CommitmentProof): Uint8Array;
        toProtoMsg(message: _0.CommitmentProof): _0.CommitmentProofProtoMsg;
    };
    LeafOp: {
        encode(message: _0.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.LeafOp;
        fromPartial(object: {
            hash?: _0.HashOp;
            prehashKey?: _0.HashOp;
            prehashValue?: _0.HashOp;
            length?: _0.LengthOp;
            prefix?: Uint8Array;
        }): _0.LeafOp;
        fromAmino(object: _0.LeafOpAmino): _0.LeafOp;
        toAmino(message: _0.LeafOp): _0.LeafOpAmino;
        fromAminoMsg(object: _0.LeafOpAminoMsg): _0.LeafOp;
        fromProtoMsg(message: _0.LeafOpProtoMsg): _0.LeafOp;
        toProto(message: _0.LeafOp): Uint8Array;
        toProtoMsg(message: _0.LeafOp): _0.LeafOpProtoMsg;
    };
    InnerOp: {
        encode(message: _0.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerOp;
        fromPartial(object: {
            hash?: _0.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _0.InnerOp;
        fromAmino(object: _0.InnerOpAmino): _0.InnerOp;
        toAmino(message: _0.InnerOp): _0.InnerOpAmino;
        fromAminoMsg(object: _0.InnerOpAminoMsg): _0.InnerOp;
        fromProtoMsg(message: _0.InnerOpProtoMsg): _0.InnerOp;
        toProto(message: _0.InnerOp): Uint8Array;
        toProtoMsg(message: _0.InnerOp): _0.InnerOpProtoMsg;
    };
    ProofSpec: {
        encode(message: _0.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _0.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _0.ProofSpec;
        fromAmino(object: _0.ProofSpecAmino): _0.ProofSpec;
        toAmino(message: _0.ProofSpec): _0.ProofSpecAmino;
        fromAminoMsg(object: _0.ProofSpecAminoMsg): _0.ProofSpec;
        fromProtoMsg(message: _0.ProofSpecProtoMsg): _0.ProofSpec;
        toProto(message: _0.ProofSpec): Uint8Array;
        toProtoMsg(message: _0.ProofSpec): _0.ProofSpecProtoMsg;
    };
    InnerSpec: {
        encode(message: _0.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _0.HashOp;
        }): _0.InnerSpec;
        fromAmino(object: _0.InnerSpecAmino): _0.InnerSpec;
        toAmino(message: _0.InnerSpec): _0.InnerSpecAmino;
        fromAminoMsg(object: _0.InnerSpecAminoMsg): _0.InnerSpec;
        fromProtoMsg(message: _0.InnerSpecProtoMsg): _0.InnerSpec;
        toProto(message: _0.InnerSpec): Uint8Array;
        toProtoMsg(message: _0.InnerSpec): _0.InnerSpecProtoMsg;
    };
    BatchProof: {
        encode(message: _0.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _0.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _0.BatchProof;
        fromAmino(object: _0.BatchProofAmino): _0.BatchProof;
        toAmino(message: _0.BatchProof): _0.BatchProofAmino;
        fromAminoMsg(object: _0.BatchProofAminoMsg): _0.BatchProof;
        fromProtoMsg(message: _0.BatchProofProtoMsg): _0.BatchProof;
        toProto(message: _0.BatchProof): Uint8Array;
        toProtoMsg(message: _0.BatchProof): _0.BatchProofProtoMsg;
    };
    BatchEntry: {
        encode(message: _0.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _0.HashOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _0.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _0.BatchEntry;
        fromAmino(object: _0.BatchEntryAmino): _0.BatchEntry;
        toAmino(message: _0.BatchEntry): _0.BatchEntryAmino;
        fromAminoMsg(object: _0.BatchEntryAminoMsg): _0.BatchEntry;
        fromProtoMsg(message: _0.BatchEntryProtoMsg): _0.BatchEntry;
        toProto(message: _0.BatchEntry): Uint8Array;
        toProtoMsg(message: _0.BatchEntry): _0.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        encode(message: _0.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
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
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _0.HashOp;
                            prehashKey?: _0.HashOp;
                            prehashValue?: _0.HashOp;
                            length?: _0.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _0.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _0.CompressedBatchProof;
        fromAmino(object: _0.CompressedBatchProofAmino): _0.CompressedBatchProof;
        toAmino(message: _0.CompressedBatchProof): _0.CompressedBatchProofAmino;
        fromAminoMsg(object: _0.CompressedBatchProofAminoMsg): _0.CompressedBatchProof;
        fromProtoMsg(message: _0.CompressedBatchProofProtoMsg): _0.CompressedBatchProof;
        toProto(message: _0.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _0.CompressedBatchProof): _0.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        encode(message: _0.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
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
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _0.HashOp;
                        prehashKey?: _0.HashOp;
                        prehashValue?: _0.HashOp;
                        length?: _0.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _0.CompressedBatchEntry;
        fromAmino(object: _0.CompressedBatchEntryAmino): _0.CompressedBatchEntry;
        toAmino(message: _0.CompressedBatchEntry): _0.CompressedBatchEntryAmino;
        fromAminoMsg(object: _0.CompressedBatchEntryAminoMsg): _0.CompressedBatchEntry;
        fromProtoMsg(message: _0.CompressedBatchEntryProtoMsg): _0.CompressedBatchEntry;
        toProto(message: _0.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _0.CompressedBatchEntry): _0.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        encode(message: _0.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _0.HashOp;
                prehashKey?: _0.HashOp;
                prehashValue?: _0.HashOp;
                length?: _0.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _0.CompressedExistenceProof;
        fromAmino(object: _0.CompressedExistenceProofAmino): _0.CompressedExistenceProof;
        toAmino(message: _0.CompressedExistenceProof): _0.CompressedExistenceProofAmino;
        fromAminoMsg(object: _0.CompressedExistenceProofAminoMsg): _0.CompressedExistenceProof;
        fromProtoMsg(message: _0.CompressedExistenceProofProtoMsg): _0.CompressedExistenceProof;
        toProto(message: _0.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _0.CompressedExistenceProof): _0.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        encode(message: _0.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _0.HashOp;
                    prehashKey?: _0.HashOp;
                    prehashValue?: _0.HashOp;
                    length?: _0.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _0.CompressedNonExistenceProof;
        fromAmino(object: _0.CompressedNonExistenceProofAmino): _0.CompressedNonExistenceProof;
        toAmino(message: _0.CompressedNonExistenceProof): _0.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _0.CompressedNonExistenceProofAminoMsg): _0.CompressedNonExistenceProof;
        fromProtoMsg(message: _0.CompressedNonExistenceProofProtoMsg): _0.CompressedNonExistenceProof;
        toProto(message: _0.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _0.CompressedNonExistenceProof): _0.CompressedNonExistenceProofProtoMsg;
    };
};
