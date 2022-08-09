var mydata = JSON.parse(data);
console.log(mydata);

document.querySelector("button").addEventListener("click", ()=>{
    let newElem = document.createElement("div");
    newElem.textContent = new Date().toDateString();
    document.documentElement.appendChild(newElem);
});
