


function removeVowels(str) {
    const exception = ['a','e','i','o','u'];
    return str.split('').filter(letter => !exception.includes(letter)).join('')
}



removeVowels("hello world");
// "hll wrld"

removeVowels("JavaScript is fun");
// "JvScrpt s fn"

removeVowels("apple banana orange");
// "ppl bnn rng"
