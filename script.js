                                   // Map object
// Read about map in the readme file first
// create a new map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]); 

// fruits.clear() clear removes all element from your map, try it.

// fruits.set("apples", 800); set sets a new property for a key in your map, try it.

// console.log(fruits.get("apples")); get gets the property of a key in your map, try it.

// fruits.delete("apples") delete removes a particular value/key from your map, try it.

// console.log(fruits.has("apples")) has checks if a particular key exits in a map , try it.

//   Use forEach with Map's entries
// fruits.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// }); forEach loops over all key-value pairs in the map, but most people don't use forEach with map. This is just to show that it's possible, and it can be used

// const fruitEntries = fruits.entries();
// console.log(fruits); this puts, the entries of the fruits map in fruitEntries.

// for (let entry of fruitEntries) {
//   console.log(entry);
// } this iterates over each entries.

// const fruitKeys = fruits.keys(); this iterates over the fruits map and puts each keys in the fruitKeys
// console.log(fruitKeys);

// const fruitValues = fruits.values(); this iterates over the fruits map and puts each values in the fruitKeys
// console.log(fruitValues);


console.log(fruits.size); // this gives us the lenght of the map, Note that it is counted in key-value pair.
//console.log(fruits.length) this will return undefined, because map doesn't have a lenght property.

// document.getElementById("demo").innerHTML = fruits.get("apples");
// console.log(fruits.get("apples"));