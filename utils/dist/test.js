"use strict";
exports.__esModule = true;
var login_1 = require("./login");
var privateKey = "0x702b31e07df61a323ae6f55db2253164a4b050158496aa9191df818f380dbb3d";
var userAddress = "0xBB900BbE1A20dA4d474666B79a5fa6CE12629733";
var chainId = 80084;
if (privateKey && userAddress) {
    login_1.login(privateKey, userAddress);
}
else {
    console.error("Missing required environment variables.");
}
