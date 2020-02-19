function login() {
    var request = new XMLHttpRequest()
    var email = document.getElementById("inputEmail").value;

    request.open('POST', 'https://clerkvest.com/api/login?mail=' + email, true)
    
    request.onload = function() {

        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            console.log(data)
        } else {
            console.log('error')
        }
    }
    
    request.send();
}