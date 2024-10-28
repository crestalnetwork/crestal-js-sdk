import { login } from "./login";


const privateKey = "0x702b31e07df61a323ae6f55db2253164a4b050158496aa9191df818f380dbb3d";
const userAddress = "0xBB900BbE1A20dA4d474666B79a5fa6CE12629733";
const chainId = 80084;

if (privateKey && userAddress) {
  login(privateKey, userAddress);
} else {
  console.error("Missing required environment variables.");
}