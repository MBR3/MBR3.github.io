
function audio(language) {
    document.getElementById(language + '_btn_10_audio').currentTime = 0; //連続クリックに対応
    document.getElementById(language + '_btn_10_audio').play(); //クリックしたら音を再生
}

function eng_10_audio() {
    audio("eng")
}

function fra_10_audio() {
    audio("fra")
}

function ger_10_audio() {
    audio("ger")
}

function jpn_10_audio() {
    audio("jpn")
}

function all_10_audio() {
    audio("all")
}