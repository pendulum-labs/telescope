/// <reference types="long" />
import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/multisig/keys";
import * as _21 from "./crypto/secp256k1/keys";
import * as _22 from "./crypto/secp256r1/keys";
import * as _23 from "./distribution/v1beta1/distribution";
import * as _24 from "./distribution/v1beta1/genesis";
import * as _25 from "./distribution/v1beta1/query";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./gov/v1beta1/genesis";
import * as _28 from "./gov/v1beta1/gov";
import * as _29 from "./gov/v1beta1/query";
import * as _30 from "./gov/v1beta1/tx";
import * as _31 from "./mint/v1beta1/genesis";
import * as _32 from "./mint/v1beta1/mint";
import * as _33 from "./mint/v1beta1/query";
import * as _34 from "./params/v1beta1/params";
import * as _35 from "./params/v1beta1/query";
import * as _36 from "./staking/v1beta1/authz";
import * as _37 from "./staking/v1beta1/genesis";
import * as _38 from "./staking/v1beta1/query";
import * as _39 from "./staking/v1beta1/staking";
import * as _40 from "./staking/v1beta1/tx";
import * as _41 from "./tx/signing/v1beta1/signing";
import * as _42 from "./tx/v1beta1/service";
import * as _43 from "./tx/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/query";
import * as _45 from "./upgrade/v1beta1/upgrade";
import * as _96 from "./auth/v1beta1/query.rpc.Query";
import * as _97 from "./authz/v1beta1/query.rpc.Query";
import * as _98 from "./bank/v1beta1/query.rpc.Query";
import * as _99 from "./distribution/v1beta1/query.rpc.Query";
import * as _100 from "./gov/v1beta1/query.rpc.Query";
import * as _101 from "./mint/v1beta1/query.rpc.Query";
import * as _102 from "./params/v1beta1/query.rpc.Query";
import * as _103 from "./staking/v1beta1/query.rpc.Query";
import * as _104 from "./tx/v1beta1/service.rpc.Service";
import * as _105 from "./upgrade/v1beta1/query.rpc.Query";
import * as _106 from "./authz/v1beta1/tx.rpc.msg";
import * as _107 from "./bank/v1beta1/tx.rpc.msg";
import * as _108 from "./distribution/v1beta1/tx.rpc.msg";
import * as _109 from "./gov/v1beta1/tx.rpc.msg";
import * as _110 from "./staking/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _96.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _4.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _4.QueryAccountsRequest;
                fromAmino(object: _4.QueryAccountsRequestAmino): _4.QueryAccountsRequest;
                toAmino(message: _4.QueryAccountsRequest): _4.QueryAccountsRequestAmino;
                fromAminoMsg(object: _4.QueryAccountsRequestAminoMsg): _4.QueryAccountsRequest;
                toAminoMsg(message: _4.QueryAccountsRequest): _4.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryAccountsRequestProtoMsg): _4.QueryAccountsRequest;
                toProto(message: _4.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryAccountsRequest): _4.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                encode(message: _4.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _4.QueryAccountsResponse;
                fromAmino(object: _4.QueryAccountsResponseAmino): _4.QueryAccountsResponse;
                toAmino(message: _4.QueryAccountsResponse): _4.QueryAccountsResponseAmino;
                fromAminoMsg(object: _4.QueryAccountsResponseAminoMsg): _4.QueryAccountsResponse;
                toAminoMsg(message: _4.QueryAccountsResponse): _4.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryAccountsResponseProtoMsg): _4.QueryAccountsResponse;
                toProto(message: _4.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryAccountsResponse): _4.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                encode(message: _4.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountRequest;
                fromPartial(object: {
                    address?: string;
                }): _4.QueryAccountRequest;
                fromAmino(object: _4.QueryAccountRequestAmino): _4.QueryAccountRequest;
                toAmino(message: _4.QueryAccountRequest): _4.QueryAccountRequestAmino;
                fromAminoMsg(object: _4.QueryAccountRequestAminoMsg): _4.QueryAccountRequest;
                toAminoMsg(message: _4.QueryAccountRequest): _4.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _4.QueryAccountRequestProtoMsg): _4.QueryAccountRequest;
                toProto(message: _4.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _4.QueryAccountRequest): _4.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                encode(message: _4.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _4.QueryAccountResponse;
                fromAmino(object: _4.QueryAccountResponseAmino): _4.QueryAccountResponse;
                toAmino(message: _4.QueryAccountResponse): _4.QueryAccountResponseAmino;
                fromAminoMsg(object: _4.QueryAccountResponseAminoMsg): _4.QueryAccountResponse;
                toAminoMsg(message: _4.QueryAccountResponse): _4.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _4.QueryAccountResponseProtoMsg): _4.QueryAccountResponse;
                toProto(message: _4.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _4.QueryAccountResponse): _4.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsRequest;
                fromPartial(_: {}): _4.QueryParamsRequest;
                fromAmino(_: _4.QueryParamsRequestAmino): _4.QueryParamsRequest;
                toAmino(_: _4.QueryParamsRequest): _4.QueryParamsRequestAmino;
                fromAminoMsg(object: _4.QueryParamsRequestAminoMsg): _4.QueryParamsRequest;
                toAminoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryParamsRequestProtoMsg): _4.QueryParamsRequest;
                toProto(message: _4.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").Long;
                        txSigLimit?: string | number | import("long").Long;
                        txSizeCostPerByte?: string | number | import("long").Long;
                        sigVerifyCostEd25519?: string | number | import("long").Long;
                        sigVerifyCostSecp256k1?: string | number | import("long").Long;
                    };
                }): _4.QueryParamsResponse;
                fromAmino(object: _4.QueryParamsResponseAmino): _4.QueryParamsResponse;
                toAmino(message: _4.QueryParamsResponse): _4.QueryParamsResponseAmino;
                fromAminoMsg(object: _4.QueryParamsResponseAminoMsg): _4.QueryParamsResponse;
                toAminoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryParamsResponseProtoMsg): _4.QueryParamsResponse;
                toProto(message: _4.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").Long;
                        txSigLimit?: string | number | import("long").Long;
                        txSizeCostPerByte?: string | number | import("long").Long;
                        sigVerifyCostEd25519?: string | number | import("long").Long;
                        sigVerifyCostSecp256k1?: string | number | import("long").Long;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                toAminoMsg(message: _3.GenesisState): _3.GenesisStateAminoMsg;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
            BaseAccount: {
                encode(message: _2.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BaseAccount;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: string | number | import("long").Long;
                    sequence?: string | number | import("long").Long;
                }): _2.BaseAccount;
                fromAmino(object: _2.BaseAccountAmino): _2.BaseAccount;
                toAmino(message: _2.BaseAccount): _2.BaseAccountAmino;
                fromAminoMsg(object: _2.BaseAccountAminoMsg): _2.BaseAccount;
                toAminoMsg(message: _2.BaseAccount): _2.BaseAccountAminoMsg;
                fromProtoMsg(message: _2.BaseAccountProtoMsg): _2.BaseAccount;
                toProto(message: _2.BaseAccount): Uint8Array;
                toProtoMsg(message: _2.BaseAccount): _2.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                encode(message: _2.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: string | number | import("long").Long;
                        sequence?: string | number | import("long").Long;
                    };
                    name?: string;
                    permissions?: string[];
                }): _2.ModuleAccount;
                fromAmino(object: _2.ModuleAccountAmino): _2.ModuleAccount;
                toAmino(message: _2.ModuleAccount): _2.ModuleAccountAmino;
                fromAminoMsg(object: _2.ModuleAccountAminoMsg): _2.ModuleAccount;
                toAminoMsg(message: _2.ModuleAccount): _2.ModuleAccountAminoMsg;
                fromProtoMsg(message: _2.ModuleAccountProtoMsg): _2.ModuleAccount;
                toProto(message: _2.ModuleAccount): Uint8Array;
                toProtoMsg(message: _2.ModuleAccount): _2.ModuleAccountProtoMsg;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromPartial(object: {
                    maxMemoCharacters?: string | number | import("long").Long;
                    txSigLimit?: string | number | import("long").Long;
                    txSizeCostPerByte?: string | number | import("long").Long;
                    sigVerifyCostEd25519?: string | number | import("long").Long;
                    sigVerifyCostSecp256k1?: string | number | import("long").Long;
                }): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                toAminoMsg(message: _2.Params): _2.ParamsAminoMsg;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _106.MsgClientImpl;
            QueryClientImpl: typeof _97.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _9.MsgGrant) => _9.MsgGrantAmino;
                    fromAmino: (object: _9.MsgGrantAmino) => _9.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _9.MsgExec) => _9.MsgExecAmino;
                    fromAmino: (object: _9.MsgExecAmino) => _9.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _9.MsgRevoke) => _9.MsgRevokeAmino;
                    fromAmino: (object: _9.MsgRevokeAmino) => _9.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _9.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgGrant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _9.MsgGrant;
                fromAmino(object: _9.MsgGrantAmino): _9.MsgGrant;
                toAmino(message: _9.MsgGrant): _9.MsgGrantAmino;
                fromAminoMsg(object: _9.MsgGrantAminoMsg): _9.MsgGrant;
                toAminoMsg(message: _9.MsgGrant): _9.MsgGrantAminoMsg;
                fromProtoMsg(message: _9.MsgGrantProtoMsg): _9.MsgGrant;
                toProto(message: _9.MsgGrant): Uint8Array;
                toProtoMsg(message: _9.MsgGrant): _9.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _9.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExecResponse;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _9.MsgExecResponse;
                fromAmino(object: _9.MsgExecResponseAmino): _9.MsgExecResponse;
                toAmino(message: _9.MsgExecResponse): _9.MsgExecResponseAmino;
                fromAminoMsg(object: _9.MsgExecResponseAminoMsg): _9.MsgExecResponse;
                toAminoMsg(message: _9.MsgExecResponse): _9.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _9.MsgExecResponseProtoMsg): _9.MsgExecResponse;
                toProto(message: _9.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _9.MsgExecResponse): _9.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _9.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExec;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _9.MsgExec;
                fromAmino(object: _9.MsgExecAmino): _9.MsgExec;
                toAmino(message: _9.MsgExec): _9.MsgExecAmino;
                fromAminoMsg(object: _9.MsgExecAminoMsg): _9.MsgExec;
                toAminoMsg(message: _9.MsgExec): _9.MsgExecAminoMsg;
                fromProtoMsg(message: _9.MsgExecProtoMsg): _9.MsgExec;
                toProto(message: _9.MsgExec): Uint8Array;
                toProtoMsg(message: _9.MsgExec): _9.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _9.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgGrantResponse;
                fromPartial(_: {}): _9.MsgGrantResponse;
                fromAmino(_: _9.MsgGrantResponseAmino): _9.MsgGrantResponse;
                toAmino(_: _9.MsgGrantResponse): _9.MsgGrantResponseAmino;
                fromAminoMsg(object: _9.MsgGrantResponseAminoMsg): _9.MsgGrantResponse;
                toAminoMsg(message: _9.MsgGrantResponse): _9.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _9.MsgGrantResponseProtoMsg): _9.MsgGrantResponse;
                toProto(message: _9.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _9.MsgGrantResponse): _9.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _9.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgRevoke;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _9.MsgRevoke;
                fromAmino(object: _9.MsgRevokeAmino): _9.MsgRevoke;
                toAmino(message: _9.MsgRevoke): _9.MsgRevokeAmino;
                fromAminoMsg(object: _9.MsgRevokeAminoMsg): _9.MsgRevoke;
                toAminoMsg(message: _9.MsgRevoke): _9.MsgRevokeAminoMsg;
                fromProtoMsg(message: _9.MsgRevokeProtoMsg): _9.MsgRevoke;
                toProto(message: _9.MsgRevoke): Uint8Array;
                toProtoMsg(message: _9.MsgRevoke): _9.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _9.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgRevokeResponse;
                fromPartial(_: {}): _9.MsgRevokeResponse;
                fromAmino(_: _9.MsgRevokeResponseAmino): _9.MsgRevokeResponse;
                toAmino(_: _9.MsgRevokeResponse): _9.MsgRevokeResponseAmino;
                fromAminoMsg(object: _9.MsgRevokeResponseAminoMsg): _9.MsgRevokeResponse;
                toAminoMsg(message: _9.MsgRevokeResponse): _9.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _9.MsgRevokeResponseProtoMsg): _9.MsgRevokeResponse;
                toProto(message: _9.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _9.MsgRevokeResponse): _9.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                encode(message: _8.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _8.QueryGrantsRequest;
                fromAmino(object: _8.QueryGrantsRequestAmino): _8.QueryGrantsRequest;
                toAmino(message: _8.QueryGrantsRequest): _8.QueryGrantsRequestAmino;
                fromAminoMsg(object: _8.QueryGrantsRequestAminoMsg): _8.QueryGrantsRequest;
                toAminoMsg(message: _8.QueryGrantsRequest): _8.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryGrantsRequestProtoMsg): _8.QueryGrantsRequest;
                toProto(message: _8.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGrantsRequest): _8.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _8.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _8.QueryGrantsResponse;
                fromAmino(object: _8.QueryGrantsResponseAmino): _8.QueryGrantsResponse;
                toAmino(message: _8.QueryGrantsResponse): _8.QueryGrantsResponseAmino;
                fromAminoMsg(object: _8.QueryGrantsResponseAminoMsg): _8.QueryGrantsResponse;
                toAminoMsg(message: _8.QueryGrantsResponse): _8.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryGrantsResponseProtoMsg): _8.QueryGrantsResponse;
                toProto(message: _8.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGrantsResponse): _8.QueryGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GenesisState;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                toAminoMsg(message: _7.GenesisState): _7.GenesisStateAminoMsg;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _7.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GrantAuthorization;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _7.GrantAuthorization;
                fromAmino(object: _7.GrantAuthorizationAmino): _7.GrantAuthorization;
                toAmino(message: _7.GrantAuthorization): _7.GrantAuthorizationAmino;
                fromAminoMsg(object: _7.GrantAuthorizationAminoMsg): _7.GrantAuthorization;
                toAminoMsg(message: _7.GrantAuthorization): _7.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _7.GrantAuthorizationProtoMsg): _7.GrantAuthorization;
                toProto(message: _7.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _7.GrantAuthorization): _7.GrantAuthorizationProtoMsg;
            };
            EventGrant: {
                encode(message: _6.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventGrant;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _6.EventGrant;
                fromAmino(object: _6.EventGrantAmino): _6.EventGrant;
                toAmino(message: _6.EventGrant): _6.EventGrantAmino;
                fromAminoMsg(object: _6.EventGrantAminoMsg): _6.EventGrant;
                toAminoMsg(message: _6.EventGrant): _6.EventGrantAminoMsg;
                fromProtoMsg(message: _6.EventGrantProtoMsg): _6.EventGrant;
                toProto(message: _6.EventGrant): Uint8Array;
                toProtoMsg(message: _6.EventGrant): _6.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _6.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventRevoke;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _6.EventRevoke;
                fromAmino(object: _6.EventRevokeAmino): _6.EventRevoke;
                toAmino(message: _6.EventRevoke): _6.EventRevokeAmino;
                fromAminoMsg(object: _6.EventRevokeAminoMsg): _6.EventRevoke;
                toAminoMsg(message: _6.EventRevoke): _6.EventRevokeAminoMsg;
                fromProtoMsg(message: _6.EventRevokeProtoMsg): _6.EventRevoke;
                toProto(message: _6.EventRevoke): Uint8Array;
                toProtoMsg(message: _6.EventRevoke): _6.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _5.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenericAuthorization;
                fromPartial(object: {
                    msg?: string;
                }): _5.GenericAuthorization;
                fromAmino(object: _5.GenericAuthorizationAmino): _5.GenericAuthorization;
                toAmino(message: _5.GenericAuthorization): _5.GenericAuthorizationAmino;
                fromAminoMsg(object: _5.GenericAuthorizationAminoMsg): _5.GenericAuthorization;
                toAminoMsg(message: _5.GenericAuthorization): _5.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _5.GenericAuthorizationProtoMsg): _5.GenericAuthorization;
                toProto(message: _5.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _5.GenericAuthorization): _5.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _5.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Grant;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _5.Grant;
                fromAmino(object: _5.GrantAmino): _5.Grant;
                toAmino(message: _5.Grant): _5.GrantAmino;
                fromAminoMsg(object: _5.GrantAminoMsg): _5.Grant;
                toAminoMsg(message: _5.Grant): _5.GrantAminoMsg;
                fromProtoMsg(message: _5.GrantProtoMsg): _5.Grant;
                toProto(message: _5.Grant): Uint8Array;
                toProtoMsg(message: _5.Grant): _5.GrantProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _107.MsgClientImpl;
            QueryClientImpl: typeof _98.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _14.MsgSend) => _14.MsgSendAmino;
                    fromAmino: (object: _14.MsgSendAmino) => _14.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _14.MsgMultiSend) => _14.MsgMultiSendAmino;
                    fromAmino: (object: _14.MsgMultiSendAmino) => _14.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _14.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgSend;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _14.MsgSend;
                fromAmino(object: _14.MsgSendAmino): _14.MsgSend;
                toAmino(message: _14.MsgSend): _14.MsgSendAmino;
                fromAminoMsg(object: _14.MsgSendAminoMsg): _14.MsgSend;
                toAminoMsg(message: _14.MsgSend): _14.MsgSendAminoMsg;
                fromProtoMsg(message: _14.MsgSendProtoMsg): _14.MsgSend;
                toProto(message: _14.MsgSend): Uint8Array;
                toProtoMsg(message: _14.MsgSend): _14.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _14.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgSendResponse;
                fromPartial(_: {}): _14.MsgSendResponse;
                fromAmino(_: _14.MsgSendResponseAmino): _14.MsgSendResponse;
                toAmino(_: _14.MsgSendResponse): _14.MsgSendResponseAmino;
                fromAminoMsg(object: _14.MsgSendResponseAminoMsg): _14.MsgSendResponse;
                toAminoMsg(message: _14.MsgSendResponse): _14.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _14.MsgSendResponseProtoMsg): _14.MsgSendResponse;
                toProto(message: _14.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _14.MsgSendResponse): _14.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _14.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgMultiSend;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _14.MsgMultiSend;
                fromAmino(object: _14.MsgMultiSendAmino): _14.MsgMultiSend;
                toAmino(message: _14.MsgMultiSend): _14.MsgMultiSendAmino;
                fromAminoMsg(object: _14.MsgMultiSendAminoMsg): _14.MsgMultiSend;
                toAminoMsg(message: _14.MsgMultiSend): _14.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _14.MsgMultiSendProtoMsg): _14.MsgMultiSend;
                toProto(message: _14.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _14.MsgMultiSend): _14.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _14.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgMultiSendResponse;
                fromPartial(_: {}): _14.MsgMultiSendResponse;
                fromAmino(_: _14.MsgMultiSendResponseAmino): _14.MsgMultiSendResponse;
                toAmino(_: _14.MsgMultiSendResponse): _14.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _14.MsgMultiSendResponseAminoMsg): _14.MsgMultiSendResponse;
                toAminoMsg(message: _14.MsgMultiSendResponse): _14.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _14.MsgMultiSendResponseProtoMsg): _14.MsgMultiSendResponse;
                toProto(message: _14.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _14.MsgMultiSendResponse): _14.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _13.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _13.QueryBalanceRequest;
                fromAmino(object: _13.QueryBalanceRequestAmino): _13.QueryBalanceRequest;
                toAmino(message: _13.QueryBalanceRequest): _13.QueryBalanceRequestAmino;
                fromAminoMsg(object: _13.QueryBalanceRequestAminoMsg): _13.QueryBalanceRequest;
                toAminoMsg(message: _13.QueryBalanceRequest): _13.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _13.QueryBalanceRequestProtoMsg): _13.QueryBalanceRequest;
                toProto(message: _13.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _13.QueryBalanceRequest): _13.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _13.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _13.QueryBalanceResponse;
                fromAmino(object: _13.QueryBalanceResponseAmino): _13.QueryBalanceResponse;
                toAmino(message: _13.QueryBalanceResponse): _13.QueryBalanceResponseAmino;
                fromAminoMsg(object: _13.QueryBalanceResponseAminoMsg): _13.QueryBalanceResponse;
                toAminoMsg(message: _13.QueryBalanceResponse): _13.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _13.QueryBalanceResponseProtoMsg): _13.QueryBalanceResponse;
                toProto(message: _13.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _13.QueryBalanceResponse): _13.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _13.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _13.QueryAllBalancesRequest;
                fromAmino(object: _13.QueryAllBalancesRequestAmino): _13.QueryAllBalancesRequest;
                toAmino(message: _13.QueryAllBalancesRequest): _13.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _13.QueryAllBalancesRequestAminoMsg): _13.QueryAllBalancesRequest;
                toAminoMsg(message: _13.QueryAllBalancesRequest): _13.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _13.QueryAllBalancesRequestProtoMsg): _13.QueryAllBalancesRequest;
                toProto(message: _13.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _13.QueryAllBalancesRequest): _13.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _13.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _13.QueryAllBalancesResponse;
                fromAmino(object: _13.QueryAllBalancesResponseAmino): _13.QueryAllBalancesResponse;
                toAmino(message: _13.QueryAllBalancesResponse): _13.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _13.QueryAllBalancesResponseAminoMsg): _13.QueryAllBalancesResponse;
                toAminoMsg(message: _13.QueryAllBalancesResponse): _13.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _13.QueryAllBalancesResponseProtoMsg): _13.QueryAllBalancesResponse;
                toProto(message: _13.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _13.QueryAllBalancesResponse): _13.QueryAllBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _13.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _13.QueryTotalSupplyRequest;
                fromAmino(object: _13.QueryTotalSupplyRequestAmino): _13.QueryTotalSupplyRequest;
                toAmino(message: _13.QueryTotalSupplyRequest): _13.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _13.QueryTotalSupplyRequestAminoMsg): _13.QueryTotalSupplyRequest;
                toAminoMsg(message: _13.QueryTotalSupplyRequest): _13.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _13.QueryTotalSupplyRequestProtoMsg): _13.QueryTotalSupplyRequest;
                toProto(message: _13.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _13.QueryTotalSupplyRequest): _13.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _13.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryTotalSupplyResponse;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _13.QueryTotalSupplyResponse;
                fromAmino(object: _13.QueryTotalSupplyResponseAmino): _13.QueryTotalSupplyResponse;
                toAmino(message: _13.QueryTotalSupplyResponse): _13.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _13.QueryTotalSupplyResponseAminoMsg): _13.QueryTotalSupplyResponse;
                toAminoMsg(message: _13.QueryTotalSupplyResponse): _13.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _13.QueryTotalSupplyResponseProtoMsg): _13.QueryTotalSupplyResponse;
                toProto(message: _13.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _13.QueryTotalSupplyResponse): _13.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _13.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string;
                }): _13.QuerySupplyOfRequest;
                fromAmino(object: _13.QuerySupplyOfRequestAmino): _13.QuerySupplyOfRequest;
                toAmino(message: _13.QuerySupplyOfRequest): _13.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _13.QuerySupplyOfRequestAminoMsg): _13.QuerySupplyOfRequest;
                toAminoMsg(message: _13.QuerySupplyOfRequest): _13.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _13.QuerySupplyOfRequestProtoMsg): _13.QuerySupplyOfRequest;
                toProto(message: _13.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _13.QuerySupplyOfRequest): _13.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _13.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySupplyOfResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _13.QuerySupplyOfResponse;
                fromAmino(object: _13.QuerySupplyOfResponseAmino): _13.QuerySupplyOfResponse;
                toAmino(message: _13.QuerySupplyOfResponse): _13.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _13.QuerySupplyOfResponseAminoMsg): _13.QuerySupplyOfResponse;
                toAminoMsg(message: _13.QuerySupplyOfResponse): _13.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _13.QuerySupplyOfResponseProtoMsg): _13.QuerySupplyOfResponse;
                toProto(message: _13.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _13.QuerySupplyOfResponse): _13.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsRequest;
                fromPartial(_: {}): _13.QueryParamsRequest;
                fromAmino(_: _13.QueryParamsRequestAmino): _13.QueryParamsRequest;
                toAmino(_: _13.QueryParamsRequest): _13.QueryParamsRequestAmino;
                fromAminoMsg(object: _13.QueryParamsRequestAminoMsg): _13.QueryParamsRequest;
                toAminoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryParamsRequestProtoMsg): _13.QueryParamsRequest;
                toProto(message: _13.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _13.QueryParamsResponse;
                fromAmino(object: _13.QueryParamsResponseAmino): _13.QueryParamsResponse;
                toAmino(message: _13.QueryParamsResponse): _13.QueryParamsResponseAmino;
                fromAminoMsg(object: _13.QueryParamsResponseAminoMsg): _13.QueryParamsResponse;
                toAminoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryParamsResponseProtoMsg): _13.QueryParamsResponse;
                toProto(message: _13.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _13.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _13.QueryDenomsMetadataRequest;
                fromAmino(object: _13.QueryDenomsMetadataRequestAmino): _13.QueryDenomsMetadataRequest;
                toAmino(message: _13.QueryDenomsMetadataRequest): _13.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _13.QueryDenomsMetadataRequestAminoMsg): _13.QueryDenomsMetadataRequest;
                toAminoMsg(message: _13.QueryDenomsMetadataRequest): _13.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _13.QueryDenomsMetadataRequestProtoMsg): _13.QueryDenomsMetadataRequest;
                toProto(message: _13.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _13.QueryDenomsMetadataRequest): _13.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _13.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomsMetadataResponse;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _13.QueryDenomsMetadataResponse;
                fromAmino(object: _13.QueryDenomsMetadataResponseAmino): _13.QueryDenomsMetadataResponse;
                toAmino(message: _13.QueryDenomsMetadataResponse): _13.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _13.QueryDenomsMetadataResponseAminoMsg): _13.QueryDenomsMetadataResponse;
                toAminoMsg(message: _13.QueryDenomsMetadataResponse): _13.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _13.QueryDenomsMetadataResponseProtoMsg): _13.QueryDenomsMetadataResponse;
                toProto(message: _13.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _13.QueryDenomsMetadataResponse): _13.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _13.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _13.QueryDenomMetadataRequest;
                fromAmino(object: _13.QueryDenomMetadataRequestAmino): _13.QueryDenomMetadataRequest;
                toAmino(message: _13.QueryDenomMetadataRequest): _13.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _13.QueryDenomMetadataRequestAminoMsg): _13.QueryDenomMetadataRequest;
                toAminoMsg(message: _13.QueryDenomMetadataRequest): _13.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _13.QueryDenomMetadataRequestProtoMsg): _13.QueryDenomMetadataRequest;
                toProto(message: _13.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _13.QueryDenomMetadataRequest): _13.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _13.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                    };
                }): _13.QueryDenomMetadataResponse;
                fromAmino(object: _13.QueryDenomMetadataResponseAmino): _13.QueryDenomMetadataResponse;
                toAmino(message: _13.QueryDenomMetadataResponse): _13.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _13.QueryDenomMetadataResponseAminoMsg): _13.QueryDenomMetadataResponse;
                toAminoMsg(message: _13.QueryDenomMetadataResponse): _13.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _13.QueryDenomMetadataResponseProtoMsg): _13.QueryDenomMetadataResponse;
                toProto(message: _13.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _13.QueryDenomMetadataResponse): _13.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                    }[];
                }): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                toAminoMsg(message: _12.GenesisState): _12.GenesisStateAminoMsg;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _12.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Balance;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _12.Balance;
                fromAmino(object: _12.BalanceAmino): _12.Balance;
                toAmino(message: _12.Balance): _12.BalanceAmino;
                fromAminoMsg(object: _12.BalanceAminoMsg): _12.Balance;
                toAminoMsg(message: _12.Balance): _12.BalanceAminoMsg;
                fromProtoMsg(message: _12.BalanceProtoMsg): _12.Balance;
                toProto(message: _12.Balance): Uint8Array;
                toProtoMsg(message: _12.Balance): _12.BalanceProtoMsg;
            };
            Params: {
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Params;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _11.Params;
                fromAmino(object: _11.ParamsAmino): _11.Params;
                toAmino(message: _11.Params): _11.ParamsAmino;
                fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
                toAminoMsg(message: _11.Params): _11.ParamsAminoMsg;
                fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
                toProto(message: _11.Params): Uint8Array;
                toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _11.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SendEnabled;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _11.SendEnabled;
                fromAmino(object: _11.SendEnabledAmino): _11.SendEnabled;
                toAmino(message: _11.SendEnabled): _11.SendEnabledAmino;
                fromAminoMsg(object: _11.SendEnabledAminoMsg): _11.SendEnabled;
                toAminoMsg(message: _11.SendEnabled): _11.SendEnabledAminoMsg;
                fromProtoMsg(message: _11.SendEnabledProtoMsg): _11.SendEnabled;
                toProto(message: _11.SendEnabled): Uint8Array;
                toProtoMsg(message: _11.SendEnabled): _11.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _11.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Input;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _11.Input;
                fromAmino(object: _11.InputAmino): _11.Input;
                toAmino(message: _11.Input): _11.InputAmino;
                fromAminoMsg(object: _11.InputAminoMsg): _11.Input;
                toAminoMsg(message: _11.Input): _11.InputAminoMsg;
                fromProtoMsg(message: _11.InputProtoMsg): _11.Input;
                toProto(message: _11.Input): Uint8Array;
                toProtoMsg(message: _11.Input): _11.InputProtoMsg;
            };
            Output: {
                encode(message: _11.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Output;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _11.Output;
                fromAmino(object: _11.OutputAmino): _11.Output;
                toAmino(message: _11.Output): _11.OutputAmino;
                fromAminoMsg(object: _11.OutputAminoMsg): _11.Output;
                toAminoMsg(message: _11.Output): _11.OutputAminoMsg;
                fromProtoMsg(message: _11.OutputProtoMsg): _11.Output;
                toProto(message: _11.Output): Uint8Array;
                toProtoMsg(message: _11.Output): _11.OutputProtoMsg;
            };
            Supply: {
                encode(message: _11.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _11.Supply;
                fromAmino(object: _11.SupplyAmino): _11.Supply;
                toAmino(message: _11.Supply): _11.SupplyAmino;
                fromAminoMsg(object: _11.SupplyAminoMsg): _11.Supply;
                toAminoMsg(message: _11.Supply): _11.SupplyAminoMsg;
                fromProtoMsg(message: _11.SupplyProtoMsg): _11.Supply;
                toProto(message: _11.Supply): Uint8Array;
                toProtoMsg(message: _11.Supply): _11.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _11.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _11.DenomUnit;
                fromAmino(object: _11.DenomUnitAmino): _11.DenomUnit;
                toAmino(message: _11.DenomUnit): _11.DenomUnitAmino;
                fromAminoMsg(object: _11.DenomUnitAminoMsg): _11.DenomUnit;
                toAminoMsg(message: _11.DenomUnit): _11.DenomUnitAminoMsg;
                fromProtoMsg(message: _11.DenomUnitProtoMsg): _11.DenomUnit;
                toProto(message: _11.DenomUnit): Uint8Array;
                toProtoMsg(message: _11.DenomUnit): _11.DenomUnitProtoMsg;
            };
            Metadata: {
                encode(message: _11.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Metadata;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                }): _11.Metadata;
                fromAmino(object: _11.MetadataAmino): _11.Metadata;
                toAmino(message: _11.Metadata): _11.MetadataAmino;
                fromAminoMsg(object: _11.MetadataAminoMsg): _11.Metadata;
                toAminoMsg(message: _11.Metadata): _11.MetadataAminoMsg;
                fromProtoMsg(message: _11.MetadataProtoMsg): _11.Metadata;
                toProto(message: _11.Metadata): Uint8Array;
                toProtoMsg(message: _11.Metadata): _11.MetadataProtoMsg;
            };
            SendAuthorization: {
                encode(message: _10.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SendAuthorization;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _10.SendAuthorization;
                fromAmino(object: _10.SendAuthorizationAmino): _10.SendAuthorization;
                toAmino(message: _10.SendAuthorization): _10.SendAuthorizationAmino;
                fromAminoMsg(object: _10.SendAuthorizationAminoMsg): _10.SendAuthorization;
                toAminoMsg(message: _10.SendAuthorization): _10.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _10.SendAuthorizationProtoMsg): _10.SendAuthorization;
                toProto(message: _10.SendAuthorization): Uint8Array;
                toProtoMsg(message: _10.SendAuthorization): _10.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _15.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TxResponse;
                    fromPartial(object: {
                        height?: string | number | import("long").Long;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _15.TxResponse;
                    fromAmino(object: _15.TxResponseAmino): _15.TxResponse;
                    toAmino(message: _15.TxResponse): _15.TxResponseAmino;
                    fromAminoMsg(object: _15.TxResponseAminoMsg): _15.TxResponse;
                    toAminoMsg(message: _15.TxResponse): _15.TxResponseAminoMsg;
                    fromProtoMsg(message: _15.TxResponseProtoMsg): _15.TxResponse;
                    toProto(message: _15.TxResponse): Uint8Array;
                    toProtoMsg(message: _15.TxResponse): _15.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _15.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ABCIMessageLog;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _15.ABCIMessageLog;
                    fromAmino(object: _15.ABCIMessageLogAmino): _15.ABCIMessageLog;
                    toAmino(message: _15.ABCIMessageLog): _15.ABCIMessageLogAmino;
                    fromAminoMsg(object: _15.ABCIMessageLogAminoMsg): _15.ABCIMessageLog;
                    toAminoMsg(message: _15.ABCIMessageLog): _15.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _15.ABCIMessageLogProtoMsg): _15.ABCIMessageLog;
                    toProto(message: _15.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _15.ABCIMessageLog): _15.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _15.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.StringEvent;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _15.StringEvent;
                    fromAmino(object: _15.StringEventAmino): _15.StringEvent;
                    toAmino(message: _15.StringEvent): _15.StringEventAmino;
                    fromAminoMsg(object: _15.StringEventAminoMsg): _15.StringEvent;
                    toAminoMsg(message: _15.StringEvent): _15.StringEventAminoMsg;
                    fromProtoMsg(message: _15.StringEventProtoMsg): _15.StringEvent;
                    toProto(message: _15.StringEvent): Uint8Array;
                    toProtoMsg(message: _15.StringEvent): _15.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _15.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Attribute;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _15.Attribute;
                    fromAmino(object: _15.AttributeAmino): _15.Attribute;
                    toAmino(message: _15.Attribute): _15.AttributeAmino;
                    fromAminoMsg(object: _15.AttributeAminoMsg): _15.Attribute;
                    toAminoMsg(message: _15.Attribute): _15.AttributeAminoMsg;
                    fromProtoMsg(message: _15.AttributeProtoMsg): _15.Attribute;
                    toProto(message: _15.Attribute): Uint8Array;
                    toProtoMsg(message: _15.Attribute): _15.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _15.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GasInfo;
                    fromPartial(object: {
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                    }): _15.GasInfo;
                    fromAmino(object: _15.GasInfoAmino): _15.GasInfo;
                    toAmino(message: _15.GasInfo): _15.GasInfoAmino;
                    fromAminoMsg(object: _15.GasInfoAminoMsg): _15.GasInfo;
                    toAminoMsg(message: _15.GasInfo): _15.GasInfoAminoMsg;
                    fromProtoMsg(message: _15.GasInfoProtoMsg): _15.GasInfo;
                    toProto(message: _15.GasInfo): Uint8Array;
                    toProtoMsg(message: _15.GasInfo): _15.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _15.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Result;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _15.Result;
                    fromAmino(object: _15.ResultAmino): _15.Result;
                    toAmino(message: _15.Result): _15.ResultAmino;
                    fromAminoMsg(object: _15.ResultAminoMsg): _15.Result;
                    toAminoMsg(message: _15.Result): _15.ResultAminoMsg;
                    fromProtoMsg(message: _15.ResultProtoMsg): _15.Result;
                    toProto(message: _15.Result): Uint8Array;
                    toProtoMsg(message: _15.Result): _15.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _15.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SimulationResponse;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: string | number | import("long").Long;
                            gasUsed?: string | number | import("long").Long;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        };
                    }): _15.SimulationResponse;
                    fromAmino(object: _15.SimulationResponseAmino): _15.SimulationResponse;
                    toAmino(message: _15.SimulationResponse): _15.SimulationResponseAmino;
                    fromAminoMsg(object: _15.SimulationResponseAminoMsg): _15.SimulationResponse;
                    toAminoMsg(message: _15.SimulationResponse): _15.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _15.SimulationResponseProtoMsg): _15.SimulationResponse;
                    toProto(message: _15.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _15.SimulationResponse): _15.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _15.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgData;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _15.MsgData;
                    fromAmino(object: _15.MsgDataAmino): _15.MsgData;
                    toAmino(message: _15.MsgData): _15.MsgDataAmino;
                    fromAminoMsg(object: _15.MsgDataAminoMsg): _15.MsgData;
                    toAminoMsg(message: _15.MsgData): _15.MsgDataAminoMsg;
                    fromProtoMsg(message: _15.MsgDataProtoMsg): _15.MsgData;
                    toProto(message: _15.MsgData): Uint8Array;
                    toProtoMsg(message: _15.MsgData): _15.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _15.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                    }): _15.TxMsgData;
                    fromAmino(object: _15.TxMsgDataAmino): _15.TxMsgData;
                    toAmino(message: _15.TxMsgData): _15.TxMsgDataAmino;
                    fromAminoMsg(object: _15.TxMsgDataAminoMsg): _15.TxMsgData;
                    toAminoMsg(message: _15.TxMsgData): _15.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _15.TxMsgDataProtoMsg): _15.TxMsgData;
                    toProto(message: _15.TxMsgData): Uint8Array;
                    toProtoMsg(message: _15.TxMsgData): _15.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _15.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SearchTxsResult;
                    fromPartial(object: {
                        totalCount?: string | number | import("long").Long;
                        count?: string | number | import("long").Long;
                        pageNumber?: string | number | import("long").Long;
                        pageTotal?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        txs?: {
                            height?: string | number | import("long").Long;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: string | number | import("long").Long;
                            gasUsed?: string | number | import("long").Long;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _15.SearchTxsResult;
                    fromAmino(object: _15.SearchTxsResultAmino): _15.SearchTxsResult;
                    toAmino(message: _15.SearchTxsResult): _15.SearchTxsResultAmino;
                    fromAminoMsg(object: _15.SearchTxsResultAminoMsg): _15.SearchTxsResult;
                    toAminoMsg(message: _15.SearchTxsResult): _15.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _15.SearchTxsResultProtoMsg): _15.SearchTxsResult;
                    toProto(message: _15.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _15.SearchTxsResult): _15.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _16.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _16.PageRequest;
                    fromAmino(object: _16.PageRequestAmino): _16.PageRequest;
                    toAmino(message: _16.PageRequest): _16.PageRequestAmino;
                    fromAminoMsg(object: _16.PageRequestAminoMsg): _16.PageRequest;
                    toAminoMsg(message: _16.PageRequest): _16.PageRequestAminoMsg;
                    fromProtoMsg(message: _16.PageRequestProtoMsg): _16.PageRequest;
                    toProto(message: _16.PageRequest): Uint8Array;
                    toProtoMsg(message: _16.PageRequest): _16.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _16.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    }): _16.PageResponse;
                    fromAmino(object: _16.PageResponseAmino): _16.PageResponse;
                    toAmino(message: _16.PageResponse): _16.PageResponseAmino;
                    fromAminoMsg(object: _16.PageResponseAminoMsg): _16.PageResponse;
                    toAminoMsg(message: _16.PageResponse): _16.PageResponseAminoMsg;
                    fromProtoMsg(message: _16.PageResponseProtoMsg): _16.PageResponse;
                    toProto(message: _16.PageResponse): Uint8Array;
                    toProtoMsg(message: _16.PageResponse): _16.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _17.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _17.AppDescriptor;
                    fromAmino(object: _17.AppDescriptorAmino): _17.AppDescriptor;
                    toAmino(message: _17.AppDescriptor): _17.AppDescriptorAmino;
                    fromAminoMsg(object: _17.AppDescriptorAminoMsg): _17.AppDescriptor;
                    toAminoMsg(message: _17.AppDescriptor): _17.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _17.AppDescriptorProtoMsg): _17.AppDescriptor;
                    toProto(message: _17.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _17.AppDescriptor): _17.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _17.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _17.TxDescriptor;
                    fromAmino(object: _17.TxDescriptorAmino): _17.TxDescriptor;
                    toAmino(message: _17.TxDescriptor): _17.TxDescriptorAmino;
                    fromAminoMsg(object: _17.TxDescriptorAminoMsg): _17.TxDescriptor;
                    toAminoMsg(message: _17.TxDescriptor): _17.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _17.TxDescriptorProtoMsg): _17.TxDescriptor;
                    toProto(message: _17.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _17.TxDescriptor): _17.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _17.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AuthnDescriptor;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _17.AuthnDescriptor;
                    fromAmino(object: _17.AuthnDescriptorAmino): _17.AuthnDescriptor;
                    toAmino(message: _17.AuthnDescriptor): _17.AuthnDescriptorAmino;
                    fromAminoMsg(object: _17.AuthnDescriptorAminoMsg): _17.AuthnDescriptor;
                    toAminoMsg(message: _17.AuthnDescriptor): _17.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _17.AuthnDescriptorProtoMsg): _17.AuthnDescriptor;
                    toProto(message: _17.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _17.AuthnDescriptor): _17.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _17.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _17.SigningModeDescriptor;
                    fromAmino(object: _17.SigningModeDescriptorAmino): _17.SigningModeDescriptor;
                    toAmino(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _17.SigningModeDescriptorAminoMsg): _17.SigningModeDescriptor;
                    toAminoMsg(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _17.SigningModeDescriptorProtoMsg): _17.SigningModeDescriptor;
                    toProto(message: _17.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _17.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ChainDescriptor;
                    fromPartial(object: {
                        id?: string;
                    }): _17.ChainDescriptor;
                    fromAmino(object: _17.ChainDescriptorAmino): _17.ChainDescriptor;
                    toAmino(message: _17.ChainDescriptor): _17.ChainDescriptorAmino;
                    fromAminoMsg(object: _17.ChainDescriptorAminoMsg): _17.ChainDescriptor;
                    toAminoMsg(message: _17.ChainDescriptor): _17.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _17.ChainDescriptorProtoMsg): _17.ChainDescriptor;
                    toProto(message: _17.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _17.ChainDescriptor): _17.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _17.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _17.CodecDescriptor;
                    fromAmino(object: _17.CodecDescriptorAmino): _17.CodecDescriptor;
                    toAmino(message: _17.CodecDescriptor): _17.CodecDescriptorAmino;
                    fromAminoMsg(object: _17.CodecDescriptorAminoMsg): _17.CodecDescriptor;
                    toAminoMsg(message: _17.CodecDescriptor): _17.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _17.CodecDescriptorProtoMsg): _17.CodecDescriptor;
                    toProto(message: _17.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _17.CodecDescriptor): _17.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _17.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _17.InterfaceDescriptor;
                    fromAmino(object: _17.InterfaceDescriptorAmino): _17.InterfaceDescriptor;
                    toAmino(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceDescriptorAminoMsg): _17.InterfaceDescriptor;
                    toAminoMsg(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceDescriptorProtoMsg): _17.InterfaceDescriptor;
                    toProto(message: _17.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _17.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _17.InterfaceImplementerDescriptor;
                    fromAmino(object: _17.InterfaceImplementerDescriptorAmino): _17.InterfaceImplementerDescriptor;
                    toAmino(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceImplementerDescriptorAminoMsg): _17.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceImplementerDescriptorProtoMsg): _17.InterfaceImplementerDescriptor;
                    toProto(message: _17.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _17.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _17.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _17.InterfaceAcceptingMessageDescriptorAmino): _17.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceAcceptingMessageDescriptorAminoMsg): _17.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceAcceptingMessageDescriptorProtoMsg): _17.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _17.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _17.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _17.ConfigurationDescriptor;
                    fromAmino(object: _17.ConfigurationDescriptorAmino): _17.ConfigurationDescriptor;
                    toAmino(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _17.ConfigurationDescriptorAminoMsg): _17.ConfigurationDescriptor;
                    toAminoMsg(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _17.ConfigurationDescriptorProtoMsg): _17.ConfigurationDescriptor;
                    toProto(message: _17.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _17.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgDescriptor;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _17.MsgDescriptor;
                    fromAmino(object: _17.MsgDescriptorAmino): _17.MsgDescriptor;
                    toAmino(message: _17.MsgDescriptor): _17.MsgDescriptorAmino;
                    fromAminoMsg(object: _17.MsgDescriptorAminoMsg): _17.MsgDescriptor;
                    toAminoMsg(message: _17.MsgDescriptor): _17.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _17.MsgDescriptorProtoMsg): _17.MsgDescriptor;
                    toProto(message: _17.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _17.MsgDescriptor): _17.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _17.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _17.GetAuthnDescriptorRequest;
                    fromAmino(_: _17.GetAuthnDescriptorRequestAmino): _17.GetAuthnDescriptorRequest;
                    toAmino(_: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetAuthnDescriptorRequestAminoMsg): _17.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetAuthnDescriptorRequestProtoMsg): _17.GetAuthnDescriptorRequest;
                    toProto(message: _17.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _17.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorResponse;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _17.GetAuthnDescriptorResponse;
                    fromAmino(object: _17.GetAuthnDescriptorResponseAmino): _17.GetAuthnDescriptorResponse;
                    toAmino(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetAuthnDescriptorResponseAminoMsg): _17.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetAuthnDescriptorResponseProtoMsg): _17.GetAuthnDescriptorResponse;
                    toProto(message: _17.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _17.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorRequest;
                    fromPartial(_: {}): _17.GetChainDescriptorRequest;
                    fromAmino(_: _17.GetChainDescriptorRequestAmino): _17.GetChainDescriptorRequest;
                    toAmino(_: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetChainDescriptorRequestAminoMsg): _17.GetChainDescriptorRequest;
                    toAminoMsg(message: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetChainDescriptorRequestProtoMsg): _17.GetChainDescriptorRequest;
                    toProto(message: _17.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _17.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorResponse;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _17.GetChainDescriptorResponse;
                    fromAmino(object: _17.GetChainDescriptorResponseAmino): _17.GetChainDescriptorResponse;
                    toAmino(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetChainDescriptorResponseAminoMsg): _17.GetChainDescriptorResponse;
                    toAminoMsg(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetChainDescriptorResponseProtoMsg): _17.GetChainDescriptorResponse;
                    toProto(message: _17.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _17.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _17.GetCodecDescriptorRequest;
                    fromAmino(_: _17.GetCodecDescriptorRequestAmino): _17.GetCodecDescriptorRequest;
                    toAmino(_: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetCodecDescriptorRequestAminoMsg): _17.GetCodecDescriptorRequest;
                    toAminoMsg(message: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetCodecDescriptorRequestProtoMsg): _17.GetCodecDescriptorRequest;
                    toProto(message: _17.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _17.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorResponse;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _17.GetCodecDescriptorResponse;
                    fromAmino(object: _17.GetCodecDescriptorResponseAmino): _17.GetCodecDescriptorResponse;
                    toAmino(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetCodecDescriptorResponseAminoMsg): _17.GetCodecDescriptorResponse;
                    toAminoMsg(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetCodecDescriptorResponseProtoMsg): _17.GetCodecDescriptorResponse;
                    toProto(message: _17.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _17.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _17.GetConfigurationDescriptorRequest;
                    fromAmino(_: _17.GetConfigurationDescriptorRequestAmino): _17.GetConfigurationDescriptorRequest;
                    toAmino(_: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetConfigurationDescriptorRequestAminoMsg): _17.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetConfigurationDescriptorRequestProtoMsg): _17.GetConfigurationDescriptorRequest;
                    toProto(message: _17.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _17.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorResponse;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _17.GetConfigurationDescriptorResponse;
                    fromAmino(object: _17.GetConfigurationDescriptorResponseAmino): _17.GetConfigurationDescriptorResponse;
                    toAmino(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetConfigurationDescriptorResponseAminoMsg): _17.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetConfigurationDescriptorResponseProtoMsg): _17.GetConfigurationDescriptorResponse;
                    toProto(message: _17.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _17.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _17.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _17.GetQueryServicesDescriptorRequestAmino): _17.GetQueryServicesDescriptorRequest;
                    toAmino(_: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetQueryServicesDescriptorRequestAminoMsg): _17.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetQueryServicesDescriptorRequestProtoMsg): _17.GetQueryServicesDescriptorRequest;
                    toProto(message: _17.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _17.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorResponse;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _17.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _17.GetQueryServicesDescriptorResponseAmino): _17.GetQueryServicesDescriptorResponse;
                    toAmino(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetQueryServicesDescriptorResponseAminoMsg): _17.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetQueryServicesDescriptorResponseProtoMsg): _17.GetQueryServicesDescriptorResponse;
                    toProto(message: _17.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _17.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorRequest;
                    fromPartial(_: {}): _17.GetTxDescriptorRequest;
                    fromAmino(_: _17.GetTxDescriptorRequestAmino): _17.GetTxDescriptorRequest;
                    toAmino(_: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetTxDescriptorRequestAminoMsg): _17.GetTxDescriptorRequest;
                    toAminoMsg(message: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetTxDescriptorRequestProtoMsg): _17.GetTxDescriptorRequest;
                    toProto(message: _17.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _17.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorResponse;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _17.GetTxDescriptorResponse;
                    fromAmino(object: _17.GetTxDescriptorResponseAmino): _17.GetTxDescriptorResponse;
                    toAmino(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetTxDescriptorResponseAminoMsg): _17.GetTxDescriptorResponse;
                    toAminoMsg(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetTxDescriptorResponseProtoMsg): _17.GetTxDescriptorResponse;
                    toProto(message: _17.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _17.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServicesDescriptor;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _17.QueryServicesDescriptor;
                    fromAmino(object: _17.QueryServicesDescriptorAmino): _17.QueryServicesDescriptor;
                    toAmino(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _17.QueryServicesDescriptorAminoMsg): _17.QueryServicesDescriptor;
                    toAminoMsg(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryServicesDescriptorProtoMsg): _17.QueryServicesDescriptor;
                    toProto(message: _17.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _17.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _17.QueryServiceDescriptor;
                    fromAmino(object: _17.QueryServiceDescriptorAmino): _17.QueryServiceDescriptor;
                    toAmino(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _17.QueryServiceDescriptorAminoMsg): _17.QueryServiceDescriptor;
                    toAminoMsg(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryServiceDescriptorProtoMsg): _17.QueryServiceDescriptor;
                    toProto(message: _17.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _17.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _17.QueryMethodDescriptor;
                    fromAmino(object: _17.QueryMethodDescriptorAmino): _17.QueryMethodDescriptor;
                    toAmino(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _17.QueryMethodDescriptorAminoMsg): _17.QueryMethodDescriptor;
                    toAminoMsg(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryMethodDescriptorProtoMsg): _17.QueryMethodDescriptor;
                    toProto(message: _17.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _18.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _18.Coin;
                fromAmino(object: _18.CoinAmino): _18.Coin;
                toAmino(message: _18.Coin): _18.CoinAmino;
                fromAminoMsg(object: _18.CoinAminoMsg): _18.Coin;
                toAminoMsg(message: _18.Coin): _18.CoinAminoMsg;
                fromProtoMsg(message: _18.CoinProtoMsg): _18.Coin;
                toProto(message: _18.Coin): Uint8Array;
                toProtoMsg(message: _18.Coin): _18.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _18.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _18.DecCoin;
                fromAmino(object: _18.DecCoinAmino): _18.DecCoin;
                toAmino(message: _18.DecCoin): _18.DecCoinAmino;
                fromAminoMsg(object: _18.DecCoinAminoMsg): _18.DecCoin;
                toAminoMsg(message: _18.DecCoin): _18.DecCoinAminoMsg;
                fromProtoMsg(message: _18.DecCoinProtoMsg): _18.DecCoin;
                toProto(message: _18.DecCoin): Uint8Array;
                toProtoMsg(message: _18.DecCoin): _18.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _18.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _18.IntProto;
                fromAmino(object: _18.IntProtoAmino): _18.IntProto;
                toAmino(message: _18.IntProto): _18.IntProtoAmino;
                fromAminoMsg(object: _18.IntProtoAminoMsg): _18.IntProto;
                toAminoMsg(message: _18.IntProto): _18.IntProtoAminoMsg;
                fromProtoMsg(message: _18.IntProtoProtoMsg): _18.IntProto;
                toProto(message: _18.IntProto): Uint8Array;
                toProtoMsg(message: _18.IntProto): _18.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _18.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _18.DecProto;
                fromAmino(object: _18.DecProtoAmino): _18.DecProto;
                toAmino(message: _18.DecProto): _18.DecProtoAmino;
                fromAminoMsg(object: _18.DecProtoAminoMsg): _18.DecProto;
                toAminoMsg(message: _18.DecProto): _18.DecProtoAminoMsg;
                fromProtoMsg(message: _18.DecProtoProtoMsg): _18.DecProto;
                toProto(message: _18.DecProto): Uint8Array;
                toProtoMsg(message: _18.DecProto): _18.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _19.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _19.PubKey;
                fromAmino(object: _19.PubKeyAmino): _19.PubKey;
                toAmino(message: _19.PubKey): _19.PubKeyAmino;
                fromAminoMsg(object: _19.PubKeyAminoMsg): _19.PubKey;
                toAminoMsg(message: _19.PubKey): _19.PubKeyAminoMsg;
                fromProtoMsg(message: _19.PubKeyProtoMsg): _19.PubKey;
                toProto(message: _19.PubKey): Uint8Array;
                toProtoMsg(message: _19.PubKey): _19.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _19.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _19.PrivKey;
                fromAmino(object: _19.PrivKeyAmino): _19.PrivKey;
                toAmino(message: _19.PrivKey): _19.PrivKeyAmino;
                fromAminoMsg(object: _19.PrivKeyAminoMsg): _19.PrivKey;
                toAminoMsg(message: _19.PrivKey): _19.PrivKeyAminoMsg;
                fromProtoMsg(message: _19.PrivKeyProtoMsg): _19.PrivKey;
                toProto(message: _19.PrivKey): Uint8Array;
                toProtoMsg(message: _19.PrivKey): _19.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _20.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _20.LegacyAminoPubKey;
                fromAmino(object: _20.LegacyAminoPubKeyAmino): _20.LegacyAminoPubKey;
                toAmino(message: _20.LegacyAminoPubKey): _20.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _20.LegacyAminoPubKeyAminoMsg): _20.LegacyAminoPubKey;
                toAminoMsg(message: _20.LegacyAminoPubKey): _20.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _20.LegacyAminoPubKeyProtoMsg): _20.LegacyAminoPubKey;
                toProto(message: _20.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _20.LegacyAminoPubKey): _20.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _21.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _21.PubKey;
                fromAmino(object: _21.PubKeyAmino): _21.PubKey;
                toAmino(message: _21.PubKey): _21.PubKeyAmino;
                fromAminoMsg(object: _21.PubKeyAminoMsg): _21.PubKey;
                toAminoMsg(message: _21.PubKey): _21.PubKeyAminoMsg;
                fromProtoMsg(message: _21.PubKeyProtoMsg): _21.PubKey;
                toProto(message: _21.PubKey): Uint8Array;
                toProtoMsg(message: _21.PubKey): _21.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _21.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _21.PrivKey;
                fromAmino(object: _21.PrivKeyAmino): _21.PrivKey;
                toAmino(message: _21.PrivKey): _21.PrivKeyAmino;
                fromAminoMsg(object: _21.PrivKeyAminoMsg): _21.PrivKey;
                toAminoMsg(message: _21.PrivKey): _21.PrivKeyAminoMsg;
                fromProtoMsg(message: _21.PrivKeyProtoMsg): _21.PrivKey;
                toProto(message: _21.PrivKey): Uint8Array;
                toProtoMsg(message: _21.PrivKey): _21.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _22.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _22.PubKey;
                fromAmino(object: _22.PubKeyAmino): _22.PubKey;
                toAmino(message: _22.PubKey): _22.PubKeyAmino;
                fromAminoMsg(object: _22.PubKeyAminoMsg): _22.PubKey;
                toAminoMsg(message: _22.PubKey): _22.PubKeyAminoMsg;
                fromProtoMsg(message: _22.PubKeyProtoMsg): _22.PubKey;
                toProto(message: _22.PubKey): Uint8Array;
                toProtoMsg(message: _22.PubKey): _22.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _22.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _22.PrivKey;
                fromAmino(object: _22.PrivKeyAmino): _22.PrivKey;
                toAmino(message: _22.PrivKey): _22.PrivKeyAmino;
                fromAminoMsg(object: _22.PrivKeyAminoMsg): _22.PrivKey;
                toAminoMsg(message: _22.PrivKey): _22.PrivKeyAminoMsg;
                fromProtoMsg(message: _22.PrivKeyProtoMsg): _22.PrivKey;
                toProto(message: _22.PrivKey): Uint8Array;
                toProtoMsg(message: _22.PrivKey): _22.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _108.MsgClientImpl;
            QueryClientImpl: typeof _99.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                validatorOutstandingRewards(request: _25.QueryValidatorOutstandingRewardsRequest): Promise<_25.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _25.QueryValidatorCommissionRequest): Promise<_25.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _25.QueryValidatorSlashesRequest): Promise<_25.QueryValidatorSlashesResponse>;
                delegationRewards(request: _25.QueryDelegationRewardsRequest): Promise<_25.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _25.QueryDelegationTotalRewardsRequest): Promise<_25.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _25.QueryDelegatorValidatorsRequest): Promise<_25.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _25.QueryDelegatorWithdrawAddressRequest): Promise<_25.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _25.QueryCommunityPoolRequest): Promise<_25.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _26.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _26.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _26.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _26.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _26.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _26.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _26.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _26.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _26.MsgSetWithdrawAddress) => _26.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _26.MsgSetWithdrawAddressAmino) => _26.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _26.MsgWithdrawDelegatorReward) => _26.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _26.MsgWithdrawDelegatorRewardAmino) => _26.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _26.MsgWithdrawValidatorCommission) => _26.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _26.MsgWithdrawValidatorCommissionAmino) => _26.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _26.MsgFundCommunityPool) => _26.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _26.MsgFundCommunityPoolAmino) => _26.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _26.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgSetWithdrawAddress;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _26.MsgSetWithdrawAddress;
                fromAmino(object: _26.MsgSetWithdrawAddressAmino): _26.MsgSetWithdrawAddress;
                toAmino(message: _26.MsgSetWithdrawAddress): _26.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _26.MsgSetWithdrawAddressAminoMsg): _26.MsgSetWithdrawAddress;
                toAminoMsg(message: _26.MsgSetWithdrawAddress): _26.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _26.MsgSetWithdrawAddressProtoMsg): _26.MsgSetWithdrawAddress;
                toProto(message: _26.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _26.MsgSetWithdrawAddress): _26.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _26.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgSetWithdrawAddressResponse;
                fromPartial(_: {}): _26.MsgSetWithdrawAddressResponse;
                fromAmino(_: _26.MsgSetWithdrawAddressResponseAmino): _26.MsgSetWithdrawAddressResponse;
                toAmino(_: _26.MsgSetWithdrawAddressResponse): _26.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _26.MsgSetWithdrawAddressResponseAminoMsg): _26.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _26.MsgSetWithdrawAddressResponse): _26.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _26.MsgSetWithdrawAddressResponseProtoMsg): _26.MsgSetWithdrawAddressResponse;
                toProto(message: _26.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _26.MsgSetWithdrawAddressResponse): _26.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _26.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _26.MsgWithdrawDelegatorReward;
                fromAmino(object: _26.MsgWithdrawDelegatorRewardAmino): _26.MsgWithdrawDelegatorReward;
                toAmino(message: _26.MsgWithdrawDelegatorReward): _26.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _26.MsgWithdrawDelegatorRewardAminoMsg): _26.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _26.MsgWithdrawDelegatorReward): _26.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawDelegatorRewardProtoMsg): _26.MsgWithdrawDelegatorReward;
                toProto(message: _26.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawDelegatorReward): _26.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _26.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: {}): _26.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _26.MsgWithdrawDelegatorRewardResponseAmino): _26.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _26.MsgWithdrawDelegatorRewardResponse): _26.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _26.MsgWithdrawDelegatorRewardResponseAminoMsg): _26.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _26.MsgWithdrawDelegatorRewardResponse): _26.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawDelegatorRewardResponseProtoMsg): _26.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _26.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawDelegatorRewardResponse): _26.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _26.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _26.MsgWithdrawValidatorCommission;
                fromAmino(object: _26.MsgWithdrawValidatorCommissionAmino): _26.MsgWithdrawValidatorCommission;
                toAmino(message: _26.MsgWithdrawValidatorCommission): _26.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _26.MsgWithdrawValidatorCommissionAminoMsg): _26.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _26.MsgWithdrawValidatorCommission): _26.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawValidatorCommissionProtoMsg): _26.MsgWithdrawValidatorCommission;
                toProto(message: _26.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawValidatorCommission): _26.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _26.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: {}): _26.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _26.MsgWithdrawValidatorCommissionResponseAmino): _26.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _26.MsgWithdrawValidatorCommissionResponse): _26.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _26.MsgWithdrawValidatorCommissionResponseAminoMsg): _26.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _26.MsgWithdrawValidatorCommissionResponse): _26.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawValidatorCommissionResponseProtoMsg): _26.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _26.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawValidatorCommissionResponse): _26.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _26.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _26.MsgFundCommunityPool;
                fromAmino(object: _26.MsgFundCommunityPoolAmino): _26.MsgFundCommunityPool;
                toAmino(message: _26.MsgFundCommunityPool): _26.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _26.MsgFundCommunityPoolAminoMsg): _26.MsgFundCommunityPool;
                toAminoMsg(message: _26.MsgFundCommunityPool): _26.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _26.MsgFundCommunityPoolProtoMsg): _26.MsgFundCommunityPool;
                toProto(message: _26.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _26.MsgFundCommunityPool): _26.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _26.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgFundCommunityPoolResponse;
                fromPartial(_: {}): _26.MsgFundCommunityPoolResponse;
                fromAmino(_: _26.MsgFundCommunityPoolResponseAmino): _26.MsgFundCommunityPoolResponse;
                toAmino(_: _26.MsgFundCommunityPoolResponse): _26.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _26.MsgFundCommunityPoolResponseAminoMsg): _26.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _26.MsgFundCommunityPoolResponse): _26.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _26.MsgFundCommunityPoolResponseProtoMsg): _26.MsgFundCommunityPoolResponse;
                toProto(message: _26.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _26.MsgFundCommunityPoolResponse): _26.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _25.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryParamsRequest;
                fromPartial(_: {}): _25.QueryParamsRequest;
                fromAmino(_: _25.QueryParamsRequestAmino): _25.QueryParamsRequest;
                toAmino(_: _25.QueryParamsRequest): _25.QueryParamsRequestAmino;
                fromAminoMsg(object: _25.QueryParamsRequestAminoMsg): _25.QueryParamsRequest;
                toAminoMsg(message: _25.QueryParamsRequest): _25.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryParamsRequestProtoMsg): _25.QueryParamsRequest;
                toProto(message: _25.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryParamsRequest): _25.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _25.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _25.QueryParamsResponse;
                fromAmino(object: _25.QueryParamsResponseAmino): _25.QueryParamsResponse;
                toAmino(message: _25.QueryParamsResponse): _25.QueryParamsResponseAmino;
                fromAminoMsg(object: _25.QueryParamsResponseAminoMsg): _25.QueryParamsResponse;
                toAminoMsg(message: _25.QueryParamsResponse): _25.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryParamsResponseProtoMsg): _25.QueryParamsResponse;
                toProto(message: _25.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryParamsResponse): _25.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _25.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _25.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _25.QueryValidatorOutstandingRewardsRequestAmino): _25.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _25.QueryValidatorOutstandingRewardsRequest): _25.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _25.QueryValidatorOutstandingRewardsRequestAminoMsg): _25.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _25.QueryValidatorOutstandingRewardsRequest): _25.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorOutstandingRewardsRequestProtoMsg): _25.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _25.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorOutstandingRewardsRequest): _25.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _25.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _25.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _25.QueryValidatorOutstandingRewardsResponseAmino): _25.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _25.QueryValidatorOutstandingRewardsResponse): _25.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _25.QueryValidatorOutstandingRewardsResponseAminoMsg): _25.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _25.QueryValidatorOutstandingRewardsResponse): _25.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorOutstandingRewardsResponseProtoMsg): _25.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _25.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorOutstandingRewardsResponse): _25.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _25.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _25.QueryValidatorCommissionRequest;
                fromAmino(object: _25.QueryValidatorCommissionRequestAmino): _25.QueryValidatorCommissionRequest;
                toAmino(message: _25.QueryValidatorCommissionRequest): _25.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _25.QueryValidatorCommissionRequestAminoMsg): _25.QueryValidatorCommissionRequest;
                toAminoMsg(message: _25.QueryValidatorCommissionRequest): _25.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorCommissionRequestProtoMsg): _25.QueryValidatorCommissionRequest;
                toProto(message: _25.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorCommissionRequest): _25.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _25.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorCommissionResponse;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _25.QueryValidatorCommissionResponse;
                fromAmino(object: _25.QueryValidatorCommissionResponseAmino): _25.QueryValidatorCommissionResponse;
                toAmino(message: _25.QueryValidatorCommissionResponse): _25.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _25.QueryValidatorCommissionResponseAminoMsg): _25.QueryValidatorCommissionResponse;
                toAminoMsg(message: _25.QueryValidatorCommissionResponse): _25.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorCommissionResponseProtoMsg): _25.QueryValidatorCommissionResponse;
                toProto(message: _25.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorCommissionResponse): _25.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _25.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: string | number | import("long").Long;
                    endingHeight?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _25.QueryValidatorSlashesRequest;
                fromAmino(object: _25.QueryValidatorSlashesRequestAmino): _25.QueryValidatorSlashesRequest;
                toAmino(message: _25.QueryValidatorSlashesRequest): _25.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _25.QueryValidatorSlashesRequestAminoMsg): _25.QueryValidatorSlashesRequest;
                toAminoMsg(message: _25.QueryValidatorSlashesRequest): _25.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorSlashesRequestProtoMsg): _25.QueryValidatorSlashesRequest;
                toProto(message: _25.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorSlashesRequest): _25.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _25.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryValidatorSlashesResponse;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: string | number | import("long").Long;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _25.QueryValidatorSlashesResponse;
                fromAmino(object: _25.QueryValidatorSlashesResponseAmino): _25.QueryValidatorSlashesResponse;
                toAmino(message: _25.QueryValidatorSlashesResponse): _25.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _25.QueryValidatorSlashesResponseAminoMsg): _25.QueryValidatorSlashesResponse;
                toAminoMsg(message: _25.QueryValidatorSlashesResponse): _25.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _25.QueryValidatorSlashesResponseProtoMsg): _25.QueryValidatorSlashesResponse;
                toProto(message: _25.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _25.QueryValidatorSlashesResponse): _25.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _25.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _25.QueryDelegationRewardsRequest;
                fromAmino(object: _25.QueryDelegationRewardsRequestAmino): _25.QueryDelegationRewardsRequest;
                toAmino(message: _25.QueryDelegationRewardsRequest): _25.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _25.QueryDelegationRewardsRequestAminoMsg): _25.QueryDelegationRewardsRequest;
                toAminoMsg(message: _25.QueryDelegationRewardsRequest): _25.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDelegationRewardsRequestProtoMsg): _25.QueryDelegationRewardsRequest;
                toProto(message: _25.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegationRewardsRequest): _25.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _25.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegationRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.QueryDelegationRewardsResponse;
                fromAmino(object: _25.QueryDelegationRewardsResponseAmino): _25.QueryDelegationRewardsResponse;
                toAmino(message: _25.QueryDelegationRewardsResponse): _25.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _25.QueryDelegationRewardsResponseAminoMsg): _25.QueryDelegationRewardsResponse;
                toAminoMsg(message: _25.QueryDelegationRewardsResponse): _25.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDelegationRewardsResponseProtoMsg): _25.QueryDelegationRewardsResponse;
                toProto(message: _25.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegationRewardsResponse): _25.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _25.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _25.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _25.QueryDelegationTotalRewardsRequestAmino): _25.QueryDelegationTotalRewardsRequest;
                toAmino(message: _25.QueryDelegationTotalRewardsRequest): _25.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _25.QueryDelegationTotalRewardsRequestAminoMsg): _25.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _25.QueryDelegationTotalRewardsRequest): _25.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDelegationTotalRewardsRequestProtoMsg): _25.QueryDelegationTotalRewardsRequest;
                toProto(message: _25.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegationTotalRewardsRequest): _25.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _25.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegationTotalRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _25.QueryDelegationTotalRewardsResponseAmino): _25.QueryDelegationTotalRewardsResponse;
                toAmino(message: _25.QueryDelegationTotalRewardsResponse): _25.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _25.QueryDelegationTotalRewardsResponseAminoMsg): _25.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _25.QueryDelegationTotalRewardsResponse): _25.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDelegationTotalRewardsResponseProtoMsg): _25.QueryDelegationTotalRewardsResponse;
                toProto(message: _25.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegationTotalRewardsResponse): _25.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _25.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _25.QueryDelegatorValidatorsRequest;
                fromAmino(object: _25.QueryDelegatorValidatorsRequestAmino): _25.QueryDelegatorValidatorsRequest;
                toAmino(message: _25.QueryDelegatorValidatorsRequest): _25.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _25.QueryDelegatorValidatorsRequestAminoMsg): _25.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _25.QueryDelegatorValidatorsRequest): _25.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDelegatorValidatorsRequestProtoMsg): _25.QueryDelegatorValidatorsRequest;
                toProto(message: _25.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorValidatorsRequest): _25.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _25.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: string[];
                }): _25.QueryDelegatorValidatorsResponse;
                fromAmino(object: _25.QueryDelegatorValidatorsResponseAmino): _25.QueryDelegatorValidatorsResponse;
                toAmino(message: _25.QueryDelegatorValidatorsResponse): _25.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _25.QueryDelegatorValidatorsResponseAminoMsg): _25.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _25.QueryDelegatorValidatorsResponse): _25.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDelegatorValidatorsResponseProtoMsg): _25.QueryDelegatorValidatorsResponse;
                toProto(message: _25.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorValidatorsResponse): _25.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _25.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _25.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _25.QueryDelegatorWithdrawAddressRequestAmino): _25.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _25.QueryDelegatorWithdrawAddressRequest): _25.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _25.QueryDelegatorWithdrawAddressRequestAminoMsg): _25.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _25.QueryDelegatorWithdrawAddressRequest): _25.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDelegatorWithdrawAddressRequestProtoMsg): _25.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _25.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorWithdrawAddressRequest): _25.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _25.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _25.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _25.QueryDelegatorWithdrawAddressResponseAmino): _25.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _25.QueryDelegatorWithdrawAddressResponse): _25.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _25.QueryDelegatorWithdrawAddressResponseAminoMsg): _25.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _25.QueryDelegatorWithdrawAddressResponse): _25.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDelegatorWithdrawAddressResponseProtoMsg): _25.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _25.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorWithdrawAddressResponse): _25.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _25.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryCommunityPoolRequest;
                fromPartial(_: {}): _25.QueryCommunityPoolRequest;
                fromAmino(_: _25.QueryCommunityPoolRequestAmino): _25.QueryCommunityPoolRequest;
                toAmino(_: _25.QueryCommunityPoolRequest): _25.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _25.QueryCommunityPoolRequestAminoMsg): _25.QueryCommunityPoolRequest;
                toAminoMsg(message: _25.QueryCommunityPoolRequest): _25.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _25.QueryCommunityPoolRequestProtoMsg): _25.QueryCommunityPoolRequest;
                toProto(message: _25.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _25.QueryCommunityPoolRequest): _25.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _25.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryCommunityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.QueryCommunityPoolResponse;
                fromAmino(object: _25.QueryCommunityPoolResponseAmino): _25.QueryCommunityPoolResponse;
                toAmino(message: _25.QueryCommunityPoolResponse): _25.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _25.QueryCommunityPoolResponseAminoMsg): _25.QueryCommunityPoolResponse;
                toAminoMsg(message: _25.QueryCommunityPoolResponse): _25.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _25.QueryCommunityPoolResponseProtoMsg): _25.QueryCommunityPoolResponse;
                toProto(message: _25.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _25.QueryCommunityPoolResponse): _25.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _24.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _24.DelegatorWithdrawInfo;
                fromAmino(object: _24.DelegatorWithdrawInfoAmino): _24.DelegatorWithdrawInfo;
                toAmino(message: _24.DelegatorWithdrawInfo): _24.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _24.DelegatorWithdrawInfoAminoMsg): _24.DelegatorWithdrawInfo;
                toAminoMsg(message: _24.DelegatorWithdrawInfo): _24.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _24.DelegatorWithdrawInfoProtoMsg): _24.DelegatorWithdrawInfo;
                toProto(message: _24.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _24.DelegatorWithdrawInfo): _24.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _24.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _24.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _24.ValidatorOutstandingRewardsRecordAmino): _24.ValidatorOutstandingRewardsRecord;
                toAmino(message: _24.ValidatorOutstandingRewardsRecord): _24.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _24.ValidatorOutstandingRewardsRecordAminoMsg): _24.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _24.ValidatorOutstandingRewardsRecord): _24.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorOutstandingRewardsRecordProtoMsg): _24.ValidatorOutstandingRewardsRecord;
                toProto(message: _24.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorOutstandingRewardsRecord): _24.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _24.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _24.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _24.ValidatorAccumulatedCommissionRecordAmino): _24.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _24.ValidatorAccumulatedCommissionRecord): _24.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _24.ValidatorAccumulatedCommissionRecordAminoMsg): _24.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _24.ValidatorAccumulatedCommissionRecord): _24.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorAccumulatedCommissionRecordProtoMsg): _24.ValidatorAccumulatedCommissionRecord;
                toProto(message: _24.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorAccumulatedCommissionRecord): _24.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _24.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: string | number | import("long").Long;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _24.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _24.ValidatorHistoricalRewardsRecordAmino): _24.ValidatorHistoricalRewardsRecord;
                toAmino(message: _24.ValidatorHistoricalRewardsRecord): _24.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _24.ValidatorHistoricalRewardsRecordAminoMsg): _24.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _24.ValidatorHistoricalRewardsRecord): _24.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorHistoricalRewardsRecordProtoMsg): _24.ValidatorHistoricalRewardsRecord;
                toProto(message: _24.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorHistoricalRewardsRecord): _24.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _24.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: string | number | import("long").Long;
                    };
                }): _24.ValidatorCurrentRewardsRecord;
                fromAmino(object: _24.ValidatorCurrentRewardsRecordAmino): _24.ValidatorCurrentRewardsRecord;
                toAmino(message: _24.ValidatorCurrentRewardsRecord): _24.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _24.ValidatorCurrentRewardsRecordAminoMsg): _24.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _24.ValidatorCurrentRewardsRecord): _24.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorCurrentRewardsRecordProtoMsg): _24.ValidatorCurrentRewardsRecord;
                toProto(message: _24.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorCurrentRewardsRecord): _24.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _24.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: string | number | import("long").Long;
                        stake?: string;
                        height?: string | number | import("long").Long;
                    };
                }): _24.DelegatorStartingInfoRecord;
                fromAmino(object: _24.DelegatorStartingInfoRecordAmino): _24.DelegatorStartingInfoRecord;
                toAmino(message: _24.DelegatorStartingInfoRecord): _24.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _24.DelegatorStartingInfoRecordAminoMsg): _24.DelegatorStartingInfoRecord;
                toAminoMsg(message: _24.DelegatorStartingInfoRecord): _24.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _24.DelegatorStartingInfoRecordProtoMsg): _24.DelegatorStartingInfoRecord;
                toProto(message: _24.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _24.DelegatorStartingInfoRecord): _24.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _24.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: string | number | import("long").Long;
                    period?: string | number | import("long").Long;
                    validatorSlashEvent?: {
                        validatorPeriod?: string | number | import("long").Long;
                        fraction?: string;
                    };
                }): _24.ValidatorSlashEventRecord;
                fromAmino(object: _24.ValidatorSlashEventRecordAmino): _24.ValidatorSlashEventRecord;
                toAmino(message: _24.ValidatorSlashEventRecord): _24.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _24.ValidatorSlashEventRecordAminoMsg): _24.ValidatorSlashEventRecord;
                toAminoMsg(message: _24.ValidatorSlashEventRecord): _24.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _24.ValidatorSlashEventRecordProtoMsg): _24.ValidatorSlashEventRecord;
                toProto(message: _24.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _24.ValidatorSlashEventRecord): _24.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisState;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: string | number | import("long").Long;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: string | number | import("long").Long;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: string | number | import("long").Long;
                            stake?: string;
                            height?: string | number | import("long").Long;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: string | number | import("long").Long;
                        period?: string | number | import("long").Long;
                        validatorSlashEvent?: {
                            validatorPeriod?: string | number | import("long").Long;
                            fraction?: string;
                        };
                    }[];
                }): _24.GenesisState;
                fromAmino(object: _24.GenesisStateAmino): _24.GenesisState;
                toAmino(message: _24.GenesisState): _24.GenesisStateAmino;
                fromAminoMsg(object: _24.GenesisStateAminoMsg): _24.GenesisState;
                toAminoMsg(message: _24.GenesisState): _24.GenesisStateAminoMsg;
                fromProtoMsg(message: _24.GenesisStateProtoMsg): _24.GenesisState;
                toProto(message: _24.GenesisState): Uint8Array;
                toProtoMsg(message: _24.GenesisState): _24.GenesisStateProtoMsg;
            };
            Params: {
                encode(message: _23.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Params;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _23.Params;
                fromAmino(object: _23.ParamsAmino): _23.Params;
                toAmino(message: _23.Params): _23.ParamsAmino;
                fromAminoMsg(object: _23.ParamsAminoMsg): _23.Params;
                toAminoMsg(message: _23.Params): _23.ParamsAminoMsg;
                fromProtoMsg(message: _23.ParamsProtoMsg): _23.Params;
                toProto(message: _23.Params): Uint8Array;
                toProtoMsg(message: _23.Params): _23.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _23.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _23.ValidatorHistoricalRewards;
                fromAmino(object: _23.ValidatorHistoricalRewardsAmino): _23.ValidatorHistoricalRewards;
                toAmino(message: _23.ValidatorHistoricalRewards): _23.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _23.ValidatorHistoricalRewardsAminoMsg): _23.ValidatorHistoricalRewards;
                toAminoMsg(message: _23.ValidatorHistoricalRewards): _23.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _23.ValidatorHistoricalRewardsProtoMsg): _23.ValidatorHistoricalRewards;
                toProto(message: _23.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _23.ValidatorHistoricalRewards): _23.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _23.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: string | number | import("long").Long;
                }): _23.ValidatorCurrentRewards;
                fromAmino(object: _23.ValidatorCurrentRewardsAmino): _23.ValidatorCurrentRewards;
                toAmino(message: _23.ValidatorCurrentRewards): _23.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _23.ValidatorCurrentRewardsAminoMsg): _23.ValidatorCurrentRewards;
                toAminoMsg(message: _23.ValidatorCurrentRewards): _23.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _23.ValidatorCurrentRewardsProtoMsg): _23.ValidatorCurrentRewards;
                toProto(message: _23.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _23.ValidatorCurrentRewards): _23.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _23.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _23.ValidatorAccumulatedCommission;
                fromAmino(object: _23.ValidatorAccumulatedCommissionAmino): _23.ValidatorAccumulatedCommission;
                toAmino(message: _23.ValidatorAccumulatedCommission): _23.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _23.ValidatorAccumulatedCommissionAminoMsg): _23.ValidatorAccumulatedCommission;
                toAminoMsg(message: _23.ValidatorAccumulatedCommission): _23.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _23.ValidatorAccumulatedCommissionProtoMsg): _23.ValidatorAccumulatedCommission;
                toProto(message: _23.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _23.ValidatorAccumulatedCommission): _23.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _23.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _23.ValidatorOutstandingRewards;
                fromAmino(object: _23.ValidatorOutstandingRewardsAmino): _23.ValidatorOutstandingRewards;
                toAmino(message: _23.ValidatorOutstandingRewards): _23.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _23.ValidatorOutstandingRewardsAminoMsg): _23.ValidatorOutstandingRewards;
                toAminoMsg(message: _23.ValidatorOutstandingRewards): _23.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _23.ValidatorOutstandingRewardsProtoMsg): _23.ValidatorOutstandingRewards;
                toProto(message: _23.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _23.ValidatorOutstandingRewards): _23.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _23.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorSlashEvent;
                fromPartial(object: {
                    validatorPeriod?: string | number | import("long").Long;
                    fraction?: string;
                }): _23.ValidatorSlashEvent;
                fromAmino(object: _23.ValidatorSlashEventAmino): _23.ValidatorSlashEvent;
                toAmino(message: _23.ValidatorSlashEvent): _23.ValidatorSlashEventAmino;
                fromAminoMsg(object: _23.ValidatorSlashEventAminoMsg): _23.ValidatorSlashEvent;
                toAminoMsg(message: _23.ValidatorSlashEvent): _23.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _23.ValidatorSlashEventProtoMsg): _23.ValidatorSlashEvent;
                toProto(message: _23.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _23.ValidatorSlashEvent): _23.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _23.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorSlashEvents;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: string | number | import("long").Long;
                        fraction?: string;
                    }[];
                }): _23.ValidatorSlashEvents;
                fromAmino(object: _23.ValidatorSlashEventsAmino): _23.ValidatorSlashEvents;
                toAmino(message: _23.ValidatorSlashEvents): _23.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _23.ValidatorSlashEventsAminoMsg): _23.ValidatorSlashEvents;
                toAminoMsg(message: _23.ValidatorSlashEvents): _23.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _23.ValidatorSlashEventsProtoMsg): _23.ValidatorSlashEvents;
                toProto(message: _23.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _23.ValidatorSlashEvents): _23.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _23.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.FeePool;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _23.FeePool;
                fromAmino(object: _23.FeePoolAmino): _23.FeePool;
                toAmino(message: _23.FeePool): _23.FeePoolAmino;
                fromAminoMsg(object: _23.FeePoolAminoMsg): _23.FeePool;
                toAminoMsg(message: _23.FeePool): _23.FeePoolAminoMsg;
                fromProtoMsg(message: _23.FeePoolProtoMsg): _23.FeePool;
                toProto(message: _23.FeePool): Uint8Array;
                toProtoMsg(message: _23.FeePool): _23.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _23.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _23.CommunityPoolSpendProposal;
                fromAmino(object: _23.CommunityPoolSpendProposalAmino): _23.CommunityPoolSpendProposal;
                toAmino(message: _23.CommunityPoolSpendProposal): _23.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _23.CommunityPoolSpendProposalAminoMsg): _23.CommunityPoolSpendProposal;
                toAminoMsg(message: _23.CommunityPoolSpendProposal): _23.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _23.CommunityPoolSpendProposalProtoMsg): _23.CommunityPoolSpendProposal;
                toProto(message: _23.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _23.CommunityPoolSpendProposal): _23.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _23.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorStartingInfo;
                fromPartial(object: {
                    previousPeriod?: string | number | import("long").Long;
                    stake?: string;
                    height?: string | number | import("long").Long;
                }): _23.DelegatorStartingInfo;
                fromAmino(object: _23.DelegatorStartingInfoAmino): _23.DelegatorStartingInfo;
                toAmino(message: _23.DelegatorStartingInfo): _23.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _23.DelegatorStartingInfoAminoMsg): _23.DelegatorStartingInfo;
                toAminoMsg(message: _23.DelegatorStartingInfo): _23.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _23.DelegatorStartingInfoProtoMsg): _23.DelegatorStartingInfo;
                toProto(message: _23.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _23.DelegatorStartingInfo): _23.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _23.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegationDelegatorReward;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _23.DelegationDelegatorReward;
                fromAmino(object: _23.DelegationDelegatorRewardAmino): _23.DelegationDelegatorReward;
                toAmino(message: _23.DelegationDelegatorReward): _23.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _23.DelegationDelegatorRewardAminoMsg): _23.DelegationDelegatorReward;
                toAminoMsg(message: _23.DelegationDelegatorReward): _23.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _23.DelegationDelegatorRewardProtoMsg): _23.DelegationDelegatorReward;
                toProto(message: _23.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _23.DelegationDelegatorReward): _23.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _23.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _23.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _23.CommunityPoolSpendProposalWithDepositAmino): _23.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _23.CommunityPoolSpendProposalWithDeposit): _23.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _23.CommunityPoolSpendProposalWithDepositAminoMsg): _23.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _23.CommunityPoolSpendProposalWithDeposit): _23.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _23.CommunityPoolSpendProposalWithDepositProtoMsg): _23.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _23.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _23.CommunityPoolSpendProposalWithDeposit): _23.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _109.MsgClientImpl;
            QueryClientImpl: typeof _100.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _29.QueryProposalRequest): Promise<_29.QueryProposalResponse>;
                proposals(request: _29.QueryProposalsRequest): Promise<_29.QueryProposalsResponse>;
                vote(request: _29.QueryVoteRequest): Promise<_29.QueryVoteResponse>;
                votes(request: _29.QueryVotesRequest): Promise<_29.QueryVotesResponse>;
                params(request: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                deposit(request: _29.QueryDepositRequest): Promise<_29.QueryDepositResponse>;
                deposits(request: _29.QueryDepositsRequest): Promise<_29.QueryDepositsResponse>;
                tallyResult(request: _29.QueryTallyResultRequest): Promise<_29.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _30.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _30.MsgSubmitProposal;
                    };
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: _30.MsgVote;
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _30.MsgVoteWeighted;
                    };
                    deposit(value: _30.MsgDeposit): {
                        typeUrl: string;
                        value: _30.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _30.MsgSubmitProposal;
                    };
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: _30.MsgVote;
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _30.MsgVoteWeighted;
                    };
                    deposit(value: _30.MsgDeposit): {
                        typeUrl: string;
                        value: _30.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _30.MsgSubmitProposal) => _30.MsgSubmitProposalAmino;
                    fromAmino: (object: _30.MsgSubmitProposalAmino) => _30.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _30.MsgVote) => _30.MsgVoteAmino;
                    fromAmino: (object: _30.MsgVoteAmino) => _30.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _30.MsgVoteWeighted) => _30.MsgVoteWeightedAmino;
                    fromAmino: (object: _30.MsgVoteWeightedAmino) => _30.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _30.MsgDeposit) => _30.MsgDepositAmino;
                    fromAmino: (object: _30.MsgDepositAmino) => _30.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _30.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _30.MsgSubmitProposal;
                fromAmino(object: _30.MsgSubmitProposalAmino): _30.MsgSubmitProposal;
                toAmino(message: _30.MsgSubmitProposal): _30.MsgSubmitProposalAmino;
                fromAminoMsg(object: _30.MsgSubmitProposalAminoMsg): _30.MsgSubmitProposal;
                toAminoMsg(message: _30.MsgSubmitProposal): _30.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _30.MsgSubmitProposalProtoMsg): _30.MsgSubmitProposal;
                toProto(message: _30.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _30.MsgSubmitProposal): _30.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _30.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _30.MsgSubmitProposalResponse;
                fromAmino(object: _30.MsgSubmitProposalResponseAmino): _30.MsgSubmitProposalResponse;
                toAmino(message: _30.MsgSubmitProposalResponse): _30.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _30.MsgSubmitProposalResponseAminoMsg): _30.MsgSubmitProposalResponse;
                toAminoMsg(message: _30.MsgSubmitProposalResponse): _30.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _30.MsgSubmitProposalResponseProtoMsg): _30.MsgSubmitProposalResponse;
                toProto(message: _30.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _30.MsgSubmitProposalResponse): _30.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _30.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    option?: _28.VoteOption;
                }): _30.MsgVote;
                fromAmino(object: _30.MsgVoteAmino): _30.MsgVote;
                toAmino(message: _30.MsgVote): _30.MsgVoteAmino;
                fromAminoMsg(object: _30.MsgVoteAminoMsg): _30.MsgVote;
                toAminoMsg(message: _30.MsgVote): _30.MsgVoteAminoMsg;
                fromProtoMsg(message: _30.MsgVoteProtoMsg): _30.MsgVote;
                toProto(message: _30.MsgVote): Uint8Array;
                toProtoMsg(message: _30.MsgVote): _30.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _30.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVoteResponse;
                fromPartial(_: {}): _30.MsgVoteResponse;
                fromAmino(_: _30.MsgVoteResponseAmino): _30.MsgVoteResponse;
                toAmino(_: _30.MsgVoteResponse): _30.MsgVoteResponseAmino;
                fromAminoMsg(object: _30.MsgVoteResponseAminoMsg): _30.MsgVoteResponse;
                toAminoMsg(message: _30.MsgVoteResponse): _30.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _30.MsgVoteResponseProtoMsg): _30.MsgVoteResponse;
                toProto(message: _30.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _30.MsgVoteResponse): _30.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _30.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    options?: {
                        option?: _28.VoteOption;
                        weight?: string;
                    }[];
                }): _30.MsgVoteWeighted;
                fromAmino(object: _30.MsgVoteWeightedAmino): _30.MsgVoteWeighted;
                toAmino(message: _30.MsgVoteWeighted): _30.MsgVoteWeightedAmino;
                fromAminoMsg(object: _30.MsgVoteWeightedAminoMsg): _30.MsgVoteWeighted;
                toAminoMsg(message: _30.MsgVoteWeighted): _30.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _30.MsgVoteWeightedProtoMsg): _30.MsgVoteWeighted;
                toProto(message: _30.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _30.MsgVoteWeighted): _30.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _30.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgVoteWeightedResponse;
                fromPartial(_: {}): _30.MsgVoteWeightedResponse;
                fromAmino(_: _30.MsgVoteWeightedResponseAmino): _30.MsgVoteWeightedResponse;
                toAmino(_: _30.MsgVoteWeightedResponse): _30.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _30.MsgVoteWeightedResponseAminoMsg): _30.MsgVoteWeightedResponse;
                toAminoMsg(message: _30.MsgVoteWeightedResponse): _30.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _30.MsgVoteWeightedResponseProtoMsg): _30.MsgVoteWeightedResponse;
                toProto(message: _30.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _30.MsgVoteWeightedResponse): _30.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _30.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgDeposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _30.MsgDeposit;
                fromAmino(object: _30.MsgDepositAmino): _30.MsgDeposit;
                toAmino(message: _30.MsgDeposit): _30.MsgDepositAmino;
                fromAminoMsg(object: _30.MsgDepositAminoMsg): _30.MsgDeposit;
                toAminoMsg(message: _30.MsgDeposit): _30.MsgDepositAminoMsg;
                fromProtoMsg(message: _30.MsgDepositProtoMsg): _30.MsgDeposit;
                toProto(message: _30.MsgDeposit): Uint8Array;
                toProtoMsg(message: _30.MsgDeposit): _30.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _30.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgDepositResponse;
                fromPartial(_: {}): _30.MsgDepositResponse;
                fromAmino(_: _30.MsgDepositResponseAmino): _30.MsgDepositResponse;
                toAmino(_: _30.MsgDepositResponse): _30.MsgDepositResponseAmino;
                fromAminoMsg(object: _30.MsgDepositResponseAminoMsg): _30.MsgDepositResponse;
                toAminoMsg(message: _30.MsgDepositResponse): _30.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _30.MsgDepositResponseProtoMsg): _30.MsgDepositResponse;
                toProto(message: _30.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _30.MsgDepositResponse): _30.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _29.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _29.QueryProposalRequest;
                fromAmino(object: _29.QueryProposalRequestAmino): _29.QueryProposalRequest;
                toAmino(message: _29.QueryProposalRequest): _29.QueryProposalRequestAmino;
                fromAminoMsg(object: _29.QueryProposalRequestAminoMsg): _29.QueryProposalRequest;
                toAminoMsg(message: _29.QueryProposalRequest): _29.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _29.QueryProposalRequestProtoMsg): _29.QueryProposalRequest;
                toProto(message: _29.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _29.QueryProposalRequest): _29.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _29.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: string | number | import("long").Long;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _28.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _29.QueryProposalResponse;
                fromAmino(object: _29.QueryProposalResponseAmino): _29.QueryProposalResponse;
                toAmino(message: _29.QueryProposalResponse): _29.QueryProposalResponseAmino;
                fromAminoMsg(object: _29.QueryProposalResponseAminoMsg): _29.QueryProposalResponse;
                toAminoMsg(message: _29.QueryProposalResponse): _29.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _29.QueryProposalResponseProtoMsg): _29.QueryProposalResponse;
                toProto(message: _29.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _29.QueryProposalResponse): _29.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _29.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _28.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _29.QueryProposalsRequest;
                fromAmino(object: _29.QueryProposalsRequestAmino): _29.QueryProposalsRequest;
                toAmino(message: _29.QueryProposalsRequest): _29.QueryProposalsRequestAmino;
                fromAminoMsg(object: _29.QueryProposalsRequestAminoMsg): _29.QueryProposalsRequest;
                toAminoMsg(message: _29.QueryProposalsRequest): _29.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryProposalsRequestProtoMsg): _29.QueryProposalsRequest;
                toProto(message: _29.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryProposalsRequest): _29.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _29.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: string | number | import("long").Long;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _28.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _29.QueryProposalsResponse;
                fromAmino(object: _29.QueryProposalsResponseAmino): _29.QueryProposalsResponse;
                toAmino(message: _29.QueryProposalsResponse): _29.QueryProposalsResponseAmino;
                fromAminoMsg(object: _29.QueryProposalsResponseAminoMsg): _29.QueryProposalsResponse;
                toAminoMsg(message: _29.QueryProposalsResponse): _29.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryProposalsResponseProtoMsg): _29.QueryProposalsResponse;
                toProto(message: _29.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryProposalsResponse): _29.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _29.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                }): _29.QueryVoteRequest;
                fromAmino(object: _29.QueryVoteRequestAmino): _29.QueryVoteRequest;
                toAmino(message: _29.QueryVoteRequest): _29.QueryVoteRequestAmino;
                fromAminoMsg(object: _29.QueryVoteRequestAminoMsg): _29.QueryVoteRequest;
                toAminoMsg(message: _29.QueryVoteRequest): _29.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _29.QueryVoteRequestProtoMsg): _29.QueryVoteRequest;
                toProto(message: _29.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _29.QueryVoteRequest): _29.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _29.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _28.VoteOption;
                        options?: {
                            option?: _28.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _29.QueryVoteResponse;
                fromAmino(object: _29.QueryVoteResponseAmino): _29.QueryVoteResponse;
                toAmino(message: _29.QueryVoteResponse): _29.QueryVoteResponseAmino;
                fromAminoMsg(object: _29.QueryVoteResponseAminoMsg): _29.QueryVoteResponse;
                toAminoMsg(message: _29.QueryVoteResponse): _29.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _29.QueryVoteResponseProtoMsg): _29.QueryVoteResponse;
                toProto(message: _29.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _29.QueryVoteResponse): _29.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _29.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _29.QueryVotesRequest;
                fromAmino(object: _29.QueryVotesRequestAmino): _29.QueryVotesRequest;
                toAmino(message: _29.QueryVotesRequest): _29.QueryVotesRequestAmino;
                fromAminoMsg(object: _29.QueryVotesRequestAminoMsg): _29.QueryVotesRequest;
                toAminoMsg(message: _29.QueryVotesRequest): _29.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _29.QueryVotesRequestProtoMsg): _29.QueryVotesRequest;
                toProto(message: _29.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _29.QueryVotesRequest): _29.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _29.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _28.VoteOption;
                        options?: {
                            option?: _28.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _29.QueryVotesResponse;
                fromAmino(object: _29.QueryVotesResponseAmino): _29.QueryVotesResponse;
                toAmino(message: _29.QueryVotesResponse): _29.QueryVotesResponseAmino;
                fromAminoMsg(object: _29.QueryVotesResponseAminoMsg): _29.QueryVotesResponse;
                toAminoMsg(message: _29.QueryVotesResponse): _29.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _29.QueryVotesResponseProtoMsg): _29.QueryVotesResponse;
                toProto(message: _29.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _29.QueryVotesResponse): _29.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _29.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _29.QueryParamsRequest;
                fromAmino(object: _29.QueryParamsRequestAmino): _29.QueryParamsRequest;
                toAmino(message: _29.QueryParamsRequest): _29.QueryParamsRequestAmino;
                fromAminoMsg(object: _29.QueryParamsRequestAminoMsg): _29.QueryParamsRequest;
                toAminoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryParamsRequestProtoMsg): _29.QueryParamsRequest;
                toProto(message: _29.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _29.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _29.QueryParamsResponse;
                fromAmino(object: _29.QueryParamsResponseAmino): _29.QueryParamsResponse;
                toAmino(message: _29.QueryParamsResponse): _29.QueryParamsResponseAmino;
                fromAminoMsg(object: _29.QueryParamsResponseAminoMsg): _29.QueryParamsResponse;
                toAminoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryParamsResponseProtoMsg): _29.QueryParamsResponse;
                toProto(message: _29.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _29.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    depositor?: string;
                }): _29.QueryDepositRequest;
                fromAmino(object: _29.QueryDepositRequestAmino): _29.QueryDepositRequest;
                toAmino(message: _29.QueryDepositRequest): _29.QueryDepositRequestAmino;
                fromAminoMsg(object: _29.QueryDepositRequestAminoMsg): _29.QueryDepositRequest;
                toAminoMsg(message: _29.QueryDepositRequest): _29.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDepositRequestProtoMsg): _29.QueryDepositRequest;
                toProto(message: _29.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDepositRequest): _29.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _29.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long").Long;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _29.QueryDepositResponse;
                fromAmino(object: _29.QueryDepositResponseAmino): _29.QueryDepositResponse;
                toAmino(message: _29.QueryDepositResponse): _29.QueryDepositResponseAmino;
                fromAminoMsg(object: _29.QueryDepositResponseAminoMsg): _29.QueryDepositResponse;
                toAminoMsg(message: _29.QueryDepositResponse): _29.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDepositResponseProtoMsg): _29.QueryDepositResponse;
                toProto(message: _29.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDepositResponse): _29.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _29.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _29.QueryDepositsRequest;
                fromAmino(object: _29.QueryDepositsRequestAmino): _29.QueryDepositsRequest;
                toAmino(message: _29.QueryDepositsRequest): _29.QueryDepositsRequestAmino;
                fromAminoMsg(object: _29.QueryDepositsRequestAminoMsg): _29.QueryDepositsRequest;
                toAminoMsg(message: _29.QueryDepositsRequest): _29.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDepositsRequestProtoMsg): _29.QueryDepositsRequest;
                toProto(message: _29.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDepositsRequest): _29.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _29.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long").Long;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _29.QueryDepositsResponse;
                fromAmino(object: _29.QueryDepositsResponseAmino): _29.QueryDepositsResponse;
                toAmino(message: _29.QueryDepositsResponse): _29.QueryDepositsResponseAmino;
                fromAminoMsg(object: _29.QueryDepositsResponseAminoMsg): _29.QueryDepositsResponse;
                toAminoMsg(message: _29.QueryDepositsResponse): _29.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDepositsResponseProtoMsg): _29.QueryDepositsResponse;
                toProto(message: _29.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDepositsResponse): _29.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _29.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _29.QueryTallyResultRequest;
                fromAmino(object: _29.QueryTallyResultRequestAmino): _29.QueryTallyResultRequest;
                toAmino(message: _29.QueryTallyResultRequest): _29.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _29.QueryTallyResultRequestAminoMsg): _29.QueryTallyResultRequest;
                toAminoMsg(message: _29.QueryTallyResultRequest): _29.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _29.QueryTallyResultRequestProtoMsg): _29.QueryTallyResultRequest;
                toProto(message: _29.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _29.QueryTallyResultRequest): _29.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _29.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _29.QueryTallyResultResponse;
                fromAmino(object: _29.QueryTallyResultResponseAmino): _29.QueryTallyResultResponse;
                toAmino(message: _29.QueryTallyResultResponse): _29.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _29.QueryTallyResultResponseAminoMsg): _29.QueryTallyResultResponse;
                toAminoMsg(message: _29.QueryTallyResultResponse): _29.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _29.QueryTallyResultResponseProtoMsg): _29.QueryTallyResultResponse;
                toProto(message: _29.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _29.QueryTallyResultResponse): _29.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _28.VoteOption;
            voteOptionToJSON(object: _28.VoteOption): string;
            proposalStatusFromJSON(object: any): _28.ProposalStatus;
            proposalStatusToJSON(object: _28.ProposalStatus): string;
            VoteOption: typeof _28.VoteOption;
            VoteOptionSDKType: typeof _28.VoteOption;
            VoteOptionAmino: typeof _28.VoteOption;
            ProposalStatus: typeof _28.ProposalStatus;
            ProposalStatusSDKType: typeof _28.ProposalStatus;
            ProposalStatusAmino: typeof _28.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _28.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.WeightedVoteOption;
                fromPartial(object: {
                    option?: _28.VoteOption;
                    weight?: string;
                }): _28.WeightedVoteOption;
                fromAmino(object: _28.WeightedVoteOptionAmino): _28.WeightedVoteOption;
                toAmino(message: _28.WeightedVoteOption): _28.WeightedVoteOptionAmino;
                fromAminoMsg(object: _28.WeightedVoteOptionAminoMsg): _28.WeightedVoteOption;
                toAminoMsg(message: _28.WeightedVoteOption): _28.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _28.WeightedVoteOptionProtoMsg): _28.WeightedVoteOption;
                toProto(message: _28.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _28.WeightedVoteOption): _28.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _28.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TextProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _28.TextProposal;
                fromAmino(object: _28.TextProposalAmino): _28.TextProposal;
                toAmino(message: _28.TextProposal): _28.TextProposalAmino;
                fromAminoMsg(object: _28.TextProposalAminoMsg): _28.TextProposal;
                toAminoMsg(message: _28.TextProposal): _28.TextProposalAminoMsg;
                fromProtoMsg(message: _28.TextProposalProtoMsg): _28.TextProposal;
                toProto(message: _28.TextProposal): Uint8Array;
                toProtoMsg(message: _28.TextProposal): _28.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _28.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Deposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _28.Deposit;
                fromAmino(object: _28.DepositAmino): _28.Deposit;
                toAmino(message: _28.Deposit): _28.DepositAmino;
                fromAminoMsg(object: _28.DepositAminoMsg): _28.Deposit;
                toAminoMsg(message: _28.Deposit): _28.DepositAminoMsg;
                fromProtoMsg(message: _28.DepositProtoMsg): _28.Deposit;
                toProto(message: _28.Deposit): Uint8Array;
                toProtoMsg(message: _28.Deposit): _28.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _28.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Proposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _28.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _28.Proposal;
                fromAmino(object: _28.ProposalAmino): _28.Proposal;
                toAmino(message: _28.Proposal): _28.ProposalAmino;
                fromAminoMsg(object: _28.ProposalAminoMsg): _28.Proposal;
                toAminoMsg(message: _28.Proposal): _28.ProposalAminoMsg;
                fromProtoMsg(message: _28.ProposalProtoMsg): _28.Proposal;
                toProto(message: _28.Proposal): Uint8Array;
                toProtoMsg(message: _28.Proposal): _28.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _28.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TallyResult;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _28.TallyResult;
                fromAmino(object: _28.TallyResultAmino): _28.TallyResult;
                toAmino(message: _28.TallyResult): _28.TallyResultAmino;
                fromAminoMsg(object: _28.TallyResultAminoMsg): _28.TallyResult;
                toAminoMsg(message: _28.TallyResult): _28.TallyResultAminoMsg;
                fromProtoMsg(message: _28.TallyResultProtoMsg): _28.TallyResult;
                toProto(message: _28.TallyResult): Uint8Array;
                toProtoMsg(message: _28.TallyResult): _28.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _28.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    option?: _28.VoteOption;
                    options?: {
                        option?: _28.VoteOption;
                        weight?: string;
                    }[];
                }): _28.Vote;
                fromAmino(object: _28.VoteAmino): _28.Vote;
                toAmino(message: _28.Vote): _28.VoteAmino;
                fromAminoMsg(object: _28.VoteAminoMsg): _28.Vote;
                toAminoMsg(message: _28.Vote): _28.VoteAminoMsg;
                fromProtoMsg(message: _28.VoteProtoMsg): _28.Vote;
                toProto(message: _28.Vote): Uint8Array;
                toProtoMsg(message: _28.Vote): _28.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _28.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _28.DepositParams;
                fromAmino(object: _28.DepositParamsAmino): _28.DepositParams;
                toAmino(message: _28.DepositParams): _28.DepositParamsAmino;
                fromAminoMsg(object: _28.DepositParamsAminoMsg): _28.DepositParams;
                toAminoMsg(message: _28.DepositParams): _28.DepositParamsAminoMsg;
                fromProtoMsg(message: _28.DepositParamsProtoMsg): _28.DepositParams;
                toProto(message: _28.DepositParams): Uint8Array;
                toProtoMsg(message: _28.DepositParams): _28.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _28.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _28.VotingParams;
                fromAmino(object: _28.VotingParamsAmino): _28.VotingParams;
                toAmino(message: _28.VotingParams): _28.VotingParamsAmino;
                fromAminoMsg(object: _28.VotingParamsAminoMsg): _28.VotingParams;
                toAminoMsg(message: _28.VotingParams): _28.VotingParamsAminoMsg;
                fromProtoMsg(message: _28.VotingParamsProtoMsg): _28.VotingParams;
                toProto(message: _28.VotingParams): Uint8Array;
                toProtoMsg(message: _28.VotingParams): _28.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _28.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _28.TallyParams;
                fromAmino(object: _28.TallyParamsAmino): _28.TallyParams;
                toAmino(message: _28.TallyParams): _28.TallyParamsAmino;
                fromAminoMsg(object: _28.TallyParamsAminoMsg): _28.TallyParams;
                toAminoMsg(message: _28.TallyParams): _28.TallyParamsAminoMsg;
                fromProtoMsg(message: _28.TallyParamsProtoMsg): _28.TallyParams;
                toProto(message: _28.TallyParams): Uint8Array;
                toProtoMsg(message: _28.TallyParams): _28.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisState;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long").Long;
                    deposits?: {
                        proposalId?: string | number | import("long").Long;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _28.VoteOption;
                        options?: {
                            option?: _28.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: string | number | import("long").Long;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _28.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _27.GenesisState;
                fromAmino(object: _27.GenesisStateAmino): _27.GenesisState;
                toAmino(message: _27.GenesisState): _27.GenesisStateAmino;
                fromAminoMsg(object: _27.GenesisStateAminoMsg): _27.GenesisState;
                toAminoMsg(message: _27.GenesisState): _27.GenesisStateAminoMsg;
                fromProtoMsg(message: _27.GenesisStateProtoMsg): _27.GenesisState;
                toProto(message: _27.GenesisState): Uint8Array;
                toProtoMsg(message: _27.GenesisState): _27.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _101.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                inflation(request?: _33.QueryInflationRequest): Promise<_33.QueryInflationResponse>;
                annualProvisions(request?: _33.QueryAnnualProvisionsRequest): Promise<_33.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _33.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsRequest;
                fromPartial(_: {}): _33.QueryParamsRequest;
                fromAmino(_: _33.QueryParamsRequestAmino): _33.QueryParamsRequest;
                toAmino(_: _33.QueryParamsRequest): _33.QueryParamsRequestAmino;
                fromAminoMsg(object: _33.QueryParamsRequestAminoMsg): _33.QueryParamsRequest;
                toAminoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryParamsRequestProtoMsg): _33.QueryParamsRequest;
                toProto(message: _33.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _33.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long").Long;
                    };
                }): _33.QueryParamsResponse;
                fromAmino(object: _33.QueryParamsResponseAmino): _33.QueryParamsResponse;
                toAmino(message: _33.QueryParamsResponse): _33.QueryParamsResponseAmino;
                fromAminoMsg(object: _33.QueryParamsResponseAminoMsg): _33.QueryParamsResponse;
                toAminoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryParamsResponseProtoMsg): _33.QueryParamsResponse;
                toProto(message: _33.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                encode(_: _33.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryInflationRequest;
                fromPartial(_: {}): _33.QueryInflationRequest;
                fromAmino(_: _33.QueryInflationRequestAmino): _33.QueryInflationRequest;
                toAmino(_: _33.QueryInflationRequest): _33.QueryInflationRequestAmino;
                fromAminoMsg(object: _33.QueryInflationRequestAminoMsg): _33.QueryInflationRequest;
                toAminoMsg(message: _33.QueryInflationRequest): _33.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _33.QueryInflationRequestProtoMsg): _33.QueryInflationRequest;
                toProto(message: _33.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _33.QueryInflationRequest): _33.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                encode(message: _33.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _33.QueryInflationResponse;
                fromAmino(object: _33.QueryInflationResponseAmino): _33.QueryInflationResponse;
                toAmino(message: _33.QueryInflationResponse): _33.QueryInflationResponseAmino;
                fromAminoMsg(object: _33.QueryInflationResponseAminoMsg): _33.QueryInflationResponse;
                toAminoMsg(message: _33.QueryInflationResponse): _33.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _33.QueryInflationResponseProtoMsg): _33.QueryInflationResponse;
                toProto(message: _33.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _33.QueryInflationResponse): _33.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _33.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _33.QueryAnnualProvisionsRequest;
                fromAmino(_: _33.QueryAnnualProvisionsRequestAmino): _33.QueryAnnualProvisionsRequest;
                toAmino(_: _33.QueryAnnualProvisionsRequest): _33.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _33.QueryAnnualProvisionsRequestAminoMsg): _33.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _33.QueryAnnualProvisionsRequest): _33.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryAnnualProvisionsRequestProtoMsg): _33.QueryAnnualProvisionsRequest;
                toProto(message: _33.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryAnnualProvisionsRequest): _33.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _33.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _33.QueryAnnualProvisionsResponse;
                fromAmino(object: _33.QueryAnnualProvisionsResponseAmino): _33.QueryAnnualProvisionsResponse;
                toAmino(message: _33.QueryAnnualProvisionsResponse): _33.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _33.QueryAnnualProvisionsResponseAminoMsg): _33.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _33.QueryAnnualProvisionsResponse): _33.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryAnnualProvisionsResponseProtoMsg): _33.QueryAnnualProvisionsResponse;
                toProto(message: _33.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryAnnualProvisionsResponse): _33.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _32.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _32.Minter;
                fromAmino(object: _32.MinterAmino): _32.Minter;
                toAmino(message: _32.Minter): _32.MinterAmino;
                fromAminoMsg(object: _32.MinterAminoMsg): _32.Minter;
                toAminoMsg(message: _32.Minter): _32.MinterAminoMsg;
                fromProtoMsg(message: _32.MinterProtoMsg): _32.Minter;
                toProto(message: _32.Minter): Uint8Array;
                toProtoMsg(message: _32.Minter): _32.MinterProtoMsg;
            };
            Params: {
                encode(message: _32.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: string | number | import("long").Long;
                }): _32.Params;
                fromAmino(object: _32.ParamsAmino): _32.Params;
                toAmino(message: _32.Params): _32.ParamsAmino;
                fromAminoMsg(object: _32.ParamsAminoMsg): _32.Params;
                toAminoMsg(message: _32.Params): _32.ParamsAminoMsg;
                fromProtoMsg(message: _32.ParamsProtoMsg): _32.Params;
                toProto(message: _32.Params): Uint8Array;
                toProtoMsg(message: _32.Params): _32.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long").Long;
                    };
                }): _31.GenesisState;
                fromAmino(object: _31.GenesisStateAmino): _31.GenesisState;
                toAmino(message: _31.GenesisState): _31.GenesisStateAmino;
                fromAminoMsg(object: _31.GenesisStateAminoMsg): _31.GenesisState;
                toAminoMsg(message: _31.GenesisState): _31.GenesisStateAminoMsg;
                fromProtoMsg(message: _31.GenesisStateProtoMsg): _31.GenesisState;
                toProto(message: _31.GenesisState): Uint8Array;
                toProtoMsg(message: _31.GenesisState): _31.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _102.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(message: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _35.QueryParamsRequest;
                fromAmino(object: _35.QueryParamsRequestAmino): _35.QueryParamsRequest;
                toAmino(message: _35.QueryParamsRequest): _35.QueryParamsRequestAmino;
                fromAminoMsg(object: _35.QueryParamsRequestAminoMsg): _35.QueryParamsRequest;
                toAminoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryParamsRequestProtoMsg): _35.QueryParamsRequest;
                toProto(message: _35.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _35.QueryParamsResponse;
                fromAmino(object: _35.QueryParamsResponseAmino): _35.QueryParamsResponse;
                toAmino(message: _35.QueryParamsResponse): _35.QueryParamsResponseAmino;
                fromAminoMsg(object: _35.QueryParamsResponseAminoMsg): _35.QueryParamsResponse;
                toAminoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryParamsResponseProtoMsg): _35.QueryParamsResponse;
                toProto(message: _35.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                encode(message: _34.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ParameterChangeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _34.ParameterChangeProposal;
                fromAmino(object: _34.ParameterChangeProposalAmino): _34.ParameterChangeProposal;
                toAmino(message: _34.ParameterChangeProposal): _34.ParameterChangeProposalAmino;
                fromAminoMsg(object: _34.ParameterChangeProposalAminoMsg): _34.ParameterChangeProposal;
                toAminoMsg(message: _34.ParameterChangeProposal): _34.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _34.ParameterChangeProposalProtoMsg): _34.ParameterChangeProposal;
                toProto(message: _34.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _34.ParameterChangeProposal): _34.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                encode(message: _34.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ParamChange;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _34.ParamChange;
                fromAmino(object: _34.ParamChangeAmino): _34.ParamChange;
                toAmino(message: _34.ParamChange): _34.ParamChangeAmino;
                fromAminoMsg(object: _34.ParamChangeAminoMsg): _34.ParamChange;
                toAminoMsg(message: _34.ParamChange): _34.ParamChangeAminoMsg;
                fromProtoMsg(message: _34.ParamChangeProtoMsg): _34.ParamChange;
                toProto(message: _34.ParamChange): Uint8Array;
                toProtoMsg(message: _34.ParamChange): _34.ParamChangeProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _110.MsgClientImpl;
            QueryClientImpl: typeof _103.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _38.QueryValidatorsRequest): Promise<_38.QueryValidatorsResponse>;
                validator(request: _38.QueryValidatorRequest): Promise<_38.QueryValidatorResponse>;
                validatorDelegations(request: _38.QueryValidatorDelegationsRequest): Promise<_38.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _38.QueryValidatorUnbondingDelegationsRequest): Promise<_38.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _38.QueryDelegationRequest): Promise<_38.QueryDelegationResponse>;
                unbondingDelegation(request: _38.QueryUnbondingDelegationRequest): Promise<_38.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _38.QueryDelegatorDelegationsRequest): Promise<_38.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _38.QueryDelegatorUnbondingDelegationsRequest): Promise<_38.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _38.QueryRedelegationsRequest): Promise<_38.QueryRedelegationsResponse>;
                delegatorValidators(request: _38.QueryDelegatorValidatorsRequest): Promise<_38.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _38.QueryDelegatorValidatorRequest): Promise<_38.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _38.QueryHistoricalInfoRequest): Promise<_38.QueryHistoricalInfoResponse>;
                pool(request?: _38.QueryPoolRequest): Promise<_38.QueryPoolResponse>;
                params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _40.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _40.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _40.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _40.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _40.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _40.MsgCreateValidator): {
                        typeUrl: string;
                        value: _40.MsgCreateValidator;
                    };
                    editValidator(value: _40.MsgEditValidator): {
                        typeUrl: string;
                        value: _40.MsgEditValidator;
                    };
                    delegate(value: _40.MsgDelegate): {
                        typeUrl: string;
                        value: _40.MsgDelegate;
                    };
                    beginRedelegate(value: _40.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _40.MsgBeginRedelegate;
                    };
                    undelegate(value: _40.MsgUndelegate): {
                        typeUrl: string;
                        value: _40.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _40.MsgCreateValidator): {
                        typeUrl: string;
                        value: _40.MsgCreateValidator;
                    };
                    editValidator(value: _40.MsgEditValidator): {
                        typeUrl: string;
                        value: _40.MsgEditValidator;
                    };
                    delegate(value: _40.MsgDelegate): {
                        typeUrl: string;
                        value: _40.MsgDelegate;
                    };
                    beginRedelegate(value: _40.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _40.MsgBeginRedelegate;
                    };
                    undelegate(value: _40.MsgUndelegate): {
                        typeUrl: string;
                        value: _40.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _40.MsgCreateValidator) => _40.MsgCreateValidatorAmino;
                    fromAmino: (object: _40.MsgCreateValidatorAmino) => _40.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _40.MsgEditValidator) => _40.MsgEditValidatorAmino;
                    fromAmino: (object: _40.MsgEditValidatorAmino) => _40.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _40.MsgDelegate) => _40.MsgDelegateAmino;
                    fromAmino: (object: _40.MsgDelegateAmino) => _40.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _40.MsgBeginRedelegate) => _40.MsgBeginRedelegateAmino;
                    fromAmino: (object: _40.MsgBeginRedelegateAmino) => _40.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _40.MsgUndelegate) => _40.MsgUndelegateAmino;
                    fromAmino: (object: _40.MsgUndelegateAmino) => _40.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _40.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _40.MsgCreateValidator;
                fromAmino(object: _40.MsgCreateValidatorAmino): _40.MsgCreateValidator;
                toAmino(message: _40.MsgCreateValidator): _40.MsgCreateValidatorAmino;
                fromAminoMsg(object: _40.MsgCreateValidatorAminoMsg): _40.MsgCreateValidator;
                toAminoMsg(message: _40.MsgCreateValidator): _40.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _40.MsgCreateValidatorProtoMsg): _40.MsgCreateValidator;
                toProto(message: _40.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _40.MsgCreateValidator): _40.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _40.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgCreateValidatorResponse;
                fromPartial(_: {}): _40.MsgCreateValidatorResponse;
                fromAmino(_: _40.MsgCreateValidatorResponseAmino): _40.MsgCreateValidatorResponse;
                toAmino(_: _40.MsgCreateValidatorResponse): _40.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _40.MsgCreateValidatorResponseAminoMsg): _40.MsgCreateValidatorResponse;
                toAminoMsg(message: _40.MsgCreateValidatorResponse): _40.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _40.MsgCreateValidatorResponseProtoMsg): _40.MsgCreateValidatorResponse;
                toProto(message: _40.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _40.MsgCreateValidatorResponse): _40.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _40.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _40.MsgEditValidator;
                fromAmino(object: _40.MsgEditValidatorAmino): _40.MsgEditValidator;
                toAmino(message: _40.MsgEditValidator): _40.MsgEditValidatorAmino;
                fromAminoMsg(object: _40.MsgEditValidatorAminoMsg): _40.MsgEditValidator;
                toAminoMsg(message: _40.MsgEditValidator): _40.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _40.MsgEditValidatorProtoMsg): _40.MsgEditValidator;
                toProto(message: _40.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _40.MsgEditValidator): _40.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _40.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgEditValidatorResponse;
                fromPartial(_: {}): _40.MsgEditValidatorResponse;
                fromAmino(_: _40.MsgEditValidatorResponseAmino): _40.MsgEditValidatorResponse;
                toAmino(_: _40.MsgEditValidatorResponse): _40.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _40.MsgEditValidatorResponseAminoMsg): _40.MsgEditValidatorResponse;
                toAminoMsg(message: _40.MsgEditValidatorResponse): _40.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _40.MsgEditValidatorResponseProtoMsg): _40.MsgEditValidatorResponse;
                toProto(message: _40.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _40.MsgEditValidatorResponse): _40.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _40.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgDelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _40.MsgDelegate;
                fromAmino(object: _40.MsgDelegateAmino): _40.MsgDelegate;
                toAmino(message: _40.MsgDelegate): _40.MsgDelegateAmino;
                fromAminoMsg(object: _40.MsgDelegateAminoMsg): _40.MsgDelegate;
                toAminoMsg(message: _40.MsgDelegate): _40.MsgDelegateAminoMsg;
                fromProtoMsg(message: _40.MsgDelegateProtoMsg): _40.MsgDelegate;
                toProto(message: _40.MsgDelegate): Uint8Array;
                toProtoMsg(message: _40.MsgDelegate): _40.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _40.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgDelegateResponse;
                fromPartial(_: {}): _40.MsgDelegateResponse;
                fromAmino(_: _40.MsgDelegateResponseAmino): _40.MsgDelegateResponse;
                toAmino(_: _40.MsgDelegateResponse): _40.MsgDelegateResponseAmino;
                fromAminoMsg(object: _40.MsgDelegateResponseAminoMsg): _40.MsgDelegateResponse;
                toAminoMsg(message: _40.MsgDelegateResponse): _40.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _40.MsgDelegateResponseProtoMsg): _40.MsgDelegateResponse;
                toProto(message: _40.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _40.MsgDelegateResponse): _40.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _40.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgBeginRedelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _40.MsgBeginRedelegate;
                fromAmino(object: _40.MsgBeginRedelegateAmino): _40.MsgBeginRedelegate;
                toAmino(message: _40.MsgBeginRedelegate): _40.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _40.MsgBeginRedelegateAminoMsg): _40.MsgBeginRedelegate;
                toAminoMsg(message: _40.MsgBeginRedelegate): _40.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _40.MsgBeginRedelegateProtoMsg): _40.MsgBeginRedelegate;
                toProto(message: _40.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _40.MsgBeginRedelegate): _40.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _40.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgBeginRedelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _40.MsgBeginRedelegateResponse;
                fromAmino(object: _40.MsgBeginRedelegateResponseAmino): _40.MsgBeginRedelegateResponse;
                toAmino(message: _40.MsgBeginRedelegateResponse): _40.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _40.MsgBeginRedelegateResponseAminoMsg): _40.MsgBeginRedelegateResponse;
                toAminoMsg(message: _40.MsgBeginRedelegateResponse): _40.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _40.MsgBeginRedelegateResponseProtoMsg): _40.MsgBeginRedelegateResponse;
                toProto(message: _40.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _40.MsgBeginRedelegateResponse): _40.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _40.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUndelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _40.MsgUndelegate;
                fromAmino(object: _40.MsgUndelegateAmino): _40.MsgUndelegate;
                toAmino(message: _40.MsgUndelegate): _40.MsgUndelegateAmino;
                fromAminoMsg(object: _40.MsgUndelegateAminoMsg): _40.MsgUndelegate;
                toAminoMsg(message: _40.MsgUndelegate): _40.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _40.MsgUndelegateProtoMsg): _40.MsgUndelegate;
                toProto(message: _40.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _40.MsgUndelegate): _40.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _40.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUndelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _40.MsgUndelegateResponse;
                fromAmino(object: _40.MsgUndelegateResponseAmino): _40.MsgUndelegateResponse;
                toAmino(message: _40.MsgUndelegateResponse): _40.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _40.MsgUndelegateResponseAminoMsg): _40.MsgUndelegateResponse;
                toAminoMsg(message: _40.MsgUndelegateResponse): _40.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _40.MsgUndelegateResponseProtoMsg): _40.MsgUndelegateResponse;
                toProto(message: _40.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _40.MsgUndelegateResponse): _40.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _39.BondStatus;
            bondStatusToJSON(object: _39.BondStatus): string;
            BondStatus: typeof _39.BondStatus;
            BondStatusSDKType: typeof _39.BondStatus;
            BondStatusAmino: typeof _39.BondStatus;
            HistoricalInfo: {
                encode(message: _39.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.HistoricalInfo;
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
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _39.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _39.HistoricalInfo;
                fromAmino(object: _39.HistoricalInfoAmino): _39.HistoricalInfo;
                toAmino(message: _39.HistoricalInfo): _39.HistoricalInfoAmino;
                fromAminoMsg(object: _39.HistoricalInfoAminoMsg): _39.HistoricalInfo;
                toAminoMsg(message: _39.HistoricalInfo): _39.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _39.HistoricalInfoProtoMsg): _39.HistoricalInfo;
                toProto(message: _39.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _39.HistoricalInfo): _39.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _39.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CommissionRates;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _39.CommissionRates;
                fromAmino(object: _39.CommissionRatesAmino): _39.CommissionRates;
                toAmino(message: _39.CommissionRates): _39.CommissionRatesAmino;
                fromAminoMsg(object: _39.CommissionRatesAminoMsg): _39.CommissionRates;
                toAminoMsg(message: _39.CommissionRates): _39.CommissionRatesAminoMsg;
                fromProtoMsg(message: _39.CommissionRatesProtoMsg): _39.CommissionRates;
                toProto(message: _39.CommissionRates): Uint8Array;
                toProtoMsg(message: _39.CommissionRates): _39.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _39.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Commission;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _39.Commission;
                fromAmino(object: _39.CommissionAmino): _39.Commission;
                toAmino(message: _39.Commission): _39.CommissionAmino;
                fromAminoMsg(object: _39.CommissionAminoMsg): _39.Commission;
                toAminoMsg(message: _39.Commission): _39.CommissionAminoMsg;
                fromProtoMsg(message: _39.CommissionProtoMsg): _39.Commission;
                toProto(message: _39.Commission): Uint8Array;
                toProtoMsg(message: _39.Commission): _39.CommissionProtoMsg;
            };
            Description: {
                encode(message: _39.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Description;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _39.Description;
                fromAmino(object: _39.DescriptionAmino): _39.Description;
                toAmino(message: _39.Description): _39.DescriptionAmino;
                fromAminoMsg(object: _39.DescriptionAminoMsg): _39.Description;
                toAminoMsg(message: _39.Description): _39.DescriptionAminoMsg;
                fromProtoMsg(message: _39.DescriptionProtoMsg): _39.Description;
                toProto(message: _39.Description): Uint8Array;
                toProtoMsg(message: _39.Description): _39.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _39.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Validator;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _39.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: string | number | import("long").Long;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _39.Validator;
                fromAmino(object: _39.ValidatorAmino): _39.Validator;
                toAmino(message: _39.Validator): _39.ValidatorAmino;
                fromAminoMsg(object: _39.ValidatorAminoMsg): _39.Validator;
                toAminoMsg(message: _39.Validator): _39.ValidatorAminoMsg;
                fromProtoMsg(message: _39.ValidatorProtoMsg): _39.Validator;
                toProto(message: _39.Validator): Uint8Array;
                toProtoMsg(message: _39.Validator): _39.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _39.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValAddresses;
                fromPartial(object: {
                    addresses?: string[];
                }): _39.ValAddresses;
                fromAmino(object: _39.ValAddressesAmino): _39.ValAddresses;
                toAmino(message: _39.ValAddresses): _39.ValAddressesAmino;
                fromAminoMsg(object: _39.ValAddressesAminoMsg): _39.ValAddresses;
                toAminoMsg(message: _39.ValAddresses): _39.ValAddressesAminoMsg;
                fromProtoMsg(message: _39.ValAddressesProtoMsg): _39.ValAddresses;
                toProto(message: _39.ValAddresses): Uint8Array;
                toProtoMsg(message: _39.ValAddresses): _39.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _39.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DVPair;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _39.DVPair;
                fromAmino(object: _39.DVPairAmino): _39.DVPair;
                toAmino(message: _39.DVPair): _39.DVPairAmino;
                fromAminoMsg(object: _39.DVPairAminoMsg): _39.DVPair;
                toAminoMsg(message: _39.DVPair): _39.DVPairAminoMsg;
                fromProtoMsg(message: _39.DVPairProtoMsg): _39.DVPair;
                toProto(message: _39.DVPair): Uint8Array;
                toProtoMsg(message: _39.DVPair): _39.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _39.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _39.DVPairs;
                fromAmino(object: _39.DVPairsAmino): _39.DVPairs;
                toAmino(message: _39.DVPairs): _39.DVPairsAmino;
                fromAminoMsg(object: _39.DVPairsAminoMsg): _39.DVPairs;
                toAminoMsg(message: _39.DVPairs): _39.DVPairsAminoMsg;
                fromProtoMsg(message: _39.DVPairsProtoMsg): _39.DVPairs;
                toProto(message: _39.DVPairs): Uint8Array;
                toProtoMsg(message: _39.DVPairs): _39.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _39.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DVVTriplet;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _39.DVVTriplet;
                fromAmino(object: _39.DVVTripletAmino): _39.DVVTriplet;
                toAmino(message: _39.DVVTriplet): _39.DVVTripletAmino;
                fromAminoMsg(object: _39.DVVTripletAminoMsg): _39.DVVTriplet;
                toAminoMsg(message: _39.DVVTriplet): _39.DVVTripletAminoMsg;
                fromProtoMsg(message: _39.DVVTripletProtoMsg): _39.DVVTriplet;
                toProto(message: _39.DVVTriplet): Uint8Array;
                toProtoMsg(message: _39.DVVTriplet): _39.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _39.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _39.DVVTriplets;
                fromAmino(object: _39.DVVTripletsAmino): _39.DVVTriplets;
                toAmino(message: _39.DVVTriplets): _39.DVVTripletsAmino;
                fromAminoMsg(object: _39.DVVTripletsAminoMsg): _39.DVVTriplets;
                toAminoMsg(message: _39.DVVTriplets): _39.DVVTripletsAminoMsg;
                fromProtoMsg(message: _39.DVVTripletsProtoMsg): _39.DVVTriplets;
                toProto(message: _39.DVVTriplets): Uint8Array;
                toProtoMsg(message: _39.DVVTriplets): _39.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _39.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Delegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _39.Delegation;
                fromAmino(object: _39.DelegationAmino): _39.Delegation;
                toAmino(message: _39.Delegation): _39.DelegationAmino;
                fromAminoMsg(object: _39.DelegationAminoMsg): _39.Delegation;
                toAminoMsg(message: _39.Delegation): _39.DelegationAminoMsg;
                fromProtoMsg(message: _39.DelegationProtoMsg): _39.Delegation;
                toProto(message: _39.Delegation): Uint8Array;
                toProtoMsg(message: _39.Delegation): _39.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _39.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.UnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long").Long;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _39.UnbondingDelegation;
                fromAmino(object: _39.UnbondingDelegationAmino): _39.UnbondingDelegation;
                toAmino(message: _39.UnbondingDelegation): _39.UnbondingDelegationAmino;
                fromAminoMsg(object: _39.UnbondingDelegationAminoMsg): _39.UnbondingDelegation;
                toAminoMsg(message: _39.UnbondingDelegation): _39.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _39.UnbondingDelegationProtoMsg): _39.UnbondingDelegation;
                toProto(message: _39.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _39.UnbondingDelegation): _39.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _39.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.UnbondingDelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").Long;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _39.UnbondingDelegationEntry;
                fromAmino(object: _39.UnbondingDelegationEntryAmino): _39.UnbondingDelegationEntry;
                toAmino(message: _39.UnbondingDelegationEntry): _39.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _39.UnbondingDelegationEntryAminoMsg): _39.UnbondingDelegationEntry;
                toAminoMsg(message: _39.UnbondingDelegationEntry): _39.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _39.UnbondingDelegationEntryProtoMsg): _39.UnbondingDelegationEntry;
                toProto(message: _39.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _39.UnbondingDelegationEntry): _39.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _39.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.RedelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").Long;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _39.RedelegationEntry;
                fromAmino(object: _39.RedelegationEntryAmino): _39.RedelegationEntry;
                toAmino(message: _39.RedelegationEntry): _39.RedelegationEntryAmino;
                fromAminoMsg(object: _39.RedelegationEntryAminoMsg): _39.RedelegationEntry;
                toAminoMsg(message: _39.RedelegationEntry): _39.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _39.RedelegationEntryProtoMsg): _39.RedelegationEntry;
                toProto(message: _39.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _39.RedelegationEntry): _39.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _39.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Redelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long").Long;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _39.Redelegation;
                fromAmino(object: _39.RedelegationAmino): _39.Redelegation;
                toAmino(message: _39.Redelegation): _39.RedelegationAmino;
                fromAminoMsg(object: _39.RedelegationAminoMsg): _39.Redelegation;
                toAminoMsg(message: _39.Redelegation): _39.RedelegationAminoMsg;
                fromProtoMsg(message: _39.RedelegationProtoMsg): _39.Redelegation;
                toProto(message: _39.Redelegation): Uint8Array;
                toProtoMsg(message: _39.Redelegation): _39.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Params;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minGlobalSelfDelegation?: string;
                }): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                toAminoMsg(message: _39.Params): _39.ParamsAminoMsg;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _39.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _39.DelegationResponse;
                fromAmino(object: _39.DelegationResponseAmino): _39.DelegationResponse;
                toAmino(message: _39.DelegationResponse): _39.DelegationResponseAmino;
                fromAminoMsg(object: _39.DelegationResponseAminoMsg): _39.DelegationResponse;
                toAminoMsg(message: _39.DelegationResponse): _39.DelegationResponseAminoMsg;
                fromProtoMsg(message: _39.DelegationResponseProtoMsg): _39.DelegationResponse;
                toProto(message: _39.DelegationResponse): Uint8Array;
                toProtoMsg(message: _39.DelegationResponse): _39.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _39.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: string | number | import("long").Long;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _39.RedelegationEntryResponse;
                fromAmino(object: _39.RedelegationEntryResponseAmino): _39.RedelegationEntryResponse;
                toAmino(message: _39.RedelegationEntryResponse): _39.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _39.RedelegationEntryResponseAminoMsg): _39.RedelegationEntryResponse;
                toAminoMsg(message: _39.RedelegationEntryResponse): _39.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _39.RedelegationEntryResponseProtoMsg): _39.RedelegationEntryResponse;
                toProto(message: _39.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _39.RedelegationEntryResponse): _39.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _39.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _39.RedelegationResponse;
                fromAmino(object: _39.RedelegationResponseAmino): _39.RedelegationResponse;
                toAmino(message: _39.RedelegationResponse): _39.RedelegationResponseAmino;
                fromAminoMsg(object: _39.RedelegationResponseAminoMsg): _39.RedelegationResponse;
                toAminoMsg(message: _39.RedelegationResponse): _39.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _39.RedelegationResponseProtoMsg): _39.RedelegationResponse;
                toProto(message: _39.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _39.RedelegationResponse): _39.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _39.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Pool;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _39.Pool;
                fromAmino(object: _39.PoolAmino): _39.Pool;
                toAmino(message: _39.Pool): _39.PoolAmino;
                fromAminoMsg(object: _39.PoolAminoMsg): _39.Pool;
                toAminoMsg(message: _39.Pool): _39.PoolAminoMsg;
                fromProtoMsg(message: _39.PoolProtoMsg): _39.Pool;
                toProto(message: _39.Pool): Uint8Array;
                toProtoMsg(message: _39.Pool): _39.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _38.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryValidatorsRequest;
                fromAmino(object: _38.QueryValidatorsRequestAmino): _38.QueryValidatorsRequest;
                toAmino(message: _38.QueryValidatorsRequest): _38.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorsRequestAminoMsg): _38.QueryValidatorsRequest;
                toAminoMsg(message: _38.QueryValidatorsRequest): _38.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorsRequestProtoMsg): _38.QueryValidatorsRequest;
                toProto(message: _38.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorsRequest): _38.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _38.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _39.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _38.QueryValidatorsResponse;
                fromAmino(object: _38.QueryValidatorsResponseAmino): _38.QueryValidatorsResponse;
                toAmino(message: _38.QueryValidatorsResponse): _38.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorsResponseAminoMsg): _38.QueryValidatorsResponse;
                toAminoMsg(message: _38.QueryValidatorsResponse): _38.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorsResponseProtoMsg): _38.QueryValidatorsResponse;
                toProto(message: _38.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorsResponse): _38.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _38.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _38.QueryValidatorRequest;
                fromAmino(object: _38.QueryValidatorRequestAmino): _38.QueryValidatorRequest;
                toAmino(message: _38.QueryValidatorRequest): _38.QueryValidatorRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorRequestAminoMsg): _38.QueryValidatorRequest;
                toAminoMsg(message: _38.QueryValidatorRequest): _38.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorRequestProtoMsg): _38.QueryValidatorRequest;
                toProto(message: _38.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorRequest): _38.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _38.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _39.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _38.QueryValidatorResponse;
                fromAmino(object: _38.QueryValidatorResponseAmino): _38.QueryValidatorResponse;
                toAmino(message: _38.QueryValidatorResponse): _38.QueryValidatorResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorResponseAminoMsg): _38.QueryValidatorResponse;
                toAminoMsg(message: _38.QueryValidatorResponse): _38.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorResponseProtoMsg): _38.QueryValidatorResponse;
                toProto(message: _38.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorResponse): _38.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _38.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryValidatorDelegationsRequest;
                fromAmino(object: _38.QueryValidatorDelegationsRequestAmino): _38.QueryValidatorDelegationsRequest;
                toAmino(message: _38.QueryValidatorDelegationsRequest): _38.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorDelegationsRequestAminoMsg): _38.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _38.QueryValidatorDelegationsRequest): _38.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorDelegationsRequestProtoMsg): _38.QueryValidatorDelegationsRequest;
                toProto(message: _38.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorDelegationsRequest): _38.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _38.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _38.QueryValidatorDelegationsResponse;
                fromAmino(object: _38.QueryValidatorDelegationsResponseAmino): _38.QueryValidatorDelegationsResponse;
                toAmino(message: _38.QueryValidatorDelegationsResponse): _38.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorDelegationsResponseAminoMsg): _38.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _38.QueryValidatorDelegationsResponse): _38.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorDelegationsResponseProtoMsg): _38.QueryValidatorDelegationsResponse;
                toProto(message: _38.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorDelegationsResponse): _38.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _38.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _38.QueryValidatorUnbondingDelegationsRequestAmino): _38.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _38.QueryValidatorUnbondingDelegationsRequest): _38.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorUnbondingDelegationsRequestAminoMsg): _38.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _38.QueryValidatorUnbondingDelegationsRequest): _38.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorUnbondingDelegationsRequestProtoMsg): _38.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _38.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorUnbondingDelegationsRequest): _38.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _38.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _38.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _38.QueryValidatorUnbondingDelegationsResponseAmino): _38.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _38.QueryValidatorUnbondingDelegationsResponse): _38.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorUnbondingDelegationsResponseAminoMsg): _38.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _38.QueryValidatorUnbondingDelegationsResponse): _38.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorUnbondingDelegationsResponseProtoMsg): _38.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _38.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorUnbondingDelegationsResponse): _38.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _38.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _38.QueryDelegationRequest;
                fromAmino(object: _38.QueryDelegationRequestAmino): _38.QueryDelegationRequest;
                toAmino(message: _38.QueryDelegationRequest): _38.QueryDelegationRequestAmino;
                fromAminoMsg(object: _38.QueryDelegationRequestAminoMsg): _38.QueryDelegationRequest;
                toAminoMsg(message: _38.QueryDelegationRequest): _38.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegationRequestProtoMsg): _38.QueryDelegationRequest;
                toProto(message: _38.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegationRequest): _38.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _38.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegationResponse;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _38.QueryDelegationResponse;
                fromAmino(object: _38.QueryDelegationResponseAmino): _38.QueryDelegationResponse;
                toAmino(message: _38.QueryDelegationResponse): _38.QueryDelegationResponseAmino;
                fromAminoMsg(object: _38.QueryDelegationResponseAminoMsg): _38.QueryDelegationResponse;
                toAminoMsg(message: _38.QueryDelegationResponse): _38.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegationResponseProtoMsg): _38.QueryDelegationResponse;
                toProto(message: _38.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegationResponse): _38.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _38.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _38.QueryUnbondingDelegationRequest;
                fromAmino(object: _38.QueryUnbondingDelegationRequestAmino): _38.QueryUnbondingDelegationRequest;
                toAmino(message: _38.QueryUnbondingDelegationRequest): _38.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _38.QueryUnbondingDelegationRequestAminoMsg): _38.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _38.QueryUnbondingDelegationRequest): _38.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _38.QueryUnbondingDelegationRequestProtoMsg): _38.QueryUnbondingDelegationRequest;
                toProto(message: _38.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _38.QueryUnbondingDelegationRequest): _38.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _38.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryUnbondingDelegationResponse;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _38.QueryUnbondingDelegationResponse;
                fromAmino(object: _38.QueryUnbondingDelegationResponseAmino): _38.QueryUnbondingDelegationResponse;
                toAmino(message: _38.QueryUnbondingDelegationResponse): _38.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _38.QueryUnbondingDelegationResponseAminoMsg): _38.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _38.QueryUnbondingDelegationResponse): _38.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _38.QueryUnbondingDelegationResponseProtoMsg): _38.QueryUnbondingDelegationResponse;
                toProto(message: _38.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _38.QueryUnbondingDelegationResponse): _38.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _38.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryDelegatorDelegationsRequest;
                fromAmino(object: _38.QueryDelegatorDelegationsRequestAmino): _38.QueryDelegatorDelegationsRequest;
                toAmino(message: _38.QueryDelegatorDelegationsRequest): _38.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorDelegationsRequestAminoMsg): _38.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _38.QueryDelegatorDelegationsRequest): _38.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorDelegationsRequestProtoMsg): _38.QueryDelegatorDelegationsRequest;
                toProto(message: _38.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorDelegationsRequest): _38.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _38.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _38.QueryDelegatorDelegationsResponse;
                fromAmino(object: _38.QueryDelegatorDelegationsResponseAmino): _38.QueryDelegatorDelegationsResponse;
                toAmino(message: _38.QueryDelegatorDelegationsResponse): _38.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorDelegationsResponseAminoMsg): _38.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _38.QueryDelegatorDelegationsResponse): _38.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorDelegationsResponseProtoMsg): _38.QueryDelegatorDelegationsResponse;
                toProto(message: _38.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorDelegationsResponse): _38.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _38.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _38.QueryDelegatorUnbondingDelegationsRequestAmino): _38.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _38.QueryDelegatorUnbondingDelegationsRequest): _38.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _38.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _38.QueryDelegatorUnbondingDelegationsRequest): _38.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _38.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _38.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsRequest): _38.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _38.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _38.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _38.QueryDelegatorUnbondingDelegationsResponseAmino): _38.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _38.QueryDelegatorUnbondingDelegationsResponse): _38.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _38.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _38.QueryDelegatorUnbondingDelegationsResponse): _38.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _38.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _38.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsResponse): _38.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _38.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryRedelegationsRequest;
                fromAmino(object: _38.QueryRedelegationsRequestAmino): _38.QueryRedelegationsRequest;
                toAmino(message: _38.QueryRedelegationsRequest): _38.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryRedelegationsRequestAminoMsg): _38.QueryRedelegationsRequest;
                toAminoMsg(message: _38.QueryRedelegationsRequest): _38.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryRedelegationsRequestProtoMsg): _38.QueryRedelegationsRequest;
                toProto(message: _38.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryRedelegationsRequest): _38.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _38.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryRedelegationsResponse;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: string | number | import("long").Long;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: string | number | import("long").Long;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _38.QueryRedelegationsResponse;
                fromAmino(object: _38.QueryRedelegationsResponseAmino): _38.QueryRedelegationsResponse;
                toAmino(message: _38.QueryRedelegationsResponse): _38.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryRedelegationsResponseAminoMsg): _38.QueryRedelegationsResponse;
                toAminoMsg(message: _38.QueryRedelegationsResponse): _38.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryRedelegationsResponseProtoMsg): _38.QueryRedelegationsResponse;
                toProto(message: _38.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryRedelegationsResponse): _38.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _38.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryDelegatorValidatorsRequest;
                fromAmino(object: _38.QueryDelegatorValidatorsRequestAmino): _38.QueryDelegatorValidatorsRequest;
                toAmino(message: _38.QueryDelegatorValidatorsRequest): _38.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorsRequestAminoMsg): _38.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _38.QueryDelegatorValidatorsRequest): _38.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorsRequestProtoMsg): _38.QueryDelegatorValidatorsRequest;
                toProto(message: _38.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorsRequest): _38.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _38.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _39.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _38.QueryDelegatorValidatorsResponse;
                fromAmino(object: _38.QueryDelegatorValidatorsResponseAmino): _38.QueryDelegatorValidatorsResponse;
                toAmino(message: _38.QueryDelegatorValidatorsResponse): _38.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorsResponseAminoMsg): _38.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _38.QueryDelegatorValidatorsResponse): _38.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorsResponseProtoMsg): _38.QueryDelegatorValidatorsResponse;
                toProto(message: _38.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorsResponse): _38.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _38.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _38.QueryDelegatorValidatorRequest;
                fromAmino(object: _38.QueryDelegatorValidatorRequestAmino): _38.QueryDelegatorValidatorRequest;
                toAmino(message: _38.QueryDelegatorValidatorRequest): _38.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorRequestAminoMsg): _38.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _38.QueryDelegatorValidatorRequest): _38.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorRequestProtoMsg): _38.QueryDelegatorValidatorRequest;
                toProto(message: _38.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorRequest): _38.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _38.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryDelegatorValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _39.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _38.QueryDelegatorValidatorResponse;
                fromAmino(object: _38.QueryDelegatorValidatorResponseAmino): _38.QueryDelegatorValidatorResponse;
                toAmino(message: _38.QueryDelegatorValidatorResponse): _38.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorResponseAminoMsg): _38.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _38.QueryDelegatorValidatorResponse): _38.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorResponseProtoMsg): _38.QueryDelegatorValidatorResponse;
                toProto(message: _38.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorResponse): _38.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _38.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: string | number | import("long").Long;
                }): _38.QueryHistoricalInfoRequest;
                fromAmino(object: _38.QueryHistoricalInfoRequestAmino): _38.QueryHistoricalInfoRequest;
                toAmino(message: _38.QueryHistoricalInfoRequest): _38.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _38.QueryHistoricalInfoRequestAminoMsg): _38.QueryHistoricalInfoRequest;
                toAminoMsg(message: _38.QueryHistoricalInfoRequest): _38.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _38.QueryHistoricalInfoRequestProtoMsg): _38.QueryHistoricalInfoRequest;
                toProto(message: _38.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _38.QueryHistoricalInfoRequest): _38.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _38.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryHistoricalInfoResponse;
                fromPartial(object: {
                    hist?: {
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
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _39.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: string | number | import("long").Long;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _38.QueryHistoricalInfoResponse;
                fromAmino(object: _38.QueryHistoricalInfoResponseAmino): _38.QueryHistoricalInfoResponse;
                toAmino(message: _38.QueryHistoricalInfoResponse): _38.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _38.QueryHistoricalInfoResponseAminoMsg): _38.QueryHistoricalInfoResponse;
                toAminoMsg(message: _38.QueryHistoricalInfoResponse): _38.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _38.QueryHistoricalInfoResponseProtoMsg): _38.QueryHistoricalInfoResponse;
                toProto(message: _38.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _38.QueryHistoricalInfoResponse): _38.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _38.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryPoolRequest;
                fromPartial(_: {}): _38.QueryPoolRequest;
                fromAmino(_: _38.QueryPoolRequestAmino): _38.QueryPoolRequest;
                toAmino(_: _38.QueryPoolRequest): _38.QueryPoolRequestAmino;
                fromAminoMsg(object: _38.QueryPoolRequestAminoMsg): _38.QueryPoolRequest;
                toAminoMsg(message: _38.QueryPoolRequest): _38.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _38.QueryPoolRequestProtoMsg): _38.QueryPoolRequest;
                toProto(message: _38.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _38.QueryPoolRequest): _38.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _38.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _38.QueryPoolResponse;
                fromAmino(object: _38.QueryPoolResponseAmino): _38.QueryPoolResponse;
                toAmino(message: _38.QueryPoolResponse): _38.QueryPoolResponseAmino;
                fromAminoMsg(object: _38.QueryPoolResponseAminoMsg): _38.QueryPoolResponse;
                toAminoMsg(message: _38.QueryPoolResponse): _38.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _38.QueryPoolResponseProtoMsg): _38.QueryPoolResponse;
                toProto(message: _38.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _38.QueryPoolResponse): _38.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _38.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsRequest;
                fromPartial(_: {}): _38.QueryParamsRequest;
                fromAmino(_: _38.QueryParamsRequestAmino): _38.QueryParamsRequest;
                toAmino(_: _38.QueryParamsRequest): _38.QueryParamsRequestAmino;
                fromAminoMsg(object: _38.QueryParamsRequestAminoMsg): _38.QueryParamsRequest;
                toAminoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryParamsRequestProtoMsg): _38.QueryParamsRequest;
                toProto(message: _38.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _38.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minGlobalSelfDelegation?: string;
                    };
                }): _38.QueryParamsResponse;
                fromAmino(object: _38.QueryParamsResponseAmino): _38.QueryParamsResponse;
                toAmino(message: _38.QueryParamsResponse): _38.QueryParamsResponseAmino;
                fromAminoMsg(object: _38.QueryParamsResponseAminoMsg): _38.QueryParamsResponse;
                toAminoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryParamsResponseProtoMsg): _38.QueryParamsResponse;
                toProto(message: _38.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minGlobalSelfDelegation?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: string | number | import("long").Long;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _39.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _37.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.LastValidatorPower;
                fromPartial(object: {
                    address?: string;
                    power?: string | number | import("long").Long;
                }): _37.LastValidatorPower;
                fromAmino(object: _37.LastValidatorPowerAmino): _37.LastValidatorPower;
                toAmino(message: _37.LastValidatorPower): _37.LastValidatorPowerAmino;
                fromAminoMsg(object: _37.LastValidatorPowerAminoMsg): _37.LastValidatorPower;
                toAminoMsg(message: _37.LastValidatorPower): _37.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _37.LastValidatorPowerProtoMsg): _37.LastValidatorPower;
                toProto(message: _37.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _37.LastValidatorPower): _37.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _36.AuthorizationType;
            authorizationTypeToJSON(object: _36.AuthorizationType): string;
            AuthorizationType: typeof _36.AuthorizationType;
            AuthorizationTypeSDKType: typeof _36.AuthorizationType;
            AuthorizationTypeAmino: typeof _36.AuthorizationType;
            StakeAuthorization: {
                encode(message: _36.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.StakeAuthorization;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _36.AuthorizationType;
                }): _36.StakeAuthorization;
                fromAmino(object: _36.StakeAuthorizationAmino): _36.StakeAuthorization;
                toAmino(message: _36.StakeAuthorization): _36.StakeAuthorizationAmino;
                fromAminoMsg(object: _36.StakeAuthorizationAminoMsg): _36.StakeAuthorization;
                toAminoMsg(message: _36.StakeAuthorization): _36.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _36.StakeAuthorizationProtoMsg): _36.StakeAuthorization;
                toProto(message: _36.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _36.StakeAuthorization): _36.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _36.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[];
                }): _36.StakeAuthorization_Validators;
                fromAmino(object: _36.StakeAuthorization_ValidatorsAmino): _36.StakeAuthorization_Validators;
                toAmino(message: _36.StakeAuthorization_Validators): _36.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _36.StakeAuthorization_ValidatorsAminoMsg): _36.StakeAuthorization_Validators;
                toAminoMsg(message: _36.StakeAuthorization_Validators): _36.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _36.StakeAuthorization_ValidatorsProtoMsg): _36.StakeAuthorization_Validators;
                toProto(message: _36.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _36.StakeAuthorization_Validators): _36.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _41.SignMode;
                signModeToJSON(object: _41.SignMode): string;
                SignMode: typeof _41.SignMode;
                SignModeSDKType: typeof _41.SignMode;
                SignModeAmino: typeof _41.SignMode;
                SignatureDescriptors: {
                    encode(message: _41.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _41.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: string | number | import("long").Long;
                        }[];
                    }): _41.SignatureDescriptors;
                    fromAmino(object: _41.SignatureDescriptorsAmino): _41.SignatureDescriptors;
                    toAmino(message: _41.SignatureDescriptors): _41.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _41.SignatureDescriptorsAminoMsg): _41.SignatureDescriptors;
                    toAminoMsg(message: _41.SignatureDescriptors): _41.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptorsProtoMsg): _41.SignatureDescriptors;
                    toProto(message: _41.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptors): _41.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _41.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptor;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _41.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: string | number | import("long").Long;
                    }): _41.SignatureDescriptor;
                    fromAmino(object: _41.SignatureDescriptorAmino): _41.SignatureDescriptor;
                    toAmino(message: _41.SignatureDescriptor): _41.SignatureDescriptorAmino;
                    fromAminoMsg(object: _41.SignatureDescriptorAminoMsg): _41.SignatureDescriptor;
                    toAminoMsg(message: _41.SignatureDescriptor): _41.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptorProtoMsg): _41.SignatureDescriptor;
                    toProto(message: _41.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptor): _41.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _41.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _41.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _41.SignatureDescriptor_Data;
                    fromAmino(object: _41.SignatureDescriptor_DataAmino): _41.SignatureDescriptor_Data;
                    toAmino(message: _41.SignatureDescriptor_Data): _41.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _41.SignatureDescriptor_DataAminoMsg): _41.SignatureDescriptor_Data;
                    toAminoMsg(message: _41.SignatureDescriptor_Data): _41.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptor_DataProtoMsg): _41.SignatureDescriptor_Data;
                    toProto(message: _41.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptor_Data): _41.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _41.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _41.SignMode;
                        signature?: Uint8Array;
                    }): _41.SignatureDescriptor_Data_Single;
                    fromAmino(object: _41.SignatureDescriptor_Data_SingleAmino): _41.SignatureDescriptor_Data_Single;
                    toAmino(message: _41.SignatureDescriptor_Data_Single): _41.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _41.SignatureDescriptor_Data_SingleAminoMsg): _41.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _41.SignatureDescriptor_Data_Single): _41.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptor_Data_SingleProtoMsg): _41.SignatureDescriptor_Data_Single;
                    toProto(message: _41.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptor_Data_Single): _41.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _41.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: {
                            single?: {
                                mode?: _41.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: any;
                        }[];
                    }): _41.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _41.SignatureDescriptor_Data_MultiAmino): _41.SignatureDescriptor_Data_Multi;
                    toAmino(message: _41.SignatureDescriptor_Data_Multi): _41.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _41.SignatureDescriptor_Data_MultiAminoMsg): _41.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _41.SignatureDescriptor_Data_Multi): _41.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _41.SignatureDescriptor_Data_MultiProtoMsg): _41.SignatureDescriptor_Data_Multi;
                    toProto(message: _41.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _41.SignatureDescriptor_Data_Multi): _41.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _104.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _42.SimulateRequest): Promise<_42.SimulateResponse>;
                getTx(request: _42.GetTxRequest): Promise<_42.GetTxResponse>;
                broadcastTx(request: _42.BroadcastTxRequest): Promise<_42.BroadcastTxResponse>;
                getTxsEvent(request: _42.GetTxsEventRequest): Promise<_42.GetTxsEventResponse>;
            };
            Tx: {
                encode(message: _43.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: string | number | import("long").Long;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _41.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: string | number | import("long").Long;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: string | number | import("long").Long;
                            payer?: string;
                            granter?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _43.Tx;
                fromAmino(object: _43.TxAmino): _43.Tx;
                toAmino(message: _43.Tx): _43.TxAmino;
                fromAminoMsg(object: _43.TxAminoMsg): _43.Tx;
                toAminoMsg(message: _43.Tx): _43.TxAminoMsg;
                fromProtoMsg(message: _43.TxProtoMsg): _43.Tx;
                toProto(message: _43.Tx): Uint8Array;
                toProtoMsg(message: _43.Tx): _43.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _43.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.TxRaw;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _43.TxRaw;
                fromAmino(object: _43.TxRawAmino): _43.TxRaw;
                toAmino(message: _43.TxRaw): _43.TxRawAmino;
                fromAminoMsg(object: _43.TxRawAminoMsg): _43.TxRaw;
                toAminoMsg(message: _43.TxRaw): _43.TxRawAminoMsg;
                fromProtoMsg(message: _43.TxRawProtoMsg): _43.TxRaw;
                toProto(message: _43.TxRaw): Uint8Array;
                toProtoMsg(message: _43.TxRaw): _43.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _43.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignDoc;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: string | number | import("long").Long;
                }): _43.SignDoc;
                fromAmino(object: _43.SignDocAmino): _43.SignDoc;
                toAmino(message: _43.SignDoc): _43.SignDocAmino;
                fromAminoMsg(object: _43.SignDocAminoMsg): _43.SignDoc;
                toAminoMsg(message: _43.SignDoc): _43.SignDocAminoMsg;
                fromProtoMsg(message: _43.SignDocProtoMsg): _43.SignDoc;
                toProto(message: _43.SignDoc): Uint8Array;
                toProtoMsg(message: _43.SignDoc): _43.SignDocProtoMsg;
            };
            TxBody: {
                encode(message: _43.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.TxBody;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: string | number | import("long").Long;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _43.TxBody;
                fromAmino(object: _43.TxBodyAmino): _43.TxBody;
                toAmino(message: _43.TxBody): _43.TxBodyAmino;
                fromAminoMsg(object: _43.TxBodyAminoMsg): _43.TxBody;
                toAminoMsg(message: _43.TxBody): _43.TxBodyAminoMsg;
                fromProtoMsg(message: _43.TxBodyProtoMsg): _43.TxBody;
                toProto(message: _43.TxBody): Uint8Array;
                toProtoMsg(message: _43.TxBody): _43.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _43.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.AuthInfo;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _41.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: string | number | import("long").Long;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: string | number | import("long").Long;
                        payer?: string;
                        granter?: string;
                    };
                }): _43.AuthInfo;
                fromAmino(object: _43.AuthInfoAmino): _43.AuthInfo;
                toAmino(message: _43.AuthInfo): _43.AuthInfoAmino;
                fromAminoMsg(object: _43.AuthInfoAminoMsg): _43.AuthInfo;
                toAminoMsg(message: _43.AuthInfo): _43.AuthInfoAminoMsg;
                fromProtoMsg(message: _43.AuthInfoProtoMsg): _43.AuthInfo;
                toProto(message: _43.AuthInfo): Uint8Array;
                toProtoMsg(message: _43.AuthInfo): _43.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _43.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignerInfo;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _41.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: string | number | import("long").Long;
                }): _43.SignerInfo;
                fromAmino(object: _43.SignerInfoAmino): _43.SignerInfo;
                toAmino(message: _43.SignerInfo): _43.SignerInfoAmino;
                fromAminoMsg(object: _43.SignerInfoAminoMsg): _43.SignerInfo;
                toAminoMsg(message: _43.SignerInfo): _43.SignerInfoAminoMsg;
                fromProtoMsg(message: _43.SignerInfoProtoMsg): _43.SignerInfo;
                toProto(message: _43.SignerInfo): Uint8Array;
                toProtoMsg(message: _43.SignerInfo): _43.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _43.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _41.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _43.ModeInfo;
                fromAmino(object: _43.ModeInfoAmino): _43.ModeInfo;
                toAmino(message: _43.ModeInfo): _43.ModeInfoAmino;
                fromAminoMsg(object: _43.ModeInfoAminoMsg): _43.ModeInfo;
                toAminoMsg(message: _43.ModeInfo): _43.ModeInfoAminoMsg;
                fromProtoMsg(message: _43.ModeInfoProtoMsg): _43.ModeInfo;
                toProto(message: _43.ModeInfo): Uint8Array;
                toProtoMsg(message: _43.ModeInfo): _43.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _43.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _41.SignMode;
                }): _43.ModeInfo_Single;
                fromAmino(object: _43.ModeInfo_SingleAmino): _43.ModeInfo_Single;
                toAmino(message: _43.ModeInfo_Single): _43.ModeInfo_SingleAmino;
                fromAminoMsg(object: _43.ModeInfo_SingleAminoMsg): _43.ModeInfo_Single;
                toAminoMsg(message: _43.ModeInfo_Single): _43.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _43.ModeInfo_SingleProtoMsg): _43.ModeInfo_Single;
                toProto(message: _43.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _43.ModeInfo_Single): _43.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _43.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: {
                        single?: {
                            mode?: _41.SignMode;
                        };
                        multi?: any;
                    }[];
                }): _43.ModeInfo_Multi;
                fromAmino(object: _43.ModeInfo_MultiAmino): _43.ModeInfo_Multi;
                toAmino(message: _43.ModeInfo_Multi): _43.ModeInfo_MultiAmino;
                fromAminoMsg(object: _43.ModeInfo_MultiAminoMsg): _43.ModeInfo_Multi;
                toAminoMsg(message: _43.ModeInfo_Multi): _43.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _43.ModeInfo_MultiProtoMsg): _43.ModeInfo_Multi;
                toProto(message: _43.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _43.ModeInfo_Multi): _43.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _43.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: string | number | import("long").Long;
                    payer?: string;
                    granter?: string;
                }): _43.Fee;
                fromAmino(object: _43.FeeAmino): _43.Fee;
                toAmino(message: _43.Fee): _43.FeeAmino;
                fromAminoMsg(object: _43.FeeAminoMsg): _43.Fee;
                toAminoMsg(message: _43.Fee): _43.FeeAminoMsg;
                fromProtoMsg(message: _43.FeeProtoMsg): _43.Fee;
                toProto(message: _43.Fee): Uint8Array;
                toProtoMsg(message: _43.Fee): _43.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _42.OrderBy;
            orderByToJSON(object: _42.OrderBy): string;
            broadcastModeFromJSON(object: any): _42.BroadcastMode;
            broadcastModeToJSON(object: _42.BroadcastMode): string;
            OrderBy: typeof _42.OrderBy;
            OrderBySDKType: typeof _42.OrderBy;
            OrderByAmino: typeof _42.OrderBy;
            BroadcastMode: typeof _42.BroadcastMode;
            BroadcastModeSDKType: typeof _42.BroadcastMode;
            BroadcastModeAmino: typeof _42.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _42.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _42.OrderBy;
                }): _42.GetTxsEventRequest;
                fromAmino(object: _42.GetTxsEventRequestAmino): _42.GetTxsEventRequest;
                toAmino(message: _42.GetTxsEventRequest): _42.GetTxsEventRequestAmino;
                fromAminoMsg(object: _42.GetTxsEventRequestAminoMsg): _42.GetTxsEventRequest;
                toAminoMsg(message: _42.GetTxsEventRequest): _42.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _42.GetTxsEventRequestProtoMsg): _42.GetTxsEventRequest;
                toProto(message: _42.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _42.GetTxsEventRequest): _42.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _42.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetTxsEventResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").Long;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _41.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").Long;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").Long;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: string | number | import("long").Long;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _42.GetTxsEventResponse;
                fromAmino(object: _42.GetTxsEventResponseAmino): _42.GetTxsEventResponse;
                toAmino(message: _42.GetTxsEventResponse): _42.GetTxsEventResponseAmino;
                fromAminoMsg(object: _42.GetTxsEventResponseAminoMsg): _42.GetTxsEventResponse;
                toAminoMsg(message: _42.GetTxsEventResponse): _42.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _42.GetTxsEventResponseProtoMsg): _42.GetTxsEventResponse;
                toProto(message: _42.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _42.GetTxsEventResponse): _42.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _42.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.BroadcastTxRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _42.BroadcastMode;
                }): _42.BroadcastTxRequest;
                fromAmino(object: _42.BroadcastTxRequestAmino): _42.BroadcastTxRequest;
                toAmino(message: _42.BroadcastTxRequest): _42.BroadcastTxRequestAmino;
                fromAminoMsg(object: _42.BroadcastTxRequestAminoMsg): _42.BroadcastTxRequest;
                toAminoMsg(message: _42.BroadcastTxRequest): _42.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _42.BroadcastTxRequestProtoMsg): _42.BroadcastTxRequest;
                toProto(message: _42.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _42.BroadcastTxRequest): _42.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _42.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.BroadcastTxResponse;
                fromPartial(object: {
                    txResponse?: {
                        height?: string | number | import("long").Long;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _42.BroadcastTxResponse;
                fromAmino(object: _42.BroadcastTxResponseAmino): _42.BroadcastTxResponse;
                toAmino(message: _42.BroadcastTxResponse): _42.BroadcastTxResponseAmino;
                fromAminoMsg(object: _42.BroadcastTxResponseAminoMsg): _42.BroadcastTxResponse;
                toAminoMsg(message: _42.BroadcastTxResponse): _42.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _42.BroadcastTxResponseProtoMsg): _42.BroadcastTxResponse;
                toProto(message: _42.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _42.BroadcastTxResponse): _42.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _42.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").Long;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _41.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").Long;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").Long;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _42.SimulateRequest;
                fromAmino(object: _42.SimulateRequestAmino): _42.SimulateRequest;
                toAmino(message: _42.SimulateRequest): _42.SimulateRequestAmino;
                fromAminoMsg(object: _42.SimulateRequestAminoMsg): _42.SimulateRequest;
                toAminoMsg(message: _42.SimulateRequest): _42.SimulateRequestAminoMsg;
                fromProtoMsg(message: _42.SimulateRequestProtoMsg): _42.SimulateRequest;
                toProto(message: _42.SimulateRequest): Uint8Array;
                toProtoMsg(message: _42.SimulateRequest): _42.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _42.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SimulateResponse;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _42.SimulateResponse;
                fromAmino(object: _42.SimulateResponseAmino): _42.SimulateResponse;
                toAmino(message: _42.SimulateResponse): _42.SimulateResponseAmino;
                fromAminoMsg(object: _42.SimulateResponseAminoMsg): _42.SimulateResponse;
                toAminoMsg(message: _42.SimulateResponse): _42.SimulateResponseAminoMsg;
                fromProtoMsg(message: _42.SimulateResponseProtoMsg): _42.SimulateResponse;
                toProto(message: _42.SimulateResponse): Uint8Array;
                toProtoMsg(message: _42.SimulateResponse): _42.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _42.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetTxRequest;
                fromPartial(object: {
                    hash?: string;
                }): _42.GetTxRequest;
                fromAmino(object: _42.GetTxRequestAmino): _42.GetTxRequest;
                toAmino(message: _42.GetTxRequest): _42.GetTxRequestAmino;
                fromAminoMsg(object: _42.GetTxRequestAminoMsg): _42.GetTxRequest;
                toAminoMsg(message: _42.GetTxRequest): _42.GetTxRequestAminoMsg;
                fromProtoMsg(message: _42.GetTxRequestProtoMsg): _42.GetTxRequest;
                toProto(message: _42.GetTxRequest): Uint8Array;
                toProtoMsg(message: _42.GetTxRequest): _42.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _42.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GetTxResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").Long;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _41.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").Long;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").Long;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: string | number | import("long").Long;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _42.GetTxResponse;
                fromAmino(object: _42.GetTxResponseAmino): _42.GetTxResponse;
                toAmino(message: _42.GetTxResponse): _42.GetTxResponseAmino;
                fromAminoMsg(object: _42.GetTxResponseAminoMsg): _42.GetTxResponse;
                toAminoMsg(message: _42.GetTxResponse): _42.GetTxResponseAminoMsg;
                fromProtoMsg(message: _42.GetTxResponseProtoMsg): _42.GetTxResponse;
                toProto(message: _42.GetTxResponse): Uint8Array;
                toProtoMsg(message: _42.GetTxResponse): _42.GetTxResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _105.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _44.QueryCurrentPlanRequest): Promise<_44.QueryCurrentPlanResponse>;
                appliedPlan(request: _44.QueryAppliedPlanRequest): Promise<_44.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _44.QueryUpgradedConsensusStateRequest): Promise<_44.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _44.QueryModuleVersionsRequest): Promise<_44.QueryModuleVersionsResponse>;
            };
            Plan: {
                encode(message: _45.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Plan;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: string | number | import("long").Long;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _45.Plan;
                fromAmino(object: _45.PlanAmino): _45.Plan;
                toAmino(message: _45.Plan): _45.PlanAmino;
                fromAminoMsg(object: _45.PlanAminoMsg): _45.Plan;
                toAminoMsg(message: _45.Plan): _45.PlanAminoMsg;
                fromProtoMsg(message: _45.PlanProtoMsg): _45.Plan;
                toProto(message: _45.Plan): Uint8Array;
                toProtoMsg(message: _45.Plan): _45.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                encode(message: _45.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.SoftwareUpgradeProposal;
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
                }): _45.SoftwareUpgradeProposal;
                fromAmino(object: _45.SoftwareUpgradeProposalAmino): _45.SoftwareUpgradeProposal;
                toAmino(message: _45.SoftwareUpgradeProposal): _45.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _45.SoftwareUpgradeProposalAminoMsg): _45.SoftwareUpgradeProposal;
                toAminoMsg(message: _45.SoftwareUpgradeProposal): _45.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _45.SoftwareUpgradeProposalProtoMsg): _45.SoftwareUpgradeProposal;
                toProto(message: _45.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _45.SoftwareUpgradeProposal): _45.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _45.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CancelSoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _45.CancelSoftwareUpgradeProposal;
                fromAmino(object: _45.CancelSoftwareUpgradeProposalAmino): _45.CancelSoftwareUpgradeProposal;
                toAmino(message: _45.CancelSoftwareUpgradeProposal): _45.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _45.CancelSoftwareUpgradeProposalAminoMsg): _45.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _45.CancelSoftwareUpgradeProposal): _45.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _45.CancelSoftwareUpgradeProposalProtoMsg): _45.CancelSoftwareUpgradeProposal;
                toProto(message: _45.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _45.CancelSoftwareUpgradeProposal): _45.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                encode(message: _45.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ModuleVersion;
                fromPartial(object: {
                    name?: string;
                    version?: string | number | import("long").Long;
                }): _45.ModuleVersion;
                fromAmino(object: _45.ModuleVersionAmino): _45.ModuleVersion;
                toAmino(message: _45.ModuleVersion): _45.ModuleVersionAmino;
                fromAminoMsg(object: _45.ModuleVersionAminoMsg): _45.ModuleVersion;
                toAminoMsg(message: _45.ModuleVersion): _45.ModuleVersionAminoMsg;
                fromProtoMsg(message: _45.ModuleVersionProtoMsg): _45.ModuleVersion;
                toProto(message: _45.ModuleVersion): Uint8Array;
                toProtoMsg(message: _45.ModuleVersion): _45.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _44.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryCurrentPlanRequest;
                fromPartial(_: {}): _44.QueryCurrentPlanRequest;
                fromAmino(_: _44.QueryCurrentPlanRequestAmino): _44.QueryCurrentPlanRequest;
                toAmino(_: _44.QueryCurrentPlanRequest): _44.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _44.QueryCurrentPlanRequestAminoMsg): _44.QueryCurrentPlanRequest;
                toAminoMsg(message: _44.QueryCurrentPlanRequest): _44.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _44.QueryCurrentPlanRequestProtoMsg): _44.QueryCurrentPlanRequest;
                toProto(message: _44.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _44.QueryCurrentPlanRequest): _44.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _44.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryCurrentPlanResponse;
                fromPartial(object: {
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
                }): _44.QueryCurrentPlanResponse;
                fromAmino(object: _44.QueryCurrentPlanResponseAmino): _44.QueryCurrentPlanResponse;
                toAmino(message: _44.QueryCurrentPlanResponse): _44.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _44.QueryCurrentPlanResponseAminoMsg): _44.QueryCurrentPlanResponse;
                toAminoMsg(message: _44.QueryCurrentPlanResponse): _44.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _44.QueryCurrentPlanResponseProtoMsg): _44.QueryCurrentPlanResponse;
                toProto(message: _44.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _44.QueryCurrentPlanResponse): _44.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _44.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAppliedPlanRequest;
                fromPartial(object: {
                    name?: string;
                }): _44.QueryAppliedPlanRequest;
                fromAmino(object: _44.QueryAppliedPlanRequestAmino): _44.QueryAppliedPlanRequest;
                toAmino(message: _44.QueryAppliedPlanRequest): _44.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _44.QueryAppliedPlanRequestAminoMsg): _44.QueryAppliedPlanRequest;
                toAminoMsg(message: _44.QueryAppliedPlanRequest): _44.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAppliedPlanRequestProtoMsg): _44.QueryAppliedPlanRequest;
                toProto(message: _44.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAppliedPlanRequest): _44.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _44.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAppliedPlanResponse;
                fromPartial(object: {
                    height?: string | number | import("long").Long;
                }): _44.QueryAppliedPlanResponse;
                fromAmino(object: _44.QueryAppliedPlanResponseAmino): _44.QueryAppliedPlanResponse;
                toAmino(message: _44.QueryAppliedPlanResponse): _44.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _44.QueryAppliedPlanResponseAminoMsg): _44.QueryAppliedPlanResponse;
                toAminoMsg(message: _44.QueryAppliedPlanResponse): _44.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _44.QueryAppliedPlanResponseProtoMsg): _44.QueryAppliedPlanResponse;
                toProto(message: _44.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _44.QueryAppliedPlanResponse): _44.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _44.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryUpgradedConsensusStateRequest;
                fromPartial(object: {
                    lastHeight?: string | number | import("long").Long;
                }): _44.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _44.QueryUpgradedConsensusStateRequestAmino): _44.QueryUpgradedConsensusStateRequest;
                toAmino(message: _44.QueryUpgradedConsensusStateRequest): _44.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _44.QueryUpgradedConsensusStateRequestAminoMsg): _44.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _44.QueryUpgradedConsensusStateRequest): _44.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _44.QueryUpgradedConsensusStateRequestProtoMsg): _44.QueryUpgradedConsensusStateRequest;
                toProto(message: _44.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _44.QueryUpgradedConsensusStateRequest): _44.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _44.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryUpgradedConsensusStateResponse;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _44.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _44.QueryUpgradedConsensusStateResponseAmino): _44.QueryUpgradedConsensusStateResponse;
                toAmino(message: _44.QueryUpgradedConsensusStateResponse): _44.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _44.QueryUpgradedConsensusStateResponseAminoMsg): _44.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _44.QueryUpgradedConsensusStateResponse): _44.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _44.QueryUpgradedConsensusStateResponseProtoMsg): _44.QueryUpgradedConsensusStateResponse;
                toProto(message: _44.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _44.QueryUpgradedConsensusStateResponse): _44.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _44.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryModuleVersionsRequest;
                fromPartial(object: {
                    moduleName?: string;
                }): _44.QueryModuleVersionsRequest;
                fromAmino(object: _44.QueryModuleVersionsRequestAmino): _44.QueryModuleVersionsRequest;
                toAmino(message: _44.QueryModuleVersionsRequest): _44.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _44.QueryModuleVersionsRequestAminoMsg): _44.QueryModuleVersionsRequest;
                toAminoMsg(message: _44.QueryModuleVersionsRequest): _44.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryModuleVersionsRequestProtoMsg): _44.QueryModuleVersionsRequest;
                toProto(message: _44.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryModuleVersionsRequest): _44.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _44.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryModuleVersionsResponse;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: string | number | import("long").Long;
                    }[];
                }): _44.QueryModuleVersionsResponse;
                fromAmino(object: _44.QueryModuleVersionsResponseAmino): _44.QueryModuleVersionsResponse;
                toAmino(message: _44.QueryModuleVersionsResponse): _44.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _44.QueryModuleVersionsResponseAminoMsg): _44.QueryModuleVersionsResponse;
                toAminoMsg(message: _44.QueryModuleVersionsResponse): _44.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryModuleVersionsResponseProtoMsg): _44.QueryModuleVersionsResponse;
                toProto(message: _44.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryModuleVersionsResponse): _44.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _106.MsgClientImpl;
                };
                bank: {
                    v1beta1: _107.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _108.MsgClientImpl;
                };
                gov: {
                    v1beta1: _109.MsgClientImpl;
                };
                staking: {
                    v1beta1: _110.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                        account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                        allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                        totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                        supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _25.QueryValidatorOutstandingRewardsRequest): Promise<_25.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _25.QueryValidatorCommissionRequest): Promise<_25.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _25.QueryValidatorSlashesRequest): Promise<_25.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _25.QueryDelegationRewardsRequest): Promise<_25.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _25.QueryDelegationTotalRewardsRequest): Promise<_25.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _25.QueryDelegatorValidatorsRequest): Promise<_25.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _25.QueryDelegatorWithdrawAddressRequest): Promise<_25.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _25.QueryCommunityPoolRequest): Promise<_25.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _29.QueryProposalRequest): Promise<_29.QueryProposalResponse>;
                        proposals(request: _29.QueryProposalsRequest): Promise<_29.QueryProposalsResponse>;
                        vote(request: _29.QueryVoteRequest): Promise<_29.QueryVoteResponse>;
                        votes(request: _29.QueryVotesRequest): Promise<_29.QueryVotesResponse>;
                        params(request: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        deposit(request: _29.QueryDepositRequest): Promise<_29.QueryDepositResponse>;
                        deposits(request: _29.QueryDepositsRequest): Promise<_29.QueryDepositsResponse>;
                        tallyResult(request: _29.QueryTallyResultRequest): Promise<_29.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                        inflation(request?: _33.QueryInflationRequest): Promise<_33.QueryInflationResponse>;
                        annualProvisions(request?: _33.QueryAnnualProvisionsRequest): Promise<_33.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _38.QueryValidatorsRequest): Promise<_38.QueryValidatorsResponse>;
                        validator(request: _38.QueryValidatorRequest): Promise<_38.QueryValidatorResponse>;
                        validatorDelegations(request: _38.QueryValidatorDelegationsRequest): Promise<_38.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _38.QueryValidatorUnbondingDelegationsRequest): Promise<_38.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _38.QueryDelegationRequest): Promise<_38.QueryDelegationResponse>;
                        unbondingDelegation(request: _38.QueryUnbondingDelegationRequest): Promise<_38.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _38.QueryDelegatorDelegationsRequest): Promise<_38.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _38.QueryDelegatorUnbondingDelegationsRequest): Promise<_38.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _38.QueryRedelegationsRequest): Promise<_38.QueryRedelegationsResponse>;
                        delegatorValidators(request: _38.QueryDelegatorValidatorsRequest): Promise<_38.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _38.QueryDelegatorValidatorRequest): Promise<_38.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _38.QueryHistoricalInfoRequest): Promise<_38.QueryHistoricalInfoResponse>;
                        pool(request?: _38.QueryPoolRequest): Promise<_38.QueryPoolResponse>;
                        params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _42.SimulateRequest): Promise<_42.SimulateResponse>;
                        getTx(request: _42.GetTxRequest): Promise<_42.GetTxResponse>;
                        broadcastTx(request: _42.BroadcastTxRequest): Promise<_42.BroadcastTxResponse>;
                        getTxsEvent(request: _42.GetTxsEventRequest): Promise<_42.GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _44.QueryCurrentPlanRequest): Promise<_44.QueryCurrentPlanResponse>;
                        appliedPlan(request: _44.QueryAppliedPlanRequest): Promise<_44.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _44.QueryUpgradedConsensusStateRequest): Promise<_44.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _44.QueryModuleVersionsRequest): Promise<_44.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
