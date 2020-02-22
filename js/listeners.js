/**
 * Onclick functin to keep the dropdown menu open
 */
$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});

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
 * Redirects of cookies are set
 */
function redirectIfLoggedIn() {
    var api = readCookie('api');
    var myself = readCookie('myself');

    console.log(api);
    console.log(myself);

    if (api != undefined && myself != undefined) {
        console.log("redirecting");
        window.location.href = '/api';
    }
}

/**
 * Onscroll function
 */
window.onscroll = function() {
    if ((document.body.scrollTop > 20 && document.documentElement.clientWidth > 767) || 
        (document.documentElement.scrollTop > 20 && document.documentElement.clientWidth > 767)) {
        document.getElementById('up-button').style.display = 'block'
    } else {
        document.getElementById('up-button').style.display = 'none'
    }
};