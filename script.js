

function test(str) {
    const counts = str.trim().split(/\s+/).reduce((acc, word) => {
        acc[word] = (acc[word] || 0) +1;
        return acc;
    },{})

    return  Object.entries(counts).reduce((acc, word) =>  acc[1] > (word[1] || 0) ? acc : word, {})[0]
}




// test([1, 100, 2, 2, 3, 4, 5]);

//
// test(["apple", "banana", "apple", "orange", "banana"]);

//
// test([true, true, false, true]);

console.log(test("     hello    world hello"));
// // ["level", "madam", "noon", "wow"]
//
console.log(test("apple banana orange banana"));
// // []
//
console.log(test("JavaScript is fun fun fun"));
// // ["racecar", "anna", "civic", "kayak"]

