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
exports.generateProposalSIWE = void 0;
var siwe_1 = require("siwe");
var typescript_sdk_1 = require("../typescript-sdk");
var apiClient_1 = require("./apiClient");
/**
 * Generates a signed SIWE message for proposals.
 *
 * @param postSolverProposal - The proposal data to serialize and sign.
 * @param solverAddress - The address of the solver submitting the proposal.
 * @param chainId - The chain ID for the proposal transaction.
 * @returns The prepared SIWE message string.
 */
function generateProposalSIWE(postSolverProposal, solverAddress, chainId) {
    return __awaiter(this, void 0, Promise, function () {
        var api, nonce, domain, issuedAt, expirationTime, siweMessage, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = apiClient_1.createApiClient();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api.getNonce({ userAddress: solverAddress })];
                case 2:
                    nonce = (_a.sent()).nonce;
                    domain = new URL(typescript_sdk_1.BASE_PATH).hostname;
                    issuedAt = new Date().toISOString();
                    expirationTime = new Date(Date.now() + 10 * 60 * 1000).toISOString();
                    siweMessage = new siwe_1.SiweMessage({
                        domain: domain,
                        address: solverAddress,
                        uri: typescript_sdk_1.BASE_PATH,
                        version: '1',
                        chainId: chainId,
                        nonce: nonce,
                        issuedAt: issuedAt,
                        expirationTime: expirationTime,
                        statement: JSON.stringify(postSolverProposal)
                    });
                    return [2 /*return*/, siweMessage.prepareMessage()];
                case 3:
                    error_1 = _a.sent();
                    console.error('Failed to generate SIWE message:', error_1);
                    return [2 /*return*/, undefined];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.generateProposalSIWE = generateProposalSIWE;
