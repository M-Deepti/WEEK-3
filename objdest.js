g=()=>
{
    let person = {
        firstName: 'Nivvi',
        lastName: 'Doe'
    };
    let {
        firstName, 
        lastName
     } = person;
    document.getElementById("para").innerHTML="Greetings Mr/Ms "+ lastName;
    document.getElementById("para2").innerHTML="my name is "+firstName;  
    }