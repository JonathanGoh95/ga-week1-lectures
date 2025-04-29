const gender = "F";
const pay = 50;
const day = "Wed";

if (gender === 'F' && day === "Wed"){
    console.log(`Congrats. Your gender is ${gender} and it is ${day} today. You are eligible to enter the club free of charge!`);
}
else if (gender === 'M'){
    console.log(`Sorry, you will have to pay $${pay} to enter the club.`);
}