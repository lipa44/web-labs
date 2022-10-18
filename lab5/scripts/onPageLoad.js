import {keyDownHandler} from "./keyDownHandler.js";
import {loadTemplate} from "./loadTemplate.js";

const addKeyDownHandler = () => {
    const p = document.querySelector('p');
    p.addEventListener('keydown', (e) => keyDownHandler(e))
}

const addTemplate = () => loadTemplate();


(() => {
    addKeyDownHandler()
    addTemplate()
})()
