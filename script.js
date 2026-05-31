

function test(arr) {

    const  result = arr.reduce((acc, num) => {
        acc += num;
        return acc;
    }, 0);

    // const  result = arr.reduce((acc, num) => acc += num, 0);

    console.log(result);

    return  result;
}




test([1, 2, 3, 4, 5]);
// 15

test([10, -2, 3]);
// 11

test([]);
// 0

