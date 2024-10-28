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
exports.login = void 0;
var validateChain_1 = require("./validateChain");
var apiClient_1 = require("./apiClient");
var generateSIWE_1 = require("./generateSIWE");
var signMessage_1 = require("./signMessage");
var error_1 = require("./error");
var ethers_1 = require("ethers");
/**
 * Login function to authenticate using SIWE.
 * @param {string} privateKey - User's private key to sign the SIWE message.
 * @param {string} userAddress - Ethereum address of the user.
 * @param {number} chainId - Blockchain network chain ID.
 */
exports.login = function (privateKey, userAddress, chainId) { return __awaiter(void 0, void 0, Promise, function () {
    var api, nonceResponse, nonce, siweMsg, signature, loginPayload, loginOperationRequest, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Validate Ethereum address
                if (!ethers_1.isAddress(userAddress)) {
                    console.error("Invalid Ethereum address: " + userAddress + ".");
                    return [2 /*return*/];
                }
                // Validate chain ID
                if (isNaN(chainId)) {
                    console.error('Invalid CHAIN_ID.');
                    return [2 /*return*/];
                }
                // Check if chain is supported
                if (!validateChain_1.isChainSupported(chainId)) {
                    console.error("Unsupported chain ID: " + chainId + ". SIWE message generation is not allowed.");
                    return [2 /*return*/];
                }
                api = apiClient_1.createApiClient();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, api.getNonce({ userAddress: userAddress })];
            case 2:
                nonceResponse = _a.sent();
                nonce = nonceResponse.nonce;
                siweMsg = generateSIWE_1.createSiweMessage(userAddress, nonce, chainId);
                console.log('SIWE Message:', siweMsg);
                return [4 /*yield*/, signMessage_1.signMessageWithPrivateKey(siweMsg, privateKey)];
            case 3:
                signature = _a.sent();
                console.log('Signature generated:', signature);
                loginPayload = {
                    userAddress: userAddress,
                    siweMsg: siweMsg,
                    signature: signature
                };
                loginOperationRequest = {
                    loginRequest: loginPayload
                };
                return [4 /*yield*/, api.login(loginOperationRequest)];
            case 4:
                response = _a.sent();
                console.log('Login successful:', response);
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                error_1.logErrorDetails(err_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
// Usage example
var privateKey = '469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';
var userAddress = '0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8';
exports.login(privateKey, userAddress, 80084);
