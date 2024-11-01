var isCheckBoxTrue = false;

window.addEventListener('wheel', (event) => {
    if (event.deltaY == 0) return;

    
}
/*チェックボックスが変化したときのみ発火 */
document.getElementById('menu-toggle').addEventListener('change', function(event) {
    isCheckBoxTrue = event.target.checked;
});

