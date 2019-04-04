const axios = require('axios');

/**
 * Obtiene el clima de la latitud y longitud enviada.
 * 
 * @param {number} lat  latitud.
 * @param {number} lng  longitud.
 * @returns {number}    temperatura.
 */
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b0a9c8cb7ae8b190b552aea93a0ea7c8&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};