$(window).resize(function() { 
    var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    console.log(browserZoomLevel)
    if (browserZoomLevel <= 99) {
        location.replace('./cheh.html')
    }
});