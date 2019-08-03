console.log('notes.js')
const chalk=require('chalk')
const fs = require('fs')
const getNotes = function(){

    return "Your notes ..."

}

const addNote=function(title,body){
    console.log('add note')
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
fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes=function(){
        //load notes  for all functions
        //const error= chalk.bold.red.inverse

        //console.log(error('test'))
    //use try catch to prevent error from file not existing
    try{
        const dataBuffer= fs.readFileSync('notes.json');
        //ALWAYS TOSTRING NEVER TO JSON
        const dataJSON= dataBuffer.toString()
        //return the object
        return  JSON.parse(dataJSON)
    
        }
        catch(e){
            const error= chalk.bold.red.inverse

            //console.log(error('Error:')+e.message)
            return []
        }

}


const removeNote=function(title){
        const notes=loadNotes();

        const removedNotes=  notes.filter(

            function(individualNote){
                 if(individualNote.title!=title ){

                    
                    return true;


                 }   else{
                    const error= chalk.bold.green.inverse
                    console.log(error('Note was removed'))
                        return false;
                 }
               
            }
        )

        if(notes.length==removedNotes.length){
            const success= chalk.bold.red.inverse
                    console.log(success('No note was found with that title'))

        }
        saveNotes(removedNotes)

}
module.exports= {
    //export various things
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote

};