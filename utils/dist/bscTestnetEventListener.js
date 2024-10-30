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
exports.bsclistenToEvents = exports.decodeBase64RecParam = void 0;
var ethers_1 = require("ethers");
var blueprintAddress = '0x5D8d432C96DcEE25c9B3B72634B20f11AA5516d7';
var blueprintAbi = [
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "bytes32", "name": "projectID", "type": "bytes32" },
            { "indexed": false, "internalType": "address", "name": "walletAddress", "type": "address" },
            { "indexed": true, "internalType": "bytes32", "name": "requestID", "type": "bytes32" },
            { "indexed": false, "internalType": "string", "name": "base64RecParam", "type": "string" },
            { "indexed": false, "internalType": "string", "name": "serverURL", "type": "string" }
        ],
        "name": "RequestProposal",
        "type": "event"
    }
];
var provider = new ethers_1.ethers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');
var contract = new ethers_1.ethers.Contract(blueprintAddress, blueprintAbi, provider);
function decodeBase64RecParam(base64RecParam) {
    try {
        var decoded = Buffer.from(base64RecParam, 'base64').toString('utf-8');
        return JSON.parse(decoded);
    }
    catch (err) {
        console.error('Error parsing base64RecParam:', err);
        return null;
    }
}
exports.decodeBase64RecParam = decodeBase64RecParam;
function bsclistenToEvents() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Listening for RequestProposal events...');
            contract.on('RequestProposal', function (projectID, walletAddress, requestID, base64RecParam, serverURL, event // The raw event data
            ) {
                console.log('RequestProposal Event Detected');
                // Decode base64RecParam into a human-readable object
                var chainRequestParam = decodeBase64RecParam(base64RecParam);
                // Log the decoded data and the event information
                console.log({
                    projectID: ethers_1.ethers.hexlify(projectID),
                    walletAddress: walletAddress,
                    requestID: ethers_1.ethers.hexlify(requestID),
                    chainRequestParam: chainRequestParam,
                    serverURL: serverURL,
                    raw: event
                });
            });
            return [2 /*return*/];
        });
    });
}
exports.bsclistenToEvents = bsclistenToEvents;
