const axios = require('axios');

const instanceAxios = axios.create({
    baseURL: 'https://swapi.dev/api/planets/',
    timeout: 2000
});

module.exports = instanceAxios;