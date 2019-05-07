const axios = require('axios');



const getLocation = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': 'f3af3822e7mshc7081aeaed03206p1d1775jsn1e05292a7221' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No direction for ${dir}`);
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lon = data.lon;



    return {
        direction,
        lat,
        lon
    }



}


module.exports = {
    getLocation
}