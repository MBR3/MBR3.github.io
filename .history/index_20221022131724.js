
function audio(language, word) {
    document.getElementById(language + '_btn_10_audio').currentTime = 0; //連続クリックに対応
    document.getElementById(language + '_btn_10_audio').play(); //クリックしたら音を再生
}

function eng_10_audio() {
    audio("eng", "10")
}

function fra_10_audio() {
    audio("fra", "10")
}

function ger_10_audio() {
    audio("ger", "10")
}

function jpn_10_audio() {
    audio("jpn", "10")
}

function all_10_audio() {
    audio("all", "10")
}



function eng_dep_audio() {
    audio("eng")
}

function fra_dep_audio() {
    audio("fra")
}

function ger_dep_audio() {
    audio("ger")
}

function jpn_dep_audio() {
    audio("jpn")
}

function all_dep_audio() {
    audio("all")
}