//チェックボックスオブジェクト
var checkBoxObject = document.getElementById('menu-toggle');

window.addEventListener('wheel', (event) => {
    checkBoxObject.checked = false;
});
