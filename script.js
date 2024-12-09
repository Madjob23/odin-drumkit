const drumKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

function playSound (keyPress) {
    const pressedKey = keyPress.key;
    if (drumKeys.includes(pressedKey)) {
        const audio = document.querySelector(`audio[id=${pressedKey}]`);
        audio.currentTime = 0;
        audio.play();
        const dispKey = document.querySelector(`div[id=${pressedKey}]`);
        dispKey.classList.add('playing');
    }
}

document.addEventListener('keyup', playSound);
document.addEventListener('transitionend', function (e) {
    if (e.propertyName === 'transform') {
        e.target.classList.remove('playing');
    }
});