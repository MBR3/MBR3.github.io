// JavaScript source code
var count;
window.CookieSaveOmoshiroi = function CookieSaveOmoshiroi() {
    var now = new Date();
    now.setDate(now.getMonth()+2);
    count++;
    this.alert("Thank you");
    document.cookie = 'omoshiroi=' + this.count;
    console.log(now);
}

window.onload = function cookieKakunin() {
    var cookieValue = "";
    if (document.cookie == '') {
        alert('no cookie');
        count = 0;
    }
    else {
        alert('yes cookie');
        this.alert("ÅJÉîÉBÅJÉGÅJ");
        var cookies = document.cookie;
        var cookieItem = cookies.split(";");        
        for (i = 0; i < cookieItem.length; i++) {
            var elem = cookieItem[i].split("=");
            if (elem[0].trim() == "omoshiroi") {
                cookieValue = elem[1];
            } else {
                continue;
            }
        }
        this.alert(cookieValue);
        count = cookieValue;
        
    }
}