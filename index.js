// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const copyOfCat = [...cats, name]
        return copyOfCat
}
function prependCat(name){
    const copyOfCat = [name,...cats];
        return copyOfCat;
}
function removeLastCat(){
    const copyOfCat = cats.slice(0, 2);
        return copyOfCat;
}
function removeFirstCat(){
    const copyOfCat = cats.slice(1);
        return copyOfCat;
}