

var makeCandidate = function(firstNameLastName, partyColor)
{
    var candidate = {};
    candidate.name = firstNameLastName;
    candidate.electionResults = null;
    candidate.totalVotes = 0;
    candidate.partyColor = partyColor;

  candidate.addUpTotalVotes = function() 
{
  this.totalVotes = 0;
  
  for (var i=0; i < candidate.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
      console.log (this.totalVotes);
    } 
};
  
  return candidate;
  
};
  
var jane = makeCandidate("Jane Doesitall", [245,141,136]);
var betsy = makeCandidate("Betsy Rocks", [132,17,11]);

console.log(jane)
console.log(betsy)

jane.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

betsy.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

jane.electionResults[9] = 1;
betsy.electionResults[9] = 28;

jane.electionResults[4] = 17;
betsy.electionResults[4] = 38;

jane.electionResults[43] = 11;
betsy.electionResults[43] = 27;

var setStateResults = function(state) {
  
  theStates[state].winner = null;
  
  if (jane.electionResults[state] > betsy.electionResults[state]) {
    
    theStates[state].winner = jane;
  }
   
  else if (betsy.electionResults[state] > jane.electionResults[state]) {
    
    theStates[state].winner = betsy;     
  }
  
  var stateWinner = theStates[state].winner;
  
  if (stateWinner != null) {
    
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  
  else theStates[state].rgbColor = [11,32,57];
}
  


jane.addUpTotalVotes();

betsy.addUpTotalVotes();

var winner = "???";

if (jane.totalVotes > betsy.totalVotes) {
  winner = jane.name;
}
else if (jane.totalVotes < betsy.totalVotes) {
  winner = betsy.name;
}
else { 
  winner = "DRAW";
}

console.log("And the winner is " + winner + "!");
  

var countryInfoTable = document.getElementById("countryResults");
 
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = jane.name;
row.children[1].innerText = jane.totalVotes;
row.children[2].innerText = betsy.name;
row.children[3].innerText = betsy.totalVotes;
row.children[5].innerText = winner;

var stateResultsTable = document.getElementById("stateResults");

var theader = stateResultsTable.children[0];
var tbody = stateResultsTable.children[1];

var stateName = theader.children[0].children[0];
var stateAbbrev = theader.children[0].children[1];
var firstCandidateName = tbody.children[0].children[0];
var firstCandidateResults = tbody.children[0].children[1];
var secondCandidateName = tbody.children[1].children[0];
var secondCandidateResults = tbody.children[1].children[1];
var winnerName = tbody.children[2].children[1];


stateName.innerText = theStates[state].nameFull;
stateAbbrev.innerText = theStates[state].nameAbbrev;
firstCandidateName.innerText = jane.name;
firstCandidateResults.innerText = jane.electionResults[state];
secondCandidateName.innerText = betsy.name;
secondCandidateResults.innerText = betsy.electionResults[state];
winnerName.innerText = winner;  

if (theStates[state].winner === null) {
  winnerName.innerText = "DRAW";
}
else {
  winnerName.innerText = theStates[state].winner.name;
}
  


