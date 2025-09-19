// document.getElementsByClassName("main-title")[0].style.color = "red";
// document.getElementById("main-action-button").onclick = function()  {
// document.getElementById("products").scrollIntoView( {behavior: "smooth"});
// }

let links = document.querySelectorAll(".header-item > a");
for (let i= 0; i < links.length; i++){
    links[i].onclick=function() {// не понимаю в чем тут ошибка
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
    }
}



const form = document.querySelector('.order-form-inputs');
const fields = form.querySelectorAll('.field');
let guestname = document.getElementById("guest-name");
let phone = document.getElementById("phone");
let question = document.getElementById("question");
fields.forEach((element) => {
  element.addEventListener('input', () => {
    if (element.parentElement.classList.contains('error')) {
      element.parentElement.classList.remove('error');
    }
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let hasError = false;

  fields.forEach((element) => {
    if (!element.value) {
      element.parentElement.classList.add('error');
      hasError = true;
    } else {
      element.parentElement.classList.remove('error');
    }
  });

  if (!hasError) {
    fields.forEach((element) => {
      element.value = '';
    });
    alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
  }
});


const mobileMenuBtn = document.getElementById("header-burger");
const mobileMenu = document.querySelector('.mobile-menu');
console.log(mobileMenu);
mobileMenuBtn.addEventListener('click', ()=>{
    mobileMenuBtn.classList.toggle('open-menu');
    mobileMenu.classList.toggle('active');
});
const toggler = document.querySelector('.header-burger')
const menuMob = document.querySelector('.mobile-menu')
menuMob.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggler.classList.remove('open-menu');
        menuMob.classList.remove('active');
    }
});


const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
  
  function languageChange() {
    let btn = document.querySelectorAll('.current-language');
    let currentLanguage = document.getElementById('change-language');
    
    // Развешиваем событие клика на кнопки
    for(let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function() {
        // При клике на кнопку записываем ее значение в инпут
        
        currentLanguage.innerText = this.innerText;
        // let linkLang = document.querySelector('.language-variants');
        // let elLang = document.createElement('a');
        
        // // create new li element
        // if (currentLanguage != "RU" ) {
        // elLang.textContent = 'RU';

        // // add it to the ul element
        // linkLang.prepend(elLang);
      

        // console.log(elLang);}
        // else{
        //   linkLang.remove(elLang);
          
        // }
      });
    }
  
  }
  languageChange();
}
document.addEventListener('DOMContentLoaded', function () {
  // конечная дата
  const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  
  keyboard: true,
  slidesPerView: 1,

  spaceBetween: 10,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',  
    disabledClass: 'custom-disabled-button'
  },
  pagination: {
    clickable: true,
    el:  ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
      
    },
    840: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
if(typeof(element) != 'undefined' && element != null){ 
  swiperEl.initialize();
}