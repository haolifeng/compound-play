// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract THaoCoin is ERC20 {
    constructor() ERC20("test-hao","THAO"){
        _mint(msg.sender, 2100000000000000000000000000);
    }
}