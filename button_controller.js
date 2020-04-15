let bubble = document.getElementById('bubble');
let downCounter = 0;
let upCounter = 0;
let leftCounter = 0;
let rightCounter = 0;

/*Button Controller*/
document.addEventListener('keydown', logKey);
function logKey(e) {
    //   log.textContent += ` ${e.code}`;
    if (e.keyCode == 38) {
        console.log('up');
        upCounter++;
        bubble.style = 'margin-top: ' + (downCounter - upCounter) + 'px';
    }
    if (e.keyCode == 40) {
        downCounter++;
        console.log('pressing down now', downCounter);
        bubble.style = 'margin-top:' + (downCounter - upCounter) + 'px';
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