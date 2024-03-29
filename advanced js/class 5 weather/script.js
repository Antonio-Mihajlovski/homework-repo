const API_URL = 
 "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b";

// const apiBtn = document.querySelector(".api-btn");

// apiBtn.addEventListener("click", () => {
//   fetch(API_URL)
//     .then(res => res.json())
//     .then(function(data){
//         // renderHomePage(data);
//         console.log(data);
//     });
// });
function fetchAPI (){
    fetch(API_URL)
    .then(res => res.json())
    .then(function(data){
        renderHomePage(data);
        renderDaily(data);
        console.log(data);
    });
}
function fetchAPIHourly (){
    fetch(API_URL)
    .then(res => res.json())
    .then(function(data){
        renderHourly(data)
        console.log(data);
    });
}

let date = new Date(1674751570 * 1000);

console.log(date.toLocaleDateString("fr"));
console.log(date.getHours());

const homeBtn = document.querySelector(".home-btn");
const aboutBtn = document.querySelector(".about-btn");
const mainEl = document.querySelector(".main");
const homeCards = document.querySelector(".container")
const hourlyBtn = document.querySelector(".hourlyBtn")

const renderHomePage = dummyCurrent => {
  mainEl.innerHTML = ""

  mainEl.innerHTML = `
  <section class="current">
    <h1 class="card-header">Today Date:${new Date(dummyCurrent.current.dt * 1000).toLocaleDateString("fr")}</h1>
    <div class="card-main"><p>Temp:${dummyCurrent.current.temp}</p>
        <p>Feels Like:${dummyCurrent.current.feels_like}</p>
        <p>Wind speed:${dummyCurrent.current.wind_speed}</p>
        <img src="http://openweathermap.org/img/wn/${dummyCurrent.current.weather[0].icon}@2x.png"/>
    </div>
        <div class="card-footer">
        <p>Description:${dummyCurrent.current.weather[0].description}</p>
        <p>Humidity:${dummyCurrent.current.humidity}</p>
    </div>
  </section>`;
};


const renderDaily = data => {
    
    for (let el of data.daily ){
    mainEl.innerHTML +=
    `<section class="daily">
    <h1 class="card-header">Date: ${new Date(el.dt * 1000).toLocaleDateString("fr")}</h1>
    <div class="card-main">
        <p>Min temp:${el.temp.min}</p>
        <p>Max temp:${el.temp.max}</p>
        <img src="http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png"/>
    </div>
    <div class="card- footer">
        <p>Description:${el.weather[0].description}</p>
        <p>Humidity:${el.humidity}</p>
    </div>
    </section>`
}
}
const renderAboutPage = mainEl => {
  mainEl.innerHTML = "";
  
  mainEl.innerHTML = `<h1>Welcome to the about page</h1>`;

};

const renderHourly = data => {
   mainEl.innerHTML = ""
    for(let ele of data.hourly){
        mainEl.innerHTML += 
        `<section class="hourly">
        <h1 class="card-header">Hour:${new Date(ele.dt * 1000).getHours()}</h1>
        <div class="card-main">
            <p>Temp: ${ele.temp}</p>
            <p>Feels Like: ${ele.feels_like}</p>
            <img src="http://openweathermap.org/img/wn/${ele.weather[0].icon}@2x.png"/>
        </div>
        <div class="card-footer">
            <p>Weather Description: ${ele.weather[0].description}</p>
            <p>Humidity: ${ele.humidity}</p>
        </div>
        </section>`
    }  
}
fetchAPI();
homeBtn.addEventListener("click", () => {
    fetchAPI()
});
aboutBtn.addEventListener("click", () => {
  renderAboutPage(mainEl);
});

hourlyBtn.addEventListener("click", () =>{
    fetchAPIHourly()
})












const dummyCurrent = {
    
        "lat": 41.9965,
        "lon": 21.4314,
        "timezone": "Europe/Skopje",
        "timezone_offset": 3600,
        "current": {
            "dt": 1674752921,
            "sunrise": 1674712382,
            "sunset": 1674747607,
            "temp": 3.9,
            "feels_like": 3.9,
            "pressure": 1011,
            "humidity": 87,
            "dew_point": 1.94,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0,
            "wind_deg": 0,
            "weather": [
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",
                    "icon": "09n"
                }
            ]
        },
        "hourly": [
            {
                "dt": 1674752400,
                "temp": 3.9,
                "feels_like": 3.9,
                "pressure": 1011,
                "humidity": 87,
                "dew_point": 1.94,
                "uvi": 0,
                "clouds": 100,
                "visibility": 916,
                "wind_speed": 0.46,
                "wind_deg": 31,
                "wind_gust": 0.92,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674756000,
                "temp": 3.88,
                "feels_like": 3.88,
                "pressure": 1011,
                "humidity": 89,
                "dew_point": 2.24,
                "uvi": 0,
                "clouds": 100,
                "visibility": 238,
                "wind_speed": 0.49,
                "wind_deg": 347,
                "wind_gust": 0.85,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674759600,
                "temp": 3.82,
                "feels_like": 3.82,
                "pressure": 1011,
                "humidity": 91,
                "dew_point": 2.49,
                "uvi": 0,
                "clouds": 100,
                "visibility": 98,
                "wind_speed": 0.8,
                "wind_deg": 25,
                "wind_gust": 1.21,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.6
            },
            {
                "dt": 1674763200,
                "temp": 3.65,
                "feels_like": 3.65,
                "pressure": 1011,
                "humidity": 93,
                "dew_point": 2.63,
                "uvi": 0,
                "clouds": 100,
                "visibility": 91,
                "wind_speed": 0.87,
                "wind_deg": 39,
                "wind_gust": 1.2,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "pop": 0.6,
                "rain": {
                    "1h": 0.11
                }
            },
            {
                "dt": 1674766800,
                "temp": 3.41,
                "feels_like": 3.41,
                "pressure": 1011,
                "humidity": 95,
                "dew_point": 2.69,
                "uvi": 0,
                "clouds": 100,
                "visibility": 78,
                "wind_speed": 1.07,
                "wind_deg": 60,
                "wind_gust": 1.3,
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "pop": 0.64,
                "snow": {
                    "1h": 0.16
                }
            },
            {
                "dt": 1674770400,
                "temp": 2.9,
                "feels_like": 1.5,
                "pressure": 1011,
                "humidity": 98,
                "dew_point": 1.66,
                "uvi": 0,
                "clouds": 100,
                "visibility": 46,
                "wind_speed": 1.54,
                "wind_deg": 78,
                "wind_gust": 1.56,
                "weather": [
                    {
                        "id": 601,
                        "main": "Snow",
                        "description": "snow",
                        "icon": "13n"
                    }
                ],
                "pop": 0.75,
                "snow": {
                    "1h": 0.61
                }
            },
            {
                "dt": 1674774000,
                "temp": 2.45,
                "feels_like": 0.64,
                "pressure": 1011,
                "humidity": 99,
                "dew_point": 1.35,
                "uvi": 0,
                "clouds": 100,
                "visibility": 36,
                "wind_speed": 1.8,
                "wind_deg": 46,
                "wind_gust": 2.25,
                "weather": [
                    {
                        "id": 601,
                        "main": "Snow",
                        "description": "snow",
                        "icon": "13n"
                    }
                ],
                "pop": 0.77,
                "snow": {
                    "1h": 0.87
                }
            },
            {
                "dt": 1674777600,
                "temp": 2.33,
                "feels_like": 1.05,
                "pressure": 1010,
                "humidity": 97,
                "dew_point": 0.99,
                "uvi": 0,
                "clouds": 100,
                "visibility": 92,
                "wind_speed": 1.4,
                "wind_deg": 53,
                "wind_gust": 1.83,
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "pop": 0.82,
                "snow": {
                    "1h": 0.43
                }
            },
            {
                "dt": 1674781200,
                "temp": 2.29,
                "feels_like": 2.29,
                "pressure": 1010,
                "humidity": 96,
                "dew_point": 0.73,
                "uvi": 0,
                "clouds": 100,
                "visibility": 273,
                "wind_speed": 0.98,
                "wind_deg": 78,
                "wind_gust": 1.21,
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "pop": 0.73,
                "snow": {
                    "1h": 0.13
                }
            },
            {
                "dt": 1674784800,
                "temp": 2.28,
                "feels_like": 2.28,
                "pressure": 1010,
                "humidity": 94,
                "dew_point": 0.43,
                "uvi": 0,
                "clouds": 100,
                "visibility": 177,
                "wind_speed": 1.03,
                "wind_deg": 35,
                "wind_gust": 1.39,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.62
            },
            {
                "dt": 1674788400,
                "temp": 2.07,
                "feels_like": 2.07,
                "pressure": 1009,
                "humidity": 92,
                "dew_point": -0.13,
                "uvi": 0,
                "clouds": 100,
                "visibility": 921,
                "wind_speed": 0.97,
                "wind_deg": 75,
                "wind_gust": 1.11,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.54
            },
            {
                "dt": 1674792000,
                "temp": 1.95,
                "feels_like": 1.95,
                "pressure": 1010,
                "humidity": 94,
                "dew_point": 0.07,
                "uvi": 0,
                "clouds": 100,
                "visibility": 151,
                "wind_speed": 0.95,
                "wind_deg": 72,
                "wind_gust": 1.13,
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "pop": 0.82,
                "snow": {
                    "1h": 0.1
                }
            },
            {
                "dt": 1674795600,
                "temp": 1.68,
                "feels_like": -0.04,
                "pressure": 1010,
                "humidity": 95,
                "dew_point": -0.01,
                "uvi": 0,
                "clouds": 100,
                "visibility": 130,
                "wind_speed": 1.64,
                "wind_deg": 5,
                "wind_gust": 2.22,
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "pop": 0.93,
                "snow": {
                    "1h": 0.36
                }
            },
            {
                "dt": 1674799200,
                "temp": 1.66,
                "feels_like": 1.66,
                "pressure": 1011,
                "humidity": 92,
                "dew_point": -0.43,
                "uvi": 0,
                "clouds": 100,
                "visibility": 440,
                "wind_speed": 0.49,
                "wind_deg": 353,
                "wind_gust": 1.09,
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "pop": 0.93,
                "snow": {
                    "1h": 0.14
                }
            },
            {
                "dt": 1674802800,
                "temp": 1.8,
                "feels_like": 1.8,
                "pressure": 1011,
                "humidity": 91,
                "dew_point": -0.45,
                "uvi": 0.16,
                "clouds": 100,
                "visibility": 483,
                "wind_speed": 0.94,
                "wind_deg": 58,
                "wind_gust": 1.24,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.74
            },
            {
                "dt": 1674806400,
                "temp": 2.25,
                "feels_like": 2.25,
                "pressure": 1012,
                "humidity": 85,
                "dew_point": -0.95,
                "uvi": 0.4,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.11,
                "wind_deg": 22,
                "wind_gust": 1.76,
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "pop": 0.72,
                "snow": {
                    "1h": 0.13
                }
            },
            {
                "dt": 1674810000,
                "temp": 3.17,
                "feels_like": 3.17,
                "pressure": 1011,
                "humidity": 76,
                "dew_point": -1.6,
                "uvi": 0.68,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.3,
                "wind_deg": 314,
                "wind_gust": 2.09,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.49
            },
            {
                "dt": 1674813600,
                "temp": 4.12,
                "feels_like": 4.12,
                "pressure": 1011,
                "humidity": 69,
                "dew_point": -2,
                "uvi": 1.14,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.28,
                "wind_deg": 338,
                "wind_gust": 1.9,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.37
            },
            {
                "dt": 1674817200,
                "temp": 4.82,
                "feels_like": 3.82,
                "pressure": 1011,
                "humidity": 65,
                "dew_point": -2.11,
                "uvi": 1.16,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.44,
                "wind_deg": 359,
                "wind_gust": 1.87,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.33
            },
            {
                "dt": 1674820800,
                "temp": 5.06,
                "feels_like": 3.56,
                "pressure": 1010,
                "humidity": 64,
                "dew_point": -2.15,
                "uvi": 0.95,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.88,
                "wind_deg": 25,
                "wind_gust": 2.04,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.29
            },
            {
                "dt": 1674824400,
                "temp": 5.04,
                "feels_like": 3.38,
                "pressure": 1011,
                "humidity": 64,
                "dew_point": -2.24,
                "uvi": 0.47,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 2.03,
                "wind_deg": 15,
                "wind_gust": 2.13,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.01
            },
            {
                "dt": 1674828000,
                "temp": 4.79,
                "feels_like": 2.9,
                "pressure": 1011,
                "humidity": 64,
                "dew_point": -2.27,
                "uvi": 0.21,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 2.22,
                "wind_deg": 3,
                "wind_gust": 2.48,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.05
            },
            {
                "dt": 1674831600,
                "temp": 4.34,
                "feels_like": 2.94,
                "pressure": 1012,
                "humidity": 66,
                "dew_point": -2.3,
                "uvi": 0,
                "clouds": 98,
                "visibility": 10000,
                "wind_speed": 1.7,
                "wind_deg": 356,
                "wind_gust": 2.47,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.05
            },
            {
                "dt": 1674835200,
                "temp": 3.17,
                "feels_like": 1.87,
                "pressure": 1012,
                "humidity": 74,
                "dew_point": -1.91,
                "uvi": 0,
                "clouds": 93,
                "visibility": 10000,
                "wind_speed": 1.49,
                "wind_deg": 334,
                "wind_gust": 1.68,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.05
            },
            {
                "dt": 1674838800,
                "temp": 2.32,
                "feels_like": 0.95,
                "pressure": 1013,
                "humidity": 78,
                "dew_point": -2.03,
                "uvi": 0,
                "clouds": 79,
                "visibility": 10000,
                "wind_speed": 1.46,
                "wind_deg": 326,
                "wind_gust": 1.49,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.05
            },
            {
                "dt": 1674842400,
                "temp": 1.85,
                "feels_like": 1.85,
                "pressure": 1013,
                "humidity": 80,
                "dew_point": -2.18,
                "uvi": 0,
                "clouds": 70,
                "visibility": 10000,
                "wind_speed": 1.27,
                "wind_deg": 308,
                "wind_gust": 1.29,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.05
            },
            {
                "dt": 1674846000,
                "temp": 1.55,
                "feels_like": 0.03,
                "pressure": 1014,
                "humidity": 81,
                "dew_point": -2.36,
                "uvi": 0,
                "clouds": 21,
                "visibility": 10000,
                "wind_speed": 1.49,
                "wind_deg": 295,
                "wind_gust": 1.53,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674849600,
                "temp": 1.22,
                "feels_like": 1.22,
                "pressure": 1014,
                "humidity": 81,
                "dew_point": -2.57,
                "uvi": 0,
                "clouds": 20,
                "visibility": 10000,
                "wind_speed": 1.19,
                "wind_deg": 294,
                "wind_gust": 1.21,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674853200,
                "temp": 0.96,
                "feels_like": 0.96,
                "pressure": 1014,
                "humidity": 82,
                "dew_point": -2.77,
                "uvi": 0,
                "clouds": 21,
                "visibility": 10000,
                "wind_speed": 0.84,
                "wind_deg": 303,
                "wind_gust": 0.89,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674856800,
                "temp": 0.82,
                "feels_like": 0.82,
                "pressure": 1015,
                "humidity": 82,
                "dew_point": -2.9,
                "uvi": 0,
                "clouds": 21,
                "visibility": 10000,
                "wind_speed": 0.82,
                "wind_deg": 315,
                "wind_gust": 0.85,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674860400,
                "temp": 0.74,
                "feels_like": -0.65,
                "pressure": 1015,
                "humidity": 81,
                "dew_point": -3.07,
                "uvi": 0,
                "clouds": 21,
                "visibility": 10000,
                "wind_speed": 1.34,
                "wind_deg": 287,
                "wind_gust": 1.34,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674864000,
                "temp": 0.81,
                "feels_like": -0.69,
                "pressure": 1015,
                "humidity": 80,
                "dew_point": -3.18,
                "uvi": 0,
                "clouds": 27,
                "visibility": 10000,
                "wind_speed": 1.41,
                "wind_deg": 287,
                "wind_gust": 1.49,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674867600,
                "temp": 0.69,
                "feels_like": 0.69,
                "pressure": 1016,
                "humidity": 79,
                "dew_point": -3.37,
                "uvi": 0,
                "clouds": 44,
                "visibility": 10000,
                "wind_speed": 0.93,
                "wind_deg": 297,
                "wind_gust": 0.94,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674871200,
                "temp": 0.53,
                "feels_like": 0.53,
                "pressure": 1016,
                "humidity": 79,
                "dew_point": -3.58,
                "uvi": 0,
                "clouds": 33,
                "visibility": 10000,
                "wind_speed": 1.06,
                "wind_deg": 283,
                "wind_gust": 1.1,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674874800,
                "temp": 0.45,
                "feels_like": 0.45,
                "pressure": 1016,
                "humidity": 79,
                "dew_point": -3.71,
                "uvi": 0,
                "clouds": 38,
                "visibility": 10000,
                "wind_speed": 1.12,
                "wind_deg": 289,
                "wind_gust": 1.14,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674878400,
                "temp": 0.36,
                "feels_like": 0.36,
                "pressure": 1016,
                "humidity": 79,
                "dew_point": -3.83,
                "uvi": 0,
                "clouds": 37,
                "visibility": 10000,
                "wind_speed": 0.98,
                "wind_deg": 291,
                "wind_gust": 1.02,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674882000,
                "temp": 0.28,
                "feels_like": 0.28,
                "pressure": 1017,
                "humidity": 79,
                "dew_point": -3.95,
                "uvi": 0,
                "clouds": 38,
                "visibility": 10000,
                "wind_speed": 0.85,
                "wind_deg": 285,
                "wind_gust": 0.92,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674885600,
                "temp": 0.29,
                "feels_like": 0.29,
                "pressure": 1017,
                "humidity": 78,
                "dew_point": -3.98,
                "uvi": 0,
                "clouds": 44,
                "visibility": 10000,
                "wind_speed": 1.1,
                "wind_deg": 272,
                "wind_gust": 1.2,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674889200,
                "temp": 1.37,
                "feels_like": 1.37,
                "pressure": 1018,
                "humidity": 73,
                "dew_point": -3.92,
                "uvi": 0.29,
                "clouds": 98,
                "visibility": 10000,
                "wind_speed": 1.07,
                "wind_deg": 276,
                "wind_gust": 1.49,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674892800,
                "temp": 2.46,
                "feels_like": 2.46,
                "pressure": 1018,
                "humidity": 67,
                "dew_point": -4.06,
                "uvi": 0.72,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 1.24,
                "wind_deg": 302,
                "wind_gust": 1.73,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674896400,
                "temp": 3.5,
                "feels_like": 3.5,
                "pressure": 1018,
                "humidity": 62,
                "dew_point": -3.92,
                "uvi": 1.24,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 1.07,
                "wind_deg": 353,
                "wind_gust": 1.78,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674900000,
                "temp": 4.41,
                "feels_like": 4.41,
                "pressure": 1018,
                "humidity": 60,
                "dew_point": -3.66,
                "uvi": 1.58,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 1.14,
                "wind_deg": 12,
                "wind_gust": 1.79,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674903600,
                "temp": 5.11,
                "feels_like": 5.11,
                "pressure": 1017,
                "humidity": 58,
                "dew_point": -3.38,
                "uvi": 1.61,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.17,
                "wind_deg": 4,
                "wind_gust": 1.72,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674907200,
                "temp": 5.35,
                "feels_like": 4,
                "pressure": 1017,
                "humidity": 58,
                "dew_point": -3.11,
                "uvi": 1.31,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.79,
                "wind_deg": 26,
                "wind_gust": 2.04,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674910800,
                "temp": 5.46,
                "feels_like": 4.23,
                "pressure": 1017,
                "humidity": 59,
                "dew_point": -2.82,
                "uvi": 0.66,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.7,
                "wind_deg": 20,
                "wind_gust": 1.99,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674914400,
                "temp": 5.28,
                "feels_like": 4.02,
                "pressure": 1018,
                "humidity": 61,
                "dew_point": -2.59,
                "uvi": 0.29,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.7,
                "wind_deg": 1,
                "wind_gust": 1.97,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674918000,
                "temp": 4.28,
                "feels_like": 2.94,
                "pressure": 1018,
                "humidity": 69,
                "dew_point": -1.9,
                "uvi": 0,
                "clouds": 90,
                "visibility": 10000,
                "wind_speed": 1.64,
                "wind_deg": 10,
                "wind_gust": 1.9,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1674921600,
                "temp": 2.5,
                "feels_like": 1.15,
                "pressure": 1019,
                "humidity": 75,
                "dew_point": -2.44,
                "uvi": 0,
                "clouds": 74,
                "visibility": 10000,
                "wind_speed": 1.46,
                "wind_deg": 7,
                "wind_gust": 1.48,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            }
        ],
        "daily": [
            {
                "dt": 1674727200,
                "sunrise": 1674712382,
                "sunset": 1674747607,
                "moonrise": 1674722640,
                "moonset": 1674768300,
                "moon_phase": 0.17,
                "temp": {
                    "day": 3.67,
                    "min": 2.9,
                    "max": 4.51,
                    "night": 2.9,
                    "eve": 3.97,
                    "morn": 3.67
                },
                "feels_like": {
                    "day": 1.42,
                    "night": 1.5,
                    "eve": 3.97,
                    "morn": 0.99
                },
                "pressure": 1017,
                "humidity": 97,
                "dew_point": 2.26,
                "wind_speed": 3.02,
                "wind_deg": 79,
                "wind_gust": 6.19,
                "weather": [
                    {
                        "id": 616,
                        "main": "Snow",
                        "description": "rain and snow",
                        "icon": "13d"
                    }
                ],
                "clouds": 100,
                "pop": 0.92,
                "rain": 2.19,
                "snow": 3.06,
                "uvi": 0.24
            },
            {
                "dt": 1674813600,
                "sunrise": 1674798733,
                "sunset": 1674834084,
                "moonrise": 1674810420,
                "moonset": 1674858900,
                "moon_phase": 0.21,
                "temp": {
                    "day": 4.12,
                    "min": 0.82,
                    "max": 5.06,
                    "night": 0.82,
                    "eve": 3.17,
                    "morn": 1.95
                },
                "feels_like": {
                    "day": 4.12,
                    "night": 0.82,
                    "eve": 1.87,
                    "morn": 1.95
                },
                "pressure": 1011,
                "humidity": 69,
                "dew_point": -2,
                "wind_speed": 2.22,
                "wind_deg": 3,
                "wind_gust": 2.48,
                "weather": [
                    {
                        "id": 601,
                        "main": "Snow",
                        "description": "snow",
                        "icon": "13d"
                    }
                ],
                "clouds": 100,
                "pop": 0.93,
                "snow": 2.16,
                "uvi": 1.16
            },
            {
                "dt": 1674900000,
                "sunrise": 1674885081,
                "sunset": 1674920561,
                "moonrise": 1674898200,
                "moonset": 0,
                "moon_phase": 0.25,
                "temp": {
                    "day": 4.41,
                    "min": 0.28,
                    "max": 5.46,
                    "night": 0.92,
                    "eve": 2.5,
                    "morn": 0.36
                },
                "feels_like": {
                    "day": 4.41,
                    "night": 0.92,
                    "eve": 1.15,
                    "morn": 0.36
                },
                "pressure": 1018,
                "humidity": 60,
                "dew_point": -3.66,
                "wind_speed": 1.79,
                "wind_deg": 26,
                "wind_gust": 2.04,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 99,
                "pop": 0,
                "uvi": 1.61
            },
            {
                "dt": 1674986400,
                "sunrise": 1674971428,
                "sunset": 1675007038,
                "moonrise": 1674986100,
                "moonset": 1674949380,
                "moon_phase": 0.28,
                "temp": {
                    "day": 4.49,
                    "min": 0.1,
                    "max": 5.71,
                    "night": 0.6,
                    "eve": 2.3,
                    "morn": 0.31
                },
                "feels_like": {
                    "day": 4.49,
                    "night": 0.6,
                    "eve": 0.3,
                    "morn": 0.31
                },
                "pressure": 1024,
                "humidity": 56,
                "dew_point": -4.45,
                "wind_speed": 2.09,
                "wind_deg": 10,
                "wind_gust": 2.63,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": 28,
                "pop": 0,
                "uvi": 1.51
            },
            {
                "dt": 1675072800,
                "sunrise": 1675057773,
                "sunset": 1675093516,
                "moonrise": 1675074300,
                "moonset": 1675039800,
                "moon_phase": 0.31,
                "temp": {
                    "day": 3.6,
                    "min": 0.04,
                    "max": 4.86,
                    "night": 1.81,
                    "eve": 2.32,
                    "morn": 0.15
                },
                "feels_like": {
                    "day": 3.6,
                    "night": 1.81,
                    "eve": 2.32,
                    "morn": 0.15
                },
                "pressure": 1019,
                "humidity": 61,
                "dew_point": -4.15,
                "wind_speed": 1.63,
                "wind_deg": 83,
                "wind_gust": 1.64,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 100,
                "pop": 0.01,
                "uvi": 1.86
            },
            {
                "dt": 1675159200,
                "sunrise": 1675144116,
                "sunset": 1675179993,
                "moonrise": 1675162740,
                "moonset": 1675130160,
                "moon_phase": 0.34,
                "temp": {
                    "day": 3.49,
                    "min": 0.29,
                    "max": 5.47,
                    "night": 0.29,
                    "eve": 4.5,
                    "morn": 1.72
                },
                "feels_like": {
                    "day": 3.49,
                    "night": 0.29,
                    "eve": 2.68,
                    "morn": 1.72
                },
                "pressure": 1016,
                "humidity": 77,
                "dew_point": -1.16,
                "wind_speed": 2.82,
                "wind_deg": 18,
                "wind_gust": 5.88,
                "weather": [
                    {
                        "id": 616,
                        "main": "Snow",
                        "description": "rain and snow",
                        "icon": "13d"
                    }
                ],
                "clouds": 100,
                "pop": 0.56,
                "rain": 0.92,
                "snow": 0.88,
                "uvi": 2
            },
            {
                "dt": 1675245600,
                "sunrise": 1675230457,
                "sunset": 1675266471,
                "moonrise": 1675251660,
                "moonset": 1675220280,
                "moon_phase": 0.37,
                "temp": {
                    "day": 3.62,
                    "min": -0.14,
                    "max": 5.27,
                    "night": 0.9,
                    "eve": 4.28,
                    "morn": 0.05
                },
                "feels_like": {
                    "day": 1.8,
                    "night": 0.9,
                    "eve": 4.28,
                    "morn": 0.05
                },
                "pressure": 1025,
                "humidity": 47,
                "dew_point": -7.53,
                "wind_speed": 3.31,
                "wind_deg": 0,
                "wind_gust": 5.23,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 7,
                "pop": 0.03,
                "uvi": 2
            },
            {
                "dt": 1675332000,
                "sunrise": 1675316796,
                "sunset": 1675352949,
                "moonrise": 1675341000,
                "moonset": 1675310040,
                "moon_phase": 0.4,
                "temp": {
                    "day": 4,
                    "min": 0.41,
                    "max": 6.53,
                    "night": 2.53,
                    "eve": 5.08,
                    "morn": 0.6
                },
                "feels_like": {
                    "day": 4,
                    "night": -0.25,
                    "eve": 5.08,
                    "morn": 0.6
                },
                "pressure": 1023,
                "humidity": 52,
                "dew_point": -5.82,
                "wind_speed": 2.75,
                "wind_deg": 247,
                "wind_gust": 3.52,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 92,
                "pop": 0.33,
                "rain": 0.12,
                "uvi": 2
            }
        ]
    
}