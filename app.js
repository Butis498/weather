const argv = require('./config/config-yargs').argv;
const location = require('./place/place');
const weather = require('./weather/weather');


const getTemp = (direction) => {

    location.getLocation(direction).then(resp => {

        weather.getWeather(resp.lat, resp.lon).then(resp2 => {

            console.log(`temp of ${resp.direction} is ${resp2}`);

        }).catch(console.log);
    }).catch(console.log);


}


getTemp(argv.direction)