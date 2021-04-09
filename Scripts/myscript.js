//переменная:кнопка аутенфикации
var authentication_buton = document.getElementsByClassName("authentication_buton")[0];
//переменная: модальное окно аутенфикации
var modal_window = document.getElementsByClassName("modal")[0];
//переменная: элемент закрытия модального окна
var form_header_сlose_element = document.getElementsByClassName("form_header_сlose_element")[0];
//выбор из выпадающего списка регистрации позиции "Соискателя"
var jobseeker = document.getElementById("jobseeker");
//переменная: модальное окно регистрации "Соискателя"
var modal_jobseeker = document.getElementsByClassName("modal_authtorization_joobseeker")[0];
//переменная: элемент закрытия модального окна регистрации "Сосикателя"
var header_сlose_element = document.getElementById("header_сlose_element_jobseeker");
//выбор из выпадающего списка регистрации позиции "Работодателя"
var employer = document.getElementById("employer");
//переменная: модальное окно регистрации "Работодателя"
var modal_employer = document.getElementsByClassName("modal_authtorization_employer")[0];
//переменная: элемент закрытия модального окна регистрации "Работодателя"
var header_сlose_element_employer = document.getElementById("header_сlose_element_employer");
//переменная: текст в поле отображения аутенфицированного пользователя
var Login_text = document.getElementById("Login_text");
// окно, в котором отображается текстовое поле аутенфицированного пользователя
var login_info = document.getElementsByClassName("login_info")[0];
//кнопка войти в форме аутенфикации
var auth_buton = document.getElementsByClassName("auth_submit")[0];
// контейнер, в кором хранятся кнопки ВХОД и РЕГИСТРАЦИЯ
var authentication_and_authtorization_container = document.getElementsByClassName("authentication_and_authtorization")[0];
//ВАЛИДАЦИЯ ФОРМ РЕГИСТРАЦИИ СОИСКАТЕЛЕЙ И РАБОТОДАТЕЛЕЙ
// переменная принимающая форму регистрации Соискателя
var registration_jobsseker = document.joobseeker_form.LastName;
//кнопка отправки формы регистрации соискателя
var joobseeker_form_post = document.getElementById("authtorization_joobseeker_submit");
// поле ввода Фамилии соискателя
var joobseeker_last_name = document.joobseeker_form.LastName;
// поле ввода Имени соискателя
var joobseeker_first_name = document.joobseeker_form.FirstName;
// поле ввода почты соискателя
var joobseeker_mail = document.joobseeker_form.Email;
// поле ввода пароля соискателя
var joobseeker_password = document.joobseeker_form.Password;

//ВАЛИДАЦИЯ ПОЛЯ-ФАМИЛИЯ СОИСКАТЕЛЯ
//функция-валидатор, для строки в поле Фамилии Соискателя
function change_joobseeker_last_name(event) {
    // получаем значение фамилии Соискателя и обрезаем все пробелы
    var text = joobseeker_last_name.value.trim();
    // строка для отображения ошибок валидации Фамилии Соискателя
    var errorBlock = document.getElementsByClassName("last_name_validate_string")[0];
    // определяем регулярное выражение для валидации введённой Фамилии Соискателя
    var reg_last_name = /^[А-Я]{1}[а-я]{2,16}$/;
    // если потери фокуса на поле Фамилия Соискателя фамилия не будет отвечать условию реглярного выражения то граница станет красной и появится всплывающее окно, в котором будет описано каким условиям должна соответствовать фамилия
    if (reg_last_name.test(text) !== true && text != "") {
        joobseeker_last_name.style.borderColor = "red";
        errorBlock.textContent = "";
        joobseeker_last_name.setCustomValidity("Фамилия дожна вводиться киррилицей с заглавной буквы и содержать от 2 до 16 символов");
        joobseeker_last_name.reportValidity();
        errorBlock.textContent = "";
    }
    // если фамилия соответвествует всем условиям, то граница поля будет синей
    else if (reg_last_name.test(text) == true && text != "") {
        joobseeker_last_name.style.borderColor = "blue";
        errorBlock.textContent = "";
        joobseeker_last_name.setCustomValidity("");
    }
    else if (text == "") {
        joobseeker_last_name.style.borderColor = "red";
        errorBlock.textContent = "Поле должно быть заполнено";
        joobseeker_last_name.setCustomValidity("");
    }
}

//ВАЛИДАЦИЯ ПОЛЯ-ИМЕНИ СОИСКАТЕЛЯ
//функция-валидатор, для строки в поле Имени Соискателя
function change_joobseeker_first_name(event) {
    // получаем его значение и обрезаем все пробелы
    var text = joobseeker_first_name.value.trim();
    //поле ошибки ввода Имени  соискателя
    var errorBlock = document.getElementsByClassName("first_name_validate_string")[0];
    // определяем регулярное выражение для валидации введённого Имени Соискателя
    var reg_first_name = /^[А-Я]{1}[а-я]{2,10}$/;
    // если потери фокуса на поле Имя Соискателя имя не будет отвечать условию реглярного выражения то граница станет красной и появится всплывающее окно, в котором будет описано каким условиям должно соответствовать имя
    if (reg_first_name.test(text) !== true && text != "") {
        joobseeker_first_name.style.borderColor = "red";
        errorBlock.textContent = "";
        joobseeker_first_name.setCustomValidity("Имя дожно вводиться киррилицей с заглавной буквы и содержать от 2 до 10 символов");
        joobseeker_first_name.reportValidity();
        errorBlock.textContent = "";
    }
    // если фамилия соответвествует всем условиям, то граница поля будет синей
    else if (reg_first_name.test(text) == true && text != "") {
        joobseeker_first_name.style.borderColor = "blue";
        errorBlock.textContent = "";
        joobseeker_first_name.setCustomValidity("");
    }
    else if (text == "") {
        joobseeker_first_name.style.borderColor = "red";
        errorBlock.textContent = "Поле должно быть заполнено";
        joobseeker_first_name.setCustomValidity("");
    }
}

//ВАЛИДАЦИЯ ПОЛЯ-ПОЧТА СОИСКАТЕЛЯ
//функция-валидатор, для строки в поле Почта Соискателя
function change_joobseeker_mail(event) {
    // получаем его значение и обрезаем все пробелы
    var text = joobseeker_mail.value.trim();
    //поле ошибки ввода Почты  соискателя
    var errorBlock = document.getElementsByClassName("mail_validate_string")[0];
    // определяем регулярное выражение для валидации введённой Почты Соискателя
    var reg_mail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // если после потери фокуса на поле почта Соискателя почта не будет отвечать условию реглярного выражения то граница станет красной и появится всплывающее окно, в котором будет описано каким условиям должно соответствовать почта
    if (reg_mail.test(text) !== true && text != "") {
        joobseeker_mail.style.borderColor = "red";
        errorBlock.textContent = "";
        joobseeker_mail.setCustomValidity("Почта должна вводиться латиницей в формате:login@mail.ru/com/рф");
        joobseeker_mail.reportValidity();
        errorBlock.textContent = "";
    }
    // если почта соответвествует всем условиям, то граница поля будет синей
    else if (reg_mail.test(text) == true && text != "") {
        joobseeker_mail.style.borderColor = "blue";
        errorBlock.textContent = "";
        joobseeker_mail.setCustomValidity("");
    }
    else if (text == "") {
        joobseeker_mail.style.borderColor = "red";
        errorBlock.textContent = "Поле должно быть заполнено";
        joobseeker_mail.setCustomValidity("");
    }
}

//ВАЛИДАЦИЯ ПОЛЯ-ПАРОЛЬ СОИСКАТЕЛЯ
//функция-валидатор, для строки в поле Пароль Соискателя
function change_joobseeker_password(event) {
    // получаем его значение и обрезаем все пробелы
    var text = joobseeker_password.value.trim();
    //поле ошибки ввода Пароля  соискателя
    var errorBlock = document.getElementsByClassName("password_validate_string")[0];
    // определяем регулярное выражение для валидации введённого Пароля Соискателя
    var reg_password = /^[0-9 A-Z a-z]{5,15}$/;
    // если после потери фокуса на поле пароль Соискателя почта не будет отвечать условию реглярного выражения то граница станет красной и появится всплывающее окно, в котором будет описано каким условиям должно соответствовать почта
    if (reg_password.test(text) !== true && text != "") {
        joobseeker_password.style.borderColor = "red";
        errorBlock.textContent = "";
        joobseeker_password.setCustomValidity("Пароль должен содержать цифры и латинские буквы от 5 до 15 символов");
        joobseeker_password.reportValidity();
        errorBlock.textContent = "";
    }
    // если пароль соответвествует всем условиям, то граница поля будет синей
    else if (reg_password.test(text) == true && text != "") {
        joobseeker_password.style.borderColor = "blue";
        errorBlock.textContent = "";
        joobseeker_password.setCustomValidity("");
    }
    else if (text == "") {
        joobseeker_password.style.borderColor = "red";
        errorBlock.textContent = "Поле должно быть заполнено";
        joobseeker_password.setCustomValidity("");
    }
}


//ВАЛИДАЦИЯ ПРИ НАЖАТИИ КНОПКИ РЕГИСТРАЦИЯ
//функция-валидатор, отслеживающая корректность заполнения формы регистрации Соискателя при попытке отправки формы
function click_joobseeker_post(event) {
    // поле ввода Фамилии соискателя
    var joobseeker_last_name = document.joobseeker_form.LastName;
    // поле ввода Имени соискателя
    var joobseeker_first_name = document.joobseeker_form.FirstName;
    // поле ввода почты соискателя
    var joobseeker_mail = document.joobseeker_form.Email;
    // поле ввода пароля соискателя
    var joobseeker_password = document.joobseeker_form.Password;
    //текст в поле Фамилия соискателя
    var joobseeker_last_name_text = joobseeker_form.LastName.value;
    // текст в поле Имени соискателя
    var joobseeker_first_name_text = joobseeker_form.FirstName.value;
    // текст в поле Почты соискателя
    var joobseeker_mail_text = joobseeker_form.Email.value;
    // текст в поле Пароля соискателя
    var joobseeker_password_text = joobseeker_form.Password.value;
    // текст ошибки кнопки регистрации
    var joobseeker_submit_string = document.getElementsByClassName("submit_validate_string")[0];
    //список цветов границ полей формы
    var border_color_list = [joobseeker_last_name.style.borderColor, joobseeker_first_name.style.borderColor, joobseeker_mail.style.borderColor, joobseeker_password.style.borderColor,];
    // список текстовых значений полей ввода
    var validate_text_list = [joobseeker_last_name_text, joobseeker_first_name_text, joobseeker_mail_text, joobseeker_password_text];

    for (var i = 0; i < validate_text_list.length; i++) {
        if (validate_text_list[i] === "") {
            event.preventDefault();
            joobseeker_submit_string.textContent = "Поля должны быть заполнены";
        }
        else {
            joobseeker_submit_string.textContent = "";
        }
    }

    for (var i = 0; i < border_color_list.length; i++) {
        if (border_color_list[i] == "red") {
            event.preventDefault();
            joobseeker_submit_string.textContent = "Поля заполнены некорректно";
        }
    }
}

//слушатель-валидатор отслеживающий изменение в поле Фамилии Соискателя
joobseeker_last_name.addEventListener("change", change_joobseeker_last_name);
//слушатель-валидатор отслеживающий изменение в поле Имени Соискателя
joobseeker_first_name.addEventListener("change", change_joobseeker_first_name);
//слушатель-валидатор отслеживающий изменение в поле почты Соискателя
joobseeker_mail.addEventListener("change", change_joobseeker_mail);
//слушатель-валидатор отслеживающий изменение в поле пароля Соискателя
joobseeker_password.addEventListener("change", change_joobseeker_password);
//слушатель-валидатор  при попытке отпраить форму
joobseeker_form_post.addEventListener("click", click_joobseeker_post);



//МОДАЛЬНЫЕ ОКНА АВТОРИЗАЦИИ/АУТЕНФИКАЦИИ СОИСКАТЕЛЯ/РАБОТОДАТЕЛЯ
//АУТЕНФИКАЦИЯ
//функция:всплытие модального окна при нажатии кнопки аутенфикации
authentication_buton.onclick = function () {
    modal_window.style.display = "block";
}
//функция:закрытие модального окна при нажатии на элемент закрытия
form_header_сlose_element.onclick = function (event) {
    modal_window.style.display = "none";
}
//функция:закрытие модального окна при клике на область вокруг модального окна
modal_window.onclick = function (event) {
    if (event.target == modal_window) {
        modal_window.style.display = "none";
    }
}
//АВТОРИЗАЦИЯ СОИСКАТЕЛЯ
//функция:всплытие модального окна при при выборе из выпадающего списка позиции"Соискатель"
jobseeker.onclick = function (event) {
    modal_jobseeker.style.display = "block";
}
//функция:закрытие модального окна при нажатии на элемент закрытия
header_сlose_element.onclick = function (event) {
    modal_jobseeker.style.display = "none";
}
//функция:закрытие модального окна при клике на область вокруг модального окна
modal_jobseeker.onclick = function (event) {
    if (event.target == modal_jobseeker) {
        modal_jobseeker.style.display = "none";
    }
}
//АВТОРИЗАЦИЯ РАБОТОДАТЕЛЯ
//функция:всплытие модального окна при при выборе из выпадающего списка позиции"Работодатель"
employer.onclick = function (event) {
    modal_employer.style.display = "block";
}
//функция:закрытие модального окна регистрации "Работодателя"при нажатии на элемент закрытия
header_сlose_element_employer.onclick = function (event) {
    modal_employer.style.display = "none"
};
//функция:закрытие модального окна при клике на область вокруг модального окна
modal_employer.onclick = function (event) {
    if (event.target == modal_employer) {
        modal_employer.style.display = "none";
    }
}

//функция для отображения окна,в котором отображается текстовое поле аутенфицированного пользователя
display_auth_login = function (event) {
    if (Login_text.innerHTML != "") {
        login_info.style.top = "15px";
        authentication_and_authtorization_container.style.top = "-60px";
    }
    else {
        login_info.style.top = "-60px";
        authentication_and_authtorization_container.style.top = "10px";
    }
}
display_auth_login();






