/**
 * Onclick functin to keep the dropdown menu open
 */
$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});

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