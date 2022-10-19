let button1 = document.querySelector('.modal1');
let button2 = document.querySelector('.modal2');

let close1 = document.querySelector('.close1');
let close2 = document.querySelector('.close2');


let modalWindow1 = document.querySelector('#exampleModal1');
let modalWindow2 = document.querySelector('#exampleModal2');


button1.addEventListener('click', ()=>{
    modalWindow1.classList.toggle('show');
    if (modalWindow1.classList.contains('show')){
        modalWindow1.style.display = 'block';
    } else {
        modalWindow1.style.display = 'none';
    }
})
close1.addEventListener('click', ()=>{
    modalWindow1.classList.toggle('show');
    if (modalWindow1.classList.contains('show')){
        modalWindow1.style.display = 'block';
    } else {
        modalWindow1.style.display = 'none';
    }
})

button2.addEventListener('click', ()=>{
    modalWindow2.classList.toggle('show');
    if (modalWindow2.classList.contains('show')){
        modalWindow2.style.display = 'block';
    } else {
        modalWindow2.style.display = 'none';
    }
})

close2.addEventListener('click', ()=>{
    modalWindow2.classList.toggle('show');
    if (modalWindow2.classList.contains('show')){
        modalWindow2.style.display = 'block';
    } else {
        modalWindow2.style.display = 'none';
    }
})

