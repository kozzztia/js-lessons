

function test(str) {
    const result = [... new Set(str.trim().split(/\s+/))].join(' ')

    console.log(result);
    return result;
}




// test([1, 100, 2, 2, 3, 4, 5]);

//
// test(["apple", "banana", "apple", "orange", "banana"]);

//
// test([true, true, false, true]);

test("     hello    world hello");
// // ["level", "madam", "noon", "wow"]
//
test("apple banana orange banana apple");
// // []
//
test("JavaScript is fun fun fun");
// // ["racecar", "anna", "civic", "kayak"]

