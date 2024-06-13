let p;

function batDauKeo() {
        p = event.target;
}

function choThaVao() {
        event.preventDefault();
}

function thaXong() {
        let x = false;
        if (event.target.firstElementChild === null && x === false) {
                event.target.appendChild(p);
                x = true;
        }
        else{
                console.log("Không ok cho lắm");
        }
}

let deg = 0;
function hieuUng() {
        deg += 90;
        document.getElementById(event.target.id).style.transform = `rotate(${deg}deg)`;
}

let urlImg = [];
let arrImg = [];
function upLoadFile() {
        arrImg = event.target.files;
        for (let i = 0; i < arrImg.length; i++) {
                urlImg[i] = URL.createObjectURL(arrImg[i]);
                localStorage.setItem(`img${i}`, urlImg[i]);
                document.getElementsByTagName("img")[i].src = localStorage.getItem(`img${i}`);
        }
        alert(`Upload thành công ${arrImg.length} ảnh mẫu`);
}

function play() {
        event.preventDefault();
        let mixArray = urlImg.sort(() => 0.5 - Math.random());
        for (let i = 0; i < urlImg.length; i++) {
            document.getElementsByTagName("img")[i].src = mixArray[i];
            document.getElementsByTagName("img")[i].style.transform = "rotate(90deg)";
        }
        document.getElementById("player").style.display = "none";
        document.getElementById("replayer").style.display = "block";
}

function playAgain() {
        event.preventDefault();
        location.reload();   
}

window.onload = function () {
        event.preventDefault();
        if (localStorage.length != 0) {
                for (let i = 0; i < 25; i++) {
                        urlImg[i] = localStorage.getItem(`img${i}`);
                        document.getElementsByTagName("img")[i].src = localStorage.getItem(`img${i}`);
                };
        }
        else {
                for (let i = 0; i < 25; i++) {
                        urlImg[i] = "./image/img-26.png";
                        document.getElementsByTagName("img")[i].src = "./image/img-26.png";
                        
                }  
        }
        document.getElementById("player").style.display = "block";
        document.getElementById("replayer").style.display = "none";
}
