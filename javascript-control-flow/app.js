/* const gender = "F";
const pay = 50;
const day = "Wed";

if (gender === 'F' && day === "Wed"){
    console.log(`Congrats. Your gender is ${gender} and it is ${day} today. You are eligible to enter the club free of charge!`);
}
else if (gender === 'M'){
    console.log(`Sorry, you will have to pay $${pay} to enter the club.`);
} */

const addList = (...nums) => {
  //   let total = 0;
  if (nums.length === 0) {
    return 0;
  }
  //   for (let i = 0; i < nums.length; i++) {  //For Loop Method
  //     total += nums[i];
  //   }
  const total = nums.reduce((acc, num) => {
    //Reduce Array Iterator Method
    return acc + num;
  }, 0);
  return total;
};

console.log(addList());
console.log(addList(1));
console.log(addList(1, 50, 1.23));
console.log(addList(7, -12));
