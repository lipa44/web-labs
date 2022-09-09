// Get all buttons with class="btn" inside the container
let btns = document.getElementsByClassName("custom-button");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        let current = document.getElementsByClassName("active");

        if (current)
            current[0].className = current[0].className.replace(" active", "");

        this.className += " active";
    });
}
