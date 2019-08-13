//Weather app start
// it can be done without library, but easier with request npm package
// to install npm i request@2.88.0
const request= require('request')
//url from darksy weather api
//query params at end of url
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