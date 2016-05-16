// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
	if(n < 0) {
		return null
	} else if(n == 1 || n == 0) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
	if(array.length == 0) {
		return 0;
	} else if(array.length == 1) {
		return array[0]
	} else {
		return array[0] + sum(array.slice(1))
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArr = newArr.concat(arraySum(array[i]))
    } else {
      newArr.push(array[i]);
    }
  }
  return sum(newArr);
};


// 4. Check if a number is even.
var isEven = function(n) {
	if(n == 1 || n == -1) {
		return false;
	} else if (n == 0) {
		return true;
	} else if (n > 1) {
		return isEven(n - 2)
	} else if (n < 1) {
		return isEven(n + 2)
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if(n == 0) {
		return 0;
	} else if (n > 0){
		return n-1 + sumBelow(n-1);
	} else if (n < 0) {
		return n+1 + sumBelow(n+1)
	}
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
	var result = [];
	if(x == y || x == y - 1) {
		return []
	} else if(x == y - 2) {
		return y - 1
	} else if(x == y + 2) {
		return y + 1
	} else if (x < y) {
		return result.concat(x+1, range(x+1,y));
	} else if (x > y) {
		return result.concat(x-1, range(x-1,y))
	};
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

	if(exp == 0) {
		return 1;
	} else if(exp > 0) {
		return base * exponent(base, exp - 1);
	} else if(exp < 0) {
		return Number(((1/base) * exponent(base, exp + 1)).toString().slice(0,7)); 
	}

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	var storage = [];
	storage.push(n);
	if(n * n == storage[0]) {
		return true;
	} else if (n == 0 && storage[0] > 0) {
		return false;
	} else {
		return powerOfTwo(n-1);
	}

};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {

	if(string.length == 0) {
		return "";
	}
	
	return string[string.length - 1] + reverse(string.slice(0,string.length - 1))

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

	var newString = [];

		if(string.length == 1) {
			return string;
		} else if (string[0] == " ") {
			return palindrome(string.slice(1))
		} else {
			newString = newString.concat(string[0], palindrome(string.slice(1)))
		}
	
	return reverse(newString.join("")) == newString
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

	if(y == 0) {
		return 'NaN'
	} else if(x < y && y > 0 || x > y && y < 0) {
		return x;
	} else if(x - y < y && x > 0) {
		return x - y
	} else if ( x < 0 && x + y > y) {
		return x + y
	} else {
		return modulo(x - y, y)
	}

};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {

	if(y == 1) {
		return x;
	} else {
		return x + multiply(x, y - 1)
	}

};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

	if (x < 0 || y < 0) {
		return null;
	} else if(x == y) {
		return x;
	} else if (x > y) {
		return gcd(x-y, y)
	} else if (x < y) {
		return gcd(x, y-x)
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

	if(str1.length == 0 && str2.length == 0) {
		return true;
	} else if (str1[0] !== str2[0]) {
		return false;
	} else {
		return compareStr(str1.slice(1), str2.slice(1))
	}

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){

	var newArray = []

	if(str.length == 1) {
		return [str]
	} else {
		newArray = newArray.concat(str[0], createArray(str.slice(1)))
	}

	return newArray

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
	var newArray = []
	if(array.length == 1) {
		return array;
	} else {
		newArray = newArray.concat(array[array.length - 1], reverseArr(array.slice(0, array.length - 1)));
	}

	return newArray;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {

	var newArray = []

	if(length == 0) {
		return []
	} else if (Array.isArray(value) && value.length == 0) {
		newArray = newArray.concat([value], buildList(value, length - 1))
	} else {
		newArray = newArray.concat(value, buildList(value, length - 1))
	}

	return newArray

};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

	if(!array.length) {
		return 0;
	} else {
		return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1), value)
	}

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {

	var newArray = [];

	if(array.length == 0) {
		return []
	} else {
		return newArray.concat(callback(array[0]), rMap(array.slice(1), callback))
	}

	return newArray;

};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

	var result = 0

	if(typeof obj === 'string') {
		return 0;
	}

	for(var item in obj) {
		if(item == key) {
			result = result + 1 + countKeysInObj(obj[item], key); 
		} else {
			result = result + countKeysInObj(obj[item], key);
		}
	}
	return result;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
	
	var result = 0

	if(typeof obj == 'string' && obj == value) {
		return 1;
	} else if (typeof obj == 'string' && obj != value) {
		return 0;
	} else {
		for(var key in obj) {
			result = result + countValuesInObj(obj[key], value)
		}
	}
	
	return result
	
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {

	var newObj = {}

	if(typeof obj == 'string') {
		return obj;
	}
	
	for(var existingKey in obj) {
		if(existingKey == key) {
			newObj[newKey] = replaceKeysInObj(obj[existingKey], key, newKey)
		} else {
			newObj[existingKey] = replaceKeysInObj(obj[existingKey], key, newKey)
		}
	}
	
	return newObj
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
//************************************************************************************************
var fibonacci = function(n) {

	if(n <= 0) {
		return null;
	} else if(n == 1) {
		return [0, 1]; 
	} else {
		var s = fibonacci(n - 1);
		s.push(s[s.length - 1] + s[s.length - 2]); 
		return s
	}

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

	if(n < 0) {
		return null;
	} else if(n == 0) {
		return 0;
	} else if(n <= 2) {
		return 1;
	} else {
		return nthFibo(n - 2) + nthFibo(n - 1)
	}

};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {

	var newArray = []

	if(input.length == 0) {
		return [];
	} else {
		newArray = newArray.concat(input[0].toUpperCase(), capitalizeWords(input.slice(1)))
	}
	
	return newArray;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

var capitalizeFirst = function(input) {

	function map(collection, callback) {
		var newArray = [];
		for(var i = 0; i < collection.length; i++) {
			newArray.push(callback(collection[i]));
		}
		return newArray;
	}


	if(typeof input == 'string') {
		return input.slice(0,1).toUpperCase() + input.slice(1)
	}
	if(Array.isArray(input)) {
		return map(input, function(item) {
			return capitalizeFirst(item);
		})
	}
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {

	var result = 0;
	
	if(typeof obj == 'number') {
		return obj % 2 == 0 ? obj : 0;
	}
	
	if(typeof obj == 'string') {
		return 0;
	}
	
	for(var key in obj) {
		result = result + nestedEvenSum(obj[key])
	}
	
	return result;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {

	var newArray = []

	for(var i = 0; i < arrays.length; i++) {
		if(Array.isArray(arrays[i])) {
			newArray = newArray.concat(flatten(arrays[i]))
		} else {
			newArray.push(arrays[i])
		}
	}

	return newArray;

};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {

	if(!str.length) {
		return;
	}

	if(obj.hasOwnProperty(str[0])) {
		obj[str[0]] += 1
	} else {
		obj[str[0]] = 1
	}



};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {

	var newArray = []

	if(!list.length) {
		return []
	} else if (list[0] == list[1]) {
		newArray = newArray.concat(compress(list.slice(1)))
	} else {
		newArray = newArray.concat(list[0], compress(list.slice(1)))
	}

	return newArray

};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {

	var newArray = []

	if(!array.length) {
		return []
	} else if (array[0] == 0 && array[1] == 0) {
		newArray = newArray.concat(minimizeZeroes(array.slice(1)))
	} else {
		newArray = newArray.concat(array[0], minimizeZeroes(array.slice(1)))
	}

	return newArray

};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
