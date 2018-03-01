$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        var city = $("input").val();
        var apikey = "get your own";
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data){
                var city = data.name;
                var temperature = data.main.temp
                $(".card").html(`<h3>${city}</h3><p>Temperature: ${temperature}°F.`)
            },
            error: function(data) {
                $(".card").html("<h3>Something went wrong.</h3>");
            }
        });
    });
});
