"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.executeWorkerDeploymentRequest = void 0;
var typescript_sdk_1 = require("../typescript-sdk");
var typescript_sdk_2 = require("../typescript-sdk");
var signMessage_1 = require("./signMessage");
function executeWorkerDeploymentRequest() {
    return __awaiter(this, void 0, void 0, function () {
        var userAddress, siweMessage, privateKey, sig, signature, loginRequest, workerDeploymentRequest, config, apiClient, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userAddress = '0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8';
                    siweMessage = "api.service.testnet.crestal.xyz wants you to sign in with your Ethereum account:\n  0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8\n  \n  {\"ProjectID\":\"0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178\",\"RequestID\":\"0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2\",\"TargetPerformance\":0.95,\"SolverAddress\":\"0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8\",\"DAProposals\":[{\"ID\":1,\"ProjectID\":\"0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178\",\"ChainId\":80084,\"InitCost\":120,\"MaintenanceCost\":100,\"AcceptCurrencies\":\"USDC\",\"Fit\":0.9,\"Rank\":1,\"WorkerAddress\":\"0xBB900BbE1A20dA4d474666B79a5fa6CE12629733\"},{\"ID\":1,\"ProjectID\":\"0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178\",\"ChainId\":80084,\"InitCost\":130,\"MaintenanceCost\":20,\"AcceptCurrencies\":\"USDC\",\"Fit\":0.92,\"Rank\":2,\"WorkerAddress\":\"0xBB900BbE1A20dA4d474666B79a5fa6CE12629733\"}]}\n  \n  URI: https://api.service.testnet.crestal.xyz/v1\n  Version: 1\n  Chain ID: 80084\n  Nonce: 100000004\n  Issued At: 2024-10-28T02:31:44.066Z\n  Expiration Time: 2024-10-28T02:41:44.066Z\n  Resources:\n  - 0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2";
                    privateKey = '0x469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';
                    return [4 /*yield*/, signMessage_1.signMessageWithPrivateKey(siweMessage, privateKey)];
                case 1:
                    sig = _a.sent();
                    signature = '0x' + Buffer.from(sig).toString('hex');
                    loginRequest = {
                        userAddress: userAddress,
                        siweMsg: siweMessage,
                        signature: signature
                    };
                    workerDeploymentRequest = { loginRequest: loginRequest };
                    // Log the payload structure
                    console.log('Request Payload:', JSON.stringify(workerDeploymentRequest, null, 2));
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    config = new typescript_sdk_1.Configuration({ basePath: typescript_sdk_2.BASE_PATH });
                    apiClient = new typescript_sdk_1.DefaultApi(config);
                    return [4 /*yield*/, apiClient.createWorkerDeployment(workerDeploymentRequest)];
                case 3:
                    response = _a.sent();
                    console.log('Deployment Response:', response);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Unexpected Error:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.executeWorkerDeploymentRequest = executeWorkerDeploymentRequest;
executeWorkerDeploymentRequest();
