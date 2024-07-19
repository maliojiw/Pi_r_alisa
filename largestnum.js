function largestNumber(nums) {
    function compare(a, b) {
    let order;
    //custom comparator
    switch (true) {
        case (a + b > b + a):
        order = -1;
        break;
        case (a + b < b + a):
        order = 1;
        break;
        default:
        order = 0;
    }
    //custom sort
    return order;
    }

    let strNums = nums.map(String);
    strNums.sort((a, b) => compare(a, b));
    let largestNum = strNums.join('');
    
    //custom concatenation
    if (largestNum[0] === '0') {
    return '0';
    } else {
    return largestNum;
    }
}

  // Test cases
  console.log(largestNumber([10, 2, 13, 7]));  // Output: "721310"
  console.log(largestNumber([21, 36, 8, 45])); // Output: "8453621"

// Largest Number
// 1. Comparison: Custom comparator function compares two elements based on their concatenated forms (ab vs ba).
// 2. Sorting: Array of numbers is sorted using the custom comparator to prioritize larger concatenated values.
// 3. Concatenation: Sorted numbers are concatenated into a single string to form the largest possible number.
