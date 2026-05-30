function pigIt(str){
    return  str
        .split(' ')
        .map(item =>
            /^[a-zA-Z]+$/.test(item)
                ? item.slice(1) + item[0] + 'ay'
                : item
        )
        .join(' ');
}

console.log(pigIt('olla hi, 55'));