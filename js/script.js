$(document).ready(function () {
    $('.form__select').select2();

    $('.form__item_phone').mask("8(999) 999-9999");
});

const textarea = document.querySelector('textarea');
const formInput = document.querySelectorAll('.form__item_wrapper');
const formInputLbl = document.querySelectorAll('.form__item_lbl');
const inputFile = document.querySelectorAll('.input__file');
const tabs = document.querySelectorAll('.tabs__item');
const tabText = document.querySelectorAll('.tabs__item_subtitle');
const opens = document.querySelectorAll('.tabs__item_arrow img');
const tabCount = document.querySelectorAll('.tabs__item_counter');
const form = document.querySelector('.main__flex_el_form');
const inputPhone = document.querySelector('.form__item_phone');
const card = document.querySelector('.main__card_block');
const cardLeft = document.querySelector('.card__img_before');
const cardRight = document.querySelector('.card__img_after');


let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let phoneColor = rootStyles.getPropertyValue('--phone-color');

//движение карточки без плагина параллакса

cardLeft.addEventListener('mouseover', function() {
    card.classList.add('card__left');
});
cardLeft.addEventListener('mouseout', function() {
    card.classList.remove('card__left');
});

cardRight.addEventListener('mouseover', function() {
    card.classList.add('card__right');
});
cardRight.addEventListener('mouseout', function() {
    card.classList.remove('card__right');
});


//появление лэйбла по клику у инпутов формы

formInput.forEach(function (e) {
    e.addEventListener('click', function () {
        formInputLbl.forEach(function (el) {
            if (e.contains(el)) {
                el.classList.add('hidden');
            }
        });
    });
});

//увеличение текстового поля формы

textarea.addEventListener('keyup', function () {
    if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + "px";
    }
});

//работа табов

tabs.forEach(function (e) {
    e.addEventListener('click', function () {
        tabCount.forEach(function (i) {
            tabText.forEach(function (el) {
                opens.forEach(function (elem) {
                    if (e.contains(el)) {
                        el.classList.toggle('none');
                        el.classList.toggle('fadeInDown');
                        if (e.contains(elem)) {
                            elem.classList.toggle('open');
                            if(e.contains(i)){
                                i.classList.toggle('active');
                            }
                        }
                    }
                });
            });
        });
    });
});

//валидация инпута телефона

form.addEventListener('keyup', function() {
    let phone = inputPhone.value;
    if(phone.length == 0){
        inputPhone.classList.add('input__empty');
        root.style.setProperty('--phone-color', '#EB5757');
    }else{
        inputPhone.classList.remove('input__empty');
    }
});

///////// Кнопка «Прикрепить файл» /////////// 

inputFile.forEach(function (e) {
    let textSelector = document.querySelector('.input__file_btn_text');
    let fileList;
    e.addEventListener('change', function (el) {
        fileList = [];
        for (let i = 0; i < e.files.length; i++) {
            fileList.push(e.files[i]);
        }
        fileList.forEach(file => {
            uploadFile(file);
        });
    });
    //Проверяем размер файлов и выводим название 
    const uploadFile = (file) => {
        if (file && file.length > 1) {
            if (file.length <= 4) {
                textSelector.textContent = `Выбрано ${file.length} файла`;
            }
            if (file.length > 4) {
                textSelector.textContent = `Выбрано ${file.length} файлов`;
            }
        } else {
            textSelector.textContent = file.name;
        }
    };

});

//анимация

// let sceneCard = document.getElementById('scene');
//     let parallaxInstance = new Parallax(sceneCard, {
//         hoverOnly: true,
//     relativeInput: true
// });

