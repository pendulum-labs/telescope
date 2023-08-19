/// <reference types="long" />
import * as _48 from "./api/http";
import * as _49 from "./api/httpbody";
import * as _50 from "./protobuf/any";
import * as _51 from "./protobuf/descriptor";
import * as _52 from "./protobuf/timestamp";
import * as _53 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _49.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.HttpBody;
            fromPartial(object: {
                contentType?: string;
                data?: Uint8Array;
                extensions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _49.HttpBody;
            fromAmino(object: _49.HttpBodyAmino): _49.HttpBody;
            toAmino(message: _49.HttpBody): _49.HttpBodyAmino;
            fromAminoMsg(object: _49.HttpBodyAminoMsg): _49.HttpBody;
            fromProtoMsg(message: _49.HttpBodyProtoMsg): _49.HttpBody;
            toProto(message: _49.HttpBody): Uint8Array;
            toProtoMsg(message: _49.HttpBody): _49.HttpBodyProtoMsg;
        };
        Http: {
            encode(message: _48.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Http;
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
            }): _48.Http;
            fromAmino(object: _48.HttpAmino): _48.Http;
            toAmino(message: _48.Http): _48.HttpAmino;
            fromAminoMsg(object: _48.HttpAminoMsg): _48.Http;
            fromProtoMsg(message: _48.HttpProtoMsg): _48.Http;
            toProto(message: _48.Http): Uint8Array;
            toProtoMsg(message: _48.Http): _48.HttpProtoMsg;
        };
        HttpRule: {
            encode(message: _48.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.HttpRule;
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
            }): _48.HttpRule;
            fromAmino(object: _48.HttpRuleAmino): _48.HttpRule;
            toAmino(message: _48.HttpRule): _48.HttpRuleAmino;
            fromAminoMsg(object: _48.HttpRuleAminoMsg): _48.HttpRule;
            fromProtoMsg(message: _48.HttpRuleProtoMsg): _48.HttpRule;
            toProto(message: _48.HttpRule): Uint8Array;
            toProtoMsg(message: _48.HttpRule): _48.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            encode(message: _48.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _48.CustomHttpPattern;
            fromAmino(object: _48.CustomHttpPatternAmino): _48.CustomHttpPattern;
            toAmino(message: _48.CustomHttpPattern): _48.CustomHttpPatternAmino;
            fromAminoMsg(object: _48.CustomHttpPatternAminoMsg): _48.CustomHttpPattern;
            fromProtoMsg(message: _48.CustomHttpPatternProtoMsg): _48.CustomHttpPattern;
            toProto(message: _48.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _48.CustomHttpPattern): _48.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _53.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Duration;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _53.Duration;
            fromAmino(object: string): _53.Duration;
            toAmino(message: _53.Duration): string;
            fromAminoMsg(object: _53.DurationAminoMsg): _53.Duration;
            fromProtoMsg(message: _53.DurationProtoMsg): _53.Duration;
            toProto(message: _53.Duration): Uint8Array;
            toProtoMsg(message: _53.Duration): _53.DurationProtoMsg;
        };
        Timestamp: {
            encode(message: _52.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Timestamp;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _52.Timestamp;
            fromAmino(object: string): _52.Timestamp;
            toAmino(message: _52.Timestamp): string;
            fromAminoMsg(object: _52.TimestampAminoMsg): _52.Timestamp;
            fromProtoMsg(message: _52.TimestampProtoMsg): _52.Timestamp;
            toProto(message: _52.Timestamp): Uint8Array;
            toProtoMsg(message: _52.Timestamp): _52.TimestampProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _51.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _51.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _51.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _51.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _51.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _51.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _51.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _51.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _51.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _51.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _51.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _51.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _51.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _51.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _51.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _51.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _51.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _51.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _51.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _51.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _51.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _51.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _51.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _51.FieldOptions_CType;
        FieldOptions_JSType: typeof _51.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _51.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _51.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _51.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _51.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _51.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _51.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FileDescriptorSet;
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
                            label?: _51.FieldDescriptorProto_Label;
                            type?: _51.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _51.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _51.FieldOptions_JSType;
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
                            label?: _51.FieldDescriptorProto_Label;
                            type?: _51.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _51.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _51.FieldOptions_JSType;
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
                                idempotencyLevel?: _51.MethodOptions_IdempotencyLevel;
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
                        label?: _51.FieldDescriptorProto_Label;
                        type?: _51.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _51.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _51.FieldOptions_JSType;
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
                        optimizeFor?: _51.FileOptions_OptimizeMode;
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
            }): _51.FileDescriptorSet;
            fromAmino(object: _51.FileDescriptorSetAmino): _51.FileDescriptorSet;
            toAmino(message: _51.FileDescriptorSet): _51.FileDescriptorSetAmino;
            fromAminoMsg(object: _51.FileDescriptorSetAminoMsg): _51.FileDescriptorSet;
            fromProtoMsg(message: _51.FileDescriptorSetProtoMsg): _51.FileDescriptorSet;
            toProto(message: _51.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _51.FileDescriptorSet): _51.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            encode(message: _51.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FileDescriptorProto;
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
                        label?: _51.FieldDescriptorProto_Label;
                        type?: _51.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _51.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _51.FieldOptions_JSType;
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
                        label?: _51.FieldDescriptorProto_Label;
                        type?: _51.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _51.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _51.FieldOptions_JSType;
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
                            idempotencyLevel?: _51.MethodOptions_IdempotencyLevel;
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
                    label?: _51.FieldDescriptorProto_Label;
                    type?: _51.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _51.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _51.FieldOptions_JSType;
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
                    optimizeFor?: _51.FileOptions_OptimizeMode;
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
            }): _51.FileDescriptorProto;
            fromAmino(object: _51.FileDescriptorProtoAmino): _51.FileDescriptorProto;
            toAmino(message: _51.FileDescriptorProto): _51.FileDescriptorProtoAmino;
            fromAminoMsg(object: _51.FileDescriptorProtoAminoMsg): _51.FileDescriptorProto;
            fromProtoMsg(message: _51.FileDescriptorProtoProtoMsg): _51.FileDescriptorProto;
            toProto(message: _51.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _51.FileDescriptorProto): _51.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            encode(message: _51.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DescriptorProto;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _51.FieldDescriptorProto_Label;
                    type?: _51.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _51.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _51.FieldOptions_JSType;
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
                    label?: _51.FieldDescriptorProto_Label;
                    type?: _51.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _51.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _51.FieldOptions_JSType;
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
            }): _51.DescriptorProto;
            fromAmino(object: _51.DescriptorProtoAmino): _51.DescriptorProto;
            toAmino(message: _51.DescriptorProto): _51.DescriptorProtoAmino;
            fromAminoMsg(object: _51.DescriptorProtoAminoMsg): _51.DescriptorProto;
            fromProtoMsg(message: _51.DescriptorProtoProtoMsg): _51.DescriptorProto;
            toProto(message: _51.DescriptorProto): Uint8Array;
            toProtoMsg(message: _51.DescriptorProto): _51.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _51.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DescriptorProto_ExtensionRange;
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
            }): _51.DescriptorProto_ExtensionRange;
            fromAmino(object: _51.DescriptorProto_ExtensionRangeAmino): _51.DescriptorProto_ExtensionRange;
            toAmino(message: _51.DescriptorProto_ExtensionRange): _51.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _51.DescriptorProto_ExtensionRangeAminoMsg): _51.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _51.DescriptorProto_ExtensionRangeProtoMsg): _51.DescriptorProto_ExtensionRange;
            toProto(message: _51.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _51.DescriptorProto_ExtensionRange): _51.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _51.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _51.DescriptorProto_ReservedRange;
            fromAmino(object: _51.DescriptorProto_ReservedRangeAmino): _51.DescriptorProto_ReservedRange;
            toAmino(message: _51.DescriptorProto_ReservedRange): _51.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _51.DescriptorProto_ReservedRangeAminoMsg): _51.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _51.DescriptorProto_ReservedRangeProtoMsg): _51.DescriptorProto_ReservedRange;
            toProto(message: _51.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _51.DescriptorProto_ReservedRange): _51.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            encode(message: _51.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ExtensionRangeOptions;
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
            }): _51.ExtensionRangeOptions;
            fromAmino(object: _51.ExtensionRangeOptionsAmino): _51.ExtensionRangeOptions;
            toAmino(message: _51.ExtensionRangeOptions): _51.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _51.ExtensionRangeOptionsAminoMsg): _51.ExtensionRangeOptions;
            fromProtoMsg(message: _51.ExtensionRangeOptionsProtoMsg): _51.ExtensionRangeOptions;
            toProto(message: _51.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _51.ExtensionRangeOptions): _51.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            encode(message: _51.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FieldDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _51.FieldDescriptorProto_Label;
                type?: _51.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _51.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _51.FieldOptions_JSType;
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
            }): _51.FieldDescriptorProto;
            fromAmino(object: _51.FieldDescriptorProtoAmino): _51.FieldDescriptorProto;
            toAmino(message: _51.FieldDescriptorProto): _51.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _51.FieldDescriptorProtoAminoMsg): _51.FieldDescriptorProto;
            fromProtoMsg(message: _51.FieldDescriptorProtoProtoMsg): _51.FieldDescriptorProto;
            toProto(message: _51.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _51.FieldDescriptorProto): _51.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            encode(message: _51.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.OneofDescriptorProto;
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
            }): _51.OneofDescriptorProto;
            fromAmino(object: _51.OneofDescriptorProtoAmino): _51.OneofDescriptorProto;
            toAmino(message: _51.OneofDescriptorProto): _51.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _51.OneofDescriptorProtoAminoMsg): _51.OneofDescriptorProto;
            fromProtoMsg(message: _51.OneofDescriptorProtoProtoMsg): _51.OneofDescriptorProto;
            toProto(message: _51.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _51.OneofDescriptorProto): _51.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            encode(message: _51.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumDescriptorProto;
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
            }): _51.EnumDescriptorProto;
            fromAmino(object: _51.EnumDescriptorProtoAmino): _51.EnumDescriptorProto;
            toAmino(message: _51.EnumDescriptorProto): _51.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _51.EnumDescriptorProtoAminoMsg): _51.EnumDescriptorProto;
            fromProtoMsg(message: _51.EnumDescriptorProtoProtoMsg): _51.EnumDescriptorProto;
            toProto(message: _51.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _51.EnumDescriptorProto): _51.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _51.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _51.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _51.EnumDescriptorProto_EnumReservedRangeAmino): _51.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _51.EnumDescriptorProto_EnumReservedRange): _51.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _51.EnumDescriptorProto_EnumReservedRangeAminoMsg): _51.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _51.EnumDescriptorProto_EnumReservedRangeProtoMsg): _51.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _51.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _51.EnumDescriptorProto_EnumReservedRange): _51.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            encode(message: _51.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumValueDescriptorProto;
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
            }): _51.EnumValueDescriptorProto;
            fromAmino(object: _51.EnumValueDescriptorProtoAmino): _51.EnumValueDescriptorProto;
            toAmino(message: _51.EnumValueDescriptorProto): _51.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _51.EnumValueDescriptorProtoAminoMsg): _51.EnumValueDescriptorProto;
            fromProtoMsg(message: _51.EnumValueDescriptorProtoProtoMsg): _51.EnumValueDescriptorProto;
            toProto(message: _51.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _51.EnumValueDescriptorProto): _51.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            encode(message: _51.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _51.MethodOptions_IdempotencyLevel;
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
            }): _51.ServiceDescriptorProto;
            fromAmino(object: _51.ServiceDescriptorProtoAmino): _51.ServiceDescriptorProto;
            toAmino(message: _51.ServiceDescriptorProto): _51.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _51.ServiceDescriptorProtoAminoMsg): _51.ServiceDescriptorProto;
            fromProtoMsg(message: _51.ServiceDescriptorProtoProtoMsg): _51.ServiceDescriptorProto;
            toProto(message: _51.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _51.ServiceDescriptorProto): _51.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            encode(message: _51.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MethodDescriptorProto;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _51.MethodOptions_IdempotencyLevel;
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
            }): _51.MethodDescriptorProto;
            fromAmino(object: _51.MethodDescriptorProtoAmino): _51.MethodDescriptorProto;
            toAmino(message: _51.MethodDescriptorProto): _51.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _51.MethodDescriptorProtoAminoMsg): _51.MethodDescriptorProto;
            fromProtoMsg(message: _51.MethodDescriptorProtoProtoMsg): _51.MethodDescriptorProto;
            toProto(message: _51.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _51.MethodDescriptorProto): _51.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            encode(message: _51.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FileOptions;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _51.FileOptions_OptimizeMode;
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
            }): _51.FileOptions;
            fromAmino(object: _51.FileOptionsAmino): _51.FileOptions;
            toAmino(message: _51.FileOptions): _51.FileOptionsAmino;
            fromAminoMsg(object: _51.FileOptionsAminoMsg): _51.FileOptions;
            fromProtoMsg(message: _51.FileOptionsProtoMsg): _51.FileOptions;
            toProto(message: _51.FileOptions): Uint8Array;
            toProtoMsg(message: _51.FileOptions): _51.FileOptionsProtoMsg;
        };
        MessageOptions: {
            encode(message: _51.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MessageOptions;
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
            }): _51.MessageOptions;
            fromAmino(object: _51.MessageOptionsAmino): _51.MessageOptions;
            toAmino(message: _51.MessageOptions): _51.MessageOptionsAmino;
            fromAminoMsg(object: _51.MessageOptionsAminoMsg): _51.MessageOptions;
            fromProtoMsg(message: _51.MessageOptionsProtoMsg): _51.MessageOptions;
            toProto(message: _51.MessageOptions): Uint8Array;
            toProtoMsg(message: _51.MessageOptions): _51.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            encode(message: _51.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FieldOptions;
            fromPartial(object: {
                ctype?: _51.FieldOptions_CType;
                packed?: boolean;
                jstype?: _51.FieldOptions_JSType;
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
            }): _51.FieldOptions;
            fromAmino(object: _51.FieldOptionsAmino): _51.FieldOptions;
            toAmino(message: _51.FieldOptions): _51.FieldOptionsAmino;
            fromAminoMsg(object: _51.FieldOptionsAminoMsg): _51.FieldOptions;
            fromProtoMsg(message: _51.FieldOptionsProtoMsg): _51.FieldOptions;
            toProto(message: _51.FieldOptions): Uint8Array;
            toProtoMsg(message: _51.FieldOptions): _51.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            encode(message: _51.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.OneofOptions;
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
            }): _51.OneofOptions;
            fromAmino(object: _51.OneofOptionsAmino): _51.OneofOptions;
            toAmino(message: _51.OneofOptions): _51.OneofOptionsAmino;
            fromAminoMsg(object: _51.OneofOptionsAminoMsg): _51.OneofOptions;
            fromProtoMsg(message: _51.OneofOptionsProtoMsg): _51.OneofOptions;
            toProto(message: _51.OneofOptions): Uint8Array;
            toProtoMsg(message: _51.OneofOptions): _51.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            encode(message: _51.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumOptions;
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
            }): _51.EnumOptions;
            fromAmino(object: _51.EnumOptionsAmino): _51.EnumOptions;
            toAmino(message: _51.EnumOptions): _51.EnumOptionsAmino;
            fromAminoMsg(object: _51.EnumOptionsAminoMsg): _51.EnumOptions;
            fromProtoMsg(message: _51.EnumOptionsProtoMsg): _51.EnumOptions;
            toProto(message: _51.EnumOptions): Uint8Array;
            toProtoMsg(message: _51.EnumOptions): _51.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            encode(message: _51.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumValueOptions;
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
            }): _51.EnumValueOptions;
            fromAmino(object: _51.EnumValueOptionsAmino): _51.EnumValueOptions;
            toAmino(message: _51.EnumValueOptions): _51.EnumValueOptionsAmino;
            fromAminoMsg(object: _51.EnumValueOptionsAminoMsg): _51.EnumValueOptions;
            fromProtoMsg(message: _51.EnumValueOptionsProtoMsg): _51.EnumValueOptions;
            toProto(message: _51.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _51.EnumValueOptions): _51.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            encode(message: _51.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ServiceOptions;
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
            }): _51.ServiceOptions;
            fromAmino(object: _51.ServiceOptionsAmino): _51.ServiceOptions;
            toAmino(message: _51.ServiceOptions): _51.ServiceOptionsAmino;
            fromAminoMsg(object: _51.ServiceOptionsAminoMsg): _51.ServiceOptions;
            fromProtoMsg(message: _51.ServiceOptionsProtoMsg): _51.ServiceOptions;
            toProto(message: _51.ServiceOptions): Uint8Array;
            toProtoMsg(message: _51.ServiceOptions): _51.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            encode(message: _51.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _51.MethodOptions_IdempotencyLevel;
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
            }): _51.MethodOptions;
            fromAmino(object: _51.MethodOptionsAmino): _51.MethodOptions;
            toAmino(message: _51.MethodOptions): _51.MethodOptionsAmino;
            fromAminoMsg(object: _51.MethodOptionsAminoMsg): _51.MethodOptions;
            fromProtoMsg(message: _51.MethodOptionsProtoMsg): _51.MethodOptions;
            toProto(message: _51.MethodOptions): Uint8Array;
            toProtoMsg(message: _51.MethodOptions): _51.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            encode(message: _51.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.UninterpretedOption;
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
            }): _51.UninterpretedOption;
            fromAmino(object: _51.UninterpretedOptionAmino): _51.UninterpretedOption;
            toAmino(message: _51.UninterpretedOption): _51.UninterpretedOptionAmino;
            fromAminoMsg(object: _51.UninterpretedOptionAminoMsg): _51.UninterpretedOption;
            fromProtoMsg(message: _51.UninterpretedOptionProtoMsg): _51.UninterpretedOption;
            toProto(message: _51.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _51.UninterpretedOption): _51.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            encode(message: _51.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.UninterpretedOption_NamePart;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _51.UninterpretedOption_NamePart;
            fromAmino(object: _51.UninterpretedOption_NamePartAmino): _51.UninterpretedOption_NamePart;
            toAmino(message: _51.UninterpretedOption_NamePart): _51.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _51.UninterpretedOption_NamePartAminoMsg): _51.UninterpretedOption_NamePart;
            fromProtoMsg(message: _51.UninterpretedOption_NamePartProtoMsg): _51.UninterpretedOption_NamePart;
            toProto(message: _51.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _51.UninterpretedOption_NamePart): _51.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            encode(message: _51.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _51.SourceCodeInfo;
            fromAmino(object: _51.SourceCodeInfoAmino): _51.SourceCodeInfo;
            toAmino(message: _51.SourceCodeInfo): _51.SourceCodeInfoAmino;
            fromAminoMsg(object: _51.SourceCodeInfoAminoMsg): _51.SourceCodeInfo;
            fromProtoMsg(message: _51.SourceCodeInfoProtoMsg): _51.SourceCodeInfo;
            toProto(message: _51.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _51.SourceCodeInfo): _51.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            encode(message: _51.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _51.SourceCodeInfo_Location;
            fromAmino(object: _51.SourceCodeInfo_LocationAmino): _51.SourceCodeInfo_Location;
            toAmino(message: _51.SourceCodeInfo_Location): _51.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _51.SourceCodeInfo_LocationAminoMsg): _51.SourceCodeInfo_Location;
            fromProtoMsg(message: _51.SourceCodeInfo_LocationProtoMsg): _51.SourceCodeInfo_Location;
            toProto(message: _51.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _51.SourceCodeInfo_Location): _51.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            encode(message: _51.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _51.GeneratedCodeInfo;
            fromAmino(object: _51.GeneratedCodeInfoAmino): _51.GeneratedCodeInfo;
            toAmino(message: _51.GeneratedCodeInfo): _51.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _51.GeneratedCodeInfoAminoMsg): _51.GeneratedCodeInfo;
            fromProtoMsg(message: _51.GeneratedCodeInfoProtoMsg): _51.GeneratedCodeInfo;
            toProto(message: _51.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _51.GeneratedCodeInfo): _51.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _51.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _51.GeneratedCodeInfo_Annotation;
            fromAmino(object: _51.GeneratedCodeInfo_AnnotationAmino): _51.GeneratedCodeInfo_Annotation;
            toAmino(message: _51.GeneratedCodeInfo_Annotation): _51.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _51.GeneratedCodeInfo_AnnotationAminoMsg): _51.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _51.GeneratedCodeInfo_AnnotationProtoMsg): _51.GeneratedCodeInfo_Annotation;
            toProto(message: _51.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _51.GeneratedCodeInfo_Annotation): _51.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            encode(message: _50.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _50.Any;
            fromAmino(object: _50.AnyAmino): _50.Any;
            toAmino(message: _50.Any): _50.AnyAmino;
            fromAminoMsg(object: _50.AnyAminoMsg): _50.Any;
            fromProtoMsg(message: _50.AnyProtoMsg): _50.Any;
            toProto(message: _50.Any): Uint8Array;
            toProtoMsg(message: _50.Any): _50.AnyProtoMsg;
        };
    };
}
