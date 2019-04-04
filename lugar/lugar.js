const axios = require('axios');

/**
 * Obtiene la latitud y longitud de la dirección enviada.
 * 
 * @param {string} dir  dirección   dirección. 
 * @returns {object} información relacionada con la dirección.
 */
const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'fd93d1c276msh7c9d39d3b0e8d15p1dc588jsn577bd79a6b65' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
};