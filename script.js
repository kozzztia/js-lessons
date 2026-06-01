

function test(str) {
    const result = str.trim().split(/\s+/).reduce((result, item) => {
        const len = item.length;
        if(!result[len]) result[len] = [];
        result[len].push(item);
        return result
    },{})

    return  result
}




// test([1, 100, 2, 2, 3, 4, 5]);

//
// test(["apple", "banana", "apple", "orange", "banana"]);

//
// test([true, true, false, true]);

console.log(test(" hello world hello"));
// // ["level", "madam", "noon", "wow"]
//
console.log(test("apple banana orange banana"));
// // []
//
console.log(test("JavaScript is fun fun fun"));
// // ["racecar", "anna", "civic", "kayak"]

