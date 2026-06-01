
const  container =  document.querySelector('.container')
let tabCount = 1;
let autostart = setInterval(()=>start(), 3000)

function start() {
    (tabCount < container.querySelectorAll('.btn').length) ? tabCount++ : tabCount = 1;
    test(tabCount)
}

container.addEventListener('mousedown', (e)=> {
    const count = +e.target.getAttribute('data-attr')
    test(count);
    tabCount = count;
})
container.addEventListener('mouseenter', ()=> clearInterval(autostart))
container.addEventListener('mouseleave', ()=> autostart = setInterval(()=>start(), 3000))
function test(attr = 1) {
    if (!attr) return;
    const str = String(attr);
    const buttons = container.querySelectorAll('.btn');
    const tabs = container.querySelectorAll('.tab');

    for (let i = 0; i < buttons.length; i++) {
        tabs[i].classList.toggle('active', str === tabs[i].getAttribute('data-attr'));
        buttons[i].classList.toggle('active', str === buttons[i].getAttribute('data-attr'));
    }
}
// init
test()

