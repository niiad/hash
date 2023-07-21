/**
 * calculate the area of a circle given its radius.
 *
 * @param {number} radius - the radius of the circle.
 *
 * @returns {number} the area of the circle.
 *
 * @throws {Error} if the provided radius is not a non-negative number.
 */
export function areaOfCircle(radius) {
	if (isNaN(radius) || radius < 0) {
		throw new Error("Invalid radius!!");
	}

	const pi = 3.14159;
	const area = pi * (radius * radius);

	return area;
}

/**
 * convert celsius to fahrenheit.
 *
 * @param {number} celsius - The temperature in celsius.
 *
 * @returns {number} the equivalent temperature in fahrenheit.
 *
 * @throws {Error} if the provided celsius is not a number.
 */
export function celsiusToFahrenheit(celsius) {
	if (isNaN(celsius)) {
		throw new Error("Invalid value!!");
	}

	return celsius * (9 / 5) + 32;
}

/**
 * calculate the factorial of a number using recursion
 *
 * @param {number} num - the number for which factorial needs to be calculated.
 *
 * @returns {number} the factorial of the given number.
 *
 * @throws {Error} if the provided num is not a number.
 */
export function recursiveFactorial(num) {
	if (isNaN(num)) {
		throw new Error("Invalid value!!");
	}

	if (num === 0 || num === 1) {
		return 1;
	} else {
		return num * recursiveFactorial(num - 1);
	}
}

/**
 * calculate the factorial of a number using iteration
 *
 * @param {number} num - the number for which factorial needs to be calculated.
 *
 * @returns {number} the factorial of the given number.
 *
 * @throws {Error} if the provided num is not a number
 */
export function iterativeFactorial(num) {
	if (isNaN(num)) {
		throw new Error("Invalid value!!");
	}

	let result = 1;

	for (let i = 2; i <= num; i++) {
		result *= i;
	}

	return result;
}

/**
 * calculate the factorial of a number using tail recursion
 *
 * @param {number} num - the number for which factorial needs to be calculated.
 * @param {number} accumulator - the current accumulator value (default: 1).
 *
 * @returns {number} the factorial of the given number.
 *
 * @throws {Error} if the provided num is not a number
 */
export function tailRecursiveFactorial(num, accumulator = 1) {
	if (isNaN(num) || isNaN(accumulator)) {
		throw new Error("Invalid input value!!");
	}

	if (num === 0 || num === 1) {
		return accumulator;
	} else {
		return tailRecursiveFactorial(num - 1, num * accumulator);
	}
}

/**
 * checks if a given number is even or odd
 *
 * an even number is divisible by 2 with no remainder, while an odd number
 * has a remainder of 1 when divided by 2
 *
 * @param {number} num - the number to check
 *
 * @returns {string} returns 'even' if the number is even else 'odd'
 *
 * @throws {Error} if the input is not a number
 */
export function evenOrOdd(num) {
	if (typeof num !== "number" || isNaN(number)) {
		throw new Error("Invalid input!!");
	}

	if (num % 2 === 0) {
		return "even";
	} else {
		return "odd";
	}
}

/**
 * reverses a given string
 *
 * @param {string} word - the string to reverse
 *
 * @returns {string} the reversed string
 *
 * @throws {Error} if the input is not a string
 */
export function reverseString(word) {
	if (typeof word !== "string") {
		throw new Error("Invalid input!!");
	}

	// split the string into an array of characters
	let arrayOfCharacters = word.split("");

	// reverse the array of characters
	let reverse = arrayOfCharacters.reverse();

	// join the reversed array and return it
	return reverse.join("");
}

/**
 * checks if a given string is a palindrome.
 *
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the
 * same forward and backward
 *
 * Spaces, punctuation, and letter casing are usually ignored
 *
 * @param {string} word - the string to check for palindrome
 *
 * @returns {boolean} returns true if the string is a palindrome otherwise false
 *
 * @throws {Error} if the input is not a string
 */
export function isPalindrome(word) {
	if (typeof word !== "string") {
		throw new Error("Invalid input!!");
	}

	//make the string case-insensitive by removing spaces and converting
	// to lowercase
	const comparableWord = word.replace(/\s/g, "").toLowerCase();

	return comparableWord === comparableWord.split("").reverse().join("");
}

/**
 * find the largest number in an array of numbers
 *
 * @param {number[]} numbers - the array of numbers
 *
 * @returns {number|null} - returns the largest number or null for an empty array
 *
 * @throws {Error} if the input is not an array
 */
export function findLargestElement(numbers) {
	if (!Array.isArray(numbers)) {
		throw new Error("Invalid input!!");
	}

	if (numbers.length === 0) {
		return null;
	}

	let largestNumber = numbers[0];

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > largestNumber) {
			largestNumber = numbers[i];
		}
	}

	return largestNumber;
}

/**
 * finds the second largest element in an array of numbers
 *
 * @param {number[]} numbers - the array of numbers
 *
 * @returns {number|null} - returns the second largest number or null if the array elements are less than 2
 *
 * @throws {Error} if the input is not an array
 */
export function findSecondLargestElement(numbers) {
	if (!Array.isArray(numbers)) {
		throw new Error("Invalid input!!");
	}

	if (numbers.length < 2) {
		return null;
	}

	let largestNumber = Math.max(numbers[0], numbers[1]);
	let secondLargestNumber = Math.max(numbers[0], numbers[1]);

	for (let i = 2; i < numbers.length; i++) {
		const currentNumber = numbers[i];

		if (currentNumber > largestNumber) {
			secondLargestNumber = largestNumber;
			largestNumber = currentNumber;
		} else if (
			currentNumber > secondLargestNumber &&
			currentNumber !== largestNumber
		) {
			secondLargestNumber = currentNumber;
		}
	}

	return secondLargestNumber;
}
