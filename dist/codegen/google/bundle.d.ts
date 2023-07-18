/// <reference types="long" />
import * as _43 from "./api/http";
import * as _44 from "./api/httpbody";
import * as _45 from "./protobuf/any";
import * as _46 from "./protobuf/descriptor";
import * as _47 from "./protobuf/timestamp";
import * as _48 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _44.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.HttpBody;
            fromPartial(object: {
                contentType?: string;
                data?: Uint8Array;
                extensions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _44.HttpBody;
            fromAmino(object: _44.HttpBodyAmino): _44.HttpBody;
            toAmino(message: _44.HttpBody): _44.HttpBodyAmino;
            fromAminoMsg(object: _44.HttpBodyAminoMsg): _44.HttpBody;
            fromProtoMsg(message: _44.HttpBodyProtoMsg): _44.HttpBody;
            toProto(message: _44.HttpBody): Uint8Array;
            toProtoMsg(message: _44.HttpBody): _44.HttpBodyProtoMsg;
        };
        Http: {
            encode(message: _43.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Http;
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
            }): _43.Http;
            fromAmino(object: _43.HttpAmino): _43.Http;
            toAmino(message: _43.Http): _43.HttpAmino;
            fromAminoMsg(object: _43.HttpAminoMsg): _43.Http;
            fromProtoMsg(message: _43.HttpProtoMsg): _43.Http;
            toProto(message: _43.Http): Uint8Array;
            toProtoMsg(message: _43.Http): _43.HttpProtoMsg;
        };
        HttpRule: {
            encode(message: _43.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.HttpRule;
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
            }): _43.HttpRule;
            fromAmino(object: _43.HttpRuleAmino): _43.HttpRule;
            toAmino(message: _43.HttpRule): _43.HttpRuleAmino;
            fromAminoMsg(object: _43.HttpRuleAminoMsg): _43.HttpRule;
            fromProtoMsg(message: _43.HttpRuleProtoMsg): _43.HttpRule;
            toProto(message: _43.HttpRule): Uint8Array;
            toProtoMsg(message: _43.HttpRule): _43.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            encode(message: _43.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _43.CustomHttpPattern;
            fromAmino(object: _43.CustomHttpPatternAmino): _43.CustomHttpPattern;
            toAmino(message: _43.CustomHttpPattern): _43.CustomHttpPatternAmino;
            fromAminoMsg(object: _43.CustomHttpPatternAminoMsg): _43.CustomHttpPattern;
            fromProtoMsg(message: _43.CustomHttpPatternProtoMsg): _43.CustomHttpPattern;
            toProto(message: _43.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _43.CustomHttpPattern): _43.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _48.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Duration;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _48.Duration;
            fromAmino(object: string): _48.Duration;
            toAmino(message: _48.Duration): string;
            fromAminoMsg(object: _48.DurationAminoMsg): _48.Duration;
            fromProtoMsg(message: _48.DurationProtoMsg): _48.Duration;
            toProto(message: _48.Duration): Uint8Array;
            toProtoMsg(message: _48.Duration): _48.DurationProtoMsg;
        };
        Timestamp: {
            encode(message: _47.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Timestamp;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _47.Timestamp;
            fromAmino(object: string): _47.Timestamp;
            toAmino(message: _47.Timestamp): string;
            fromAminoMsg(object: _47.TimestampAminoMsg): _47.Timestamp;
            fromProtoMsg(message: _47.TimestampProtoMsg): _47.Timestamp;
            toProto(message: _47.Timestamp): Uint8Array;
            toProtoMsg(message: _47.Timestamp): _47.TimestampProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _46.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _46.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _46.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _46.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _46.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _46.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _46.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _46.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _46.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _46.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _46.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _46.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _46.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _46.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _46.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _46.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _46.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _46.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _46.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _46.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _46.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _46.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _46.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _46.FieldOptions_CType;
        FieldOptions_JSType: typeof _46.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _46.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _46.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _46.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _46.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _46.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _46.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.FileDescriptorSet;
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
                            label?: _46.FieldDescriptorProto_Label;
                            type?: _46.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _46.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _46.FieldOptions_JSType;
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
                            label?: _46.FieldDescriptorProto_Label;
                            type?: _46.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _46.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _46.FieldOptions_JSType;
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
                                idempotencyLevel?: _46.MethodOptions_IdempotencyLevel;
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
                        label?: _46.FieldDescriptorProto_Label;
                        type?: _46.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _46.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _46.FieldOptions_JSType;
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
                        optimizeFor?: _46.FileOptions_OptimizeMode;
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
            }): _46.FileDescriptorSet;
            fromAmino(object: _46.FileDescriptorSetAmino): _46.FileDescriptorSet;
            toAmino(message: _46.FileDescriptorSet): _46.FileDescriptorSetAmino;
            fromAminoMsg(object: _46.FileDescriptorSetAminoMsg): _46.FileDescriptorSet;
            fromProtoMsg(message: _46.FileDescriptorSetProtoMsg): _46.FileDescriptorSet;
            toProto(message: _46.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _46.FileDescriptorSet): _46.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            encode(message: _46.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.FileDescriptorProto;
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
                        label?: _46.FieldDescriptorProto_Label;
                        type?: _46.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _46.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _46.FieldOptions_JSType;
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
                        label?: _46.FieldDescriptorProto_Label;
                        type?: _46.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _46.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _46.FieldOptions_JSType;
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
                            idempotencyLevel?: _46.MethodOptions_IdempotencyLevel;
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
                    label?: _46.FieldDescriptorProto_Label;
                    type?: _46.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _46.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _46.FieldOptions_JSType;
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
                    optimizeFor?: _46.FileOptions_OptimizeMode;
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
            }): _46.FileDescriptorProto;
            fromAmino(object: _46.FileDescriptorProtoAmino): _46.FileDescriptorProto;
            toAmino(message: _46.FileDescriptorProto): _46.FileDescriptorProtoAmino;
            fromAminoMsg(object: _46.FileDescriptorProtoAminoMsg): _46.FileDescriptorProto;
            fromProtoMsg(message: _46.FileDescriptorProtoProtoMsg): _46.FileDescriptorProto;
            toProto(message: _46.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _46.FileDescriptorProto): _46.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            encode(message: _46.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.DescriptorProto;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _46.FieldDescriptorProto_Label;
                    type?: _46.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _46.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _46.FieldOptions_JSType;
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
                    label?: _46.FieldDescriptorProto_Label;
                    type?: _46.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _46.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _46.FieldOptions_JSType;
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
            }): _46.DescriptorProto;
            fromAmino(object: _46.DescriptorProtoAmino): _46.DescriptorProto;
            toAmino(message: _46.DescriptorProto): _46.DescriptorProtoAmino;
            fromAminoMsg(object: _46.DescriptorProtoAminoMsg): _46.DescriptorProto;
            fromProtoMsg(message: _46.DescriptorProtoProtoMsg): _46.DescriptorProto;
            toProto(message: _46.DescriptorProto): Uint8Array;
            toProtoMsg(message: _46.DescriptorProto): _46.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _46.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.DescriptorProto_ExtensionRange;
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
            }): _46.DescriptorProto_ExtensionRange;
            fromAmino(object: _46.DescriptorProto_ExtensionRangeAmino): _46.DescriptorProto_ExtensionRange;
            toAmino(message: _46.DescriptorProto_ExtensionRange): _46.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _46.DescriptorProto_ExtensionRangeAminoMsg): _46.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _46.DescriptorProto_ExtensionRangeProtoMsg): _46.DescriptorProto_ExtensionRange;
            toProto(message: _46.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _46.DescriptorProto_ExtensionRange): _46.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _46.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _46.DescriptorProto_ReservedRange;
            fromAmino(object: _46.DescriptorProto_ReservedRangeAmino): _46.DescriptorProto_ReservedRange;
            toAmino(message: _46.DescriptorProto_ReservedRange): _46.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _46.DescriptorProto_ReservedRangeAminoMsg): _46.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _46.DescriptorProto_ReservedRangeProtoMsg): _46.DescriptorProto_ReservedRange;
            toProto(message: _46.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _46.DescriptorProto_ReservedRange): _46.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            encode(message: _46.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ExtensionRangeOptions;
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
            }): _46.ExtensionRangeOptions;
            fromAmino(object: _46.ExtensionRangeOptionsAmino): _46.ExtensionRangeOptions;
            toAmino(message: _46.ExtensionRangeOptions): _46.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _46.ExtensionRangeOptionsAminoMsg): _46.ExtensionRangeOptions;
            fromProtoMsg(message: _46.ExtensionRangeOptionsProtoMsg): _46.ExtensionRangeOptions;
            toProto(message: _46.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _46.ExtensionRangeOptions): _46.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            encode(message: _46.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.FieldDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _46.FieldDescriptorProto_Label;
                type?: _46.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _46.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _46.FieldOptions_JSType;
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
            }): _46.FieldDescriptorProto;
            fromAmino(object: _46.FieldDescriptorProtoAmino): _46.FieldDescriptorProto;
            toAmino(message: _46.FieldDescriptorProto): _46.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _46.FieldDescriptorProtoAminoMsg): _46.FieldDescriptorProto;
            fromProtoMsg(message: _46.FieldDescriptorProtoProtoMsg): _46.FieldDescriptorProto;
            toProto(message: _46.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _46.FieldDescriptorProto): _46.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            encode(message: _46.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.OneofDescriptorProto;
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
            }): _46.OneofDescriptorProto;
            fromAmino(object: _46.OneofDescriptorProtoAmino): _46.OneofDescriptorProto;
            toAmino(message: _46.OneofDescriptorProto): _46.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _46.OneofDescriptorProtoAminoMsg): _46.OneofDescriptorProto;
            fromProtoMsg(message: _46.OneofDescriptorProtoProtoMsg): _46.OneofDescriptorProto;
            toProto(message: _46.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _46.OneofDescriptorProto): _46.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            encode(message: _46.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.EnumDescriptorProto;
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
            }): _46.EnumDescriptorProto;
            fromAmino(object: _46.EnumDescriptorProtoAmino): _46.EnumDescriptorProto;
            toAmino(message: _46.EnumDescriptorProto): _46.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _46.EnumDescriptorProtoAminoMsg): _46.EnumDescriptorProto;
            fromProtoMsg(message: _46.EnumDescriptorProtoProtoMsg): _46.EnumDescriptorProto;
            toProto(message: _46.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _46.EnumDescriptorProto): _46.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _46.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _46.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _46.EnumDescriptorProto_EnumReservedRangeAmino): _46.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _46.EnumDescriptorProto_EnumReservedRange): _46.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _46.EnumDescriptorProto_EnumReservedRangeAminoMsg): _46.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _46.EnumDescriptorProto_EnumReservedRangeProtoMsg): _46.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _46.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _46.EnumDescriptorProto_EnumReservedRange): _46.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            encode(message: _46.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.EnumValueDescriptorProto;
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
            }): _46.EnumValueDescriptorProto;
            fromAmino(object: _46.EnumValueDescriptorProtoAmino): _46.EnumValueDescriptorProto;
            toAmino(message: _46.EnumValueDescriptorProto): _46.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _46.EnumValueDescriptorProtoAminoMsg): _46.EnumValueDescriptorProto;
            fromProtoMsg(message: _46.EnumValueDescriptorProtoProtoMsg): _46.EnumValueDescriptorProto;
            toProto(message: _46.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _46.EnumValueDescriptorProto): _46.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            encode(message: _46.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _46.MethodOptions_IdempotencyLevel;
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
            }): _46.ServiceDescriptorProto;
            fromAmino(object: _46.ServiceDescriptorProtoAmino): _46.ServiceDescriptorProto;
            toAmino(message: _46.ServiceDescriptorProto): _46.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _46.ServiceDescriptorProtoAminoMsg): _46.ServiceDescriptorProto;
            fromProtoMsg(message: _46.ServiceDescriptorProtoProtoMsg): _46.ServiceDescriptorProto;
            toProto(message: _46.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _46.ServiceDescriptorProto): _46.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            encode(message: _46.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MethodDescriptorProto;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _46.MethodOptions_IdempotencyLevel;
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
            }): _46.MethodDescriptorProto;
            fromAmino(object: _46.MethodDescriptorProtoAmino): _46.MethodDescriptorProto;
            toAmino(message: _46.MethodDescriptorProto): _46.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _46.MethodDescriptorProtoAminoMsg): _46.MethodDescriptorProto;
            fromProtoMsg(message: _46.MethodDescriptorProtoProtoMsg): _46.MethodDescriptorProto;
            toProto(message: _46.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _46.MethodDescriptorProto): _46.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            encode(message: _46.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.FileOptions;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _46.FileOptions_OptimizeMode;
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
            }): _46.FileOptions;
            fromAmino(object: _46.FileOptionsAmino): _46.FileOptions;
            toAmino(message: _46.FileOptions): _46.FileOptionsAmino;
            fromAminoMsg(object: _46.FileOptionsAminoMsg): _46.FileOptions;
            fromProtoMsg(message: _46.FileOptionsProtoMsg): _46.FileOptions;
            toProto(message: _46.FileOptions): Uint8Array;
            toProtoMsg(message: _46.FileOptions): _46.FileOptionsProtoMsg;
        };
        MessageOptions: {
            encode(message: _46.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MessageOptions;
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
            }): _46.MessageOptions;
            fromAmino(object: _46.MessageOptionsAmino): _46.MessageOptions;
            toAmino(message: _46.MessageOptions): _46.MessageOptionsAmino;
            fromAminoMsg(object: _46.MessageOptionsAminoMsg): _46.MessageOptions;
            fromProtoMsg(message: _46.MessageOptionsProtoMsg): _46.MessageOptions;
            toProto(message: _46.MessageOptions): Uint8Array;
            toProtoMsg(message: _46.MessageOptions): _46.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            encode(message: _46.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.FieldOptions;
            fromPartial(object: {
                ctype?: _46.FieldOptions_CType;
                packed?: boolean;
                jstype?: _46.FieldOptions_JSType;
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
            }): _46.FieldOptions;
            fromAmino(object: _46.FieldOptionsAmino): _46.FieldOptions;
            toAmino(message: _46.FieldOptions): _46.FieldOptionsAmino;
            fromAminoMsg(object: _46.FieldOptionsAminoMsg): _46.FieldOptions;
            fromProtoMsg(message: _46.FieldOptionsProtoMsg): _46.FieldOptions;
            toProto(message: _46.FieldOptions): Uint8Array;
            toProtoMsg(message: _46.FieldOptions): _46.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            encode(message: _46.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.OneofOptions;
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
            }): _46.OneofOptions;
            fromAmino(object: _46.OneofOptionsAmino): _46.OneofOptions;
            toAmino(message: _46.OneofOptions): _46.OneofOptionsAmino;
            fromAminoMsg(object: _46.OneofOptionsAminoMsg): _46.OneofOptions;
            fromProtoMsg(message: _46.OneofOptionsProtoMsg): _46.OneofOptions;
            toProto(message: _46.OneofOptions): Uint8Array;
            toProtoMsg(message: _46.OneofOptions): _46.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            encode(message: _46.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.EnumOptions;
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
            }): _46.EnumOptions;
            fromAmino(object: _46.EnumOptionsAmino): _46.EnumOptions;
            toAmino(message: _46.EnumOptions): _46.EnumOptionsAmino;
            fromAminoMsg(object: _46.EnumOptionsAminoMsg): _46.EnumOptions;
            fromProtoMsg(message: _46.EnumOptionsProtoMsg): _46.EnumOptions;
            toProto(message: _46.EnumOptions): Uint8Array;
            toProtoMsg(message: _46.EnumOptions): _46.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            encode(message: _46.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.EnumValueOptions;
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
            }): _46.EnumValueOptions;
            fromAmino(object: _46.EnumValueOptionsAmino): _46.EnumValueOptions;
            toAmino(message: _46.EnumValueOptions): _46.EnumValueOptionsAmino;
            fromAminoMsg(object: _46.EnumValueOptionsAminoMsg): _46.EnumValueOptions;
            fromProtoMsg(message: _46.EnumValueOptionsProtoMsg): _46.EnumValueOptions;
            toProto(message: _46.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _46.EnumValueOptions): _46.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            encode(message: _46.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ServiceOptions;
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
            }): _46.ServiceOptions;
            fromAmino(object: _46.ServiceOptionsAmino): _46.ServiceOptions;
            toAmino(message: _46.ServiceOptions): _46.ServiceOptionsAmino;
            fromAminoMsg(object: _46.ServiceOptionsAminoMsg): _46.ServiceOptions;
            fromProtoMsg(message: _46.ServiceOptionsProtoMsg): _46.ServiceOptions;
            toProto(message: _46.ServiceOptions): Uint8Array;
            toProtoMsg(message: _46.ServiceOptions): _46.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            encode(message: _46.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _46.MethodOptions_IdempotencyLevel;
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
            }): _46.MethodOptions;
            fromAmino(object: _46.MethodOptionsAmino): _46.MethodOptions;
            toAmino(message: _46.MethodOptions): _46.MethodOptionsAmino;
            fromAminoMsg(object: _46.MethodOptionsAminoMsg): _46.MethodOptions;
            fromProtoMsg(message: _46.MethodOptionsProtoMsg): _46.MethodOptions;
            toProto(message: _46.MethodOptions): Uint8Array;
            toProtoMsg(message: _46.MethodOptions): _46.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            encode(message: _46.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.UninterpretedOption;
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
            }): _46.UninterpretedOption;
            fromAmino(object: _46.UninterpretedOptionAmino): _46.UninterpretedOption;
            toAmino(message: _46.UninterpretedOption): _46.UninterpretedOptionAmino;
            fromAminoMsg(object: _46.UninterpretedOptionAminoMsg): _46.UninterpretedOption;
            fromProtoMsg(message: _46.UninterpretedOptionProtoMsg): _46.UninterpretedOption;
            toProto(message: _46.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _46.UninterpretedOption): _46.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            encode(message: _46.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.UninterpretedOption_NamePart;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _46.UninterpretedOption_NamePart;
            fromAmino(object: _46.UninterpretedOption_NamePartAmino): _46.UninterpretedOption_NamePart;
            toAmino(message: _46.UninterpretedOption_NamePart): _46.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _46.UninterpretedOption_NamePartAminoMsg): _46.UninterpretedOption_NamePart;
            fromProtoMsg(message: _46.UninterpretedOption_NamePartProtoMsg): _46.UninterpretedOption_NamePart;
            toProto(message: _46.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _46.UninterpretedOption_NamePart): _46.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            encode(message: _46.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _46.SourceCodeInfo;
            fromAmino(object: _46.SourceCodeInfoAmino): _46.SourceCodeInfo;
            toAmino(message: _46.SourceCodeInfo): _46.SourceCodeInfoAmino;
            fromAminoMsg(object: _46.SourceCodeInfoAminoMsg): _46.SourceCodeInfo;
            fromProtoMsg(message: _46.SourceCodeInfoProtoMsg): _46.SourceCodeInfo;
            toProto(message: _46.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _46.SourceCodeInfo): _46.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            encode(message: _46.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _46.SourceCodeInfo_Location;
            fromAmino(object: _46.SourceCodeInfo_LocationAmino): _46.SourceCodeInfo_Location;
            toAmino(message: _46.SourceCodeInfo_Location): _46.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _46.SourceCodeInfo_LocationAminoMsg): _46.SourceCodeInfo_Location;
            fromProtoMsg(message: _46.SourceCodeInfo_LocationProtoMsg): _46.SourceCodeInfo_Location;
            toProto(message: _46.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _46.SourceCodeInfo_Location): _46.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            encode(message: _46.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _46.GeneratedCodeInfo;
            fromAmino(object: _46.GeneratedCodeInfoAmino): _46.GeneratedCodeInfo;
            toAmino(message: _46.GeneratedCodeInfo): _46.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _46.GeneratedCodeInfoAminoMsg): _46.GeneratedCodeInfo;
            fromProtoMsg(message: _46.GeneratedCodeInfoProtoMsg): _46.GeneratedCodeInfo;
            toProto(message: _46.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _46.GeneratedCodeInfo): _46.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _46.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _46.GeneratedCodeInfo_Annotation;
            fromAmino(object: _46.GeneratedCodeInfo_AnnotationAmino): _46.GeneratedCodeInfo_Annotation;
            toAmino(message: _46.GeneratedCodeInfo_Annotation): _46.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _46.GeneratedCodeInfo_AnnotationAminoMsg): _46.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _46.GeneratedCodeInfo_AnnotationProtoMsg): _46.GeneratedCodeInfo_Annotation;
            toProto(message: _46.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _46.GeneratedCodeInfo_Annotation): _46.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            encode(message: _45.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _45.Any;
            fromAmino(object: _45.AnyAmino): _45.Any;
            toAmino(message: _45.Any): _45.AnyAmino;
            fromAminoMsg(object: _45.AnyAminoMsg): _45.Any;
            fromProtoMsg(message: _45.AnyProtoMsg): _45.Any;
            toProto(message: _45.Any): Uint8Array;
            toProtoMsg(message: _45.Any): _45.AnyProtoMsg;
        };
    };
}
