var isCheckBoxTrue = false;

window.addEventListener('wheel', (event) => {
    //変化ないときはreturn
    if (event.deltaY == 0) return;

    //もし、チェックボックスがtrueのときの処理
    if (document.getElementById('menu-toggle').checked) {
        document.getElementById('menu-toggle') = false;
    }
}

