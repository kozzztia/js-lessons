

function test(str) {
    // const  result = []
    //
    // str.toLowerCase().split(' ').forEach((word) => {
    //     if(word !== word.split('').reverse().join('')) result.push(word);
    // })

    const  result = str.toLowerCase().split(' ').filter((word) => {
        return word === word.split('').reverse().join('');
    })

    console.log(result);
    return result;
}




// test([1, 2, 2, 3, 4, 5]);

//
// test(["apple", "banana", "apple", "orange", "banana"]);

//
// test([true, true, false, true]);

test("level madam test noon wow");
// ["level", "madam", "noon", "wow"]

test("JavaScript is cool");
// []

test("racecar anna civic kayak");
// ["racecar", "anna", "civic", "kayak"]

