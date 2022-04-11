
export function getSelectedAddress(){
    //@ts-ignore
    return window.ethereum.selectedAddress;
}

export function createDataForCustomEvent(boolValue){
    let data = {
        detail: {
          allowed: boolValue
        }
    }
    return data;

}
export function createDataForCustomEvent2(customValue){
    let data = {
        detail : {
            value: customValue
        }
    }
    return data;
}

export function createEvent(withName, includeData){
    if(!includeData){
        return new CustomEvent(withName);
    }
    return new CustomEvent(withName, includeData);
}

export function setIsEnabled(elementID, boolvalue){
    let element = document.getElementById(elementID);
    if(element){
        //@ts-ignore
        element.disabled = boolvalue
    }
}
export function enableElement(elementID){
    let element = getElementByID(elementID);
    if(element){
        //@ts-ignore
        element.disabled = false
    }
}
export function disableElement(elementID){
    let element = getElementByID(elementID);
    if(element){
        //@ts-ignore
        element.disabled = true
    }
}


export function changeInnerHTML(ofElement,changeTo){
    let elem = getElementByID(ofElement)
    elem.innerHTML = changeTo
}

export function getElementByID(ID){
    return document.getElementById(ID)
}
export function appendToElement(elementID, appendElement){
    let elem = getElementByID(elementID)
    if(elem){
        elem.append(appendElement);
    }
}
export function appendArrOfElements(toElementID,appendElements){
    for(let elem of appendElements){
        appendToElement(toElementID,elem)
    }
}

export function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false;
      }
    }
    return true;
  }
  function isObject(object) {
    return object != null && typeof object === 'object';
}

export function parseJSON(obj){
    if(typeof obj === "string"){
        return JSON.parse(obj);
    }
    return obj;
}
export function shouldPersist(state){
    if(state.page !== state.shouldBe){
        return true;
    }
    return false;
}

export function appendElements(elem1, arr){
    for(let elem of arr){
        elem1.append(elem)
    }
    return elem1;
    
}

export function appendToDocument(element) {
    document.append(element)
}

export function createDiv(){
    return document.createElement("div");
}
export function createRowDiv(){
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");
    return rowDiv;
}

export function createColumDiv_S12(){
    let s12Div = document.createElement("div");
    s12Div.setAttribute("class", "col s12");
    return s12Div;
}

export function createCard(title,titleTranslate, text,textTranslate){
    let cardDiv = createDiv();
    cardDiv.setAttribute("class", "card grey")

    let cardContentDiv = createDiv();
    cardContentDiv.setAttribute("class","card-content white-text")

    let span = document.createElement("span");
    span.setAttribute("class", "card-title");
    if(titleTranslate){
        span.setAttribute("data-i18n-key",titleTranslate);
    }

    if(title){
        span.innerHTML = title;
    }

    let p = document.createElement("p");
    if(textTranslate){
        p.setAttribute("data-i18n-key",textTranslate);
    }
    if(text){
        p.innerHTML = text;
    }

    cardContentDiv.append(span);
    cardContentDiv.append(p);

    cardDiv.append(cardContentDiv);

    return cardDiv;
}

export function createCard2(title, text){
    let cardDiv = createDiv();
    cardDiv.setAttribute("class", "card grey")

    let cardContentDiv = createDiv();
    cardContentDiv.setAttribute("class","card-content white-text")

    let span = document.createElement("span");
    span.setAttribute("class", "card-title");
    span.innerHTML = title;

    let p = document.createElement("p");

    //p.setAttribute("data-i18n-key",textTranslate);
    
    p.innerHTML = text;
    

    cardContentDiv.append(span);
    cardContentDiv.append(p);

    cardDiv.append(cardContentDiv);

    return cardDiv;
}


export function getFormDataAsJson(form){
    let formData = new FormData(form);
    let data = {};
    for (let [key, prop] of formData) {
        data[key] = prop;
    }
    return data;
    //let jsonData = JSON.stringify(data);
    //return jsonData;
}

export function getFormData(formName){
    let form = document.getElementById(formName);
    let formData = new FormData(form);
    return formData;
}


export function createButton(buttonID, innerHTML, translateKey){

    /*Button for saving*/
    let buttondiv = createDiv();
    buttondiv.setAttribute("class", "right");

    let button = document.createElement("button");
    button.setAttribute("class","waves-effect waves-light btn");
    button.setAttribute("id",buttonID);
    button.setAttribute("type", "submit");
    if(translateKey){
        button.setAttribute("data-i18n-key",translateKey);
    }
    if(innerHTML){
        button.innerHTML = innerHTML
    }

    buttondiv.append(button);
    return buttondiv;
}

export function createForm(withID){
    let form = document.createElement("form");
    form.setAttribute("id", withID);
    return form;
}

export function createTextArea(withID){
    let textArea = document.createElement("textarea");
    textArea.setAttribute("class","materialize-textarea");
    textArea.setAttribute("id",withID);
    textArea.setAttribute("name",withID);
    return textArea;
}

export function createCheckBox(ID, spanName) {

    let wrapper = document.createElement("div");

    let span = document.createElement("span");
    span.innerHTML = spanName;

    let input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("class", "filled_in");
    input.setAttribute("name", ID);
    input.setAttribute("id",ID);

    wrapper.append(input);
    wrapper.append(span);

    return wrapper;
    


}


export function getFrom(getthis,from){
    return from[getthis];
}

