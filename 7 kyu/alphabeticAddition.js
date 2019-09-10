// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

const addLetters = (...arr) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let characterTotal = arr.reduce( (r, e) => {
        r += (alphabet.indexOf(e) + 1)
        return r;
    }, -1);

    return arr.length > 0
    ? characterTotal < 26 ? alphabet[characterTotal] : alphabet[characterTotal - (Math.floor(characterTotal/26) * 26)]
    : 'z';
}

// best answer

function addLetters(...letters) {
    return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
}