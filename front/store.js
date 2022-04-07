
import { DBCONSTANTS, KEYS } from "./enum";
import { getByKeyAndSetIfNotExist } from "./usercontroller";

export function getAddress(){
    return get("address");
}

export function setAddress(address){
    set('address',address)
}
export function clearStore(){
    localStorage.removeItem("address");
}

export function setIsChecking(boolValue){
    set('isChecking',boolValue)
}
export function getIsChecking(){
    return get('isChecking')
}
export function setIntervalID(ID){
    set('intervalID',ID);
}
export function getIntervalID(){
    return get('intervalID');
}
export function getHasBeenChecked(){
    return get("hasbeenchecked")
}
export function setHasBeenChecked(boolValue){
    set("hasbeenchecked",boolValue);
}
export function setHasBeenCheckedIntervalID(ID){
    set("hasBeenCheckedIntervalID", ID)
}
export function getHasBeenCheckedIntervalID(ID){
    return get(ID)
}
export function setIsSameAddress(boolValue){
    set("isSameAddress", boolValue);
}
export function setAllowedToConnect(boolValue){
    set("isAllowedToConnect", boolValue);
}
export function getAllowedToConnect(boolValue){
    return get("isAllowedToConnect");
}
export function saveEnableConnectingPollerID(ID){
    set("enableconnectingpoller",ID);
}
export function getsaveEnableConnectingPollerID(){
    return get("enableconnectingpoller");
}

export function get(key){
    return localStorage.getItem(key);
}
export function set(key,value){
    localStorage.setItem(key,value);
    //window.dispatchEvent( new Event('storage'));

}

export function getUserObject() {
    return get("userobject")
}
export function setUserObject(object) {
    set("userobject",object);
}

export function getStateObject() {
    return get("stateobject");
}
export function setStateObject(stateobject){
    set("stateobject", stateobject)
}
export function setInitialized(value){
    set("isInitialized", value);
}
export function getIsInitialized() {
    let initialized = get("isInitialized");
    if(initialized){
        return initialized;
    }
    setInitialized(0);
    return get("isInitialized");
}

export function saveKeyValue(key,value) {
    set(key,value);
}

export function getCurrentFields() {
    return get("currentFields")
}

export function setCurrentFields(value) {
    set("currentFields", value)
}

export function getByKey(key) {
    return get(key);
}


export function hasLastRoundAlreadyHappened() {
    let result = get(KEYS.LAST_ROUND_OF_IMPACT);
    if(!result){
        set(KEYS.LAST_ROUND_OF_IMPACT,0)
        return false;
    }
    let intResult = parseInt(result);

    if(intResult == 0){
        return false;
    }

    return true;
}
export function setUserTopTenSelection(selections_arr) {
    set(KEYS.USER_TOPTEN_SELECTION_ARR,JSON.stringify(selections_arr));
    //throw new Error('Function not implemented.');
}
export function getUserTopTenSelection(){
    return JSON.parse(getByKeyAndSetIfNotExist(KEYS.USER_TOPTEN_SELECTION_ARR, []));
}

export function setCurrentAnalysis(currentAnalysis) {
    set(KEYS.STEP5_CURRENT_ANALYSIS,currentAnalysis)
}
export function getCurrentAnalysisKey(){
    return getByKeyAndSetIfNotExist(KEYS.STEP5_CURRENT_ANALYSIS,DBCONSTANTS.NOT_SPECIFIED);
}

export function getIsAnalysisInitialized() {
    return parseInt(getByKeyAndSetIfNotExist(KEYS.STEP5_CURRENT_ANALYSIS_FIRST_TIME_INITIALIZED,0));
}

export function getAnalysisShowableText() {
    return getByKeyAndSetIfNotExist(KEYS.STEP5_SHOWABLE_TEXT_TO_USER, KEYS.STEP5_FIRSTSTEP_EFFECTS);
}
export function setAnalysisShowableText(value){
    set(KEYS.STEP5_SHOWABLE_TEXT_TO_USER,value);
}

