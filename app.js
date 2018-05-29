const REQUEST = require('request');
const YARGS = require('yargs')

const argv = YARGS.options({
    a:{
        demand: true,
        alias: 'address',
        describe: 'Address to fetch from GOOGLE API',
        string: true
    }
})
.help()
.alias('help', 'h') 
.argv;

let userURIAddressComponent = encodeURIComponent(argv.address)


REQUEST({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userURIAddressComponent}`,
    json: true
    }, 
    (error, response, body) =>{
    console.log(`Address:  ${body.results[0].formatted_address}`);
    console.log(`Geolocation (Latitutde): ${body.results[0].geometry.location.lat}`);
    console.log(`Geolocation (Longitutde): ${body.results[0].geometry.location.lng}`);
})