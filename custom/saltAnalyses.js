const salt = (num1, num2, num3) => {
    return [
        `Total salts: ${ Math.round((((num1 + num2 + num3)/3)*.0072) * 10) / 10 ? Math.round((((num1 + num2 + num3)/3)*.0072) * 10) / 10 : 'Insufficient information' }`,
        `Shred Salts ${ (Math.round((((num1 + num2 + num3)/3)*.0072) - .35) * 10) / 10 ? (Math.round((((num1 + num2 + num3)/3)*.0072) - .35) * 10) / 10 : 'Insufficient information' }`
    ].map( e => {
        console.log(e);
    })
}

console.log(salt(618, 550, 550))
