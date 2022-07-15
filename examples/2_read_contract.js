const {ethers} = require('ethers');
const transfer = require('../transfer.json');

const RPC = ''; // your rpc url here

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const contractAddress = '0xC0D3F34009912e73FB63eB26B679b801818396AC';
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )

    console.log(`The address of owner: ${await contract.owner()}`);
}

call();