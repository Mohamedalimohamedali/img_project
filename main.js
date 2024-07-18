let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness= document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let greyscale = document.getElementById("greyscale");
let blur= document.getElementById("blur");
let hueRotate= document.getElementById("hue-rotate");

let upload = document.getElementById("upload");

let download = document.getElementById("download");
let img = document.getElementById("img");
let imgBox = document.querySelector(".img_box");
let reset = document.querySelector("span");

window.onload = function(){
    download.style.display ="none"
    reset.style.display ="none"
    imgBox.style.display ="none"
}
upload.onchange = function(){
    download.style.display ="block"
    reset.style.display ="block"
    imgBox.style.display ="block"
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
}

