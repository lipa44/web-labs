loadStats = (requestTime = null) => {
    let loadStats = document.getElementById("footer__page-load-stats");

    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    let loadTimeInSec = loadTime / 1000;
    let requestTimeInMillisec = requestTime ? requestTime / 1000 : 0;
    let resultTime = (loadTimeInSec + requestTimeInMillisec) % 60;

    loadStats.innerText = `Load: ${resultTime.toFixed(3)} sec.`;
};
