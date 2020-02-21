/**
 * Sets the margin of the bottom right image
 */
function setImageMargin() {
    var heightLeft = document.getElementById('header-img-left').clientHeight;
    var heightRightTop = document.getElementById('header-img-right-top').clientHeight;
    var heightRightBottom = document.getElementById('header-img-right-bottom').clientHeight;

    if (document.documentElement.clientWidth > 767) { 
        var margin = heightLeft - (heightRightTop + heightRightBottom);
        document.getElementById('header-img-right-bottom').style.marginTop = margin + 'px';
    } else {
        var margin = 25;
        document.getElementById('header-img-right-bottom').style.marginTop = margin + 'px';
    }
}

/**
 * Main function to init everything
 */
function main() {
    setImageMargin();
}