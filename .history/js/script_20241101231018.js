var isCheckBoxTrue = false;

window.addEventListener('wheel', (event) => {
    //変化ないときはreturn
    if (event.deltaY == 0) return;

    //もし、チェックボックスがtrueのときの処理
    if (isCheckBoxTrue) {
        document.getElementById('menu-toggle') = false;
    }
}
/*チェックボックスが変化したときのみ発火 */
document.getElementById('menu-toggle').addEventListener('change', function(event) {
    isCheckBoxTrue = event.target.checked;
});

