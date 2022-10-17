// const form = document.getElementById('form');
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const form = e.target;
//
//     const newParagraph = document.createElement("p");
//     const newParagraphText = document.getElementById("newLineText").value;
//     const textNode = document.createTextNode(newParagraphText);
//
//     newParagraph.classList.add("editable");
//     newParagraph.contentEditable = true;
//     newParagraph.appendChild(textNode)
//     newParagraph.addEventListener('onkeydown', enterKey)
//
//     const prevParagraph = form.previousElementSibling;
//
//     if (prevParagraph) {
//         prevParagraph.after(newParagraph)
//     } else {
//         // TODO: add logic if no paragraph selectors exist
//     }
//
//     form.reset()
// });

const createEmptyParagraph = (e) => {
    const curParagraph = e.target
    const newParagraph = document.createElement("p");

    newParagraph.classList.add("editable");
    newParagraph.contentEditable = true;
    newParagraph.onkeydown = (e) => enterKey(e)

    curParagraph.after(newParagraph)

    newParagraph.focus()
}

const enterKey = (e) => {
    const curParagraph = e.target

    if (e.keyCode === 13 && !e.shiftKey) {
        // has next paragraph
        if (curParagraph.nextElementSibling) {

        }

        e.preventDefault();
        createEmptyParagraph(e)
    }
}
