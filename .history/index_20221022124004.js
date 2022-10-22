function audio(language) {
    document.getElementById(language + '_btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById(language + 'eng_btn_audio').play(); //クリックしたら音を再生
}

function eng_audio() {
    document.getElementById('eng_btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('eng_btn_audio').play(); //クリックしたら音を再生
}