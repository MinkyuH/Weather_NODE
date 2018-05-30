// const REQUEST = require('request');
// const YARGS = require('yargs')
// const GEOCODE = require('./geocode/geocode');

// const argv = YARGS.options({
//     a:{
//         demand: true,
//         alias: 'address',
//         describe: 'Address to fetch from GOOGLE API',
//         string: true
//     }
// })
// .help()
// .alias('help', 'h') 
// .argv;

// GEOCODE.geocodeAddress(argv.address, (err, results) =>{
//     if (err){
//         console.log(err)
//     }
//     else
//     {
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// });


const API_KEY = '8790922b74878df0d8cac35e89ef432c';
const REQUEST = require('request');
const GEOCODE = require('./geocode/geocode');

let lat = 37.8267;
let long = -122.4233;

REQUEST({
    url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`,
    json: true
    }, (err, response,body) => {
        if (err){
            console.log (`error found: ${err}`)
        }
        else{
            console.log(`Temperature: ${body.currently.temperature}`)
        }
    })