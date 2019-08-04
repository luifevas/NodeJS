const square= function(x){
return x*x;

}

//do arrow Functions

const square2= (x)=>{

return x*x;

}
//whatever is typed after the arrows is returned
const square3 =(x)=> x*x


const event ={

    name:'Birthday Party',
    guestList:['Andrew','Jen','M ike'],
    //Dont use arrow functions  for methods inside objects
    //instead use following sintax
    printGuestList(){

        console.log('Guest list for: '+this.name)
        //this.binding does not work, use arrow function because they dont bind their own this value
        this.guestList.forEach((guest)=>{
            console.log(guest+' is attending '+ this.name)
        })
    }
}
event.printGuestList();
console.log(square(3))
console.log(square2(3))
console.log(square3(3))