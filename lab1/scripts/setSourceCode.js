const url = "https://raw.githubusercontent.com/lipa44/web-labs/lab-1/lab1/index.html";

function setSourceCode() {
    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();

    let codeSnippet = document.getElementById("code-snippet");
    let codeSnippet_code = document.getElementById("code-snippet__code");
    let mainMock = document.getElementById("main-mock");
    let asciiArt = document.getElementById("ascii-art");
    let mainIntro = document.getElementById("main__intro");

    Http.onreadystatechange = (e) => {
        Http.responseText;
        mainMock.style.display = "none";
        asciiArt.style.display = "none";

        mainIntro.style.display = "block";
        codeSnippet.style.display = "flex";
        codeSnippet_code.innerText = Http.responseText;
        // codeSnippet.innerText = Http.responseText;
    }
}
