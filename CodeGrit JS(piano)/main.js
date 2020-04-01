function keyPlaying(e) {//関数の機能を追加する
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)//場所の指定。必ず必要な式
    if(!audio) return;
    audio.play(); //音を鳴らす
    audio.currentTime = 0; //音が再生される時間も初期化
    key.classList.add('playing'); //.playingと言うclass属性を追加
    console.log(key);      // <div class="key playing" data-key="65">
    console.log(audio);    // <audio data-key="70" src="sounds/fa.wav">
}
window.addEventListener('keydown', keyPlaying); //イベントと紐付けをして関数を呼び出す式。

function keyPlayingReset() {
    const key1 = document.getElementsByClassName('key')//場所の指定。keyのclass属性にplayingが追加されたから排除するための場所指定
    for (let key of key1) {
        key.classList.remove('playing');
    }
}
window.addEventListener('transitionend', keyPlayingReset);
