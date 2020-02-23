/**
 * Reads the value of a cookie. Code by: https://www.w3schools.com/js/js_cookies.asp
 * @param {String} name Name of the Cookie
 */
function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }

    return undefined;
}

/**
 * Delete a cookie. Code by: https://www.codexpedia.com/javascript/javascript-create-read-and-delete-cookies/
 * @param {String} cname, cookie name
 */
function deleteCookie(cname) {
    var d = new Date();
    d.setTime(d.getTime() - (1000*60*60*24));
    var expires = "expires=" + d.toGMTString();
    window.document.cookie = cname+"="+"; "+expires;
 
}

/**
 * Sets the margin of the bottom right image
 */
function setImageMargin() {
    var heightLeft = document.getElementById('header-img-left').clientHeight;
    var heightRightTop = document.getElementById('header-img-right-top').clientHeight;
    var heightRightBottom = document.getElementById('header-img-right-bottom').clientHeight;

    if (heightLeft != undefined && heightRightTop != undefined && heightRightBottom != undefined) {
        if (document.documentElement.clientWidth > 767) { 
            var margin = heightLeft - (heightRightTop + heightRightBottom);
            document.getElementById('header-img-right-bottom').style.marginTop = margin + 'px';
        } else {
            var margin = 25;
            document.getElementById('header-img-right-bottom').style.marginTop = margin + 'px';
        }
    }
}

/**
 * Deletes cookies if token is old to prevent auto login into an old account.
 */
function deleteCookieIfOld() {
    var request = new XMLHttpRequest()

    request.open('GET', 'https://clerkvest.com/api/employee/get', true)
    
    request.onload = function() {

        var data = this.response;

        if (request.status == 401) {
            deleteCookie('api');
            deleteCookie('myself');
        }
    }
    
    request.setRequestHeader('Authorization', 'Bearer '  + readCookie('api'));
    request.send();
}

/**
 * Main function to init everything
 */
function main() {
    setImageMargin();
    deleteCookieIfOld();
}