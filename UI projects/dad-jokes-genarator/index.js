const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };

  const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke(){

    try {
        jokeE1.innerText=("updating....");
        btnE1.disabled=true;
        btnE1.innerText="Loading....";
    
        const response = await fetch(apiURL, options);
        const data = await response.json();
       console.log(data[0].joke);
       jokeE1.innerText=data[0].joke;

       
       btnE1.disabled=false;
       btnE1.innerText="Tell me a Joke";
    
      
        
    } catch (error) {
       
        jokeE1.innerText="Eror occured try again later"; 

        btnE1.disabled=false;
        btnE1.innerText="Tell me a Joke";


        console.log(error);
        
        
    }
   
}

btnE1.addEventListener("click",getJoke);