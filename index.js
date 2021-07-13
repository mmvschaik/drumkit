let drumButtons = document.querySelectorAll('.drum');

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', function () {
        let drumButton = this.innerHTML;
        makeSound(drumButton);
        btnAnimation(drumButton);
    });
}

document.addEventListener('keydown', function (e) {
    let drumButton = e.key;
    makeSound(drumButton);
    btnAnimation(drumButton);
});


function makeSound(drumButton) {
    switch (drumButton) {
        case 'a':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 's':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'd':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'f':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'j':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default: console.log(drumButton.innerHTML);
    }
}

function btnAnimation(drumButton) {
    document.querySelector('.' + drumButton).classList.add('pressed');

    setInterval(() => {
        document.querySelector('.' + drumButton).classList.remove('pressed');
    }, 100);
}
