$(document).ready(function() {
    $("img").hover(
        function(){
            $(this).attr("src", $(this).attr("second"))
        }, 
        function(){
            $(this).attr("src", $(this).attr("main"));
        }
    );
});