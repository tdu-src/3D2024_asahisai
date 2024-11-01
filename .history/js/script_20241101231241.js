window.addEventListener('wheel', (event) => {
    console.log("wheal value change");
    //もし、チェックボックスがtrueのときの処理
    if (document.getElementById('menu-toggle').checked) {
        console.log("value changed");
        document.getElementById('menu-toggle') = false;
    }
});
