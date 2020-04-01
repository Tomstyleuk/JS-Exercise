
//画像情報のオブジェクトを格納した配列
const picArray = [
{src: './images/pic_1.jpg', title: ' picture 1 '},
{src: './images/pic_2.jpg', title: ' picture 2 '},
{src: './images/pic_3.jpg', title: ' picture 3 '},
{src: './images/pic_4.jpg', title: ' picture 4 '},
{src: './images/pic_5.jpg', title: ' picture 5 '},
{src: './images/pic_6.jpg', title: ' picture 6 '}
];


//スライドショーが再生中かどうかを記録しておくためのグローバル変数
let playingID = 0;

//写真を切り替える関数
//関数名「changePicture, コールバック関数となり、タイマーsetIntervalの引数として渡される

let picNum = 0;

function changePicture() { 
        if (picNum < picArray.length) {　//再生してるときの機能
            document.getElementById('pics').src = picArray[picNum].src;
            document.getElementById('pic-title').innerHTML = picArray[picNum].title;
            picNum++;
        } else {  //停止してるときの機能
            document.getElementById('pics').src = picArray[0].src;
            document.getElementById('pic-title').innerHTML = picArray[0].title;
            picNum = 0;
        }
    }
//window.addEventListener('onclick', changePicture);

function playSlidedeshow() {
    if (playingID === 0) {
        playingID = setInterval(changePicture, 2000);
        document.getElementById("playButton").innerHTML = 'STOP';
    } else {
        clearInterval(playingID);
        document.getElementById("playButton").innerHTML = 'PLAY';
        playingID = 0;　//またPLAYボタンを押すとスタート
    }
} 
//window.addEventListener('onclick', playSlidedeshow);

//IF １）ボタンを押したらスタート＆STOPボタン表示、２）また押したら停止＆PLAYボタン表示、