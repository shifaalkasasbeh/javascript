/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*//*
doubleNumbers = (arr) => arr.map((num) => {
  return num * 2
})
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

  */
  /*
   * Exercise 2 : 
   * 
   * Take an array of numbers and make them strings
   *
   * Test Case: 
   *
   * console.log(stringItUp([2, 5, 100]));
   * 
   * Result:
   * ["2", "5", "100"]
  */
  /*
  stringItUp = (arr) => arr.map((num) => {
    return num.toString()
})
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
*/
  
  
  /*
   * Exercise 3:  
   * 
   * Capitalize each of an array of names
   *
   * Test Case: 
   *
   * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
   * 
   * Result:
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
  */
  /*
capitalizeNames = (arr) => arr.map((name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
})
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  */

  /*
   * Exercise 4:  
   * 
   * Make an array of the names in h1s, and the ages in h2s
   *
   * Test Case: 
   *
   * console.log(readyToPutInTheDOM([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ])); 
   * 
   * Result:
   * 
   * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
   * "<h1>Eric Jones</h1><h2>2</h2>", 
   * "<h1>Paris Hilton</h1><h2>5</h2>", 
   * "<h1>Kayne West</h1><h2>16</h2>", 
   * "<h1>Bob Ziroll</h1><h2>100</h2>"]
   */
  /*
  function readyToPutInTheDOM(arr){
    // your code here
  }
  */
 /*
  function readyToPutInTheDOM(arr){
  var h1s = arr.map(function(item){
          return "h1>" + item.name + "</h1><h2>80</h2>"
  }) 
  return h1s
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
  
  */
  /*
  * Exercise 5:
  * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
  *
  * Test Cases:
  *   Test Case 1:  doubleValues([1,2,3]) 
  *   Test Case 2:  doubleValues([1,-2,-3])  
  *
  * Result:
  * Test Case 1: [2,4,6] 
  * Test Case 2: [2,-4,-6]
  */
  /*
  function doubleValues(arr) {
    const dbldArr = [];
    arr.forEach(function (value) {
      dbldArr.push(value * 2);
    });
    return dbldArr;
  }
  */  
    /*
    * Exercise 6:
    * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
    *
    *
    * Test Cases :
    *   Test Case 1:  valTimesIndex([1,2,3])  
    *   Test Case 2:  valTimesIndex([1,-2,-3]) 
    * 
    * Result
    * Test Case 1: [0,2,6]
    * Test Case 2: [0,-2,-6]
    */
    /*
    function valTimesIndex(arr){
       // your code here   
      
    }*/
    
/*
    function valTimesIndex(arr) {
      return arr.map(function (val, i) {
        return val * i;
      });
    }
    
*/

    /*
    * Exercise 7:
    * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
    * of that key in each object.
    * 
    * Test Case:
    * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
    * 
    * Result:
    * ['Elie', 'Tim', 'Matt', 'Colt']
    */
   
/*
    function extractValue(array, key) {
      if (!Array.isArray(array)) return "el primer parametro no es un array";
        return array
          .filter((el) => {
            if (el.hasOwnProperty(key)) return el[key];
          })
          .map((el) => {
            return el[key];
          });
      }
      
      console.log(
        extractValue(
          [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
          "name"
        )
      );
  
  */
    
    /*
    * Exercise 8:
    * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
    * 
    * Examples:
    * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
    *//*
    function extractFullName(arr) {
      return arr.map(function (val) {
        return `${val.first} ${val.last}`;
      });
    }*/
    