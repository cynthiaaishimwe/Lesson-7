// Write a function that accepts an array of strings and console.logs each element using a for loop.

function stringsArr(arr){
   for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
   }
 }

let arr = [90,50,20,15,3]
stringsArr(arr)

// Write a function that accepts an array of numbers and 
// uses the forEach() method to console.log each number multiplied by 2.

function ArrayNumber(nums) {

for(i=0;i<=nums.length;i++){
  nums.forEach(function(n){
    console.log(n*2)
  }) ;
  

}
}
let nums = [2,4,6,5,9,10]
ArrayNumber(nums)

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 
// and the last two added by 5.
//  Console the array with the new value

 function MultipliedArray(array){
  for(let i = 0 ; i<array.length ; i++){
     if(i<4){
        (array[i]*=8)
     }else{
        (array[i]+=5)
     }
   
  }
  console.log(array)
 }
 let array = [1,2,3,4,5,6,7]
 MultipliedArray(array)

