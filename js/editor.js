const html_editor = CodeMirror.fromTextArea(document.getElementById("html_editor"), {
    styleActiveLine: true,
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    htmlMode: true,
    theme: 'dracula'
});

const js_editor = CodeMirror.fromTextArea(document.getElementById("js_editor"), {
    styleActiveLine: true,
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "javascript",
    theme: 'dracula'
});


const css_editor = CodeMirror.fromTextArea(document.getElementById("css_editor"), {
    styleActiveLine: true,
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "css",
    theme: 'dracula'
});


function boxSizeChange(boxName) {
    const boxes = ['html_box', 'js_box', 'css_box'];
    boxes.forEach(box => {
        if (box === boxName) {
            document.getElementById(box).classList.add('col-md-6');
            document.getElementById(box).classList.remove('col-md');
            return
        }
        document.getElementById(box).classList.add('col-md');
        document.getElementById(box).classList.remove('col-md-6');
    })
}

function boxSizeReset(boxName) {
    document.getElementById(boxName).classList.remove('col-md-6');
    document.getElementById(boxName).classList.add('col-md');
}

function saveEveryChanges(editor, draft) {
    localStorage.setItem(editor, JSON.stringify(draft))
}


html_editor.on("focus", () => boxSizeChange('html_box'));
js_editor.on("focus", () => boxSizeChange('js_box'));
css_editor.on("focus", () => boxSizeChange('css_box'));

html_editor.on("blur", () => boxSizeReset('html_box'));
js_editor.on("blur", () => boxSizeReset('js_box'));
css_editor.on("blur", () => boxSizeReset('css_box'));

html_editor.on("change", () => saveEveryChanges('html_editor', html_editor.getValue()));
js_editor.on("change", () => saveEveryChanges('js_editor', js_editor.getValue()));
css_editor.on("change", () => saveEveryChanges('css_editor', css_editor.getValue()));

function clearAllCode() {
    html_editor.setValue('');
    js_editor.setValue('');
    css_editor.setValue('');
    welcomeBox.style.display = 'block';
    iFrame.style.display = 'none';
}

function loadExampleProject() {
    html_editor.setValue("<h1 id=\"title\" class=\"red\">My color Red</h1>\n<button onclick=\"changeColor()\" type=\"button\">Change Color</button>")
    js_editor.setValue("function changeColor(){\n  const title =  document.getElementById('title');\n  \n  title.className = title.className === 'red' \n    ? 'blue' \n  \t: 'red';\n  title.innerText = `My color ${title.className}`\n}")
    css_editor.setValue(".red{\n  color:red;\n}\n\n.blue{\n  color:blue;\n}")
}

function loadDraftCodes() {
    html_draft = JSON.parse(localStorage.getItem('html_editor'))
    js_draft = JSON.parse(localStorage.getItem('js_editor'))
    css_draft = JSON.parse(localStorage.getItem('css_editor'))
    html_editor.setValue(html_draft || '');
    js_editor.setValue(js_draft || '');
    css_editor.setValue(css_draft || '');

}

loadDraftCodes()