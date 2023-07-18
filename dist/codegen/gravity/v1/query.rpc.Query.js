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
        this.params = this.params.bind(this);
        this.currentValset = this.currentValset.bind(this);
        this.valsetRequest = this.valsetRequest.bind(this);
        this.valsetConfirm = this.valsetConfirm.bind(this);
        this.valsetConfirmsByNonce = this.valsetConfirmsByNonce.bind(this);
        this.lastValsetRequests = this.lastValsetRequests.bind(this);
        this.lastPendingValsetRequestByAddr = this.lastPendingValsetRequestByAddr.bind(this);
        this.lastPendingBatchRequestByAddr = this.lastPendingBatchRequestByAddr.bind(this);
        this.lastPendingLogicCallByAddr = this.lastPendingLogicCallByAddr.bind(this);
        this.lastEventNonceByAddr = this.lastEventNonceByAddr.bind(this);
        this.batchFees = this.batchFees.bind(this);
        this.outgoingTxBatches = this.outgoingTxBatches.bind(this);
        this.outgoingLogicCalls = this.outgoingLogicCalls.bind(this);
        this.batchRequestByNonce = this.batchRequestByNonce.bind(this);
        this.batchConfirms = this.batchConfirms.bind(this);
        this.logicConfirms = this.logicConfirms.bind(this);
        this.eRC20ToDenom = this.eRC20ToDenom.bind(this);
        this.denomToERC20 = this.denomToERC20.bind(this);
        this.getAttestations = this.getAttestations.bind(this);
        this.getDelegateKeyByValidator = this.getDelegateKeyByValidator.bind(this);
        this.getDelegateKeyByEth = this.getDelegateKeyByEth.bind(this);
        this.getDelegateKeyByOrchestrator = this.getDelegateKeyByOrchestrator.bind(this);
        this.getPendingSendToEth = this.getPendingSendToEth.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    currentValset(request = {}) {
        const data = query_1.QueryCurrentValsetRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "CurrentValset", data);
        return promise.then(data => query_1.QueryCurrentValsetResponse.decode(new _m0.Reader(data)));
    }
    valsetRequest(request) {
        const data = query_1.QueryValsetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetRequest", data);
        return promise.then(data => query_1.QueryValsetRequestResponse.decode(new _m0.Reader(data)));
    }
    valsetConfirm(request) {
        const data = query_1.QueryValsetConfirmRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirm", data);
        return promise.then(data => query_1.QueryValsetConfirmResponse.decode(new _m0.Reader(data)));
    }
    valsetConfirmsByNonce(request) {
        const data = query_1.QueryValsetConfirmsByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirmsByNonce", data);
        return promise.then(data => query_1.QueryValsetConfirmsByNonceResponse.decode(new _m0.Reader(data)));
    }
    lastValsetRequests(request = {}) {
        const data = query_1.QueryLastValsetRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastValsetRequests", data);
        return promise.then(data => query_1.QueryLastValsetRequestsResponse.decode(new _m0.Reader(data)));
    }
    lastPendingValsetRequestByAddr(request) {
        const data = query_1.QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingValsetRequestByAddr", data);
        return promise.then(data => query_1.QueryLastPendingValsetRequestByAddrResponse.decode(new _m0.Reader(data)));
    }
    lastPendingBatchRequestByAddr(request) {
        const data = query_1.QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingBatchRequestByAddr", data);
        return promise.then(data => query_1.QueryLastPendingBatchRequestByAddrResponse.decode(new _m0.Reader(data)));
    }
    lastPendingLogicCallByAddr(request) {
        const data = query_1.QueryLastPendingLogicCallByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingLogicCallByAddr", data);
        return promise.then(data => query_1.QueryLastPendingLogicCallByAddrResponse.decode(new _m0.Reader(data)));
    }
    lastEventNonceByAddr(request) {
        const data = query_1.QueryLastEventNonceByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastEventNonceByAddr", data);
        return promise.then(data => query_1.QueryLastEventNonceByAddrResponse.decode(new _m0.Reader(data)));
    }
    batchFees(request = {}) {
        const data = query_1.QueryBatchFeeRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchFees", data);
        return promise.then(data => query_1.QueryBatchFeeResponse.decode(new _m0.Reader(data)));
    }
    outgoingTxBatches(request = {}) {
        const data = query_1.QueryOutgoingTxBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingTxBatches", data);
        return promise.then(data => query_1.QueryOutgoingTxBatchesResponse.decode(new _m0.Reader(data)));
    }
    outgoingLogicCalls(request = {}) {
        const data = query_1.QueryOutgoingLogicCallsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingLogicCalls", data);
        return promise.then(data => query_1.QueryOutgoingLogicCallsResponse.decode(new _m0.Reader(data)));
    }
    batchRequestByNonce(request) {
        const data = query_1.QueryBatchRequestByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchRequestByNonce", data);
        return promise.then(data => query_1.QueryBatchRequestByNonceResponse.decode(new _m0.Reader(data)));
    }
    batchConfirms(request) {
        const data = query_1.QueryBatchConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchConfirms", data);
        return promise.then(data => query_1.QueryBatchConfirmsResponse.decode(new _m0.Reader(data)));
    }
    logicConfirms(request) {
        const data = query_1.QueryLogicConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LogicConfirms", data);
        return promise.then(data => query_1.QueryLogicConfirmsResponse.decode(new _m0.Reader(data)));
    }
    eRC20ToDenom(request) {
        const data = query_1.QueryERC20ToDenomRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ERC20ToDenom", data);
        return promise.then(data => query_1.QueryERC20ToDenomResponse.decode(new _m0.Reader(data)));
    }
    denomToERC20(request) {
        const data = query_1.QueryDenomToERC20Request.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "DenomToERC20", data);
        return promise.then(data => query_1.QueryDenomToERC20Response.decode(new _m0.Reader(data)));
    }
    getAttestations(request) {
        const data = query_1.QueryAttestationsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetAttestations", data);
        return promise.then(data => query_1.QueryAttestationsResponse.decode(new _m0.Reader(data)));
    }
    getDelegateKeyByValidator(request) {
        const data = query_1.QueryDelegateKeysByValidatorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByValidator", data);
        return promise.then(data => query_1.QueryDelegateKeysByValidatorAddressResponse.decode(new _m0.Reader(data)));
    }
    getDelegateKeyByEth(request) {
        const data = query_1.QueryDelegateKeysByEthAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByEth", data);
        return promise.then(data => query_1.QueryDelegateKeysByEthAddressResponse.decode(new _m0.Reader(data)));
    }
    getDelegateKeyByOrchestrator(request) {
        const data = query_1.QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByOrchestrator", data);
        return promise.then(data => query_1.QueryDelegateKeysByOrchestratorAddressResponse.decode(new _m0.Reader(data)));
    }
    getPendingSendToEth(request) {
        const data = query_1.QueryPendingSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingSendToEth", data);
        return promise.then(data => query_1.QueryPendingSendToEthResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        currentValset(request) {
            return queryService.currentValset(request);
        },
        valsetRequest(request) {
            return queryService.valsetRequest(request);
        },
        valsetConfirm(request) {
            return queryService.valsetConfirm(request);
        },
        valsetConfirmsByNonce(request) {
            return queryService.valsetConfirmsByNonce(request);
        },
        lastValsetRequests(request) {
            return queryService.lastValsetRequests(request);
        },
        lastPendingValsetRequestByAddr(request) {
            return queryService.lastPendingValsetRequestByAddr(request);
        },
        lastPendingBatchRequestByAddr(request) {
            return queryService.lastPendingBatchRequestByAddr(request);
        },
        lastPendingLogicCallByAddr(request) {
            return queryService.lastPendingLogicCallByAddr(request);
        },
        lastEventNonceByAddr(request) {
            return queryService.lastEventNonceByAddr(request);
        },
        batchFees(request) {
            return queryService.batchFees(request);
        },
        outgoingTxBatches(request) {
            return queryService.outgoingTxBatches(request);
        },
        outgoingLogicCalls(request) {
            return queryService.outgoingLogicCalls(request);
        },
        batchRequestByNonce(request) {
            return queryService.batchRequestByNonce(request);
        },
        batchConfirms(request) {
            return queryService.batchConfirms(request);
        },
        logicConfirms(request) {
            return queryService.logicConfirms(request);
        },
        eRC20ToDenom(request) {
            return queryService.eRC20ToDenom(request);
        },
        denomToERC20(request) {
            return queryService.denomToERC20(request);
        },
        getAttestations(request) {
            return queryService.getAttestations(request);
        },
        getDelegateKeyByValidator(request) {
            return queryService.getDelegateKeyByValidator(request);
        },
        getDelegateKeyByEth(request) {
            return queryService.getDelegateKeyByEth(request);
        },
        getDelegateKeyByOrchestrator(request) {
            return queryService.getDelegateKeyByOrchestrator(request);
        },
        getPendingSendToEth(request) {
            return queryService.getPendingSendToEth(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map