$(document).ready(function() {
    $("#get-weather-button").on('click', function() {
        $.get('http://api.weatherapi.com/v1/current.json?key=9b35f3bc34574268a6b120401211410&q=Berlin&aqi=no', function(data, status) {
            console.log(data);

            const weatherData = data.current;
            var string = '<div style="grid-area: 1/1/2/2">Last Updated: ' + weatherData.last_updated + '</div>';

            string += '<div style="grid-area: 1/2/2/3">' + weatherData.condition.text + '</div>';

            string += '<div style="grid-area: 2/2/3/3">Temperature: ' + weatherData.temp_c + ' C</div>';

            string += '<div style="grid-area: 2/3/3/4">Feels like: ' + weatherData.feelslike_c + ' C</div>';

            string += '<div style="grid-area: 3/2/4/3">Wind: ' + weatherData.wind_dir + ' ' + weatherData.wind_kph + 'Kph </div>';

            string += '<div style="grid-area: 3/3/4/4">Precipitation: ' + weatherData.precip_mm + 'mm</div>';

            $("#show-weather").html(string);
            if (status === "success"){
                $("#get-weather-button").html("Update Current Weather");
            }
        });
    });



    $("#get-forecast-button").on('click', function() {
        $.get('http://api.weatherapi.com/v1/forecast.json?key=9b35f3bc34574268a6b120401211410&q=Berlin&days=5&aqi=no&alerts=no', function(data, status) {
            var string = '';

            const forecastArray = data.forecast.forecastday;
            console.log(forecastArray);
            for (let i = 0; i < forecastArray.length; i++){
                string += "<div class='weather-box'>";

                string += "<div style='grid-area: 1/1/2/2'>Date: "+forecastArray[i].date+"</div>";

                const weatherData = forecastArray[i].day;

                string += '<div style="grid-area: 1/2/2/3">' + weatherData.condition.text + '</div>';

                string += '<div style="grid-area: 2/2/3/3">Max:' + weatherData.maxtemp_c+ ' C, Min: ' + weatherData.mintemp_c + ' C</div>';

                string += '<div style="grid-area: 2/3/3/4">Average: ' + weatherData.avgtemp_c + ' C</div>';

                string += '<div style="grid-area: 3/2/4/3">Max Wind: ' + weatherData.maxwind_kph + 'Kph </div>';

                string += '<div style="grid-area: 3/3/4/4">Chance:' + weatherData.daily_chance_of_rain + '%, Precipitation: ' + weatherData.totalprecip_mm + 'mm</div>';

                string += '</div>';
            };
            $("#show-forecast").html(string);
            if (status === "success"){
                $("#get-forecast-button").html("Update Forecast");
            }
        });
    });
});

