// An array of objects
let roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}
];

// Create a custom function to return players who made the team
function madeTeam(roster) {
  return roster.madeTeam == true;
}

// Call the custom function with filter()
let success = roster.filter(madeTeam);

// Display the results
console.log(success);

// Determine how many players made the cut
console.log(success.length + ' Players made the cut.');