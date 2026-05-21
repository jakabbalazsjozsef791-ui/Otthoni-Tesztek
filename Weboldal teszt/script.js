"use strict";

const gomb = document.getElementById('gomb');
const gomb2 = document.getElementById('gomb2');
const counter = document.getElementById('counter');
const buy = document.getElementById('titkos');
const szoveg = document.getElementById('titkos2')

gomb.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
    counter.textContent = Number(counter.textContent) + 1;
    if (Number(counter.textContent) > 10)  {
        buy.style.display = "block";
        szoveg.style.display = "block";
    }
});



gomb2.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
});

buy.addEventListener("click", () => {
    if (Number(counter.textContent) >= 10) 
    {
        counter.textContent = Number(counter.textContent) - 10;
        setInterval(() => {
        counter.textContent = Number(counter.textContent) + 1;
    }, 3000)}
});