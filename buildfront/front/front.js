import { createConnectedStore } from 'undux'


// TODO
const USER_UNIQUE_KEY = "";


async function hasKey(){
    let uniqueKey = localStorage.getItem(USER_UNIQUE_KEY)
    if(!uniqueKey){
        return false;
    }
    return true;
}
async function createKey(){
    // ping backend
}
async function getKey(){
    let has = await hasKey();
    if(!has){
        // @ts-ignore
        let key = await createKey();
    }

}
function disableButton(){
    console.log("disabling")
    let button = document.getElementById("enableEthereumButton");
    // @ts-ignore
    button.disabled = true;
}
function changeButtonText(){
    //tt
}
function enableButton(){
    let button = document.getElementById("enableEthereumButton");
    // @ts-ignore
    button.disabled = false;
}

async function main(){
    getKey();
}
function showSelectedAddress(address){
    let elem = document.getElementById("selectedAddress");
    elem.innerHTML = address
}

function addEthereumButtonListener(){
    let elem = document.getElementById("enableEthereumButton");
    elem.addEventListener('click', async ()=>{
        disableButton();
        // @ts-ignore
        let response = await window.ethereum.request({method: 'eth_requestAccounts'})
        .then(()=>{
            // @ts-ignore
            showSelectedAddress(window.ethereum.selectedAddress);
        })
        .catch((error)=>{
            console.log("something shit happened,", error)
            enableButton();
        });
        console.log("response",response);
        // @ts-ignore
        console.log("selected:", window.ethereum.selectedAddress);
    })
}

function addOnConnectListener(){
    // @ts-ignore
    ethereum.on('connect', (connectinfo)=>{
            console.log(connectinfo);
    });
}

function isConnected(){
    // @ts-ignore
    if(window.ethereum.selectedAddress){
        return true;
    }
    return false;
}

window.onload = function (){
    console.log("yo")
    if(isConnected()){
        disableButton();
    }
    addEthereumButtonListener();
    addOnConnectListener();
}


document.onload = function (){
    console.log("kek");
}

//document.onload
//document.r
//window.PerformanceNavigationTiming.


// .js for the comm, not like last time please

// check for token in local storage
// if it does not exist, send a request to backend
// backend sends token
// save token to local storage


// can i save everything to key,value?hmm its doable but kinda shit

// schema for local storage

// epoch

