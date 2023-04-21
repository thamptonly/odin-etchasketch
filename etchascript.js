const container = document.querySelector('#container');

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let j = prompt('How many squares on a side?')
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    generate(j);
});

function generate(j) {
    for (let i = 0; i < (j**2); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        let k = 500/j;
        square.style.width = `${k}px`;
        square.style.height = `${k}px`;
    
        square.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        });
    };
};