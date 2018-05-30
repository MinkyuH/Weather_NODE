const REQUEST = require('request');
const YARGS = require('yargs')
const GEOCODE = require('./geocode/geocode');

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

GEOCODE.geocodeAddress(argv.address);
