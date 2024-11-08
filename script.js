window.addEventListener('scroll', () => {
    document.querySelectorAll('.scroll-effect').forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.classList.add('show');
        }
    });
});

function calculateCalories() {
    const intensity = document.getElementById('intensity').value;
    const duration = document.getElementById('duration').value;
    let caloriesBurned = 0;

    if (intensity === 'low') {
        caloriesBurned = duration * 4;
    } else if (intensity === 'medium') {
        caloriesBurned = duration * 8;
    } else if (intensity === 'high') {
        caloriesBurned = duration * 12;
    }

    document.getElementById('calorie-result').innerText = `You burned approximately ${caloriesBurned} calories.`;
}
