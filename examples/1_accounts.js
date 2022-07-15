const {ethers} = require('ethers');

const RPC = ''; // Your RPC url here
const account1 = ''; // Your public address here
const privateKey = ''; // put your private key here

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const wallet = new ethers.Wallet(privateKey, provider);


async function call() {
    const bal = await provider.getBalance(account1);
    console.log(account1, ":" ,ethers.utils.formatEther(bal));
    console.log(await wallet.getAddress(), ":" ,ethers.utils.formatEther(await wallet.getBalance()));
    
    const trans = await wallet.sendTransaction({
        to: account1,
        value: ethers.utils.parseEther('0.25')
    })
    
    await trans.wait();
    
    const bal2 = await provider.getBalance(account1);
    console.log(account1, ":" ,ethers.utils.formatEther(bal2));
    console.log(await wallet.getAddress(), ":" ,ethers.utils.formatEther(await wallet.getBalance()));
    
    console.log(trans)

}

call();

