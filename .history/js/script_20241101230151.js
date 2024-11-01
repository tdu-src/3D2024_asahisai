var func = function () {
    console.log("aa");
    var s = document.getElementById("menu-toggle").checked;
    console.log(s);
}
document.getElementById('menu-toggle').addEventListener('change', function(event) {
    if (event.target.checked) {
        console.log('チェックボックスがオンになりました');
        // チェックボックスがオンの時の処理をここに追加
    } else {
        console.log('チェックボックスがオフになりました');
        // チェックボックスがオフの時の処理をここに追加
    }
});