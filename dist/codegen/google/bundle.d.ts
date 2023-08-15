/// <reference types="long" />
import * as _45 from "./api/http";
import * as _46 from "./api/httpbody";
import * as _47 from "./protobuf/any";
import * as _48 from "./protobuf/descriptor";
import * as _49 from "./protobuf/timestamp";
import * as _50 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _46.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.HttpBody;
            fromPartial(object: {
                contentType?: string;
                data?: Uint8Array;
                extensions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _46.HttpBody;
            fromAmino(object: _46.HttpBodyAmino): _46.HttpBody;
            toAmino(message: _46.HttpBody): _46.HttpBodyAmino;
            fromAminoMsg(object: _46.HttpBodyAminoMsg): _46.HttpBody;
            fromProtoMsg(message: _46.HttpBodyProtoMsg): _46.HttpBody;
            toProto(message: _46.HttpBody): Uint8Array;
            toProtoMsg(message: _46.HttpBody): _46.HttpBodyProtoMsg;
        };
        Http: {
            encode(message: _45.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Http;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _45.Http;
            fromAmino(object: _45.HttpAmino): _45.Http;
            toAmino(message: _45.Http): _45.HttpAmino;
            fromAminoMsg(object: _45.HttpAminoMsg): _45.Http;
            fromProtoMsg(message: _45.HttpProtoMsg): _45.Http;
            toProto(message: _45.Http): Uint8Array;
            toProtoMsg(message: _45.Http): _45.HttpProtoMsg;
        };
        HttpRule: {
            encode(message: _45.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.HttpRule;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _45.HttpRule;
            fromAmino(object: _45.HttpRuleAmino): _45.HttpRule;
            toAmino(message: _45.HttpRule): _45.HttpRuleAmino;
            fromAminoMsg(object: _45.HttpRuleAminoMsg): _45.HttpRule;
            fromProtoMsg(message: _45.HttpRuleProtoMsg): _45.HttpRule;
            toProto(message: _45.HttpRule): Uint8Array;
            toProtoMsg(message: _45.HttpRule): _45.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            encode(message: _45.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _45.CustomHttpPattern;
            fromAmino(object: _45.CustomHttpPatternAmino): _45.CustomHttpPattern;
            toAmino(message: _45.CustomHttpPattern): _45.CustomHttpPatternAmino;
            fromAminoMsg(object: _45.CustomHttpPatternAminoMsg): _45.CustomHttpPattern;
            fromProtoMsg(message: _45.CustomHttpPatternProtoMsg): _45.CustomHttpPattern;
            toProto(message: _45.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _45.CustomHttpPattern): _45.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _50.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Duration;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _50.Duration;
            fromAmino(object: string): _50.Duration;
            toAmino(message: _50.Duration): string;
            fromAminoMsg(object: _50.DurationAminoMsg): _50.Duration;
            fromProtoMsg(message: _50.DurationProtoMsg): _50.Duration;
            toProto(message: _50.Duration): Uint8Array;
            toProtoMsg(message: _50.Duration): _50.DurationProtoMsg;
        };
        Timestamp: {
            encode(message: _49.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Timestamp;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _49.Timestamp;
            fromAmino(object: string): _49.Timestamp;
            toAmino(message: _49.Timestamp): string;
            fromAminoMsg(object: _49.TimestampAminoMsg): _49.Timestamp;
            fromProtoMsg(message: _49.TimestampProtoMsg): _49.Timestamp;
            toProto(message: _49.Timestamp): Uint8Array;
            toProtoMsg(message: _49.Timestamp): _49.TimestampProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _48.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _48.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _48.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _48.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _48.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _48.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _48.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _48.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _48.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _48.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _48.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _48.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _48.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _48.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _48.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _48.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _48.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _48.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _48.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _48.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _48.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _48.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _48.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _48.FieldOptions_CType;
        FieldOptions_JSType: typeof _48.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _48.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _48.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _48.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _48.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _48.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _48.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.FileDescriptorSet;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    publicDependency?: number[];
                    weakDependency?: number[];
                    messageType?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _48.FieldDescriptorProto_Label;
                            type?: _48.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _48.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _48.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _48.FieldDescriptorProto_Label;
                            type?: _48.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _48.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _48.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        nestedType?: any[];
                        enumType?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: string | number | import("long").Long;
                                        negativeIntValue?: string | number | import("long").Long;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias?: boolean;
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        extensionRange?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        oneofDecl?: {
                            name?: string;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            messageSetWireFormat?: boolean;
                            noStandardDescriptorAccessor?: boolean;
                            deprecated?: boolean;
                            mapEntry?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            inputType?: string;
                            outputType?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotencyLevel?: _48.MethodOptions_IdempotencyLevel;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            clientStreaming?: boolean;
                            serverStreaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _48.FieldDescriptorProto_Label;
                        type?: _48.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _48.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _48.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        javaPackage?: string;
                        javaOuterClassname?: string;
                        javaMultipleFiles?: boolean;
                        javaGenerateEqualsAndHash?: boolean;
                        javaStringCheckUtf8?: boolean;
                        optimizeFor?: _48.FileOptions_OptimizeMode;
                        goPackage?: string;
                        ccGenericServices?: boolean;
                        javaGenericServices?: boolean;
                        pyGenericServices?: boolean;
                        phpGenericServices?: boolean;
                        deprecated?: boolean;
                        ccEnableArenas?: boolean;
                        objcClassPrefix?: string;
                        csharpNamespace?: string;
                        swiftPrefix?: string;
                        phpClassPrefix?: string;
                        phpNamespace?: string;
                        phpMetadataNamespace?: string;
                        rubyPackage?: string;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    sourceCodeInfo?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leadingComments?: string;
                            trailingComments?: string;
                            leadingDetachedComments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _48.FileDescriptorSet;
            fromAmino(object: _48.FileDescriptorSetAmino): _48.FileDescriptorSet;
            toAmino(message: _48.FileDescriptorSet): _48.FileDescriptorSetAmino;
            fromAminoMsg(object: _48.FileDescriptorSetAminoMsg): _48.FileDescriptorSet;
            fromProtoMsg(message: _48.FileDescriptorSetProtoMsg): _48.FileDescriptorSet;
            toProto(message: _48.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _48.FileDescriptorSet): _48.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            encode(message: _48.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.FileDescriptorProto;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                publicDependency?: number[];
                weakDependency?: number[];
                messageType?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _48.FieldDescriptorProto_Label;
                        type?: _48.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _48.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _48.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _48.FieldDescriptorProto_Label;
                        type?: _48.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _48.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _48.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    nestedType?: any[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    extensionRange?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    oneofDecl?: {
                        name?: string;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        messageSetWireFormat?: boolean;
                        noStandardDescriptorAccessor?: boolean;
                        deprecated?: boolean;
                        mapEntry?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        inputType?: string;
                        outputType?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotencyLevel?: _48.MethodOptions_IdempotencyLevel;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        clientStreaming?: boolean;
                        serverStreaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _48.FieldDescriptorProto_Label;
                    type?: _48.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _48.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _48.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    javaPackage?: string;
                    javaOuterClassname?: string;
                    javaMultipleFiles?: boolean;
                    javaGenerateEqualsAndHash?: boolean;
                    javaStringCheckUtf8?: boolean;
                    optimizeFor?: _48.FileOptions_OptimizeMode;
                    goPackage?: string;
                    ccGenericServices?: boolean;
                    javaGenericServices?: boolean;
                    pyGenericServices?: boolean;
                    phpGenericServices?: boolean;
                    deprecated?: boolean;
                    ccEnableArenas?: boolean;
                    objcClassPrefix?: string;
                    csharpNamespace?: string;
                    swiftPrefix?: string;
                    phpClassPrefix?: string;
                    phpNamespace?: string;
                    phpMetadataNamespace?: string;
                    rubyPackage?: string;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                sourceCodeInfo?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leadingComments?: string;
                        trailingComments?: string;
                        leadingDetachedComments?: string[];
                    }[];
                };
                syntax?: string;
            }): _48.FileDescriptorProto;
            fromAmino(object: _48.FileDescriptorProtoAmino): _48.FileDescriptorProto;
            toAmino(message: _48.FileDescriptorProto): _48.FileDescriptorProtoAmino;
            fromAminoMsg(object: _48.FileDescriptorProtoAminoMsg): _48.FileDescriptorProto;
            fromProtoMsg(message: _48.FileDescriptorProtoProtoMsg): _48.FileDescriptorProto;
            toProto(message: _48.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _48.FileDescriptorProto): _48.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            encode(message: _48.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.DescriptorProto;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _48.FieldDescriptorProto_Label;
                    type?: _48.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _48.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _48.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _48.FieldDescriptorProto_Label;
                    type?: _48.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _48.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _48.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                nestedType?: any[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                extensionRange?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                oneofDecl?: {
                    name?: string;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat?: boolean;
                    noStandardDescriptorAccessor?: boolean;
                    deprecated?: boolean;
                    mapEntry?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _48.DescriptorProto;
            fromAmino(object: _48.DescriptorProtoAmino): _48.DescriptorProto;
            toAmino(message: _48.DescriptorProto): _48.DescriptorProtoAmino;
            fromAminoMsg(object: _48.DescriptorProtoAminoMsg): _48.DescriptorProto;
            fromProtoMsg(message: _48.DescriptorProtoProtoMsg): _48.DescriptorProto;
            toProto(message: _48.DescriptorProto): Uint8Array;
            toProtoMsg(message: _48.DescriptorProto): _48.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _48.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.DescriptorProto_ExtensionRange;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _48.DescriptorProto_ExtensionRange;
            fromAmino(object: _48.DescriptorProto_ExtensionRangeAmino): _48.DescriptorProto_ExtensionRange;
            toAmino(message: _48.DescriptorProto_ExtensionRange): _48.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _48.DescriptorProto_ExtensionRangeAminoMsg): _48.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _48.DescriptorProto_ExtensionRangeProtoMsg): _48.DescriptorProto_ExtensionRange;
            toProto(message: _48.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _48.DescriptorProto_ExtensionRange): _48.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _48.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _48.DescriptorProto_ReservedRange;
            fromAmino(object: _48.DescriptorProto_ReservedRangeAmino): _48.DescriptorProto_ReservedRange;
            toAmino(message: _48.DescriptorProto_ReservedRange): _48.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _48.DescriptorProto_ReservedRangeAminoMsg): _48.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _48.DescriptorProto_ReservedRangeProtoMsg): _48.DescriptorProto_ReservedRange;
            toProto(message: _48.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _48.DescriptorProto_ReservedRange): _48.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            encode(message: _48.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ExtensionRangeOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _48.ExtensionRangeOptions;
            fromAmino(object: _48.ExtensionRangeOptionsAmino): _48.ExtensionRangeOptions;
            toAmino(message: _48.ExtensionRangeOptions): _48.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _48.ExtensionRangeOptionsAminoMsg): _48.ExtensionRangeOptions;
            fromProtoMsg(message: _48.ExtensionRangeOptionsProtoMsg): _48.ExtensionRangeOptions;
            toProto(message: _48.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _48.ExtensionRangeOptions): _48.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            encode(message: _48.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.FieldDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _48.FieldDescriptorProto_Label;
                type?: _48.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _48.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _48.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _48.FieldDescriptorProto;
            fromAmino(object: _48.FieldDescriptorProtoAmino): _48.FieldDescriptorProto;
            toAmino(message: _48.FieldDescriptorProto): _48.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _48.FieldDescriptorProtoAminoMsg): _48.FieldDescriptorProto;
            fromProtoMsg(message: _48.FieldDescriptorProtoProtoMsg): _48.FieldDescriptorProto;
            toProto(message: _48.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _48.FieldDescriptorProto): _48.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            encode(message: _48.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.OneofDescriptorProto;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _48.OneofDescriptorProto;
            fromAmino(object: _48.OneofDescriptorProtoAmino): _48.OneofDescriptorProto;
            toAmino(message: _48.OneofDescriptorProto): _48.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _48.OneofDescriptorProtoAminoMsg): _48.OneofDescriptorProto;
            fromProtoMsg(message: _48.OneofDescriptorProtoProtoMsg): _48.OneofDescriptorProto;
            toProto(message: _48.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _48.OneofDescriptorProto): _48.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            encode(message: _48.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.EnumDescriptorProto;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias?: boolean;
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _48.EnumDescriptorProto;
            fromAmino(object: _48.EnumDescriptorProtoAmino): _48.EnumDescriptorProto;
            toAmino(message: _48.EnumDescriptorProto): _48.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _48.EnumDescriptorProtoAminoMsg): _48.EnumDescriptorProto;
            fromProtoMsg(message: _48.EnumDescriptorProtoProtoMsg): _48.EnumDescriptorProto;
            toProto(message: _48.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _48.EnumDescriptorProto): _48.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _48.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _48.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _48.EnumDescriptorProto_EnumReservedRangeAmino): _48.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _48.EnumDescriptorProto_EnumReservedRange): _48.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _48.EnumDescriptorProto_EnumReservedRangeAminoMsg): _48.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _48.EnumDescriptorProto_EnumReservedRangeProtoMsg): _48.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _48.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _48.EnumDescriptorProto_EnumReservedRange): _48.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            encode(message: _48.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.EnumValueDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _48.EnumValueDescriptorProto;
            fromAmino(object: _48.EnumValueDescriptorProtoAmino): _48.EnumValueDescriptorProto;
            toAmino(message: _48.EnumValueDescriptorProto): _48.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _48.EnumValueDescriptorProtoAminoMsg): _48.EnumValueDescriptorProto;
            fromProtoMsg(message: _48.EnumValueDescriptorProtoProtoMsg): _48.EnumValueDescriptorProto;
            toProto(message: _48.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _48.EnumValueDescriptorProto): _48.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            encode(message: _48.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _48.MethodOptions_IdempotencyLevel;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    clientStreaming?: boolean;
                    serverStreaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _48.ServiceDescriptorProto;
            fromAmino(object: _48.ServiceDescriptorProtoAmino): _48.ServiceDescriptorProto;
            toAmino(message: _48.ServiceDescriptorProto): _48.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _48.ServiceDescriptorProtoAminoMsg): _48.ServiceDescriptorProto;
            fromProtoMsg(message: _48.ServiceDescriptorProtoProtoMsg): _48.ServiceDescriptorProto;
            toProto(message: _48.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _48.ServiceDescriptorProto): _48.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            encode(message: _48.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MethodDescriptorProto;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _48.MethodOptions_IdempotencyLevel;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                clientStreaming?: boolean;
                serverStreaming?: boolean;
            }): _48.MethodDescriptorProto;
            fromAmino(object: _48.MethodDescriptorProtoAmino): _48.MethodDescriptorProto;
            toAmino(message: _48.MethodDescriptorProto): _48.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _48.MethodDescriptorProtoAminoMsg): _48.MethodDescriptorProto;
            fromProtoMsg(message: _48.MethodDescriptorProtoProtoMsg): _48.MethodDescriptorProto;
            toProto(message: _48.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _48.MethodDescriptorProto): _48.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            encode(message: _48.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.FileOptions;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _48.FileOptions_OptimizeMode;
                goPackage?: string;
                ccGenericServices?: boolean;
                javaGenericServices?: boolean;
                pyGenericServices?: boolean;
                phpGenericServices?: boolean;
                deprecated?: boolean;
                ccEnableArenas?: boolean;
                objcClassPrefix?: string;
                csharpNamespace?: string;
                swiftPrefix?: string;
                phpClassPrefix?: string;
                phpNamespace?: string;
                phpMetadataNamespace?: string;
                rubyPackage?: string;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _48.FileOptions;
            fromAmino(object: _48.FileOptionsAmino): _48.FileOptions;
            toAmino(message: _48.FileOptions): _48.FileOptionsAmino;
            fromAminoMsg(object: _48.FileOptionsAminoMsg): _48.FileOptions;
            fromProtoMsg(message: _48.FileOptionsProtoMsg): _48.FileOptions;
            toProto(message: _48.FileOptions): Uint8Array;
            toProtoMsg(message: _48.FileOptions): _48.FileOptionsProtoMsg;
        };
        MessageOptions: {
            encode(message: _48.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MessageOptions;
            fromPartial(object: {
                messageSetWireFormat?: boolean;
                noStandardDescriptorAccessor?: boolean;
                deprecated?: boolean;
                mapEntry?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _48.MessageOptions;
            fromAmino(object: _48.MessageOptionsAmino): _48.MessageOptions;
            toAmino(message: _48.MessageOptions): _48.MessageOptionsAmino;
            fromAminoMsg(object: _48.MessageOptionsAminoMsg): _48.MessageOptions;
            fromProtoMsg(message: _48.MessageOptionsProtoMsg): _48.MessageOptions;
            toProto(message: _48.MessageOptions): Uint8Array;
            toProtoMsg(message: _48.MessageOptions): _48.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            encode(message: _48.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.FieldOptions;
            fromPartial(object: {
                ctype?: _48.FieldOptions_CType;
                packed?: boolean;
                jstype?: _48.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _48.FieldOptions;
            fromAmino(object: _48.FieldOptionsAmino): _48.FieldOptions;
            toAmino(message: _48.FieldOptions): _48.FieldOptionsAmino;
            fromAminoMsg(object: _48.FieldOptionsAminoMsg): _48.FieldOptions;
            fromProtoMsg(message: _48.FieldOptionsProtoMsg): _48.FieldOptions;
            toProto(message: _48.FieldOptions): Uint8Array;
            toProtoMsg(message: _48.FieldOptions): _48.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            encode(message: _48.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.OneofOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _48.OneofOptions;
            fromAmino(object: _48.OneofOptionsAmino): _48.OneofOptions;
            toAmino(message: _48.OneofOptions): _48.OneofOptionsAmino;
            fromAminoMsg(object: _48.OneofOptionsAminoMsg): _48.OneofOptions;
            fromProtoMsg(message: _48.OneofOptionsProtoMsg): _48.OneofOptions;
            toProto(message: _48.OneofOptions): Uint8Array;
            toProtoMsg(message: _48.OneofOptions): _48.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            encode(message: _48.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.EnumOptions;
            fromPartial(object: {
                allowAlias?: boolean;
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _48.EnumOptions;
            fromAmino(object: _48.EnumOptionsAmino): _48.EnumOptions;
            toAmino(message: _48.EnumOptions): _48.EnumOptionsAmino;
            fromAminoMsg(object: _48.EnumOptionsAminoMsg): _48.EnumOptions;
            fromProtoMsg(message: _48.EnumOptionsProtoMsg): _48.EnumOptions;
            toProto(message: _48.EnumOptions): Uint8Array;
            toProtoMsg(message: _48.EnumOptions): _48.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            encode(message: _48.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.EnumValueOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _48.EnumValueOptions;
            fromAmino(object: _48.EnumValueOptionsAmino): _48.EnumValueOptions;
            toAmino(message: _48.EnumValueOptions): _48.EnumValueOptionsAmino;
            fromAminoMsg(object: _48.EnumValueOptionsAminoMsg): _48.EnumValueOptions;
            fromProtoMsg(message: _48.EnumValueOptionsProtoMsg): _48.EnumValueOptions;
            toProto(message: _48.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _48.EnumValueOptions): _48.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            encode(message: _48.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ServiceOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _48.ServiceOptions;
            fromAmino(object: _48.ServiceOptionsAmino): _48.ServiceOptions;
            toAmino(message: _48.ServiceOptions): _48.ServiceOptionsAmino;
            fromAminoMsg(object: _48.ServiceOptionsAminoMsg): _48.ServiceOptions;
            fromProtoMsg(message: _48.ServiceOptionsProtoMsg): _48.ServiceOptions;
            toProto(message: _48.ServiceOptions): Uint8Array;
            toProtoMsg(message: _48.ServiceOptions): _48.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            encode(message: _48.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _48.MethodOptions_IdempotencyLevel;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _48.MethodOptions;
            fromAmino(object: _48.MethodOptionsAmino): _48.MethodOptions;
            toAmino(message: _48.MethodOptions): _48.MethodOptionsAmino;
            fromAminoMsg(object: _48.MethodOptionsAminoMsg): _48.MethodOptions;
            fromProtoMsg(message: _48.MethodOptionsProtoMsg): _48.MethodOptions;
            toProto(message: _48.MethodOptions): Uint8Array;
            toProtoMsg(message: _48.MethodOptions): _48.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            encode(message: _48.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.UninterpretedOption;
            fromPartial(object: {
                name?: {
                    namePart?: string;
                    isExtension?: boolean;
                }[];
                identifierValue?: string;
                positiveIntValue?: string | number | import("long").Long;
                negativeIntValue?: string | number | import("long").Long;
                doubleValue?: number;
                stringValue?: Uint8Array;
                aggregateValue?: string;
            }): _48.UninterpretedOption;
            fromAmino(object: _48.UninterpretedOptionAmino): _48.UninterpretedOption;
            toAmino(message: _48.UninterpretedOption): _48.UninterpretedOptionAmino;
            fromAminoMsg(object: _48.UninterpretedOptionAminoMsg): _48.UninterpretedOption;
            fromProtoMsg(message: _48.UninterpretedOptionProtoMsg): _48.UninterpretedOption;
            toProto(message: _48.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _48.UninterpretedOption): _48.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            encode(message: _48.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.UninterpretedOption_NamePart;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _48.UninterpretedOption_NamePart;
            fromAmino(object: _48.UninterpretedOption_NamePartAmino): _48.UninterpretedOption_NamePart;
            toAmino(message: _48.UninterpretedOption_NamePart): _48.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _48.UninterpretedOption_NamePartAminoMsg): _48.UninterpretedOption_NamePart;
            fromProtoMsg(message: _48.UninterpretedOption_NamePartProtoMsg): _48.UninterpretedOption_NamePart;
            toProto(message: _48.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _48.UninterpretedOption_NamePart): _48.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            encode(message: _48.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _48.SourceCodeInfo;
            fromAmino(object: _48.SourceCodeInfoAmino): _48.SourceCodeInfo;
            toAmino(message: _48.SourceCodeInfo): _48.SourceCodeInfoAmino;
            fromAminoMsg(object: _48.SourceCodeInfoAminoMsg): _48.SourceCodeInfo;
            fromProtoMsg(message: _48.SourceCodeInfoProtoMsg): _48.SourceCodeInfo;
            toProto(message: _48.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _48.SourceCodeInfo): _48.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            encode(message: _48.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _48.SourceCodeInfo_Location;
            fromAmino(object: _48.SourceCodeInfo_LocationAmino): _48.SourceCodeInfo_Location;
            toAmino(message: _48.SourceCodeInfo_Location): _48.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _48.SourceCodeInfo_LocationAminoMsg): _48.SourceCodeInfo_Location;
            fromProtoMsg(message: _48.SourceCodeInfo_LocationProtoMsg): _48.SourceCodeInfo_Location;
            toProto(message: _48.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _48.SourceCodeInfo_Location): _48.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            encode(message: _48.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _48.GeneratedCodeInfo;
            fromAmino(object: _48.GeneratedCodeInfoAmino): _48.GeneratedCodeInfo;
            toAmino(message: _48.GeneratedCodeInfo): _48.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _48.GeneratedCodeInfoAminoMsg): _48.GeneratedCodeInfo;
            fromProtoMsg(message: _48.GeneratedCodeInfoProtoMsg): _48.GeneratedCodeInfo;
            toProto(message: _48.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _48.GeneratedCodeInfo): _48.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _48.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _48.GeneratedCodeInfo_Annotation;
            fromAmino(object: _48.GeneratedCodeInfo_AnnotationAmino): _48.GeneratedCodeInfo_Annotation;
            toAmino(message: _48.GeneratedCodeInfo_Annotation): _48.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _48.GeneratedCodeInfo_AnnotationAminoMsg): _48.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _48.GeneratedCodeInfo_AnnotationProtoMsg): _48.GeneratedCodeInfo_Annotation;
            toProto(message: _48.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _48.GeneratedCodeInfo_Annotation): _48.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            encode(message: _47.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _47.Any;
            fromAmino(object: _47.AnyAmino): _47.Any;
            toAmino(message: _47.Any): _47.AnyAmino;
            fromAminoMsg(object: _47.AnyAminoMsg): _47.Any;
            fromProtoMsg(message: _47.AnyProtoMsg): _47.Any;
            toProto(message: _47.Any): Uint8Array;
            toProtoMsg(message: _47.Any): _47.AnyProtoMsg;
        };
    };
}
