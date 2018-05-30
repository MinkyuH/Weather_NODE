const REQUEST = require('request')

var geocodeAddress = (address) =>{
    let userURIAddressComponent = encodeURIComponent(address)

REQUEST({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userURIAddressComponent}`,
    json: true
    },
    (error, response, body) =>{
        console.log(userURIAddressComponent);
        console.log(body);
        if(error)
        {
            console.log('Unable to connect to GOOGLE SERVER');
        }
        else if (body.status === "ZERO_RESULT")
        {
            console.log('Invalid address')
        }
        else if (body.status === "Ok")
        {
            console.log(`Address:  ${body.results[0].formatted_address}`);
            console.log(`Geolocation (Latitutde): ${body.results[0].geometry.location.lat}`);
            console.log(`Geolocation (Longitutde): ${body.results[0].geometry.location.lng}`);
        }
})


};

module.exports.geocodeAddress =geocodeAddress;