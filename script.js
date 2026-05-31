

function test(str) {
    const counts = str.trim().split(/\s+/).reduce((acc, word) => {
        acc[word] = (acc[word] || 0) +1;
        return acc;
    },{})

    const result = Object.entries(counts).reduce((acc, word) => {
        return acc[1] > (word[1] || 0) ? acc : word;
    }, {})[0]


    console.log(result);
    return result
}




// test([1, 100, 2, 2, 3, 4, 5]);

//
// test(["apple", "banana", "apple", "orange", "banana"]);

//
// test([true, true, false, true]);

test("     hello    world hello");
// // ["level", "madam", "noon", "wow"]
//
test("apple banana orange banana");
// // []
//
test("JavaScript is fun fun fun");
// // ["racecar", "anna", "civic", "kayak"]

