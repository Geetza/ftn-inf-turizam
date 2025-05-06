"use strict";

class Tura {
  constructor(naziv, opis, duzina, tagovi) {
    this.naziv = naziv;
    this.opis = opis;
    this.duzina = duzina;
    this.tagovi = tagovi;
  }
}

const italija = new Tura(
  "Italija",
  "Dozivite mediteransku klimu uz letovanje na Siciliji",
  1989,
  ["mediteran", "sicilija", "letovanje"]
);

const prag = new Tura(
  "Prag",
  "Istrazite magicni grad sa prelepom arhitekturom",
  912,
  ["dvorac", "arhitektura", "mostovi"]
);

const pariz = new Tura(
  "Pariz",
  "Uzivajte u gradu ljubavi i dozivite nezaboravne trenutke",
  1784,
  ["muzeji", "kroasan", "dvorac"]
);

let ture = [italija, prag, pariz];

function napraviRed() {
  let table = document.querySelector("#ture-body");

  for (let i = 0; i < ture.length; i++) {
    let tr = document.createElement("tr");

    let naziv = document.createElement("td");
    let duzina = document.createElement("td");

    naziv.textContent = ture[i].naziv;
    duzina.textContent = ture[i].duzina + "km";

    tr.appendChild(naziv);
    tr.appendChild(duzina);
    table.appendChild(tr);
  }
}

function obradiFormu() {
  let button = document.querySelector("#submitBtn");

  button.addEventListener("click", function () {
    const form = document.querySelector("#dodajTuru");
    const formData = new FormData(form);

    const naziv = formData.get("nazivTure");
    const opis = formData.get("opisTure");
    const duzina = formData.get("duzinaTure");
    const tagovi = formData.get("tagoviTure");

    const novaTura = new Tura(naziv, opis, duzina, tagovi);
    ture.push(novaTura);

    napraviRed;
  });
}

function inicijalizujTure() {
  napraviRed();
  obradiFormu();
}

inicijalizujTure();
