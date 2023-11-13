/////////Jokes

const funnyText = document.getElementById("funny-text");
const loadingNewJoke = document.getElementById("loading-new-joke");
const newJokeButton =document.getElementById("button-get-joke")

const fetchJoke = async () => {
    try{
        loadingNewJoke.textContent = "Loading...";
        const responsHttp = await fetch ("https://api.chucknorris.io/jokes/random");

        if (responsHttp.ok){
            const data = await responsHttp.json();
            funnyText.textContent = data.value
        }else{
            funnyText.textContent = "Sorry! no more funny jokes to day"
        }

    }catch (error) {
    console.error("found an error in retrieving a new joke");
    funnyText.textContent= "found an error in retrieving a new joke";
}finally{
    loadingNewJoke.style.display= "none"; 
}
};

fetchJoke();


/////////Photo cats

const apiKey = "live_K8hXn1JtWywF677p05ICWqnZZdOChfFLk3yITIMhFUblS7SAUGepfBeGyODmMf4n"
const dogPhoto = document.getElementById("dog-photo");

const fetchPhoto = async ()=> {
    dogPhoto.innerHTML=""
    const responsNewHttp = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=${apiKey}`);
    const dataTwo = await responsNewHttp.json();
    console.log(dataTwo)
    dataTwo.map(dog=>{
   const img = document.createElement(`img`)
   img.src = dog.url;
   dogPhoto.appendChild(img)
    })
}

fetchPhoto()