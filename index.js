
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    let destructivelyAppend = cats.push(name);
    return destructivelyAppend;
}

function destructivelyPrependCat(name){
    let destructivelyPrepend = cats.unshift(name);
    return destructivelyPrepend;
}

function destructivelyRemoveLastCat(){
    let destructivelyRemove = cats.pop();
    return destructivelyRemove;
}

function destructivelyRemoveFirstCat(){
    let destructivelyRemoveFirst = cats.shift();
    return destructivelyRemoveFirst;
}

function removeFirstCat(){
    let removeFirst = cats.slice(1);
    return removeFirst;
}
function removeLastCat(){
    let removeLast = cats.slice(0, cats.length -1);
    return removeLast;
}

function appendCat(name){
    let appendOriginal = [...cats];
    appendOriginal.push(name);
    return appendOriginal;
}

function prependCat(name) {
    let prependOriginal = [...cats];
    prependOriginal.unshift(name);
    return prependOriginal;
}