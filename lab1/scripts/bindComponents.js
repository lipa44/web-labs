const header = `
    <a href="../../index.html" id="home-btn">
        <img src="../assets/img/home-icon.svg" style="cursor: pointer; width: 2rem" alt="home">
    </a>

    <div class="header__search-bar">
        <input
                type='text'
                placeholder='Tishka San-Loran visit na mne za sotku'
                spellcheck='false'
                class='form-control'
                onchange="onSearchBarSubmit(event)"
        />
    </div>

    <div class="container" id="buttons-bar">
        <button class="custom-button dora" id="dora">
            <a data-link="dora" href="dora.html">
                Dora ASCII
            </a>
        </button>
        <button class="custom-button source-code" id="source-code">
            <a data-link="source-code" href="source-code.html">
                Source code
            </a>
        </button>
        <button class="custom-button index" id="index">
            <a href="index.html">
                Home
            </a>
        </button>
    </div>
`
const footer = `
    <div class="footer__icons-bar">
      <a href="https://instagram.com/dirty_lipa" target="_blank" class="fa">
        <img class="icon" src="../assets/img/ins-icon.svg" alt="inst"/>
      </a>
      <a href="https://t.me/dirty_lipa" target="_blank" class="fa">
        <img class="icon" src="../assets/img/tg-icon.svg" alt="tg"/>
      </a>
    </div>

    <p id="footer__page-load-stats"></p>

    <p id="footer__creds"><b>(c) Lipa</b></p>
`

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
