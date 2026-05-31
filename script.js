

function test(arr) {

    const result = arr.filter((num) => num % 2 === 0).map((num) =>  num * num)

    console.log(result);
    return result;
}




test([1, 2, 2, 3, 4, 5]);

//
// test(["apple", "banana", "apple", "orange", "banana"]);

//
// test([true, true, false, true]);

// test("level madam test noon wow");
// // ["level", "madam", "noon", "wow"]
//
// test("JavaScript is cool");
// // []
//
// test("racecar anna civic kayak");
// // ["racecar", "anna", "civic", "kayak"]

