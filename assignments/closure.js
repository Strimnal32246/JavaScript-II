// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function closuresAreFun() {
  var dogs = "Our furry attack beasts";

  function whatAredogs() {
    return `${dogs} are in a closure.`
  }
  return whatAredogs
}
let closurePractice = closuresAreFun()
console.log(closurePractice());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
 let i = 0;
 return function () {
   i += 1;
   return i
 };
 };
 ;
// Example usage: const newCounter = counter();
console.log(newCounter()); // newCounter(); // 1
console.log(newCounter()); // newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
let i = 0;
return {
  "increment": function (i) {
    return i += 1;
  },
  "decrement": function (i) {
    return i -= 1;
  }

};


const newCounterFactory = counterFactory;
console.log(newCounterFactory(this.increment));
console.log(newCounterFactory(this.decrement));