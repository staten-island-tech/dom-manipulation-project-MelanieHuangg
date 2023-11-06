const DOMSelectors = {
    form: document.querySelector("#album"),
    songName: document.getElementById("song-name"),
    artistName: document.getElementById("artist-name"),
    imageLink: document.getElementById("image-link"),
    box: document.querySelector("#box"),
   
};
    
    // category: document.querySelector(""),
    // imgURL: document.querySelector(""),

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    let card = {
        songName: DOMSelectors.songName.value,
        artistName: DOMSelectors.artistName.value,
        imageLink: DOMSelectors.imageLink.value,
    };
    injectObj(card);
    clearFields();
    removeCard(form);
});

function injectObj(card) { 
    let cardHTML = `
    <div class="album1">
       <div class="card">
          <h1 class="name">Title:${card.songName}</h1>
          <img src="${card.imageLink}" class="card-img" alt="">
          <h2 class="artist">Song By:${card.artistName}</h2>
       </div> 
       <button class="delete-btn" onclick="deleteCard(this)">Delete</button>
    </div>
    `;

    DOMSelectors.box.insertAdjacentHTML("beforeend", cardHTML);

};

function clearFields() {
    DOMSelectors.songName.value = "";
    DOMSelectors.imageLink.value = "";
    DOMSelectors.artistName.value = "";
};
    
function removeCard(form) {
    form.parentElement.remove();
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


