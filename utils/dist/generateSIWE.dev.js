"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSiweMessage = void 0;

var _siwe = require("siwe");

var _getDomain = require("./getDomain");

var _typescriptSdk = require("../typescript-sdk");

var _validateNonce = require("./validateNonce");

var _validateChain = require("./validateChain");

var _ethers = require("ethers");

/**
 * Utility function to generate a SIWE message with added nonce validation.
 *
 * @param userAddress - The user's wallet address in hexadecimal format.
 * @param nonce - A unique nonce for the SIWE message.
 * @param chainId - The blockchain network chain ID.
 * @returns The prepared SIWE message string.
 */
var createSiweMessage = function createSiweMessage(userAddress, nonce, chainId) {
  // Validate the nonce before using it
  if (!(0, _validateNonce.validateNonce)(nonce)) {
    throw new Error("Invalid nonce: ".concat(nonce));
  }

  if (!(0, _ethers.isAddress)(userAddress)) {
    throw new Error("Invalid Ethereum address: ".concat(userAddress));
  }

  if (!(0, _validateChain.isChainSupported)(chainId)) {
    throw new Error("Unsupported or invalid chain ID: ".concat(chainId, "."));
  }

  var domain = (0, _getDomain.getDomainFromBasePath)(_typescriptSdk.BASE_PATH);
  var message = new _siwe.SiweMessage({
    domain: domain,
    nonce: nonce,
    address: userAddress,
    uri: _typescriptSdk.BASE_PATH,
    version: '1',
    chainId: chainId,
    issuedAt: new Date().toISOString()
  });
  return message.prepareMessage();
};

exports.createSiweMessage = createSiweMessage;