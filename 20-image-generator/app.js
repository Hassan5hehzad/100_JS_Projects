const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNamEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNamEl.innerText = "Updating...";
        animeImgEl.src = "spinner.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNamEl.innerText = data.artist;
    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText ="An error happened, pleae try again later."
    }
});

