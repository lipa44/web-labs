const handleEnter = (e, curParagraph, handler) => {
    e.preventDefault();

    // has next paragraph
    if (hasNextElem(curParagraph)) {
    }

    createEmptyParagraph(e, handler)
}

const handleBackspace = (e, curParagraph, isLineStart, selection) => {
    if (curParagraph.innerText && curParagraph.innerText !== '\n') return; // если есть текст в параграфе
    if (!hasPrevElem(curParagraph)) return;

    e.preventDefault();

    const article = curParagraph.parentNode;
    const parentParagraph = curParagraph.previousElementSibling;
    const parentFirstChild = [...parentParagraph.childNodes].at(0) ?? parentParagraph

    const parentFocusOffset = parentFirstChild.textContent.length;

    setCaret(selection, parentParagraph, parentFirstChild, isLineStart, parentFocusOffset)

    article.removeChild(curParagraph);

    // window.localStorage.setItem("template", document.getElementsByClassName('main')[0].innerHTML);
}

const handleUpArrow = (e, curParagraph, curNodeIndex, focusOffset, isLineStart, selection) => {
    if (!hasPrevElem(curParagraph)) return;
    if (hasChildren(curParagraph) && !isFirstLineInParagraph(curNodeIndex)) return;

    e.preventDefault();

    const prevParagraph = curParagraph.previousElementSibling;
    const prevLastChild = [...prevParagraph.childNodes].at(-1) ?? prevParagraph

    const prevFocusOffset = prevLastChild.textContent.length > focusOffset
        ? focusOffset
        : prevLastChild.textContent.length;

    setCaret(selection, prevParagraph, prevLastChild, isLineStart, prevFocusOffset)
}

const handleDownArrow = (e, curParagraph, curNodeIndex, focusOffset, isLineStart, selection) => {
    if (!hasNextElem(curParagraph)) return;
    if (hasChildren(curParagraph) && !isLastLineInParagraph(curParagraph, curNodeIndex)) return;

    e.preventDefault();

    const nextParagraph = curParagraph.nextElementSibling;
    const nextFirstChild = [...nextParagraph.childNodes].at(0) ?? nextParagraph

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

const hasChildren = (curParagraph) => curParagraph.childNodes.length > 1;
const hasPrevElem = (curParagraph) => curParagraph.previousElementSibling;
const hasNextElem = (curParagraph) => curParagraph.nextElementSibling;
const isLastLineInParagraph = (curParagraph, curNodeIndex) => curNodeIndex === curParagraph.childNodes.length - 1;
const isFirstLineInParagraph = (curNodeIndex) => curNodeIndex === 0;

export {handleEnter, handleBackspace, handleUpArrow, handleDownArrow};
