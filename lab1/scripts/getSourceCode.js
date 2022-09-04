const url = "https://raw.githubusercontent.com/lipa44/web-labs/lab-1/lab1/index.html";

const Http = new XMLHttpRequest();
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
    document.getElementById("code-snippet").innerText = Http.responseText;
}
