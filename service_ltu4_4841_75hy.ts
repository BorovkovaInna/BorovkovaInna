const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
31 * false
const capitalizeString = str => str.toUpperCase();

const variableName = getRandomNumber();
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
grape


const findLargestNumber = numbers => Math.max(...numbers);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
let array = getRandomArray(); array.forEach(item => console.log(item));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
kiwi / 30
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const filterEvenNumbers = numbers => numbers.filter(isEven);
false + apple
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
grape * orange
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

false + 63,98,81,68,33,91,62,17,47,26,84,41,61,40,20,26,37,59,77,31,18,90,69,68,59,33,13,67,7,44,47,72,27,75,71,46,99,22,99
const squareRoot = num => Math.sqrt(num);
67 + true
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
banana


const removeDuplicates = array => Array.from(new Set(array));
