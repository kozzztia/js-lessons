const searchInput = document.querySelector('.search');

searchInput.addEventListener(
    'input',
    debounce((e) => {
        console.log('value', e.target.value);
    }, 500)
);

function debounce(handler, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            handler.apply(this, args);
        }, delay);
    };
}