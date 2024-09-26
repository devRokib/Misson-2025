const a = 40
const b = 30
const c = 70
const d = 60


// && operator 
// a && b
// true && true = true
// true && false = false
// false && true = false
// false && false = false

if ( a > b && c > d){
    console.log('a is greater then b and c is greater then d')
} else {
    console.log("din't work . cause one or more condition is false")
}


// || operator
// true || true = true
// true || false = true
// false || true = true
// false || false = false

const u = 5
const v = 6
const x = 7
const y = 10

if ( u > v || x > y ){
    console.log('u is greater then v or x is greater then y')
} else{
    console.log("Please provide at least one truthy value")
}