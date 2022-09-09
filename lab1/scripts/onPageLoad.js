window.onload = (event) => {
    let loadStats = document.getElementById("page-load-stats");

    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    let loadTimeInSec = loadTime / 1000;

    console.log(loadTime)
    console.log(event)

    loadStats.innerText = `Load: ${loadTimeInSec % 60} sec.`;
};

// onLoad = (event) => {
//     let loadStats = document.getElementById("page-load-stats");
//
//     let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
//     let loadTimeInSec = loadTime / 100;
//
//     console.log(loadTime)
//     console.log(event)
//
//     loadStats.innerText = `Load: ${loadTimeInSec % 60} sec.`;
// }
