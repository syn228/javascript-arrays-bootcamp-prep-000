var chocolateBars = [
  "snickers", 
  "hundred grand",
  "kitkat",
  "skittles"
  ];
function addElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  return [element,...array];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element) {
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(element);
  return array;
}
function removeElementFromBeginningOfArray(array, element){
  array = array.slice(1)
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1)
  return array;
=======
  var addElementToBeginningOfArray = [1];
  return ["foo",...addElementToBeginningOfArray];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var destructivelyAddElementToBeginningOfArray = [1];
  destructivelyAddElementToBeginningOfArray.unshift("foo");
  return destructivelyAddElementToBeginningOfArray;
}
function addElementToEndOfArray(array, element) {
  var addElementToEndOfArray = [1];
  return [...addElementToEndOfArray, "foo"];
}
function destructivelyAddElementToEndOfArray(array, element){
  var destructivelyAddElementToEndOfArray = [1];
  destructivelyAddElementToEndOfArray.push("foo");
  return destructivelyAddElementToEndOfArray;
>>>>>>> fcac128131fae49b6567c03cdc65c429bdc570be
}