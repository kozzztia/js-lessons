
const container = document.querySelector('.container');
const search = container.querySelector('.search');
const def = container.querySelector('#default');
const deb = container.querySelector('#debounce');
const thr = container.querySelector('#throttle');



// use
search.addEventListener('input', e => {
    updateText(def, e.target.value);
    updateDebText(deb, e.target.value);

})

// function

const updateText = (el, text) =>{
    el.textContent = text;
    console.log(text);
}

const updateDebText = debounce( updateText, 500)

// const updateDebText = debounce( (el, text)=>updateText(el, text), 500)


function debounce(callBack, delay = 1000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            // callBack.apply(null,args);
            callBack(...args);
        }, delay);
    };
}
