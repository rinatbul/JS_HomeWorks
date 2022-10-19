let loading = document.querySelector('#loading');
let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let countdown = document.querySelector('#countdown');
let currentYear = new Date().getFullYear();
let newYearTime = new Date(`January ${currentYear + 1} 00:00:00`);
let year = document.querySelector('#year');

year.textContent = currentYear + 1;

let updateCount = () =>{
    let currentTime = new Date();
    let diff = newYearTime - currentTime;
    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 ) % 24;
    let m = Math.floor(diff / 1000 / 60 ) % 60;
    let s = Math.floor(diff / 1000 ) % 60;

    days.textContent = d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;

    // console.log(`${d} : ${h} : ${m} : ${s}`);
}

setTimeout(()=>{
    loading.remove();
},2000);

setInterval(updateCount, 1000);
// updateCount();




