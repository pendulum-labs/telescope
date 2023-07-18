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
        this.validators = this.validators.bind(this);
        this.validator = this.validator.bind(this);
        this.validatorDelegations = this.validatorDelegations.bind(this);
        this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
        this.delegation = this.delegation.bind(this);
        this.unbondingDelegation = this.unbondingDelegation.bind(this);
        this.delegatorDelegations = this.delegatorDelegations.bind(this);
        this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
        this.redelegations = this.redelegations.bind(this);
        this.delegatorValidators = this.delegatorValidators.bind(this);
        this.delegatorValidator = this.delegatorValidator.bind(this);
        this.historicalInfo = this.historicalInfo.bind(this);
        this.pool = this.pool.bind(this);
        this.params = this.params.bind(this);
    }
    validators(request) {
        const data = query_1.QueryValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
        return promise.then(data => query_1.QueryValidatorsResponse.decode(new _m0.Reader(data)));
    }
    validator(request) {
        const data = query_1.QueryValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
        return promise.then(data => query_1.QueryValidatorResponse.decode(new _m0.Reader(data)));
    }
    validatorDelegations(request) {
        const data = query_1.QueryValidatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
        return promise.then(data => query_1.QueryValidatorDelegationsResponse.decode(new _m0.Reader(data)));
    }
    validatorUnbondingDelegations(request) {
        const data = query_1.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
        return promise.then(data => query_1.QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
    }
    delegation(request) {
        const data = query_1.QueryDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
        return promise.then(data => query_1.QueryDelegationResponse.decode(new _m0.Reader(data)));
    }
    unbondingDelegation(request) {
        const data = query_1.QueryUnbondingDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
        return promise.then(data => query_1.QueryUnbondingDelegationResponse.decode(new _m0.Reader(data)));
    }
    delegatorDelegations(request) {
        const data = query_1.QueryDelegatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
        return promise.then(data => query_1.QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data)));
    }
    delegatorUnbondingDelegations(request) {
        const data = query_1.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
        return promise.then(data => query_1.QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
    }
    redelegations(request) {
        const data = query_1.QueryRedelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
        return promise.then(data => query_1.QueryRedelegationsResponse.decode(new _m0.Reader(data)));
    }
    delegatorValidators(request) {
        const data = query_1.QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
        return promise.then(data => query_1.QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
    }
    delegatorValidator(request) {
        const data = query_1.QueryDelegatorValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
        return promise.then(data => query_1.QueryDelegatorValidatorResponse.decode(new _m0.Reader(data)));
    }
    historicalInfo(request) {
        const data = query_1.QueryHistoricalInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
        return promise.then(data => query_1.QueryHistoricalInfoResponse.decode(new _m0.Reader(data)));
    }
    pool(request = {}) {
        const data = query_1.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
        return promise.then(data => query_1.QueryPoolResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        validators(request) {
            return queryService.validators(request);
        },
        validator(request) {
            return queryService.validator(request);
        },
        validatorDelegations(request) {
            return queryService.validatorDelegations(request);
        },
        validatorUnbondingDelegations(request) {
            return queryService.validatorUnbondingDelegations(request);
        },
        delegation(request) {
            return queryService.delegation(request);
        },
        unbondingDelegation(request) {
            return queryService.unbondingDelegation(request);
        },
        delegatorDelegations(request) {
            return queryService.delegatorDelegations(request);
        },
        delegatorUnbondingDelegations(request) {
            return queryService.delegatorUnbondingDelegations(request);
        },
        redelegations(request) {
            return queryService.redelegations(request);
        },
        delegatorValidators(request) {
            return queryService.delegatorValidators(request);
        },
        delegatorValidator(request) {
            return queryService.delegatorValidator(request);
        },
        historicalInfo(request) {
            return queryService.historicalInfo(request);
        },
        pool(request) {
            return queryService.pool(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map