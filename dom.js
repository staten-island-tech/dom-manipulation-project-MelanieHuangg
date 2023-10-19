const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    text: document.querySelector("#text"),
};

function text(text){
text.innerHTML = "This is a test"
}

text(DOMSelectors.text);

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el)=> (el.textContent = DOMSelectors.firstName.value)
    );

});
