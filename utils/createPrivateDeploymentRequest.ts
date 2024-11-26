import { createContractFunctions, RPC_PROVIDERS } from './contractFunctions';

async function callCreatePrivateDeploymentRequest(
  privateKey: string,
  network: keyof typeof RPC_PROVIDERS, 
  projectId: string,
  solverAddress: string,
  privateWorkerAddress: string,
  base64Proposal: string,
  serverURL: string = 'https://api.service.testnet.crestal.xyz/v1'
) {
  try {
    const contractFunctions = await createContractFunctions(privateKey, network);

    const receipt = await contractFunctions.createPrivateDeploymentRequest(
      projectId,
      solverAddress,
      privateWorkerAddress,
      base64Proposal,
      serverURL
    );

    console.log('Transaction confirmed:', receipt);
  } catch (error) {
    console.error('Error in createPrivateDeploymentRequest:', error);
  }
}

// Example usage of the callCreatePrivateDeploymentRequest function
(async () => {
  const privateKey = '469f21a9bf88257a595177404d4765a142e4304a8bffa89d93a8fbf15ca1d3a0';
  const network = 'berachain'; // Options: 'berachain', 'binance', 'polygon'
  const projectId = '0x1ed8f444b8860a866ae1700cb785e2fd6d0d9e3efb02dc1d7ae9f6c044b693fe';
  const solverAddress = '0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8';
  const privateWorkerAddress = '0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8';
  const base64Proposal = `eyJwcm9qZWN0X2lkIjogIjB4MWVkOGY0NDRiODg2MGE4NjZhZTE3MDBjYjc4NWUyZmQ2ZDBkOWUzZWZiMDJkYzFkN2FlOWY2YzA0NGI2OTNmZSIsICJyZXF1ZXN0X2lkIjogIjB4OWNjNDE0OWZjNGZiNzU1MDJiNWYxYzI4ZDFhZjA0NzU0NzRkMTgyZDIwZDc2NTJiOTllODY0ZjRjNjBiZWExOSIsICJ0YXJnZXRfcGVyZm9ybWFuY2UiOiAxMCwgInNvbHZlcl9hZGRyZXNzIjogInNvbHZlckFkZHJlc3MiLCAicHJvcG9zYWxzIjogW3siZml0IjogMC45LCAicmFuayI6IDEsICJ3b3JrZXJfYWRkcmVzcyI6ICIweDFlMjJBMUMzQUI1RGZiQTQxZDYxZDU0NmYzOWIwOEE0MzQxMGNhQzgiLCAidHlwZSI6ICJwcml2YXRlIiwgImRhIjogeyJjaGFpbl9pZCI6ICJjaGFpbklkIiwgImRhX25hbWUiOiAiQXZhaWwiLCAibmV0d29ya190eXBlIjogIlRlc3RuZXQiLCAiZ2FzX3Rva2VuIjogIkVUSCIsICJhdmdfY29zdCI6IDMuMiwgIm1heF90aHJvdWdocHV0IjogMTAuNSwgImxhdGVuY3kiOiAwLjMsICJmaW5hbGl0eV90aW1lIjogMi4wLCAiZ2VvX2NvdmVyYWdlIjogOCwgImdyYW50c19hdmFpbGFibGUiOiBmYWxzZSwgIm51bWJlcl9vZl9wcm9qZWN0cyI6IDEsICJ1cHRpbWUiOiAxMCwgImJsb2NrX3RpbWUiOiAxMCwgInRvdGFsX3RyYW5zYWN0aW9ucyI6IDEwMDAwMDAwMDIsICJ0b3RhbF9ibG9ja3MiOiAxMDAwMDAwMDAzLCAibnVtYmVyX29mX25vZGVzIjogNTAwMCwgImNvc3RfcGVyX3RyYW5zYWN0aW9uIjogMC4zLCAiY29zdF9wZXJfbWIiOiAwLjIsICJlcnJvcl9yYXRlIjogMC4wMiwgImluaXRfY29zdCI6IDEwMCwgIm1haW50ZW5hbmNlX2Nvc3QiOiAyMH19XX0=
`;

  await callCreatePrivateDeploymentRequest(
    privateKey,
    network,
    projectId,
    solverAddress,
    privateWorkerAddress,
    base64Proposal
  );
})();

