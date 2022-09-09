window.addEventListener("load", () => {
    let cur_link = window.location.href;
    let cur_page = cur_link.split("/").pop().replace(".html", "");

    let btnContainer = document.getElementById("buttons-bar");
    let btns = btnContainer.getElementsByClassName("custom-button");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
    }

    let curButton = document.getElementById(cur_page);
    curButton.className += " active";
    console.log(curButton)
})
