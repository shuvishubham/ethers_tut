// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.7.0;

contract transfer {
    address public owner;
    
    event transactions(address indexed to, uint indexed amount);

    constructor() {
        owner = msg.sender;
    }

    function callOwner() public view returns(address) {
        return owner;
    }

    function _transfer(address payable _to) public payable {
        _to.transfer(msg.value);
        emit transactions(_to, msg.value);
    }
}