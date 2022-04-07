import * as store from './store.js';
import {stateobject} from './classes/stateobject.js'
import { STEPS, DBCONSTANTS, FIELDS, FIELDS_ARR,KEYS, PAGES, TEXTAREA, TEXTAREATITLE, TEXTAREA_ARR, TEXTAREATITLE_ARR, CSS_IDS, ALL_STEP2_TEXTAREATITLE_KEYS, languages } from './enum.js';

export function getUserObject(){
    let userObject = store.getUserObject();
    if(userObject){
        return userObject;
    }
    return createUserObject();
}

export function setUserObject(object){
    store.setUserObject(object);
}

export function createUserObject(){

    let data = {
        state: {
            page : "",
            shouldBe: ""
        }
    }
    return data;

}
export function getUserPage(userObject){
    return userObject.state.page;
}
export function setUserPage(userObject,page){
    userObject.state.page = page;
}
export function getUserState(){
    let state = store.getStateObject();
    if(state){
        let obj = stateobject.deserialize(state);
        return obj;
    }
    let newState = createStateObject();
    persistUserState(newState);
    return newState;
}
function persistUserState(stateObj){
    let stringifiedState = JSON.stringify(stateObj);
    store.setStateObject(stringifiedState);
}
export function updateUserStatePage(page){
    let userstate = getUserState();

    userstate.page = page;

    persistUserState(userstate);
}
export function updateUserStateShouldBe(shouldbe){
    let userstate = getUserState();

    userstate.shouldBe = shouldbe;

    persistUserState(userstate);
}

function createStateObject(){
    // TODO set some default in shouldBe?
    return new stateobject({page:"",shouldBe: STEPS.STEP1})
}

export function saveFormData(titlesObject){
    for(let title of titlesObject){
        let key = title[0]
        let value = title[1];

        if(!value){
            value = DBCONSTANTS.NOT_SPECIFIED;
        }

        saveKeyValue(key,value);

    }
}

function saveKeyValue(key,value){
    store.saveKeyValue(key,value);
}

export function isFieldsLeft(){
    let currentFields = getCurrentFields();
    let fieldsMaxLength = FIELDS_ARR.length - 1;
    if(FIELDS_ARR.indexOf(currentFields) == fieldsMaxLength){
        return false;
    }
    return true;
}
export function incrementCurrentFields(){
    let currentField  = getCurrentFields();
    let index = FIELDS_ARR.indexOf(currentField);
    let nextElement = index+1;
    setCurrentFields(FIELDS_ARR[nextElement]);
}

export function getCurrentFields() {
    let currentStep = store.getCurrentFields();
    if(currentStep){
        return currentStep;
    }
    setCurrentFields(createCurrentFields());
    return getCurrentFields();

}

function createCurrentFields(){
    return FIELDS.FIELDS1;
}

export function setCurrentFields(step){
    store.setCurrentFields(step);
}

export function getByKey(key){
    return store.getByKey(key);
}

export function getCurrentImpactInput() {
    return getByKeyAndSetIfNotExist(KEYS.CURRENT_INPUT_IN_IMPACT,PAGES.TITLES.inputs[0]);
}

export function getCurrentImpactFields() {
    return getByKeyAndSetIfNotExist(KEYS.CURRENT_FIELDS_IN_IMPACT,FIELDS.FIELDS1);
}

export function getCurrentImpactTextArea(){
    return getByKeyAndSetIfNotExist(KEYS.CURRENT_TEXTAREA_IN_IMPACT ,TEXTAREA.TEXTAREA1);
}
export function getCurrentImpactTextAreaTitle() {
    return getByKeyAndSetIfNotExist(KEYS.CURRENT_TEXTAREATITLE_IN_IMPACT ,TEXTAREATITLE.TEXTAREATITLE1);

}

export function setCurrentImpactInput(value){
    store.set(KEYS.CURRENT_INPUT_IN_IMPACT,value);
}
export function setCurrentImpactFields(value){
    store.set(KEYS.CURRENT_FIELDS_IN_IMPACT, value);
}
export function setCurrentImpactTextArea(value){
    store.set(KEYS.CURRENT_TEXTAREA_IN_IMPACT, value);
}
export function setCurrentImpactTextAreaTitle(value){
    store.set(KEYS.CURRENT_TEXTAREATITLE_IN_IMPACT,value);
}



export function getByKeyAndSetIfNotExist(byKey, setIfNotExist){
    let current = store.getByKey(byKey);
    if(!current){
        store.set(byKey,setIfNotExist)
    }
    return store.getByKey(byKey);
}

export function isImpactLeft() {
    if(store.hasLastRoundAlreadyHappened()){
        return false;
    }

     if(getCurrentImpactInput() === PAGES.TITLES.inputs[6] &&
        getCurrentImpactFields() === FIELDS.FIELDS7 &&
        getCurrentImpactTextArea() === TEXTAREA.TEXTAREA7 &&
        getCurrentImpactTextAreaTitle() === TEXTAREATITLE.TEXTAREATITLE7){
                    // TODO SET A FLAG WHEN IT's the last round [LINK] SEE ENUM PROBLEM, last on is 6
        store.set(KEYS.LAST_ROUND_OF_IMPACT, 1);
        return true;

        }
        return true;
}

export function incrementImpact() {
    let currentinput = getCurrentImpactInput();
    let currentfields = getCurrentImpactFields();
    let currenttextarea = getCurrentImpactTextArea();
    let currenttextareatitle = getCurrentImpactTextAreaTitle();

    let newtinputindex = PAGES.TITLES.inputs.indexOf(currentinput) + 1;
    let newfieldsindex = FIELDS_ARR.indexOf(currentfields) + 1;
    let newtextareaindex = TEXTAREA_ARR.indexOf(currenttextarea) + 1;
    let newtextareatitleindex = TEXTAREATITLE_ARR.indexOf(currenttextareatitle) + 1;

    if(currenttextarea === TEXTAREA.TEXTAREA7){
        // TODO READ A FLAG WHEN IT'S THE LAST ROUND [LINK]. SEE ENUM PROBLEM, last one is 6


        setCurrentImpactInput(PAGES.TITLES.inputs[newtinputindex]);
        setCurrentImpactFields(FIELDS_ARR[newfieldsindex])
        setCurrentImpactTextArea(TEXTAREA.TEXTAREA1);
        setCurrentImpactTextAreaTitle(TEXTAREATITLE.TEXTAREATITLE1);
    }else{
        setCurrentImpactTextArea(TEXTAREA_ARR[newtextareaindex]);
        setCurrentImpactTextAreaTitle(TEXTAREATITLE_ARR[newtextareatitleindex]);
    }

}


function getImpactTextKey(){
    let currentInput = getCurrentImpactInput();
    let currentImpact = getCurrentImpactFields();
    let currentTextarea = getCurrentImpactTextArea();

    return currentInput + currentImpact + currentTextarea;
}
export function getImpactTextAreaUniqueID(){
    return getImpactTextKey() + CSS_IDS.IMPACT_TEXTAREA_UNIQUE_ID_SUFFIX;
}

export function getCurrentImpactText() {
    return store.get(getImpactTextKey());
}

export function getImpactTitleKey(){
    let currentInput = getCurrentImpactInput();
    let currentImpact = getCurrentImpactFields();
    let currentTextareatitle = getCurrentImpactTextAreaTitle();

    return currentInput + currentImpact + currentTextareatitle;
}


export function getCurrentImpactTitle() {
    let title = getImpactTitleKey();
    return store.get(title);
}

export function hasUserFilledTopTen(){
    return parseInt(getByKeyAndSetIfNotExist(KEYS.HAS_USER_FILLED_TOPTEN,0));

}

export function setHasUserFilledTopTen(intValueBool){
    store.set(KEYS.HAS_USER_FILLED_TOPTEN,intValueBool);
}

export function isOkToContinue(formData) {
   
    let toptenselected_arr = createArrayFromSelectedTopTen(formData);

    if(toptenselected_arr.length == 0){
        return false;
    }
    store.setUserTopTenSelection(toptenselected_arr);
    
    
    let dbTopTen = store.getUserTopTenSelection();
    if(!dbTopTen){
        return false;
    }
    if(dbTopTen == DBCONSTANTS.NOT_SPECIFIED){
        return false;
    }

    return true;

}

export function getUserTopTenSelection(){
    return  store.getUserTopTenSelection();
}

function createArrayFromSelectedTopTen(form){
    let toptenselected_arr = []
    for(let title of form){
 
        let key = title[0]
        let value = title[1];
        if(value==="on"){ // just an extra step to check if it is activated
            toptenselected_arr.push(key);
        }
    }

    return toptenselected_arr;
}


export function initializeAnalysis() {
    isAnalysisInitialized();
}

function isAnalysisInitialized() {
    // TODO run this only at viewcontroller first time entering stpe 5?
    let isInitialized = store.getIsAnalysisInitialized();
    if(isInitialized){
        return true;
    }  
    let userTopTenSelection_arr = getUserTopTenSelection();


    if(!isAllowedToStep5(userTopTenSelection_arr)){
        return false;
    }

    let firstSelection  = userTopTenSelection_arr[0]
    let includesFirstSelection = ALL_STEP2_TEXTAREATITLE_KEYS.includes(firstSelection);

    if(!includesFirstSelection){
        return false;
    }

    store.setCurrentAnalysis(userTopTenSelection_arr[0]);

    let dbCurrentAnalysis = store.getCurrentAnalysisKey();

    if(!(dbCurrentAnalysis) || dbCurrentAnalysis== DBCONSTANTS.NOT_SPECIFIED){
        return false;
    }

    store.set(KEYS.STEP5_CURRENT_ANALYSIS_FIRST_TIME_INITIALIZED,1);
    return true;
}

function isAllowedToStep5(userTopTenSelection_arr){
    let hasFilledTopTen = hasUserFilledTopTen();

    if(hasFilledTopTen != 1){
        return false;
    }
    
    if(!(userTopTenSelection_arr) && 
        userTopTenSelection_arr == DBCONSTANTS.NOT_SPECIFIED &&
        userTopTenSelection_arr.length != 0){
        return false;
    }

    return true;
}

export function getAnalysisShowableTextKey() {
    return store.getAnalysisShowableText();

    
    //throw new Error("Function not implemented.");
}
export function getTextAssociatedWithKey(showableTextKey) {
    if(showableTextKey == KEYS.STEP5_FIRSTSTEP_EFFECTS){
        // TODO LANGUAGE i18nbullshit
        return "TODO IMPLEMENT THIS"
    }

    if(showableTextKey == KEYS.STEP5_SECONDSTEP_ANALYSIS){
        // TODO LANGUAGE i18nbullshit
        return "TODO IMPLEMENT THIS PT2"
    }   

}

export function getCurrentAnalysisKey() {
    return store.getCurrentAnalysisKey();
}

export function incrementCurrentAnalysis() {
    let currentAnalysis = getCurrentAnalysisKey();
    let usertoptenselection_arr = getUserTopTenSelection();

    let indexOfCurrent = usertoptenselection_arr.indexOf(currentAnalysis);
    let nextIndex = indexOfCurrent + 1 ;

    let newCurrentAnalysis = usertoptenselection_arr[nextIndex];

    if(!newCurrentAnalysis){
        store.setCurrentAnalysis(DBCONSTANTS.NO_MORE)
        return;
    }

    store.setCurrentAnalysis(newCurrentAnalysis);
}

export function isCurrentTitleFilled() {
    let option1= getCurrentAnalysisKey() + KEYS.STEP5_FIRSTSTEP_EFFECTS + CSS_IDS.STEP_5_ANSWER;
    let option2 = getCurrentAnalysisKey() + KEYS.STEP5_SECONDSTEP_ANALYSIS + CSS_IDS.STEP_5_ANSWER;

    let answer1 = store.get(option1);
    let answer2 = store.get(option2);

    if( (answer1 && answer2) && (answer1 != DBCONSTANTS.NOT_SPECIFIED && answer2 != DBCONSTANTS.NOT_SPECIFIED)){
        return true;
    }
    return false;
}

function getCurrentAnalysisAnswerKey(){
    let showableTextKey = getAnalysisShowableTextKey();
    let currentAnalysisTitleKey = getCurrentAnalysisKey();
    
    return currentAnalysisTitleKey + showableTextKey + CSS_IDS.STEP_5_ANSWER;
}

export function updateAnalysisShowableTextKey() {
    let currentKey = getAnalysisShowableTextKey();
    if(currentKey == KEYS.STEP5_FIRSTSTEP_EFFECTS){
        store.setAnalysisShowableText(KEYS.STEP5_SECONDSTEP_ANALYSIS)
    }
    if(currentKey == KEYS.STEP5_SECONDSTEP_ANALYSIS){
        store.setAnalysisShowableText(KEYS.STEP5_FIRSTSTEP_EFFECTS);
    }
}


export function getCurrentAnalysis() {
    //store.getcurren
    throw new Error('Function not implemented.');
}

export function nextImpact(){
    if(isImpactLeft()){
        incrementImpact();
        updateUserStatePage(STEPS.STEP3);
    }else{
        updateUserStateShouldBe(STEPS.STEP4)
    }
}

