const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// the number of the circle which is currently active
let currentActive = 1;

nextButton.addEventListener('click', () => {
    currentActive =
        currentActive >= circles.length ? circles.length : currentActive + 1;

    updateDOM();
});

prevButton.addEventListener('click', () => {
    currentActive = currentActive <= 1 ? 1 : currentActive - 1;

    updateDOM();
});

function updateDOM() {
    circles.forEach((circle, index) => {
        if (+circle.innerHTML <= currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const activeCircles = document.querySelectorAll('.active');
    const progressWidth =
        ((activeCircles.length - 1) / (circles.length - 1)) * 100;
    progress.style.width = progressWidth + '%';

    if (currentActive === 1) {
        prevButton.disabled = true;
    } else if (currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}
