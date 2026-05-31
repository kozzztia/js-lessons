
function test(str) {
    str = str.toLowerCase();
    let clean = '';

    for (let i = 0; i < str.length; i++) {
        // if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9')) {
        //     clean += str[i];
        // }
        if (/[a-z0-9]/.test(str[i])) {
            clean += str[i];
        }
    }

    let reversed = '';
    for (let i = clean.length - 1; i >= 0; i--) {
        reversed += clean[i];
    }

    return clean === reversed;
}


console.log(test('ollo'));