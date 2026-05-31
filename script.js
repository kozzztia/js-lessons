


function test(str) {
    return str.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
}



console.log(test("hello world"));
console.log(test("JavaScript is fun"));
console.log(test("apple banana orange"));
