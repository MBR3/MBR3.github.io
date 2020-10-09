document.getElementById("submit").onclick = function()
{
    var waribikigo = document.getElementById("waribikigo");
    var waribiki = Number(document.forms.kakakuform.waribiki.value);
    var kakaku = Number(document.forms.kakakuform.kakaku.value);
    console.log(waribikigo.innerHTML);
    console.log(kakaku);
    console.log(waribiki);
    console.log(kakaku*waribiki);
    var waribikigokakaku = kakaku*waribiki;
    waribikigo.innerHTML = "割引後の価格　" + String(Math.floor(waribikigokakaku));
}