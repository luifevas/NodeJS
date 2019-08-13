//Weather app start
// it can be done without library, but easier with request npm package
// to install npm i request@2.88.0
const request= require('request')
//url from darksy weather api
//query params at end of url


//Geocoding using mapbox
const geoURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXhvZHVzbGlnaHQiLCJhIjoiY2p6OWY1MzNrMDJvdDNtcnQ0ejVoMWU2bSJ9.0e0u1OfiF5WzcARM8ASSlA&limit=1'

request({url:geoURL,json:true},(error,response)=>{
const dataGeo=response.body.features[0].center
console.log('latitude : '+dataGeo[1]
+' longitude: '+dataGeo[0])


})


const url= 'https://api.darksky.net/forecast/9bc850d38ffa787efab8fb10a3ef1c23/37.8267,-122.4233?units=si';

//using request, first property is options, just with url objecft, and function to use as callback with the info
//json:true is going to accept the http reqiuest as json and autoparse it




request({url:url,json:true},(error,response)=>{
//console.log(response)
    const data= (response.body)
    //console.log(data.currently)
    
    const temp=data.currently.temperature;
    const rainChance=data.currently.precipProbability;
    const todaySummary= data.daily.data[0].summary
    console.log(todaySummary+'It is currently '+temp+
    ' degrees out. There is '+
    rainChance+ ' % chance of rain');

})