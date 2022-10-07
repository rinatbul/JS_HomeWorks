const companies =  [{id: 1, name: 'IT Step', description: 'JS courses'},
                    {id: 2, name: 'Google', description: 'Search engine'},
                    {id: 3, name: 'Facebook', description: 'Social network'},];

// Получаем элементы в переменные.
let btns = document.querySelectorAll('button');
let result = document.querySelector('.result');
// Создаем функцию рэндер
let render = (name) =>{
    let companyId = companies.find(company => company.name === name).description;
    result.innerHTML = companyId;
}
// Для каждого элемента <button> включаем события на нажатие
btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        render(btn.innerHTML);
    });
})
   



// Альтернативный метод решения.

// Добавляем в переменные каждую кнопку.
// let itstep = document.querySelector('.itstep');
// let google = document.querySelector('.google');
// let facebook = document.querySelector('.facebook');

//На каждую кнопку подключаем событие.

// itstep.addEventListener('click', ()=>{
//     let searchTerm = 'JS courses';
//     let companyId = companies.find(company => company.description === searchTerm).description;
//     result.innerHTML = companyId;
// })
// google.addEventListener('click', ()=>{
//     let searchTerm = 'search engine';
//     let companyId = companies.find(company => company.description === searchTerm).description;
//     result.innerHTML = companyId;
// })
// facebook.addEventListener('click', ()=>{
//     let searchTerm = 'social network';
//     let companyId = companies.find(company => company.description === searchTerm).description;
//     result.innerHTML = companyId;
// })