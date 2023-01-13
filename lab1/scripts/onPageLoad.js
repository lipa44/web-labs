(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let loadStats = document.getElementById("page-load-stats");

        let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        let loadTimeInSec = loadTime / 1000;

        loadStats.innerText = `Load: ${loadTimeInSec % 60} sec.`;
    })
})
