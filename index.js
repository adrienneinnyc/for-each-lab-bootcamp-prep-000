function iterativeLog(array) {
  array.forEach((element, index, array) => {console.log(`${index}: ${element}`) })
}

function iterate(callback) {
  var veggies = ["carrot", "broccoli", "kale"];
  veggies.forEach(callback);
  return veggies; 
}

function doToArray(array, callback) {
  array.forEach(callback);
}