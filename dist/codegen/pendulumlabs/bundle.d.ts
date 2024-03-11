/// <reference types="long" />
import * as _79 from "../market/burnings";
import * as _80 from "../market/drop";
import * as _81 from "../market/genesis";
import * as _82 from "../market/member";
import * as _83 from "../market/order";
import * as _84 from "../market/params";
import * as _85 from "../market/pool";
import * as _86 from "../market/proposal";
import * as _87 from "../market/query";
import * as _88 from "../market/tx";
import * as _124 from "../market/query.rpc.Query";
import * as _125 from "../market/tx.rpc.msg";
export declare namespace pendulumlabs {
    namespace market {
        const market: {
            MsgClientImpl: typeof _125.MsgClientImpl;
            QueryClientImpl: typeof _124.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                burned(request?: _87.QueryBurnedRequest): Promise<_87.QueryBurnedResponse>;
                pool(request: _87.QueryGetPoolRequest): Promise<_87.QueryGetPoolResponse>;
                poolAll(request?: _87.QueryAllPoolRequest): Promise<_87.QueryAllPoolResponse>;
                volume(request: _87.QueryVolumeRequest): Promise<_87.QueryVolumeResponse>;
                volumeAll(request?: _87.QueryAllVolumeRequest): Promise<_87.QueryAllVolumeResponse>;
                drop(request: _87.QueryDropRequest): Promise<_87.QueryDropResponse>;
                dropAmounts(request: _87.QueryDropAmountsRequest): Promise<_87.QueryDropAmountsResponse>;
                dropCoin(request: _87.QueryDropCoinRequest): Promise<_87.QueryDropCoinResponse>;
                dropsToCoins(request: _87.QueryDropsToCoinsRequest): Promise<_87.QueryDropsToCoinsResponse>;
                dropPairs(request: _87.QueryDropPairsRequest): Promise<_87.QueryDropPairsResponse>;
                dropOwnerPair(request: _87.QueryDropOwnerPairRequest): Promise<_87.QueryDropsResponse>;
                dropAll(request?: _87.QueryAllDropRequest): Promise<_87.QueryDropsResponse>;
                member(request: _87.QueryGetMemberRequest): Promise<_87.QueryGetMemberResponse>;
                memberAll(request?: _87.QueryAllMemberRequest): Promise<_87.QueryAllMemberResponse>;
                burnings(request: _87.QueryGetBurningsRequest): Promise<_87.QueryGetBurningsResponse>;
                burningsAll(request?: _87.QueryAllBurningsRequest): Promise<_87.QueryAllBurningsResponse>;
                order(request: _87.QueryOrderRequest): Promise<_87.QueryOrderResponse>;
                orderAll(request?: _87.QueryAllOrderRequest): Promise<_87.QueryOrdersResponse>;
                orderOwner(request: _87.QueryOrderOwnerRequest): Promise<_87.QueryOrdersResponse>;
                orderOwnerUids(request: _87.QueryOrderOwnerRequest): Promise<_87.QueryOrderOwnerUidsResponse>;
                book(request: _87.QueryBookRequest): Promise<_87.QueryBookResponse>;
                bookends(request: _87.QueryBookendsRequest): Promise<_87.QueryBookendsResponse>;
                history(request: _87.QueryHistoryRequest): Promise<_87.QueryHistoryResponse>;
                quote(request: _87.QueryQuoteRequest): Promise<_87.QueryQuoteResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPool(value: _88.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDrop(value: _88.MsgCreateDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemDrop(value: _88.MsgRedeemDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createOrder(value: _88.MsgCreateOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _88.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    marketOrder(value: _88.MsgMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPool(value: _88.MsgCreatePool): {
                        typeUrl: string;
                        value: _88.MsgCreatePool;
                    };
                    createDrop(value: _88.MsgCreateDrop): {
                        typeUrl: string;
                        value: _88.MsgCreateDrop;
                    };
                    redeemDrop(value: _88.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _88.MsgRedeemDrop;
                    };
                    createOrder(value: _88.MsgCreateOrder): {
                        typeUrl: string;
                        value: _88.MsgCreateOrder;
                    };
                    cancelOrder(value: _88.MsgCancelOrder): {
                        typeUrl: string;
                        value: _88.MsgCancelOrder;
                    };
                    marketOrder(value: _88.MsgMarketOrder): {
                        typeUrl: string;
                        value: _88.MsgMarketOrder;
                    };
                };
                fromPartial: {
                    createPool(value: _88.MsgCreatePool): {
                        typeUrl: string;
                        value: _88.MsgCreatePool;
                    };
                    createDrop(value: _88.MsgCreateDrop): {
                        typeUrl: string;
                        value: _88.MsgCreateDrop;
                    };
                    redeemDrop(value: _88.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _88.MsgRedeemDrop;
                    };
                    createOrder(value: _88.MsgCreateOrder): {
                        typeUrl: string;
                        value: _88.MsgCreateOrder;
                    };
                    cancelOrder(value: _88.MsgCancelOrder): {
                        typeUrl: string;
                        value: _88.MsgCancelOrder;
                    };
                    marketOrder(value: _88.MsgMarketOrder): {
                        typeUrl: string;
                        value: _88.MsgMarketOrder;
                    };
                };
            };
            AminoConverter: {
                "/pendulumlabs.market.market.MsgCreatePool": {
                    aminoType: string;
                    toAmino: (message: _88.MsgCreatePool) => _88.MsgCreatePoolAmino;
                    fromAmino: (object: _88.MsgCreatePoolAmino) => _88.MsgCreatePool;
                };
                "/pendulumlabs.market.market.MsgCreateDrop": {
                    aminoType: string;
                    toAmino: (message: _88.MsgCreateDrop) => _88.MsgCreateDropAmino;
                    fromAmino: (object: _88.MsgCreateDropAmino) => _88.MsgCreateDrop;
                };
                "/pendulumlabs.market.market.MsgRedeemDrop": {
                    aminoType: string;
                    toAmino: (message: _88.MsgRedeemDrop) => _88.MsgRedeemDropAmino;
                    fromAmino: (object: _88.MsgRedeemDropAmino) => _88.MsgRedeemDrop;
                };
                "/pendulumlabs.market.market.MsgCreateOrder": {
                    aminoType: string;
                    toAmino: (message: _88.MsgCreateOrder) => _88.MsgCreateOrderAmino;
                    fromAmino: (object: _88.MsgCreateOrderAmino) => _88.MsgCreateOrder;
                };
                "/pendulumlabs.market.market.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: (message: _88.MsgCancelOrder) => _88.MsgCancelOrderAmino;
                    fromAmino: (object: _88.MsgCancelOrderAmino) => _88.MsgCancelOrder;
                };
                "/pendulumlabs.market.market.MsgMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _88.MsgMarketOrder) => _88.MsgMarketOrderAmino;
                    fromAmino: (object: _88.MsgMarketOrderAmino) => _88.MsgMarketOrder;
                };
            };
            MsgCreatePool: {
                encode(message: _88.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCreatePool;
                fromPartial(object: {
                    creator?: string;
                    coinA?: string;
                    coinB?: string;
                }): _88.MsgCreatePool;
                fromAmino(object: _88.MsgCreatePoolAmino): _88.MsgCreatePool;
                toAmino(message: _88.MsgCreatePool): _88.MsgCreatePoolAmino;
                fromAminoMsg(object: _88.MsgCreatePoolAminoMsg): _88.MsgCreatePool;
                fromProtoMsg(message: _88.MsgCreatePoolProtoMsg): _88.MsgCreatePool;
                toProto(message: _88.MsgCreatePool): Uint8Array;
                toProtoMsg(message: _88.MsgCreatePool): _88.MsgCreatePoolProtoMsg;
            };
            MsgCreatePoolResponse: {
                encode(_: _88.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCreatePoolResponse;
                fromPartial(_: {}): _88.MsgCreatePoolResponse;
                fromAmino(_: _88.MsgCreatePoolResponseAmino): _88.MsgCreatePoolResponse;
                toAmino(_: _88.MsgCreatePoolResponse): _88.MsgCreatePoolResponseAmino;
                fromAminoMsg(object: _88.MsgCreatePoolResponseAminoMsg): _88.MsgCreatePoolResponse;
                fromProtoMsg(message: _88.MsgCreatePoolResponseProtoMsg): _88.MsgCreatePoolResponse;
                toProto(message: _88.MsgCreatePoolResponse): Uint8Array;
                toProtoMsg(message: _88.MsgCreatePoolResponse): _88.MsgCreatePoolResponseProtoMsg;
            };
            MsgCreateDrop: {
                encode(message: _88.MsgCreateDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCreateDrop;
                fromPartial(object: {
                    creator?: string;
                    pair?: string;
                    drops?: string;
                }): _88.MsgCreateDrop;
                fromAmino(object: _88.MsgCreateDropAmino): _88.MsgCreateDrop;
                toAmino(message: _88.MsgCreateDrop): _88.MsgCreateDropAmino;
                fromAminoMsg(object: _88.MsgCreateDropAminoMsg): _88.MsgCreateDrop;
                fromProtoMsg(message: _88.MsgCreateDropProtoMsg): _88.MsgCreateDrop;
                toProto(message: _88.MsgCreateDrop): Uint8Array;
                toProtoMsg(message: _88.MsgCreateDrop): _88.MsgCreateDropProtoMsg;
            };
            MsgCreateDropResponse: {
                encode(_: _88.MsgCreateDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCreateDropResponse;
                fromPartial(_: {}): _88.MsgCreateDropResponse;
                fromAmino(_: _88.MsgCreateDropResponseAmino): _88.MsgCreateDropResponse;
                toAmino(_: _88.MsgCreateDropResponse): _88.MsgCreateDropResponseAmino;
                fromAminoMsg(object: _88.MsgCreateDropResponseAminoMsg): _88.MsgCreateDropResponse;
                fromProtoMsg(message: _88.MsgCreateDropResponseProtoMsg): _88.MsgCreateDropResponse;
                toProto(message: _88.MsgCreateDropResponse): Uint8Array;
                toProtoMsg(message: _88.MsgCreateDropResponse): _88.MsgCreateDropResponseProtoMsg;
            };
            MsgRedeemDrop: {
                encode(message: _88.MsgRedeemDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgRedeemDrop;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _88.MsgRedeemDrop;
                fromAmino(object: _88.MsgRedeemDropAmino): _88.MsgRedeemDrop;
                toAmino(message: _88.MsgRedeemDrop): _88.MsgRedeemDropAmino;
                fromAminoMsg(object: _88.MsgRedeemDropAminoMsg): _88.MsgRedeemDrop;
                fromProtoMsg(message: _88.MsgRedeemDropProtoMsg): _88.MsgRedeemDrop;
                toProto(message: _88.MsgRedeemDrop): Uint8Array;
                toProtoMsg(message: _88.MsgRedeemDrop): _88.MsgRedeemDropProtoMsg;
            };
            MsgRedeemDropResponse: {
                encode(_: _88.MsgRedeemDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgRedeemDropResponse;
                fromPartial(_: {}): _88.MsgRedeemDropResponse;
                fromAmino(_: _88.MsgRedeemDropResponseAmino): _88.MsgRedeemDropResponse;
                toAmino(_: _88.MsgRedeemDropResponse): _88.MsgRedeemDropResponseAmino;
                fromAminoMsg(object: _88.MsgRedeemDropResponseAminoMsg): _88.MsgRedeemDropResponse;
                fromProtoMsg(message: _88.MsgRedeemDropResponseProtoMsg): _88.MsgRedeemDropResponse;
                toProto(message: _88.MsgRedeemDropResponse): Uint8Array;
                toProtoMsg(message: _88.MsgRedeemDropResponse): _88.MsgRedeemDropResponseProtoMsg;
            };
            MsgCreateOrder: {
                encode(message: _88.MsgCreateOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCreateOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    orderType?: string;
                    amount?: string;
                    rate?: string[];
                    prev?: string;
                    next?: string;
                }): _88.MsgCreateOrder;
                fromAmino(object: _88.MsgCreateOrderAmino): _88.MsgCreateOrder;
                toAmino(message: _88.MsgCreateOrder): _88.MsgCreateOrderAmino;
                fromAminoMsg(object: _88.MsgCreateOrderAminoMsg): _88.MsgCreateOrder;
                fromProtoMsg(message: _88.MsgCreateOrderProtoMsg): _88.MsgCreateOrder;
                toProto(message: _88.MsgCreateOrder): Uint8Array;
                toProtoMsg(message: _88.MsgCreateOrder): _88.MsgCreateOrderProtoMsg;
            };
            MsgCreateOrderResponse: {
                encode(message: _88.MsgCreateOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCreateOrderResponse;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _88.MsgCreateOrderResponse;
                fromAmino(object: _88.MsgCreateOrderResponseAmino): _88.MsgCreateOrderResponse;
                toAmino(message: _88.MsgCreateOrderResponse): _88.MsgCreateOrderResponseAmino;
                fromAminoMsg(object: _88.MsgCreateOrderResponseAminoMsg): _88.MsgCreateOrderResponse;
                fromProtoMsg(message: _88.MsgCreateOrderResponseProtoMsg): _88.MsgCreateOrderResponse;
                toProto(message: _88.MsgCreateOrderResponse): Uint8Array;
                toProtoMsg(message: _88.MsgCreateOrderResponse): _88.MsgCreateOrderResponseProtoMsg;
            };
            MsgCancelOrder: {
                encode(message: _88.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCancelOrder;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _88.MsgCancelOrder;
                fromAmino(object: _88.MsgCancelOrderAmino): _88.MsgCancelOrder;
                toAmino(message: _88.MsgCancelOrder): _88.MsgCancelOrderAmino;
                fromAminoMsg(object: _88.MsgCancelOrderAminoMsg): _88.MsgCancelOrder;
                fromProtoMsg(message: _88.MsgCancelOrderProtoMsg): _88.MsgCancelOrder;
                toProto(message: _88.MsgCancelOrder): Uint8Array;
                toProtoMsg(message: _88.MsgCancelOrder): _88.MsgCancelOrderProtoMsg;
            };
            MsgCancelOrderResponse: {
                encode(_: _88.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCancelOrderResponse;
                fromPartial(_: {}): _88.MsgCancelOrderResponse;
                fromAmino(_: _88.MsgCancelOrderResponseAmino): _88.MsgCancelOrderResponse;
                toAmino(_: _88.MsgCancelOrderResponse): _88.MsgCancelOrderResponseAmino;
                fromAminoMsg(object: _88.MsgCancelOrderResponseAminoMsg): _88.MsgCancelOrderResponse;
                fromProtoMsg(message: _88.MsgCancelOrderResponseProtoMsg): _88.MsgCancelOrderResponse;
                toProto(message: _88.MsgCancelOrderResponse): Uint8Array;
                toProtoMsg(message: _88.MsgCancelOrderResponse): _88.MsgCancelOrderResponseProtoMsg;
            };
            MsgMarketOrder: {
                encode(message: _88.MsgMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgMarketOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    amountAsk?: string;
                    denomBid?: string;
                    amountBid?: string;
                    slippage?: string;
                }): _88.MsgMarketOrder;
                fromAmino(object: _88.MsgMarketOrderAmino): _88.MsgMarketOrder;
                toAmino(message: _88.MsgMarketOrder): _88.MsgMarketOrderAmino;
                fromAminoMsg(object: _88.MsgMarketOrderAminoMsg): _88.MsgMarketOrder;
                fromProtoMsg(message: _88.MsgMarketOrderProtoMsg): _88.MsgMarketOrder;
                toProto(message: _88.MsgMarketOrder): Uint8Array;
                toProtoMsg(message: _88.MsgMarketOrder): _88.MsgMarketOrderProtoMsg;
            };
            MsgMarketOrderResponse: {
                encode(message: _88.MsgMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgMarketOrderResponse;
                fromPartial(object: {
                    amountBid?: string;
                    amountAsk?: string;
                    slippage?: string;
                }): _88.MsgMarketOrderResponse;
                fromAmino(object: _88.MsgMarketOrderResponseAmino): _88.MsgMarketOrderResponse;
                toAmino(message: _88.MsgMarketOrderResponse): _88.MsgMarketOrderResponseAmino;
                fromAminoMsg(object: _88.MsgMarketOrderResponseAminoMsg): _88.MsgMarketOrderResponse;
                fromProtoMsg(message: _88.MsgMarketOrderResponseProtoMsg): _88.MsgMarketOrderResponse;
                toProto(message: _88.MsgMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _88.MsgMarketOrderResponse): _88.MsgMarketOrderResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsRequest;
                fromPartial(_: {}): _87.QueryParamsRequest;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                toProto(message: _87.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        earnRates?: string;
                        burnRate?: string;
                        burnCoin?: string;
                        marketFee?: string;
                    };
                }): _87.QueryParamsResponse;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                toProto(message: _87.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
            };
            QueryGetPoolRequest: {
                encode(message: _87.QueryGetPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryGetPoolRequest;
                fromPartial(object: {
                    pair?: string;
                }): _87.QueryGetPoolRequest;
                fromAmino(object: _87.QueryGetPoolRequestAmino): _87.QueryGetPoolRequest;
                toAmino(message: _87.QueryGetPoolRequest): _87.QueryGetPoolRequestAmino;
                fromAminoMsg(object: _87.QueryGetPoolRequestAminoMsg): _87.QueryGetPoolRequest;
                fromProtoMsg(message: _87.QueryGetPoolRequestProtoMsg): _87.QueryGetPoolRequest;
                toProto(message: _87.QueryGetPoolRequest): Uint8Array;
                toProtoMsg(message: _87.QueryGetPoolRequest): _87.QueryGetPoolRequestProtoMsg;
            };
            QueryGetPoolResponse: {
                encode(message: _87.QueryGetPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryGetPoolResponse;
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
                }): _87.QueryGetPoolResponse;
                fromAmino(object: _87.QueryGetPoolResponseAmino): _87.QueryGetPoolResponse;
                toAmino(message: _87.QueryGetPoolResponse): _87.QueryGetPoolResponseAmino;
                fromAminoMsg(object: _87.QueryGetPoolResponseAminoMsg): _87.QueryGetPoolResponse;
                fromProtoMsg(message: _87.QueryGetPoolResponseProtoMsg): _87.QueryGetPoolResponse;
                toProto(message: _87.QueryGetPoolResponse): Uint8Array;
                toProtoMsg(message: _87.QueryGetPoolResponse): _87.QueryGetPoolResponseProtoMsg;
            };
            QueryAllPoolRequest: {
                encode(message: _87.QueryAllPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllPoolRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _87.QueryAllPoolRequest;
                fromAmino(object: _87.QueryAllPoolRequestAmino): _87.QueryAllPoolRequest;
                toAmino(message: _87.QueryAllPoolRequest): _87.QueryAllPoolRequestAmino;
                fromAminoMsg(object: _87.QueryAllPoolRequestAminoMsg): _87.QueryAllPoolRequest;
                fromProtoMsg(message: _87.QueryAllPoolRequestProtoMsg): _87.QueryAllPoolRequest;
                toProto(message: _87.QueryAllPoolRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAllPoolRequest): _87.QueryAllPoolRequestProtoMsg;
            };
            QueryAllPoolResponse: {
                encode(message: _87.QueryAllPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllPoolResponse;
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
                }): _87.QueryAllPoolResponse;
                fromAmino(object: _87.QueryAllPoolResponseAmino): _87.QueryAllPoolResponse;
                toAmino(message: _87.QueryAllPoolResponse): _87.QueryAllPoolResponseAmino;
                fromAminoMsg(object: _87.QueryAllPoolResponseAminoMsg): _87.QueryAllPoolResponse;
                fromProtoMsg(message: _87.QueryAllPoolResponseProtoMsg): _87.QueryAllPoolResponse;
                toProto(message: _87.QueryAllPoolResponse): Uint8Array;
                toProtoMsg(message: _87.QueryAllPoolResponse): _87.QueryAllPoolResponseProtoMsg;
            };
            QueryVolumeRequest: {
                encode(message: _87.QueryVolumeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryVolumeRequest;
                fromPartial(object: {
                    denom?: string;
                }): _87.QueryVolumeRequest;
                fromAmino(object: _87.QueryVolumeRequestAmino): _87.QueryVolumeRequest;
                toAmino(message: _87.QueryVolumeRequest): _87.QueryVolumeRequestAmino;
                fromAminoMsg(object: _87.QueryVolumeRequestAminoMsg): _87.QueryVolumeRequest;
                fromProtoMsg(message: _87.QueryVolumeRequestProtoMsg): _87.QueryVolumeRequest;
                toProto(message: _87.QueryVolumeRequest): Uint8Array;
                toProtoMsg(message: _87.QueryVolumeRequest): _87.QueryVolumeRequestProtoMsg;
            };
            QueryVolumeResponse: {
                encode(message: _87.QueryVolumeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryVolumeResponse;
                fromPartial(object: {
                    amount?: string;
                }): _87.QueryVolumeResponse;
                fromAmino(object: _87.QueryVolumeResponseAmino): _87.QueryVolumeResponse;
                toAmino(message: _87.QueryVolumeResponse): _87.QueryVolumeResponseAmino;
                fromAminoMsg(object: _87.QueryVolumeResponseAminoMsg): _87.QueryVolumeResponse;
                fromProtoMsg(message: _87.QueryVolumeResponseProtoMsg): _87.QueryVolumeResponse;
                toProto(message: _87.QueryVolumeResponse): Uint8Array;
                toProtoMsg(message: _87.QueryVolumeResponse): _87.QueryVolumeResponseProtoMsg;
            };
            QueryAllVolumeRequest: {
                encode(message: _87.QueryAllVolumeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllVolumeRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _87.QueryAllVolumeRequest;
                fromAmino(object: _87.QueryAllVolumeRequestAmino): _87.QueryAllVolumeRequest;
                toAmino(message: _87.QueryAllVolumeRequest): _87.QueryAllVolumeRequestAmino;
                fromAminoMsg(object: _87.QueryAllVolumeRequestAminoMsg): _87.QueryAllVolumeRequest;
                fromProtoMsg(message: _87.QueryAllVolumeRequestProtoMsg): _87.QueryAllVolumeRequest;
                toProto(message: _87.QueryAllVolumeRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAllVolumeRequest): _87.QueryAllVolumeRequestProtoMsg;
            };
            QueryAllVolumeResponse: {
                encode(message: _87.QueryAllVolumeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllVolumeResponse;
                fromPartial(object: {
                    volumes?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _87.QueryAllVolumeResponse;
                fromAmino(object: _87.QueryAllVolumeResponseAmino): _87.QueryAllVolumeResponse;
                toAmino(message: _87.QueryAllVolumeResponse): _87.QueryAllVolumeResponseAmino;
                fromAminoMsg(object: _87.QueryAllVolumeResponseAminoMsg): _87.QueryAllVolumeResponse;
                fromProtoMsg(message: _87.QueryAllVolumeResponseProtoMsg): _87.QueryAllVolumeResponse;
                toProto(message: _87.QueryAllVolumeResponse): Uint8Array;
                toProtoMsg(message: _87.QueryAllVolumeResponse): _87.QueryAllVolumeResponseProtoMsg;
            };
            QueryBurnedRequest: {
                encode(_: _87.QueryBurnedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryBurnedRequest;
                fromPartial(_: {}): _87.QueryBurnedRequest;
                fromAmino(_: _87.QueryBurnedRequestAmino): _87.QueryBurnedRequest;
                toAmino(_: _87.QueryBurnedRequest): _87.QueryBurnedRequestAmino;
                fromAminoMsg(object: _87.QueryBurnedRequestAminoMsg): _87.QueryBurnedRequest;
                fromProtoMsg(message: _87.QueryBurnedRequestProtoMsg): _87.QueryBurnedRequest;
                toProto(message: _87.QueryBurnedRequest): Uint8Array;
                toProtoMsg(message: _87.QueryBurnedRequest): _87.QueryBurnedRequestProtoMsg;
            };
            QueryBurnedResponse: {
                encode(message: _87.QueryBurnedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryBurnedResponse;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _87.QueryBurnedResponse;
                fromAmino(object: _87.QueryBurnedResponseAmino): _87.QueryBurnedResponse;
                toAmino(message: _87.QueryBurnedResponse): _87.QueryBurnedResponseAmino;
                fromAminoMsg(object: _87.QueryBurnedResponseAminoMsg): _87.QueryBurnedResponse;
                fromProtoMsg(message: _87.QueryBurnedResponseProtoMsg): _87.QueryBurnedResponse;
                toProto(message: _87.QueryBurnedResponse): Uint8Array;
                toProtoMsg(message: _87.QueryBurnedResponse): _87.QueryBurnedResponseProtoMsg;
            };
            QueryDropRequest: {
                encode(message: _87.QueryDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _87.QueryDropRequest;
                fromAmino(object: _87.QueryDropRequestAmino): _87.QueryDropRequest;
                toAmino(message: _87.QueryDropRequest): _87.QueryDropRequestAmino;
                fromAminoMsg(object: _87.QueryDropRequestAminoMsg): _87.QueryDropRequest;
                fromProtoMsg(message: _87.QueryDropRequestProtoMsg): _87.QueryDropRequest;
                toProto(message: _87.QueryDropRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDropRequest): _87.QueryDropRequestProtoMsg;
            };
            QueryDropCoinRequest: {
                encode(message: _87.QueryDropCoinRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropCoinRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                    amountA?: string;
                }): _87.QueryDropCoinRequest;
                fromAmino(object: _87.QueryDropCoinRequestAmino): _87.QueryDropCoinRequest;
                toAmino(message: _87.QueryDropCoinRequest): _87.QueryDropCoinRequestAmino;
                fromAminoMsg(object: _87.QueryDropCoinRequestAminoMsg): _87.QueryDropCoinRequest;
                fromProtoMsg(message: _87.QueryDropCoinRequestProtoMsg): _87.QueryDropCoinRequest;
                toProto(message: _87.QueryDropCoinRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDropCoinRequest): _87.QueryDropCoinRequestProtoMsg;
            };
            QueryDropCoinResponse: {
                encode(message: _87.QueryDropCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropCoinResponse;
                fromPartial(object: {
                    drops?: string;
                    amountB?: string;
                }): _87.QueryDropCoinResponse;
                fromAmino(object: _87.QueryDropCoinResponseAmino): _87.QueryDropCoinResponse;
                toAmino(message: _87.QueryDropCoinResponse): _87.QueryDropCoinResponseAmino;
                fromAminoMsg(object: _87.QueryDropCoinResponseAminoMsg): _87.QueryDropCoinResponse;
                fromProtoMsg(message: _87.QueryDropCoinResponseProtoMsg): _87.QueryDropCoinResponse;
                toProto(message: _87.QueryDropCoinResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDropCoinResponse): _87.QueryDropCoinResponseProtoMsg;
            };
            QueryDropResponse: {
                encode(message: _87.QueryDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropResponse;
                fromPartial(object: {
                    drop?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        pair?: string;
                        drops?: string;
                        product?: string;
                        active?: boolean;
                    };
                }): _87.QueryDropResponse;
                fromAmino(object: _87.QueryDropResponseAmino): _87.QueryDropResponse;
                toAmino(message: _87.QueryDropResponse): _87.QueryDropResponseAmino;
                fromAminoMsg(object: _87.QueryDropResponseAminoMsg): _87.QueryDropResponse;
                fromProtoMsg(message: _87.QueryDropResponseProtoMsg): _87.QueryDropResponse;
                toProto(message: _87.QueryDropResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDropResponse): _87.QueryDropResponseProtoMsg;
            };
            QueryDropAmountsRequest: {
                encode(message: _87.QueryDropAmountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropAmountsRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _87.QueryDropAmountsRequest;
                fromAmino(object: _87.QueryDropAmountsRequestAmino): _87.QueryDropAmountsRequest;
                toAmino(message: _87.QueryDropAmountsRequest): _87.QueryDropAmountsRequestAmino;
                fromAminoMsg(object: _87.QueryDropAmountsRequestAminoMsg): _87.QueryDropAmountsRequest;
                fromProtoMsg(message: _87.QueryDropAmountsRequestProtoMsg): _87.QueryDropAmountsRequest;
                toProto(message: _87.QueryDropAmountsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDropAmountsRequest): _87.QueryDropAmountsRequestProtoMsg;
            };
            QueryDropAmountsResponse: {
                encode(message: _87.QueryDropAmountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropAmountsResponse;
                fromPartial(object: {
                    denom1?: string;
                    denom2?: string;
                    amount1?: string;
                    amount2?: string;
                }): _87.QueryDropAmountsResponse;
                fromAmino(object: _87.QueryDropAmountsResponseAmino): _87.QueryDropAmountsResponse;
                toAmino(message: _87.QueryDropAmountsResponse): _87.QueryDropAmountsResponseAmino;
                fromAminoMsg(object: _87.QueryDropAmountsResponseAminoMsg): _87.QueryDropAmountsResponse;
                fromProtoMsg(message: _87.QueryDropAmountsResponseProtoMsg): _87.QueryDropAmountsResponse;
                toProto(message: _87.QueryDropAmountsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDropAmountsResponse): _87.QueryDropAmountsResponseProtoMsg;
            };
            QueryDropsToCoinsRequest: {
                encode(message: _87.QueryDropsToCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropsToCoinsRequest;
                fromPartial(object: {
                    denom1?: string;
                    denom2?: string;
                    drops?: string;
                }): _87.QueryDropsToCoinsRequest;
                fromAmino(object: _87.QueryDropsToCoinsRequestAmino): _87.QueryDropsToCoinsRequest;
                toAmino(message: _87.QueryDropsToCoinsRequest): _87.QueryDropsToCoinsRequestAmino;
                fromAminoMsg(object: _87.QueryDropsToCoinsRequestAminoMsg): _87.QueryDropsToCoinsRequest;
                fromProtoMsg(message: _87.QueryDropsToCoinsRequestProtoMsg): _87.QueryDropsToCoinsRequest;
                toProto(message: _87.QueryDropsToCoinsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDropsToCoinsRequest): _87.QueryDropsToCoinsRequestProtoMsg;
            };
            QueryDropsToCoinsResponse: {
                encode(message: _87.QueryDropsToCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropsToCoinsResponse;
                fromPartial(object: {
                    denom1?: string;
                    amount1?: string;
                    denom2?: string;
                    amount2?: string;
                }): _87.QueryDropsToCoinsResponse;
                fromAmino(object: _87.QueryDropsToCoinsResponseAmino): _87.QueryDropsToCoinsResponse;
                toAmino(message: _87.QueryDropsToCoinsResponse): _87.QueryDropsToCoinsResponseAmino;
                fromAminoMsg(object: _87.QueryDropsToCoinsResponseAminoMsg): _87.QueryDropsToCoinsResponse;
                fromProtoMsg(message: _87.QueryDropsToCoinsResponseProtoMsg): _87.QueryDropsToCoinsResponse;
                toProto(message: _87.QueryDropsToCoinsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDropsToCoinsResponse): _87.QueryDropsToCoinsResponseProtoMsg;
            };
            QueryDropPairsRequest: {
                encode(message: _87.QueryDropPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropPairsRequest;
                fromPartial(object: {
                    address?: string;
                }): _87.QueryDropPairsRequest;
                fromAmino(object: _87.QueryDropPairsRequestAmino): _87.QueryDropPairsRequest;
                toAmino(message: _87.QueryDropPairsRequest): _87.QueryDropPairsRequestAmino;
                fromAminoMsg(object: _87.QueryDropPairsRequestAminoMsg): _87.QueryDropPairsRequest;
                fromProtoMsg(message: _87.QueryDropPairsRequestProtoMsg): _87.QueryDropPairsRequest;
                toProto(message: _87.QueryDropPairsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDropPairsRequest): _87.QueryDropPairsRequestProtoMsg;
            };
            QueryDropPairsResponse: {
                encode(message: _87.QueryDropPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropPairsResponse;
                fromPartial(object: {
                    pairs?: string[];
                }): _87.QueryDropPairsResponse;
                fromAmino(object: _87.QueryDropPairsResponseAmino): _87.QueryDropPairsResponse;
                toAmino(message: _87.QueryDropPairsResponse): _87.QueryDropPairsResponseAmino;
                fromAminoMsg(object: _87.QueryDropPairsResponseAminoMsg): _87.QueryDropPairsResponse;
                fromProtoMsg(message: _87.QueryDropPairsResponseProtoMsg): _87.QueryDropPairsResponse;
                toProto(message: _87.QueryDropPairsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDropPairsResponse): _87.QueryDropPairsResponseProtoMsg;
            };
            QueryDropOwnerPairRequest: {
                encode(message: _87.QueryDropOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropOwnerPairRequest;
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
                }): _87.QueryDropOwnerPairRequest;
                fromAmino(object: _87.QueryDropOwnerPairRequestAmino): _87.QueryDropOwnerPairRequest;
                toAmino(message: _87.QueryDropOwnerPairRequest): _87.QueryDropOwnerPairRequestAmino;
                fromAminoMsg(object: _87.QueryDropOwnerPairRequestAminoMsg): _87.QueryDropOwnerPairRequest;
                fromProtoMsg(message: _87.QueryDropOwnerPairRequestProtoMsg): _87.QueryDropOwnerPairRequest;
                toProto(message: _87.QueryDropOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDropOwnerPairRequest): _87.QueryDropOwnerPairRequestProtoMsg;
            };
            QueryDropOwnerPairSumRequest: {
                encode(message: _87.QueryDropOwnerPairSumRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropOwnerPairSumRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                }): _87.QueryDropOwnerPairSumRequest;
                fromAmino(object: _87.QueryDropOwnerPairSumRequestAmino): _87.QueryDropOwnerPairSumRequest;
                toAmino(message: _87.QueryDropOwnerPairSumRequest): _87.QueryDropOwnerPairSumRequestAmino;
                fromAminoMsg(object: _87.QueryDropOwnerPairSumRequestAminoMsg): _87.QueryDropOwnerPairSumRequest;
                fromProtoMsg(message: _87.QueryDropOwnerPairSumRequestProtoMsg): _87.QueryDropOwnerPairSumRequest;
                toProto(message: _87.QueryDropOwnerPairSumRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDropOwnerPairSumRequest): _87.QueryDropOwnerPairSumRequestProtoMsg;
            };
            QueryDropOwnerPairSumResponse: {
                encode(message: _87.QueryDropOwnerPairSumResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropOwnerPairSumResponse;
                fromPartial(object: {
                    sum?: string;
                }): _87.QueryDropOwnerPairSumResponse;
                fromAmino(object: _87.QueryDropOwnerPairSumResponseAmino): _87.QueryDropOwnerPairSumResponse;
                toAmino(message: _87.QueryDropOwnerPairSumResponse): _87.QueryDropOwnerPairSumResponseAmino;
                fromAminoMsg(object: _87.QueryDropOwnerPairSumResponseAminoMsg): _87.QueryDropOwnerPairSumResponse;
                fromProtoMsg(message: _87.QueryDropOwnerPairSumResponseProtoMsg): _87.QueryDropOwnerPairSumResponse;
                toProto(message: _87.QueryDropOwnerPairSumResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDropOwnerPairSumResponse): _87.QueryDropOwnerPairSumResponseProtoMsg;
            };
            QueryDropOwnerPairUidsRequest: {
                encode(message: _87.QueryDropOwnerPairUidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropOwnerPairUidsRequest;
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
                }): _87.QueryDropOwnerPairUidsRequest;
                fromAmino(object: _87.QueryDropOwnerPairUidsRequestAmino): _87.QueryDropOwnerPairUidsRequest;
                toAmino(message: _87.QueryDropOwnerPairUidsRequest): _87.QueryDropOwnerPairUidsRequestAmino;
                fromAminoMsg(object: _87.QueryDropOwnerPairUidsRequestAminoMsg): _87.QueryDropOwnerPairUidsRequest;
                fromProtoMsg(message: _87.QueryDropOwnerPairUidsRequestProtoMsg): _87.QueryDropOwnerPairUidsRequest;
                toProto(message: _87.QueryDropOwnerPairUidsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDropOwnerPairUidsRequest): _87.QueryDropOwnerPairUidsRequestProtoMsg;
            };
            QueryUidsResponse: {
                encode(message: _87.QueryUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryUidsResponse;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _87.QueryUidsResponse;
                fromAmino(object: _87.QueryUidsResponseAmino): _87.QueryUidsResponse;
                toAmino(message: _87.QueryUidsResponse): _87.QueryUidsResponseAmino;
                fromAminoMsg(object: _87.QueryUidsResponseAminoMsg): _87.QueryUidsResponse;
                fromProtoMsg(message: _87.QueryUidsResponseProtoMsg): _87.QueryUidsResponse;
                toProto(message: _87.QueryUidsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryUidsResponse): _87.QueryUidsResponseProtoMsg;
            };
            QueryDropOwnerPairDetailRequest: {
                encode(message: _87.QueryDropOwnerPairDetailRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropOwnerPairDetailRequest;
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
                }): _87.QueryDropOwnerPairDetailRequest;
                fromAmino(object: _87.QueryDropOwnerPairDetailRequestAmino): _87.QueryDropOwnerPairDetailRequest;
                toAmino(message: _87.QueryDropOwnerPairDetailRequest): _87.QueryDropOwnerPairDetailRequestAmino;
                fromAminoMsg(object: _87.QueryDropOwnerPairDetailRequestAminoMsg): _87.QueryDropOwnerPairDetailRequest;
                fromProtoMsg(message: _87.QueryDropOwnerPairDetailRequestProtoMsg): _87.QueryDropOwnerPairDetailRequest;
                toProto(message: _87.QueryDropOwnerPairDetailRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDropOwnerPairDetailRequest): _87.QueryDropOwnerPairDetailRequestProtoMsg;
            };
            QueryAllDropRequest: {
                encode(message: _87.QueryAllDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllDropRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _87.QueryAllDropRequest;
                fromAmino(object: _87.QueryAllDropRequestAmino): _87.QueryAllDropRequest;
                toAmino(message: _87.QueryAllDropRequest): _87.QueryAllDropRequestAmino;
                fromAminoMsg(object: _87.QueryAllDropRequestAminoMsg): _87.QueryAllDropRequest;
                fromProtoMsg(message: _87.QueryAllDropRequestProtoMsg): _87.QueryAllDropRequest;
                toProto(message: _87.QueryAllDropRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAllDropRequest): _87.QueryAllDropRequestProtoMsg;
            };
            QueryDropsResponse: {
                encode(message: _87.QueryDropsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDropsResponse;
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
                }): _87.QueryDropsResponse;
                fromAmino(object: _87.QueryDropsResponseAmino): _87.QueryDropsResponse;
                toAmino(message: _87.QueryDropsResponse): _87.QueryDropsResponseAmino;
                fromAminoMsg(object: _87.QueryDropsResponseAminoMsg): _87.QueryDropsResponse;
                fromProtoMsg(message: _87.QueryDropsResponseProtoMsg): _87.QueryDropsResponse;
                toProto(message: _87.QueryDropsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDropsResponse): _87.QueryDropsResponseProtoMsg;
            };
            QueryGetMemberRequest: {
                encode(message: _87.QueryGetMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryGetMemberRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                }): _87.QueryGetMemberRequest;
                fromAmino(object: _87.QueryGetMemberRequestAmino): _87.QueryGetMemberRequest;
                toAmino(message: _87.QueryGetMemberRequest): _87.QueryGetMemberRequestAmino;
                fromAminoMsg(object: _87.QueryGetMemberRequestAminoMsg): _87.QueryGetMemberRequest;
                fromProtoMsg(message: _87.QueryGetMemberRequestProtoMsg): _87.QueryGetMemberRequest;
                toProto(message: _87.QueryGetMemberRequest): Uint8Array;
                toProtoMsg(message: _87.QueryGetMemberRequest): _87.QueryGetMemberRequestProtoMsg;
            };
            QueryGetMemberResponse: {
                encode(message: _87.QueryGetMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryGetMemberResponse;
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
                }): _87.QueryGetMemberResponse;
                fromAmino(object: _87.QueryGetMemberResponseAmino): _87.QueryGetMemberResponse;
                toAmino(message: _87.QueryGetMemberResponse): _87.QueryGetMemberResponseAmino;
                fromAminoMsg(object: _87.QueryGetMemberResponseAminoMsg): _87.QueryGetMemberResponse;
                fromProtoMsg(message: _87.QueryGetMemberResponseProtoMsg): _87.QueryGetMemberResponse;
                toProto(message: _87.QueryGetMemberResponse): Uint8Array;
                toProtoMsg(message: _87.QueryGetMemberResponse): _87.QueryGetMemberResponseProtoMsg;
            };
            QueryAllMemberRequest: {
                encode(message: _87.QueryAllMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllMemberRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _87.QueryAllMemberRequest;
                fromAmino(object: _87.QueryAllMemberRequestAmino): _87.QueryAllMemberRequest;
                toAmino(message: _87.QueryAllMemberRequest): _87.QueryAllMemberRequestAmino;
                fromAminoMsg(object: _87.QueryAllMemberRequestAminoMsg): _87.QueryAllMemberRequest;
                fromProtoMsg(message: _87.QueryAllMemberRequestProtoMsg): _87.QueryAllMemberRequest;
                toProto(message: _87.QueryAllMemberRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAllMemberRequest): _87.QueryAllMemberRequestProtoMsg;
            };
            QueryAllMemberResponse: {
                encode(message: _87.QueryAllMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllMemberResponse;
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
                }): _87.QueryAllMemberResponse;
                fromAmino(object: _87.QueryAllMemberResponseAmino): _87.QueryAllMemberResponse;
                toAmino(message: _87.QueryAllMemberResponse): _87.QueryAllMemberResponseAmino;
                fromAminoMsg(object: _87.QueryAllMemberResponseAminoMsg): _87.QueryAllMemberResponse;
                fromProtoMsg(message: _87.QueryAllMemberResponseProtoMsg): _87.QueryAllMemberResponse;
                toProto(message: _87.QueryAllMemberResponse): Uint8Array;
                toProtoMsg(message: _87.QueryAllMemberResponse): _87.QueryAllMemberResponseProtoMsg;
            };
            QueryGetBurningsRequest: {
                encode(message: _87.QueryGetBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryGetBurningsRequest;
                fromPartial(object: {
                    denom?: string;
                }): _87.QueryGetBurningsRequest;
                fromAmino(object: _87.QueryGetBurningsRequestAmino): _87.QueryGetBurningsRequest;
                toAmino(message: _87.QueryGetBurningsRequest): _87.QueryGetBurningsRequestAmino;
                fromAminoMsg(object: _87.QueryGetBurningsRequestAminoMsg): _87.QueryGetBurningsRequest;
                fromProtoMsg(message: _87.QueryGetBurningsRequestProtoMsg): _87.QueryGetBurningsRequest;
                toProto(message: _87.QueryGetBurningsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryGetBurningsRequest): _87.QueryGetBurningsRequestProtoMsg;
            };
            QueryGetBurningsResponse: {
                encode(message: _87.QueryGetBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryGetBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _87.QueryGetBurningsResponse;
                fromAmino(object: _87.QueryGetBurningsResponseAmino): _87.QueryGetBurningsResponse;
                toAmino(message: _87.QueryGetBurningsResponse): _87.QueryGetBurningsResponseAmino;
                fromAminoMsg(object: _87.QueryGetBurningsResponseAminoMsg): _87.QueryGetBurningsResponse;
                fromProtoMsg(message: _87.QueryGetBurningsResponseProtoMsg): _87.QueryGetBurningsResponse;
                toProto(message: _87.QueryGetBurningsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryGetBurningsResponse): _87.QueryGetBurningsResponseProtoMsg;
            };
            QueryAllBurningsRequest: {
                encode(message: _87.QueryAllBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllBurningsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _87.QueryAllBurningsRequest;
                fromAmino(object: _87.QueryAllBurningsRequestAmino): _87.QueryAllBurningsRequest;
                toAmino(message: _87.QueryAllBurningsRequest): _87.QueryAllBurningsRequestAmino;
                fromAminoMsg(object: _87.QueryAllBurningsRequestAminoMsg): _87.QueryAllBurningsRequest;
                fromProtoMsg(message: _87.QueryAllBurningsRequestProtoMsg): _87.QueryAllBurningsRequest;
                toProto(message: _87.QueryAllBurningsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAllBurningsRequest): _87.QueryAllBurningsRequestProtoMsg;
            };
            QueryAllBurningsResponse: {
                encode(message: _87.QueryAllBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _87.QueryAllBurningsResponse;
                fromAmino(object: _87.QueryAllBurningsResponseAmino): _87.QueryAllBurningsResponse;
                toAmino(message: _87.QueryAllBurningsResponse): _87.QueryAllBurningsResponseAmino;
                fromAminoMsg(object: _87.QueryAllBurningsResponseAminoMsg): _87.QueryAllBurningsResponse;
                fromProtoMsg(message: _87.QueryAllBurningsResponseProtoMsg): _87.QueryAllBurningsResponse;
                toProto(message: _87.QueryAllBurningsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryAllBurningsResponse): _87.QueryAllBurningsResponseProtoMsg;
            };
            QueryOrderRequest: {
                encode(message: _87.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryOrderRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _87.QueryOrderRequest;
                fromAmino(object: _87.QueryOrderRequestAmino): _87.QueryOrderRequest;
                toAmino(message: _87.QueryOrderRequest): _87.QueryOrderRequestAmino;
                fromAminoMsg(object: _87.QueryOrderRequestAminoMsg): _87.QueryOrderRequest;
                fromProtoMsg(message: _87.QueryOrderRequestProtoMsg): _87.QueryOrderRequest;
                toProto(message: _87.QueryOrderRequest): Uint8Array;
                toProtoMsg(message: _87.QueryOrderRequest): _87.QueryOrderRequestProtoMsg;
            };
            QueryOrderResponse: {
                encode(message: _87.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryOrderResponse;
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
                }): _87.QueryOrderResponse;
                fromAmino(object: _87.QueryOrderResponseAmino): _87.QueryOrderResponse;
                toAmino(message: _87.QueryOrderResponse): _87.QueryOrderResponseAmino;
                fromAminoMsg(object: _87.QueryOrderResponseAminoMsg): _87.QueryOrderResponse;
                fromProtoMsg(message: _87.QueryOrderResponseProtoMsg): _87.QueryOrderResponse;
                toProto(message: _87.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _87.QueryOrderResponse): _87.QueryOrderResponseProtoMsg;
            };
            QueryOrdersResponse: {
                encode(message: _87.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryOrdersResponse;
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
                }): _87.QueryOrdersResponse;
                fromAmino(object: _87.QueryOrdersResponseAmino): _87.QueryOrdersResponse;
                toAmino(message: _87.QueryOrdersResponse): _87.QueryOrdersResponseAmino;
                fromAminoMsg(object: _87.QueryOrdersResponseAminoMsg): _87.QueryOrdersResponse;
                fromProtoMsg(message: _87.QueryOrdersResponseProtoMsg): _87.QueryOrdersResponse;
                toProto(message: _87.QueryOrdersResponse): Uint8Array;
                toProtoMsg(message: _87.QueryOrdersResponse): _87.QueryOrdersResponseProtoMsg;
            };
            QueryAllOrderRequest: {
                encode(message: _87.QueryAllOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryAllOrderRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _87.QueryAllOrderRequest;
                fromAmino(object: _87.QueryAllOrderRequestAmino): _87.QueryAllOrderRequest;
                toAmino(message: _87.QueryAllOrderRequest): _87.QueryAllOrderRequestAmino;
                fromAminoMsg(object: _87.QueryAllOrderRequestAminoMsg): _87.QueryAllOrderRequest;
                fromProtoMsg(message: _87.QueryAllOrderRequestProtoMsg): _87.QueryAllOrderRequest;
                toProto(message: _87.QueryAllOrderRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAllOrderRequest): _87.QueryAllOrderRequestProtoMsg;
            };
            QueryOrderOwnerRequest: {
                encode(message: _87.QueryOrderOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryOrderOwnerRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _87.QueryOrderOwnerRequest;
                fromAmino(object: _87.QueryOrderOwnerRequestAmino): _87.QueryOrderOwnerRequest;
                toAmino(message: _87.QueryOrderOwnerRequest): _87.QueryOrderOwnerRequestAmino;
                fromAminoMsg(object: _87.QueryOrderOwnerRequestAminoMsg): _87.QueryOrderOwnerRequest;
                fromProtoMsg(message: _87.QueryOrderOwnerRequestProtoMsg): _87.QueryOrderOwnerRequest;
                toProto(message: _87.QueryOrderOwnerRequest): Uint8Array;
                toProtoMsg(message: _87.QueryOrderOwnerRequest): _87.QueryOrderOwnerRequestProtoMsg;
            };
            QueryOrderOwnerUidsResponse: {
                encode(message: _87.QueryOrderOwnerUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryOrderOwnerUidsResponse;
                fromPartial(object: {
                    orders?: {
                        uids?: (string | number | import("long").Long)[];
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _87.QueryOrderOwnerUidsResponse;
                fromAmino(object: _87.QueryOrderOwnerUidsResponseAmino): _87.QueryOrderOwnerUidsResponse;
                toAmino(message: _87.QueryOrderOwnerUidsResponse): _87.QueryOrderOwnerUidsResponseAmino;
                fromAminoMsg(object: _87.QueryOrderOwnerUidsResponseAminoMsg): _87.QueryOrderOwnerUidsResponse;
                fromProtoMsg(message: _87.QueryOrderOwnerUidsResponseProtoMsg): _87.QueryOrderOwnerUidsResponse;
                toProto(message: _87.QueryOrderOwnerUidsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryOrderOwnerUidsResponse): _87.QueryOrderOwnerUidsResponseProtoMsg;
            };
            QueryOrderOwnerPairRequest: {
                encode(message: _87.QueryOrderOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryOrderOwnerPairRequest;
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
                }): _87.QueryOrderOwnerPairRequest;
                fromAmino(object: _87.QueryOrderOwnerPairRequestAmino): _87.QueryOrderOwnerPairRequest;
                toAmino(message: _87.QueryOrderOwnerPairRequest): _87.QueryOrderOwnerPairRequestAmino;
                fromAminoMsg(object: _87.QueryOrderOwnerPairRequestAminoMsg): _87.QueryOrderOwnerPairRequest;
                fromProtoMsg(message: _87.QueryOrderOwnerPairRequestProtoMsg): _87.QueryOrderOwnerPairRequest;
                toProto(message: _87.QueryOrderOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _87.QueryOrderOwnerPairRequest): _87.QueryOrderOwnerPairRequestProtoMsg;
            };
            QueryOrderOwnerPairResponse: {
                encode(message: _87.QueryOrderOwnerPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryOrderOwnerPairResponse;
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
                }): _87.QueryOrderOwnerPairResponse;
                fromAmino(object: _87.QueryOrderOwnerPairResponseAmino): _87.QueryOrderOwnerPairResponse;
                toAmino(message: _87.QueryOrderOwnerPairResponse): _87.QueryOrderOwnerPairResponseAmino;
                fromAminoMsg(object: _87.QueryOrderOwnerPairResponseAminoMsg): _87.QueryOrderOwnerPairResponse;
                fromProtoMsg(message: _87.QueryOrderOwnerPairResponseProtoMsg): _87.QueryOrderOwnerPairResponse;
                toProto(message: _87.QueryOrderOwnerPairResponse): Uint8Array;
                toProtoMsg(message: _87.QueryOrderOwnerPairResponse): _87.QueryOrderOwnerPairResponseProtoMsg;
            };
            QueryBookRequest: {
                encode(message: _87.QueryBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryBookRequest;
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
                }): _87.QueryBookRequest;
                fromAmino(object: _87.QueryBookRequestAmino): _87.QueryBookRequest;
                toAmino(message: _87.QueryBookRequest): _87.QueryBookRequestAmino;
                fromAminoMsg(object: _87.QueryBookRequestAminoMsg): _87.QueryBookRequest;
                fromProtoMsg(message: _87.QueryBookRequestProtoMsg): _87.QueryBookRequest;
                toProto(message: _87.QueryBookRequest): Uint8Array;
                toProtoMsg(message: _87.QueryBookRequest): _87.QueryBookRequestProtoMsg;
            };
            QueryBookResponse: {
                encode(message: _87.QueryBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryBookResponse;
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
                }): _87.QueryBookResponse;
                fromAmino(object: _87.QueryBookResponseAmino): _87.QueryBookResponse;
                toAmino(message: _87.QueryBookResponse): _87.QueryBookResponseAmino;
                fromAminoMsg(object: _87.QueryBookResponseAminoMsg): _87.QueryBookResponse;
                fromProtoMsg(message: _87.QueryBookResponseProtoMsg): _87.QueryBookResponse;
                toProto(message: _87.QueryBookResponse): Uint8Array;
                toProtoMsg(message: _87.QueryBookResponse): _87.QueryBookResponseProtoMsg;
            };
            QueryBookendsRequest: {
                encode(message: _87.QueryBookendsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryBookendsRequest;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                }): _87.QueryBookendsRequest;
                fromAmino(object: _87.QueryBookendsRequestAmino): _87.QueryBookendsRequest;
                toAmino(message: _87.QueryBookendsRequest): _87.QueryBookendsRequestAmino;
                fromAminoMsg(object: _87.QueryBookendsRequestAminoMsg): _87.QueryBookendsRequest;
                fromProtoMsg(message: _87.QueryBookendsRequestProtoMsg): _87.QueryBookendsRequest;
                toProto(message: _87.QueryBookendsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryBookendsRequest): _87.QueryBookendsRequestProtoMsg;
            };
            QueryBookendsResponse: {
                encode(message: _87.QueryBookendsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryBookendsResponse;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                    prev?: string | number | import("long").Long;
                    next?: string | number | import("long").Long;
                }): _87.QueryBookendsResponse;
                fromAmino(object: _87.QueryBookendsResponseAmino): _87.QueryBookendsResponse;
                toAmino(message: _87.QueryBookendsResponse): _87.QueryBookendsResponseAmino;
                fromAminoMsg(object: _87.QueryBookendsResponseAminoMsg): _87.QueryBookendsResponse;
                fromProtoMsg(message: _87.QueryBookendsResponseProtoMsg): _87.QueryBookendsResponse;
                toProto(message: _87.QueryBookendsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryBookendsResponse): _87.QueryBookendsResponseProtoMsg;
            };
            QueryHistoryRequest: {
                encode(message: _87.QueryHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryHistoryRequest;
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
                }): _87.QueryHistoryRequest;
                fromAmino(object: _87.QueryHistoryRequestAmino): _87.QueryHistoryRequest;
                toAmino(message: _87.QueryHistoryRequest): _87.QueryHistoryRequestAmino;
                fromAminoMsg(object: _87.QueryHistoryRequestAminoMsg): _87.QueryHistoryRequest;
                fromProtoMsg(message: _87.QueryHistoryRequestProtoMsg): _87.QueryHistoryRequest;
                toProto(message: _87.QueryHistoryRequest): Uint8Array;
                toProtoMsg(message: _87.QueryHistoryRequest): _87.QueryHistoryRequestProtoMsg;
            };
            QueryHistoryResponse: {
                encode(message: _87.QueryHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryHistoryResponse;
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
                }): _87.QueryHistoryResponse;
                fromAmino(object: _87.QueryHistoryResponseAmino): _87.QueryHistoryResponse;
                toAmino(message: _87.QueryHistoryResponse): _87.QueryHistoryResponseAmino;
                fromAminoMsg(object: _87.QueryHistoryResponseAminoMsg): _87.QueryHistoryResponse;
                fromProtoMsg(message: _87.QueryHistoryResponseProtoMsg): _87.QueryHistoryResponse;
                toProto(message: _87.QueryHistoryResponse): Uint8Array;
                toProtoMsg(message: _87.QueryHistoryResponse): _87.QueryHistoryResponseProtoMsg;
            };
            QueryQuoteRequest: {
                encode(message: _87.QueryQuoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryQuoteRequest;
                fromPartial(object: {
                    denomAsk?: string;
                    denomBid?: string;
                    denomAmount?: string;
                    amount?: string;
                }): _87.QueryQuoteRequest;
                fromAmino(object: _87.QueryQuoteRequestAmino): _87.QueryQuoteRequest;
                toAmino(message: _87.QueryQuoteRequest): _87.QueryQuoteRequestAmino;
                fromAminoMsg(object: _87.QueryQuoteRequestAminoMsg): _87.QueryQuoteRequest;
                fromProtoMsg(message: _87.QueryQuoteRequestProtoMsg): _87.QueryQuoteRequest;
                toProto(message: _87.QueryQuoteRequest): Uint8Array;
                toProtoMsg(message: _87.QueryQuoteRequest): _87.QueryQuoteRequestProtoMsg;
            };
            QueryQuoteResponse: {
                encode(message: _87.QueryQuoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryQuoteResponse;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _87.QueryQuoteResponse;
                fromAmino(object: _87.QueryQuoteResponseAmino): _87.QueryQuoteResponse;
                toAmino(message: _87.QueryQuoteResponse): _87.QueryQuoteResponseAmino;
                fromAminoMsg(object: _87.QueryQuoteResponseAminoMsg): _87.QueryQuoteResponse;
                fromProtoMsg(message: _87.QueryQuoteResponseProtoMsg): _87.QueryQuoteResponse;
                toProto(message: _87.QueryQuoteResponse): Uint8Array;
                toProtoMsg(message: _87.QueryQuoteResponse): _87.QueryQuoteResponseProtoMsg;
            };
            DenomMetadataProposal: {
                encode(message: _86.DenomMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DenomMetadataProposal;
                fromPartial(object: {
                    sender?: string;
                    title?: string;
                    description?: string;
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
                }): _86.DenomMetadataProposal;
                fromAmino(object: _86.DenomMetadataProposalAmino): _86.DenomMetadataProposal;
                toAmino(message: _86.DenomMetadataProposal): _86.DenomMetadataProposalAmino;
                fromAminoMsg(object: _86.DenomMetadataProposalAminoMsg): _86.DenomMetadataProposal;
                fromProtoMsg(message: _86.DenomMetadataProposalProtoMsg): _86.DenomMetadataProposal;
                toProto(message: _86.DenomMetadataProposal): Uint8Array;
                toProtoMsg(message: _86.DenomMetadataProposal): _86.DenomMetadataProposalProtoMsg;
            };
            Pool: {
                encode(message: _85.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Pool;
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
                }): _85.Pool;
                fromAmino(object: _85.PoolAmino): _85.Pool;
                toAmino(message: _85.Pool): _85.PoolAmino;
                fromAminoMsg(object: _85.PoolAminoMsg): _85.Pool;
                fromProtoMsg(message: _85.PoolProtoMsg): _85.Pool;
                toProto(message: _85.Pool): Uint8Array;
                toProtoMsg(message: _85.Pool): _85.PoolProtoMsg;
            };
            Leader: {
                encode(message: _85.Leader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Leader;
                fromPartial(object: {
                    address?: string;
                    drops?: string;
                }): _85.Leader;
                fromAmino(object: _85.LeaderAmino): _85.Leader;
                toAmino(message: _85.Leader): _85.LeaderAmino;
                fromAminoMsg(object: _85.LeaderAminoMsg): _85.Leader;
                fromProtoMsg(message: _85.LeaderProtoMsg): _85.Leader;
                toProto(message: _85.Leader): Uint8Array;
                toProtoMsg(message: _85.Leader): _85.LeaderProtoMsg;
            };
            Volume: {
                encode(message: _85.Volume, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Volume;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _85.Volume;
                fromAmino(object: _85.VolumeAmino): _85.Volume;
                toAmino(message: _85.Volume): _85.VolumeAmino;
                fromAminoMsg(object: _85.VolumeAminoMsg): _85.Volume;
                fromProtoMsg(message: _85.VolumeProtoMsg): _85.Volume;
                toProto(message: _85.Volume): Uint8Array;
                toProtoMsg(message: _85.Volume): _85.VolumeProtoMsg;
            };
            Params: {
                encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
                fromPartial(object: {
                    earnRates?: string;
                    burnRate?: string;
                    burnCoin?: string;
                    marketFee?: string;
                }): _84.Params;
                fromAmino(object: _84.ParamsAmino): _84.Params;
                toAmino(message: _84.Params): _84.ParamsAmino;
                fromAminoMsg(object: _84.ParamsAminoMsg): _84.Params;
                fromProtoMsg(message: _84.ParamsProtoMsg): _84.Params;
                toProto(message: _84.Params): Uint8Array;
                toProtoMsg(message: _84.Params): _84.ParamsProtoMsg;
            };
            Order: {
                encode(message: _83.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Order;
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
                }): _83.Order;
                fromAmino(object: _83.OrderAmino): _83.Order;
                toAmino(message: _83.Order): _83.OrderAmino;
                fromAminoMsg(object: _83.OrderAminoMsg): _83.Order;
                fromProtoMsg(message: _83.OrderProtoMsg): _83.Order;
                toProto(message: _83.Order): Uint8Array;
                toProtoMsg(message: _83.Order): _83.OrderProtoMsg;
            };
            Orders: {
                encode(message: _83.Orders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Orders;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                }): _83.Orders;
                fromAmino(object: _83.OrdersAmino): _83.Orders;
                toAmino(message: _83.Orders): _83.OrdersAmino;
                fromAminoMsg(object: _83.OrdersAminoMsg): _83.Orders;
                fromProtoMsg(message: _83.OrdersProtoMsg): _83.Orders;
                toProto(message: _83.Orders): Uint8Array;
                toProtoMsg(message: _83.Orders): _83.OrdersProtoMsg;
            };
            OrderResponse: {
                encode(message: _83.OrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.OrderResponse;
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
                }): _83.OrderResponse;
                fromAmino(object: _83.OrderResponseAmino): _83.OrderResponse;
                toAmino(message: _83.OrderResponse): _83.OrderResponseAmino;
                fromAminoMsg(object: _83.OrderResponseAminoMsg): _83.OrderResponse;
                fromProtoMsg(message: _83.OrderResponseProtoMsg): _83.OrderResponse;
                toProto(message: _83.OrderResponse): Uint8Array;
                toProtoMsg(message: _83.OrderResponse): _83.OrderResponseProtoMsg;
            };
            Member: {
                encode(message: _82.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Member;
                fromPartial(object: {
                    pair?: string;
                    denomA?: string;
                    denomB?: string;
                    balance?: string;
                    previous?: string;
                    limit?: string | number | import("long").Long;
                    stop?: string | number | import("long").Long;
                }): _82.Member;
                fromAmino(object: _82.MemberAmino): _82.Member;
                toAmino(message: _82.Member): _82.MemberAmino;
                fromAminoMsg(object: _82.MemberAminoMsg): _82.Member;
                fromProtoMsg(message: _82.MemberProtoMsg): _82.Member;
                toProto(message: _82.Member): Uint8Array;
                toProtoMsg(message: _82.Member): _82.MemberProtoMsg;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GenesisState;
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
                }): _81.GenesisState;
                fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
                fromAminoMsg(object: _81.GenesisStateAminoMsg): _81.GenesisState;
                fromProtoMsg(message: _81.GenesisStateProtoMsg): _81.GenesisState;
                toProto(message: _81.GenesisState): Uint8Array;
                toProtoMsg(message: _81.GenesisState): _81.GenesisStateProtoMsg;
            };
            Drop: {
                encode(message: _80.Drop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Drop;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                    owner?: string;
                    pair?: string;
                    drops?: string;
                    product?: string;
                    active?: boolean;
                }): _80.Drop;
                fromAmino(object: _80.DropAmino): _80.Drop;
                toAmino(message: _80.Drop): _80.DropAmino;
                fromAminoMsg(object: _80.DropAminoMsg): _80.Drop;
                fromProtoMsg(message: _80.DropProtoMsg): _80.Drop;
                toProto(message: _80.Drop): Uint8Array;
                toProtoMsg(message: _80.Drop): _80.DropProtoMsg;
            };
            Drops: {
                encode(message: _80.Drops, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Drops;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    sum?: string;
                }): _80.Drops;
                fromAmino(object: _80.DropsAmino): _80.Drops;
                toAmino(message: _80.Drops): _80.DropsAmino;
                fromAminoMsg(object: _80.DropsAminoMsg): _80.Drops;
                fromProtoMsg(message: _80.DropsProtoMsg): _80.Drops;
                toProto(message: _80.Drops): Uint8Array;
                toProtoMsg(message: _80.Drops): _80.DropsProtoMsg;
            };
            DropPairs: {
                encode(message: _80.DropPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DropPairs;
                fromPartial(object: {
                    pairs?: string[];
                }): _80.DropPairs;
                fromAmino(object: _80.DropPairsAmino): _80.DropPairs;
                toAmino(message: _80.DropPairs): _80.DropPairsAmino;
                fromAminoMsg(object: _80.DropPairsAminoMsg): _80.DropPairs;
                fromProtoMsg(message: _80.DropPairsProtoMsg): _80.DropPairs;
                toProto(message: _80.DropPairs): Uint8Array;
                toProtoMsg(message: _80.DropPairs): _80.DropPairsProtoMsg;
            };
            Burnings: {
                encode(message: _79.Burnings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Burnings;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _79.Burnings;
                fromAmino(object: _79.BurningsAmino): _79.Burnings;
                toAmino(message: _79.Burnings): _79.BurningsAmino;
                fromAminoMsg(object: _79.BurningsAminoMsg): _79.Burnings;
                fromProtoMsg(message: _79.BurningsProtoMsg): _79.Burnings;
                toProto(message: _79.Burnings): Uint8Array;
                toProtoMsg(message: _79.Burnings): _79.BurningsProtoMsg;
            };
            Burned: {
                encode(message: _79.Burned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Burned;
                fromPartial(object: {
                    amount?: string;
                }): _79.Burned;
                fromAmino(object: _79.BurnedAmino): _79.Burned;
                toAmino(message: _79.Burned): _79.BurnedAmino;
                fromAminoMsg(object: _79.BurnedAminoMsg): _79.Burned;
                fromProtoMsg(message: _79.BurnedProtoMsg): _79.Burned;
                toProto(message: _79.Burned): Uint8Array;
                toProtoMsg(message: _79.Burned): _79.BurnedProtoMsg;
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
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            pendulumlabs: {
                market: {
                    market: _125.MsgClientImpl;
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
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        burned(request?: _87.QueryBurnedRequest): Promise<_87.QueryBurnedResponse>;
                        pool(request: _87.QueryGetPoolRequest): Promise<_87.QueryGetPoolResponse>;
                        poolAll(request?: _87.QueryAllPoolRequest): Promise<_87.QueryAllPoolResponse>;
                        volume(request: _87.QueryVolumeRequest): Promise<_87.QueryVolumeResponse>;
                        volumeAll(request?: _87.QueryAllVolumeRequest): Promise<_87.QueryAllVolumeResponse>;
                        drop(request: _87.QueryDropRequest): Promise<_87.QueryDropResponse>;
                        dropAmounts(request: _87.QueryDropAmountsRequest): Promise<_87.QueryDropAmountsResponse>;
                        dropCoin(request: _87.QueryDropCoinRequest): Promise<_87.QueryDropCoinResponse>;
                        dropsToCoins(request: _87.QueryDropsToCoinsRequest): Promise<_87.QueryDropsToCoinsResponse>;
                        dropPairs(request: _87.QueryDropPairsRequest): Promise<_87.QueryDropPairsResponse>;
                        dropOwnerPair(request: _87.QueryDropOwnerPairRequest): Promise<_87.QueryDropsResponse>;
                        dropAll(request?: _87.QueryAllDropRequest): Promise<_87.QueryDropsResponse>;
                        member(request: _87.QueryGetMemberRequest): Promise<_87.QueryGetMemberResponse>;
                        memberAll(request?: _87.QueryAllMemberRequest): Promise<_87.QueryAllMemberResponse>;
                        burnings(request: _87.QueryGetBurningsRequest): Promise<_87.QueryGetBurningsResponse>;
                        burningsAll(request?: _87.QueryAllBurningsRequest): Promise<_87.QueryAllBurningsResponse>;
                        order(request: _87.QueryOrderRequest): Promise<_87.QueryOrderResponse>;
                        orderAll(request?: _87.QueryAllOrderRequest): Promise<_87.QueryOrdersResponse>;
                        orderOwner(request: _87.QueryOrderOwnerRequest): Promise<_87.QueryOrdersResponse>;
                        orderOwnerUids(request: _87.QueryOrderOwnerRequest): Promise<_87.QueryOrderOwnerUidsResponse>;
                        book(request: _87.QueryBookRequest): Promise<_87.QueryBookResponse>;
                        bookends(request: _87.QueryBookendsRequest): Promise<_87.QueryBookendsResponse>;
                        history(request: _87.QueryHistoryRequest): Promise<_87.QueryHistoryResponse>;
                        quote(request: _87.QueryQuoteRequest): Promise<_87.QueryQuoteResponse>;
                    };
                };
            };
        }>;
    };
}
