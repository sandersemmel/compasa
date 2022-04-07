import {STEPS, generateconstants} from './enum.js';
import * as usercontroller from './usercontroller.js';
import * as htmlgenerator from './htmlgenerator.js';
import * as actionlisteners from './listeners/actionlisteners.js';
import * as translator from './languages/translations2.js';


export function resume(){
    decideRender();
}


function decideRender(){

    let state = usercontroller.getUserState();

    // TODO change to switch and cover all cases

    if(state){

        if(state.page === STEPS.STEP1 && state.shouldBe === ""){
            htmlgenerator.generateStep1();
            usercontroller.updateUserStatePage(STEPS.STEP1);
            actionlisteners.saveTitlesListener();
        }

        if(state.page === "" && state.shouldBe ===  STEPS.STEP1){
            htmlgenerator.generateStep1();
            usercontroller.updateUserStatePage(STEPS.STEP1);
            actionlisteners.saveTitlesListener();
        }
        if(state.page === STEPS.STEP1 && state.shouldBe ===  STEPS.STEP1){
            htmlgenerator.generateStep1();
            usercontroller.updateUserStatePage(STEPS.STEP1);
            actionlisteners.saveTitlesListener();
        }

        if(state.page === STEPS.STEP1 && state.shouldBe ===  STEPS.STEP2){
            htmlgenerator.generateStep2(); // fields first time
            usercontroller.updateUserStatePage(STEPS.STEP2);
            actionlisteners.fieldsButtonListener();
            //actionlistener for another buton
        }
        if(state.page === STEPS.STEP2 && state.shouldBe ===  STEPS.STEP2){
            htmlgenerator.generateStep2(); // fields
            actionlisteners.fieldsButtonListener();
        }

        if(state.page === STEPS.STEP2 && state.shouldBe === STEPS.STEP3){
            if(htmlgenerator.generateStep3() === generateconstants.RE_RENDER){ // impact first time
                decideRender();
            } 
            actionlisteners.step3Listener();
        }
        if(state.page === STEPS.STEP3 && state.shouldBe === STEPS.STEP3){
            if(htmlgenerator.generateStep3() === generateconstants.RE_RENDER){ // impact 
                decideRender();
            } 
            actionlisteners.step3Listener();
        }

        if(state.page === STEPS.STEP3 && state.shouldBe === STEPS.STEP4){
            // todo should we let a user in that has no titles in db with values?
            htmlgenerator.generateStep4(); // topten first time
            actionlisteners.step4Listener();
        }

        if(state.page === STEPS.STEP4 && state.shouldBe === STEPS.STEP4){
            htmlgenerator.generateStep4(); // topten 
            actionlisteners.step4Listener();
        }

        if(state.page === STEPS.STEP4 && state.shouldBe === STEPS.STEP5){
            usercontroller.initializeAnalysis();
            htmlgenerator.generateStep5(); // analysis first time
            actionlisteners.step5Listener();
        }

        if(state.page === STEPS.STEP5 && state.shouldBe === STEPS.STEP5){
            usercontroller.initializeAnalysis();
            htmlgenerator.generateStep5();
            actionlisteners.step5Listener();
        }
        if(state.page === STEPS.STEP5 && state.shouldBe === STEPS.STEP6){
            htmlgenerator.generateStep6();
        }


        translator.translate();

    }

}
