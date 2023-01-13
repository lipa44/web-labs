import {keyDownHandler} from "./keyDownHandler.js";
import {loadTemplate, debounce} from "./loadTemplate.js";
import {loadRandomBackground} from "./backgroundLoader";

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
const addBackgroundImage = () => loadRandomBackground();

const addCopyHandler = () => {
    const editableElements = document.querySelectorAll('[contenteditable]')

    editableElements.forEach(elem => {
        elem.addEventListener('copy', (e) => {


            e.preventDefault();
        })
    })
}

(() => {
    addTemplate()
    addBackgroundImage()
    addKeyDownHandler()
    addCopyHandler()
    addArticleUpdateHandler()
})()
