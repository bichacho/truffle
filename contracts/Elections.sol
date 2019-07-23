pragma solidity ^0.5.0;

contract Elections {

    mapping(address => bool) public voters;


    function vote () public {
        require(!voters[msg.sender]);
        voters[msg.sender] = true;
    }
        
}