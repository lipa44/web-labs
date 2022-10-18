const handleEnter = (e, curParagraph, handler) => {
    e.preventDefault();

    // has next paragraph
    if (curParagraph.nextElementSibling) {
    }

    createEmptyParagraph(e, handler)
}

const handleBackspace = (e, curParagraph, isLineStart, selection) => {
    if (curParagraph.innerText && curParagraph.innerText !== '\n') return; // если есть текст в параграфе
    if (!curParagraph.previousElementSibling) return;

    e.preventDefault();

    const article = curParagraph.parentNode;
    const parentParagraph = curParagraph.previousElementSibling;

    const parentFocusOffset = parentParagraph.textContent.length;

    setCaret(selection, parentParagraph, [...parentParagraph.childNodes].at(0), isLineStart, parentFocusOffset)

    article.removeChild(curParagraph);

    // window.localStorage.setItem("template", document.getElementsByClassName('main')[0].innerHTML);
}

const handleUpArrow = (e, curParagraph, curNodeIndex, focusOffset, isLineStart, selection) => {
    if (!curParagraph.previousElementSibling) return;
    // если у нас несколько строк в одном параграфе И мы находимся не на начале строки И текущий элемент - не первый в параграфе
    if (curParagraph.childNodes.length !== 1 && curNodeIndex !== 0) return;
    // если у нас несколько элементов, и мы находимся на первом, то мы идём дальше
    // если у нас несколько элементов, и мы не на первом, то ретёрн

    e.preventDefault();

    const prevParagraph = curParagraph.previousElementSibling;

    const prevLastChild = [...prevParagraph.childNodes].at(-1)

    const prevFocusOffset = prevLastChild.textContent.length > focusOffset
        ? focusOffset
        : prevLastChild.textContent.length;

    setCaret(selection, prevParagraph, prevLastChild, isLineStart, prevFocusOffset)
}

const handleDownArrow = (e, curParagraph, curNodeIndex, focusOffset, isLineStart, selection) => {
    if (!curParagraph.nextElementSibling) return;
    // если у нас несколько строк в одном параграфе И мы находимся не на конце строки И текущий элемент - не последний в параграфе
    if (curParagraph.childNodes.length !== 1 && curNodeIndex !== curParagraph.childNodes.length - 1) return;
    // если у нас несколько элементов, и мы находимся на последнем, то мы идём дальше
    // если у нас несколько элементов, и мы не на последнем, то ретёрн

    e.preventDefault();

    const nextParagraph = curParagraph.nextElementSibling;
    const nextFirstChild = [...nextParagraph.childNodes].at(0)

    const nextFocusOffset = nextFirstChild.textContent.length > focusOffset
        ? focusOffset
        : nextFirstChild.textContent.length;

    setCaret(selection, nextParagraph, nextFirstChild, isLineStart, nextFocusOffset)
}

const createEmptyParagraph = (e, handler) => {
    const curParagraph = e.target
    const newParagraph = document.createElement("p");

    newParagraph.classList.add("editable");
    newParagraph.contentEditable = true;
    newParagraph.onkeydown = (e) => handler(e)

    curParagraph.after(newParagraph)

    newParagraph.focus()

    // window.localStorage.setItem("template", document.getElementsByClassName('main')[0].innerHTML);
}

const setCaret = (selection, node, startNode, collapse, offset) => {
    const range = document.createRange();

    selection.removeAllRanges();

    range.setStart(startNode, offset)
    range.setEnd(startNode, offset)

    selection.addRange(range);

    node.focus();
}

export {handleEnter, handleBackspace, handleUpArrow, handleDownArrow};
