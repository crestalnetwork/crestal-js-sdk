"use strict";
exports.__esModule = true;
exports.createSiweMessage = void 0;
var siwe_1 = require("siwe");
var getDomain_1 = require("./getDomain");
var typescript_sdk_1 = require("../typescript-sdk");
var validateNonce_1 = require("./validateNonce");
var validateChain_1 = require("./validateChain");
var ethers_1 = require("ethers");
/**
 * Utility function to generate a SIWE message with added nonce validation.
 *
 * @param userAddress - The user's wallet address in hexadecimal format.
 * @param nonce - A unique nonce for the SIWE message.
 * @param chainId - The blockchain network chain ID.
 * @returns The prepared SIWE message string.
 */
exports.createSiweMessage = function (userAddress, nonce, chainId) {
    // Validate the nonce before using it
    if (!validateNonce_1.validateNonce(nonce)) {
        throw new Error("Invalid nonce: " + nonce);
    }
    if (!ethers_1.isAddress(userAddress)) {
        throw new Error("Invalid Ethereum address: " + userAddress);
    }
    if (!validateChain_1.isChainSupported(chainId)) {
        throw new Error("Unsupported or invalid chain ID: " + chainId + ".");
    }
    var domain = getDomain_1.getDomainFromBasePath(typescript_sdk_1.BASE_PATH);
    var message = new siwe_1.SiweMessage({
        domain: domain,
        nonce: nonce,
        address: userAddress,
        uri: typescript_sdk_1.BASE_PATH,
        version: '1',
        chainId: chainId,
        issuedAt: new Date().toISOString()
    });
    return message.prepareMessage();
};
