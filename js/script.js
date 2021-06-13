// import Swiper from "swiper";


function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .header-menu, .navv-wrapper').toggleClass('activebur');
    $('body').toggleClass('lock');
  })
  $('.menu-a').click(function (event) {
    $('.burger, .header-menu, .navv-wrapper').removeClass('activebur');
    $('body').removeClass('lock');
  })
});

$('.my-dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.my-dropdown-menu').delay(150).slideToggle(300);
});
$('.my-dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.my-dropdown-menu').delay(150).slideUp(300);
});
$('.my-dropdown .my-dropdown-menu li').click(function () {
  $(this).parents('.my-dropdown').find('span').text($(this).text());
  $(this).parents('.my-dropdown').find('input').attr('value', $(this).attr('id'));
});
$('.my-dropdown-mob').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.my-dropdown-menu').toggleClass('active');
});
$('.my-dropdown-mob').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.my-dropdown-menu').removeClass('active');
});
$('.my-dropdown-mob .my-dropdown-menu li').click(function () {
  $(this).parents('.my-dropdown-mob').find('span').text($(this).text());
  $(this).parents('.my-dropdown-mob').find('input').attr('value', $(this).attr('id'));
});


new Swiper('.swiper-bg', {
  // Optional parameters
  effect: 'fade',
  // If we need pagination
  allowTouchMove: false,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



const swiper = new Swiper('.modal-swiper', {
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  

});


$(document).ready(function () {
  var item = TranslateGetCode();
  item = item.charAt(0).toUpperCase() + item.slice(1);
  document.getElementById('c_lang').innerHTML = item;
  document.getElementById('c_lang-mob').innerHTML = item;
  console.log(item);
  if (item == "Ru") {
    document.getElementById("thximg").src="/img/Group1291.png";
  } else {
    document.getElementById("thximg").src="/img/image1_2.png";
  }
});

function validate_p1() {
    var name = document.getElementById('FormInputName').value;
    var name_reg = /^([A-ZА-ЯЁ][a-zа-яё]+\s)+([A-ZА-ЯЁ][a-zа-яё]+)$/g;
    var tel = document.getElementById('FormInputTel').value;
    var mail = document.getElementById('FormInputEmail').value;
    var mail_reg = /^([a-z.0-9]+)+([@])+([a-z]+)([.]+)([a-z]+)$/g;
    var tel_reg = /^([+])+([0-9]{7,15})$/g;
    var text = document.getElementById('FormInputQ');
    var output = false;

    if (name.match(name_reg) && tel.match(tel_reg) && mail.match(mail_reg) && is_valid(text)) {
      output = true;
    } 
    return output;
}
function is_valid(input) {
  var res = false;
  if (input && input.value.trim()) {
      res = true
  } else {
      input.focus();
  }
  return res;
}