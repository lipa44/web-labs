const url = "https://raw.githubusercontent.com/lipa44/web-labs/lab-1/lab1/index.html";

function setSourceCode() {
    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();

    let codeSnippet = document.getElementById("code-snippet");
    let mainIntro = document.getElementById("main__intro");

    Http.onreadystatechange = (e) => {
        Http.responseText;
        mainIntro.style.display = "block";
        codeSnippet.style.display = "block";
        codeSnippet.style.padding = "2rem";
        codeSnippet.innerText = Http.responseText;
        codeSnippet.style.fontSize = "medium";
    }
}
