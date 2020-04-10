// Given three integers a ,b ,c, return the largest number obtained after inserting the following 
// operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained



// Write down all possible values: 

function expressionMatter(a, b, c) {
   const a1 = a*(b+c); 
   const a2 = a+b*c; 
   const a3 = a+b*c; 
   const a4 = (a+b)*c; 
   const a5 = a+b+c; 
   const a6 = a*b+c; 
   return Math.max(a1, a2, a3, a4, a5, a6); 
 }

console.log(expressionMatter(2,1,2)) // 6
console.log(expressionMatter(2,1,1)) // 4
console.log(expressionMatter(1,2,3)) // 9
console.log(expressionMatter(2,2,2)) // 8



// using functions: 
function expressionMatter(a, b, c) {
   const add = (x, y) => x+y; 
   const multiply = (x, y) => x*y; 


   const a1 = a * add(b, c); 
   const a2 = a + add(b, c); 
   const a3 = a * multiply(b, c); 
   const a4 = a + multiply(b, c);

   const a5 = add(a, b) * c; 
   const a6 = add(a, b) +c; 
   const a7 = multiply(a, b) * c; 
   const a8 = multiply(a, b) + c; 

   return Math.max(a1, a2, a3, a4, a5, a6, a7, a8); 
 }

console.log(expressionMatter(2,1,2)) // 6
console.log(expressionMatter(2,1,1)) // 4
console.log(expressionMatter(1,2,3)) // 9
console.log(expressionMatter(2,2,2)) // 8



// Using array of functions: 
function expressionMatter(a, b, c) {
   const add = (x, y) => x+y; 
   const multiply = (x, y) => x*y; 

   const answers = []; 
   const fns = [add, multiply]; 
   
   fns.forEach(fn1 => {
      fns.forEach(fn2 => {
         answers.push(fn1(a, fn2(b, c)));
         answers.push(fn1(fn2(a, b), c)); 
      })
   })

   const a1 = multiply(a, add(b, c)); 
   const a2 = add(a, add(b, c)); 
   const a3 = multiply(a, multiply(b, c)); 
   const a4 = add(a, multiply(b, c));

   const a5 = multiply(add(a, b), c); 
   const a6 = add(add(a, b), c); 
   const a7 = multiply(multiply(a, b), c); 
   const a8 = add(multiply(a, b), c); 

   return Math.max(...answers); 
 }

console.log(expressionMatter(2,1,2)) //  6
console.log(expressionMatter(2,1,1)) //  4
console.log(expressionMatter(1,2,3)) //  9
console.log(expressionMatter(2,2,2)) //  8
