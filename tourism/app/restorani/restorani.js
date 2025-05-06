"use strict";

// Klasa Restoran
class Restoran {
  constructor(naziv, kuhinja, opis) {
    this.naziv = naziv;
    this.kuhinja = kuhinja;
    this.opis = opis;
  }
}

// Lista restorana
let restorani = [];

const sacuvani = localStorage.getItem("restorani");
if (sacuvani) {
  restorani = JSON.parse(sacuvani).map(r => new Restoran(r.naziv, r.kuhinja, r.opis));
} else {
  restorani = [
    new Restoran("Italijanski kutak", "Italijanska", "Autenticne italijanske paste i pice u srcu grada."),
    new Restoran("Azijski raj", "Azijska, Indonezanska", "Egzoticni ukusi Istoka uz bogat meni i dekoraciju."),
    new Restoran("Gurmanova oaza", "Srpska, Balkanska", "Tradicionalna jela sa rostilja i domace pite.")
  ];
  localStorage.setItem("restorani", JSON.stringify(restorani));
}

// Prikaz restorana
function prikaziRestorane() {
  const tbody = document.querySelector("#restoran-body");
  tbody.innerHTML = ""; 

  for (let i = 0; i < restorani.length; i++) {
    let r = restorani[i];

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
  }
}

// Prikaz detalja restorana
function prikaziDetalje(restoran) {
  document.querySelector("#detalji-naziv").textContent = restoran.naziv;
  document.querySelector("#detalji-kuhinja").textContent = restoran.kuhinja;
  document.querySelector("#detalji-opis").textContent = restoran.opis;
}

// Dodavanje restorana
const forma = document.querySelector("#forma-restoran");

if (forma) {
  // Dinamicki paragraf za prikaz greske
  const greskaEl = document.createElement("p");
  greskaEl.style.color = "red";
  greskaEl.style.marginTop = "10px";
  forma.appendChild(greskaEl);

  forma.addEventListener("submit", function (e) {
    e.preventDefault();

    const naziv = document.querySelector("#naziv").value.trim();
    const kuhinja = document.querySelector("#kuhinja").value.trim();
    const opis = document.querySelector("#opis").value.trim();

    // Provera da li vec postoji restoran sa tim nazivom
    const duplikat = restorani.some(r => r.naziv.toLowerCase() === naziv.toLowerCase());

    if (duplikat) {
      greskaEl.textContent = `Restoran sa nazivom "${naziv}" već postoji!`;
      return;
    }

    // Ako su sva polja popunjena dodaj restoran
    if (naziv && kuhinja && opis) {
      const novi = new Restoran(naziv, kuhinja, opis);
      restorani.unshift(novi);
      localStorage.setItem("restorani", JSON.stringify(restorani));
      prikaziRestorane();
      forma.reset();
      greskaEl.textContent = "";
    }
  });
}

// Pokreni prikaz
prikaziRestorane();
