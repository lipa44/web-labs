const routes = [
    {
        route: "index.html",
        pageUri: "index"
    },
    {
        route: "dora.html",
        pageUri: "dora"
    },
    {
        route: "source-code.html",
        pageUri: "source-code"
    },
]

updateCurrentPageButton = () => {
    const cur_link = document.URL;
    const cur_route = routes.find(x => cur_link.includes(x.route));

    let btnContainer = document.getElementById("buttons-bar");
    let btns = btnContainer.getElementsByClassName("custom-button");

    for (let i = 0; i < btns.length; i++) {
        let current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
    }

    let curButton = document.getElementById(cur_route.pageUri);
    curButton.className += " active";

    loadStats()
}
