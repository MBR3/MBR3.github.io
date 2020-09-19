// JavaScript source code
var count = 0;
window.CookieSaveOmoshiroi = function CookieSaveOmoshiroi() {
    count++;
    this.alert("Thank you");
    document.cookie = 'omoshiroi=' + count;
}

window.onload = function cookieKakunin() {
    if (document.cookie == '') {
        alert('no cookie');
    }
    else {
        alert('yes cookie');
        this.alert(document.cookie)
        this.alert("ÅJÉîÉBÅJÉGÅJ");
    }
}