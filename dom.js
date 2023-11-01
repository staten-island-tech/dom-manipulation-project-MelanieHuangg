const DOMSelectors = {
    songName: document.getElementById("song-name"),
    artistName: document.getElementById("artist-name"),
    imageLink: document.getElementById("image-link"),
    submitButton: document.getElementById("submit"),
    clearButton: document.getElementById("clear"),
    htmlCards: document.querySelector(".html-cards"),

   
};




    
    // category: document.querySelector(""),
    // imgURL: document.querySelector(""),

DOMSelectors.create.addEventListener("submit", function(event){
    event.preventDefault();

    let input = DOMSelectors.songName.value; //stores user input
    let input2 = DOMSelectors.artistName.value;
    let input3 = DOMSelectors.imageLink.value;

    if (input && input2 && input3) {
        const cardHTML = `
        <div class="card">
            <h2 class="songName">Title:${input}</h2>
            <img src="${input3}" class="image" alt=""></img>
            <h2 class="artist">Song By: "${input2}</h2>
            <button class="remove">Delete</button>
        </div>
        `
        create(cardHTML)
        
    }

});

DOMSelectors.clearButton.addEventListener("clear", function() {

}); 


   
    // let h2 = document.createElement("h2");
    // h2.textContent = game.name;
    // document.body.appendChild(h2)

    function makeHtmlCard() {
        DOMSelectors.container.insertAdjacentHTML(
            "afterbegin", 
            `<div class="display">
               <image src></image>
               <h1 class="song">Title:${userInput}</h1>
               <img src="${userInput3}" class="image" alt=""></img>
               <h2 class="artist">Song By: "${userInput2}</h2>
               <button class="remove">Delete</button>

            </div>`
        );
    }

    function erase() {
        let deletes = document.querySelectorAll(".remove");
        deletes.forEach((eachDelete) => {
            eachDelete.addEventListener("click", (event) => {
                event.target.parentElement.remove();
            });
        });
    }

    makeCard();
    erase();




// DOMSelectors.text.insertAdjacentHTML("beforeend", '<p> $i{input} </p>'
    
// )

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


