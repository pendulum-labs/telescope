import { Metadata, MetadataAmino, MetadataSDKType } from "../../cosmos/bank/v1beta1/bank";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
  power: Long;
  ethereumAddress: string;
}
export interface BridgeValidatorProtoMsg {
  typeUrl: "/gravity.v1.BridgeValidator";
  value: Uint8Array;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorAmino {
  power: string;
  ethereum_address: string;
}
export interface BridgeValidatorAminoMsg {
  type: "/gravity.v1.BridgeValidator";
  value: BridgeValidatorAmino;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
  power: Long;
  ethereum_address: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
  nonce: Long;
  members: BridgeValidator[];
  height: Long;
  rewardAmount: string;
  /** the reward token in it's Ethereum hex address representation */
  rewardToken: string;
}
export interface ValsetProtoMsg {
  typeUrl: "/gravity.v1.Valset";
  value: Uint8Array;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetAmino {
  nonce: string;
  members: BridgeValidatorAmino[];
  height: string;
  reward_amount: string;
  /** the reward token in it's Ethereum hex address representation */
  reward_token: string;
}
export interface ValsetAminoMsg {
  type: "/gravity.v1.Valset";
  value: ValsetAmino;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetSDKType {
  nonce: Long;
  members: BridgeValidatorSDKType[];
  height: Long;
  reward_amount: string;
  reward_token: string;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeight {
  cosmosBlockHeight: Long;
  ethereumBlockHeight: Long;
}
export interface LastObservedEthereumBlockHeightProtoMsg {
  typeUrl: "/gravity.v1.LastObservedEthereumBlockHeight";
  value: Uint8Array;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightAmino {
  cosmos_block_height: string;
  ethereum_block_height: string;
}
export interface LastObservedEthereumBlockHeightAminoMsg {
  type: "/gravity.v1.LastObservedEthereumBlockHeight";
  value: LastObservedEthereumBlockHeightAmino;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightSDKType {
  cosmos_block_height: Long;
  ethereum_block_height: Long;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenom {
  erc20: string;
  denom: string;
}
export interface ERC20ToDenomProtoMsg {
  typeUrl: "/gravity.v1.ERC20ToDenom";
  value: Uint8Array;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenomAmino {
  erc20: string;
  denom: string;
}
export interface ERC20ToDenomAminoMsg {
  type: "/gravity.v1.ERC20ToDenom";
  value: ERC20ToDenomAmino;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenomSDKType {
  erc20: string;
  denom: string;
}
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposal {
  title: string;
  description: string;
  targetNonce: Long;
}
export interface UnhaltBridgeProposalProtoMsg {
  typeUrl: "/gravity.v1.UnhaltBridgeProposal";
  value: Uint8Array;
}
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposalAmino {
  title: string;
  description: string;
  target_nonce: string;
}
export interface UnhaltBridgeProposalAminoMsg {
  type: "/gravity.v1.UnhaltBridgeProposal";
  value: UnhaltBridgeProposalAmino;
}
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposalSDKType {
  title: string;
  description: string;
  target_nonce: Long;
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposal {
  title: string;
  description: string;
  denom: string;
  recipients: Uint8Array;
  amounts: Long[];
}
export interface AirdropProposalProtoMsg {
  typeUrl: "/gravity.v1.AirdropProposal";
  value: Uint8Array;
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposalAmino {
  title: string;
  description: string;
  denom: string;
  recipients: Uint8Array;
  amounts: string[];
}
export interface AirdropProposalAminoMsg {
  type: "/gravity.v1.AirdropProposal";
  value: AirdropProposalAmino;
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposalSDKType {
  title: string;
  description: string;
  denom: string;
  recipients: Uint8Array;
  amounts: Long[];
}
/**
 * IBCMetadataProposal defines a custom governance proposal type that allows governance to set the
 * metadata for an IBC token, this will allow Gravity to deploy an ERC20 representing this token on
 * Ethereum
 * Name: the token name
 * Symbol: the token symbol
 * Description: the token description, not sent to ETH at all, only used on Cosmos
 * Display: the token display name (only used on Cosmos to decide ERC20 Decimals)
 * Deicmals: the decimals for the display unit
 * ibc_denom is the denom of the token in question on this chain
 */
export interface IBCMetadataProposal {
  title: string;
  description: string;
  metadata: Metadata;
  ibcDenom: string;
}
export interface IBCMetadataProposalProtoMsg {
  typeUrl: "/gravity.v1.IBCMetadataProposal";
  value: Uint8Array;
}
/**
 * IBCMetadataProposal defines a custom governance proposal type that allows governance to set the
 * metadata for an IBC token, this will allow Gravity to deploy an ERC20 representing this token on
 * Ethereum
 * Name: the token name
 * Symbol: the token symbol
 * Description: the token description, not sent to ETH at all, only used on Cosmos
 * Display: the token display name (only used on Cosmos to decide ERC20 Decimals)
 * Deicmals: the decimals for the display unit
 * ibc_denom is the denom of the token in question on this chain
 */
export interface IBCMetadataProposalAmino {
  title: string;
  description: string;
  metadata?: MetadataAmino;
  ibc_denom: string;
}
export interface IBCMetadataProposalAminoMsg {
  type: "/gravity.v1.IBCMetadataProposal";
  value: IBCMetadataProposalAmino;
}
/**
 * IBCMetadataProposal defines a custom governance proposal type that allows governance to set the
 * metadata for an IBC token, this will allow Gravity to deploy an ERC20 representing this token on
 * Ethereum
 * Name: the token name
 * Symbol: the token symbol
 * Description: the token description, not sent to ETH at all, only used on Cosmos
 * Display: the token display name (only used on Cosmos to decide ERC20 Decimals)
 * Deicmals: the decimals for the display unit
 * ibc_denom is the denom of the token in question on this chain
 */
export interface IBCMetadataProposalSDKType {
  title: string;
  description: string;
  metadata: MetadataSDKType;
  ibc_denom: string;
}
function createBaseBridgeValidator(): BridgeValidator {
  return {
    power: Long.UZERO,
    ethereumAddress: ""
  };
}
export const BridgeValidator = {
  encode(message: BridgeValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.power.isZero()) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(18).string(message.ethereumAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BridgeValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = (reader.uint64() as Long);
          break;
        case 2:
          message.ethereumAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BridgeValidator>): BridgeValidator {
    const message = createBaseBridgeValidator();
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.UZERO;
    message.ethereumAddress = object.ethereumAddress ?? "";
    return message;
  },
  fromAmino(object: BridgeValidatorAmino): BridgeValidator {
    return {
      power: Long.fromString(object.power),
      ethereumAddress: object.ethereum_address
    };
  },
  toAmino(message: BridgeValidator): BridgeValidatorAmino {
    const obj: any = {};
    obj.power = message.power ? message.power.toString() : undefined;
    obj.ethereum_address = message.ethereumAddress;
    return obj;
  },
  fromAminoMsg(object: BridgeValidatorAminoMsg): BridgeValidator {
    return BridgeValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: BridgeValidatorProtoMsg): BridgeValidator {
    return BridgeValidator.decode(message.value);
  },
  toProto(message: BridgeValidator): Uint8Array {
    return BridgeValidator.encode(message).finish();
  },
  toProtoMsg(message: BridgeValidator): BridgeValidatorProtoMsg {
    return {
      typeUrl: "/gravity.v1.BridgeValidator",
      value: BridgeValidator.encode(message).finish()
    };
  }
};
function createBaseValset(): Valset {
  return {
    nonce: Long.UZERO,
    members: [],
    height: Long.UZERO,
    rewardAmount: "",
    rewardToken: ""
  };
}
export const Valset = {
  encode(message: Valset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.rewardAmount !== "") {
      writer.uint32(34).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(42).string(message.rewardToken);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Valset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;
        case 2:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = (reader.uint64() as Long);
          break;
        case 4:
          message.rewardAmount = reader.string();
          break;
        case 5:
          message.rewardToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Valset>): Valset {
    const message = createBaseValset();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    return message;
  },
  fromAmino(object: ValsetAmino): Valset {
    return {
      nonce: Long.fromString(object.nonce),
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromAmino(e)) : [],
      height: Long.fromString(object.height),
      rewardAmount: object.reward_amount,
      rewardToken: object.reward_token
    };
  },
  toAmino(message: Valset): ValsetAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.height = message.height ? message.height.toString() : undefined;
    obj.reward_amount = message.rewardAmount;
    obj.reward_token = message.rewardToken;
    return obj;
  },
  fromAminoMsg(object: ValsetAminoMsg): Valset {
    return Valset.fromAmino(object.value);
  },
  fromProtoMsg(message: ValsetProtoMsg): Valset {
    return Valset.decode(message.value);
  },
  toProto(message: Valset): Uint8Array {
    return Valset.encode(message).finish();
  },
  toProtoMsg(message: Valset): ValsetProtoMsg {
    return {
      typeUrl: "/gravity.v1.Valset",
      value: Valset.encode(message).finish()
    };
  }
};
function createBaseLastObservedEthereumBlockHeight(): LastObservedEthereumBlockHeight {
  return {
    cosmosBlockHeight: Long.UZERO,
    ethereumBlockHeight: Long.UZERO
  };
}
export const LastObservedEthereumBlockHeight = {
  encode(message: LastObservedEthereumBlockHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cosmosBlockHeight.isZero()) {
      writer.uint32(8).uint64(message.cosmosBlockHeight);
    }
    if (!message.ethereumBlockHeight.isZero()) {
      writer.uint32(16).uint64(message.ethereumBlockHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LastObservedEthereumBlockHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastObservedEthereumBlockHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosBlockHeight = (reader.uint64() as Long);
          break;
        case 2:
          message.ethereumBlockHeight = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LastObservedEthereumBlockHeight>): LastObservedEthereumBlockHeight {
    const message = createBaseLastObservedEthereumBlockHeight();
    message.cosmosBlockHeight = object.cosmosBlockHeight !== undefined && object.cosmosBlockHeight !== null ? Long.fromValue(object.cosmosBlockHeight) : Long.UZERO;
    message.ethereumBlockHeight = object.ethereumBlockHeight !== undefined && object.ethereumBlockHeight !== null ? Long.fromValue(object.ethereumBlockHeight) : Long.UZERO;
    return message;
  },
  fromAmino(object: LastObservedEthereumBlockHeightAmino): LastObservedEthereumBlockHeight {
    return {
      cosmosBlockHeight: Long.fromString(object.cosmos_block_height),
      ethereumBlockHeight: Long.fromString(object.ethereum_block_height)
    };
  },
  toAmino(message: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeightAmino {
    const obj: any = {};
    obj.cosmos_block_height = message.cosmosBlockHeight ? message.cosmosBlockHeight.toString() : undefined;
    obj.ethereum_block_height = message.ethereumBlockHeight ? message.ethereumBlockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LastObservedEthereumBlockHeightAminoMsg): LastObservedEthereumBlockHeight {
    return LastObservedEthereumBlockHeight.fromAmino(object.value);
  },
  fromProtoMsg(message: LastObservedEthereumBlockHeightProtoMsg): LastObservedEthereumBlockHeight {
    return LastObservedEthereumBlockHeight.decode(message.value);
  },
  toProto(message: LastObservedEthereumBlockHeight): Uint8Array {
    return LastObservedEthereumBlockHeight.encode(message).finish();
  },
  toProtoMsg(message: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeightProtoMsg {
    return {
      typeUrl: "/gravity.v1.LastObservedEthereumBlockHeight",
      value: LastObservedEthereumBlockHeight.encode(message).finish()
    };
  }
};
function createBaseERC20ToDenom(): ERC20ToDenom {
  return {
    erc20: "",
    denom: ""
  };
}
export const ERC20ToDenom = {
  encode(message: ERC20ToDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20ToDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20ToDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ERC20ToDenom>): ERC20ToDenom {
    const message = createBaseERC20ToDenom();
    message.erc20 = object.erc20 ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: ERC20ToDenomAmino): ERC20ToDenom {
    return {
      erc20: object.erc20,
      denom: object.denom
    };
  },
  toAmino(message: ERC20ToDenom): ERC20ToDenomAmino {
    const obj: any = {};
    obj.erc20 = message.erc20;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: ERC20ToDenomAminoMsg): ERC20ToDenom {
    return ERC20ToDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20ToDenomProtoMsg): ERC20ToDenom {
    return ERC20ToDenom.decode(message.value);
  },
  toProto(message: ERC20ToDenom): Uint8Array {
    return ERC20ToDenom.encode(message).finish();
  },
  toProtoMsg(message: ERC20ToDenom): ERC20ToDenomProtoMsg {
    return {
      typeUrl: "/gravity.v1.ERC20ToDenom",
      value: ERC20ToDenom.encode(message).finish()
    };
  }
};
function createBaseUnhaltBridgeProposal(): UnhaltBridgeProposal {
  return {
    title: "",
    description: "",
    targetNonce: Long.UZERO
  };
}
export const UnhaltBridgeProposal = {
  encode(message: UnhaltBridgeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (!message.targetNonce.isZero()) {
      writer.uint32(32).uint64(message.targetNonce);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UnhaltBridgeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnhaltBridgeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.targetNonce = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnhaltBridgeProposal>): UnhaltBridgeProposal {
    const message = createBaseUnhaltBridgeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.targetNonce = object.targetNonce !== undefined && object.targetNonce !== null ? Long.fromValue(object.targetNonce) : Long.UZERO;
    return message;
  },
  fromAmino(object: UnhaltBridgeProposalAmino): UnhaltBridgeProposal {
    return {
      title: object.title,
      description: object.description,
      targetNonce: Long.fromString(object.target_nonce)
    };
  },
  toAmino(message: UnhaltBridgeProposal): UnhaltBridgeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.target_nonce = message.targetNonce ? message.targetNonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UnhaltBridgeProposalAminoMsg): UnhaltBridgeProposal {
    return UnhaltBridgeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UnhaltBridgeProposalProtoMsg): UnhaltBridgeProposal {
    return UnhaltBridgeProposal.decode(message.value);
  },
  toProto(message: UnhaltBridgeProposal): Uint8Array {
    return UnhaltBridgeProposal.encode(message).finish();
  },
  toProtoMsg(message: UnhaltBridgeProposal): UnhaltBridgeProposalProtoMsg {
    return {
      typeUrl: "/gravity.v1.UnhaltBridgeProposal",
      value: UnhaltBridgeProposal.encode(message).finish()
    };
  }
};
function createBaseAirdropProposal(): AirdropProposal {
  return {
    title: "",
    description: "",
    denom: "",
    recipients: new Uint8Array(),
    amounts: []
  };
}
export const AirdropProposal = {
  encode(message: AirdropProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.recipients.length !== 0) {
      writer.uint32(34).bytes(message.recipients);
    }
    writer.uint32(42).fork();
    for (const v of message.amounts) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AirdropProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdropProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.recipients = reader.bytes();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.amounts.push((reader.uint64() as Long));
            }
          } else {
            message.amounts.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AirdropProposal>): AirdropProposal {
    const message = createBaseAirdropProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.recipients = object.recipients ?? new Uint8Array();
    message.amounts = object.amounts?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromAmino(object: AirdropProposalAmino): AirdropProposal {
    return {
      title: object.title,
      description: object.description,
      denom: object.denom,
      recipients: object.recipients,
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => e) : []
    };
  },
  toAmino(message: AirdropProposal): AirdropProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.denom = message.denom;
    obj.recipients = message.recipients;
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: AirdropProposalAminoMsg): AirdropProposal {
    return AirdropProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AirdropProposalProtoMsg): AirdropProposal {
    return AirdropProposal.decode(message.value);
  },
  toProto(message: AirdropProposal): Uint8Array {
    return AirdropProposal.encode(message).finish();
  },
  toProtoMsg(message: AirdropProposal): AirdropProposalProtoMsg {
    return {
      typeUrl: "/gravity.v1.AirdropProposal",
      value: AirdropProposal.encode(message).finish()
    };
  }
};
function createBaseIBCMetadataProposal(): IBCMetadataProposal {
  return {
    title: "",
    description: "",
    metadata: Metadata.fromPartial({}),
    ibcDenom: ""
  };
}
export const IBCMetadataProposal = {
  encode(message: IBCMetadataProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.ibcDenom !== "") {
      writer.uint32(34).string(message.ibcDenom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IBCMetadataProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCMetadataProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.ibcDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IBCMetadataProposal>): IBCMetadataProposal {
    const message = createBaseIBCMetadataProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.ibcDenom = object.ibcDenom ?? "";
    return message;
  },
  fromAmino(object: IBCMetadataProposalAmino): IBCMetadataProposal {
    return {
      title: object.title,
      description: object.description,
      metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined,
      ibcDenom: object.ibc_denom
    };
  },
  toAmino(message: IBCMetadataProposal): IBCMetadataProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.ibc_denom = message.ibcDenom;
    return obj;
  },
  fromAminoMsg(object: IBCMetadataProposalAminoMsg): IBCMetadataProposal {
    return IBCMetadataProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCMetadataProposalProtoMsg): IBCMetadataProposal {
    return IBCMetadataProposal.decode(message.value);
  },
  toProto(message: IBCMetadataProposal): Uint8Array {
    return IBCMetadataProposal.encode(message).finish();
  },
  toProtoMsg(message: IBCMetadataProposal): IBCMetadataProposalProtoMsg {
    return {
      typeUrl: "/gravity.v1.IBCMetadataProposal",
      value: IBCMetadataProposal.encode(message).finish()
    };
  }
};