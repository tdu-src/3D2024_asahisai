window.addEventListener('wheel', (event) => {
    console.log("into method");
    //変化ないときはreturn
    if (event.deltaY == 0) return;

    console.log("wheal value change");
    //もし、チェックボックスがtrueのときの処理
    if (document.getElementById('menu-toggle').checked) {
        console.log("value changed");
        document.getElementById('menu-toggle') = false;
    }
});
