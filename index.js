console.log('Hello World');
// 1st program
//declare name
var firstname = "pakeeza";
console.log(firstname);
firstname = "Zeeshan";
console.log(firstname);


let guessNumber = 19;
let userNumber = prompt("Guess anumber");
console.log(typeof userNumber, userNumber);

let temprature = 17;

if (temprature < 0){
    console.log("Extremely cold out side");

}else if(temprature < 16){
    console.log("It is cold outside");
}
else if(temprature < 25){
    console.log("wheather is okay ");
}
else if(temprature < 40)
{
    console.log("Turn on the AC");
}
else
{
    console.log("too hot");
}

let day = 2;
switch(day)
{
    case 0:
        console.log("Sunday");
        break;
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuseday");
        break;
    default:
        console.log("invalid day");
}

let i=0;
do{
    console.log("First");
    console.log(i);
    i++
}while(i<=10)

