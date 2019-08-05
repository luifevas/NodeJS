console.log('notes.js')
const chalk=require('chalk')
const fs = require('fs')
const getNotes = ()=>{
 const notes= loadNotes();
    
    notes.forEach(
        (note)=> console.log(note.title)
        
        )

}

const addNote=(title,body)=>{
    console.log('add note')
    //add a note
    //first load in the exisiting ones
const notes= loadNotes();
console.log(notes);
//check if the title is already in use
            /* const duplicateNotes= notes.filter(
                (individualNote)=>individualNote.title===title
            ); */

                //how to use find array method
            const duplicateNote= notes.find((note)=>note.title===title)
                // to debug use node inspect to run
           // debugger
                //console.log(duplicateNote)
                //if it does not find the element it is undefined, if it finds it  prints the array object
   if(!duplicateNote){

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

const saveNotes= (notes)=>{
const dataJSON=JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes=()=>{
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


const removeNote=(title)=>{
        const notes=loadNotes();

        const removedNotes=  notes.filter(

            (individualNote) =>{
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

    const readNote =(title)=>{

        const notes = loadNotes()

        const noteToRead= notes.find( (note)=>note.title===title)

        if(noteToRead){
            console.log(chalk.blue.inverse(noteToRead.title))
            console.log(noteToRead.body)


        } else{
            const error= chalk.bold.red.inverse
            console.log(error('No note was found with that title'))
        }
    }
module.exports= {
    //export various things
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote:readNote
};