const {ethers} = require('ethers');
const transfer = require('../transfer.json');

const RPC = ''; // Put your RPC url here
const account1 = ''; // put your public key here
const privateKey = ''; // put Your private key here

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const wallet = new ethers.Wallet(privateKey, provider);

const contractAddress = '0xC0D3F34009912e73FB63eB26B679b801818396AC';
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        wallet
    )

    console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`)

    console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`)

    const tx = await contract._transfer(account1, {
      value: ethers.utils.parseEther('0.5')
    })

    await tx.wait();

    console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`)

    console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`)

    console.log(tx);

}

call();