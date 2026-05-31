

// function test(str) {
//
//     return str.split('').reduce((acc, char) => {
//         if (acc[acc.length - 1] !== char) acc += char;
//         return acc;
//     });
// }

function removeConsecutiveDuplicates(str) {
    const  arr = str.split('');
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(''))
    return result.join('');
}



removeConsecutiveDuplicates("heeellooo");

removeConsecutiveDuplicates("aaabbbccc");

removeConsecutiveDuplicates("JavaScript");

removeConsecutiveDuplicates("112233");

