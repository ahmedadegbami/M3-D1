/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

let calculator = function(int1, int2) {
    if (int1 === int2) {
        return (int1 + int2) * 3
    } else {
        return int1 + int2
    }
}

console.log("Number 1:",calculator(5,5))


/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

let check50 = function(num1, num2) {
    if (num1 === 50 || num2 === 50 || (num1 + num2) === 50){
        return true

    } else {
        return false
    }
}

console.log("Number 2:",check50(10,25))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

function removeChar(string){
     let str = string.split("");
     
     console.log(str)
     console.log(str.join(""))
     return  str.splice(3,1)
     

}

console.log(removeChar("Ahmed"))

let removeletter = function(string2) {
    return string2.slice(3,4);   
}

console.log(removeletter("Ahmed"))

/*

4)
 Create a function to find the largest of three given integers.
*/

function findLargest(x,y,z) {
    if ((x > y && y > z) || (x > z && z > y)){
        return x
    } else if ((y > x && x > z) || (y > z && z > x)){
        return y
    } else if ((z > x && x > y) || (z > y && y > x)){
        return z
    }
}


console.log(findLargest(50, 24, 36))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

function checkRange(num1, num2) {
    if (((num1 >= 40 && num1 <=60 )|| (num1 >= 70 && num1 <=100 )) && ((num2 >= 40 && num2 <=60) || (num2 >= 70 && num2 <=100 )))
    {
        return "The Number is between 40 and 60 0r between 70 and 100"
    } else {
        return "One or both number not within the range"
    }
}


console.log("NUmber 5:",checkRange(90, 112))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function copy_strings (str, n) 
{
  if (n > 0)
    return str.repeat(n)
  else  {

      return false
  }
  
}

console.log(copy_strings("Ahmed", 2));



/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function startWith(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city
    } else {
        return ""
    }

}

console.log("Number 6:", startWith("NewYork"))




/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/


let newArray = [1,2,3]
let sum = 0

function addArray() {
    for (let i=0; i < newArray.length; i++) {
        sum += newArray[i]
        
    }
    return sum

}
console.log("NUmber 8:", addArray())


/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
 function find13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
       return true
    } 
    else
    {
       return false
    }
}

console.log("NUmber 9:",find13([1, 5]));  




/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

*/
function search13(nums) {

    if (nums.indexOf(1) === -1 || nums.indexOf(3) === -1){
       return true
    } 
    else
    {
       return false
    }
}

console.log("NUmber 10:",search13([3, 5]));  

  





// 11)

// Create a function to find the longest string from a given array of strings.

function findLongestString(array)
  {
    let longestString = array[0].length;
    let longest = array[0]
    
    for (let i = 1; i < array.length; i++) {
        var newLongest = array[i].length;
        if (newLongest > longestString) {
            longestString = newLongest;
            longest = array[i]
            
            
        }
    }
    return longest;
}
console.log("number 11:",findLongestString(["ab", "a", "abcd"]));


// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

// 13)

// Create a function to find the index of the greatest element of a given array of integers



function indexOfMax(arr) {
    var max = arr[0];
    var maxIndex = 0;
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

console.log(indexOfMax([6, 7, 8, 19, 12]))

// 14)

// Create a function to get the largest even number from an array of integers.

// 16)

// Create a function to check from two given integers, whether one is positive and another one is negative.

// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

// 18)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 19)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

