const DOMSelectors = {
    songName: document.getElementById("song-name"),
    artistName: document.getElementById("artist-name"),
    imageLink: document.getElementById("image-link"),
    submitButton: document.getElementById("create"),
    display: document.querySelector("display"),
};




    
    // category: document.querySelector(""),
    // imgURL: document.querySelector(""),

DOMSelectors.create.addEventListener("submit", function(event){
    event.preventDefault();
    let userInput = DOMSelectors.songName.value; //stores user input
    let userInput2 = DOMSelectors.artistName.value;
    let userInput3 = DOMSelectors.imageLink.value;

   
    // let h2 = document.createElement("h2");
    // h2.textContent = game.name;
    // document.body.appendChild(h2)

    function makeCard() {
        DOMSelectors.text.insertAdjacentHTML(
            "beforeend", 
            `<div class="display">
               <h1 class="song">Title:${userInput}</h1>
               <img src></img>

            </div>`
        )
    }
});


DOMSelectors.text.insertAdjacentHTML("beforeend", '<p> $i{input} </p>'
    
)

/* function makeGame (input){ //stores value of user's input
    let gameObj = {
        name: input
    }

    clearField()
    return gameObj //allows you to use the function
}

//clearing input
function clearField (){
    DOMSelectors.gameName.value = ""
} */


