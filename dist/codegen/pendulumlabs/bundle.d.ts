/// <reference types="long" />
import * as _77 from "../market/burnings";
import * as _78 from "../market/drop";
import * as _79 from "../market/genesis";
import * as _80 from "../market/member";
import * as _81 from "../market/order";
import * as _82 from "../market/params";
import * as _83 from "../market/pool";
import * as _84 from "../market/query";
import * as _85 from "../market/tx";
import * as _118 from "../market/query.rpc.Query";
import * as _119 from "../market/tx.rpc.msg";
export declare namespace pendulumlabs {
    namespace market {
        const market: {
            MsgClientImpl: typeof _119.MsgClientImpl;
            QueryClientImpl: typeof _118.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                burned(request?: _84.QueryBurnedRequest): Promise<_84.QueryBurnedResponse>;
                pool(request: _84.QueryGetPoolRequest): Promise<_84.QueryGetPoolResponse>;
                poolAll(request?: _84.QueryAllPoolRequest): Promise<_84.QueryAllPoolResponse>;
                volume(request: _84.QueryVolumeRequest): Promise<_84.QueryVolumeResponse>;
                volumeAll(request?: _84.QueryAllVolumeRequest): Promise<_84.QueryAllVolumeResponse>;
                drop(request: _84.QueryDropRequest): Promise<_84.QueryDropResponse>;
                dropAmounts(request: _84.QueryDropAmountsRequest): Promise<_84.QueryDropAmountsResponse>;
                dropCoin(request: _84.QueryDropCoinRequest): Promise<_84.QueryDropCoinResponse>;
                dropsToCoins(request: _84.QueryDropsToCoinsRequest): Promise<_84.QueryDropsToCoinsResponse>;
                dropPairs(request: _84.QueryDropPairsRequest): Promise<_84.QueryDropPairsResponse>;
                dropOwnerPair(request: _84.QueryDropOwnerPairRequest): Promise<_84.QueryDropsResponse>;
                dropAll(request?: _84.QueryAllDropRequest): Promise<_84.QueryDropsResponse>;
                member(request: _84.QueryGetMemberRequest): Promise<_84.QueryGetMemberResponse>;
                memberAll(request?: _84.QueryAllMemberRequest): Promise<_84.QueryAllMemberResponse>;
                burnings(request: _84.QueryGetBurningsRequest): Promise<_84.QueryGetBurningsResponse>;
                burningsAll(request?: _84.QueryAllBurningsRequest): Promise<_84.QueryAllBurningsResponse>;
                order(request: _84.QueryOrderRequest): Promise<_84.QueryOrderResponse>;
                orderAll(request?: _84.QueryAllOrderRequest): Promise<_84.QueryOrdersResponse>;
                orderOwner(request: _84.QueryOrderOwnerRequest): Promise<_84.QueryOrdersResponse>;
                orderOwnerUids(request: _84.QueryOrderOwnerRequest): Promise<_84.QueryOrderOwnerUidsResponse>;
                book(request: _84.QueryBookRequest): Promise<_84.QueryBookResponse>;
                bookends(request: _84.QueryBookendsRequest): Promise<_84.QueryBookendsResponse>;
                history(request: _84.QueryHistoryRequest): Promise<_84.QueryHistoryResponse>;
                quote(request: _84.QueryQuoteRequest): Promise<_84.QueryQuoteResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPool(value: _85.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDrop(value: _85.MsgCreateDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemDrop(value: _85.MsgRedeemDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createOrder(value: _85.MsgCreateOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _85.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    marketOrder(value: _85.MsgMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPool(value: _85.MsgCreatePool): {
                        typeUrl: string;
                        value: _85.MsgCreatePool;
                    };
                    createDrop(value: _85.MsgCreateDrop): {
                        typeUrl: string;
                        value: _85.MsgCreateDrop;
                    };
                    redeemDrop(value: _85.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _85.MsgRedeemDrop;
                    };
                    createOrder(value: _85.MsgCreateOrder): {
                        typeUrl: string;
                        value: _85.MsgCreateOrder;
                    };
                    cancelOrder(value: _85.MsgCancelOrder): {
                        typeUrl: string;
                        value: _85.MsgCancelOrder;
                    };
                    marketOrder(value: _85.MsgMarketOrder): {
                        typeUrl: string;
                        value: _85.MsgMarketOrder;
                    };
                };
                fromPartial: {
                    createPool(value: _85.MsgCreatePool): {
                        typeUrl: string;
                        value: _85.MsgCreatePool;
                    };
                    createDrop(value: _85.MsgCreateDrop): {
                        typeUrl: string;
                        value: _85.MsgCreateDrop;
                    };
                    redeemDrop(value: _85.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _85.MsgRedeemDrop;
                    };
                    createOrder(value: _85.MsgCreateOrder): {
                        typeUrl: string;
                        value: _85.MsgCreateOrder;
                    };
                    cancelOrder(value: _85.MsgCancelOrder): {
                        typeUrl: string;
                        value: _85.MsgCancelOrder;
                    };
                    marketOrder(value: _85.MsgMarketOrder): {
                        typeUrl: string;
                        value: _85.MsgMarketOrder;
                    };
                };
            };
            AminoConverter: {
                "/pendulumlabs.market.market.MsgCreatePool": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCreatePool) => _85.MsgCreatePoolAmino;
                    fromAmino: (object: _85.MsgCreatePoolAmino) => _85.MsgCreatePool;
                };
                "/pendulumlabs.market.market.MsgCreateDrop": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCreateDrop) => _85.MsgCreateDropAmino;
                    fromAmino: (object: _85.MsgCreateDropAmino) => _85.MsgCreateDrop;
                };
                "/pendulumlabs.market.market.MsgRedeemDrop": {
                    aminoType: string;
                    toAmino: (message: _85.MsgRedeemDrop) => _85.MsgRedeemDropAmino;
                    fromAmino: (object: _85.MsgRedeemDropAmino) => _85.MsgRedeemDrop;
                };
                "/pendulumlabs.market.market.MsgCreateOrder": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCreateOrder) => _85.MsgCreateOrderAmino;
                    fromAmino: (object: _85.MsgCreateOrderAmino) => _85.MsgCreateOrder;
                };
                "/pendulumlabs.market.market.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCancelOrder) => _85.MsgCancelOrderAmino;
                    fromAmino: (object: _85.MsgCancelOrderAmino) => _85.MsgCancelOrder;
                };
                "/pendulumlabs.market.market.MsgMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _85.MsgMarketOrder) => _85.MsgMarketOrderAmino;
                    fromAmino: (object: _85.MsgMarketOrderAmino) => _85.MsgMarketOrder;
                };
            };
            MsgCreatePool: {
                encode(message: _85.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreatePool;
                fromPartial(object: {
                    creator?: string;
                    coinA?: string;
                    coinB?: string;
                }): _85.MsgCreatePool;
                fromAmino(object: _85.MsgCreatePoolAmino): _85.MsgCreatePool;
                toAmino(message: _85.MsgCreatePool): _85.MsgCreatePoolAmino;
                fromAminoMsg(object: _85.MsgCreatePoolAminoMsg): _85.MsgCreatePool;
                fromProtoMsg(message: _85.MsgCreatePoolProtoMsg): _85.MsgCreatePool;
                toProto(message: _85.MsgCreatePool): Uint8Array;
                toProtoMsg(message: _85.MsgCreatePool): _85.MsgCreatePoolProtoMsg;
            };
            MsgCreatePoolResponse: {
                encode(_: _85.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreatePoolResponse;
                fromPartial(_: {}): _85.MsgCreatePoolResponse;
                fromAmino(_: _85.MsgCreatePoolResponseAmino): _85.MsgCreatePoolResponse;
                toAmino(_: _85.MsgCreatePoolResponse): _85.MsgCreatePoolResponseAmino;
                fromAminoMsg(object: _85.MsgCreatePoolResponseAminoMsg): _85.MsgCreatePoolResponse;
                fromProtoMsg(message: _85.MsgCreatePoolResponseProtoMsg): _85.MsgCreatePoolResponse;
                toProto(message: _85.MsgCreatePoolResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCreatePoolResponse): _85.MsgCreatePoolResponseProtoMsg;
            };
            MsgCreateDrop: {
                encode(message: _85.MsgCreateDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateDrop;
                fromPartial(object: {
                    creator?: string;
                    pair?: string;
                    drops?: string;
                }): _85.MsgCreateDrop;
                fromAmino(object: _85.MsgCreateDropAmino): _85.MsgCreateDrop;
                toAmino(message: _85.MsgCreateDrop): _85.MsgCreateDropAmino;
                fromAminoMsg(object: _85.MsgCreateDropAminoMsg): _85.MsgCreateDrop;
                fromProtoMsg(message: _85.MsgCreateDropProtoMsg): _85.MsgCreateDrop;
                toProto(message: _85.MsgCreateDrop): Uint8Array;
                toProtoMsg(message: _85.MsgCreateDrop): _85.MsgCreateDropProtoMsg;
            };
            MsgCreateDropResponse: {
                encode(_: _85.MsgCreateDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateDropResponse;
                fromPartial(_: {}): _85.MsgCreateDropResponse;
                fromAmino(_: _85.MsgCreateDropResponseAmino): _85.MsgCreateDropResponse;
                toAmino(_: _85.MsgCreateDropResponse): _85.MsgCreateDropResponseAmino;
                fromAminoMsg(object: _85.MsgCreateDropResponseAminoMsg): _85.MsgCreateDropResponse;
                fromProtoMsg(message: _85.MsgCreateDropResponseProtoMsg): _85.MsgCreateDropResponse;
                toProto(message: _85.MsgCreateDropResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCreateDropResponse): _85.MsgCreateDropResponseProtoMsg;
            };
            MsgRedeemDrop: {
                encode(message: _85.MsgRedeemDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgRedeemDrop;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _85.MsgRedeemDrop;
                fromAmino(object: _85.MsgRedeemDropAmino): _85.MsgRedeemDrop;
                toAmino(message: _85.MsgRedeemDrop): _85.MsgRedeemDropAmino;
                fromAminoMsg(object: _85.MsgRedeemDropAminoMsg): _85.MsgRedeemDrop;
                fromProtoMsg(message: _85.MsgRedeemDropProtoMsg): _85.MsgRedeemDrop;
                toProto(message: _85.MsgRedeemDrop): Uint8Array;
                toProtoMsg(message: _85.MsgRedeemDrop): _85.MsgRedeemDropProtoMsg;
            };
            MsgRedeemDropResponse: {
                encode(_: _85.MsgRedeemDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgRedeemDropResponse;
                fromPartial(_: {}): _85.MsgRedeemDropResponse;
                fromAmino(_: _85.MsgRedeemDropResponseAmino): _85.MsgRedeemDropResponse;
                toAmino(_: _85.MsgRedeemDropResponse): _85.MsgRedeemDropResponseAmino;
                fromAminoMsg(object: _85.MsgRedeemDropResponseAminoMsg): _85.MsgRedeemDropResponse;
                fromProtoMsg(message: _85.MsgRedeemDropResponseProtoMsg): _85.MsgRedeemDropResponse;
                toProto(message: _85.MsgRedeemDropResponse): Uint8Array;
                toProtoMsg(message: _85.MsgRedeemDropResponse): _85.MsgRedeemDropResponseProtoMsg;
            };
            MsgCreateOrder: {
                encode(message: _85.MsgCreateOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    orderType?: string;
                    amount?: string;
                    rate?: string[];
                    prev?: string;
                    next?: string;
                }): _85.MsgCreateOrder;
                fromAmino(object: _85.MsgCreateOrderAmino): _85.MsgCreateOrder;
                toAmino(message: _85.MsgCreateOrder): _85.MsgCreateOrderAmino;
                fromAminoMsg(object: _85.MsgCreateOrderAminoMsg): _85.MsgCreateOrder;
                fromProtoMsg(message: _85.MsgCreateOrderProtoMsg): _85.MsgCreateOrder;
                toProto(message: _85.MsgCreateOrder): Uint8Array;
                toProtoMsg(message: _85.MsgCreateOrder): _85.MsgCreateOrderProtoMsg;
            };
            MsgCreateOrderResponse: {
                encode(message: _85.MsgCreateOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateOrderResponse;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _85.MsgCreateOrderResponse;
                fromAmino(object: _85.MsgCreateOrderResponseAmino): _85.MsgCreateOrderResponse;
                toAmino(message: _85.MsgCreateOrderResponse): _85.MsgCreateOrderResponseAmino;
                fromAminoMsg(object: _85.MsgCreateOrderResponseAminoMsg): _85.MsgCreateOrderResponse;
                fromProtoMsg(message: _85.MsgCreateOrderResponseProtoMsg): _85.MsgCreateOrderResponse;
                toProto(message: _85.MsgCreateOrderResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCreateOrderResponse): _85.MsgCreateOrderResponseProtoMsg;
            };
            MsgCancelOrder: {
                encode(message: _85.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCancelOrder;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _85.MsgCancelOrder;
                fromAmino(object: _85.MsgCancelOrderAmino): _85.MsgCancelOrder;
                toAmino(message: _85.MsgCancelOrder): _85.MsgCancelOrderAmino;
                fromAminoMsg(object: _85.MsgCancelOrderAminoMsg): _85.MsgCancelOrder;
                fromProtoMsg(message: _85.MsgCancelOrderProtoMsg): _85.MsgCancelOrder;
                toProto(message: _85.MsgCancelOrder): Uint8Array;
                toProtoMsg(message: _85.MsgCancelOrder): _85.MsgCancelOrderProtoMsg;
            };
            MsgCancelOrderResponse: {
                encode(_: _85.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCancelOrderResponse;
                fromPartial(_: {}): _85.MsgCancelOrderResponse;
                fromAmino(_: _85.MsgCancelOrderResponseAmino): _85.MsgCancelOrderResponse;
                toAmino(_: _85.MsgCancelOrderResponse): _85.MsgCancelOrderResponseAmino;
                fromAminoMsg(object: _85.MsgCancelOrderResponseAminoMsg): _85.MsgCancelOrderResponse;
                fromProtoMsg(message: _85.MsgCancelOrderResponseProtoMsg): _85.MsgCancelOrderResponse;
                toProto(message: _85.MsgCancelOrderResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCancelOrderResponse): _85.MsgCancelOrderResponseProtoMsg;
            };
            MsgMarketOrder: {
                encode(message: _85.MsgMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgMarketOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    amountAsk?: string;
                    denomBid?: string;
                    amountBid?: string;
                    slippage?: string;
                }): _85.MsgMarketOrder;
                fromAmino(object: _85.MsgMarketOrderAmino): _85.MsgMarketOrder;
                toAmino(message: _85.MsgMarketOrder): _85.MsgMarketOrderAmino;
                fromAminoMsg(object: _85.MsgMarketOrderAminoMsg): _85.MsgMarketOrder;
                fromProtoMsg(message: _85.MsgMarketOrderProtoMsg): _85.MsgMarketOrder;
                toProto(message: _85.MsgMarketOrder): Uint8Array;
                toProtoMsg(message: _85.MsgMarketOrder): _85.MsgMarketOrderProtoMsg;
            };
            MsgMarketOrderResponse: {
                encode(message: _85.MsgMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgMarketOrderResponse;
                fromPartial(object: {
                    amountBid?: string;
                    amountAsk?: string;
                    slippage?: string;
                }): _85.MsgMarketOrderResponse;
                fromAmino(object: _85.MsgMarketOrderResponseAmino): _85.MsgMarketOrderResponse;
                toAmino(message: _85.MsgMarketOrderResponse): _85.MsgMarketOrderResponseAmino;
                fromAminoMsg(object: _85.MsgMarketOrderResponseAminoMsg): _85.MsgMarketOrderResponse;
                fromProtoMsg(message: _85.MsgMarketOrderResponseProtoMsg): _85.MsgMarketOrderResponse;
                toProto(message: _85.MsgMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _85.MsgMarketOrderResponse): _85.MsgMarketOrderResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsRequest;
                fromPartial(_: {}): _84.QueryParamsRequest;
                fromAmino(_: _84.QueryParamsRequestAmino): _84.QueryParamsRequest;
                toAmino(_: _84.QueryParamsRequest): _84.QueryParamsRequestAmino;
                fromAminoMsg(object: _84.QueryParamsRequestAminoMsg): _84.QueryParamsRequest;
                fromProtoMsg(message: _84.QueryParamsRequestProtoMsg): _84.QueryParamsRequest;
                toProto(message: _84.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryParamsRequest): _84.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        earnRates?: string;
                        burnRate?: string;
                        burnCoin?: string;
                        marketFee?: string;
                    };
                }): _84.QueryParamsResponse;
                fromAmino(object: _84.QueryParamsResponseAmino): _84.QueryParamsResponse;
                toAmino(message: _84.QueryParamsResponse): _84.QueryParamsResponseAmino;
                fromAminoMsg(object: _84.QueryParamsResponseAminoMsg): _84.QueryParamsResponse;
                fromProtoMsg(message: _84.QueryParamsResponseProtoMsg): _84.QueryParamsResponse;
                toProto(message: _84.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryParamsResponse): _84.QueryParamsResponseProtoMsg;
            };
            QueryGetPoolRequest: {
                encode(message: _84.QueryGetPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryGetPoolRequest;
                fromPartial(object: {
                    pair?: string;
                }): _84.QueryGetPoolRequest;
                fromAmino(object: _84.QueryGetPoolRequestAmino): _84.QueryGetPoolRequest;
                toAmino(message: _84.QueryGetPoolRequest): _84.QueryGetPoolRequestAmino;
                fromAminoMsg(object: _84.QueryGetPoolRequestAminoMsg): _84.QueryGetPoolRequest;
                fromProtoMsg(message: _84.QueryGetPoolRequestProtoMsg): _84.QueryGetPoolRequest;
                toProto(message: _84.QueryGetPoolRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGetPoolRequest): _84.QueryGetPoolRequestProtoMsg;
            };
            QueryGetPoolResponse: {
                encode(message: _84.QueryGetPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryGetPoolResponse;
                fromPartial(object: {
                    pool?: {
                        pair?: string;
                        denom1?: string;
                        denom2?: string;
                        volume1?: {
                            denom?: string;
                            amount?: string;
                        };
                        volume2?: {
                            denom?: string;
                            amount?: string;
                        };
                        leaders?: {
                            address?: string;
                            drops?: string;
                        }[];
                        drops?: string;
                        history?: string | number | import("long").Long;
                    };
                }): _84.QueryGetPoolResponse;
                fromAmino(object: _84.QueryGetPoolResponseAmino): _84.QueryGetPoolResponse;
                toAmino(message: _84.QueryGetPoolResponse): _84.QueryGetPoolResponseAmino;
                fromAminoMsg(object: _84.QueryGetPoolResponseAminoMsg): _84.QueryGetPoolResponse;
                fromProtoMsg(message: _84.QueryGetPoolResponseProtoMsg): _84.QueryGetPoolResponse;
                toProto(message: _84.QueryGetPoolResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGetPoolResponse): _84.QueryGetPoolResponseProtoMsg;
            };
            QueryAllPoolRequest: {
                encode(message: _84.QueryAllPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllPoolRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryAllPoolRequest;
                fromAmino(object: _84.QueryAllPoolRequestAmino): _84.QueryAllPoolRequest;
                toAmino(message: _84.QueryAllPoolRequest): _84.QueryAllPoolRequestAmino;
                fromAminoMsg(object: _84.QueryAllPoolRequestAminoMsg): _84.QueryAllPoolRequest;
                fromProtoMsg(message: _84.QueryAllPoolRequestProtoMsg): _84.QueryAllPoolRequest;
                toProto(message: _84.QueryAllPoolRequest): Uint8Array;
                toProtoMsg(message: _84.QueryAllPoolRequest): _84.QueryAllPoolRequestProtoMsg;
            };
            QueryAllPoolResponse: {
                encode(message: _84.QueryAllPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllPoolResponse;
                fromPartial(object: {
                    pool?: {
                        pair?: string;
                        denom1?: string;
                        denom2?: string;
                        volume1?: {
                            denom?: string;
                            amount?: string;
                        };
                        volume2?: {
                            denom?: string;
                            amount?: string;
                        };
                        leaders?: {
                            address?: string;
                            drops?: string;
                        }[];
                        drops?: string;
                        history?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryAllPoolResponse;
                fromAmino(object: _84.QueryAllPoolResponseAmino): _84.QueryAllPoolResponse;
                toAmino(message: _84.QueryAllPoolResponse): _84.QueryAllPoolResponseAmino;
                fromAminoMsg(object: _84.QueryAllPoolResponseAminoMsg): _84.QueryAllPoolResponse;
                fromProtoMsg(message: _84.QueryAllPoolResponseProtoMsg): _84.QueryAllPoolResponse;
                toProto(message: _84.QueryAllPoolResponse): Uint8Array;
                toProtoMsg(message: _84.QueryAllPoolResponse): _84.QueryAllPoolResponseProtoMsg;
            };
            QueryVolumeRequest: {
                encode(message: _84.QueryVolumeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryVolumeRequest;
                fromPartial(object: {
                    denom?: string;
                }): _84.QueryVolumeRequest;
                fromAmino(object: _84.QueryVolumeRequestAmino): _84.QueryVolumeRequest;
                toAmino(message: _84.QueryVolumeRequest): _84.QueryVolumeRequestAmino;
                fromAminoMsg(object: _84.QueryVolumeRequestAminoMsg): _84.QueryVolumeRequest;
                fromProtoMsg(message: _84.QueryVolumeRequestProtoMsg): _84.QueryVolumeRequest;
                toProto(message: _84.QueryVolumeRequest): Uint8Array;
                toProtoMsg(message: _84.QueryVolumeRequest): _84.QueryVolumeRequestProtoMsg;
            };
            QueryVolumeResponse: {
                encode(message: _84.QueryVolumeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryVolumeResponse;
                fromPartial(object: {
                    amount?: string;
                }): _84.QueryVolumeResponse;
                fromAmino(object: _84.QueryVolumeResponseAmino): _84.QueryVolumeResponse;
                toAmino(message: _84.QueryVolumeResponse): _84.QueryVolumeResponseAmino;
                fromAminoMsg(object: _84.QueryVolumeResponseAminoMsg): _84.QueryVolumeResponse;
                fromProtoMsg(message: _84.QueryVolumeResponseProtoMsg): _84.QueryVolumeResponse;
                toProto(message: _84.QueryVolumeResponse): Uint8Array;
                toProtoMsg(message: _84.QueryVolumeResponse): _84.QueryVolumeResponseProtoMsg;
            };
            QueryAllVolumeRequest: {
                encode(message: _84.QueryAllVolumeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllVolumeRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryAllVolumeRequest;
                fromAmino(object: _84.QueryAllVolumeRequestAmino): _84.QueryAllVolumeRequest;
                toAmino(message: _84.QueryAllVolumeRequest): _84.QueryAllVolumeRequestAmino;
                fromAminoMsg(object: _84.QueryAllVolumeRequestAminoMsg): _84.QueryAllVolumeRequest;
                fromProtoMsg(message: _84.QueryAllVolumeRequestProtoMsg): _84.QueryAllVolumeRequest;
                toProto(message: _84.QueryAllVolumeRequest): Uint8Array;
                toProtoMsg(message: _84.QueryAllVolumeRequest): _84.QueryAllVolumeRequestProtoMsg;
            };
            QueryAllVolumeResponse: {
                encode(message: _84.QueryAllVolumeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllVolumeResponse;
                fromPartial(object: {
                    volumes?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryAllVolumeResponse;
                fromAmino(object: _84.QueryAllVolumeResponseAmino): _84.QueryAllVolumeResponse;
                toAmino(message: _84.QueryAllVolumeResponse): _84.QueryAllVolumeResponseAmino;
                fromAminoMsg(object: _84.QueryAllVolumeResponseAminoMsg): _84.QueryAllVolumeResponse;
                fromProtoMsg(message: _84.QueryAllVolumeResponseProtoMsg): _84.QueryAllVolumeResponse;
                toProto(message: _84.QueryAllVolumeResponse): Uint8Array;
                toProtoMsg(message: _84.QueryAllVolumeResponse): _84.QueryAllVolumeResponseProtoMsg;
            };
            QueryBurnedRequest: {
                encode(_: _84.QueryBurnedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryBurnedRequest;
                fromPartial(_: {}): _84.QueryBurnedRequest;
                fromAmino(_: _84.QueryBurnedRequestAmino): _84.QueryBurnedRequest;
                toAmino(_: _84.QueryBurnedRequest): _84.QueryBurnedRequestAmino;
                fromAminoMsg(object: _84.QueryBurnedRequestAminoMsg): _84.QueryBurnedRequest;
                fromProtoMsg(message: _84.QueryBurnedRequestProtoMsg): _84.QueryBurnedRequest;
                toProto(message: _84.QueryBurnedRequest): Uint8Array;
                toProtoMsg(message: _84.QueryBurnedRequest): _84.QueryBurnedRequestProtoMsg;
            };
            QueryBurnedResponse: {
                encode(message: _84.QueryBurnedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryBurnedResponse;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _84.QueryBurnedResponse;
                fromAmino(object: _84.QueryBurnedResponseAmino): _84.QueryBurnedResponse;
                toAmino(message: _84.QueryBurnedResponse): _84.QueryBurnedResponseAmino;
                fromAminoMsg(object: _84.QueryBurnedResponseAminoMsg): _84.QueryBurnedResponse;
                fromProtoMsg(message: _84.QueryBurnedResponseProtoMsg): _84.QueryBurnedResponse;
                toProto(message: _84.QueryBurnedResponse): Uint8Array;
                toProtoMsg(message: _84.QueryBurnedResponse): _84.QueryBurnedResponseProtoMsg;
            };
            QueryDropRequest: {
                encode(message: _84.QueryDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _84.QueryDropRequest;
                fromAmino(object: _84.QueryDropRequestAmino): _84.QueryDropRequest;
                toAmino(message: _84.QueryDropRequest): _84.QueryDropRequestAmino;
                fromAminoMsg(object: _84.QueryDropRequestAminoMsg): _84.QueryDropRequest;
                fromProtoMsg(message: _84.QueryDropRequestProtoMsg): _84.QueryDropRequest;
                toProto(message: _84.QueryDropRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDropRequest): _84.QueryDropRequestProtoMsg;
            };
            QueryDropCoinRequest: {
                encode(message: _84.QueryDropCoinRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropCoinRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                    amountA?: string;
                }): _84.QueryDropCoinRequest;
                fromAmino(object: _84.QueryDropCoinRequestAmino): _84.QueryDropCoinRequest;
                toAmino(message: _84.QueryDropCoinRequest): _84.QueryDropCoinRequestAmino;
                fromAminoMsg(object: _84.QueryDropCoinRequestAminoMsg): _84.QueryDropCoinRequest;
                fromProtoMsg(message: _84.QueryDropCoinRequestProtoMsg): _84.QueryDropCoinRequest;
                toProto(message: _84.QueryDropCoinRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDropCoinRequest): _84.QueryDropCoinRequestProtoMsg;
            };
            QueryDropCoinResponse: {
                encode(message: _84.QueryDropCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropCoinResponse;
                fromPartial(object: {
                    drops?: string;
                    amountB?: string;
                }): _84.QueryDropCoinResponse;
                fromAmino(object: _84.QueryDropCoinResponseAmino): _84.QueryDropCoinResponse;
                toAmino(message: _84.QueryDropCoinResponse): _84.QueryDropCoinResponseAmino;
                fromAminoMsg(object: _84.QueryDropCoinResponseAminoMsg): _84.QueryDropCoinResponse;
                fromProtoMsg(message: _84.QueryDropCoinResponseProtoMsg): _84.QueryDropCoinResponse;
                toProto(message: _84.QueryDropCoinResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDropCoinResponse): _84.QueryDropCoinResponseProtoMsg;
            };
            QueryDropResponse: {
                encode(message: _84.QueryDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropResponse;
                fromPartial(object: {
                    drop?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        pair?: string;
                        drops?: string;
                        product?: string;
                        active?: boolean;
                    };
                }): _84.QueryDropResponse;
                fromAmino(object: _84.QueryDropResponseAmino): _84.QueryDropResponse;
                toAmino(message: _84.QueryDropResponse): _84.QueryDropResponseAmino;
                fromAminoMsg(object: _84.QueryDropResponseAminoMsg): _84.QueryDropResponse;
                fromProtoMsg(message: _84.QueryDropResponseProtoMsg): _84.QueryDropResponse;
                toProto(message: _84.QueryDropResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDropResponse): _84.QueryDropResponseProtoMsg;
            };
            QueryDropAmountsRequest: {
                encode(message: _84.QueryDropAmountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropAmountsRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _84.QueryDropAmountsRequest;
                fromAmino(object: _84.QueryDropAmountsRequestAmino): _84.QueryDropAmountsRequest;
                toAmino(message: _84.QueryDropAmountsRequest): _84.QueryDropAmountsRequestAmino;
                fromAminoMsg(object: _84.QueryDropAmountsRequestAminoMsg): _84.QueryDropAmountsRequest;
                fromProtoMsg(message: _84.QueryDropAmountsRequestProtoMsg): _84.QueryDropAmountsRequest;
                toProto(message: _84.QueryDropAmountsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDropAmountsRequest): _84.QueryDropAmountsRequestProtoMsg;
            };
            QueryDropAmountsResponse: {
                encode(message: _84.QueryDropAmountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropAmountsResponse;
                fromPartial(object: {
                    denom1?: string;
                    denom2?: string;
                    amount1?: string;
                    amount2?: string;
                }): _84.QueryDropAmountsResponse;
                fromAmino(object: _84.QueryDropAmountsResponseAmino): _84.QueryDropAmountsResponse;
                toAmino(message: _84.QueryDropAmountsResponse): _84.QueryDropAmountsResponseAmino;
                fromAminoMsg(object: _84.QueryDropAmountsResponseAminoMsg): _84.QueryDropAmountsResponse;
                fromProtoMsg(message: _84.QueryDropAmountsResponseProtoMsg): _84.QueryDropAmountsResponse;
                toProto(message: _84.QueryDropAmountsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDropAmountsResponse): _84.QueryDropAmountsResponseProtoMsg;
            };
            QueryDropsToCoinsRequest: {
                encode(message: _84.QueryDropsToCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropsToCoinsRequest;
                fromPartial(object: {
                    denom1?: string;
                    denom2?: string;
                    drops?: string;
                }): _84.QueryDropsToCoinsRequest;
                fromAmino(object: _84.QueryDropsToCoinsRequestAmino): _84.QueryDropsToCoinsRequest;
                toAmino(message: _84.QueryDropsToCoinsRequest): _84.QueryDropsToCoinsRequestAmino;
                fromAminoMsg(object: _84.QueryDropsToCoinsRequestAminoMsg): _84.QueryDropsToCoinsRequest;
                fromProtoMsg(message: _84.QueryDropsToCoinsRequestProtoMsg): _84.QueryDropsToCoinsRequest;
                toProto(message: _84.QueryDropsToCoinsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDropsToCoinsRequest): _84.QueryDropsToCoinsRequestProtoMsg;
            };
            QueryDropsToCoinsResponse: {
                encode(message: _84.QueryDropsToCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropsToCoinsResponse;
                fromPartial(object: {
                    denom1?: string;
                    amount1?: string;
                    denom2?: string;
                    amount2?: string;
                }): _84.QueryDropsToCoinsResponse;
                fromAmino(object: _84.QueryDropsToCoinsResponseAmino): _84.QueryDropsToCoinsResponse;
                toAmino(message: _84.QueryDropsToCoinsResponse): _84.QueryDropsToCoinsResponseAmino;
                fromAminoMsg(object: _84.QueryDropsToCoinsResponseAminoMsg): _84.QueryDropsToCoinsResponse;
                fromProtoMsg(message: _84.QueryDropsToCoinsResponseProtoMsg): _84.QueryDropsToCoinsResponse;
                toProto(message: _84.QueryDropsToCoinsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDropsToCoinsResponse): _84.QueryDropsToCoinsResponseProtoMsg;
            };
            QueryDropPairsRequest: {
                encode(message: _84.QueryDropPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropPairsRequest;
                fromPartial(object: {
                    address?: string;
                }): _84.QueryDropPairsRequest;
                fromAmino(object: _84.QueryDropPairsRequestAmino): _84.QueryDropPairsRequest;
                toAmino(message: _84.QueryDropPairsRequest): _84.QueryDropPairsRequestAmino;
                fromAminoMsg(object: _84.QueryDropPairsRequestAminoMsg): _84.QueryDropPairsRequest;
                fromProtoMsg(message: _84.QueryDropPairsRequestProtoMsg): _84.QueryDropPairsRequest;
                toProto(message: _84.QueryDropPairsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDropPairsRequest): _84.QueryDropPairsRequestProtoMsg;
            };
            QueryDropPairsResponse: {
                encode(message: _84.QueryDropPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropPairsResponse;
                fromPartial(object: {
                    pairs?: string[];
                }): _84.QueryDropPairsResponse;
                fromAmino(object: _84.QueryDropPairsResponseAmino): _84.QueryDropPairsResponse;
                toAmino(message: _84.QueryDropPairsResponse): _84.QueryDropPairsResponseAmino;
                fromAminoMsg(object: _84.QueryDropPairsResponseAminoMsg): _84.QueryDropPairsResponse;
                fromProtoMsg(message: _84.QueryDropPairsResponseProtoMsg): _84.QueryDropPairsResponse;
                toProto(message: _84.QueryDropPairsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDropPairsResponse): _84.QueryDropPairsResponseProtoMsg;
            };
            QueryDropOwnerPairRequest: {
                encode(message: _84.QueryDropOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropOwnerPairRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryDropOwnerPairRequest;
                fromAmino(object: _84.QueryDropOwnerPairRequestAmino): _84.QueryDropOwnerPairRequest;
                toAmino(message: _84.QueryDropOwnerPairRequest): _84.QueryDropOwnerPairRequestAmino;
                fromAminoMsg(object: _84.QueryDropOwnerPairRequestAminoMsg): _84.QueryDropOwnerPairRequest;
                fromProtoMsg(message: _84.QueryDropOwnerPairRequestProtoMsg): _84.QueryDropOwnerPairRequest;
                toProto(message: _84.QueryDropOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDropOwnerPairRequest): _84.QueryDropOwnerPairRequestProtoMsg;
            };
            QueryDropOwnerPairSumRequest: {
                encode(message: _84.QueryDropOwnerPairSumRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropOwnerPairSumRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                }): _84.QueryDropOwnerPairSumRequest;
                fromAmino(object: _84.QueryDropOwnerPairSumRequestAmino): _84.QueryDropOwnerPairSumRequest;
                toAmino(message: _84.QueryDropOwnerPairSumRequest): _84.QueryDropOwnerPairSumRequestAmino;
                fromAminoMsg(object: _84.QueryDropOwnerPairSumRequestAminoMsg): _84.QueryDropOwnerPairSumRequest;
                fromProtoMsg(message: _84.QueryDropOwnerPairSumRequestProtoMsg): _84.QueryDropOwnerPairSumRequest;
                toProto(message: _84.QueryDropOwnerPairSumRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDropOwnerPairSumRequest): _84.QueryDropOwnerPairSumRequestProtoMsg;
            };
            QueryDropOwnerPairSumResponse: {
                encode(message: _84.QueryDropOwnerPairSumResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropOwnerPairSumResponse;
                fromPartial(object: {
                    sum?: string;
                }): _84.QueryDropOwnerPairSumResponse;
                fromAmino(object: _84.QueryDropOwnerPairSumResponseAmino): _84.QueryDropOwnerPairSumResponse;
                toAmino(message: _84.QueryDropOwnerPairSumResponse): _84.QueryDropOwnerPairSumResponseAmino;
                fromAminoMsg(object: _84.QueryDropOwnerPairSumResponseAminoMsg): _84.QueryDropOwnerPairSumResponse;
                fromProtoMsg(message: _84.QueryDropOwnerPairSumResponseProtoMsg): _84.QueryDropOwnerPairSumResponse;
                toProto(message: _84.QueryDropOwnerPairSumResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDropOwnerPairSumResponse): _84.QueryDropOwnerPairSumResponseProtoMsg;
            };
            QueryDropOwnerPairUidsRequest: {
                encode(message: _84.QueryDropOwnerPairUidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropOwnerPairUidsRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryDropOwnerPairUidsRequest;
                fromAmino(object: _84.QueryDropOwnerPairUidsRequestAmino): _84.QueryDropOwnerPairUidsRequest;
                toAmino(message: _84.QueryDropOwnerPairUidsRequest): _84.QueryDropOwnerPairUidsRequestAmino;
                fromAminoMsg(object: _84.QueryDropOwnerPairUidsRequestAminoMsg): _84.QueryDropOwnerPairUidsRequest;
                fromProtoMsg(message: _84.QueryDropOwnerPairUidsRequestProtoMsg): _84.QueryDropOwnerPairUidsRequest;
                toProto(message: _84.QueryDropOwnerPairUidsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDropOwnerPairUidsRequest): _84.QueryDropOwnerPairUidsRequestProtoMsg;
            };
            QueryUidsResponse: {
                encode(message: _84.QueryUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUidsResponse;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryUidsResponse;
                fromAmino(object: _84.QueryUidsResponseAmino): _84.QueryUidsResponse;
                toAmino(message: _84.QueryUidsResponse): _84.QueryUidsResponseAmino;
                fromAminoMsg(object: _84.QueryUidsResponseAminoMsg): _84.QueryUidsResponse;
                fromProtoMsg(message: _84.QueryUidsResponseProtoMsg): _84.QueryUidsResponse;
                toProto(message: _84.QueryUidsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryUidsResponse): _84.QueryUidsResponseProtoMsg;
            };
            QueryDropOwnerPairDetailRequest: {
                encode(message: _84.QueryDropOwnerPairDetailRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropOwnerPairDetailRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryDropOwnerPairDetailRequest;
                fromAmino(object: _84.QueryDropOwnerPairDetailRequestAmino): _84.QueryDropOwnerPairDetailRequest;
                toAmino(message: _84.QueryDropOwnerPairDetailRequest): _84.QueryDropOwnerPairDetailRequestAmino;
                fromAminoMsg(object: _84.QueryDropOwnerPairDetailRequestAminoMsg): _84.QueryDropOwnerPairDetailRequest;
                fromProtoMsg(message: _84.QueryDropOwnerPairDetailRequestProtoMsg): _84.QueryDropOwnerPairDetailRequest;
                toProto(message: _84.QueryDropOwnerPairDetailRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDropOwnerPairDetailRequest): _84.QueryDropOwnerPairDetailRequestProtoMsg;
            };
            QueryAllDropRequest: {
                encode(message: _84.QueryAllDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllDropRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryAllDropRequest;
                fromAmino(object: _84.QueryAllDropRequestAmino): _84.QueryAllDropRequest;
                toAmino(message: _84.QueryAllDropRequest): _84.QueryAllDropRequestAmino;
                fromAminoMsg(object: _84.QueryAllDropRequestAminoMsg): _84.QueryAllDropRequest;
                fromProtoMsg(message: _84.QueryAllDropRequestProtoMsg): _84.QueryAllDropRequest;
                toProto(message: _84.QueryAllDropRequest): Uint8Array;
                toProtoMsg(message: _84.QueryAllDropRequest): _84.QueryAllDropRequestProtoMsg;
            };
            QueryDropsResponse: {
                encode(message: _84.QueryDropsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDropsResponse;
                fromPartial(object: {
                    drops?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        pair?: string;
                        drops?: string;
                        product?: string;
                        active?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryDropsResponse;
                fromAmino(object: _84.QueryDropsResponseAmino): _84.QueryDropsResponse;
                toAmino(message: _84.QueryDropsResponse): _84.QueryDropsResponseAmino;
                fromAminoMsg(object: _84.QueryDropsResponseAminoMsg): _84.QueryDropsResponse;
                fromProtoMsg(message: _84.QueryDropsResponseProtoMsg): _84.QueryDropsResponse;
                toProto(message: _84.QueryDropsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDropsResponse): _84.QueryDropsResponseProtoMsg;
            };
            QueryGetMemberRequest: {
                encode(message: _84.QueryGetMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryGetMemberRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                }): _84.QueryGetMemberRequest;
                fromAmino(object: _84.QueryGetMemberRequestAmino): _84.QueryGetMemberRequest;
                toAmino(message: _84.QueryGetMemberRequest): _84.QueryGetMemberRequestAmino;
                fromAminoMsg(object: _84.QueryGetMemberRequestAminoMsg): _84.QueryGetMemberRequest;
                fromProtoMsg(message: _84.QueryGetMemberRequestProtoMsg): _84.QueryGetMemberRequest;
                toProto(message: _84.QueryGetMemberRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGetMemberRequest): _84.QueryGetMemberRequestProtoMsg;
            };
            QueryGetMemberResponse: {
                encode(message: _84.QueryGetMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryGetMemberResponse;
                fromPartial(object: {
                    member?: {
                        pair?: string;
                        denomA?: string;
                        denomB?: string;
                        balance?: string;
                        previous?: string;
                        limit?: string | number | import("long").Long;
                        stop?: string | number | import("long").Long;
                    };
                }): _84.QueryGetMemberResponse;
                fromAmino(object: _84.QueryGetMemberResponseAmino): _84.QueryGetMemberResponse;
                toAmino(message: _84.QueryGetMemberResponse): _84.QueryGetMemberResponseAmino;
                fromAminoMsg(object: _84.QueryGetMemberResponseAminoMsg): _84.QueryGetMemberResponse;
                fromProtoMsg(message: _84.QueryGetMemberResponseProtoMsg): _84.QueryGetMemberResponse;
                toProto(message: _84.QueryGetMemberResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGetMemberResponse): _84.QueryGetMemberResponseProtoMsg;
            };
            QueryAllMemberRequest: {
                encode(message: _84.QueryAllMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllMemberRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryAllMemberRequest;
                fromAmino(object: _84.QueryAllMemberRequestAmino): _84.QueryAllMemberRequest;
                toAmino(message: _84.QueryAllMemberRequest): _84.QueryAllMemberRequestAmino;
                fromAminoMsg(object: _84.QueryAllMemberRequestAminoMsg): _84.QueryAllMemberRequest;
                fromProtoMsg(message: _84.QueryAllMemberRequestProtoMsg): _84.QueryAllMemberRequest;
                toProto(message: _84.QueryAllMemberRequest): Uint8Array;
                toProtoMsg(message: _84.QueryAllMemberRequest): _84.QueryAllMemberRequestProtoMsg;
            };
            QueryAllMemberResponse: {
                encode(message: _84.QueryAllMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllMemberResponse;
                fromPartial(object: {
                    member?: {
                        pair?: string;
                        denomA?: string;
                        denomB?: string;
                        balance?: string;
                        previous?: string;
                        limit?: string | number | import("long").Long;
                        stop?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryAllMemberResponse;
                fromAmino(object: _84.QueryAllMemberResponseAmino): _84.QueryAllMemberResponse;
                toAmino(message: _84.QueryAllMemberResponse): _84.QueryAllMemberResponseAmino;
                fromAminoMsg(object: _84.QueryAllMemberResponseAminoMsg): _84.QueryAllMemberResponse;
                fromProtoMsg(message: _84.QueryAllMemberResponseProtoMsg): _84.QueryAllMemberResponse;
                toProto(message: _84.QueryAllMemberResponse): Uint8Array;
                toProtoMsg(message: _84.QueryAllMemberResponse): _84.QueryAllMemberResponseProtoMsg;
            };
            QueryGetBurningsRequest: {
                encode(message: _84.QueryGetBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryGetBurningsRequest;
                fromPartial(object: {
                    denom?: string;
                }): _84.QueryGetBurningsRequest;
                fromAmino(object: _84.QueryGetBurningsRequestAmino): _84.QueryGetBurningsRequest;
                toAmino(message: _84.QueryGetBurningsRequest): _84.QueryGetBurningsRequestAmino;
                fromAminoMsg(object: _84.QueryGetBurningsRequestAminoMsg): _84.QueryGetBurningsRequest;
                fromProtoMsg(message: _84.QueryGetBurningsRequestProtoMsg): _84.QueryGetBurningsRequest;
                toProto(message: _84.QueryGetBurningsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGetBurningsRequest): _84.QueryGetBurningsRequestProtoMsg;
            };
            QueryGetBurningsResponse: {
                encode(message: _84.QueryGetBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryGetBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _84.QueryGetBurningsResponse;
                fromAmino(object: _84.QueryGetBurningsResponseAmino): _84.QueryGetBurningsResponse;
                toAmino(message: _84.QueryGetBurningsResponse): _84.QueryGetBurningsResponseAmino;
                fromAminoMsg(object: _84.QueryGetBurningsResponseAminoMsg): _84.QueryGetBurningsResponse;
                fromProtoMsg(message: _84.QueryGetBurningsResponseProtoMsg): _84.QueryGetBurningsResponse;
                toProto(message: _84.QueryGetBurningsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGetBurningsResponse): _84.QueryGetBurningsResponseProtoMsg;
            };
            QueryAllBurningsRequest: {
                encode(message: _84.QueryAllBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllBurningsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryAllBurningsRequest;
                fromAmino(object: _84.QueryAllBurningsRequestAmino): _84.QueryAllBurningsRequest;
                toAmino(message: _84.QueryAllBurningsRequest): _84.QueryAllBurningsRequestAmino;
                fromAminoMsg(object: _84.QueryAllBurningsRequestAminoMsg): _84.QueryAllBurningsRequest;
                fromProtoMsg(message: _84.QueryAllBurningsRequestProtoMsg): _84.QueryAllBurningsRequest;
                toProto(message: _84.QueryAllBurningsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryAllBurningsRequest): _84.QueryAllBurningsRequestProtoMsg;
            };
            QueryAllBurningsResponse: {
                encode(message: _84.QueryAllBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryAllBurningsResponse;
                fromAmino(object: _84.QueryAllBurningsResponseAmino): _84.QueryAllBurningsResponse;
                toAmino(message: _84.QueryAllBurningsResponse): _84.QueryAllBurningsResponseAmino;
                fromAminoMsg(object: _84.QueryAllBurningsResponseAminoMsg): _84.QueryAllBurningsResponse;
                fromProtoMsg(message: _84.QueryAllBurningsResponseProtoMsg): _84.QueryAllBurningsResponse;
                toProto(message: _84.QueryAllBurningsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryAllBurningsResponse): _84.QueryAllBurningsResponseProtoMsg;
            };
            QueryOrderRequest: {
                encode(message: _84.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryOrderRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _84.QueryOrderRequest;
                fromAmino(object: _84.QueryOrderRequestAmino): _84.QueryOrderRequest;
                toAmino(message: _84.QueryOrderRequest): _84.QueryOrderRequestAmino;
                fromAminoMsg(object: _84.QueryOrderRequestAminoMsg): _84.QueryOrderRequest;
                fromProtoMsg(message: _84.QueryOrderRequestProtoMsg): _84.QueryOrderRequest;
                toProto(message: _84.QueryOrderRequest): Uint8Array;
                toProtoMsg(message: _84.QueryOrderRequest): _84.QueryOrderRequestProtoMsg;
            };
            QueryOrderResponse: {
                encode(message: _84.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryOrderResponse;
                fromPartial(object: {
                    order?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        updTime?: string | number | import("long").Long;
                    };
                }): _84.QueryOrderResponse;
                fromAmino(object: _84.QueryOrderResponseAmino): _84.QueryOrderResponse;
                toAmino(message: _84.QueryOrderResponse): _84.QueryOrderResponseAmino;
                fromAminoMsg(object: _84.QueryOrderResponseAminoMsg): _84.QueryOrderResponse;
                fromProtoMsg(message: _84.QueryOrderResponseProtoMsg): _84.QueryOrderResponse;
                toProto(message: _84.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _84.QueryOrderResponse): _84.QueryOrderResponseProtoMsg;
            };
            QueryOrdersResponse: {
                encode(message: _84.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        updTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryOrdersResponse;
                fromAmino(object: _84.QueryOrdersResponseAmino): _84.QueryOrdersResponse;
                toAmino(message: _84.QueryOrdersResponse): _84.QueryOrdersResponseAmino;
                fromAminoMsg(object: _84.QueryOrdersResponseAminoMsg): _84.QueryOrdersResponse;
                fromProtoMsg(message: _84.QueryOrdersResponseProtoMsg): _84.QueryOrdersResponse;
                toProto(message: _84.QueryOrdersResponse): Uint8Array;
                toProtoMsg(message: _84.QueryOrdersResponse): _84.QueryOrdersResponseProtoMsg;
            };
            QueryAllOrderRequest: {
                encode(message: _84.QueryAllOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllOrderRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryAllOrderRequest;
                fromAmino(object: _84.QueryAllOrderRequestAmino): _84.QueryAllOrderRequest;
                toAmino(message: _84.QueryAllOrderRequest): _84.QueryAllOrderRequestAmino;
                fromAminoMsg(object: _84.QueryAllOrderRequestAminoMsg): _84.QueryAllOrderRequest;
                fromProtoMsg(message: _84.QueryAllOrderRequestProtoMsg): _84.QueryAllOrderRequest;
                toProto(message: _84.QueryAllOrderRequest): Uint8Array;
                toProtoMsg(message: _84.QueryAllOrderRequest): _84.QueryAllOrderRequestProtoMsg;
            };
            QueryOrderOwnerRequest: {
                encode(message: _84.QueryOrderOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryOrderOwnerRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryOrderOwnerRequest;
                fromAmino(object: _84.QueryOrderOwnerRequestAmino): _84.QueryOrderOwnerRequest;
                toAmino(message: _84.QueryOrderOwnerRequest): _84.QueryOrderOwnerRequestAmino;
                fromAminoMsg(object: _84.QueryOrderOwnerRequestAminoMsg): _84.QueryOrderOwnerRequest;
                fromProtoMsg(message: _84.QueryOrderOwnerRequestProtoMsg): _84.QueryOrderOwnerRequest;
                toProto(message: _84.QueryOrderOwnerRequest): Uint8Array;
                toProtoMsg(message: _84.QueryOrderOwnerRequest): _84.QueryOrderOwnerRequestProtoMsg;
            };
            QueryOrderOwnerUidsResponse: {
                encode(message: _84.QueryOrderOwnerUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryOrderOwnerUidsResponse;
                fromPartial(object: {
                    orders?: {
                        uids?: (string | number | import("long").Long)[];
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryOrderOwnerUidsResponse;
                fromAmino(object: _84.QueryOrderOwnerUidsResponseAmino): _84.QueryOrderOwnerUidsResponse;
                toAmino(message: _84.QueryOrderOwnerUidsResponse): _84.QueryOrderOwnerUidsResponseAmino;
                fromAminoMsg(object: _84.QueryOrderOwnerUidsResponseAminoMsg): _84.QueryOrderOwnerUidsResponse;
                fromProtoMsg(message: _84.QueryOrderOwnerUidsResponseProtoMsg): _84.QueryOrderOwnerUidsResponse;
                toProto(message: _84.QueryOrderOwnerUidsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryOrderOwnerUidsResponse): _84.QueryOrderOwnerUidsResponseProtoMsg;
            };
            QueryOrderOwnerPairRequest: {
                encode(message: _84.QueryOrderOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryOrderOwnerPairRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryOrderOwnerPairRequest;
                fromAmino(object: _84.QueryOrderOwnerPairRequestAmino): _84.QueryOrderOwnerPairRequest;
                toAmino(message: _84.QueryOrderOwnerPairRequest): _84.QueryOrderOwnerPairRequestAmino;
                fromAminoMsg(object: _84.QueryOrderOwnerPairRequestAminoMsg): _84.QueryOrderOwnerPairRequest;
                fromProtoMsg(message: _84.QueryOrderOwnerPairRequestProtoMsg): _84.QueryOrderOwnerPairRequest;
                toProto(message: _84.QueryOrderOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _84.QueryOrderOwnerPairRequest): _84.QueryOrderOwnerPairRequestProtoMsg;
            };
            QueryOrderOwnerPairResponse: {
                encode(message: _84.QueryOrderOwnerPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryOrderOwnerPairResponse;
                fromPartial(object: {
                    order?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        updTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryOrderOwnerPairResponse;
                fromAmino(object: _84.QueryOrderOwnerPairResponseAmino): _84.QueryOrderOwnerPairResponse;
                toAmino(message: _84.QueryOrderOwnerPairResponse): _84.QueryOrderOwnerPairResponseAmino;
                fromAminoMsg(object: _84.QueryOrderOwnerPairResponseAminoMsg): _84.QueryOrderOwnerPairResponse;
                fromProtoMsg(message: _84.QueryOrderOwnerPairResponseProtoMsg): _84.QueryOrderOwnerPairResponse;
                toProto(message: _84.QueryOrderOwnerPairResponse): Uint8Array;
                toProtoMsg(message: _84.QueryOrderOwnerPairResponse): _84.QueryOrderOwnerPairResponseProtoMsg;
            };
            QueryBookRequest: {
                encode(message: _84.QueryBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryBookRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                    orderType?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryBookRequest;
                fromAmino(object: _84.QueryBookRequestAmino): _84.QueryBookRequest;
                toAmino(message: _84.QueryBookRequest): _84.QueryBookRequestAmino;
                fromAminoMsg(object: _84.QueryBookRequestAminoMsg): _84.QueryBookRequest;
                fromProtoMsg(message: _84.QueryBookRequestProtoMsg): _84.QueryBookRequest;
                toProto(message: _84.QueryBookRequest): Uint8Array;
                toProtoMsg(message: _84.QueryBookRequest): _84.QueryBookRequestProtoMsg;
            };
            QueryBookResponse: {
                encode(message: _84.QueryBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryBookResponse;
                fromPartial(object: {
                    book?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        updTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryBookResponse;
                fromAmino(object: _84.QueryBookResponseAmino): _84.QueryBookResponse;
                toAmino(message: _84.QueryBookResponse): _84.QueryBookResponseAmino;
                fromAminoMsg(object: _84.QueryBookResponseAminoMsg): _84.QueryBookResponse;
                fromProtoMsg(message: _84.QueryBookResponseProtoMsg): _84.QueryBookResponse;
                toProto(message: _84.QueryBookResponse): Uint8Array;
                toProtoMsg(message: _84.QueryBookResponse): _84.QueryBookResponseProtoMsg;
            };
            QueryBookendsRequest: {
                encode(message: _84.QueryBookendsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryBookendsRequest;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                }): _84.QueryBookendsRequest;
                fromAmino(object: _84.QueryBookendsRequestAmino): _84.QueryBookendsRequest;
                toAmino(message: _84.QueryBookendsRequest): _84.QueryBookendsRequestAmino;
                fromAminoMsg(object: _84.QueryBookendsRequestAminoMsg): _84.QueryBookendsRequest;
                fromProtoMsg(message: _84.QueryBookendsRequestProtoMsg): _84.QueryBookendsRequest;
                toProto(message: _84.QueryBookendsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryBookendsRequest): _84.QueryBookendsRequestProtoMsg;
            };
            QueryBookendsResponse: {
                encode(message: _84.QueryBookendsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryBookendsResponse;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                    prev?: string | number | import("long").Long;
                    next?: string | number | import("long").Long;
                }): _84.QueryBookendsResponse;
                fromAmino(object: _84.QueryBookendsResponseAmino): _84.QueryBookendsResponse;
                toAmino(message: _84.QueryBookendsResponse): _84.QueryBookendsResponseAmino;
                fromAminoMsg(object: _84.QueryBookendsResponseAminoMsg): _84.QueryBookendsResponse;
                fromProtoMsg(message: _84.QueryBookendsResponseProtoMsg): _84.QueryBookendsResponse;
                toProto(message: _84.QueryBookendsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryBookendsResponse): _84.QueryBookendsResponseProtoMsg;
            };
            QueryHistoryRequest: {
                encode(message: _84.QueryHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoryRequest;
                fromPartial(object: {
                    pair?: string;
                    length?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryHistoryRequest;
                fromAmino(object: _84.QueryHistoryRequestAmino): _84.QueryHistoryRequest;
                toAmino(message: _84.QueryHistoryRequest): _84.QueryHistoryRequestAmino;
                fromAminoMsg(object: _84.QueryHistoryRequestAminoMsg): _84.QueryHistoryRequest;
                fromProtoMsg(message: _84.QueryHistoryRequestProtoMsg): _84.QueryHistoryRequest;
                toProto(message: _84.QueryHistoryRequest): Uint8Array;
                toProtoMsg(message: _84.QueryHistoryRequest): _84.QueryHistoryRequestProtoMsg;
            };
            QueryHistoryResponse: {
                encode(message: _84.QueryHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoryResponse;
                fromPartial(object: {
                    history?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        updTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryHistoryResponse;
                fromAmino(object: _84.QueryHistoryResponseAmino): _84.QueryHistoryResponse;
                toAmino(message: _84.QueryHistoryResponse): _84.QueryHistoryResponseAmino;
                fromAminoMsg(object: _84.QueryHistoryResponseAminoMsg): _84.QueryHistoryResponse;
                fromProtoMsg(message: _84.QueryHistoryResponseProtoMsg): _84.QueryHistoryResponse;
                toProto(message: _84.QueryHistoryResponse): Uint8Array;
                toProtoMsg(message: _84.QueryHistoryResponse): _84.QueryHistoryResponseProtoMsg;
            };
            QueryQuoteRequest: {
                encode(message: _84.QueryQuoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryQuoteRequest;
                fromPartial(object: {
                    denomAsk?: string;
                    denomBid?: string;
                    denomAmount?: string;
                    amount?: string;
                }): _84.QueryQuoteRequest;
                fromAmino(object: _84.QueryQuoteRequestAmino): _84.QueryQuoteRequest;
                toAmino(message: _84.QueryQuoteRequest): _84.QueryQuoteRequestAmino;
                fromAminoMsg(object: _84.QueryQuoteRequestAminoMsg): _84.QueryQuoteRequest;
                fromProtoMsg(message: _84.QueryQuoteRequestProtoMsg): _84.QueryQuoteRequest;
                toProto(message: _84.QueryQuoteRequest): Uint8Array;
                toProtoMsg(message: _84.QueryQuoteRequest): _84.QueryQuoteRequestProtoMsg;
            };
            QueryQuoteResponse: {
                encode(message: _84.QueryQuoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryQuoteResponse;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _84.QueryQuoteResponse;
                fromAmino(object: _84.QueryQuoteResponseAmino): _84.QueryQuoteResponse;
                toAmino(message: _84.QueryQuoteResponse): _84.QueryQuoteResponseAmino;
                fromAminoMsg(object: _84.QueryQuoteResponseAminoMsg): _84.QueryQuoteResponse;
                fromProtoMsg(message: _84.QueryQuoteResponseProtoMsg): _84.QueryQuoteResponse;
                toProto(message: _84.QueryQuoteResponse): Uint8Array;
                toProtoMsg(message: _84.QueryQuoteResponse): _84.QueryQuoteResponseProtoMsg;
            };
            Pool: {
                encode(message: _83.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Pool;
                fromPartial(object: {
                    pair?: string;
                    denom1?: string;
                    denom2?: string;
                    volume1?: {
                        denom?: string;
                        amount?: string;
                    };
                    volume2?: {
                        denom?: string;
                        amount?: string;
                    };
                    leaders?: {
                        address?: string;
                        drops?: string;
                    }[];
                    drops?: string;
                    history?: string | number | import("long").Long;
                }): _83.Pool;
                fromAmino(object: _83.PoolAmino): _83.Pool;
                toAmino(message: _83.Pool): _83.PoolAmino;
                fromAminoMsg(object: _83.PoolAminoMsg): _83.Pool;
                fromProtoMsg(message: _83.PoolProtoMsg): _83.Pool;
                toProto(message: _83.Pool): Uint8Array;
                toProtoMsg(message: _83.Pool): _83.PoolProtoMsg;
            };
            Leader: {
                encode(message: _83.Leader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Leader;
                fromPartial(object: {
                    address?: string;
                    drops?: string;
                }): _83.Leader;
                fromAmino(object: _83.LeaderAmino): _83.Leader;
                toAmino(message: _83.Leader): _83.LeaderAmino;
                fromAminoMsg(object: _83.LeaderAminoMsg): _83.Leader;
                fromProtoMsg(message: _83.LeaderProtoMsg): _83.Leader;
                toProto(message: _83.Leader): Uint8Array;
                toProtoMsg(message: _83.Leader): _83.LeaderProtoMsg;
            };
            Volume: {
                encode(message: _83.Volume, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Volume;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _83.Volume;
                fromAmino(object: _83.VolumeAmino): _83.Volume;
                toAmino(message: _83.Volume): _83.VolumeAmino;
                fromAminoMsg(object: _83.VolumeAminoMsg): _83.Volume;
                fromProtoMsg(message: _83.VolumeProtoMsg): _83.Volume;
                toProto(message: _83.Volume): Uint8Array;
                toProtoMsg(message: _83.Volume): _83.VolumeProtoMsg;
            };
            Params: {
                encode(message: _82.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Params;
                fromPartial(object: {
                    earnRates?: string;
                    burnRate?: string;
                    burnCoin?: string;
                    marketFee?: string;
                }): _82.Params;
                fromAmino(object: _82.ParamsAmino): _82.Params;
                toAmino(message: _82.Params): _82.ParamsAmino;
                fromAminoMsg(object: _82.ParamsAminoMsg): _82.Params;
                fromProtoMsg(message: _82.ParamsProtoMsg): _82.Params;
                toProto(message: _82.Params): Uint8Array;
                toProtoMsg(message: _82.Params): _82.ParamsProtoMsg;
            };
            Order: {
                encode(message: _81.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Order;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                    owner?: string;
                    status?: string;
                    orderType?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    amount?: string;
                    rate?: string[];
                    prev?: string | number | import("long").Long;
                    next?: string | number | import("long").Long;
                    begTime?: string | number | import("long").Long;
                    updTime?: string | number | import("long").Long;
                }): _81.Order;
                fromAmino(object: _81.OrderAmino): _81.Order;
                toAmino(message: _81.Order): _81.OrderAmino;
                fromAminoMsg(object: _81.OrderAminoMsg): _81.Order;
                fromProtoMsg(message: _81.OrderProtoMsg): _81.Order;
                toProto(message: _81.Order): Uint8Array;
                toProtoMsg(message: _81.Order): _81.OrderProtoMsg;
            };
            Orders: {
                encode(message: _81.Orders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Orders;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                }): _81.Orders;
                fromAmino(object: _81.OrdersAmino): _81.Orders;
                toAmino(message: _81.Orders): _81.OrdersAmino;
                fromAminoMsg(object: _81.OrdersAminoMsg): _81.Orders;
                fromProtoMsg(message: _81.OrdersProtoMsg): _81.Orders;
                toProto(message: _81.Orders): Uint8Array;
                toProtoMsg(message: _81.Orders): _81.OrdersProtoMsg;
            };
            OrderResponse: {
                encode(message: _81.OrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.OrderResponse;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                    owner?: string;
                    status?: string;
                    orderType?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    amount?: string;
                    rate?: string[];
                    prev?: string | number | import("long").Long;
                    next?: string | number | import("long").Long;
                    begTime?: string | number | import("long").Long;
                    updTime?: string | number | import("long").Long;
                }): _81.OrderResponse;
                fromAmino(object: _81.OrderResponseAmino): _81.OrderResponse;
                toAmino(message: _81.OrderResponse): _81.OrderResponseAmino;
                fromAminoMsg(object: _81.OrderResponseAminoMsg): _81.OrderResponse;
                fromProtoMsg(message: _81.OrderResponseProtoMsg): _81.OrderResponse;
                toProto(message: _81.OrderResponse): Uint8Array;
                toProtoMsg(message: _81.OrderResponse): _81.OrderResponseProtoMsg;
            };
            Member: {
                encode(message: _80.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Member;
                fromPartial(object: {
                    pair?: string;
                    denomA?: string;
                    denomB?: string;
                    balance?: string;
                    previous?: string;
                    limit?: string | number | import("long").Long;
                    stop?: string | number | import("long").Long;
                }): _80.Member;
                fromAmino(object: _80.MemberAmino): _80.Member;
                toAmino(message: _80.Member): _80.MemberAmino;
                fromAminoMsg(object: _80.MemberAminoMsg): _80.Member;
                fromProtoMsg(message: _80.MemberProtoMsg): _80.Member;
                toProto(message: _80.Member): Uint8Array;
                toProtoMsg(message: _80.Member): _80.MemberProtoMsg;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GenesisState;
                fromPartial(object: {
                    params?: {
                        earnRates?: string;
                        burnRate?: string;
                        burnCoin?: string;
                        marketFee?: string;
                    };
                    poolList?: {
                        pair?: string;
                        denom1?: string;
                        denom2?: string;
                        volume1?: {
                            denom?: string;
                            amount?: string;
                        };
                        volume2?: {
                            denom?: string;
                            amount?: string;
                        };
                        leaders?: {
                            address?: string;
                            drops?: string;
                        }[];
                        drops?: string;
                        history?: string | number | import("long").Long;
                    }[];
                    dropList?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        pair?: string;
                        drops?: string;
                        product?: string;
                        active?: boolean;
                    }[];
                    memberList?: {
                        pair?: string;
                        denomA?: string;
                        denomB?: string;
                        balance?: string;
                        previous?: string;
                        limit?: string | number | import("long").Long;
                        stop?: string | number | import("long").Long;
                    }[];
                    burningsList?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    orderList?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        updTime?: string | number | import("long").Long;
                    }[];
                }): _79.GenesisState;
                fromAmino(object: _79.GenesisStateAmino): _79.GenesisState;
                toAmino(message: _79.GenesisState): _79.GenesisStateAmino;
                fromAminoMsg(object: _79.GenesisStateAminoMsg): _79.GenesisState;
                fromProtoMsg(message: _79.GenesisStateProtoMsg): _79.GenesisState;
                toProto(message: _79.GenesisState): Uint8Array;
                toProtoMsg(message: _79.GenesisState): _79.GenesisStateProtoMsg;
            };
            Drop: {
                encode(message: _78.Drop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Drop;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                    owner?: string;
                    pair?: string;
                    drops?: string;
                    product?: string;
                    active?: boolean;
                }): _78.Drop;
                fromAmino(object: _78.DropAmino): _78.Drop;
                toAmino(message: _78.Drop): _78.DropAmino;
                fromAminoMsg(object: _78.DropAminoMsg): _78.Drop;
                fromProtoMsg(message: _78.DropProtoMsg): _78.Drop;
                toProto(message: _78.Drop): Uint8Array;
                toProtoMsg(message: _78.Drop): _78.DropProtoMsg;
            };
            Drops: {
                encode(message: _78.Drops, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Drops;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    sum?: string;
                }): _78.Drops;
                fromAmino(object: _78.DropsAmino): _78.Drops;
                toAmino(message: _78.Drops): _78.DropsAmino;
                fromAminoMsg(object: _78.DropsAminoMsg): _78.Drops;
                fromProtoMsg(message: _78.DropsProtoMsg): _78.Drops;
                toProto(message: _78.Drops): Uint8Array;
                toProtoMsg(message: _78.Drops): _78.DropsProtoMsg;
            };
            DropPairs: {
                encode(message: _78.DropPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.DropPairs;
                fromPartial(object: {
                    pairs?: string[];
                }): _78.DropPairs;
                fromAmino(object: _78.DropPairsAmino): _78.DropPairs;
                toAmino(message: _78.DropPairs): _78.DropPairsAmino;
                fromAminoMsg(object: _78.DropPairsAminoMsg): _78.DropPairs;
                fromProtoMsg(message: _78.DropPairsProtoMsg): _78.DropPairs;
                toProto(message: _78.DropPairs): Uint8Array;
                toProtoMsg(message: _78.DropPairs): _78.DropPairsProtoMsg;
            };
            Burnings: {
                encode(message: _77.Burnings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Burnings;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _77.Burnings;
                fromAmino(object: _77.BurningsAmino): _77.Burnings;
                toAmino(message: _77.Burnings): _77.BurningsAmino;
                fromAminoMsg(object: _77.BurningsAminoMsg): _77.Burnings;
                fromProtoMsg(message: _77.BurningsProtoMsg): _77.Burnings;
                toProto(message: _77.Burnings): Uint8Array;
                toProtoMsg(message: _77.Burnings): _77.BurningsProtoMsg;
            };
            Burned: {
                encode(message: _77.Burned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Burned;
                fromPartial(object: {
                    amount?: string;
                }): _77.Burned;
                fromAmino(object: _77.BurnedAmino): _77.Burned;
                toAmino(message: _77.Burned): _77.BurnedAmino;
                fromAminoMsg(object: _77.BurnedAminoMsg): _77.Burned;
                fromProtoMsg(message: _77.BurnedProtoMsg): _77.Burned;
                toProto(message: _77.Burned): Uint8Array;
                toProtoMsg(message: _77.Burned): _77.BurnedProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            pendulumlabs: {
                market: {
                    market: _119.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            pendulumlabs: {
                market: {
                    market: {
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                        burned(request?: _84.QueryBurnedRequest): Promise<_84.QueryBurnedResponse>;
                        pool(request: _84.QueryGetPoolRequest): Promise<_84.QueryGetPoolResponse>;
                        poolAll(request?: _84.QueryAllPoolRequest): Promise<_84.QueryAllPoolResponse>;
                        volume(request: _84.QueryVolumeRequest): Promise<_84.QueryVolumeResponse>;
                        volumeAll(request?: _84.QueryAllVolumeRequest): Promise<_84.QueryAllVolumeResponse>;
                        drop(request: _84.QueryDropRequest): Promise<_84.QueryDropResponse>;
                        dropAmounts(request: _84.QueryDropAmountsRequest): Promise<_84.QueryDropAmountsResponse>;
                        dropCoin(request: _84.QueryDropCoinRequest): Promise<_84.QueryDropCoinResponse>;
                        dropsToCoins(request: _84.QueryDropsToCoinsRequest): Promise<_84.QueryDropsToCoinsResponse>;
                        dropPairs(request: _84.QueryDropPairsRequest): Promise<_84.QueryDropPairsResponse>;
                        dropOwnerPair(request: _84.QueryDropOwnerPairRequest): Promise<_84.QueryDropsResponse>;
                        dropAll(request?: _84.QueryAllDropRequest): Promise<_84.QueryDropsResponse>;
                        member(request: _84.QueryGetMemberRequest): Promise<_84.QueryGetMemberResponse>;
                        memberAll(request?: _84.QueryAllMemberRequest): Promise<_84.QueryAllMemberResponse>;
                        burnings(request: _84.QueryGetBurningsRequest): Promise<_84.QueryGetBurningsResponse>;
                        burningsAll(request?: _84.QueryAllBurningsRequest): Promise<_84.QueryAllBurningsResponse>;
                        order(request: _84.QueryOrderRequest): Promise<_84.QueryOrderResponse>;
                        orderAll(request?: _84.QueryAllOrderRequest): Promise<_84.QueryOrdersResponse>;
                        orderOwner(request: _84.QueryOrderOwnerRequest): Promise<_84.QueryOrdersResponse>;
                        orderOwnerUids(request: _84.QueryOrderOwnerRequest): Promise<_84.QueryOrderOwnerUidsResponse>;
                        book(request: _84.QueryBookRequest): Promise<_84.QueryBookResponse>;
                        bookends(request: _84.QueryBookendsRequest): Promise<_84.QueryBookendsResponse>;
                        history(request: _84.QueryHistoryRequest): Promise<_84.QueryHistoryResponse>;
                        quote(request: _84.QueryQuoteRequest): Promise<_84.QueryQuoteResponse>;
                    };
                };
            };
        }>;
    };
}
