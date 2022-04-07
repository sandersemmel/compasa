import * as store from './store.js';
import * as util from './util.js';
import { ELEMENTS, EVENTS } from './enum.js';

export function hasUserVisitedBefore(){
    return store.getAddress() ? true : false;
}

export function isItSameAddress(){
    let selectedAddress = util.getSelectedAddress();
    if(selectedAddress){
        return store.getAddress() === util.getSelectedAddress();
    }
    return false;
}

export function setIsSameAddress(boolValue){
    store.setIsSameAddress(boolValue);
}
export function setAllowedToConnect(boolValue){
    store.setAllowedToConnect(boolValue);
}
export function getAllowedToConnect(boolValue){
    store.setAllowedToConnect(boolValue);
}

export function isSameGuyChecker(){
    let has = hasUserVisitedBefore();
        if(!has){
            setIsSameAddress(false)
            return;
        }
        let isConnected = util.getSelectedAddress();
        if(!isConnected){
            setIsSameAddress(false);
            return;
        }
        let isSame = isItSameAddress();

        if(!isSame){
            setIsSameAddress(false);
            return;
        }

        setIsSameAddress(true);
        util.changeInnerHTML(ELEMENTS.SELECTED_ADDRESS,util.getSelectedAddress());
        // send custom event?

}

export function enableConnectingChecker(){
    console.log("running")
    let isSame = isItSameAddress();
        if(!isSame){
            setAllowedToConnect(true);
            let allowToConnectEvent = util.createEvent(EVENTS.ALLOWED_TO_CONNECT,util.createDataForCustomEvent(false))
            document.dispatchEvent(allowToConnectEvent);
            return;
        }
        
        setAllowedToConnect(false);
}

export function saveEnableConnectingPollerID(ID){
    store.saveEnableConnectingPollerID(ID);
}
export async function stopEnablePoller(){
    //let x = window.koiranruoka;
    //console.log(x);
    let ID = store.getsaveEnableConnectingPollerID();
    stopPoller(ID);
}


function stopPoller(ID){
    let num = parseInt(ID);
    console.log("stopping polelr with id,", num);
    clearInterval(num);
}

export function startEnablePoller() {
    let id = setInterval(enableConnectingChecker,10000);
    store.saveEnableConnectingPollerID(id);
}
