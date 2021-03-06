
       
/*Q-1*/
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

/*
function tellFortune(jobTitle, geographiclocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geographiclocation+ ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('software engineer', 'Jordan', 'Alice', 3);*/


/* q-2*/
/*

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
/*
function calculateDogAge(age) {
    var dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);
*/


/*q-3*/
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/


/*
function calculateSupply(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  console.log(message);
}

calculateSupply(28, 5);
calculateSupply(28, 2);
*/


/* q-4*/
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
/*

function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("adam");
greet("ahmad");
*/

/*Q---5*/
/*
what is the error:
function double(cat) {
  return 2 * x;
}
function double(7) {
  return 2 * 7;
}
function double('7') {
  return 2 * 'x';
}
*/

// x is not defined

//Identifier expected.



/*Q---6*/ 
/*
fix these functions:
func double1(x {
  return 2 * x ;
}
functiondouble2 x){
return 2 * x;
}
function (x) double3 {
  return 2 * x;
*//*
function double1(x){
  return 2 * x ;
}
function double2 (x){
return 2 * x;
}
function double3 (x) {
  return 2 * x;
}
*/




/* q-7*/
/*Write a function called cube that:
accept 1 parameter and calculate the cube of this number
*/
/*
function  cube(num){
let cubenum=num*num*num;
console.log(cubenum);
}
cube(4);
*/



/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
/*
function multiply(num1,num2){
let multiplynum=num1*num2;
console.log(multiplynum);
}
multiply(3,4);
multiply(5,4);
multiply(5,8);
*/

/*Q-9*/
/*

Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
/*
let age;
function canIGetADrivingLicense(age){

  if (age >= 20) {
    let massge="yes you can";
    console.log(massge);
} else {
  let x=20-age;
 let massge= "please come back after"+ x +" years to get one";
  console.log(massge);
}
}
canIGetADrivingLicense(17)
canIGetADrivingLicense(25)
canIGetADrivingLicense(18)
*/

/*Q-10*/
/*
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
/*
function sameLength(str1,str2){
if(str1.length == str2.length)
{
  console.log(true);
}
else {
  console.log(false);
}
}
sameLength("tree","clue")
sameLength("car","tree");*/


/*Q--11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
/*
function largerNubmer(num1,num2){
  if(num1 > num2)
{

  console.log(num1);
}
else {

  console.log(num2);
}

}
largerNubmer(5,6);
largerNubmer(10,1);*/


/*Q-12*/
/*
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5
*/
/*
function smallerNubmer(num1,num2,num3){
  if(num1< num2 && num1<num3)
{
  console.log(num1);
  
}
else if(num2< num1 && num2<num3){
  console.log(num2);
}
else{  console.log(num3);}
}
smallerNubmer(5,6,3);
smallerNubmer(10,1,8);
smallerNubmer(4,7,8);
smallerNubmer(8,6,7);
smallerNubmer(5,99,34);
*/



/*Q-13*/
/*

Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

/*
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
*/
/*
function shorterString(str1 , str2 , str3 , str4, str5){
  string = [str1 , str2 , str3 , str4 , str5];
    result = string[0].length;
    text = string[0];
    for(let i = 1 ; i < 5 ; i++){
        if(string[i].length < result ){
            result = string[i].length;
            text = string[i];
        }
    }

    return text;
}
shorterString("by","tr","car","air","github");
console.log(text);
*/


/*Q---14*/
/*
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
/*
function longerString(str1 , str2 , str3 , str4){
    string = [str1 , str2 , str3 , str4 ];
    result = string[0].length;
    text = string[0];
    for(let i = 1 ; i < 4 ; i++){
        if(string[i].length > result ){
            result = string[i].length;
            text = string[i];
        }
    }

    return text;
}
longerString("air","schoo","car","github");
console.log(text);
*/
/*Q-15*/
/*
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
/*
function isEven(num){
if(num%2 == 0)
{
  console.log(true);
}
else {
  console.log(false);
}
}
isEven(4);
isEven(1);
*/

/*Q-16*/
/*
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
/*
function  isOdd(num){
if(num%2 != 0)
{
  console.log(true);
}
else {
  console.log(false);
}
}
isOdd(4);
isOdd(5);
isOdd(9);
isOdd(8);
*/


/*Q-17*/
/*
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
/*
function  positive(num){
if(num> 0)
{
  console.log(true);
}
else {
  console.log(false);
}
}
positive(-2);
positive(5);
positive(100);
positive(-5);
*/


/*Q-18*/
/*

Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
/*
function fullName(str1,str2){
  let massge= str1+" "+str2;
  console.log(massge);
}
fullName("\"Adam","McCallen\"")
fullName("\"Alex", "Mercer\"")
*/
/*Q-19*/
/*
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8
*/
/*
function averagef(num1,num2,num3,num4,num5){
sum=num1+num2+num3+num4+num5;
average=sum/5;
console.log(average)
}
averagef(1,2,3,4,5);
averagef(5,7,9,3,5);

*/

/*Q-20*/
/* Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
/*
function randomNumber() {

  return Math.random();
}
console.log(randomNumber())
console.log(randomNumber())
console.log(randomNumber())
*/

/*Q-21*/
/*
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412
Ex: randomBetweenNumbers(3,100)
=> 23
*/
/*
function randomBetweenNumbers(min, max) {
  rand=Math.random() * (max - min) + min
  return rand;
}
randomBetweenNumbers(10,100);
console.log(rand)
*/


/*Q-22*/
/*
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
/*
function scoreInUniversty(graid){

  
           switch(true)
     {
case (graid>= 90 && graid<=100 ):
console .log("a");
break;

case (graid>= 80 && graid<=89 ):
console .log("b");
break;

case (graid>= 70 && graid<=79 ):
console .log("c");
break;

case (graid>= 60 && graid<=69 ):
console .log("d");
break;
case (graid>= 50 && graid<=59 ):
console .log("e");
break;

case ( graid<=50 ):
console .log("f");
break;

       }

}
scoreInUniversty(90);
scoreInUniversty(88);
scoreInUniversty(78);
scoreInUniversty(68);
*/


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*//*
var i=0;
function counter (){
  
 
  
  console.log(++i);
  
}
counter();
counter();
counter();
*/
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*//*
var i=0;
function counter (){
  
 
  
  console.log(++i);
  
}
counter();
counter();
counter();

function resetCounter(){
  console.log(`${i} and the counter reset now`)
   i=0;
}
resetCounter();
counter();
*/


