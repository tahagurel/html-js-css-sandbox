function runProject() {
    const iFrame = document.getElementById('iFrame');

    if (!html_editor.getValue() || !js_editor.getValue() || !css_editor.getValue()) {
        showAlert('danger', 'No code to compile');
        return;
    }

    welcomeBox.style.display = 'none';
    iFrame.style.display = 'block';

    const playGround = iFrame.contentWindow.document
    playGround.open()
    playGround.writeln(
        html_editor.getValue() +
        '<style>' +
        css_editor.getValue() +
        '</style>' +
        '<script>' +
        js_editor.getValue() +
        '</script>'
    )
    playGround.close()
}