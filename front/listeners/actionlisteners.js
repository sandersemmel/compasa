import {ELEMENTS, EVENTS,CSS_IDS, STEPS, PAGES, DBCONSTANTS} from '../enum.js'
import * as util from '../util.js'
import * as usercontroller from '../usercontroller.js';
import * as viewcontroller from '../viewcontroller.js';





export function saveTitlesListener(){
    let elem = util.getElementByID(CSS_IDS.SAVEBUTTONTITLES);
    if(elem){
        elem.addEventListener('click', (event)=>{
            event.preventDefault();
            let formData = util.getFormData(CSS_IDS.TITLESFORM);
            usercontroller.saveFormData(formData);
            usercontroller.updateUserStateShouldBe(STEPS.STEP2)
            viewcontroller.resume();
        })
    }


}
export function fieldsButtonListener(){
    let elem = util.getElementByID(CSS_IDS.SAVEBUTTON_FIELDS);
    if(elem){
        elem.addEventListener('click', (event)=>{


            event.preventDefault();
            let formData = util.getFormData(CSS_IDS.FIELDS_FORM);
            usercontroller.saveFormData(formData);
            
            console.log();

            if(usercontroller.isFieldsLeft()){
                usercontroller.incrementCurrentFields();

            }else{
                usercontroller.updateUserStateShouldBe(STEPS.STEP3)
            }

            viewcontroller.resume();
        })
    }
}





export function step3Listener() {
    let elem = util.getElementByID(CSS_IDS.IMPACT_BUTTON);
    if(elem){
        elem.addEventListener('click', (event)=>{
            event.preventDefault();
            let formData = util.getFormData(CSS_IDS.IMPACT_FORM);


            usercontroller.saveFormData(formData);

            usercontroller.nextImpact() // increment to next until all done

            viewcontroller.resume();

        })
    }

    //throw new Error('Function not implemented.');
}

export function step4Listener() {
    let elem = util.getElementByID(CSS_IDS.STEP4_BUTTON);
    if(elem){
        elem.addEventListener('click', (event)=>{
            event.preventDefault();
            let formData = util.getFormData(CSS_IDS.STEP4_FORM);

            let isOk = usercontroller.isOkToContinue(formData);

            if(isOk){
                // go to step 5
                usercontroller.setHasUserFilledTopTen(1);
                usercontroller.updateUserStatePage(STEPS.STEP4);
                usercontroller.updateUserStateShouldBe(STEPS.STEP5);
                viewcontroller.resume();
            }



        })
    }

}


export function step5Listener() {
   let button = document.getElementById(CSS_IDS.STEP5_BUTTON); 
   button.addEventListener('click', ()=>{
       
        usercontroller.updateUserStatePage(STEPS.STEP5);

        //probably should have promise here and not let pass this point unless saving form succeeds
        let form = util.getFormData(CSS_IDS.STEP5_FORM);
        usercontroller.saveFormData(form);


        // update current analysis
        if(usercontroller.isCurrentTitleFilled()){
            usercontroller.incrementCurrentAnalysis();

            let value = usercontroller.getCurrentAnalysisKey();
            if(value == DBCONSTANTS.NO_MORE){
                usercontroller.updateUserStateShouldBe(STEPS.STEP6)
                return viewcontroller.resume();
            }

        }
     
        usercontroller.updateAnalysisShowableTextKey();
       


        return viewcontroller.resume();

        // resume

   })
}

