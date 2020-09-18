// JavaScript source code
window.CookieSaveOmoshiroi = function CookieSaveOmoshiroi() {
    this.alert("‚ ‚è‚ª‚Æ‚¤");
    document.cookie = "omoshiroi=" + encodeURIComponent('‚Ö‚Á‚½');
}

window.onload = function cookieKakunin() {
    if (document.cookie == '') {
        alert('no cookie');
    }
    else {
        alert('yes cookie');
    }
}