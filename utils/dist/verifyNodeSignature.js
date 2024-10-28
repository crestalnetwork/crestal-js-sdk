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
var ethers_1 = require("ethers");
var siwe_1 = require("siwe");
/**
 * Verifies if a signature matches the provided SIWE message and expected address.
 *
 * @param messageStr - The SIWE message string.
 * @param signature - The hex-encoded signature string.
 * @param expectedAddress - The expected Ethereum address to verify.
 * @returns An error if verification fails, or `null` if successful.
 */
function verifySignature(messageStr, signature, expectedAddress) {
    return __awaiter(this, void 0, Promise, function () {
        var message, preparedMessage, recoveredAddress;
        return __generator(this, function (_a) {
            try {
                message = void 0;
                try {
                    message = new siwe_1.SiweMessage(messageStr);
                    console.log("Successfully parsed SIWE message");
                }
                catch (parseError) {
                    console.error("Failed to parse SIWE message:", parseError);
                    return [2 /*return*/, parseError instanceof Error ? parseError : new Error("Unknown parsing error")];
                }
                preparedMessage = void 0;
                try {
                    preparedMessage = message.prepareMessage();
                    console.log("Prepared Message for Verification:", preparedMessage);
                }
                catch (prepError) {
                    console.error("Failed to prepare message for verification:", prepError);
                    return [2 /*return*/, prepError instanceof Error ? prepError : new Error("Unknown preparation error")];
                }
                console.log("Original Message:", messageStr);
                console.log("Signature:", signature);
                recoveredAddress = void 0;
                try {
                    recoveredAddress = ethers_1.ethers.verifyMessage(preparedMessage, signature);
                    console.log("Recovered Address:", recoveredAddress);
                }
                catch (verifyError) {
                    console.error("Verification failed:", verifyError);
                    return [2 /*return*/, verifyError instanceof Error ? verifyError : new Error("Unknown verification error")];
                }
                // Compare the recovered address with the expected address
                if (recoveredAddress.toLowerCase() !== expectedAddress.toLowerCase()) {
                    console.error("Address mismatch: Expected", expectedAddress, "but got", recoveredAddress);
                    return [2 /*return*/, new Error("Address does not match expected address")];
                }
                console.log("Verification successful");
                return [2 /*return*/, null]; // Verification successful
            }
            catch (err) {
                console.error("Unexpected error during verification:", err);
                return [2 /*return*/, err instanceof Error ? err : new Error("Unknown error")];
            }
            return [2 /*return*/];
        });
    });
}
// Usage Example
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var messageStr, privateKey, expectedAddress, signature, verificationResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                messageStr = "api.service.testnet.crestal.xyz wants you to sign in with your Ethereum account:\n0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8\n\n{\"project_id\":\"0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178\",\"request_id\":\"0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2\",\"target_performance\":0.95,\"solver_address\":\"0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8\",\"da_proposals\":[\"eyJpZCI6MSwicHJvamVjdF9pZCI6IjB4ZmQ0MDE2Y2U2NmVkZDNjYTI5MTRhNTk4MTYzNjI3ZDhjNzc2NTg0OTJjN2U2MjQyZmE1YWM0NDVmOTA1OTE3OCIsImNoYWluX2lkIjo4MDA4NCwiaW5pdF9jb3N0IjoxMjAsIm1haW50ZW5hbmNlX2Nvc3QiOjEwMCwiYWNjZXB0X2N1cnJlbmNpZXMiOiJVU0RDIiwiZml0IjowLjksInJhbmsiOjEsIndvcmtlcl9hZGRyZXNzIjoiMHhCQjkwMEJiRTFBMjBkQTRkNDc0NjY2Qjc5YTVmYTZDRTEyNjI5NzMzIn0=\",\"eyJpZCI6MSwicHJvamVjdF9pZCI6IjB4ZmQ0MDE2Y2U2NmVkZDNjYTI5MTRhNTk4MTYzNjI3ZDhjNzc2NTg0OTJjN2U2MjQyZmE1YWM0NDVmOTA1OTE3OCIsImNoYWluX2lkIjo4MDA4NCwiaW5pdF9jb3N0IjoxMzAsIm1haW50ZW5hbmNlX2Nvc3QiOjIwLCJhY2NlcHRfY3VycmVuY2llcyI6IlVTREMiLCJmaXQiOjAuOTIsInJhbmsiOjIsIndvcmtlcl9hZGRyZXNzIjoiMHhCQjkwMEJiRTFBMjBkQTRkNDc0NjY2Qjc5YTVmYTZDRTEyNjI5NzMzIn0=\"]}\n\nURI: https://api.service.testnet.crestal.xyz/v1\nVersion: 1\nChain ID: 80084\nNonce: 100000013\nIssued At: 2024-10-28T14:38:40.393Z\nExpiration Time: 2024-10-28T14:48:40.393Z\nResources:\n- 0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2";
                privateKey = '469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';
                expectedAddress = "0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8";
                signature = "0x4002b794b220d01bf275bfb0ffee6e2fe4c625e9ebbc96d4670016cf814474272d96e1eab8620cf2a073304cb87e03d109d6904d6a37f4de5f5e3270da9763301c";
                return [4 /*yield*/, verifySignature(messageStr, signature, expectedAddress)];
            case 1:
                verificationResult = _a.sent();
                if (verificationResult) {
                    console.error("Verification failed:", verificationResult.message);
                }
                else {
                    console.log("Verification successful");
                }
                return [2 /*return*/];
        }
    });
}); })();
