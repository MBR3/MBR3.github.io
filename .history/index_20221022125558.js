var audios = document.querySelectorAll( "audio" );
    for(var i=0;i<audios.length;i++){
        audios[ i ].addEventListener( "play", function(){
    for(var j=0;j<audios.length;j++){
        if( audios[ j ]!=this ){ audios[ j ].pause() }
    }
}, false );
}

function audio(language) {
    document.getElementById(language + '_btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById(language + '_btn_audio').play(); //クリックしたら音を再生
}

function eng_audio() {
    audio("eng")
}

function fra_audio() {
    audio("fra")
}

function ger_audio() {
    audio("ger")
}

function jpn_audio() {
    audio("jpn")
}

function all_audio() {
    eng_audio()
    fra_audio()
    ger_audio()
    jpn_audio()
}