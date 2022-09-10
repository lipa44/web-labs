// TODO: fix when initializing page

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

updateCurrentPageButton = () => {
    let cur_link = document.URL;
    let cur_route = routeNamesDict.find(x => cur_link.includes(x.route));

    let btnContainer = document.getElementById("buttons-bar");
    let btns = btnContainer.getElementsByClassName("custom-button");

    for (let i = 0; i < btns.length; i++) {
        let current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
    }

    let curButton = document.getElementById(cur_route.page);
    curButton.className += " active";

    loadStats()
}
