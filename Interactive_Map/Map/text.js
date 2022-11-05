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


///          close info            /// https://stackoverflow.com/questions/4644673/hide-all-elements-with-class-using-plain-javascript

function closeFunction() {

    // hide info
    document.getElementById("infobalk").style.display = "none";


    // selecteer alle divs en haal het weg
    Array.prototype.forEach.call(document.getElementsByClassName("titel"), function (el) {
        el.style.display = 'none';
    });
}

/* ***************************************************************************             Water */


function SouthernWaterTribeFunction() {

    // open info + info over plaats
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("Southern-Water-Tribe-info-id").style.display = "block";


    // animation code
    const elem = document.querySelector("#Southern-Water-Tribe")
    elem.style.animation = "pulse-blue .7s";
    elem.style.animationIterationCount = "10";
}

function NorthernWaterTribeFunction() {

    // open info + info over plaats
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("Northern-Water-Tribe-info-id").style.display = "block";


    // animation code
    const elem = document.querySelector("#Northern-Water-Tribe")
    elem.style.animation = "pulse-blue .7s";
    elem.style.animationIterationCount = "10";
}


/* ***************************************************************************             Earth */


function BaSingSeFunction() {

    // open info + info over plaats
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("Ba-Sing-Se-info-id").style.display = "block";


    // animation code
    const elem = document.querySelector("#Ba-Sing-Se")
    elem.style.animation = "pulse-blue .7s";
    elem.style.animationIterationCount = "10";
}


/* ***************************************************************************             Fire */


function TheCapitalCityFunction() {

    // open info + info over plaats
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("The-Capital-City-info-id").style.display = "block";


    // animation code
    const elem = document.querySelector("#The-Capital-City")
    elem.style.animation = "pulse-blue .7s";
    elem.style.animationIterationCount = "10";
}


/* ***************************************************************************             Air */


function NorthernAirTempleFunction() {

    // open info + info over plaats
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("Northern-Air-Temple-info-id").style.display = "block";


    // animation code
    const elem = document.querySelector("#Northern-Air-Temple")
    elem.style.animation = "pulse-blue .7s";
    elem.style.animationIterationCount = "10";
}

function EasternAirTempleFunction() {

    // open info + info over plaats
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("Eastern-Air-Temple-info-id").style.display = "block";


    // animation code
    const elem = document.querySelector("#Eastern-Air-Temple")
    elem.style.animation = "pulse-blue .7s";
    elem.style.animationIterationCount = "10";
}

function SouthernAirTempleFunction() {

    // open info + info over plaats
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("Southern-Air-Temple-info-id").style.display = "block";


    // animation code
    const elem = document.querySelector("#Southern-Air-Temple")
    elem.style.animation = "pulse-blue .7s";
    elem.style.animationIterationCount = "10";
}

function WesternAirTempleFunction() {

    // open info + info over plaats
    document.getElementById("infobalk").style.display = "block";
    document.getElementById("Western-Air-Temple-info-id").style.display = "block";


    // animation code
    const elem = document.querySelector("#Western-Air-Temple")
    elem.style.animation = "pulse-blue .7s";
    elem.style.animationIterationCount = "10";
}

