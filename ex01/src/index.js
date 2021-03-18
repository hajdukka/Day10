var myPet = {
  species: "Malinoa",
  name: "Bethoven",
  legs: 4,
  friends: ["Barista", "Da Vicni"],
};
function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
