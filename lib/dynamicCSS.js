
function refreshDynamicCSS() {

    var navHeight = $('#divNav').outerHeight();
    var windowHeight = $(window).height();

    $('#divContent').height(windowHeight - navHeight + 'px');

}

window.addEventListener('load', function() {
    refreshDynamicCSS();
})

window.addEventListener('resize', function() {
    refreshDynamicCSS();
})