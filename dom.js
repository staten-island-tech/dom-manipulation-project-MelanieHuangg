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
    const card = {
        songName: DOMSelectors.songName.value,
        artistName: DOMSelectors.artistName.value,
        imageLink: DOMSelectors.imageLink.value,
    };
    injectCard(card);
    clearFields();
});

function injectCard(card) {
    const cardHTML = `
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

const images = document.querySelectorAll('.card-img');


    function clearFields() {
        DOMSelectors.songName.value = "";
        DOMSelectors.imageLink.value = "";
        DOMSelectors.artistName.value = "";
    };
    
    function removeCard(element) {
        element.parentElement.remove();
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


