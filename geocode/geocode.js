const REQUEST = require('request')

var geocodeAddress = (address, callback) =>{
    let userURIAddressComponent = encodeURIComponent(address)

REQUEST({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userURIAddressComponent}`,
    json: true
    },
    (error, response, body) =>{
        console.log(userURIAddressComponent);

        if(error)
        {
            callback(console.log('Unable to connect to GOOGLE SERVER'));
        }
        else if (body.status === "ZERO_RESULTS")
        {
            callback('Invalid address')
        }
        else
        {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
})


};

module.exports.geocodeAddress =geocodeAddress;

//8790922b74878df0d8cac35e89ef432c