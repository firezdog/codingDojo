$(document).ready(function() {
    $("#toggleClass").click(function(e) {
        var toggle = $(this).attr("toggle-class");
        $(this).parent().find('p').toggleClass(toggle);
    });
    $("#hide").click(function(e) {
        var para = $(this).parent().find('p');
        para.toggle();
        // var display = para.css("display");
        // if (display === "none") {
        //     para.show();
        // }
        // else { 
        //     para.hide();
        // }
    });
    $("#slideDown").click(function(e) {
        var para = $(this).parent().parent().find('p');
        para.slideDown();
    });
    $("#slideUp").click(function(e) {
        var para = $(this).parent().parent().find('p');
        para.slideUp();
    });
    $("#slideToggle").click(function(e) {
        var para = $(this).parent().parent().find('p');
        para.slideToggle();
    });
    $("#fadeIn").click(function(e) {
        var para = $(this).parent().parent().find('p');
        para.fadeIn();
    });
    $("#fadeOut").click(function(e) {
        var para = $(this).parent().parent().find('p');
        para.fadeOut();
    });

    var paradox1 = false;
    $("#before").click(function(e) {
        var para = $(this).parent().parent().find('p');
        if (!paradox1) {
            para.prepend("'Yields falsehood when preceded by its quotation' ");
            paradox1 = true; //yes, I know it's a global variable -- wrist-slap.
        }
    });
    var paradox2 = false;
    $("#after").click(function(e) {
        var para = $(this).parent().parent().find('p');
        if (!paradox2) {
            para.append(" yields falsehood when preceded by its quotation.");
            paradox2 = true; //yes, I know it's a global variable -- wrist-slap.
        }
    })
    $("#text").click(function(e) {
        var para = $(this).parent().parent().parent().find('p');
        para.text($('textarea').val());
    });
    $("#html").click(function(e) {
        var para = $(this).parent().parent().parent().find('p');
        para.html($('textarea').val());
    });
    $("#data").click(function(e) {
        var name = $("input[name='name'").val();
        var age = $("input[name='age'").val();
        $("#data").data("person", {who: name, old: age});
        $("#name").text($("#data").data("person").who);
        $("#age").text($("#data").data("person").old);
    });
});