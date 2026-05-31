

function test(str) {
    const result = str.split('').map((char, index) => index % 2 ? char.toLowerCase() : char.toUpperCase()).join('');

    console.log(result);
    return result;
}




// test([1, 2, 2, 3, 4, 5]);

//
// test(["apple", "banana", "apple", "orange", "banana"]);

//
// test([true, true, false, true]);

test("hello world");
// "HeLlO WoRlD"
test
test("JavaScript is fun");
// "JaVaScRiPt Is FuN"

test("apple banana orange");
// "ApPlE BaNaNa OrAnGe"

