import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** FundTreasuryProposal details a dao fund treasury proposal. */
export interface FundTreasuryProposal {
  sender: string;
  title: string;
  description: string;
  amount: Coin[];
}
export interface FundTreasuryProposalProtoMsg {
  typeUrl: "/onomyprotocol.dao.v1.FundTreasuryProposal";
  value: Uint8Array;
}
/** FundTreasuryProposal details a dao fund treasury proposal. */
export interface FundTreasuryProposalAmino {
  sender: string;
  title: string;
  description: string;
  amount: CoinAmino[];
}
export interface FundTreasuryProposalAminoMsg {
  type: "/onomyprotocol.dao.v1.FundTreasuryProposal";
  value: FundTreasuryProposalAmino;
}
/** FundTreasuryProposal details a dao fund treasury proposal. */
export interface FundTreasuryProposalSDKType {
  sender: string;
  title: string;
  description: string;
  amount: CoinSDKType[];
}
/** ExchangeWithTreasuryProposal details a dao exchange with treasury proposal. */
export interface ExchangeWithTreasuryProposal {
  sender: string;
  title: string;
  description: string;
  coinsPairs: CoinsExchangePair[];
}
export interface ExchangeWithTreasuryProposalProtoMsg {
  typeUrl: "/onomyprotocol.dao.v1.ExchangeWithTreasuryProposal";
  value: Uint8Array;
}
/** ExchangeWithTreasuryProposal details a dao exchange with treasury proposal. */
export interface ExchangeWithTreasuryProposalAmino {
  sender: string;
  title: string;
  description: string;
  coins_pairs: CoinsExchangePairAmino[];
}
export interface ExchangeWithTreasuryProposalAminoMsg {
  type: "/onomyprotocol.dao.v1.ExchangeWithTreasuryProposal";
  value: ExchangeWithTreasuryProposalAmino;
}
/** ExchangeWithTreasuryProposal details a dao exchange with treasury proposal. */
export interface ExchangeWithTreasuryProposalSDKType {
  sender: string;
  title: string;
  description: string;
  coins_pairs: CoinsExchangePairSDKType[];
}
/** CoinsExchangePair is an ask/bid coins pair to exchange. */
export interface CoinsExchangePair {
  coinAsk: Coin;
  coinBid: Coin;
}
export interface CoinsExchangePairProtoMsg {
  typeUrl: "/onomyprotocol.dao.v1.CoinsExchangePair";
  value: Uint8Array;
}
/** CoinsExchangePair is an ask/bid coins pair to exchange. */
export interface CoinsExchangePairAmino {
  coin_ask?: CoinAmino;
  coin_bid?: CoinAmino;
}
export interface CoinsExchangePairAminoMsg {
  type: "/onomyprotocol.dao.v1.CoinsExchangePair";
  value: CoinsExchangePairAmino;
}
/** CoinsExchangePair is an ask/bid coins pair to exchange. */
export interface CoinsExchangePairSDKType {
  coin_ask: CoinSDKType;
  coin_bid: CoinSDKType;
}
/** FundAccountProposal details a dao fund account proposal. */
export interface FundAccountProposal {
  recipient: string;
  title: string;
  description: string;
  amount: Coin[];
}
export interface FundAccountProposalProtoMsg {
  typeUrl: "/onomyprotocol.dao.v1.FundAccountProposal";
  value: Uint8Array;
}
/** FundAccountProposal details a dao fund account proposal. */
export interface FundAccountProposalAmino {
  recipient: string;
  title: string;
  description: string;
  amount: CoinAmino[];
}
export interface FundAccountProposalAminoMsg {
  type: "/onomyprotocol.dao.v1.FundAccountProposal";
  value: FundAccountProposalAmino;
}
/** FundAccountProposal details a dao fund account proposal. */
export interface FundAccountProposalSDKType {
  recipient: string;
  title: string;
  description: string;
  amount: CoinSDKType[];
}
function createBaseFundTreasuryProposal(): FundTreasuryProposal {
  return {
    sender: "",
    title: "",
    description: "",
    amount: []
  };
}
export const FundTreasuryProposal = {
  encode(message: FundTreasuryProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FundTreasuryProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundTreasuryProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FundTreasuryProposal>): FundTreasuryProposal {
    const message = createBaseFundTreasuryProposal();
    message.sender = object.sender ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FundTreasuryProposalAmino): FundTreasuryProposal {
    return {
      sender: object.sender,
      title: object.title,
      description: object.description,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: FundTreasuryProposal): FundTreasuryProposalAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.title = message.title;
    obj.description = message.description;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: FundTreasuryProposalAminoMsg): FundTreasuryProposal {
    return FundTreasuryProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: FundTreasuryProposalProtoMsg): FundTreasuryProposal {
    return FundTreasuryProposal.decode(message.value);
  },
  toProto(message: FundTreasuryProposal): Uint8Array {
    return FundTreasuryProposal.encode(message).finish();
  },
  toProtoMsg(message: FundTreasuryProposal): FundTreasuryProposalProtoMsg {
    return {
      typeUrl: "/onomyprotocol.dao.v1.FundTreasuryProposal",
      value: FundTreasuryProposal.encode(message).finish()
    };
  }
};
function createBaseExchangeWithTreasuryProposal(): ExchangeWithTreasuryProposal {
  return {
    sender: "",
    title: "",
    description: "",
    coinsPairs: []
  };
}
export const ExchangeWithTreasuryProposal = {
  encode(message: ExchangeWithTreasuryProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.coinsPairs) {
      CoinsExchangePair.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeWithTreasuryProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeWithTreasuryProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.coinsPairs.push(CoinsExchangePair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExchangeWithTreasuryProposal>): ExchangeWithTreasuryProposal {
    const message = createBaseExchangeWithTreasuryProposal();
    message.sender = object.sender ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.coinsPairs = object.coinsPairs?.map(e => CoinsExchangePair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExchangeWithTreasuryProposalAmino): ExchangeWithTreasuryProposal {
    return {
      sender: object.sender,
      title: object.title,
      description: object.description,
      coinsPairs: Array.isArray(object?.coins_pairs) ? object.coins_pairs.map((e: any) => CoinsExchangePair.fromAmino(e)) : []
    };
  },
  toAmino(message: ExchangeWithTreasuryProposal): ExchangeWithTreasuryProposalAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.title = message.title;
    obj.description = message.description;
    if (message.coinsPairs) {
      obj.coins_pairs = message.coinsPairs.map(e => e ? CoinsExchangePair.toAmino(e) : undefined);
    } else {
      obj.coins_pairs = [];
    }
    return obj;
  },
  fromAminoMsg(object: ExchangeWithTreasuryProposalAminoMsg): ExchangeWithTreasuryProposal {
    return ExchangeWithTreasuryProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ExchangeWithTreasuryProposalProtoMsg): ExchangeWithTreasuryProposal {
    return ExchangeWithTreasuryProposal.decode(message.value);
  },
  toProto(message: ExchangeWithTreasuryProposal): Uint8Array {
    return ExchangeWithTreasuryProposal.encode(message).finish();
  },
  toProtoMsg(message: ExchangeWithTreasuryProposal): ExchangeWithTreasuryProposalProtoMsg {
    return {
      typeUrl: "/onomyprotocol.dao.v1.ExchangeWithTreasuryProposal",
      value: ExchangeWithTreasuryProposal.encode(message).finish()
    };
  }
};
function createBaseCoinsExchangePair(): CoinsExchangePair {
  return {
    coinAsk: undefined,
    coinBid: undefined
  };
}
export const CoinsExchangePair = {
  encode(message: CoinsExchangePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinAsk !== undefined) {
      Coin.encode(message.coinAsk, writer.uint32(10).fork()).ldelim();
    }
    if (message.coinBid !== undefined) {
      Coin.encode(message.coinBid, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CoinsExchangePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinsExchangePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinAsk = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.coinBid = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CoinsExchangePair>): CoinsExchangePair {
    const message = createBaseCoinsExchangePair();
    message.coinAsk = object.coinAsk !== undefined && object.coinAsk !== null ? Coin.fromPartial(object.coinAsk) : undefined;
    message.coinBid = object.coinBid !== undefined && object.coinBid !== null ? Coin.fromPartial(object.coinBid) : undefined;
    return message;
  },
  fromAmino(object: CoinsExchangePairAmino): CoinsExchangePair {
    return {
      coinAsk: object?.coin_ask ? Coin.fromAmino(object.coin_ask) : undefined,
      coinBid: object?.coin_bid ? Coin.fromAmino(object.coin_bid) : undefined
    };
  },
  toAmino(message: CoinsExchangePair): CoinsExchangePairAmino {
    const obj: any = {};
    obj.coin_ask = message.coinAsk ? Coin.toAmino(message.coinAsk) : undefined;
    obj.coin_bid = message.coinBid ? Coin.toAmino(message.coinBid) : undefined;
    return obj;
  },
  fromAminoMsg(object: CoinsExchangePairAminoMsg): CoinsExchangePair {
    return CoinsExchangePair.fromAmino(object.value);
  },
  fromProtoMsg(message: CoinsExchangePairProtoMsg): CoinsExchangePair {
    return CoinsExchangePair.decode(message.value);
  },
  toProto(message: CoinsExchangePair): Uint8Array {
    return CoinsExchangePair.encode(message).finish();
  },
  toProtoMsg(message: CoinsExchangePair): CoinsExchangePairProtoMsg {
    return {
      typeUrl: "/onomyprotocol.dao.v1.CoinsExchangePair",
      value: CoinsExchangePair.encode(message).finish()
    };
  }
};
function createBaseFundAccountProposal(): FundAccountProposal {
  return {
    recipient: "",
    title: "",
    description: "",
    amount: []
  };
}
export const FundAccountProposal = {
  encode(message: FundAccountProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FundAccountProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundAccountProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FundAccountProposal>): FundAccountProposal {
    const message = createBaseFundAccountProposal();
    message.recipient = object.recipient ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FundAccountProposalAmino): FundAccountProposal {
    return {
      recipient: object.recipient,
      title: object.title,
      description: object.description,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: FundAccountProposal): FundAccountProposalAmino {
    const obj: any = {};
    obj.recipient = message.recipient;
    obj.title = message.title;
    obj.description = message.description;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: FundAccountProposalAminoMsg): FundAccountProposal {
    return FundAccountProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: FundAccountProposalProtoMsg): FundAccountProposal {
    return FundAccountProposal.decode(message.value);
  },
  toProto(message: FundAccountProposal): Uint8Array {
    return FundAccountProposal.encode(message).finish();
  },
  toProtoMsg(message: FundAccountProposal): FundAccountProposalProtoMsg {
    return {
      typeUrl: "/onomyprotocol.dao.v1.FundAccountProposal",
      value: FundAccountProposal.encode(message).finish()
    };
  }
};