var scale = 1,
    panning = false,
    pointX = 0,
    pointY = 0,
    start = { x: 0, y: 0 },
    zoom = document.getElementById("zoom");
function setTransform() {
    zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}

zoom.onmousedown = function (e) {
    e.preventDefault();
    start = { x: e.clientX - pointX, y: e.clientY - pointY };
    panning = true;
}

zoom.onmouseup = function (e) {
    panning = false;
}

zoom.onmousemove = function (e) {
    e.preventDefault();
    if (!panning) {
        return;
    }
    pointX = (e.clientX - start.x);
    pointY = (e.clientY - start.y);
    setTransform();
}

zoom.onwheel = function (e) {
    e.preventDefault();
    var xs = (e.clientX - pointX) / scale,
        ys = (e.clientY - pointY) / scale,
        delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
    (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);

    //scale 
    if (scale <= 1) {
        scale = 1;
    }
    if (scale >= 4.5) {
        scale = 4.5;
    }
    pointX = e.clientX - xs * scale;
    pointY = e.clientY - ys * scale;
    setTransform();
    // console.log(scale);
}

// ///

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("menu-div").style.display = "block";
}
function myFunction2(x) {
    // x.classList.toggle("change");
    document.getElementById("menu-div").style.display = "none";
}


// 
// var xmlhttp = new XMLHttpRequest();
// var url = "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam";

function removeFunction() {
    // document.getElementById("section1").style.display = "none";
    setTimeout(function () {
        document.getElementById("section1").style.display = "none";
    }, 700);
}

// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var myArr = JSON.parse(this.responseText);

//         console.log(myArr);
//         myFunction(myArr);
//     }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// function myFunction(arr) {
//     var out = "";
//     var i;
//     for (i = 0; i < arr.length; i++) {
//         out += '<a href="' + arr[i].url + '">' +
//             arr[i].display + '</a><br>';
//     }
//     // document.getElementById("id01").innerHTML = out;
//     console.log(out);
// }


async function callApi() {
    let beerId = ""; // deze moet dynamisch worden
    let url = 'https://api.punkapi.com/v2/beers/' + beerId + '';
    let obj = await (await fetch(url)).json();
    console.log(obj[0].name);

    let beerName = obj[0].name;
    document.getElementById("modal").innerHTML = beerName;
}


// /// https://stackoverflow.com/questions/4644673/hide-all-elements-with-class-using-plain-javascript

function closeFunction() {
    document.getElementById("infobalk").style.display = "none";
    document.getElementById("Southern-Water-Tribe-info-id").style.display = "none";
    document.getElementById("Northern-Water-Tribe-info-id").style.display = "none";


    
    
}

// 

function SouthernWaterTribeFunction() {
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("Southern-Water-Tribe-info-id").style.display = "block";

}

function NorthernWaterTribeFunction() {
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("Northern-Water-Tribe-info-id").style.display = "block";
}