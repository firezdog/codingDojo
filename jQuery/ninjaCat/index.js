$(document).ready(function() {
    $("img").each(function(el) {
        var random = Math.floor(Math.random()*2);
        if (random === 0) {
            $(this).attr("src", $(this).attr("alt-src"));
        }
    });
    $("img").click(function(e) {
        var src = $(this).attr("src");
        var altSrc = $(this).attr("alt-src");
        var mainSrc = $(this).attr("main-src");
        if (src !== altSrc) {
            $(this).attr("src", altSrc);
        }
        else {
            $(this).attr("src", mainSrc);
        }
    });
});