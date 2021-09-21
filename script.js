let img = document.getElementById("img")
let button = document.getElementById("button")
let text = document.getElementById("text")
button.addEventListener("click",level)
img.addEventListener("click",clear)
function clear(){
  text.value = ""
}
function level(){
  let point = parseInt(text.value,10)
  switch (true){
    case point === 12 || point === 11 || point === 10:
    img.src = "10-12.jpg"
    text.value = "Високий"
    text.style.backgroundColor = "rgb(0, 255, 0,0.5)"
    break
    case point <= 9 && point >= 7:
    img.src = "7-9.jpg"
    text.value = "Достатній"
    text.style.backgroundColor = "rgb(0, 255, 0,0.5)"
    break 
    case point <= 6 && point >= 4:
    img.src = "4-6.jpg"
    text.value = "Середній"
    text.style.backgroundColor = "rgb(0, 255, 0,0.5)"
    break
    case point <= 3 && point >= 1:
    img.src = "1-3.jpg"
    text.value = "Початковий"
    text.style.backgroundColor = "rgb(0, 255, 0,0.5)"
    break
    default: 
    img.src = "point.png"
    text.value = "Incorrect"
    text.style.backgroundColor = "rgb(0, 255, 0,0.5)"
  }
}