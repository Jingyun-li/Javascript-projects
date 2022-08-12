window.onload = main;
'use strict';

var arr = [];
var idx = -1;
let idGlobal;
const interval = 1000;

function main() {
    document.querySelector("#loadPhoto").onclick = getAttr;
    document.querySelector("#nxtphoto").onclick = nextPhoto;
    document.querySelector("#theImage").onclick = nextPhoto;
    document.querySelector("#prevphoto").onclick = prevPhoto;
    document.querySelector("#firstphoto").onclick = firstPhoto;
    document.querySelector("#lastphoto").onclick = lastPhoto;

    document.querySelector("#slideshow").onclick = () => idGlobal = setInterval("nextPhoto()", interval);
    document.querySelector("#stop").onclick = () => clearInterval(idGlobal);
    document.querySelector("#randomshow").onclick = () => idGlobal = setInterval("randomShow()", interval);
}

function getAttr() {
    let folder = document.querySelector("#photoFolder").value;
    let name = document.querySelector("#commonName").value;
    let start = Number(document.querySelector("#startNumber").value);
    let end = Number(document.querySelector("#endNumber").value);

    if (Number(end) < Number(start)) {
        document.querySelector("#displayArea").innerHTML = "Error: Invalid Range";
    } else {
        document.querySelector("#displayArea").innerHTML = "Photo Viewer System";
        let k = 0;
        idx = 0;
        arr = [];
        for (let i = start; i <= end; i++) {
            arr[k] = folder + name + i + ".jpg";
            k++;
        }
        display(idx);
    }
}

function nextPhoto() {
    if (idx == -1) {
        document.querySelector("#displayArea").innerHTML = "Error: you must load data first";
    } else {
        if (idx < arr.length - 1) {
            idx++;
        } else {
            idx = 0;
        }
        display(idx);
    }
}

function prevPhoto() {
    if (idx == -1) {
        document.querySelector("#displayArea").innerHTML = "Error: you must load data first";
    } else {
        if (idx > 0) {
            idx--;
        } else {
            idx = arr.length - 1;
        }
        display(idx);
    }
}

function firstPhoto() {
    if (idx == -1) {
        document.querySelector("#displayArea").innerHTML = "Error: you must load data first";
    } else {
        idx = 0;
        display(idx);
    }
}

function lastPhoto() {
    if (idx == -1) {
        document.querySelector("#displayArea").innerHTML = "Error: you must load data first";
    } else {
        idx = arr.length - 1;
        display(idx);
    }
}

function randomShow() {
    display(Math.floor(Math.random() * arr.length));
}

function display(idx) {
    document.querySelector("#theImage").src = arr[idx];
    document.querySelector("#displayedphoto").value = arr[idx];
}
