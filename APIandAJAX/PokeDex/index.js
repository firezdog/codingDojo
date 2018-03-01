//Information at e.g. https://pokeapi.co/api/v2/pokemon/1/

$(document).ready(function() {
    for (var i=1; i<803; i++) {
        $("#images").append("<img id="+i+" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png'>")
    }
    $("#images").on("click", "img", function(e){
        $("img").removeClass("outline");
        $(this).addClass("outline");
        $("#information").html("Loading...");
        var image = `<img src=${this.src}>`
        $.get(`https://cors-anywhere.herokuapp.com/pokeapi.co/api/v2/pokemon/${$(this).attr('id')}`, function(data) {
            $("#information").html("");
            $("#information").append(`<h2>${data.forms[0].name}</h2>`)
            $("#information").append(`${image}<h2>Types</h2><ul>`);
            for (var i=0; i< data.types.length; i++) {
                $("#information").append(`<li>${data.types[i].type.name}</li>`)
            }
            $("#information").append(`</ul><h2>Height</h2><p>${data.height}</p><h2>Weight</h2><p>${data.weight}</p>`)
        });
    });
});