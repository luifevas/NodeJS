/* 
 Class 1
//To call native modules, check docs if module needs to be called.

const fs1=require('fs');
//fs1.writeFileSync( 'notes.txt',"Node JS");
fs1.appendFileSync('notes.txt',' Luis Vasquez') */

//Class 2 How to add modules made by myself

/*
 Class 1
//To call native modules, check docs if module needs to be called.

const fs1=require('fs');
//fs1.writeFileSync( 'notes.txt',"Node JS");
fs1.appendFileSync('notes.txt',' Luis Vasquez') */
//Class 2 How to add modules made by myself
/* const sum=require('./util.js')


console.log(sum(1,4)) */
/* 
// Class 3, load npm package
const validator=require('validator')
const getNotes = require('./notes.js')

console.log(getNotes())

console.log(validator.isEmail('@hotmail.com'))

console.log(validator.isURL('wwwgoogleom'))
//to run npm, we need to install npm running a command called npm init , use default values for now
// to install validator package npm i validator@10.8.0
 */




 //Class 4, use chalk v 2.4.1
 //order does not matter in chalk

 const chalk= require('chalk')
 const yargs =require('yargs')
 const fs= require('fs')
 //const fs= require('')
 const notes = require('./notes.js')
 /* const success= chalk.bold.green;

 console.log(success('This is a Success'));
 console.log(chalk.red.inverse("Error"));
 console.log(chalk.bgGreen.black('test')) */

//Command line args
//first item is path to node, second path to file, third onwards are command args
const action=process.argv[2]
//.log(process.argv)
//customize yargs version
yargs.version('1.1.3')

//setup commands add, remove, read, list notes

//create add command

yargs.command({
command: 'add',
describe :'Add a new note',
// title is an option --title, define it in builder
builder : {
            title :{
                    describe:'Note title',
                    //so its mandatory
                    demandOption:true,
                    //enforce argument Type
                    type: 'string'
            },

            body  :{
                describe:'Note body',
                //so its mandatory
                demandOption:true,
                //enforce argument Type
                type: 'string'
        }

},

handler:  function(argv){

    //use function in notes.js to addNote
    
//xconsole.log('I am in add handler function')
    notes.addNote(argv.title,argv.body)
    //its the name in the builder
    /* console.log('Title :',argv.title)
    console.log('Body:',argv.body)
 */
    //const argvJson= JSON.stringify(argv)
    //console.log(argvJson)
    //fs.writeFileSync('chemo.json', argvJson)
}

})


yargs.command({
    command: 'remove',
    describe :'Remove a new note',
    builder: {
        title :{
            describe:'Note title',
            //so its mandatory
            demandOption:true,
            //enforce argument Type
            type: 'string'
    }

    },
    handler:  function(argv){
    
        console.log('Remove a note')
        notes.removeNote(argv.title)
    
    }
    
    })


    yargs.command({
        command: 'list',
        describe :'List the notes',
        handler:  function(){
        
            console.log('Listing all notes')
        
        }
        
        })


        yargs.command({
            command: 'read',
            describe :'Read a note',
            handler:  function(){
            
                console.log('Reading a note')
            
            }
            
            })
//so yargs knows when to parse arguments
yargs.parse()



//console.log(yargs.argv)

 //Class 5, global npm modules from the terminal, nodemon so we can see changes auto, globally  
 //sudo npm install nodemon@1.18.5 -g

 //Then we run our script with nodemon

 //Class 6 , use yargs module to parse  various args
 //npm i yargs@12.02
