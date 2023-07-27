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
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
