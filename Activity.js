let btn = document.querySelector('button');


btn.addEventListener("mouseenter",function () {
    btn.style.backgroundColor = "red";
    let h3 = document.querySelector("h1");
    let randomcolor = randomColor();
    h3.innerText = randomcolor;
    let dog = document.querySelector('div');
    dog.style.backgroundColor = randomcolor;
    
       console.log("Your color is updated Once");
});

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green =  Math.floor(Math.random() * 255);
    let blue =  Math.floor(Math.random() * 255);
    let opacity = 1;
    let color = (`rgb(${red} , ${green} , ${blue}, ${opacity})`);
    return color;
}


// let btn = document.querySelector('button');

btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "green";
    let h3 = document.querySelector('h1');
    let randomcolor = getRandomColor();
    h3.innerText = randomcolor;
    let dog = document.querySelector('div');
    dog.style.backgroundColor = randomcolor;

    console.log("Your color is updated Twice");
    setTimeout(() => {
        btn.style.backgroundColor = "white";
    }, 100)
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let opacity = (Math.random() * 1);
    let color = (`rgba(${red}, ${blue}, ${green}, ${opacity})`);
    return color;
}


let act = document.querySelector("#act");

document.addEventListener("keypress", function () {
    h1 = document.querySelector("#h5");
    h1.innerText = getColor();
    let cat = document.querySelector("#h1");
    cat.style.backgroundColor = getColor();
});

function getColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let randColors = (`rgb(${red}, ${green}, ${blue})`);
    return randColors;

}
