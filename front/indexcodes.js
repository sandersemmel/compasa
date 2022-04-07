import { fpconst } from "./enum.js";
import * as front from "./front.js";


function startButtonListener(){
    let btn = document.getElementById(fpconst.LETSGO);
    if(btn){
        btn.addEventListener('click', ()=>{
            front.main();
        })
    }
}


function main(){
    startButtonListener()
}

main();

