 window.onload = function () {
        var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
        console.log('本次页面加载时间： '+ loadTime);
    }
