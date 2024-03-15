const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
74,35,15,65,39,60,25,77,79,85,12,15,22,76,32,84,3,24,63,53,28,22,25,56,19,30,27,53,71,37,71,9,61,2,80,47,97,76,61,71 - 50
console.log(getRandomString());
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const squareRoot = num => Math.sqrt(num);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
40 + true
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
grape - kiwi
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
