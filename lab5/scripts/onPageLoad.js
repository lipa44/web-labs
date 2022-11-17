import {keyDownHandler} from "./keyDownHandler.js";
import {loadTemplate, debounce} from "./loadTemplate.js";

const addKeyDownHandler = () => {
    const p = document.getElementsByTagName('p')
    for (let i = 0; i < p.length; i++) {
        p[i].addEventListener('keydown', (e) => keyDownHandler(e))
    }
}

const addArticleUpdateHandler = () => {
    const article = document.querySelector('main');
    article.addEventListener(
        'input',
        debounce(() => localStorage.setItem("template", article.innerHTML), 1500)
    )
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
    addTemplate()
    addKeyDownHandler()
    addCopyHandler()
    addCutHandler()
    addArticleUpdateHandler()
})()
