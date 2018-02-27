$(document).ready(function() {
    $("img").click(function(e) {
        $(this).toggleClass("hidden");
    });
    $("button").click(function(e) {
        $("img").removeClass("hidden");
    });
});