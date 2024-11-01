window.addEventListener('wheel', (event) => {
    //もし、チェックボックスがtrueのときの処理
    if (document.getElementById('menu-toggle').checked) {
        console.log("value changed");
        document.getElementById('menu-toggle').checked = false;
    }
});
