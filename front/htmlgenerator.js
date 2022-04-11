import { ALL_STEP2_TEXTAREATITLE_KEYS, CSSCLASSES, CSS_IDS, DBCONSTANTS, ELEMENTS, FIELDS, languages, PAGES, TEXTAREATITLE_ARR, TEXTAREA_ARR, t, attributes, KEYS, generateconstants } from "./enum.js"; 
import * as util from './util.js'
import * as usercontroller from './usercontroller.js';
import { get } from "./store.js";
import pkg from 'fireworks-js'
const {Fireworks} = pkg;




export function getTitlesHTML(document){
    let list = [];
    PAGES.TITLES.inputs.forEach((input)=>{
        let inputElement = createInputElement(input, document);
        list.push(inputElement)
    })
    return list;
}


export function generateStep1(){
    removeConnectionOptions();

    /*INFO WITH CARD*/ 
    let rowDiv = util.createRowDiv();
    let colDiv = util.createColumDiv_S12();


    /*FORM*/
    let form = util.createForm(CSS_IDS.TITLESFORM);


    // TODO LANGUAGE
    let card = util.createCard("Write your titles here",
                               t.STEP1.CARDTITLE,
                               "Here's a small explanation on what to do.",
                               t.STEP1.CARDTEXT)

    colDiv.append(card);
    rowDiv.append(colDiv);

    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,rowDiv);


    let buttondiv = util.createButton(CSS_IDS.SAVEBUTTONTITLES,"Save & Continue",t.STEP1.BUTTON);

    /*INPUT ELEMENTS*/ 
    let titles = getTitlesHTML(document);

    for(let title of titles){

        let div2= util.createDiv();
        div2.setAttribute("class", "col s12")


        div2.append(title);
        form.append(div2)
        
    }
    //form.append(buttondiv);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,form);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,buttondiv);


}


export function generateMetaMaskView(){

    /*CONTAINER FOR ALL*/
    let div = document.createElement("div");
    div.setAttribute("id", CSSCLASSES.SELECTIONDIV);
    
    /*WRAPPERS FOR OPTIONS*/
    let metamaskwrapper = document.createElement("div");
    metamaskwrapper.setAttribute("class", CSSCLASSES.WRAPPER_FOR_OPTIONS); 

    let option2wrapper = document.createElement("div");
    option2wrapper.setAttribute("class", CSSCLASSES.WRAPPER_FOR_OPTIONS); 


    /*METAMASK option*/
    let a = document.createElement("img");
    a.setAttribute("src", "/images/metamask-fox.svg");
    a.setAttribute("id",ELEMENTS.ETHEREUM_CONNECT_BUTTON);

    /*METAMASK OPTION TEXT*/ 
    let metamaskText = document.createElement("p");
    metamaskText.innerHTML = "HELLO THIS IS FIRST OPTION"
    metamaskText.setAttribute("class", CSSCLASSES.OPTIONSELECTIONTEXT)
    // TODO LANGUAGES? ?????
    //metamaskText.setAttribute("")


    /*OTHER OPTION*/ 
    let a2 = document.createElement("img");
    a2.setAttribute("src", "/images/metamask-fox2.svg");
    a2.setAttribute("id", ELEMENTS.OPTION2);


    /*OTHER OPTION TEXT*/
    let otherOptionText = document.createElement("p");
    otherOptionText.innerHTML = "HELLO THIS IS sECOND OPTION"
    otherOptionText.setAttribute("class", CSSCLASSES.OPTIONSELECTIONTEXT)


    metamaskwrapper.append(a);
    metamaskwrapper.append(metamaskText)

    option2wrapper.append(a2);
    option2wrapper.append(otherOptionText);

    div.append(metamaskwrapper);
    div.append(option2wrapper);

    util.appendToElement(ELEMENTS.GENERATED_SELECTION_CONTETN,div);
}

export function createInputElement(withID, document){
    let inputElement = document.createElement("input");
    inputElement.setAttribute('id', withID);
    inputElement.setAttribute('class',CSSCLASSES.TITLESINPUT)
    inputElement.setAttribute('name',withID);
    inputElement.setAttribute(attributes.translate,withID);
    inputElement.setAttribute('placeholder', withID);
    //inputElement.setAttribute(CSS,)
    return inputElement;
}


function clearGeneratedContent(){
    let elem = document.getElementById(ELEMENTS.GENERATED_CONTENT_DIV);
    elem.innerHTML = "";
}

function removeConnectionOptions(){
    let connectionOptions = document.getElementById(ELEMENTS.GENERATED_SELECTION_CONTETN);
    if(connectionOptions){
        connectionOptions.remove();
    }
}

export function generateStep2() {
    clearGeneratedContent();

    let form = document.createElement("form");

    // TODO check if the values exist before letting to render?

    // get the current step & value associated with it
    let currentFields = usercontroller.getCurrentFields();
    let textareas = renderBasedOnFields(currentFields);


}
function generateInputTitle(input){
    let withTitle = usercontroller.getByKey(input);
    let card = util.createCard(withTitle,null,null,t.STEP2.CARDTEXT);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,card);
}


function renderBasedOnFields(step){
    switch (step) {
        case FIELDS.FIELDS1:
            generateInputTitle(PAGES.TITLES.inputs[0])
            return generateTextAreas(PAGES.TITLES.inputs[0]+step);
        case FIELDS.FIELDS2:
            generateInputTitle(PAGES.TITLES.inputs[1])
            return generateTextAreas(PAGES.TITLES.inputs[1]+step)
        case FIELDS.FIELDS3:
            generateInputTitle(PAGES.TITLES.inputs[2])
            return generateTextAreas(PAGES.TITLES.inputs[2]+step)
        case FIELDS.FIELDS4:
            generateInputTitle(PAGES.TITLES.inputs[3])
            return generateTextAreas(PAGES.TITLES.inputs[3]+step)
        case FIELDS.FIELDS5:
            generateInputTitle(PAGES.TITLES.inputs[4])
            return generateTextAreas(PAGES.TITLES.inputs[4]+step)
        case FIELDS.FIELDS6:
            generateInputTitle(PAGES.TITLES.inputs[5])
            return generateTextAreas(PAGES.TITLES.inputs[5]+step)
        case FIELDS.FIELDS7:
            generateInputTitle(PAGES.TITLES.inputs[6])
            return generateTextAreas(PAGES.TITLES.inputs[6]+step)
        default:
            break;
    }
}

function generateTextAreas(withLabel){
    let textareastitles_arr = [];
    let textareas_arr = [];

    let form = util.createForm(CSS_IDS.FIELDS_FORM);


    for(let textareatitle of TEXTAREATITLE_ARR){
        textareastitles_arr.push(generateTextAreaTitle(withLabel+textareatitle))

    }

    for(let textarea of TEXTAREA_ARR){
        textareas_arr.push(generateTextArea(withLabel+textarea));
    }

 

    for (let index = 0; index < textareastitles_arr.length; index++) {
        form.append(textareastitles_arr[index]);
        form.append(textareas_arr[index])
        //util.appendToElement(CSS_IDS.FIELDS_FORM, );
        //util.appendToElement(CSS_IDS.FIELDS_FORM, textareas_arr[index]);
       
    }

    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV, form);
    let button = util.createButton(CSS_IDS.SAVEBUTTON_FIELDS,"Any text here",t.STEP2.BUTTON);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV, button);

    console.log();
}




function generateTextArea(textAreaID){

    let wrapper = document.createElement("div");

    let textArea = document.createElement("textarea");
    textArea.setAttribute("class","materialize-textarea");
    textArea.setAttribute("id",textAreaID);
    textArea.setAttribute("name",textAreaID);
    //textArea.setAttribute(attributes.translate, textarea)

    let textarealabel = document.createElement("label");
    textarealabel.innerHTML = textAreaID // TODO LANGUAGE
    textarealabel.setAttribute("for",textAreaID)
    textarealabel.setAttribute(attributes.translate,textAreaID);

    wrapper.append(textarealabel);
    wrapper.append(textArea);


    return wrapper;

}
function generateTextAreaTitle(titleID){
        
        let titleDiv = document.createElement("div");
        titleDiv.setAttribute("class", "input-field col s12");
    
        let titleinput = document.createElement("input");
        titleinput.setAttribute("id",titleID);
        titleinput.setAttribute("type","text");
        titleinput.setAttribute("name",titleID)    
    
        let titlelabel = document.createElement("label")
        titlelabel.setAttribute("for", titleID);
        titlelabel.setAttribute(attributes.translate,titleID)
        titlelabel.innerHTML = titleID // TODO LANGUAGE
    
        titleDiv.append(titlelabel);
        titleDiv.append(titleinput);
        return titleDiv;
}


export function generateStep3() {
    clearGeneratedContent();
    
    let form = util.createForm(CSS_IDS.IMPACT_FORM);

    let impactTextArea = usercontroller.getCurrentImpactText();
    let impactTextTitle = usercontroller.getCurrentImpactTitle();

    if(impactTextArea === DBCONSTANTS.NOT_SPECIFIED && impactTextTitle === DBCONSTANTS.NOT_SPECIFIED ||
        !impactTextArea && !impactTextTitle){ // null or not specified
        usercontroller.nextImpact();
        return generateconstants.RE_RENDER;
    }

    let card = util.createCard2(impactTextTitle,impactTextArea);

    let explanationCard = util.createCard(null,t.STEP3.EXPLANATION_CARD_TITLE,null,t.STEP3.EXPLANATION_CARD_TEXT);

    let textArea = util.createTextArea(usercontroller.getImpactTextAreaUniqueID());

    // TODO create another card here



    form.append(textArea);

    let button =util.createButton(CSS_IDS.IMPACT_BUTTON,null,t.STEP3.BUTTON);

    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,card);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,explanationCard);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,form);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,button);


}

export function generateStep4() {
    clearGeneratedContent();

    // todo generate card
    let card = util.createCard(null,t.STEP4.CARDTITLE,null,t.STEP4.CARDTEXT);

    let textBoxes = generateTextBoxes();
    let form = createFormWithTextboxes(textBoxes);

    let button = util.createButton(CSS_IDS.STEP4_BUTTON,null,t.STEP4.BUTTON);

    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,card);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,form);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,button);    



}

function generateTextBoxes(){
    let checkboxes = [];
    for(let titleKey of ALL_STEP2_TEXTAREATITLE_KEYS){
        let dbTitleValue = get(titleKey);
        if(dbTitleValue && dbTitleValue != DBCONSTANTS.NOT_SPECIFIED){
            let label = document.createElement("label");
            let checkbox = util.createCheckBox(titleKey,dbTitleValue);
            label.append(checkbox)
            checkboxes.push(label);
        }
    }

    return checkboxes;
}

function createFormWithTextboxes(textboxes){

    let form = util.createForm(CSS_IDS.STEP4_FORM);
    util.appendElements(form,textboxes);

    return form;
}   


export function generateStep5() {   
    clearGeneratedContent();
    
    // TODO generate another card here :)

    let currentAnalysisKey = usercontroller.getCurrentAnalysisKey();
    let title = usercontroller.getByKey(currentAnalysisKey);

    let showableTextKey = usercontroller.getAnalysisShowableTextKey();
    //let text = usercontroller.getTextAssociatedWithKey(showableTextKey);

    let form = util.createForm(CSS_IDS.STEP5_FORM);

    let card = util.createCard2(title,null);
    let explanationCard = createExplanationCard(showableTextKey);
    //let explanationCard = util.createCard(null,t.STEP5.)

    let textarea = util.createTextArea(currentAnalysisKey+showableTextKey+CSS_IDS.STEP_5_ANSWER);
    textarea.setAttribute(attributes.placeholder,t.STEP5.TEXT_AREA);
    form.append(textarea);
    
    let button = util.createButton(CSS_IDS.STEP5_BUTTON,null,t.STEP5.BUTTON);

    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,card);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,explanationCard);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,form);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,button);
}
function createExplanationCard(showableTextKey){
    if(showableTextKey === KEYS.STEP5_FIRSTSTEP_EFFECTS){
        return util.createCard(null,t.STEP5.FIRST_STEP_TITLE,null,t.STEP5.FIRST_STEP_TEXT);
    }
    if(showableTextKey === KEYS.STEP5_SECONDSTEP_ANALYSIS){
        return util.createCard(null,t.STEP5.SECOND_STEP_TITLE,null,t.STEP5.SECOND_STEP_TEXT);
    }
}





export function generateStep6() {
    clearGeneratedContent();    


    let card = util.createCard(null,t.STEP6.CARDTITLE,null,t.STEP6.CARDTEXT);
    util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV, card);

    // TODO it's a bit laggy on mobile devices

    const container = document.querySelector('body')
    const fireworks = new Fireworks(container, { /* options */ })

    fireworks.start();
}

