const url = "https://raw.githubusercontent.com/lipa44/web-labs/refactor/lab-1/lab1/pages/source-code.html";

setSourceCode = () => {
    let startTime = Date.now();
    fetch(url)
        .then(response => {
            return response.text();
        })
        .then((res) => {
            let codeSnippet = document.getElementById("code-snippet__code");
            codeSnippet.innerText = res;

            let endTime = Date.now();
            loadStats(endTime - startTime)
        })
}
