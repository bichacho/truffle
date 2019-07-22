pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Elections.sol";

contract TestVote {

 // The address of the Elections contract to be tested
 Elections elections = Elections(DeployedAddresses.Elections());

 // The id of the nominee that will be used for testing
 uint expectedNomineeId = 0;

function testUserCanVote() public {
  uint returnedNumOfVotesFotId = elections.Vote(expectedNomineeId);

  Assert.equal(returnedNumOfVotesFotId, 1, "returnedNumOfVotesFotId of the expected nominee should match what is returned.");
}

function testUserCanVote2() public {
  uint returnedNumOfVotesFotId = elections.Vote(1);
  returnedNumOfVotesFotId = elections.Vote(1);
  returnedNumOfVotesFotId = elections.Vote(1);

  Assert.equal(returnedNumOfVotesFotId, 3, "returnedNumOfVotesFotId of the expected nominee should match what is returned.");
}
function testUserCanVote3() public {
  uint returnedNumOfVotesFotId = elections.Vote(1);
  returnedNumOfVotesFotId = elections.Vote(1);
  returnedNumOfVotesFotId = elections.Vote(1);

  Assert.notEqual(returnedNumOfVotesFotId, 2, "returnedNumOfVotesFotId of the expected nominee should be 3 not 2.");
}

}