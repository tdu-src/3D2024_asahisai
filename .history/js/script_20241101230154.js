document.getElementById('menu-toggle').addEventListener('change', function(event) {
    if (event.target.checked) {
        console.log('チェックボックスがオンになりました');
        // チェックボックスがオンの時の処理をここに追加
    } else {
        console.log('チェックボックスがオフになりました');
        // チェックボックスがオフの時の処理をここに追加
    }
});