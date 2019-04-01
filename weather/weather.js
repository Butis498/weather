const axios = require('axios');

const getWeather = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=afeed53385eca84c656d6cf70613bfc2&units=metric`)

    if (resp.cod === 400) {
        throw new Error(`No data for  lat = ${lat} and lon = ${lon}`)
    }

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}