function customSort(array) {
    let odd = [];
    let even = [];

//partitioning
    array.forEach(num => {
    if (num % 2 !== 0) {
        odd.push(num);
    } else {
        even.push(num);
    }
    });

//concatenation
    odd.sort((a, b) => a - b);
    even.sort((a, b) => a - b);

    return [...odd, ...even];
}

  // Test cases
  console.log(customSort([4, 2, 5, 7, 1, 6])); // Output: [1, 5, 7, 2, 4, 6]
  console.log(customSort([25, 40, 14, 91, 31, 22, 49, 13, 6])); // Output: [13, 25, 31, 49, 91, 6, 14, 22, 40]

