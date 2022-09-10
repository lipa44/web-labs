fetch('../components/header.html')
    .then(res => res.text())
    .then(text => {
        let headerElem = document.getElementById("header");
        headerElem.innerHTML = text;
    })
    .catch((reason) => console.log(reason))
