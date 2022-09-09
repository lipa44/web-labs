const routeNamesDict = [
    {
        route: "index.html",
        page: "index"
    },
    {
        route: "dora.html",
        page: "dora"
    },
    {
        route: "source-code.html",
        page: "source-code"
    },
]

window.addEventListener("load", () => {
    let cur_link = window.location.href;
    let cur_route = routeNamesDict.find(x => cur_link.includes(x.route));

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

    let curButton = document.getElementById(cur_route.page);
    curButton.className += " active";
})
