import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryLastPendingLogicCallByAddrRequest, QueryLastPendingLogicCallByAddrResponse, QueryLastEventNonceByAddrRequest, QueryLastEventNonceByAddrResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryOutgoingLogicCallsRequest, QueryOutgoingLogicCallsResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryLogicConfirmsRequest, QueryLogicConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryAttestationsRequest, QueryAttestationsResponse, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    currentValset(request = {}) {
        const data = QueryCurrentValsetRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "CurrentValset", data);
        return promise.then(data => QueryCurrentValsetResponse.decode(new _m0.Reader(data)));
    }
    valsetRequest(request) {
        const data = QueryValsetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetRequest", data);
        return promise.then(data => QueryValsetRequestResponse.decode(new _m0.Reader(data)));
    }
    valsetConfirm(request) {
        const data = QueryValsetConfirmRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirm", data);
        return promise.then(data => QueryValsetConfirmResponse.decode(new _m0.Reader(data)));
    }
    valsetConfirmsByNonce(request) {
        const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirmsByNonce", data);
        return promise.then(data => QueryValsetConfirmsByNonceResponse.decode(new _m0.Reader(data)));
    }
    lastValsetRequests(request = {}) {
        const data = QueryLastValsetRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastValsetRequests", data);
        return promise.then(data => QueryLastValsetRequestsResponse.decode(new _m0.Reader(data)));
    }
    lastPendingValsetRequestByAddr(request) {
        const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingValsetRequestByAddr", data);
        return promise.then(data => QueryLastPendingValsetRequestByAddrResponse.decode(new _m0.Reader(data)));
    }
    lastPendingBatchRequestByAddr(request) {
        const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingBatchRequestByAddr", data);
        return promise.then(data => QueryLastPendingBatchRequestByAddrResponse.decode(new _m0.Reader(data)));
    }
    lastPendingLogicCallByAddr(request) {
        const data = QueryLastPendingLogicCallByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingLogicCallByAddr", data);
        return promise.then(data => QueryLastPendingLogicCallByAddrResponse.decode(new _m0.Reader(data)));
    }
    lastEventNonceByAddr(request) {
        const data = QueryLastEventNonceByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastEventNonceByAddr", data);
        return promise.then(data => QueryLastEventNonceByAddrResponse.decode(new _m0.Reader(data)));
    }
    batchFees(request = {}) {
        const data = QueryBatchFeeRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchFees", data);
        return promise.then(data => QueryBatchFeeResponse.decode(new _m0.Reader(data)));
    }
    outgoingTxBatches(request = {}) {
        const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingTxBatches", data);
        return promise.then(data => QueryOutgoingTxBatchesResponse.decode(new _m0.Reader(data)));
    }
    outgoingLogicCalls(request = {}) {
        const data = QueryOutgoingLogicCallsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingLogicCalls", data);
        return promise.then(data => QueryOutgoingLogicCallsResponse.decode(new _m0.Reader(data)));
    }
    batchRequestByNonce(request) {
        const data = QueryBatchRequestByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchRequestByNonce", data);
        return promise.then(data => QueryBatchRequestByNonceResponse.decode(new _m0.Reader(data)));
    }
    batchConfirms(request) {
        const data = QueryBatchConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchConfirms", data);
        return promise.then(data => QueryBatchConfirmsResponse.decode(new _m0.Reader(data)));
    }
    logicConfirms(request) {
        const data = QueryLogicConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LogicConfirms", data);
        return promise.then(data => QueryLogicConfirmsResponse.decode(new _m0.Reader(data)));
    }
    eRC20ToDenom(request) {
        const data = QueryERC20ToDenomRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ERC20ToDenom", data);
        return promise.then(data => QueryERC20ToDenomResponse.decode(new _m0.Reader(data)));
    }
    denomToERC20(request) {
        const data = QueryDenomToERC20Request.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "DenomToERC20", data);
        return promise.then(data => QueryDenomToERC20Response.decode(new _m0.Reader(data)));
    }
    getAttestations(request) {
        const data = QueryAttestationsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetAttestations", data);
        return promise.then(data => QueryAttestationsResponse.decode(new _m0.Reader(data)));
    }
    getDelegateKeyByValidator(request) {
        const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByValidator", data);
        return promise.then(data => QueryDelegateKeysByValidatorAddressResponse.decode(new _m0.Reader(data)));
    }
    getDelegateKeyByEth(request) {
        const data = QueryDelegateKeysByEthAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByEth", data);
        return promise.then(data => QueryDelegateKeysByEthAddressResponse.decode(new _m0.Reader(data)));
    }
    getDelegateKeyByOrchestrator(request) {
        const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByOrchestrator", data);
        return promise.then(data => QueryDelegateKeysByOrchestratorAddressResponse.decode(new _m0.Reader(data)));
    }
    getPendingSendToEth(request) {
        const data = QueryPendingSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingSendToEth", data);
        return promise.then(data => QueryPendingSendToEthResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
//# sourceMappingURL=query.rpc.Query.js.map