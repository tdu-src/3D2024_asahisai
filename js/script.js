//チェックボックスオブジェクト
var checkBoxObject = document.getElementById('menu-toggle');

window.addEventListener('wheel', (event) => {
    checkBoxObject.checked = false;
});

// タップ時の誤動作を防ぐためのスワイプ時の処理を実行しない最小距離
const minimumDistance = 30;
// スワイプ開始時の座標
let startX = 0;
let startY = 0;
// スワイプ終了時の座標
let endX = 0;
let endY = 0;

// 解説①：移動を開始した座標を取得
window.addEventListener('touchstart', (e) =>  {
    startY = e.touches[0].pageY;
})

// 解説②：移動した座標を取得
window.addEventListener('touchmove', (e) =>  {
    endY = e.changedTouches[0].pageY;
})


// 解説③：移動距離から左右or上下の処理を実行
window.addEventListener('touchend', (e) =>  {
    const distanceY = Math.abs(endY - startY)

    if (distanceY > minimumDistance) {
        // スワイプ後の動作
        checkBoxObject.checked = false;
    }
})