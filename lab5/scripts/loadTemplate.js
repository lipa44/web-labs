const loadTemplate = () => {
    const template = window.localStorage.getItem("template");

    console.log("Loading template")

    if (!template) return;

    const main = document.getElementsByClassName('main')[0];

    main.innerHTML = template;
}

export {loadTemplate}
