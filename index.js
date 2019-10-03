// Add your doToElementsInArray() function here:
function doToElementsInArray(array,callback){
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(elements, index, array){
  array[index] = Math.floor(Math.random() * 100 +2).toString() + `${array[index]}!!!`;
}
var animals = ["dog", "cat", "squirrel"];
doToElementsInArray(animals, changeCompletely);
console.log(animals);
