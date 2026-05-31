

function test(str) {
    const letters = ['a', 'e', 'i', 'o', 'u']

    // const result = str.split('').reduce((count, el) => {
    //     if(letters.includes(el))  count += 1;
    //     return count;
    // },0)

    const  result = str.split('').filter(char => letters.includes(char)).length;
    console.log(result);
    return result;
}




// test([1, 100, 2, 2, 3, 4, 5]);

//
// test(["apple", "banana", "apple", "orange", "banana"]);

//
// test([true, true, false, true]);

test("level madam test noon wow");
// // ["level", "madam", "noon", "wow"]
//
test("JavaScript is cool");
// // []
//
test("racecar anna civic kayak");
// // ["racecar", "anna", "civic", "kayak"]

