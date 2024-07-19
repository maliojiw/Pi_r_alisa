function sumOfPrimes(n) {
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    // Sieve of Eratosthenes
    for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
        }
    }
    }

    let sum = 0;
    for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
        sum += i;
    }
    }

    return sum;
}

  // Test cases
  console.log(sumOfPrimes(10)); // Output: 17 (2 + 3 + 5 + 7)
  console.log(sumOfPrimes(59)); // Output: 440 (2 + 3 + 5 + ... + 53)

// Calculates sum of primes <= n using Sieve of Eratosthenes finding prime then sum 

