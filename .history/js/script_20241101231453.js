//チェックボックスオブジェクト
var checkBoxObject = document.getElementById('menu-toggle');

window.addEventListener('wheel', (event) => {
    //もし、チェックボックスがtrueのときの処理
    if (checkBoxObject.checked) {
        checkBoxObject.checked = false;
    }
});
