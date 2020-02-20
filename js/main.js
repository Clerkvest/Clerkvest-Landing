class Company {
    constructor(domain, name, payAmount, payInterval, inviteOnly) {
        this.domain = domain;
        this.name = name;
        this.payAmount = payAmount;
        this.payInterval = payInterval;
        this.inviteOnly = inviteOnly;
        this.image = null;
    }
}

/**
 * Onclick functin to keep the dropdown menu open
 */
$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});

/**
 * Validates an email address
 * @param {email} email 
 * @returns {@code true} if the given email is valid {@code false} otherwise.
 */
function validateEmail(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Executes the login api call and sets the response field innerHtml
 */
function executeLogin() {
    var request = new XMLHttpRequest()
    var email = document.getElementById("input-email").value;

    if(email.length <= 0) {
        document.getElementById("login-required-message").className = "required";
        return;
    } else if(!validateEmail(email)) {
        document.getElementById("login-required-message").className = "required";
        document.getElementById("login-required-message").innerHTML = "E-Mail address not valid"
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
            responseField.innerHTML = "Failed to send email. Please contact our support if you are continuously getting this error message.";
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
    } else if(!validateEmail(email)) {
        document.getElementById("create-required-message-quick").className = "required";
        document.getElementById("create-required-message-quick").innerHTML = "E-Mail address not valid"
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
            responseField.innerHTML = "Failed to send email. Please contact our support if you are continuously getting this error message.";
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
    var email = document.getElementById("input-email-full").value;
    var name = document.getElementById("input-name-full").value;
    var payoutAmount = document.getElementById("input-payout-amount-full").value;
    var payoutInterval = document.getElementById("input-payout-day-full").value;
    var inviteOnly = document.getElementById("input-invite-only-full").checked;

    var wasSomethingFalse = false;

    if(email.length <= 0) {
        document.getElementById("create-required-message-email-full").className = "required";
        document.getElementById("create-required-message-email-full").innerHTML = "This field is required"
        wasSomethingFalse = true;
    } else if(!validateEmail(email)) {
        document.getElementById("create-required-message-email-full").className = "required";
        document.getElementById("create-required-message-email-full").innerHTML = "E-Mail address not valid"
        wasSomethingFalse = true;
    } else {
        document.getElementById("create-required-message-email-full").className = "hide";
    }

    if(name.length <= 0) {
        document.getElementById("create-required-message-name-full").className = "required";
        document.getElementById("create-required-message-name-full").innerHTML = "This field is required"
        wasSomethingFalse = true;
    } else {
        document.getElementById("create-required-message-name-full").className = "hide";
    }

    if(payoutAmount === undefined) {
        document.getElementById("create-required-message-payout-amount-full").className = "required";
        document.getElementById("create-required-message-payout-amount-full").innerHTML = "This field is required"
        wasSomethingFalse = true;
    } else if(payoutAmount <= 0) {
        document.getElementById("create-required-message-payout-amount-full").className = "required";
        document.getElementById("create-required-message-payout-amount-full").innerHTML = "Payout amount have to be at least one"
        wasSomethingFalse = true;
    } else {
        document.getElementById("create-required-message-payout-amount-full").className = "hide";
    }

    if(payoutInterval === undefined) {
        document.getElementById("create-required-message-payout-interval-full").className = "required";
        document.getElementById("create-required-message-payout-interval-full").innerHTML = "This field is required"
        wasSomethingFalse = true;
    } else if(payoutInterval <= 0 || payoutInterval >= 31) {
        document.getElementById("create-required-message-payout-interval-full").className = "required";
        document.getElementById("create-required-message-payout-interval-full").innerHTML = "Payout interval have to be between one and thirty"
        wasSomethingFalse = true;
    } else {
        document.getElementById("create-required-message-payout-interval-full").className = "hide";
    }

    if (wasSomethingFalse) {
        return;
    }

    var domain = email.replace(/.*@/, "");

    var companyObj = new Company(
        domain,
        name,
        payoutAmount,
        payoutInterval,
        inviteOnly
    );

    request.open('POST', 'https://clerkvest.com/api/company/create?mail=' + email, true);
    request.setRequestHeader("Content-type", "application/json")
    
    request.onload = function() {

        var data = this.response;
        var responseField = document.getElementById("create-response-message-full");

        if (request.status >= 200 && request.status < 400) {
            responseField.innerHTML = "Email send successfully. It could happen that our email lands inside of your spam folder."
            responseField.className = "success";
        } else if (request.status == 409) {
            responseField.innerHTML = "Company already exists. Please contact our support if you lost your access to your email adress.";
            responseField.className = "failure";
        } else {
            responseField.innerHTML = "Failed to send email. Please contact our support if you are continuously getting this error message.";
            responseField.className = "failure";
        }
    }
    
    var data = JSON.stringify(companyObj);
    request.send(data);
}