var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;

var counterTag = document.getElementById("counterTag");

function coinCounter (dollarAmt) {
  var quarters = Math.floor(dollarAmt/quarter);
  var quartRem = dollarAmt % quarter;
  var dimes = Math.floor(quartRem/dime);
  var dimeRem = (dollarAmt % quarter) % dime;
  var nickels = Math.floor(dimeRem/nickel);
  var nickelRem = ((dollarAmt % quarter) % dime) % nickel;
  var pennies = Math.floor(nickelRem/penny);
  return counterTag.innerHTML = "Number of quarters you'll need: " + quarters + "<br>" +
  "Number of dimes you'll need: " + dimes + "<br>" + 
  "Number of nickels you'll need: " + nickels + "<br>" +
  "Number of pennies you'll need: " + pennies;
}

coinCounter(116);