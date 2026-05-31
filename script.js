

function test(arr) {
    const freq = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    for (let key in freq) {
        if (freq[key] < 2) {
            delete freq[key];
        }
    }
    console.log(freq);
    return freq;
}




test([1, 2, 2, 3, 4, 5]);
// 15

test(["apple", "banana", "apple", "orange", "banana"]);
// 11

test([true, true, false, true]);
// 0

