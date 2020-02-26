var search = document.getElementById("search");
search.addEventListener("keyup", e => {
    
    if(e.keyCode === 13)
    {
        var getCityname = e.target.value;
        getWeather(getCityname);
    }
   
});
function getWeather(getCityname)
{
    const wheatherApi =`http://api.openweathermap.org/data/2.5/weather?q=${getCityname}&&mode=json&units=metric&appid=3dbae2aa448c975d9531a105ecab3249`;
    window
    .fetch(wheatherApi)
    .then(data => {
        data
        .json()
        .then(weather => 
           
           { 
               var output = "";
               console.log(weather.coord.lon);
               console.log(weather.coord.lat);
               console.log(weather);
               
               //array here
               var weatherData = weather.weather;
               for(let x of weatherData)
               {
                 output += `
                <div class=" mt-4 weatherBlock">
                   <div class="card-body1">
                     <h1>${weather.name} </h1>
                     <span class="icon"><img  src="http://openweathermap.org/img/wn/${x.icon}.png"></span>
                     <p><span>temp:</span>
                     <span class="temp">${weather.main.temp}&deg;c </span>
                    <span class="des float-left">${x.description} </span>
                    <span class="des float-right">${x.main} </span>
                     </p>
   
                   </div> 
                </div>           
                `;
                document.getElementById("template").innerHTML =output;
                
               }

           })
        .catch(err => console.log(err))
    })
    
    .catch(err => console.log(err));
}









//3dbae2aa448c975d9531a105ecab3249  key