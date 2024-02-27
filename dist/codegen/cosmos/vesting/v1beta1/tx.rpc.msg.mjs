import * as _m0 from "protobufjs/minimal";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createVestingAccount = this.createVestingAccount.bind(this);
    }
    createVestingAccount(request) {
        const data = MsgCreateVestingAccount.encode(request).finish();
        const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
        return promise.then(data => MsgCreateVestingAccountResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map