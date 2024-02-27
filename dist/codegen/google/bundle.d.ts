/// <reference types="long" />
import * as _50 from "./api/http";
import * as _51 from "./api/httpbody";
import * as _52 from "./protobuf/any";
import * as _53 from "./protobuf/descriptor";
import * as _54 from "./protobuf/timestamp";
import * as _55 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _51.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.HttpBody;
            fromPartial(object: {
                contentType?: string;
                data?: Uint8Array;
                extensions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _51.HttpBody;
            fromAmino(object: _51.HttpBodyAmino): _51.HttpBody;
            toAmino(message: _51.HttpBody): _51.HttpBodyAmino;
            fromAminoMsg(object: _51.HttpBodyAminoMsg): _51.HttpBody;
            fromProtoMsg(message: _51.HttpBodyProtoMsg): _51.HttpBody;
            toProto(message: _51.HttpBody): Uint8Array;
            toProtoMsg(message: _51.HttpBody): _51.HttpBodyProtoMsg;
        };
        Http: {
            encode(message: _50.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Http;
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
            }): _50.Http;
            fromAmino(object: _50.HttpAmino): _50.Http;
            toAmino(message: _50.Http): _50.HttpAmino;
            fromAminoMsg(object: _50.HttpAminoMsg): _50.Http;
            fromProtoMsg(message: _50.HttpProtoMsg): _50.Http;
            toProto(message: _50.Http): Uint8Array;
            toProtoMsg(message: _50.Http): _50.HttpProtoMsg;
        };
        HttpRule: {
            encode(message: _50.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.HttpRule;
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
            }): _50.HttpRule;
            fromAmino(object: _50.HttpRuleAmino): _50.HttpRule;
            toAmino(message: _50.HttpRule): _50.HttpRuleAmino;
            fromAminoMsg(object: _50.HttpRuleAminoMsg): _50.HttpRule;
            fromProtoMsg(message: _50.HttpRuleProtoMsg): _50.HttpRule;
            toProto(message: _50.HttpRule): Uint8Array;
            toProtoMsg(message: _50.HttpRule): _50.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            encode(message: _50.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _50.CustomHttpPattern;
            fromAmino(object: _50.CustomHttpPatternAmino): _50.CustomHttpPattern;
            toAmino(message: _50.CustomHttpPattern): _50.CustomHttpPatternAmino;
            fromAminoMsg(object: _50.CustomHttpPatternAminoMsg): _50.CustomHttpPattern;
            fromProtoMsg(message: _50.CustomHttpPatternProtoMsg): _50.CustomHttpPattern;
            toProto(message: _50.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _50.CustomHttpPattern): _50.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _55.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Duration;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _55.Duration;
            fromAmino(object: string): _55.Duration;
            toAmino(message: _55.Duration): string;
            fromAminoMsg(object: _55.DurationAminoMsg): _55.Duration;
            fromProtoMsg(message: _55.DurationProtoMsg): _55.Duration;
            toProto(message: _55.Duration): Uint8Array;
            toProtoMsg(message: _55.Duration): _55.DurationProtoMsg;
        };
        Timestamp: {
            encode(message: _54.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Timestamp;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _54.Timestamp;
            fromAmino(object: string): _54.Timestamp;
            toAmino(message: _54.Timestamp): string;
            fromAminoMsg(object: _54.TimestampAminoMsg): _54.Timestamp;
            fromProtoMsg(message: _54.TimestampProtoMsg): _54.Timestamp;
            toProto(message: _54.Timestamp): Uint8Array;
            toProtoMsg(message: _54.Timestamp): _54.TimestampProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _53.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _53.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _53.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _53.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _53.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _53.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _53.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _53.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _53.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _53.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _53.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _53.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _53.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _53.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _53.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _53.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _53.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _53.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _53.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _53.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _53.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _53.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _53.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _53.FieldOptions_CType;
        FieldOptions_JSType: typeof _53.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _53.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _53.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _53.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _53.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _53.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _53.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FileDescriptorSet;
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
                            label?: _53.FieldDescriptorProto_Label;
                            type?: _53.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _53.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _53.FieldOptions_JSType;
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
                            label?: _53.FieldDescriptorProto_Label;
                            type?: _53.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _53.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _53.FieldOptions_JSType;
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
                                idempotencyLevel?: _53.MethodOptions_IdempotencyLevel;
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
                        label?: _53.FieldDescriptorProto_Label;
                        type?: _53.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _53.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _53.FieldOptions_JSType;
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
                        optimizeFor?: _53.FileOptions_OptimizeMode;
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
            }): _53.FileDescriptorSet;
            fromAmino(object: _53.FileDescriptorSetAmino): _53.FileDescriptorSet;
            toAmino(message: _53.FileDescriptorSet): _53.FileDescriptorSetAmino;
            fromAminoMsg(object: _53.FileDescriptorSetAminoMsg): _53.FileDescriptorSet;
            fromProtoMsg(message: _53.FileDescriptorSetProtoMsg): _53.FileDescriptorSet;
            toProto(message: _53.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _53.FileDescriptorSet): _53.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            encode(message: _53.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FileDescriptorProto;
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
                        label?: _53.FieldDescriptorProto_Label;
                        type?: _53.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _53.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _53.FieldOptions_JSType;
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
                        label?: _53.FieldDescriptorProto_Label;
                        type?: _53.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _53.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _53.FieldOptions_JSType;
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
                            idempotencyLevel?: _53.MethodOptions_IdempotencyLevel;
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
                    label?: _53.FieldDescriptorProto_Label;
                    type?: _53.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _53.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _53.FieldOptions_JSType;
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
                    optimizeFor?: _53.FileOptions_OptimizeMode;
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
            }): _53.FileDescriptorProto;
            fromAmino(object: _53.FileDescriptorProtoAmino): _53.FileDescriptorProto;
            toAmino(message: _53.FileDescriptorProto): _53.FileDescriptorProtoAmino;
            fromAminoMsg(object: _53.FileDescriptorProtoAminoMsg): _53.FileDescriptorProto;
            fromProtoMsg(message: _53.FileDescriptorProtoProtoMsg): _53.FileDescriptorProto;
            toProto(message: _53.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _53.FileDescriptorProto): _53.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            encode(message: _53.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DescriptorProto;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _53.FieldDescriptorProto_Label;
                    type?: _53.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _53.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _53.FieldOptions_JSType;
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
                    label?: _53.FieldDescriptorProto_Label;
                    type?: _53.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _53.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _53.FieldOptions_JSType;
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
            }): _53.DescriptorProto;
            fromAmino(object: _53.DescriptorProtoAmino): _53.DescriptorProto;
            toAmino(message: _53.DescriptorProto): _53.DescriptorProtoAmino;
            fromAminoMsg(object: _53.DescriptorProtoAminoMsg): _53.DescriptorProto;
            fromProtoMsg(message: _53.DescriptorProtoProtoMsg): _53.DescriptorProto;
            toProto(message: _53.DescriptorProto): Uint8Array;
            toProtoMsg(message: _53.DescriptorProto): _53.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _53.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DescriptorProto_ExtensionRange;
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
            }): _53.DescriptorProto_ExtensionRange;
            fromAmino(object: _53.DescriptorProto_ExtensionRangeAmino): _53.DescriptorProto_ExtensionRange;
            toAmino(message: _53.DescriptorProto_ExtensionRange): _53.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _53.DescriptorProto_ExtensionRangeAminoMsg): _53.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _53.DescriptorProto_ExtensionRangeProtoMsg): _53.DescriptorProto_ExtensionRange;
            toProto(message: _53.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _53.DescriptorProto_ExtensionRange): _53.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _53.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _53.DescriptorProto_ReservedRange;
            fromAmino(object: _53.DescriptorProto_ReservedRangeAmino): _53.DescriptorProto_ReservedRange;
            toAmino(message: _53.DescriptorProto_ReservedRange): _53.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _53.DescriptorProto_ReservedRangeAminoMsg): _53.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _53.DescriptorProto_ReservedRangeProtoMsg): _53.DescriptorProto_ReservedRange;
            toProto(message: _53.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _53.DescriptorProto_ReservedRange): _53.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            encode(message: _53.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ExtensionRangeOptions;
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
            }): _53.ExtensionRangeOptions;
            fromAmino(object: _53.ExtensionRangeOptionsAmino): _53.ExtensionRangeOptions;
            toAmino(message: _53.ExtensionRangeOptions): _53.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _53.ExtensionRangeOptionsAminoMsg): _53.ExtensionRangeOptions;
            fromProtoMsg(message: _53.ExtensionRangeOptionsProtoMsg): _53.ExtensionRangeOptions;
            toProto(message: _53.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _53.ExtensionRangeOptions): _53.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            encode(message: _53.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FieldDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _53.FieldDescriptorProto_Label;
                type?: _53.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _53.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _53.FieldOptions_JSType;
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
            }): _53.FieldDescriptorProto;
            fromAmino(object: _53.FieldDescriptorProtoAmino): _53.FieldDescriptorProto;
            toAmino(message: _53.FieldDescriptorProto): _53.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _53.FieldDescriptorProtoAminoMsg): _53.FieldDescriptorProto;
            fromProtoMsg(message: _53.FieldDescriptorProtoProtoMsg): _53.FieldDescriptorProto;
            toProto(message: _53.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _53.FieldDescriptorProto): _53.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            encode(message: _53.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.OneofDescriptorProto;
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
            }): _53.OneofDescriptorProto;
            fromAmino(object: _53.OneofDescriptorProtoAmino): _53.OneofDescriptorProto;
            toAmino(message: _53.OneofDescriptorProto): _53.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _53.OneofDescriptorProtoAminoMsg): _53.OneofDescriptorProto;
            fromProtoMsg(message: _53.OneofDescriptorProtoProtoMsg): _53.OneofDescriptorProto;
            toProto(message: _53.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _53.OneofDescriptorProto): _53.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            encode(message: _53.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumDescriptorProto;
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
            }): _53.EnumDescriptorProto;
            fromAmino(object: _53.EnumDescriptorProtoAmino): _53.EnumDescriptorProto;
            toAmino(message: _53.EnumDescriptorProto): _53.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _53.EnumDescriptorProtoAminoMsg): _53.EnumDescriptorProto;
            fromProtoMsg(message: _53.EnumDescriptorProtoProtoMsg): _53.EnumDescriptorProto;
            toProto(message: _53.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _53.EnumDescriptorProto): _53.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _53.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _53.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _53.EnumDescriptorProto_EnumReservedRangeAmino): _53.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _53.EnumDescriptorProto_EnumReservedRange): _53.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _53.EnumDescriptorProto_EnumReservedRangeAminoMsg): _53.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _53.EnumDescriptorProto_EnumReservedRangeProtoMsg): _53.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _53.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _53.EnumDescriptorProto_EnumReservedRange): _53.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            encode(message: _53.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumValueDescriptorProto;
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
            }): _53.EnumValueDescriptorProto;
            fromAmino(object: _53.EnumValueDescriptorProtoAmino): _53.EnumValueDescriptorProto;
            toAmino(message: _53.EnumValueDescriptorProto): _53.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _53.EnumValueDescriptorProtoAminoMsg): _53.EnumValueDescriptorProto;
            fromProtoMsg(message: _53.EnumValueDescriptorProtoProtoMsg): _53.EnumValueDescriptorProto;
            toProto(message: _53.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _53.EnumValueDescriptorProto): _53.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            encode(message: _53.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _53.MethodOptions_IdempotencyLevel;
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
            }): _53.ServiceDescriptorProto;
            fromAmino(object: _53.ServiceDescriptorProtoAmino): _53.ServiceDescriptorProto;
            toAmino(message: _53.ServiceDescriptorProto): _53.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _53.ServiceDescriptorProtoAminoMsg): _53.ServiceDescriptorProto;
            fromProtoMsg(message: _53.ServiceDescriptorProtoProtoMsg): _53.ServiceDescriptorProto;
            toProto(message: _53.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _53.ServiceDescriptorProto): _53.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            encode(message: _53.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MethodDescriptorProto;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _53.MethodOptions_IdempotencyLevel;
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
            }): _53.MethodDescriptorProto;
            fromAmino(object: _53.MethodDescriptorProtoAmino): _53.MethodDescriptorProto;
            toAmino(message: _53.MethodDescriptorProto): _53.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _53.MethodDescriptorProtoAminoMsg): _53.MethodDescriptorProto;
            fromProtoMsg(message: _53.MethodDescriptorProtoProtoMsg): _53.MethodDescriptorProto;
            toProto(message: _53.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _53.MethodDescriptorProto): _53.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            encode(message: _53.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FileOptions;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _53.FileOptions_OptimizeMode;
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
            }): _53.FileOptions;
            fromAmino(object: _53.FileOptionsAmino): _53.FileOptions;
            toAmino(message: _53.FileOptions): _53.FileOptionsAmino;
            fromAminoMsg(object: _53.FileOptionsAminoMsg): _53.FileOptions;
            fromProtoMsg(message: _53.FileOptionsProtoMsg): _53.FileOptions;
            toProto(message: _53.FileOptions): Uint8Array;
            toProtoMsg(message: _53.FileOptions): _53.FileOptionsProtoMsg;
        };
        MessageOptions: {
            encode(message: _53.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MessageOptions;
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
            }): _53.MessageOptions;
            fromAmino(object: _53.MessageOptionsAmino): _53.MessageOptions;
            toAmino(message: _53.MessageOptions): _53.MessageOptionsAmino;
            fromAminoMsg(object: _53.MessageOptionsAminoMsg): _53.MessageOptions;
            fromProtoMsg(message: _53.MessageOptionsProtoMsg): _53.MessageOptions;
            toProto(message: _53.MessageOptions): Uint8Array;
            toProtoMsg(message: _53.MessageOptions): _53.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            encode(message: _53.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FieldOptions;
            fromPartial(object: {
                ctype?: _53.FieldOptions_CType;
                packed?: boolean;
                jstype?: _53.FieldOptions_JSType;
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
            }): _53.FieldOptions;
            fromAmino(object: _53.FieldOptionsAmino): _53.FieldOptions;
            toAmino(message: _53.FieldOptions): _53.FieldOptionsAmino;
            fromAminoMsg(object: _53.FieldOptionsAminoMsg): _53.FieldOptions;
            fromProtoMsg(message: _53.FieldOptionsProtoMsg): _53.FieldOptions;
            toProto(message: _53.FieldOptions): Uint8Array;
            toProtoMsg(message: _53.FieldOptions): _53.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            encode(message: _53.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.OneofOptions;
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
            }): _53.OneofOptions;
            fromAmino(object: _53.OneofOptionsAmino): _53.OneofOptions;
            toAmino(message: _53.OneofOptions): _53.OneofOptionsAmino;
            fromAminoMsg(object: _53.OneofOptionsAminoMsg): _53.OneofOptions;
            fromProtoMsg(message: _53.OneofOptionsProtoMsg): _53.OneofOptions;
            toProto(message: _53.OneofOptions): Uint8Array;
            toProtoMsg(message: _53.OneofOptions): _53.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            encode(message: _53.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumOptions;
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
            }): _53.EnumOptions;
            fromAmino(object: _53.EnumOptionsAmino): _53.EnumOptions;
            toAmino(message: _53.EnumOptions): _53.EnumOptionsAmino;
            fromAminoMsg(object: _53.EnumOptionsAminoMsg): _53.EnumOptions;
            fromProtoMsg(message: _53.EnumOptionsProtoMsg): _53.EnumOptions;
            toProto(message: _53.EnumOptions): Uint8Array;
            toProtoMsg(message: _53.EnumOptions): _53.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            encode(message: _53.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.EnumValueOptions;
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
            }): _53.EnumValueOptions;
            fromAmino(object: _53.EnumValueOptionsAmino): _53.EnumValueOptions;
            toAmino(message: _53.EnumValueOptions): _53.EnumValueOptionsAmino;
            fromAminoMsg(object: _53.EnumValueOptionsAminoMsg): _53.EnumValueOptions;
            fromProtoMsg(message: _53.EnumValueOptionsProtoMsg): _53.EnumValueOptions;
            toProto(message: _53.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _53.EnumValueOptions): _53.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            encode(message: _53.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ServiceOptions;
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
            }): _53.ServiceOptions;
            fromAmino(object: _53.ServiceOptionsAmino): _53.ServiceOptions;
            toAmino(message: _53.ServiceOptions): _53.ServiceOptionsAmino;
            fromAminoMsg(object: _53.ServiceOptionsAminoMsg): _53.ServiceOptions;
            fromProtoMsg(message: _53.ServiceOptionsProtoMsg): _53.ServiceOptions;
            toProto(message: _53.ServiceOptions): Uint8Array;
            toProtoMsg(message: _53.ServiceOptions): _53.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            encode(message: _53.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _53.MethodOptions_IdempotencyLevel;
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
            }): _53.MethodOptions;
            fromAmino(object: _53.MethodOptionsAmino): _53.MethodOptions;
            toAmino(message: _53.MethodOptions): _53.MethodOptionsAmino;
            fromAminoMsg(object: _53.MethodOptionsAminoMsg): _53.MethodOptions;
            fromProtoMsg(message: _53.MethodOptionsProtoMsg): _53.MethodOptions;
            toProto(message: _53.MethodOptions): Uint8Array;
            toProtoMsg(message: _53.MethodOptions): _53.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            encode(message: _53.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.UninterpretedOption;
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
            }): _53.UninterpretedOption;
            fromAmino(object: _53.UninterpretedOptionAmino): _53.UninterpretedOption;
            toAmino(message: _53.UninterpretedOption): _53.UninterpretedOptionAmino;
            fromAminoMsg(object: _53.UninterpretedOptionAminoMsg): _53.UninterpretedOption;
            fromProtoMsg(message: _53.UninterpretedOptionProtoMsg): _53.UninterpretedOption;
            toProto(message: _53.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _53.UninterpretedOption): _53.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            encode(message: _53.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.UninterpretedOption_NamePart;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _53.UninterpretedOption_NamePart;
            fromAmino(object: _53.UninterpretedOption_NamePartAmino): _53.UninterpretedOption_NamePart;
            toAmino(message: _53.UninterpretedOption_NamePart): _53.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _53.UninterpretedOption_NamePartAminoMsg): _53.UninterpretedOption_NamePart;
            fromProtoMsg(message: _53.UninterpretedOption_NamePartProtoMsg): _53.UninterpretedOption_NamePart;
            toProto(message: _53.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _53.UninterpretedOption_NamePart): _53.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            encode(message: _53.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _53.SourceCodeInfo;
            fromAmino(object: _53.SourceCodeInfoAmino): _53.SourceCodeInfo;
            toAmino(message: _53.SourceCodeInfo): _53.SourceCodeInfoAmino;
            fromAminoMsg(object: _53.SourceCodeInfoAminoMsg): _53.SourceCodeInfo;
            fromProtoMsg(message: _53.SourceCodeInfoProtoMsg): _53.SourceCodeInfo;
            toProto(message: _53.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _53.SourceCodeInfo): _53.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            encode(message: _53.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _53.SourceCodeInfo_Location;
            fromAmino(object: _53.SourceCodeInfo_LocationAmino): _53.SourceCodeInfo_Location;
            toAmino(message: _53.SourceCodeInfo_Location): _53.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _53.SourceCodeInfo_LocationAminoMsg): _53.SourceCodeInfo_Location;
            fromProtoMsg(message: _53.SourceCodeInfo_LocationProtoMsg): _53.SourceCodeInfo_Location;
            toProto(message: _53.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _53.SourceCodeInfo_Location): _53.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            encode(message: _53.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _53.GeneratedCodeInfo;
            fromAmino(object: _53.GeneratedCodeInfoAmino): _53.GeneratedCodeInfo;
            toAmino(message: _53.GeneratedCodeInfo): _53.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _53.GeneratedCodeInfoAminoMsg): _53.GeneratedCodeInfo;
            fromProtoMsg(message: _53.GeneratedCodeInfoProtoMsg): _53.GeneratedCodeInfo;
            toProto(message: _53.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _53.GeneratedCodeInfo): _53.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _53.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _53.GeneratedCodeInfo_Annotation;
            fromAmino(object: _53.GeneratedCodeInfo_AnnotationAmino): _53.GeneratedCodeInfo_Annotation;
            toAmino(message: _53.GeneratedCodeInfo_Annotation): _53.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _53.GeneratedCodeInfo_AnnotationAminoMsg): _53.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _53.GeneratedCodeInfo_AnnotationProtoMsg): _53.GeneratedCodeInfo_Annotation;
            toProto(message: _53.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _53.GeneratedCodeInfo_Annotation): _53.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            encode(message: _52.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _52.Any;
            fromAmino(object: _52.AnyAmino): _52.Any;
            toAmino(message: _52.Any): _52.AnyAmino;
            fromAminoMsg(object: _52.AnyAminoMsg): _52.Any;
            fromProtoMsg(message: _52.AnyProtoMsg): _52.Any;
            toProto(message: _52.Any): Uint8Array;
            toProtoMsg(message: _52.Any): _52.AnyProtoMsg;
        };
    };
}
