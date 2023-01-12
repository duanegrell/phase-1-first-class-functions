/*
function Monday() {
    exerciseRoutine(liftWeights);
}

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

exerciseRoutine(() => console.log("Stretch"))

*/


function getIt(){
    console.log("get that money");
}

function getIt2(){
    console.log("get that money, again");
}

function receivesAFunction(whatYouGonnaDo) {
    whatYouGonnaDo ();
}

receivesAFunction(getIt);

const returnsANamedFunction = () => getIt2;

returnsANamedFunction();

const returnsAnAnonymousFunction = () => {   
    return () => "$$"
}
