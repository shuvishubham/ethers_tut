const {ethers} = require('ethers');
const transfer = require('../transfer.json');

const RPC = ''; // put your rpc url here

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const contractAddress = '0x5ffed6daf4f1b4bb3402df8c3c11874db1744087';
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )

    const block = await provider.getBlockNumber();
    

    const trans = contract.filters.transactions(null, '1000000000000000000');
    const transactions = await contract.queryFilter(trans)

    transactions.map((item) => {
        console.log(item.args.to, ":", ethers.utils.formatEther(item.args.amount))
    })

    
}

call();