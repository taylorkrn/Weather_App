$(document).ready(function() {
    $("#get-weather-button").on('click', function() {
        $.get('http://api.weatherapi.com/v1/current.json?key=9b35f3bc34574268a6b120401211410&q=Berlin&aqi=no', function(data, status) {
            var string = '<ul>';

            $.each(data.current, function(index,value) {
                string += "<li>"+index+": "+value+"</li>";
            });
            string += '<ul>';
            $("#show-weather").html(string);
        });
    });



    $("#get-forecast-button").on('click', function() {
        $.get('http://api.weatherapi.com/v1/forecast.json?key=9b35f3bc34574268a6b120401211410&q=Berlin&days=5&aqi=no&alerts=no', function(data, status) {
            var string = '<ul>';

            const forecastArray = data.forecast.forecastday;
            console.log(forecastArray);
            for (let i = 0; i < forecastArray.length; i++){
                string += "<li>Date: "+forecastArray[i].date+"</li>";
                $.each(forecastArray[i].day, function(index,value){
                    string += "<li>"+index+": "+value+"</li>";
                });
            };
            string += '<ul>';
            $("#show-forecast").html(string);
            // $.each(data.forecast.forecastday, function(index,value) {
            //     if (index === "date"){
            //         console.log(value);
            //     };
            // });
            //     string += "<li>"+index+": "+value+"</li>";
            // });
            // string += '<ul>';
            // $("#show-forecast").html(string);
        });
    });
});

