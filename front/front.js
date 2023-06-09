import * as viewcontroller from './viewcontroller.js';
import { fpconst, ELEMENTS, selectedlanguages, domains } from "./enum.js";
import $ from 'jquery';
import { translate, translations, setCurrentlySelectedLanguage } from './languages/translations2.js';
import { getFrom } from './util.js';



export function main(){
    // clear content of html?
    clear();
    drawBaseLayout();
    viewcontroller.resume();
}

function drawBaseLayout(){
    let container = document.createElement("div");
    container.setAttribute("id", ELEMENTS.CONTAINER);

    let generatedcontent = document.createElement("div");
    generatedcontent.setAttribute("id", ELEMENTS.GENERATED_CONTENT_DIV );

    let generatedselectioncontent = document.createElement("div");
    generatedselectioncontent.setAttribute("id",ELEMENTS.GENERATED_SELECTION_CONTETN);

    container.append(generatedcontent);
    container.append(generatedselectioncontent);

    let body = document.getElementById("body");

    if(body){
        body.append(container);
    }
}


function clear(){
    let body = document.getElementById("body");
    if(body){
        body.innerHTML = "";
    }
}


function startButtonListener(){
    let btn = document.getElementById(fpconst.LETSGO);
    if(btn){
        btn.addEventListener('click', (event)=>{
            event.preventDefault();
            main();
        })
    }
}


function startlisteners(){
    startButtonListener()
    selectLanguageBasedOnHref(window.location.href);
    translate();
}


export function selectLanguageBasedOnHref(winlochref){
    let lang = getFrom(winlochref,domains);
    console.log("new lang will be:", lang)
    if(!lang){
        lang = selectedlanguages.en;
    }
    setCurrentlySelectedLanguage(lang);
}


$(window).on('load', startlisteners);

