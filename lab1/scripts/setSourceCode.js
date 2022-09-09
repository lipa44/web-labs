const url = "https://raw.githubusercontent.com/lipa44/web-labs/lab-1/lab1/index.html";

setSourceCode = () =>
    fetch(url)
        .then(response => {
            return response.text();
        })
        .then((res) => {
            let codeSnippet = document.getElementById("code-snippet__code");
            codeSnippet.innerText = res;
        })
