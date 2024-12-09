const drumKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

function playSound (keyPress) {
    const pressedKey = keyPress.key;
    if (drumKeys.includes(pressedKey)) {
        const audio = document.querySelector(`audio[id=${pressedKey}]`);
        audio.play();
    }
}

document.addEventListener('keyup', playSound);