function eng_audio() {
    document.getElementById('eng_btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('eng_btn_audio').play(); //クリックしたら音を再生
}