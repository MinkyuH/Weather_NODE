const REQUEST = require('request');

REQUEST({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%201/11%20pannill%20place',
    json: true
    }, 
    (error, response, body) =>{
    console.log(JSON.stringify(body, undefined, 2));
})