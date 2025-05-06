"use strict";

class Restoran {
  constructor(naziv, kuhinja) {
    this.naziv = naziv;
    this.kuhinja = kuhinja;
  }
}

let restorani = [
  new Restoran("Italijanski kutak", "Italijanska"),
  new Restoran("Azijski raj", "Azijska, Indonezanska"),
  new Restoran("Gurmanova oaza", "Srpska, Balkanska")
];

function prikaziRestorane() {
  const tbody = document.querySelector("#restoran-body");
  tbody.innerHTML = "";

  for (let r of restorani) {
    const red = document.createElement("tr");

    const nazivTd = document.createElement("td");
    nazivTd.textContent = r.naziv;

    const kuhinjaTd = document.createElement("td");
    kuhinjaTd.textContent = r.kuhinja;

    red.appendChild(nazivTd);
    red.appendChild(kuhinjaTd);

    tbody.appendChild(red);
  }
}

prikaziRestorane(); 
