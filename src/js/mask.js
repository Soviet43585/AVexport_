import IMask from 'imask';
window.addEventListener("DOMContentLoaded", () => {

    // Считываем поле ввода
    let phoneInput = document.querySelector("#phone");

    // Создаем маску в инпуте
    const phoneMask = new IMask(phoneInput, {
        mask: "+{7}(000)000-00-00",
    });
});