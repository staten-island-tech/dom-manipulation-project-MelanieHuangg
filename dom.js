const DOMSelectors = {
    form: document.querySelector("#form"),
    foodName: document.querySelector(".food-name"),
   
};

console.log(DOMSelectors.h2s);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.foodName.value);
    DOMSelectors.h2s.forEach(
        (el)=> (el.textContent = DOMSelectors.foodName.value)
    );





});
