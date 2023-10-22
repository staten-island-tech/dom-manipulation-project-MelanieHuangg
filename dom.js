const DOMSelectors = {
    form: document.querySelector("#form"),
    gameName: document.querySelector(".game-name"),
    h2: document.querySelector("h2")
   
};

console.log(DOMSelectors.h2);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    let userInput = DOMSelectors.gameName.value; //stores user input
    const textBox = DOMSelectors.h2;
    const game = makeGame(userInput); //has value gameObj
    console.log(DOMSelectors.gameName.value); 
    textBox.textContent = game.name
   
    // let h2 = document.createElement("h2");
    // h2.textContent = game.name;
    // document.body.appendChild(h2)
});

function makeGame (input){ //stores value of user's input
    let gameObj = {
        name: input
    }

    clearField()
    return gameObj //allows you to use the function
}

//clearing input
function clearField (){
    DOMSelectors.gameName.value = ""
}


