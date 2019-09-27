'use strict';

/*********************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : Please do not use loops! All tasks can be implmeneted using standard Array methods *
 *                                                                                           *
 *********************************************************************************************/

 
/**
 * Returns an index of the specified element in array or -1 if element is not found
 * 
 * @param {array} arr
 * @param {any} value
 * @return {number}
 * 
 * @example
 *    ['Ace', 10, true], 10    => 1 
 *    ['Array', 'Number', 'string'], 'Date'    => -1 
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
   return arr.indexOf(value);
}

/**
 * Generates an array of odd numbers of the specified length
 * 
 * @param {number} len
 * @return {array}
 * 
 * @example
 *    1 => [ 1 ] 
 *    2 => [ 1, 3 ] 
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
   /*let mass = [];
   function count(i) {
      if(i != 0) {
         mass.unshift(i*2-1);
         return count(i-1);
      }
      return mass;
   }
   return count(len);

   let count = -2;
   let arr = [...Array(len)];
   arr.fill(1);
   return arr.map(function(x) {
		count += 2;
      return x+=count;
   });*/

   return [...Array(len)].fill(1).map((x,i) => x = x + i*2);

}

// function generateOdds(len) {
// 	console.log(len);
//    if(len != 0) {
//       mass.unshift(len*2-1);
//       return generateOdds(len-1);
//    }
//    return mass;
// 	console.log(mass);
// }

/**
 * Returns the doubled array - elements of the specified array are repeated twice using original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]  
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => [] 
 */
function doubleArray(arr) {
   let mass = [];
   mass = [...arr,...arr];
   return mass;
}


/**
 * Returns an array of positive numbers from the specified array in original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => [] 
 */
function getArrayOfPositives(arr) {
   return arr.filter(num => num > 0);
}

/**
 * Returns the array with strings only in the specified array (in original order)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */
function getArrayOfStrings(arr) {
   return arr.filter(num => typeof num == "string");
}

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
   return arr.filter(function (num){
       if(num != false || num != null || num != 0 || num != "" || num != undefined || num != NaN){
         return num;
       }
   })
}

/**
 * Returns the array of useprcase strings from the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
   arr = arr.join('%%');
   arr = arr.toUpperCase();
   arr = arr.split('%%');;
   return arr;
}


/**
 * Returns the array of string lengths from the specified string array.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
   return arr.map(function(num) {
      return num.length;
   });
}

/**
 * Inserts the item into specified array at specified index
 * 
 * @param {array} arr
 * @param {any} item
 * @param {number} index 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
   arr.splice(index, 0, item);
   return arr;
 }

/**
 * Returns the n first items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
   arr.splice(n);
	return arr;
}


/**
 * Returns the n last items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
   return arr.splice(arr.length - n,arr.length);
}


/**
 * Returns CSV represebtation of two-dimentional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 * 
 * @param {array} arr
 * @return {string}
 * 
 * @example
   *    [
   *       [  0, 1, 2, 3, 4 ],
   *       [ 10,11,12,13,14 ],
   *       [ 20,21,22,23,24 ],
   *       [ 30,31,32,33,34 ]
   *    ] 
 *           => 
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
   return arr.join('\n');
}

/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
   return arr.map(function(num) {
      return num * num;
    });
}


/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n] 
 *  or f[n] = f[n-1] + x[n]
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
   var newArray = [];
   arr.reduce(function(a,b,i) { return newArray[i] = a+b; },0);
	return newArray;
}

/**
 * Returns every second item from the specified array:
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
   let count = 0;
   let newArr = [];
   if(arr.length == 1) return newArr;
   else {
      arr.map(function(num) {
         count++;
         if(count % 2 != 0) {
            newArr.push(arr[count]);
         }
      });
   }
   return newArr;
}


/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, tree third items etc. 
 * 
 * @param {array} arr 
 * @return {array}
 * 
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
   let newArr = [];
   let result = [];
   arr.map(function(num,i) {
     return newArr[i]=([...Array(i+1)].fill(arr[i]));
   });
   return [].concat(...newArr);
}


/** 
 * Returns the 3 largest numbers from the specified array
 * 
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
   arr = arr.reverse();
   let newArr = [];
   let count = 0;
   arr.map(function(num) {
      if(count < 3){
         newArr.push(arr[count]);
         count++;
      }
   });

   return newArr;
}
 
 
/**  
 * Returns the number of positive numbers from specified array
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
   return arr.filter(x => x > 0 && typeof x == 'number').length;
}
 
/** 
 * Sorts digit names
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
   let arrStrings = ['zero','one','two','three','four','five','six','seven','eight','nine'];
   let index = arr.map((x) => arrStrings.indexOf(x));
   index = index.sort();
   return index.map((x) => arrStrings[x]);
}

/** 
 * Returns the sum of all items in the specified array of numbers
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
   if(arr.length != 0) {
      return arr.reduce(function(a,b) {
         return a+b;
      })
   }
   return 0;
}
 
/** 
 * Returns the number of all falsy value in the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
   let count = 0;
   arr.map(function(a){
      if( a === null ||  a === undefined || Number.isNaN(a) || typeof a === 'boolean' || a == 0 || typeof a == 'string' && a.length == 0) {
         count++;
      }
   });
   
   return count;
}

/**
 * Returns a number of all occurences of the specified item in an array  
 * 
 * @param {array} arr
 * @param {any} item 
 * @return {number}
 * 
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2 
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurences(arr, item) {
   return arr.filter(function(x){return x === item}).length;
}

/**
 * Concatenates all elements from specified array into single string with ',' delimeter  
 * 
 * @param {array} arr 
 * @return {string}
 * 
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
   return arr.join(',')
}


/**
 * Sorts the specified array by country name first and city name (if countries are equal) in ascending order.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]  
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */
function sortCitiesArray(arr) {
   arr = arr.sort((a,b) => (a.country > b.country) ? 1 
                           : ((b.country > a.country) ? -1 : 0));
   return arr.sort(function(a,b){
      if(a.country == b.country) {
         if(a.city > b.city){
            return 1;
         } else {
            return -1;
         }
      }
   });
}

/**
 * Creates an indentity matrix of the specified size
 * 
 * @param {number} n
 * @return {array}
 * 
 * @example
 *     1  => [[1]]
 *  
 *     2 => [[1,0],
 *           [0,1]]
 * 
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]   
 */
function getIdentityMatrix(n) {
   return [...Array(n)].map(
      function(val, i,a) {
         return a.map(function(xi, j){
            return i == j ? 1 : 0;
         })
      }
   )
}

/**
 * Creates an array of integers from the specified start to end (inclusive)
 * 
 * @param {number} start
 * @param {number} end
 * @return {array}
 * 
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
   let size = end - start + 1;
   let count = -1;
   size = size >= 0 ? size : size * -1;
   let arr = [...Array(size)];
   arr.fill(start);
   return arr.map(function(x) {
		count++;
      return x+=count;
   });
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
   let set = new Set(arr);
   return [...set];
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ], 
 *     item => item.country, 
 *     item => item.city
 *   )
 *            => 
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"], 
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
   return null;
}


/**
 * Projects each element of the specified array to a sequence and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element that returns an array of children
 * @return {array}
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
   if(childrenSelector == undefined) {
      arr = arr.join('>><<');
      return arr.split('>><<');
   } else {
      arr = arr.join('');
      return arr.childrenSelector;
   }
}


/**
 * Returns an element from the multidimentional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0]) 
 *   ['one','two','three'], [2]       => 'three'  (arr[2]) 
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
    throw new Error('Not implemented');
}


/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start. 
 * The middle element (if exists) leave on the same position.
 * 
 *  
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/         
 *     head     tail 
 *
 *   [ 1, 2 ]  => [ 2, 1 ] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]   
 * 
 */
function swapHeadAndTail(arr) {
   let arr1 = arr.slice(0,Math.floor(arr.length/2));
   let arr2 = arr.slice(Math.ceil(arr.length/2));
   let newArr = [];
   newArr = arr2.concat(arr1);
   newArr.splice(Math.floor(arr.length/2),0,Math.ceil(arr.length/2));
   return newArr;
}


module.exports = {
    findElement: findElement,
    generateOdds: generateOdds,
    doubleArray: doubleArray,
    getArrayOfPositives: getArrayOfPositives,
    getArrayOfStrings: getArrayOfStrings,
    removeFalsyValues: removeFalsyValues,
    getUpperCaseStrings: getUpperCaseStrings,
    getStringsLength: getStringsLength,
    insertItem: insertItem,
    getHead: getHead,
    getTail: getTail,
    toCsvText: toCsvText,
    toStringList: toStringList,
    toArrayOfSquares: toArrayOfSquares,
    getMovingSum: getMovingSum,
    getSecondItems: getSecondItems,
    propagateItemsByPositionIndex: propagateItemsByPositionIndex,
    get3TopItems: get3TopItems,
    getPositivesCount: getPositivesCount,
    sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
    getItemsSum: getItemsSum,
    getFalsyValuesCount: getFalsyValuesCount,
    findAllOccurences: findAllOccurences,
    sortCitiesArray: sortCitiesArray,
    getIdentityMatrix: getIdentityMatrix,
    getIntervalArray: getIntervalArray,
    distinct: distinct,
    group: group,
    selectMany: selectMany,
    getElementByIndexes: getElementByIndexes,
    swapHeadAndTail: swapHeadAndTail
};
