const cats = ["Milo","Otis","Garfield"] 
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name){
    var copyOfCats = cats.slice();
    copyOfCats.push(name)
    return copyOfCats
  }
function prependCat(name) {
    var copyOfCats = cats.slice();
    copyOfCats.unshift(name)
    return copyOfCats
}
function removeLastCat() {
    var copyOfCats = cats.slice(0,2);
    return copyOfCats
}
function removeFirstCat() {
    var copyOfCats = cats.slice(1)
    return copyOfCats
}