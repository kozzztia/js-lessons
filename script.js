

function test(arr) {

    // const result = {}
    // arr.forEach((item) => {
    //     if(!result[item]) result[item] = 0
    //     result[item]++
    // })

    const result = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) +1;
        return acc;
    },{})


    console.log(result);
    return  result;
}




test([1, 2, 3, 4, 5]);
// 15

test(["apple", "banana", "apple", "orange", "banana"]);
// 11

test([true, true, false, true]);
// 0

