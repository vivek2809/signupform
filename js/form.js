
// form validation using java script 

// function validateForm() {

//     // for username validation

    // let username = document.forms['myForm']["username"].value;
    // var userRequired = /[0-9]/;

    // if (username == "") {
    //     document.getElementById('formerror').innerHTML = "**Fill the details..";
    //     return false;
    // }else if(username.length < 5) {
    //     document.getElementById('formerror').innerHTML = "**char between 5 to 10 char";
    //     return false;
    // }else if(userRequired.test(username) != true){
    //     document.getElementById('formerror').innerHTML = "**username must have alphabet and number ";
    //     return false;
    // }

    // for password velidation 

    // let password = document.forms['myForm']['pwd'].value;
    // var passRequired = /[A-Z][a-z]/;

    // if(password.length < 5 || password.length >10){
    //     document.getElementById('passerror').innerHTML = "**password length between 5 to 10 ";
    //     return false;
    // }
    // else if(passRequired.test(password) == false){
    //     document.getElementById('passerror').innerHTML = "**password must have capital letter and small letter ";
    //     return false;
    // }
// }


// form validation using java script and Bootstrap 


(function(){
    'use strict'
    const forms = document.querySelectorAll(".requires-validation");

    Array.from(forms)
        .forEach( function(form){
            form.addEventListener('submit',function(event){
                if(!form.checkValidity()){
                    event.preventDefault()
                    event.stopPropagation()
                }

                // for username validation

                let username = document.forms['myForm']["username"].value;
                var userRequired = /[0-9]/;

                if (username == "") {
                    document.getElementById('formerror').innerHTML = "**Fill the details..";
                } else if (username.length < 5) {
                    document.getElementById('formerror').innerHTML = "**char between 5 to 10 char";
                } else if (userRequired.test(username) != true) {
                    document.getElementById('formerror').innerHTML = "**username must have alphabet and number ";
                }

                // for password 
                
                let password = document.forms['myForm']['pwd'].value;
                var passRequired = /[A-Z][a-z]/;

                if (password.length < 5 || password.length > 10) {
                    document.getElementById('passerror').innerHTML = "**password length between 5 to 10 ";
                }
                else if (passRequired.test(password) == false) {
                    document.getElementById('passerror').innerHTML = "**password must have capital letter and small letter ";
                }


                form.classList.add('was-validated');
            },false)
        })
})()