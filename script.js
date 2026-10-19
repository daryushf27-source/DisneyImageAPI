async function getJoke(){
    try{
        const url = "https://icanhazdadjoke.com/";
        const headers = new Headers();
        headers.append("Accept", "application/json")

        const response = await fetch(url, {headers:headers})

        const json = await response.json();
        console.log(json);
        const jokeHolder = document.getElementById("jokeHolder")
       // jokeHolder.textContent = json.joke
    }

let img = document.createElement('img');
img.src = json.data[0].imageUrl;
img.width = 100; 
jokeHolder.appendChild(img); 

    catch(error){
        console.log(error)
    }
}