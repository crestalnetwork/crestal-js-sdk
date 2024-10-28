"use strict";
exports.__esModule = true;
exports.generatePostProposal = exports.generateDAProposal = void 0;
var uuid_1 = require("uuid");
var uuidv4 = uuid_1["default"].v4;
// Function to generate a DAProposal with all necessary parameters
function generateDAProposal(projectID, chainId, initCost, maintenanceCost, fit, rank, acceptCurrencies, workerAddress) {
    return {
        ID: 1,
        ProjectID: projectID,
        ChainId: chainId,
        InitCost: initCost,
        MaintenanceCost: maintenanceCost,
        AcceptCurrencies: acceptCurrencies,
        Fit: fit,
        Rank: rank,
        WorkerAddress: workerAddress
    };
}
exports.generateDAProposal = generateDAProposal;
// Updated function for generating a PostProposal that includes multiple DA proposals
function generatePostProposal(projectID, requestID, targetPerformance, solverAddress, daProposals) {
    return {
        ProjectID: projectID,
        RequestID: requestID,
        TargetPerformance: targetPerformance,
        SolverAddress: solverAddress,
        DAProposals: daProposals
    };
}
exports.generatePostProposal = generatePostProposal;
// Example usage with multiple DA proposals
var projectID = '0xfd4016ce66edd3ca2914a598163627d8c77658492c7e6242fa5ac445f9059178'; // Example project ID
var requestID = "0xaf4c617c909508cab271e2f8cf14dd407144bc4c78dd5aa458391ff6b29e62b2"; // Example request ID
var targetPerformance = 0.95; // Example target performance
var solverAddress = '0x1e22A1C3AB5DfbA41d61d546f39b08A43410caC8'; // Example solver address
var workerAddress = '0xBB900BbE1A20dA4d474666B79a5fa6CE12629733';
// Example of multiple DA proposals
var daProposals = [
    generateDAProposal(project_id, 80084, // Polygon Mumbai testnet chain ID
    120, // Init cost
    100, // Maintenance cost
    0.9, // Fit score
    1, // Rank
    'USDC', // Accepted currency
    workerAddress),
    generateDAProposal(projectID, 80084, 130, 20, 0.92, 2, 'USDC', workerAddress)
];
// Generate the PostProposal with multiple DAProposals
var generatedProposal = generatePostProposal(projectID, requestID, targetPerformance, solverAddress, daProposals);
console.log('Generated Proposal with Multiple DAProposals:', generatedProposal);
