const loadTemplate = () => {
    const template = localStorage.getItem("template");

    if (!template) return;

    const main = document.querySelector('main');

    let templateHTML = stringToHTML(template)
    main.replaceChildren(...templateHTML.childNodes)
}

const debounce = (func, wait, immediate) => {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

const stringToHTML = (str) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body;
};

export {loadTemplate, debounce}
