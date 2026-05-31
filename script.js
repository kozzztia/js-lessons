
function test(str) {
    str = str.toLowerCase().split(/[ \n,;!]/);


    return str.join('') === str.reverse().join('');
}


console.log(test('ollo !')); // true
console.log(test('Hello'));  // false
console.log(test('A man, a plan, a canal: Panama'));