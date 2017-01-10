var num1 = 3
var num2 = 4
console.log(num1 + num2)

var firstName = "Jack"
var lastName = "Linton"
alert("Full name " + firstName + " " + lastName + ".")

var interestList = ["napping", "computers", "horticulture", "taking walks", "pets"]
debugger
var myName = {first: "Jack", last: "Linton", dob: "10/24/1982", interests: interestList}
 console.log("Name:", myName.first, myName.last, "DOB:", myName.dob, "Interests are:", myName.interests[0],",", myName.interests[1], ",", myName.interests[2], ",", myName.interests[3], ",", myName.interests[4], ".")

for(x=0;x<10;x++){
  console.log(x)
  // Comment out the below line
  // to see what effect is has on output
  //x = z + 10;
  var y = x + 2;
  // Comment out this line to only see
  // the first log statement
  console.log(y)
  //return y
}