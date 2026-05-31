
// function test(array) {
//     let result = []
//
//     array.forEach(element => {
//         if (!result.includes(element)) {
//             result.push(element)
//         }
//     })
//     console.log(result)
// }

function test(arr) {
    console.log([...new Set(arr)]);
}


test([1, 2, 2, 3, 4, 4, 5]);

test(["apple", "banana", "apple", "orange", "banana"]);

test([true, true, false, true]);