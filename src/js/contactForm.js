window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".modal__form");

    console.log(form);

    sendContact(form);

    function sendContact(form) {
        

              
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let object = {};
            const formData = new FormData(form),
                  request = new XMLHttpRequest();
            formData.forEach(function(value, key){
                object[key] = value;
            });
            request.open("POST", "http://localhost:8080/api/contacts/post");
            request.setRequestHeader("Content-type", "application/json");
            request.send(JSON.stringify(object));
        });

    }


});