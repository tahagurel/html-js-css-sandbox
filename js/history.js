function projectHistories() {
    const histories = JSON.parse(localStorage.getItem('histories'));
    const histories_dropdown = document.getElementById('historiesDropdown')
    if (histories) {
        histories_dropdown.innerHTML = ''
        histories.forEach(element => {
            histories_dropdown.innerHTML += `<li><a class="dropdown-item" onclick="openSavedProject('${element.name}')" href="#">${element.name}</a></li>`
        });
    }
}

projectHistories()