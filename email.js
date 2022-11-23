

  


   but = document.querySelector("#btn");




    but.addEventListener('click', function (e) {
       
   
    //when I declare the below variables out side of this  function, I was not able to 
    // see the input values in the console.

    let n = document.querySelector("#Name").value;

    let email = document.querySelector("#Email").value;

    let telephoneNumber = document.querySelector("#TelephoneNumber").value;

    let address = document.querySelector("#Address").value;

    let message = document.querySelector("#Message").value;

    const w =   ` Hi Nipuna you have a new massage here are the details :-
       
    Name:- ${n} 

    email:- ${email}
    
    telephone-number:- ${telephoneNumber} 
    
    address:- ${address}

    message:- ${message}
    
    `

    console.log(w); 
 
    e.preventDefault();
    
    
});

 document.addEventListener('click',function(e){

    console.log('It is happening');
 })



  
    


