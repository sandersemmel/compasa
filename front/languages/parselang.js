import { translations } from "./translations2.js";
import { v2 } from "@google-cloud/translate";
import fs from 'fs';

let creds = {
    projectId: 'therapy-320913',
    keyFilename: './keys.json' 
}

let options = {
    from: "en",
    to: "es"
}

const translate = new v2.Translate(creds);



async function startTranslate(){
    console.log("Starting translation:");

    let newTrans = translations;
    for(let tr in translations.en){
        let tranned = await trans(translations.en[tr],options)
        newTrans.en[tr] = tranned;
    }

    return newTrans;
}




function tryToChange(){

}



function writeToFile(text){
    fs.writeFile(`${options.to}.json`,JSON.stringify(text),()=>{
        console.log("new file done");
    })
}



async function trans(translateText,options) {

  let [translation] = await translate.translate(translateText, options);
  console.log(translation)
  return translation;
}


async function main(){
    //let newTrans = await startTranslate();

    writeToFile(newTrans);

}

main();

startTranslate();

