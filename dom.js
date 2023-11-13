const DOMSelectors = {
    form: document.querySelector("#album"),
    characterName: document.getElementById("character-name"),
    gameName: document.getElementById("game-name"),
    imageLink: document.getElementById("image-link"),
    box: document.querySelector("#box"),
   
};
    
    // category: document.querySelector(""),
    // imgURL: document.querySelector(""),

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    let card = {
        characterName: DOMSelectors.characterName.value,
        gameName: DOMSelectors.gameName.value,
        imageLink: DOMSelectors.imageLink.value,
    };
    injectObj(card);
    clearFields();
    deleteCard();
});

function injectObj(card) { 
    let cardHTML = `
       <div class="card">
          <h1 class="name">Character:${card.characterName}</h1>
          <img src="${card.imageLink}" class="card-img" alt="">
          <h2 class="game">Game:${card.gameName}</h2>
          <button class="delete-btn">Delete</button>
       </div> 
    `;

    DOMSelectors.box.insertAdjacentHTML("beforeend", cardHTML);

};

function clearFields() {
    DOMSelectors.characterName.value = "";
    DOMSelectors.imageLink.value = "";
    DOMSelectors.gameName.value = "";
};

function deleteCard() {
    document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", function(event){
            event.target.parentElement.remove();
        });
    });
    };
    



// let h2 = document.createElement("h2");
// h2.textContent = game.name;
// document.body.appendChild(h2)


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


