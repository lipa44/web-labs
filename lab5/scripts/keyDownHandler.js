import {handleBackspace, handleDownArrow, handleEnter, handleShiftEnter, handleUpArrow} from "./keyHandlers.js";

const Keys = { ENTER: 13, BACK_SPACE: 8, LEFT_ARROW: 37, UP_ARROW: 38, RIGHT_ARROW: 39, DOWN_ARROW: 40 };

const keyDownHandler = (e) => {
    const curParagraph = e.target
    const selection = window.getSelection();
    const focusOffset = selection.focusOffset;
    const textLength = selection.focusNode.textContent.length;
    const isLineStart = focusOffset === 0;
    const isLineEnd = focusOffset === textLength;
    const curNodeIndex = [...curParagraph.childNodes].indexOf(selection.focusNode);

    switch (e.keyCode) {
        case Keys.ENTER: // создаём новый параграф или новую строчку в нём
            if (e.shiftKey) {
                handleShiftEnter(e, curParagraph, selection)
            } else {
                handleEnter(e, curParagraph, keyDownHandler)
            }

            break;

        case Keys.BACK_SPACE: // удаляем параграф
            handleBackspace(e, curParagraph, isLineStart, selection);
            break;

        case Keys.DOWN_ARROW: // переходим на нижний параграф
            handleDownArrow(e, curParagraph, curNodeIndex, focusOffset, isLineStart, selection);

            break;
        case Keys.UP_ARROW: // переходим на верхний параграф
            handleUpArrow(e, curParagraph, curNodeIndex, focusOffset, isLineStart, selection);

            break;
    }
}

export {keyDownHandler}
