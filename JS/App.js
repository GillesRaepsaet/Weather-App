const AppWeather = {
    'ApiKey': '13eee00e03cf134fb07624e135c0d85a',
    fetchWeather:function(country){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + country + "&056&units=metric&appid=" + this.ApiKey 
        ).then((response) => response.json()
        ).then((data) => this.WeatherDisplay(data))

    },
    WeatherDisplay: function (data){
        const {name} =  data
        const {icon, description} = data.weather[0]
        const {temp, humidity} =  data.main
        const {speed} = data.wind

        console.log(name,icon,description,temp, humidity,speed)

        document.getElementById('city').innerHTML ="Weather " + name
        document.getElementById('icons').src = "https://openweathermap.org/img/wn/" + icon + ".png"
    }

}


const button = document.querySelector('button')

button.addEventListener('click', () =>{
    
})  