//Use json in node js
const fs=require('fs');
/* const book={

    title: 'Game of Thrones',
    author:'G.R.R Martin'
}

//convert object  or array to json

const bookJson= JSON.stringify(book);
console.log(bookJson) */
/* 
console.log(jsonBook)

//parse from json to object
const parsedData= JSON.parse(jsonBook)
console.log(parsedData.author) */

//fs.writeFile=('testSon.json','this is a test')

//const argvJson= JSON.stringify(book)
   // console.log(argvJson)
    //fs.writeFileSync('1-json.json', bookJson)
//get the json from the file

/* const dataBuffer=fs.readFileSync('1-json.json')

console.log(dataBuffer.toString()) 

const data=JSON.parse(dataBuffer.toString());

console.log(data.title) */


const  bufferData= fs.readFileSync('1-json.json');
const jsonBuffer= JSON.parse(bufferData.toString())
//console.log(jsonBuffer)
//const parsedJson= JSON.parse(jsonBuffer)
//console.log(jsonBuffer)
//To get a json data from a file just parse the buffer to get the object from a to
//string buffer, then change the attributes as an object then stringify to convert to Json

jsonBuffer.name='Luis'
jsonBuffer.age='25'
console.log(jsonBuffer)
const jsonBack= JSON.stringify(jsonBuffer)
console.log(jsonBack)
fs.writeFileSync('1-json.json',jsonBack)


