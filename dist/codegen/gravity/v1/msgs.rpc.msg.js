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
exports.MsgClientImpl = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const msgs_1 = require("./msgs");
class MsgClientImpl {
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
        const data = msgs_1.MsgValsetConfirm.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetConfirm", data);
        return promise.then(data => msgs_1.MsgValsetConfirmResponse.decode(new _m0.Reader(data)));
    }
    sendToEth(request) {
        const data = msgs_1.MsgSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SendToEth", data);
        return promise.then(data => msgs_1.MsgSendToEthResponse.decode(new _m0.Reader(data)));
    }
    requestBatch(request) {
        const data = msgs_1.MsgRequestBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "RequestBatch", data);
        return promise.then(data => msgs_1.MsgRequestBatchResponse.decode(new _m0.Reader(data)));
    }
    confirmBatch(request) {
        const data = msgs_1.MsgConfirmBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmBatch", data);
        return promise.then(data => msgs_1.MsgConfirmBatchResponse.decode(new _m0.Reader(data)));
    }
    confirmLogicCall(request) {
        const data = msgs_1.MsgConfirmLogicCall.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmLogicCall", data);
        return promise.then(data => msgs_1.MsgConfirmLogicCallResponse.decode(new _m0.Reader(data)));
    }
    sendToCosmosClaim(request) {
        const data = msgs_1.MsgSendToCosmosClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SendToCosmosClaim", data);
        return promise.then(data => msgs_1.MsgSendToCosmosClaimResponse.decode(new _m0.Reader(data)));
    }
    batchSendToEthClaim(request) {
        const data = msgs_1.MsgBatchSendToEthClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "BatchSendToEthClaim", data);
        return promise.then(data => msgs_1.MsgBatchSendToEthClaimResponse.decode(new _m0.Reader(data)));
    }
    valsetUpdateClaim(request) {
        const data = msgs_1.MsgValsetUpdatedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetUpdateClaim", data);
        return promise.then(data => msgs_1.MsgValsetUpdatedClaimResponse.decode(new _m0.Reader(data)));
    }
    eRC20DeployedClaim(request) {
        const data = msgs_1.MsgERC20DeployedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ERC20DeployedClaim", data);
        return promise.then(data => msgs_1.MsgERC20DeployedClaimResponse.decode(new _m0.Reader(data)));
    }
    logicCallExecutedClaim(request) {
        const data = msgs_1.MsgLogicCallExecutedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "LogicCallExecutedClaim", data);
        return promise.then(data => msgs_1.MsgLogicCallExecutedClaimResponse.decode(new _m0.Reader(data)));
    }
    setOrchestratorAddress(request) {
        const data = msgs_1.MsgSetOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SetOrchestratorAddress", data);
        return promise.then(data => msgs_1.MsgSetOrchestratorAddressResponse.decode(new _m0.Reader(data)));
    }
    cancelSendToEth(request) {
        const data = msgs_1.MsgCancelSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "CancelSendToEth", data);
        return promise.then(data => msgs_1.MsgCancelSendToEthResponse.decode(new _m0.Reader(data)));
    }
    submitBadSignatureEvidence(request) {
        const data = msgs_1.MsgSubmitBadSignatureEvidence.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SubmitBadSignatureEvidence", data);
        return promise.then(data => msgs_1.MsgSubmitBadSignatureEvidenceResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=msgs.rpc.msg.js.map