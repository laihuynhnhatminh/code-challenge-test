import { argv } from 'process';

/**
 * PROBLEM - 1
 * TASK
 * Provide 3 unique implementations of the following function in JavaScript.
 * **Input**: `n` - any integer
 * Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
 * **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
 */

const valueFromInput = argv[2];
const n = parseInt(valueFromInput, 10);

if (Number.isNaN(n)) {
  console.error('Invalid input. Please provide a valid integer.');
  process.exit(1);
}

if (n < 1) {
  console.log('Input must be a natural number.');
  process.exit(1);
}

/**
 * Explanation: Simplest way to do a loop and add the value to an accumulative variable
 * This operation is O(n) in time complexity and O(1) in space complexity.
 * This just a single loop and the loop get longer depend on the value of {n} hence the time complexity is linear aka O(n).
 */
function sum_to_n_ver_1(n: number): number {
  let sum: number = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

/**
 * Explanation: This is just Math operation nothing much to explain here.
 * The formula used is derived from the arithmetic series sum formula.
 * n is the last number in the series.
 * Example: n is 5 ---> 1 + 2 + 3 + 4 + 5 === (5 * (5  + 1))/2 = 15
 * Another example if n is an even number we can do this (n/2 * (n + 1))
 * Example: n is 6 ---> 1 + 2 + 3 + 4 + 5 + 6 = (6/2 * (6 + 1)) = 21. This derived from 1 + 6 = 2 + 5 = 3 + 4 = 21 hence the formula (n/2 * (n + 1))
 *
 */
function sum_to_n_ver_2(n: number): number {
  return (n * (n + 1)) / 2;
}

/**
 * Explanation: This function using recursive so just the function add the value to itself until n reach end of natural number 1
 * This is just a basic recursive function that return the summation of all natural numbers up to n
 * Example: n is 5 ---> sum_to_n_ver_3(5) = 5 + sum_to_n_ver_3(4) + sum_to_n_ver_3(3) + sum_to_n_ver_3(2) + sum_to_n_ver_3(1) = 5 + 4 + 3 + 2 + 1 = 15
 * To be honest, I have no idea what is the time or space complexity of this as I don't do much leet code style question.
 * But in general I would just stick to math operation if possible. Or using the 1st version as using a native for loop in JS is very very fast for simple loops.
 */
function sum_to_n_ver_3(n: number): number {
  if (n <= 1) return n;

  return n + sum_to_n_ver_3(n - 1);
}

// Test here with this CLI command pnpm --filter problem-1 n
// Exchange n for any number
console.log('sum_to_n_ver_1:', sum_to_n_ver_1(n));
console.log('sum_to_n_ver_2:', sum_to_n_ver_2(n));
console.log('sum_to_n_ver_3:', sum_to_n_ver_3(n));
