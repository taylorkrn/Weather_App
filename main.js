$(document).ready(function() {
    $("#get-weather-button").on('click', function() {
        $.get('http://api.weatherapi.com/v1/current.json?key=9b35f3bc34574268a6b120401211410&q=Berlin&aqi=no', function(data, status) {
            const weatherData = data.current;

            var iconString = '.' + weatherData.condition.icon.substring(20);
            idString = '<img src=' + iconString + '>';
            idString += '<p>' + weatherData.condition.text + '</div>';
            $("#IconDescription").html(idString);

            var tempString = '<p><strong>Temp:</strong> ' + weatherData.temp_c + ' C</p>';
            tempString += '<p><strong>Feel:</strong> ' + weatherData.feelslike_c + ' C</p>';
            $("#Temperature").html(tempString);

            var wpString = '<p><strong>Wind:</strong> ' + weatherData.wind_dir + ' ' + weatherData.wind_kph + 'Kph </p>';
            wpString += '<p><strong>Prec:</strong> ' + weatherData.precip_mm + 'mm</p>';
            $("#WindPrecip").html(wpString);

            if (status === "success"){
                var updated = weatherData.last_updated.split(' ');
                $("#get-weather-button").html("Update <span style='color: grey'>(" + updated[1] + ")</span>");
            }
        });
    });



    $("#get-forecast-button").on('click', function() {
        $.get('http://api.weatherapi.com/v1/forecast.json?key=9b35f3bc34574268a6b120401211410&q=Berlin&days=5&aqi=no&alerts=no', function(data, status) {

            const forecastArray = data.forecast.forecastday;

            for (let i = 0; i < forecastArray.length; i++){
                const date = forecastArray[i].date.split("-");
                var string = '<p id="Date">' + date[2] + "/" + date[1] + '</p>';

                const weatherData = forecastArray[i].day;
                const iconString = '.' + weatherData.condition.icon.substring(20);
                string += '<img class="Icon" src=' + iconString + '>';

                $(".day-box").eq(i).html(string);

                // string += '<p class="day-item"><small>' + weatherData.condition.text + '</small></p>';

                // string += '<div style="grid-area: 1/2/2/3">Max:' + weatherData.maxtemp_c+ ' C, Min: ' + weatherData.mintemp_c + ' C</div>';

                // string += '<div style="grid-area: 2/2/3/3">Average: ' + weatherData.avgtemp_c + ' C</div>';

                // string += '<div style="grid-area: 3/2/4/3">Max Wind: ' + weatherData.maxwind_kph + 'Kph </div>';

                // string += '<div style="grid-area: 4/2/5/3">Chance:' + weatherData.daily_chance_of_rain + '%, Precipitation: ' + weatherData.totalprecip_mm + 'mm</div>';
            };
            if (status === "success"){
                $("#get-forecast-button").html("Update Forecast");
            }
        });
    });
});

