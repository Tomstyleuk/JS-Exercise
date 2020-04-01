//グローバル変数
const LOCAL_SWITCH = "Switch文の「case」の中のブロックスコープ!!"; //ID 0
const LOCAL_BOB =  "ここはグローバルな関数「bob()」ローカル変数から連絡!!"; //ID 1
const GLOBAL = "グローバル変数(定数)「whatBobSays」で連絡!！"; //ID 2
const LOCAL_NEST_FUNCTION = 'グローバルな関数「bob()」の中で作られた関数!!'; //ID 3
const LOCAL_FOR = "ここはfor文のブロックスコープにあるローカル変数から連絡!!"; //ID 4
const LOCAL_OBJ = "オブジェクトで設定したオブジェクトメソッドで連絡中!!"; //ID 5

//吹き出しの番号を指定するID
let talkID = 0;
//グローバル変数(定数)
var whatBobSays = GLOBAL;
//const whatBobSaysID2 = GLOBAL;

//1.起動時に呼ばれる
window.onload= function(){
    //起動時に呼び出す関数
    bob();
}

//talkIDに応じてBobの発する言葉を決める関数
function bob(){
    const whatBobSays = LOCAL_BOB;
    const whatBobSaysID1 = whatBobSays;

    //const whatBobSays = LOCAL_NEST_FUNCTION; 

    for(let talkID=0; talkID<=5; talkID++){

        const whatBobSays = LOCAL_FOR; //ローカル変数(定数)

        switch(talkID){
            case 0: //switch文の`case`の中で、ID2の文字列が格納された変数`whatBobSays`を宣言して使用する
                {
                  const whatBobSays = LOCAL_SWITCH;
                  setDialog(whatBobSays,talkID);//この関数が実行されると、入力したIDの番号の吹き出し画面に入力した文字列が表示される
                }
            break;

            case 1://ID1の文字列が既に格納された関数`bob()`のローカル変数`whatBobSays`を使用する
                {
                  setDialog(whatBobSaysID1,talkID);
                }
            break;

            case 2: //ID2の文字列が既に格納されたグローバル変数`whatBobSays`を使用する
								{// 12行目の定数whatBobSaysを使用することが条件なので、新たな定数のwhatBobSaysID2は使用できない
								// 関数setDialogのなかで12行目の定数whatBobSaysをそのまま呼び出しても「スコープの問題」で呼べないので、
								// 1階層以上上のスコープも取得できる方法を使用して取得する
                // そのほかのヒントとして、12行目が定数ではundefinedになるため、変数にする必要があります。
                  setDialog(this.whatBobSays,talkID);
                }
            break;

            case 3://関数`bob()`の中で関数`whatBobSays`を作成し、その中で宣言したものを利用する
                {
                  const whatBobSays = function() {
                    const whatBobSays = LOCAL_NEST_FUNCTION;
                    return whatBobSays; //戻り値とする
                  };
                
                  setDialog(whatBobSays(),talkID);
                }
            break;

            case 4: //関数`bob()`内のfor文のブロックスコープにある、ID4の文字列が格納された変数`whatBobSays`から取得する
                 {
                  setDialog(whatBobSays,talkID);
                }
            break;

            default: {
               //オブジェクトを作成し、ID5の文字列を返すオブジェクトメソッド`whatBobSays`を使用する
                // objは変化する型かどうかを考えるとこの場合は定数です。
                  const obj = {
                    message: LOCAL_OBJ,// ここはID5のメッセージの設定なのでID5の定数を入れる
                    whatBobSays: function() {　//whatBobSaysは、関数！！！！　関数の呼び出し方でwhatBobSays()
                      return this.message; //thisは、一階層上のブロックの中身を指す
                    }
                  };
                  // 「定数objのどのプロパティか」というところまで定義 -> JSには気を利かせる、
                  // 空気を読むなどのことができないので、丁寧に一字一句指示を書きましょう
                  // チャットのIDも呼び出す必要がありそうです
                  setDialog(obj.whatBobSays(),talkID);
                }
            break;
        }
    }
}

//「発言する文字列」「発言を識別する番号」を入力すると画面の吹き出しに表示してくれる関数
function setDialog(whatHeSays,talkID){
    if(talkID<=5){
        let bobSays = document.getElementsByClassName("bob-says");
        //Bobの吹き出しに文字列を表示
         bobSays[talkID].firstElementChild.innerHTML = whatHeSays;
         console.log(talkID);
         talkID++;
    }
}
