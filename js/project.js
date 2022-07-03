function openSaveProjectModal() {
    if (html_editor.getValue() || js_editor.getValue() || css_editor.getValue()) {
        $('#saveProjectModal').modal('toggle');
    } else {
        showAlert('danger', 'No data to save');
    }
}

function openSavedProject(name) {
    const histories = JSON.parse(localStorage.getItem('histories'));
    const selectedProject = histories.find(value => value.name === name);
    const dropdown_title = document.getElementById('dropdownTitle');

    html_editor.setValue(selectedProject.html);
    js_editor.setValue(selectedProject.js);
    css_editor.setValue(selectedProject.css);

    dropdown_title.innerText = name;
}

function projectNameChange() {
    const project_name = document.getElementById('projectName');
    const save_project_button = document.getElementById('saveProjectButton');
    if (project_name.value.length) {
        save_project_button.disabled = false;
        return
    }
    save_project_button.disabled = true;
}

function saveProject() {
    const project_name = document.getElementById('projectName').value;
    const data = JSON.parse(localStorage.getItem('histories')) || [];
    data.push({
        name: project_name,
        html: html_editor.getValue(),
        js: js_editor.getValue(),
        css: css_editor.getValue(),
    })

    localStorage.setItem('histories', JSON.stringify(data))
    projectHistories();
    showAlert('success', 'Project saved successfully');
    $('#saveProjectModal').modal('toggle');
}