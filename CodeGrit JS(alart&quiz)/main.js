/*   マイルストーン１   */
// alertで'You got 5 guesses. Guess 1 to 5'と言うメッセージを表示させ、１から５までの数値を当てるよう指示する。
alert('You got 5 guesses. Guess 1 to 5');
// 答えの数値を2で用意
let ans = 2;
// promptで'What do you guess?'と言うメッセージとともに、記入欄を表示させる
let guess = prompt ('What do you guess?'); //let, const setting
// forループで１から５までの数値で、答えの2が当たるまで推測を促すpromptを表示させる。
// ヒント１：if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。
// ヒント２：外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。
/*for (let i = 0; i < 5; i++) {
    if (guess == ans) {
        alert ('Good job! See what happens next :)');
        break;
      } else {
        guess = prompt('Ops! Maybe, another try?');
      }
} */

/* for文の構文
for (let i = 0; i < 5; i++) {
    ループ内容
}

i = 3, i = 4
x + y = 7
*/

/*   マイルストーン2   */
// for文で完成したら、for文箇所をコメントアウトし、while文で書き換えてみましょう。
while (i = 2) {
    if (guess == ans) {
      alert ('Good job! See what happens next :)');
      break;
    } else {
      guess = prompt ('Ops! Maybe, another try?');
      i++;//変化式、ループ
    }
}
