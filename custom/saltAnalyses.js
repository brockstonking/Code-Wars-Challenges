const salt = (num1, num2, num3) => {
    console.log(`Total salts: ${((num1 + num2 + num3)/3)*.0072}`);
    console.log(`Shred Salts ${ (((num1 + num2 + num3)/3)*.0072) - .35 }`);
}

console.log(salt(578, 587, 579))