fetch('../components/footer.html')
    .then(res => res.text())
    .then(text => {
        let headerElem = document.getElementById("footer");
        headerElem.innerHTML = text;
    })
    .catch((reason) => console.log(reason))
