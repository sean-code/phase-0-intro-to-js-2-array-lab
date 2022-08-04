// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Destructively appending cat

function destructivelyAppendCat(name) {
    cats.push(name);
}

//Prepend
function destructivelyPrependCat(name){
    cats.unshift(name);
}
// Append Unchanged
function destructivelyRemoveLastCat() {
    cats.pop()
}
// Destructively remove firt cat
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    cats.push (name)
}
// Append through slice
function appendCat(name) {
   let newCats = cats.slice();
   newCats.push(name)
   return newCats
}
// Prepend and slice
function prependCat(name) {
    let newCats = cats.slice();
    newCats.unshift(name)
    return newCats
}
// Remove the last cat
function removeLastCat() {
    let newCats = cats.slice()
    newCats.pop()
    return newCats;
}
// Remove first cat
function removeFirstCat() {
    let newCats = cats.slice()
    newCats.shift()
    return newCats
}