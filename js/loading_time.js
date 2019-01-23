function onLoad() {
    var now = new Date().getTime();
    var page_load_time = now - performance.timing.navigationStart;
    console.log("页面加载时间: " + page_load_time);
}