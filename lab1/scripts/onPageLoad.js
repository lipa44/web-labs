window.onload = () => {
    let loadStats = document.getElementById("footer__page-load-stats");

    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    let loadTimeInSec = loadTime / 1000;

    loadStats.innerText = `Load: ${loadTimeInSec % 60} sec.`;
};
