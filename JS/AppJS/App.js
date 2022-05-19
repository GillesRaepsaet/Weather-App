 const AppWeather = {
    'ApiKey': '13eee00e03cf134fb07624e135c0d85a',
    fetchWeather: function(country){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + country + "&056&units=metric&appid=" + this.ApiKey 
        ).then((response) => response.json()
        ).then((data) => this.WeatherDisplay(data))
        .catch( e => console.log(e))

    },
        WeatherDisplay:  function (data){
        
            console.log("ici")
        if(!data.name) return

        const {name} =  data
        const {icon, description} = data.weather[0]
        const {temp, humidity} =  data.main
        const {speed} = data.wind

        //console.log(name,icon,description,temp, humidity,speed)

        document.getElementById('city').innerText ="Weather of  " + name
        document.getElementById('icons').src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector('.description').innerText = description
        document.getElementById('weatherDegrees').innerText = temp + " °C"
        document.getElementById('weatherHumidity').innerText = "humidity: " +humidity+ "%"  
        document.getElementById('weatherWind').innerText = "wind speed: " + speed+ "km/h" 
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + name + "')"
        
    },


   containerSearch: function(){ 
       this.fetchWeather(document.querySelector('#Search-Input').value)
    }

}

document.querySelector('#searchBtn')
.addEventListener('click', function() {
    console.log('la')
    AppWeather.containerSearch()
})

document.querySelector('#Search-Input').addEventListener('keyup', function(event) {
    if(event.key == "Enter"){
        AppWeather.containerSearch()
    }
 })
 
 export default containerSearch
 