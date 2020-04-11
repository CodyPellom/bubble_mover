/*Button Controller*/
document.addEventListener('keydown', logKey);

function logKey(e) {
    //   log.textContent += ` ${e.code}`;
    if (e.keyCode == 38) {
        console.log('up');
    }
    if (e.keyCode == 40) {
        console.log('down');
    }
    if (e.keyCode == 37) {
        console.log('left key');
    }
    if (e.keyCode == 39) {
        console.log('right');
    }
    if (e.keyCode == 32) {
        console.log('space');
    }
}
/**Arrow Down is 40
 * left 37
 * right 39
 * up 38
 * space 32
 */