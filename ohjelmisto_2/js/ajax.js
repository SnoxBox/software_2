'use strict';

const apiurl = "https://api.tvmaze.com/search/shows?q=";
let apiKysely;

const hakunappi = document.getElementById("hakunappi");

hakunappi.addEventListener('click', teeKysely);

function teeKysely() {
    let hakusana = document.getElementById('hakuteksti').value;
    
    apiKysely = apiurl + hakusana;
    console.log("Lähetettävä kysely: " + apiKysely);
    
    teeHaku(apiKysely);
}


function teeHaku(apiKysely)  {

    fetch(apiKysely).then(function(response) {
        return response.json();
    }).then(function(json) {
        naytaVastaus(json);
    }).catch(function(error){
        console.log(error);
    });
}

function naytaVastaus(jsonData) {
    console.log("json sellaisenaan");
    console.log(jsonData);
    console.log("Sellainen se json oli.");

    console.log("Eka sarjan nimi: " + jsonData[0].show.name);
    console.log("Eka sarjan kuvan osoite: " + jsonData[0].show.image.medium);
    console.log("Eka sarjan virallinen kotisivu: " + jsonData[0].show.officialSite);

    let list = document.getElementById("tulokset");
    list.innerHTML = '';

    for (const obj of jsonData) {
        let li = document.createElement("article");
        li.innerHTML = "<a>Name: " + obj.show.name + "</a><br/><a>Kotisivu: " + obj.show.officialSite + "</a>" + obj.show.summary + "<img src="+obj.show.image.medium+">";
        console.log(obj.show.name);
        list.appendChild(li);
    }
    let htmlKoodi = ``;
}



