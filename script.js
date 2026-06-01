
const  container =  document.getElementById('container')

container.addEventListener('mousedown', (e)=> test(e.target))
function test(target) {
    const buttons = container.querySelectorAll('button')

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn === target);
    })
    console.log(target.textContent)
}





// console.log(isValidBrackets("function test() { return [1,2,3]; }")); // true
// console.log(isValidBrackets("([{}])")); // true
// console.log(isValidBrackets("([)]"));   // false
// console.log(isValidBrackets(")("));     // false
