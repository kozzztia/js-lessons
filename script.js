

function test(str) {
    const counts = str.trim().split(/\s+/).reduce((acc, word) => {
        acc[word] = (acc[word] || 0) +1;
        return acc;
    },{})

    const result = Object.keys(counts).reduce((acc, word) => {
        return counts[word] > (counts[acc] || 0) ? word : acc;
    }, '')


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

