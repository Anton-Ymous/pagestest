fetch("test.json")
  .then(response => response.json())
  .then(json => console.log(json))


document.querySelector("button").addEventListener("click", ()=>{
    let newElem = document.createElement("div");
    newElem.textContent = new Date().toDateString();
    document.documentElement.appendChild(newElem);
});
