let bg = document.getElementById('btn');
let btn_border=document.getElementById('btn')
bg.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
    }

});