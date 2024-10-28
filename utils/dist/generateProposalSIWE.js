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
exports.createSiweMessage = void 0;
var siwe_1 = require("siwe");
var typescript_sdk_1 = require("../typescript-sdk");
var signMessage_1 = require("./signMessage");
var ethers_1 = require("ethers");
var validateChain_1 = require("./validateChain");
var apiClient_1 = require("./apiClient");
/**
 * Encodes a DAProposal object to a Base64-encoded JSON string.
 *
 * @param daProposal - The DAProposal object.
 * @returns A Base64-encoded string of the DAProposal.
 */
function encodeDAProposal(daProposal) {
    var jsonString = JSON.stringify(daProposal);
    return Buffer.from(jsonString).toString('base64');
}
/**
 * Creates a SIWE message for a proposal.
 *
 * @param userAddress - Ethereum wallet address of the user.
 * @param chainId - Chain ID.
 * @param proposal - PostProposal object.
 * @returns The prepared SIWE message.
 */
exports.createSiweMessage = function (userAddress, chainId, proposal) { return __awaiter(void 0, void 0, Promise, function () {
    var proposalStatement, domain, api, dataMap, nonceResponse, nonce, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!ethers_1.isAddress(userAddress)) {
                    throw new Error("Invalid Ethereum address: " + userAddress);
                }
                if (!validateChain_1.isChainSupported(chainId)) {
                    throw new Error("Unsupported chain ID: " + chainId);
                }
                proposalStatement = JSON.stringify(proposal);
                domain = new URL(typescript_sdk_1.BASE_PATH).hostname;
                api = apiClient_1.createApiClient();
                dataMap = {
                    issuedAt: new Date().toISOString(),
                    expirationTime: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
                    requestId: proposal.request_id
                };
                return [4 /*yield*/, api.getNonce({ userAddress: userAddress })];
            case 1:
                nonceResponse = _a.sent();
                nonce = nonceResponse.nonce;
                message = new siwe_1.SiweMessage({
                    domain: domain,
                    address: userAddress,
                    statement: proposalStatement,
                    uri: typescript_sdk_1.BASE_PATH,
                    version: '1',
                    chainId: chainId,
                    nonce: nonce,
                    issuedAt: dataMap.issuedAt,
                    expirationTime: dataMap.expirationTime,
                    resources: [dataMap.requestId]
                });
                return [2 /*return*/, message.prepareMessage()];
        }
    });
}); };
/**
 * Test function to generate and sign a SIWE message for proposals.
 */
function testSiweGenerator() {
    return __awaiter(this, void 0, void 0, function () {
        var solverAddress, chainId, daProposals, encodedDAProposals, generatedProposal, siweMessage, privateKey, signature, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    solverAddress = '0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8';
                    chainId = 80084;
                    daProposals = [
                        {
                            id: 1,
                            project_id: "0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178",
                            chain_id: 80084,
                            init_cost: 120,
                            maintenance_cost: 100,
                            accept_currencies: "USDC",
                            fit: 0.9,
                            rank: 1,
                            worker_address: "0xBB900BbE1A20dA4d474666B79a5fa6CE12629733"
                        },
                        {
                            id: 1,
                            project_id: "0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178",
                            chain_id: 80084,
                            init_cost: 130,
                            maintenance_cost: 20,
                            accept_currencies: "USDC",
                            fit: 0.92,
                            rank: 2,
                            worker_address: "0xBB900BbE1A20dA4d474666B79a5fa6CE12629733"
                        }
                    ];
                    encodedDAProposals = daProposals.map(encodeDAProposal);
                    generatedProposal = {
                        project_id: "0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178",
                        request_id: "0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2",
                        target_performance: 0.95,
                        solver_address: solverAddress,
                        da_proposals: encodedDAProposals
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, exports.createSiweMessage(solverAddress, chainId, generatedProposal)];
                case 2:
                    siweMessage = _a.sent();
                    privateKey = '469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';
                    return [4 /*yield*/, signMessage_1.signMessageWithPrivateKey(siweMessage, privateKey)];
                case 3:
                    signature = _a.sent();
                    console.log('Generated SIWE Message:', siweMessage);
                    console.log('Generated Signature:', signature);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error in SIWE message generation or signing:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
testSiweGenerator();
