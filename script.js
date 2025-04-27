document.getElementById("blue").style.color = "blue";
document.getElementsByTagName("p")[0].style.fontSize = "20px";
document.querySelector("button").style.borderColor = "red";
document.querySelectorAll("li")[0].style.color = "green";
document.querySelectorAll("li")[1].style.color = "green";
document.querySelectorAll("li")[2].style.color = "green";
document.querySelector("input").placeholder = "Enter your name";
document.querySelector("div").innerHTML = "<b>Hello World!<b>";
document.getElementsByClassName("red")[0].textContent="Updated heading"
document.getElementById("p2").innerHTML="this is a new paragraph"
link = document.querySelector("a").getAttribute("href")
console.log(link)
document.getElementById("b").addEventListener("click",(e)=>{
    e.preventDefault()
})
document.querySelector("ul").appendChild(document.createElement("li")).textContent="new item";
document.querySelector("ul").removeChild(document.querySelector("li"));
document.getElementById("b").addEventListener("click",(e)=>{
    const button = e.target;
    button.style.backgroundColor = "blue";
})