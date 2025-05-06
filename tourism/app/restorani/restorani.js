"use strict";

// Restoran klasa
class Restoran {
  constructor(naziv, kuhinja, opis) {
    this.naziv = naziv;
    this.kuhinja = kuhinja;
    this.opis = opis;
  }
}

// Lista restorana
let restorani = [
  new Restoran("Italijanski kutak", "Italijanska", "Autenticne italijanske paste i pice u srcu grada."),
  new Restoran("Azijski raj", "Azijska, Indonezanska", "Egzoticni ukusi Istoka uz bogat meni i dekoraciju."),
  new Restoran("Gurmanova oaza", "Srpska, Balkanska", "Tradicionalna jela sa rostilja i domace pite.")
];

// Funkcija za prikaz tabele
function prikaziRestorane() {
  const tbody = document.querySelector("#restoran-body");

  restorani.forEach((r, index) => {
    const red = document.createElement("tr");

    const nazivTd = document.createElement("td");
    nazivTd.textContent = r.naziv;

    const kuhinjaTd = document.createElement("td");
    kuhinjaTd.textContent = r.kuhinja;

    red.appendChild(nazivTd);
    red.appendChild(kuhinjaTd);

    // Klikom na red, prikazuju se detalji
    red.addEventListener("click", function () {
      prikaziDetalje(r);
    });

    tbody.appendChild(red);
  });
}

// Funkcija za prikaz detalja u spanovima
function prikaziDetalje(restoran) {
  document.querySelector("#detalji-naziv").textContent = restoran.naziv;
  document.querySelector("#detalji-kuhinja").textContent = restoran.kuhinja;
  document.querySelector("#detalji-opis").textContent = restoran.opis;
}

// Pokretanje
prikaziRestorane();
prikaziDetalje(); 
