"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApiClient = void 0;

var _typescriptSdk = require("../typescript-sdk");

/**
 * Creates and returns an API client with the given base path.
 * @param basePath - The base path for the API.
 * @returns Configured API client instance.
 */
var createApiClient = function createApiClient() {
  var basePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _typescriptSdk.BASE_PATH;
  var config = new _typescriptSdk.Configuration({
    basePath: basePath
  });
  return new _typescriptSdk.DefaultApi(config);
};

exports.createApiClient = createApiClient;