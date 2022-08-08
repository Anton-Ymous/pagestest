console.log(new Date().toDateString());

document.querySelector("button").addEventListener("click", ()=>{
    let newElem = document.createElement("div");
    newElem.textContent = new Date().toDateString();
    document.documentElement.appendChild(newElem);
});
