const salt = (num1, num2, num3) => {
    return [
        `Total salts: ${Math.round((((num1 + num2 + num3)/3)*.0072) * 10) / 10}`,
        `Shred Salts ${ (Math.round((((num1 + num2 + num3)/3)*.0072) - .35) * 10) / 10 }`
    ].map( e => {
        console.log(e);
    })
}

console.log(salt(674, 685, 691))
