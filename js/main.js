$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});

/**
 * Executes the login api call and sets the response field innerHtml
 */
function executeLogin() {
    var request = new XMLHttpRequest()
    var email = document.getElementById("input-email").value;

    if(email.length <= 0) {
        document.getElementById("login-required-message").className = "required";
        return;
    } else {
        document.getElementById("login-required-message").className = "hide";
    }

    request.open('POST', 'https://clerkvest.com/api/login?mail=' + email, true)
    
    request.onload = function() {

        var data = this.response;
        var responseField = document.getElementById("login-response-message");

        if (request.status >= 200 && request.status < 400) {
            responseField.innerHTML = "Email send successfully. It could happen that our email lands inside of your spam folder."
            responseField.className = "success";
        } else {
            responseField.innerHTML = "Failed to send email. Please contact our support if you continuously getting this error message.";
            responseField.className = "failure";
        }
    }
    
    request.send();
}

/**
 * Executes the quick setup for a company
 */
function executeQuickSetup() {
    var request = new XMLHttpRequest()
    var email = document.getElementById("input-email-quick").value;

    if(email.length <= 0) {
        document.getElementById("create-required-message-quick").className = "required";
        return;
    } else {
        document.getElementById("create-required-message-quick").className = "hide";
    }

    request.open('POST', 'https://clerkvest.com/api/login?mail=' + email, true)
    
    request.onload = function() {

        var data = this.response;
        var responseField = document.getElementById("create-response-message-quick");

        if (request.status >= 200 && request.status < 400) {
            responseField.innerHTML = "Email send successfully. It could happen that our email lands inside of your spam folder."
            responseField.className = "success";
        } else {
            responseField.innerHTML = "Failed to send email. Please contact our support if you continuously getting this error message.";
            responseField.className = "failure";
        }
    }
    
    request.send();
}

/**
 * Executes the full setup for a company
 */
function executeFullSetup() {
    var request = new XMLHttpRequest()
    var email = document.getElementById("input-email").value;

    if(email.length <= 0) {
        document.getElementById("login-required-message").className = "required";
        return;
    } else {
        document.getElementById("login-required-message").className = "hide";
    }

    request.open('POST', 'https://clerkvest.com/api/login?mail=' + email, true)
    
    request.onload = function() {

        var data = this.response;
        var responseField = document.getElementById("login-response-message");

        if (request.status >= 200 && request.status < 400) {
            responseField.innerHTML = "Email send successfully. It could happen that our email lands inside of your spam folder."
            responseField.className = "success";
        } else {
            responseField.innerHTML = "Failed to send email. Please contact our support if you continuously getting this error message.";
            responseField.className = "failure";
        }
    }
    
    request.send();
}