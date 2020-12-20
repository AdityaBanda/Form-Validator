const form = document.getElementById("form");
const username= document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check email is valid

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input) 
    } else {
        showError(input, "Email is not valid");
    }
}


// check passwords

function isPasswordMatching(input1, input2){
   if ( input1.value === input2.value){
    showSuccess(input2);
   } else {
    showError(input2, "password isn't matching");
   }
}
//check required fields

function checkRequired(inputArr){

    inputArr.forEach(function(input){
      
        if(input.value.trim() === ''){
            showError(input, input.id + ' is required');
        } else{
            showSuccess(input);
        }

    });
}

// check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, input.id + " must be atleast " + min + " characters");
    }  else if ( input.value.length > max) {
        showError(input, input.id + " must be less than" + max + " characters");
    } else {
        showSuccess(input);
    }
}

// event listeners
form.addEventListener("submit",function(e){
    e.preventDefault();

    checkRequired([username,Email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(Email);
    isPasswordMatching(password,password2);


    
    // if (username.value ===''){
    //     showError(username, "username is required");
    // } else {
    //     showSuccess(username);
    // }
   
    

    // if (Email.value ===''){
    //     showError(Email, "username is required");
    // } else if( !isValidEmail(Email.value)){
    //     showError(Email, "Email is not valid");
    // } else {
    //     showSuccess(Email);
    // }

    // if (password.value ===''){
    //     showError(password, "password is required");
    // } else {
    //     showSuccess(password);
    // }

    // if (password2.value ===''){
    //     showError(password2, "password is required");
    // } else {
    //     showSuccess(password2);
    // }
});
