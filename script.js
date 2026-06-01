

function test(str) {
    const result = str.trim().split(/\s+/).reduce((result, item) => {
        const len = item.length.toString();
        if(!result[len]) result[len] = [];
        if(!result[len].includes(item)) result[len].push(item);
        return result
    },{})

    return  result
}




// test([1, 100, 2, 2, 3, 4, 5]);

//
// test(["apple", "banana", "apple", "orange", "banana"]);

//
// test([true, true, false, true]);

console.log(test(" hello world hello  щ щ щ зз  зз z  z z  "));
// // ["level", "madam", "noon", "wow"]
//
console.log(test("apple banana orange banana з з з з ззз з"));
// // []
//
console.log(test("JavaScript is fun fun fun"));
// // ["racecar", "anna", "civic", "kayak"]

