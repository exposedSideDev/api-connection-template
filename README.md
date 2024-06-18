# CEX API Connection Template

Template repository for CEX API connection task.

## Installation

1.  Run `yarn install` to install all packages.

2.  Run `nvm use` to use the correct node version.

## Set Up

This repository already includes configurations for `node`, `prettier`, `eslint`, `typescript`, and more. You must use these configurations for the task.

### Pre-requisites

1. If you are making REST API calls, use the latest version of `axios`.

2. Use general code best-practices for this task. Save API keys in a `.env` file and import them using `dotenv`. Use code formatting (i.e. `prettier`). Implement error handling & try-catch blocks. Follow other coding best-practices and security best-practices.

## Task instructions

1. Open the `src/classes/template.ts` file

2. Use this file, to create your new CEX API class. Based on this file, you should create a new file, appropiately named after the CEX you are writing the conneciton for, in which you will implement the API connection and specified functions.

3. Create a working implementation of the class inside of the `index.ts` file, which uses the class you have written to send tokens from the CEX to an on-chain address, and from an on-chain address back to the CEX.

4. Create a small markdown file where you walk us through any things we need to know to run your code and use the new API connection / class. Include any special findings or any things that we should take into account here. (I.e. is there any significant latency we have to expect when withdrawing assets from the CEX to an on-chain address, is there any extra authentication needed, ...)
