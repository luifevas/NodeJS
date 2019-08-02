console.log('notes.js')
const chalk=require('chalk')
const fs = require('fs')
const getNotes = function(){

    return "Your notes ..."

}

const addNote=function(title,body){

    //add a note
    //first load in the exisiting ones
const notes= loadNotes();
console.log(notes);
//check if the title is already in use
            const duplicateNotes= notes.filter(
                function (individualNote){
                console.log('here')
                return individualNote.title===title;

            });

   if(duplicateNotes.length==0){

    notes.push(
        {
        
            title:title,
            body:body
        } )
        
        saveNotes(notes)

        console.log('Note added')
       }   
    else{

        console.log('Note title taken')
    }      


}

const saveNotes= function(notes){
const dataJSON=JSON.stringify(notes)
fs.appendFileSync('notes.json',dataJSON)

}

const loadNotes=function(){
        //load notes  for all functions
        //const error= chalk.bold.red.inverse

        //console.log(error('test'))
    //use try catch to prevent error from file not existing
    try{
        const dataBuffer= fs.readFileSync('notes.json');
        const dataJSON= dataBuffer.toJSON()
        //return the object
        return  JSON.parse(dataJSON)
    
        }
        catch(e){
            const error= chalk.bold.red.inverse

            //console.log(error('Error:')+e.message)
            return []
        }



}
module.exports= {
    //export various things
    getNotes: getNotes,
    addNote: addNote

};