pragma solidity ^0.5.0;

contract Elections {

    uint[10] public Nominees = [0,0,0,0,0,0,0,0,0,0]; // create the nomenees araay

    function Vote(uint id) public returns (uint){ // vote for a nomenee         
        require(id >= 0 && id <= 9);

        Nominees[id]++;

        return Nominees[id]; // returns the correct ammount of votes for this id
    }

    function getNominees_votes () public view returns(uint[10] memory){ // return the array of votes for the nomenees
        return Nominees;
    }




}