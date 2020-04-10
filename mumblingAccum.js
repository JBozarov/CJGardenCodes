// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// using double loop 
function accum(input){
   let result = ''; 
   for ( let i=0; i<input.length; i++){
      for ( let j = 0; j<i+1; j++) {
         if (j === 0) {
            result += input[i].toUpperCase(); 
         }
         else result += input[i].toLowerCase(); 
      }
      if (i!= input.length-1){
      result += '-'; 
   }
   }
   return result; 
}


// using reduce 
function accum(input){
   return input.split('').reduce((result, currentLetter, index) => {
      const totalCount = index+1; 
      for (var count = 0; count<totalCount; count++){
         if (count == 0) {
            result += currentLetter.toUpperCase(); 
         }
         else result += currentLetter.toLowerCase(); 
      }
      if (index !== input.length-1){
         result += '-'
      }
      return result; 
   }, '')
}


// using repeat
function accum(input){
   return input.split('').map((elem, index) => elem.toUpperCase() + elem.toLowerCase().repeat(index)).join('-')
}

console.log(accum('abcde'))
