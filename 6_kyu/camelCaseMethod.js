// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

const camelCase = str => str.split(' ').reduce((r, e) => {
    r.push(e.split('').reduce( (ru, el, ind) => {
        ru.push(ind === 0 ? el.toUpperCase() : el.toLowerCase())
        return ru;
    }, []).join(''))
    return r;
}, []).join('')

// best answer

String.prototype.camelCase=function(){
    return this.split(' ').map(function(word){
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
 }