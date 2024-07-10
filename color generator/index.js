const color = () =>{
    const random = Math.floor(Math.random() *16777215);
    const randomcode = "#" + random.toString(16);
    console.log(random,randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("colorcode").innerText = randomcode;
    
}
document.getElementById("btn").addEventListener(
    "click",
    color

)
color();
