const _ = require("lodash");
const math = require("mathjs");

function findTheLargest(question) {
  const numbers = extractOperands(question);
  return _.max(numbers);
}

function extractOperands(question){
  const string = question.replace(/,|th/g, "").split(' ');
  return string.filter(item => !isNaN(item)).map(n => parseInt(n, 10));
}

function calculate(question) {
  return math.eval(question
    .split("what is")[1]
    .replace(/plus/g, "+")
    .replace(/minus/g, "-")
    .replace(/multiplied by/g, "*")
    .replace(/power by/g, "^")
    .replace(/divided by /g, "/"));
}

function findSquareAndCube(question){
  const numbers = extractOperands(question);
  const results = numbers.filter(number => {
    const number1 = Math.sqrt(number);
    const number2 = Math.cbrt(number);
    return _.isInteger(number1) && _.isInteger(number2);
  });

  return results.join(', ');
}

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
};

function findPrimeNumber(question) {
  // 6cdf02c0: which of the following numbers are primes: 706, 239, 643, 257

  const numbers = extractOperands(question);
  return numbers.filter(isPrime).join(", ");
}

function answerQuizz(question) {
  if (question.match("who played James Bond in the film Dr No")){
    return "Sean Connery";
  }
  if (question.match("who is the Prime Minister of Great Britain")){
    return "Theresa May";
  }
  if (question.match("what currency did Spain use before the Euro")){
    return "Peseta";
  }
  if (question.match("which city is the Eiffel tower in")){
    return "Paris";
  }
  if (question.match("who played James Bond in the film Dr No")){
    return "";
  }
}

function fibonacci(n) {
  const fib = [0, 1];
  for(let i=fib.length; i<n+1; i++) {
    fib[i] = fib[i-2] + fib[i-1];
  }
  return fib[n];
}

function findFibonacciNumber(question) {
  const numbers = extractOperands(question);
  return fibonacci(numbers[0]);
}

function answerQuestion(question){
  console.log("question: ", question);

  if (question.match("largest")){
    return findTheLargest(question);
  }

  if(question.match("plus|multiplied|minus|divided|power")){
    const result = calculate(question);
    console.log('res : ', result);
    return result;
  }

  if(question.match("both a square and a cube")){
    const result = findSquareAndCube(question);
    console.log('res : ', result);
    return result;
  }

  if(question.match("which of the following numbers are primes")){
    const result = findPrimeNumber(question);
    console.log('res : ', result);
    return result;
  }

  if(question.match("number in the Fibonacci sequence")){
    const result = findFibonacciNumber(question);
    console.log('res : ', result);
    return result;
  }

  return answerQuizz(question);
}

module.exports = {
  answerQuestion,
  extractOperands
};
