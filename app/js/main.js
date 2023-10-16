// const menuBtn = document.querySelector('.nav__burgerBtn');
// const menuOpen = document.querySelector('.nav__burger');


// menuBtn.addEventListener('click' , () => {
//     menuOpen.classList.toggle('burger--open');
// });
const menuBtn = document.querySelector('.nav__burgerBtn');
const menuOpen = document.querySelector('.nav__burger');
const closeBtn = document.querySelector('.nav__burgerCloseBtn');

menuBtn.addEventListener('click', () => {
  menuOpen.classList.toggle('burger--open');
});

closeBtn.addEventListener('click', () => {
  menuOpen.classList.remove('burger--open');
});


const menuItems = document.querySelectorAll('.nav__burger--link');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuOpen.classList.remove('burger--open');
  });
});

closeBtn.addEventListener('click', () => {
  menuOpen.classList.remove('burger--open');
});


const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab");
        tabContents.forEach(content => {
            content.classList.remove("active");
        });
        document.getElementById(tabId).classList.add("active");
    });
});



//переключатель для табов 
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Удаление класса .active у всех кнопок и контентов
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Добавление класса .active к текущей кнопке и соответствующему контенту
        button.classList.add("active");
        const targetTab = button.getAttribute("data-tab");
        const targetContent = document.getElementById(targetTab);
        targetContent.classList.add("active");
      });
    });
  });



// Получаем элементы хедера и навигации
var header = document.querySelector('header');
var stickyNav = document.querySelector('nav');

// Получаем высоту хедера
var headerHeight = header.offsetHeight;

// Функция, которая будет прикреплять навигацию после хедера
function stickyNavigation() {
  if (window.pageYOffset > headerHeight) {
    stickyNav.classList.add('sticky');
  } else {
    stickyNav.classList.remove('sticky');
  }
}

// Добавляем прослушку события прокрутки
window.addEventListener('scroll', stickyNavigation);









jQuery(document).ready(function () {
     
  $(".phone").mask("+380 (99) 999-99-99"); 
 

 jQuery('.send-form').click( function() {
   var form = jQuery(this).closest('form');
   
   if ( form.valid() ) {
     form.css('opacity','.5');
     var actUrl = form.attr('action');

     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function(data) {
        //  form.html(data);
        //  form.css('opacity','1');
                 form.find('.status').html('форма отправлена успешно');
                //  $('#myModal').modal('show') // для бутстрапа
       },
       error:	 function() {
            form.find('.status').html('серверная ошибка');
       }
     });
   }
 });


});

