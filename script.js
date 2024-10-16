/* UNDERVISNING 7-8 : INTRO JAVASCRIPT */

function loginCheck(username, currentHour, isLoggedIn) // Function er en blokk med kode som kan kalles ved å bruke funksjonsnavnet

{
  if (isLoggedIn) // Boolean representerer enten sann (true) eller usann (false) 
    
{ 
    console.log("Login successful!"); // The log() method writes (logs) a message to the console 
    console.log("Username: " + username); // The log() method writes (logs) a message to the console 
    console.log("Logged in at: " + currentHour + " hours."); // The log() method writes (logs) a message to the console 
  } 
  
  else // Boolean representerer enten sann (true) eller usann (false)
  {
      console.log("Login failed. Please try again."); 
  }
}

const username = "Tanja"; // const er en variabel som ikke kan endres etter den er tildelt 

/*
"username" er et vavlgfritt navn. 
"=" lagrer verdien på høyre side i navnet på venstre side.
"Tanja" er verdien som blir lagret
*/

let currentHour = new Date().getHours(); // "let" er ett nøkkelord for å lage en ny variabel. ("let" er en variabel som kan endres etter den er tildelt verdi.) 
let isLoggedIn = true; // "let" er ett nøkkelord for å lage en ny variabel. ("let" er en variabel som kan endres etter den er tildelt verdi.) 

loginCheck(username, currentHour, isLoggedIn); // Function er en blokk med kode som kan kalles ved å bruke funksjonsnavnet
