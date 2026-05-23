"use strict";

// buttons used for buying
const gomb = document.getElementById('gomb');
const gomb2 = document.getElementById('gomb2');
const buy = document.getElementById('buy');
// const szoveg = document.getElementById('titkos2');
const invest = document.getElementById('invest');

// counter for money
const counter = document.getElementById('counter');


// affection meters
const family = document.getElementsById('fam');
const motherAff = document.getElementById('mother_aff');


gomb.addEventListener("click", () => {
    // document.body.style.backgroundColor = "green";
    counter.textContent = Number(counter.textContent) + 1;
    if (Number(counter.textContent) > 10)  {
        buy.style.display = "block";
        // szoveg.style.display = "block";
    }
});



// gomb2.addEventListener("click", () => {
//     document.body.style.backgroundColor = "white";
// });

buy.addEventListener("click", () => {
    if (Number(counter.textContent) >= 10) 
    {
        counter.textContent = Number(counter.textContent) - 10;
        setInterval(() => {
        counter.textContent = Number(counter.textContent) + 1;
    }, 10000)
    }

    if (Number(counter.textContent) >= 100) {
        gomb2.style.display = "block";
    }
});

gomb2.addEventListener("click", () => {
    if (Number(counter.textContent) >= 50) {
        counter.textContent = Number(counter.textContent) - 50;
        setInterval(() => {
            counter.textContent = Number(counter.textContent) + 10;
        }, 5000)
    }
    
    if (Number(counter.textContent) >= 1000) {
        family.style.display = "block";
    }    
});