
        /*Q-1*/
        /*
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
/*
        
        let sub=0;
      function  subtract(num){
        while(num > 0)
        {
            x=-1*num;
             sub= x+sub;
               num--;   
               console.log(num);
            }
        console.log(sub);
        }

        subtract(5) ;
        */


        /*Q----2*/
        
        /*Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*//*
let fact=1;

      function  factorial(num){
        while(num > 0)
        {
          
            fact= num*fact;
               num--;   
               console.log(num);
            }
        console.log(fact);
        }

        factorial(4) ;
        factorial(5) ;
*/

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*//*
function repeatStr(myString,myNum){
    let x=myString;
    myNum--;
    while(myNum!=0){
        myString+=" "+x;
        myNum--;
    }
    console.log(myString);
}
 repeatStr("to",8);

*/


/*q-4*/
/*
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
/*
function sum2(x,y){
    let sum=0;
    while(x!=y){
        sum+=(x++);
    }
    sum+=y;
    return sum;
}
 console.log(sum2(3,6));

*/



/*Q-----5*/
/*
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*//*
function repeatStr2(x="",y=""){
    let counter=y.length-1;
    let myString=x;
    while(counter!=0){
        myString+=" "+x;
        counter--;
    }
    return(myString);
}
//console.log(repeatStr2("ro","fff"));
//console.log(repeatStr2("ro","cc")); 
*/

/*Q---6*/
/*
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*//*
function multiOf(num1,num2,num3){
    return(num1*(Math.pow(num2,num3)));
}
 console.log(multiOf(4,10,3));
*/
/*Q---7*/
/*
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*//*
function muti2(num1,num2){
    let result=1;
    while(num1!=num2){
        result*=num1;
        num1++;
    }
    return result*num2;
}
console.log(muti2(3,6));
*/


/*Q---*//*8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*//*
function numberBetweenUs(x,y){
    let result="";
    if(y-x==2){
        result=y-x;
        return result;
    }
    while(y-x!=1){
        result+=(++x);
        if(y-x!==1){
            result+=", ";
        }
    }
    return result;
}
 console.log(numberBetweenUs(2,8));*/


/*Q----9*//*
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*//*
let result=[];
function countDown(x){
    result.push(x--);
    if(x==0){
        result.push("done");
        var newx=result.slice();
        result=[];
        console.log(newx.toString());
    }
    else{
        countDown(x);
    }
}
 countDown(7);*/

/*Q-10*//*
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*//*
function multiplication2(num1=0,num2=0){
    let counter=0,result=0;
    while(counter!=num2){
        result+=num1;
        counter++;
    }
    return result;
}
console.log(multiplication2(7,6));*/ 

/*Q---11*/ /* 
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*//*
function mod2(num1=0,num2=0){
    return num1%num2;
}
 console.log(mod2(2,8));
*/

/*Q----12*//*
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*//*
function repeatChar(num1="",num2=""){
    num1=num1.toLowerCase();
    num2=num2.toLowerCase();
    let counter=0,result=0;
    while(counter!=num1.length){
        if(num1[counter]==num2){
            result++;
        }
        counter++;
    }
    return result;
}
//console.log(repeatChar("schOol","O"));
console.log(repeatChar("School","s"));
*/

/*
1
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number
Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1
fib(n)=fin(n-1)+fib(n-2)
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/
/*
function fibon(num) {
    if (num === 0) {
        return 1;
    }
    if (num === 1) {
        return 1;
    }
    return fibon(num - 1) + fibon(num - 2);
}
console.log(fibon(7));*/


/*
2
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/
/*

function mirror(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}
console.log(mirror("school"));
*/

/*
3
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/
/*
function mirrorCaseAlso(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] === string[i].toLowerCase()) {
            result += string[i].toUpperCase();
        } else {
            result += string[i].toLowerCase();
        }
    }
    return result;
}
console.log(mirrorCaseAlso("sChOol"));*/

/*
4
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/
/*
function repeatChar2(string, char) {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            result++;
        }
    }
    return result;
}
console.log(repeatChar2("schOol","o"));
*/
/*
5
Create a function called HiSayHelloTo
that takes 1 parameter a number that represent
the nubmer of people come to an event,
and say hi to each person sepretadly
+ let him/her say hello to each one that comes before him/her
Ex: welcomeSayHello(3);
=>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
Ex: welcomeSayHello(7); =>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
hi 4 Now Pleas Say Hello To 1, 2 and 3
hi 5 Now Pleas Say Hello To 1, 2, 3 and 4
hi 6 Now Pleas Say Hello To 1, 2, 3, 4 and 5
hi 7 Now Pleas Say Hello To 1, 2, 3, 4, 5 and 6
*/
/*
function HiSayHelloTo(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += `hi ${i} Now Pleas Say Hello To ${i - 1}`;
        if (i < num) {
            result += '\n';
        }
    }
    return result;
}
//console.log(HiSayHelloTo(7));
*/


