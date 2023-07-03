const button= document.querySelector("button");
const body = document.querySelector("body");
let color = ['red','green','yellow','hotpink','gold']






button.addEventListener("click", changeB)


function changeB(){
    const colorIndex= parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]


}
// function changeb(){}