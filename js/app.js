document.addEventListener('keydown', e => {
    // CTRL + S run commander
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        runProject()
    }
});


function showAlert(type, content) {
    const alert = document.getElementById('alert')
    alert.innerHTML = content
    alert.className = `alert alert-${type}`
    alert.style.display = "block"
    setTimeout(function() {
        alert.style.display = "none"
    }, 3000);
}


function minimizeToggle() {
    const playGroundBox = document.getElementById('playgroundBox');
    const codeBoxes = document.getElementById('codeBoxes');

    const playGroundBoxClassList = [...playGroundBox.classList];
    const isToggled = playGroundBoxClassList.find(val => val === 'toggled')

    if (isToggled) {
        playGroundBox.classList.add('col-md-4');
        playGroundBox.classList.remove('col-md-12', 'toggled');
        codeBoxes.classList.add('col-md-12');
        codeBoxes.classList.remove('col-md-7');
    } else {
        playGroundBox.classList.remove('col-md-4');
        playGroundBox.classList.add('col-md-12', 'toggled');
        codeBoxes.classList.remove('col-md-12');
        codeBoxes.classList.add('col-md-7');
    }
}