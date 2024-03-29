export const createRPCMsgClient = async ({ rpc }) => ({
    cosmos: {
        authz: {
            v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        bank: {
            v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        distribution: {
            v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        gov: {
            v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        staking: {
            v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        vesting: {
            v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        }
    },
    pendulumlabs: {
        market: {
            market: new (await import("../market/tx.rpc.msg")).MsgClientImpl(rpc)
        }
    }
});
//# sourceMappingURL=rpc.tx.js.map