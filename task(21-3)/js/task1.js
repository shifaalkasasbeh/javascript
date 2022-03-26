/*q-1*//*
//Write a JavaScript program that accept two integers and display the larger.
function largerInt(n1, n2) {
	console.log(n1 > n2 ? n1 : n2);
}
//largerInt(2, 4);
*/

/*q-2*/
/*
// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Sample numbers : 3, -7, 2
// Output : The sign is -
function productSign(n1, n2, n3) {
	var result = n1 * n2 * n3;
	console.log(result < 0 ? "-" : "+");
}
//productSign(3, 7, 2);
*/

/*q-3*//*
// Write a JavaScript conditional statement to sort three numbers.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
function sort3Num(n1, n2, n3) {
	var arr = [];

	arr.push(n1, n2, n3);

	console.log(arr.sort().reverse());
}
//sort3Num(0, -1, 4);
*/

/*q----4*/ 
/*Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
// function largestOfFive(n1, n2, n3, n4, n5) {
// 	var numArray = [n1,n2,n3,n4,n5];

// 	for(var i = 0; i < 5; i++) {
// 		var largest;
// 		if(numArray[i+1] > numArray[i]) {
// 			largest = numArray[i+1];
// 		}
// 	}
// 	console.log(largest);
// }
// largestOfFive(-5,-2,-6,0,-1);
// largestOfFive(10,4,3,2,9);
// largestOfFive(15, 19, -4, 0, 14);


/*q----5*/ 
/*
  function display(x,y){
      if(x>y)
        alert("Hello world");
    else
        alert("Goodbye");
  }
//   display(10,3)*/