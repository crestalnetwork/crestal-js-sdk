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
exports.testSiweGenerator = exports.createSiweMessage = void 0;
var siwe_1 = require("siwe");
var uuid_1 = require("uuid"); // Correct way to import uuid in CommonJS format
var signMessage_1 = require("./signMessage");
var uuidv4 = uuid_1["default"].v4; // Extract v4 method for UUID generation
// Generate SIWE message using the proposal data in the statement field
exports.createSiweMessage = function (userAddress, nonce, chainId, proposal // The full PostProposal object
) {
    // Data map to store issuedAt, expiration, and requestId
    var dataMap = {
        issuedAt: new Date().toISOString(),
        expirationTime: new Date(Date.now() + 60 * 1000).toISOString(),
        requestId: uuidv4()
    };
    // Convert the full PostProposal to a JSON string for the statement
    var proposalStatement = JSON.stringify(proposal);
    // Create the SIWE message
    var message = new siwe_1.SiweMessage({
        domain: 'api.service.testnet.crestal.xyz',
        address: userAddress,
        statement: proposalStatement,
        uri: 'https://api.service.testnet.crestal.xyz/v1',
        version: '1',
        chainId: chainId,
        nonce: nonce,
        issuedAt: dataMap.issuedAt,
        expirationTime: dataMap.expirationTime,
        resources: [dataMap.requestId]
    });
    return message.prepareMessage();
};
// Test function to generate the SIWE message with a proposal
exports.testSiweGenerator = function () { return __awaiter(void 0, void 0, void 0, function () {
    var solverAddress, chainId, nonce, proposal, siweMessage, signature, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                solverAddress = '0x6Ee9894c677EFa1c56392e5E7533DE76004C8D94';
                chainId = 80001;
                nonce = '12345678';
                proposal = {
                    ProjectID: '0x25320d0ddcee859fb7911c9e7c0c0c23605eec1a439d82b3bc9ff65841140554',
                    RequestID: '0xRequestID',
                    TargetPerformance: 0.95,
                    SolverAddress: solverAddress,
                    Proposals: [
                        {
                            Fit: 0.9,
                            Rank: 1,
                            ProjectID: '0x25320d0ddcee859fb7911c9e7c0c0c23605eec1a439d82b3bc9ff65841140554',
                            WorkerAddress: '0xBB900BbE1A20dA4d474666B79a5fa6CE12629733',
                            Type: 'DA',
                            DA: {
                                ID: 1,
                                ProjectID: '0x25320d0ddcee859fb7911c9e7c0c0c23605eec1a439d82b3bc9ff65841140554',
                                ChainId: chainId,
                                InitCost: 100,
                                MaintenanceCost: 10,
                                Fit: 0.9,
                                Rank: 1,
                                AcceptCurrencies: 'ETH',
                                WorkerAddress: '0xBB900BbE1A20dA4d474666B79a5fa6CE12629733'
                            }
                        }
                    ]
                };
                siweMessage = exports.createSiweMessage(solverAddress, nonce, chainId, proposal);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, signMessage_1.signMessageWithPrivateKey(siweMessage, "469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0")];
            case 2:
                signature = _a.sent();
                console.log('Signature:', signature);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error signing the message:', error_1);
                return [3 /*break*/, 4];
            case 4:
                // Output the SIWE message
                console.log('Generated SIWE Message with Proposal:', siweMessage);
                return [2 /*return*/];
        }
    });
}); };
// Call the test function
exports.testSiweGenerator();
