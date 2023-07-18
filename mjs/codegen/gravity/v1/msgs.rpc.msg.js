import * as _m0 from "protobufjs/minimal";
import { MsgValsetConfirm, MsgValsetConfirmResponse, MsgSendToEth, MsgSendToEthResponse, MsgRequestBatch, MsgRequestBatchResponse, MsgConfirmBatch, MsgConfirmBatchResponse, MsgConfirmLogicCall, MsgConfirmLogicCallResponse, MsgSendToCosmosClaim, MsgSendToCosmosClaimResponse, MsgBatchSendToEthClaim, MsgBatchSendToEthClaimResponse, MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse, MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse, MsgLogicCallExecutedClaim, MsgLogicCallExecutedClaimResponse, MsgSetOrchestratorAddress, MsgSetOrchestratorAddressResponse, MsgCancelSendToEth, MsgCancelSendToEthResponse, MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse } from "./msgs";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.valsetConfirm = this.valsetConfirm.bind(this);
        this.sendToEth = this.sendToEth.bind(this);
        this.requestBatch = this.requestBatch.bind(this);
        this.confirmBatch = this.confirmBatch.bind(this);
        this.confirmLogicCall = this.confirmLogicCall.bind(this);
        this.sendToCosmosClaim = this.sendToCosmosClaim.bind(this);
        this.batchSendToEthClaim = this.batchSendToEthClaim.bind(this);
        this.valsetUpdateClaim = this.valsetUpdateClaim.bind(this);
        this.eRC20DeployedClaim = this.eRC20DeployedClaim.bind(this);
        this.logicCallExecutedClaim = this.logicCallExecutedClaim.bind(this);
        this.setOrchestratorAddress = this.setOrchestratorAddress.bind(this);
        this.cancelSendToEth = this.cancelSendToEth.bind(this);
        this.submitBadSignatureEvidence = this.submitBadSignatureEvidence.bind(this);
    }
    valsetConfirm(request) {
        const data = MsgValsetConfirm.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetConfirm", data);
        return promise.then(data => MsgValsetConfirmResponse.decode(new _m0.Reader(data)));
    }
    sendToEth(request) {
        const data = MsgSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SendToEth", data);
        return promise.then(data => MsgSendToEthResponse.decode(new _m0.Reader(data)));
    }
    requestBatch(request) {
        const data = MsgRequestBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "RequestBatch", data);
        return promise.then(data => MsgRequestBatchResponse.decode(new _m0.Reader(data)));
    }
    confirmBatch(request) {
        const data = MsgConfirmBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmBatch", data);
        return promise.then(data => MsgConfirmBatchResponse.decode(new _m0.Reader(data)));
    }
    confirmLogicCall(request) {
        const data = MsgConfirmLogicCall.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmLogicCall", data);
        return promise.then(data => MsgConfirmLogicCallResponse.decode(new _m0.Reader(data)));
    }
    sendToCosmosClaim(request) {
        const data = MsgSendToCosmosClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SendToCosmosClaim", data);
        return promise.then(data => MsgSendToCosmosClaimResponse.decode(new _m0.Reader(data)));
    }
    batchSendToEthClaim(request) {
        const data = MsgBatchSendToEthClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "BatchSendToEthClaim", data);
        return promise.then(data => MsgBatchSendToEthClaimResponse.decode(new _m0.Reader(data)));
    }
    valsetUpdateClaim(request) {
        const data = MsgValsetUpdatedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetUpdateClaim", data);
        return promise.then(data => MsgValsetUpdatedClaimResponse.decode(new _m0.Reader(data)));
    }
    eRC20DeployedClaim(request) {
        const data = MsgERC20DeployedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ERC20DeployedClaim", data);
        return promise.then(data => MsgERC20DeployedClaimResponse.decode(new _m0.Reader(data)));
    }
    logicCallExecutedClaim(request) {
        const data = MsgLogicCallExecutedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "LogicCallExecutedClaim", data);
        return promise.then(data => MsgLogicCallExecutedClaimResponse.decode(new _m0.Reader(data)));
    }
    setOrchestratorAddress(request) {
        const data = MsgSetOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SetOrchestratorAddress", data);
        return promise.then(data => MsgSetOrchestratorAddressResponse.decode(new _m0.Reader(data)));
    }
    cancelSendToEth(request) {
        const data = MsgCancelSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "CancelSendToEth", data);
        return promise.then(data => MsgCancelSendToEthResponse.decode(new _m0.Reader(data)));
    }
    submitBadSignatureEvidence(request) {
        const data = MsgSubmitBadSignatureEvidence.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SubmitBadSignatureEvidence", data);
        return promise.then(data => MsgSubmitBadSignatureEvidenceResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=msgs.rpc.msg.js.map