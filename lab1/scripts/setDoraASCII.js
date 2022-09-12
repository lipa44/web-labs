fetch('../assets/content/doraAscii.txt')
    .then(res => res.text())
    .then(text => {
        const asciiArt = document.getElementById("main__ascii-art")
        asciiArt.innerText = text;
    })
    .catch((reason) => console.log(reason))
