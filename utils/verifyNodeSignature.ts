import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import { signMessageWithPrivateKey } from './signMessage';

/**
 * Verifies if a signature matches the provided SIWE message and expected address.
 *
 * @param messageStr - The SIWE message string.
 * @param signature - The hex-encoded signature string.
 * @param expectedAddress - The expected Ethereum address to verify.
 * @returns An error if verification fails, or `null` if successful.
 */
async function verifySignature(
  messageStr: string,
  signature: string,
  expectedAddress: string
): Promise<Error | null> {
  try {
    // Attempt to parse the SIWE message
    let message: SiweMessage;
    try {
      message = new SiweMessage(messageStr);
      console.log("Successfully parsed SIWE message");
    } catch (parseError) {
      console.error("Failed to parse SIWE message:", parseError);
      return parseError instanceof Error ? parseError : new Error("Unknown parsing error");
    }

    // Prepare the message for verification
    let preparedMessage: string;
    try {
      preparedMessage = message.prepareMessage();
      console.log("Prepared Message for Verification:", preparedMessage);
    } catch (prepError) {
      console.error("Failed to prepare message for verification:", prepError);
      return prepError instanceof Error ? prepError : new Error("Unknown preparation error");
    }

    console.log("Original Message:", messageStr);
    console.log("Signature:", signature);

    // Attempt to verify the message and recover the address
    let recoveredAddress: string;
    try {
      recoveredAddress = ethers.verifyMessage(preparedMessage, signature);
      console.log("Recovered Address:", recoveredAddress);
    } catch (verifyError) {
      console.error("Verification failed:", verifyError);
      return verifyError instanceof Error ? verifyError : new Error("Unknown verification error");
    }

    // Compare the recovered address with the expected address
    if (recoveredAddress.toLowerCase() !== expectedAddress.toLowerCase()) {
      console.error("Address mismatch: Expected", expectedAddress, "but got", recoveredAddress);
      return new Error("Address does not match expected address");
    }

    console.log("Verification successful");
    return null; // Verification successful
  } catch (err) {
    console.error("Unexpected error during verification:", err);
    return err instanceof Error ? err : new Error("Unknown error");
  }
}

// Usage Example
(async () => {
  const messageStr = `api.service.testnet.crestal.xyz wants you to sign in with your Ethereum account:
0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8

{"project_id":"0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178","request_id":"0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2","target_performance":0.95,"solver_address":"0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8","da_proposals":["eyJpZCI6MSwicHJvamVjdF9pZCI6IjB4ZmQ0MDE2Y2U2NmVkZDNjYTI5MTRhNTk4MTYzNjI3ZDhjNzc2NTg0OTJjN2U2MjQyZmE1YWM0NDVmOTA1OTE3OCIsImNoYWluX2lkIjo4MDA4NCwiaW5pdF9jb3N0IjoxMjAsIm1haW50ZW5hbmNlX2Nvc3QiOjEwMCwiYWNjZXB0X2N1cnJlbmNpZXMiOiJVU0RDIiwiZml0IjowLjksInJhbmsiOjEsIndvcmtlcl9hZGRyZXNzIjoiMHhCQjkwMEJiRTFBMjBkQTRkNDc0NjY2Qjc5YTVmYTZDRTEyNjI5NzMzIn0=","eyJpZCI6MSwicHJvamVjdF9pZCI6IjB4ZmQ0MDE2Y2U2NmVkZDNjYTI5MTRhNTk4MTYzNjI3ZDhjNzc2NTg0OTJjN2U2MjQyZmE1YWM0NDVmOTA1OTE3OCIsImNoYWluX2lkIjo4MDA4NCwiaW5pdF9jb3N0IjoxMzAsIm1haW50ZW5hbmNlX2Nvc3QiOjIwLCJhY2NlcHRfY3VycmVuY2llcyI6IlVTREMiLCJmaXQiOjAuOTIsInJhbmsiOjIsIndvcmtlcl9hZGRyZXNzIjoiMHhCQjkwMEJiRTFBMjBkQTRkNDc0NjY2Qjc5YTVmYTZDRTEyNjI5NzMzIn0="]}

URI: https://api.service.testnet.crestal.xyz/v1
Version: 1
Chain ID: 80084
Nonce: 100000013
Issued At: 2024-10-28T14:38:40.393Z
Expiration Time: 2024-10-28T14:48:40.393Z
Resources:
- 0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2`;

    const privateKey = '469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';
  const expectedAddress = "0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8";
  const signature = `0x4002b794b220d01bf275bfb0ffee6e2fe4c625e9ebbc96d4670016cf814474272d96e1eab8620cf2a073304cb87e03d109d6904d6a37f4de5f5e3270da9763301c`;

  const verificationResult = await verifySignature(messageStr, signature, expectedAddress);
  if (verificationResult) {
    console.error("Verification failed:", verificationResult.message);
  } else {
    console.log("Verification successful");
  }
})();
