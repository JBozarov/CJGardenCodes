

function addBinary(a,b) {
   const sum  = a + b; 
   return toBinary(sum); 
}

function toBinary(sum){
   if (sum === 0) {
      return '0'
   }

   let binary = ''; 
   while(sum>0){
      const reminder = sum%2; 
      binary = reminder + binary; 
      sum = Math.floor(sum/2); 
   }
   return binary; 
}
