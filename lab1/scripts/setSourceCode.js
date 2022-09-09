const url = "https://raw.githubusercontent.com/lipa44/web-labs/lab-1/lab1/index.html";
const fetchPromise = fetch(url);

setSourceCode = () =>
    fetch(url)
        .then(response => {
            return response.text();
        })
        .then((res) => {
            console.log(res);

            let codeSnippet = document.getElementById("main__code-snippet");
            let codeSnippet_code = document.getElementById("code-snippet__code");
            let mainMock = document.getElementById("main__body-mock");
            let asciiArt = document.getElementById("main__ascii-art");
            let mainIntro = document.getElementById("main__intro");

            mainMock.style.display = "none";
            asciiArt.style.display = "none";

            mainIntro.style.display = "block";
            codeSnippet.style.display = "flex";
            codeSnippet_code.innerText = res;
        })
