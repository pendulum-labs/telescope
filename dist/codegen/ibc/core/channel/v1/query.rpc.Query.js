"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.channel = this.channel.bind(this);
        this.channels = this.channels.bind(this);
        this.connectionChannels = this.connectionChannels.bind(this);
        this.channelClientState = this.channelClientState.bind(this);
        this.channelConsensusState = this.channelConsensusState.bind(this);
        this.packetCommitment = this.packetCommitment.bind(this);
        this.packetCommitments = this.packetCommitments.bind(this);
        this.packetReceipt = this.packetReceipt.bind(this);
        this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
        this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
        this.unreceivedPackets = this.unreceivedPackets.bind(this);
        this.unreceivedAcks = this.unreceivedAcks.bind(this);
        this.nextSequenceReceive = this.nextSequenceReceive.bind(this);
    }
    channel(request) {
        const data = query_1.QueryChannelRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
        return promise.then(data => query_1.QueryChannelResponse.decode(new _m0.Reader(data)));
    }
    channels(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
        return promise.then(data => query_1.QueryChannelsResponse.decode(new _m0.Reader(data)));
    }
    connectionChannels(request) {
        const data = query_1.QueryConnectionChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
        return promise.then(data => query_1.QueryConnectionChannelsResponse.decode(new _m0.Reader(data)));
    }
    channelClientState(request) {
        const data = query_1.QueryChannelClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
        return promise.then(data => query_1.QueryChannelClientStateResponse.decode(new _m0.Reader(data)));
    }
    channelConsensusState(request) {
        const data = query_1.QueryChannelConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
        return promise.then(data => query_1.QueryChannelConsensusStateResponse.decode(new _m0.Reader(data)));
    }
    packetCommitment(request) {
        const data = query_1.QueryPacketCommitmentRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
        return promise.then(data => query_1.QueryPacketCommitmentResponse.decode(new _m0.Reader(data)));
    }
    packetCommitments(request) {
        const data = query_1.QueryPacketCommitmentsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
        return promise.then(data => query_1.QueryPacketCommitmentsResponse.decode(new _m0.Reader(data)));
    }
    packetReceipt(request) {
        const data = query_1.QueryPacketReceiptRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
        return promise.then(data => query_1.QueryPacketReceiptResponse.decode(new _m0.Reader(data)));
    }
    packetAcknowledgement(request) {
        const data = query_1.QueryPacketAcknowledgementRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
        return promise.then(data => query_1.QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data)));
    }
    packetAcknowledgements(request) {
        const data = query_1.QueryPacketAcknowledgementsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
        return promise.then(data => query_1.QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data)));
    }
    unreceivedPackets(request) {
        const data = query_1.QueryUnreceivedPacketsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
        return promise.then(data => query_1.QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data)));
    }
    unreceivedAcks(request) {
        const data = query_1.QueryUnreceivedAcksRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
        return promise.then(data => query_1.QueryUnreceivedAcksResponse.decode(new _m0.Reader(data)));
    }
    nextSequenceReceive(request) {
        const data = query_1.QueryNextSequenceReceiveRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
        return promise.then(data => query_1.QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        channel(request) {
            return queryService.channel(request);
        },
        channels(request) {
            return queryService.channels(request);
        },
        connectionChannels(request) {
            return queryService.connectionChannels(request);
        },
        channelClientState(request) {
            return queryService.channelClientState(request);
        },
        channelConsensusState(request) {
            return queryService.channelConsensusState(request);
        },
        packetCommitment(request) {
            return queryService.packetCommitment(request);
        },
        packetCommitments(request) {
            return queryService.packetCommitments(request);
        },
        packetReceipt(request) {
            return queryService.packetReceipt(request);
        },
        packetAcknowledgement(request) {
            return queryService.packetAcknowledgement(request);
        },
        packetAcknowledgements(request) {
            return queryService.packetAcknowledgements(request);
        },
        unreceivedPackets(request) {
            return queryService.unreceivedPackets(request);
        },
        unreceivedAcks(request) {
            return queryService.unreceivedAcks(request);
        },
        nextSequenceReceive(request) {
            return queryService.nextSequenceReceive(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map