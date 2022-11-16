import {keyDownHandler} from "./keyDownHandler.js";
import {loadTemplate} from "./loadTemplate.js";

const addKeyDownHandler = () => {
    const p = document.querySelector('p');
    p.addEventListener('keydown', (e) => keyDownHandler(e))
}

const addTemplate = () => loadTemplate();

const addCopyHandler = () => {
    const editableElements = document.querySelectorAll('[contenteditable]')

    editableElements.forEach(elem => {
        elem.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', e.target.innerText);
            e.preventDefault();
        })
    })
}

const addCutHandler = () => {
    const editableElements = document.querySelectorAll('[contenteditable]')

    editableElements.forEach(elem => {
        elem.addEventListener('cut', (e) => {
            e.clipboardData.setData('text/plain', e.target.innerText);

            e.target.innerText = ""

            e.preventDefault();
        })
    })
}

(() => {
    addKeyDownHandler()
    addTemplate()
    addCopyHandler()
    addCutHandler()
})()
