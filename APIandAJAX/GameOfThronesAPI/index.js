/* BRUTE-FORCED HOUSE ID'S
`https://cors-anywhere.herokuapp.com/anapioficeandfire.com/api/houses/${i}`
16 -- Baratheon
229 -- Lannister
362 -- Stark
378 -- Targaryen
*/

$(document).ready(function() {
    $("img").click(function(){
        var id = $(this).attr("id");
        var url = `https://cors-anywhere.herokuapp.com/anapioficeandfire.com/api/houses/${id}`
        $.get(url, function(data){
            var string=`
                <h1>${data.name}</h1>
                <p><em>${data.words}</em></p>
                <ul>
                `
            for (title in data.titles) {
                string += `<li>${data.titles[title]}</li>`
            }
            string += "</ul>"
            
            $("#target").html(string);
        });
    });
});