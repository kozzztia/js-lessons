
const  container =  document.querySelector('.container')

container.addEventListener('mousedown', (e)=> test(e.target.getAttribute('data-attr').toString()))
function test(attr = '1') {
    if (!attr) return;
    const buttons = container.querySelectorAll('.btn');
    const tabs = container.querySelectorAll('.tab');

    for (let i = 0; i < buttons.length; i++) {
        tabs[i].classList.toggle('active', attr === tabs[i].getAttribute('data-attr'));
        buttons[i].classList.toggle('active', attr === buttons[i].getAttribute('data-attr'));
    }
}
// init
test()
