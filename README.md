# Auth SDK - Local Setup and Usage

## Overview

This SDK helps you generate authentication tokens to test Crestal APIs in the API playground. Below are the steps to set up and run the SDK locally.

## Prerequisites

- Node.js (version 18 or higher recommended)
- Yarn or npm for package management

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/crestalnetwork/auth-sdk.git
   cd auth-sdk
   ```

2. Install dependencies using Yarn or npm:

   ```bash
   yarn install
   # or
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and set the following environment variables:

   ```env
   PRIVATE_KEY="your_private_key_here"
   USER_ADDRESS="your_user_address_here"
   CHAIN_ID=80084  # Replace with your desired chain ID, berachainTestnet: 80084, polygonAmoy: 80002
   ```

## Generate auth details

These can be generated using `login.ts`.
To run the `login.ts` script, use the following command:

```bash
npx ts-node utils/login.ts
```
