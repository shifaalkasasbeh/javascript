
 /*Q-1*/
/*
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
       
        /*  let a =[1,7,9,4,5]
        console.log(a);
        
        let charachter =["Str", "alex","moh","the","fox","over","lazy",'dog']
        
        console.log(charachter);
        */



     /*Q-2*/
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/


      /*
      Banana= 1,Tomato=0
        var fruits=["Tomato","Banana","Watermelon"]
        consol.log(fruits);
*/

  /*Q-3*/

  /*Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

       /* 
        let Food=["pizza","mansaf","corn","carrot","orange"]
        console.log(Food);
        let Sport=["basketball","running","tennis"]
        console.log(Sport);
        let Movie=["spiderman","shark","frozen","moana"]
        console.log(Movie);
*/

  /*Q-4*/
  /*
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
/*
 let firstOfArray=["shifa","mohammad","alkasasbeh"]
 console.log(firstOfArray[0]);*/



   /*Q-5*/
   /*

Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
/*
 let firstOfArray=["shifa","mohammad","alkasasbeh"]
 let name= firstOfArray[firstOfArray.length - 1];
 console.log(name);
*/


  /*Q-6*/
/*

Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

 /*
  const firstOfArray =[0,5,7,9]
console.log(firstOfArray);
firstOfArray.shift();
firstOfArray.shift();
firstOfArray.shift();
firstOfArray.shift();
firstOfArray.push(1,3,4,6,8,9,10);
*/


  /*Q-7*/
  /*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
/*
const firstOfArray =[0,5,7]
console.log(firstOfArray);
firstOfArray.pop(7);
firstOfArray.pop(5);
firstOfArray.pop(0);
firstOfArray.push(5,9,-7,3.5);

*/



 /*Q-8*/

 /*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

 /*
 function middle_elements(arr) {
  if (!arr.length)
    return;
    
    const mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr[Math.floor(mid)];
  } else {
    return [
      arr[mid - 1],
      arr[mid],
    ];
  }
}
console.log(middle_elements([1, 2,5, 3]));  
console.log(middle_elements([3, 3, 3]));  
console.log(middle_elements([4, 2, 7])); 
*/


 /*Q-9*/
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

 /*
 var animals = ['cat', 'ele', 'bird'];
 animals.push('zebra', 'elephant')
 animals.shift()
 animals.shift()
 animals.shift()
 console.log(animals)
*/

 /*Q-10*/
 /*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
 
 /*
 let arr=[5,8,9,6,5,6,8];
  function indexOfArray(arr){
   for (let i= 0; i < arr.length; i++)
      return arr.indexOf(arr);

return(arr);
 }
 
 document.write(indexOfArray(arr),arr.indexOf(i));
*/


 /*Q-11*/
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/


/*
 var nums= [1,2,3,8,9];
 function arrayExceptLast(nums) { 
          
          var value = nums.slice(0,4); 
          document.write(value);
  } 
  arrayExceptLast(nums);
*/



 /*Q-12*/
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
 /*

var nums= [1,2,3,8,9];
function arrayaddLast(nums) { 
  nums.push(55);
  console.log(nums);
document.write(nums);
}
arrayaddLast(nums);
*/


  /*Q-13*/

/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



  /* 
function sum(arr) { 
        let sum = 0; 
        for (let i = 0; i < arr.length; i++) 
            sum += arr[i]; 
   
        return sum; 
    } 
    let arr =  [1,2,3,8,9];
    document.write("Sum of given array is " + sum(arr));

      */

      
        /*Q-14*/ 
        
        /*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
        /*
        function MyMin(myarr){
    var al = myarr.length;
    minimum = myarr[al-1];
    while (al--){
        if(myarr[al] < minimum){
            minimum = myarr[al]
        }
    }
    return minimum;
};
var myArray = [1, 5, 6, 2, 3];
var m = MyMin(myArray);
console.log(m)
*/
  /*Q-15*/

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*//*
function oddArray(array){
	var oddArr=[];

	var count=0;		
		while (count<array.length)
		{
			if(array[count]%2!==0)
			{oddArr.push(array[count]);}
		count++;
		}

	return oddArr;

}

var nums= [1,2,3,8,9,6,2,8,4,3,6,4,5,6,8,9];
oddArray(nums);
console.log(nums)
*/

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*
function aveArray(array) {

	var sum=0;
	var len=array.length;

	counter=0;
	while(counter<len)
    {
		sum+=array[counter];
		counter++;
    }
	return sum/len;
}
var nums=[1,2,3,8,9,77];
aveArray(nums);

*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*//*
function shorterInArray(strArray){
	var len=strArray.length;
	var min=strArray[0].length;


		var counter=0;	
		while (counter<len)
		{
			if (strArray[counter].length<=min ) {
				min=strArray[counter];
			}
			counter++;
		}
	
	return min;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
shorterInArray(strings);

*/




/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*//*
function repeatChar(str,char){
var sum=0;


		var counter=0;		//method 2
		while (counter<str.length)
		{
			if (str.charAt(counter)==char ) {
				sum++;
			}
			counter++;
		}
	return sum;
}
var string= "alex mercer madrasa rashed2 emad hala";
repeatChar(string,"a");
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*//*
function evenIndexOddLength(strArray){
	var len=strArray.length;
	var str="";

	var count=0;
	while(count<len){
		if (strArray[count].length%2!=0) {
			str=strArray[count];
		}
		count+=2;
	}
	
	return str;

}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
evenIndexOddLength(strings);

*/

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*//*
function powerElementIndex(array){
	var arr=[];
	for(var i=0;i<array.length;i++){
		arr.push(array[i]**i);

	}
	return arr;
}
var nums= [44, 5, 4, 3, 2, 10];
powerElementIndex(nums);

*/
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*//*
function evenNumberEvenIndex(array) {
	var evenArr=[];

	var count=0;	
		while (count<array.length)
		{
			if(array[count]%2==0)
			{evenArr.push(array[count]);}
		count+=2;
		}

	return evenArr;
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
evenNumberEvenIndex(nums);

*/


