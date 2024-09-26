const a = 24
const b = 24

if (a > b) {
    console.log(" a is geater then b ")
}
else if (b > a) {
    console.log(" b is geater then a ")
}
else {
    console.log('they both are same')
}



const n = 0

if (n === 0) {
    console.log('zero is zero')
} else if (n % 2 === 1) {
    console.log(' this is odd number ')
} else {
    console.log('this is even number')
}




/*
 if number is =  , 0 - sunday . 1 - monday , 2 - tuesday ,
 3 - wednesday , 4 - thusday , 5 - friday , 6 - saturday 
 */

const date = new Date()
const today = date.getDay()

if( today === 0){
    console.log(" Today is Sunday ")
}
else if( today === 1 ){
    console.log(" Today is Monday")
}
else if( today === 2 ){
    console.log(" Today is Tuesday")
}
else if( today === 3 ){
    console.log(" Today is Wednesday")
}
else if( today === 4 ){
    console.log(" Today is Thusday")
}
else if( today === 5 ){
    console.log(" Today is Friday")
}
else if( today === 6 ){
    console.log(" Today is Saturday")
} else{
    console.log(" This number is not valid")
}

