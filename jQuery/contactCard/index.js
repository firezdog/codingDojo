$(document).ready(function() {
    var cards = [];
    var numberOfCards = 0;
    $('body').on('click', 'button', function() {
        var side1;
        var side2;
        var side1 = 
        `
            <h1>`+$('input[name="first"]').val()+' '+$('input[name="last"]').val()+`</h1>
            <p class='instructions'>Click for description!</p>
        `
        var side2 = $('textarea').val()
        cards.push({side1: side1, side2: side2, back: false});
        $('#display').append(
            '<div id='+ numberOfCards++ +' class="card">'
                + cards[numberOfCards-1].side1 +
            '</div>');
        $("input, textarea").val($(this).attr('placeholder'));
    });
    $('body').on('click', '.card', function() {
        var entry = cards[$(this).attr('id')];
        console.log(entry);
        if (!entry.back) {
            $(this).html(entry.side2);
        }
        else {
            $(this).html(entry.side1);
        }
        entry.back = !entry.back;
    })
});