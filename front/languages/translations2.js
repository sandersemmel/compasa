import {attributes, querySelectors, t} from '../enum.js';

let example1= "school";

let translations = {
    // English translations
    "en": {
     [t.STEP1.CARDTITLE]  : "Divide your life into chapters",
     [t.STEP1.CARDTEXT]: "Please divide your life into 7 chapters. Example of chapter could be First Year In School or ",
     [t.STEP1.INPUT1]  : "Write your first chapter here... maybe it is primary school?",
     [t.STEP1.INPUT2]  : "Write your second chapter here...",
     [t.STEP1.INPUT3]  : "Write your third chapter here...",
     [t.STEP1.INPUT4]  : "Write your fourth chapter here...",
     [t.STEP1.INPUT5]  : "Write your fifth chapter here...",
     [t.STEP1.INPUT6]  : "Write your sixth chapter here...",
     [t.STEP1.INPUT7]  : "Write your seventh chapter here...",
     [t.STEP1.BUTTON]: "Save & Next",


     [t.STEP2.CARDTEXT] : "Please describe in detail significant experiences that happened to you during this chapter of your life. It can be positive or negative experience. Give each experience a title and a description. Try to focus only on the experience itself.",
     [t.STEP2.BUTTON]: "Save chapter",
      
     [t.STEP2.CHAPTER1_TITLE1]: "First experience title...",
     [t.STEP2.CHAPTER1_TEXT1]: "Description of first experience...",
     [t.STEP2.CHAPTER1_TITLE2]: "Second experience title...",
     [t.STEP2.CHAPTER1_TEXT2]: "Description of second experience...",
     [t.STEP2.CHAPTER1_TITLE3]: "Third experience title...",
     [t.STEP2.CHAPTER1_TEXT3]: "Description of third experience...",
     [t.STEP2.CHAPTER1_TITLE4]: "Fourth experience title...",
     [t.STEP2.CHAPTER1_TEXT4]: "Description of fourth experience...",
     [t.STEP2.CHAPTER1_TITLE5]: "Fifth experience title...",
     [t.STEP2.CHAPTER1_TEXT5]: "Description of fifth experience...",
     [t.STEP2.CHAPTER1_TITLE6]: "Sixth experience title...",
     [t.STEP2.CHAPTER1_TEXT6]: "Description of sixth experience...",
     [t.STEP2.CHAPTER1_TITLE7]: "Seventh experience title...",
     [t.STEP2.CHAPTER1_TEXT7]: "Description of seventh experience...",

     [t.STEP2.CHAPTER2_TITLE1]: "First experience title...",
     [t.STEP2.CHAPTER2_TEXT1]: "Description of first experience...",
     [t.STEP2.CHAPTER2_TITLE2]: "Second experience title...",
     [t.STEP2.CHAPTER2_TEXT2]: "Description of second experience...",
     [t.STEP2.CHAPTER2_TITLE3]: "Third experience title...",
     [t.STEP2.CHAPTER2_TEXT3]: "Description of third experience...",
     [t.STEP2.CHAPTER2_TITLE4]: "Fourth experience title...",
     [t.STEP2.CHAPTER2_TEXT4]: "Description of fourth experience...",
     [t.STEP2.CHAPTER2_TITLE5]: "Fifth experience title...",
     [t.STEP2.CHAPTER2_TEXT5]: "Description of fifth experience...",
     [t.STEP2.CHAPTER2_TITLE6]: "Sixth experience title...",
     [t.STEP2.CHAPTER2_TEXT6]: "Description of sixth experience...",
     [t.STEP2.CHAPTER2_TITLE7]: "Seventh experience title...",
     [t.STEP2.CHAPTER2_TEXT7]: "Description of seventh experience...",

     [t.STEP2.CHAPTER3_TITLE1]: "First experience title...",
     [t.STEP2.CHAPTER3_TEXT1]: "Description of first experience...",
     [t.STEP2.CHAPTER3_TITLE2]: "Second experience title...",
     [t.STEP2.CHAPTER3_TEXT2]: "Description of second experience...",
     [t.STEP2.CHAPTER3_TITLE3]: "Third experience title...",
     [t.STEP2.CHAPTER3_TEXT3]: "Description of third experience...",
     [t.STEP2.CHAPTER3_TITLE4]: "Fourth experience title...",
     [t.STEP2.CHAPTER3_TEXT4]: "Description of fourth experience...",
     [t.STEP2.CHAPTER3_TITLE5]: "Fifth experience title...",
     [t.STEP2.CHAPTER3_TEXT5]: "Description of fifth experience...",
     [t.STEP2.CHAPTER3_TITLE6]: "Sixth experience title...",
     [t.STEP2.CHAPTER3_TEXT6]: "Description of sixth experience...",
     [t.STEP2.CHAPTER3_TITLE7]: "Seventh experience title...",
     [t.STEP2.CHAPTER3_TEXT7]: "Description of seventh experience...",

     [t.STEP2.CHAPTER4_TITLE1]: "First experience title...",
     [t.STEP2.CHAPTER4_TEXT1]: "Description of first experience...",
     [t.STEP2.CHAPTER4_TITLE2]: "Second experience title...",
     [t.STEP2.CHAPTER4_TEXT2]: "Description of second experience...",
     [t.STEP2.CHAPTER4_TITLE3]: "Third experience title...",
     [t.STEP2.CHAPTER4_TEXT3]: "Description of third experience...",
     [t.STEP2.CHAPTER4_TITLE4]: "Fourth experience title...",
     [t.STEP2.CHAPTER4_TEXT4]: "Description of fourth experience...",
     [t.STEP2.CHAPTER4_TITLE5]: "Fifth experience title...",
     [t.STEP2.CHAPTER4_TEXT5]: "Description of fifth experience...",
     [t.STEP2.CHAPTER4_TITLE6]: "Sixth experience title...",
     [t.STEP2.CHAPTER4_TEXT6]: "Description of sixth experience...",
     [t.STEP2.CHAPTER4_TITLE7]: "Seventh experience title...",
     [t.STEP2.CHAPTER4_TEXT7]: "Description of seventh experience...",

     [t.STEP2.CHAPTER5_TITLE1]: "First experience title...",
     [t.STEP2.CHAPTER5_TEXT1]: "Description of first experience...",
     [t.STEP2.CHAPTER5_TITLE2]: "Second experience title...",
     [t.STEP2.CHAPTER5_TEXT2]: "Description of second experience...",
     [t.STEP2.CHAPTER5_TITLE3]: "Third experience title...",
     [t.STEP2.CHAPTER5_TEXT3]: "Description of third experience...",
     [t.STEP2.CHAPTER5_TITLE4]: "Fourth experience title...",
     [t.STEP2.CHAPTER5_TEXT4]: "Description of fourth experience...",
     [t.STEP2.CHAPTER5_TITLE5]: "Fifth experience title...",
     [t.STEP2.CHAPTER5_TEXT5]: "Description of fifth experience...",
     [t.STEP2.CHAPTER5_TITLE6]: "Sixth experience title...",
     [t.STEP2.CHAPTER5_TEXT6]: "Description of sixth experience...",
     [t.STEP2.CHAPTER5_TITLE7]: "Seventh experience title...",
     [t.STEP2.CHAPTER5_TEXT7]: "Description of seventh experience...",

     [t.STEP2.CHAPTER6_TITLE1]: "First experience title...",
     [t.STEP2.CHAPTER6_TEXT1]: "Description of first experience...",
     [t.STEP2.CHAPTER6_TITLE2]: "Second experience title...",
     [t.STEP2.CHAPTER6_TEXT2]: "Description of second experience...",
     [t.STEP2.CHAPTER6_TITLE3]: "Third experience title...",
     [t.STEP2.CHAPTER6_TEXT3]: "Description of third experience...",
     [t.STEP2.CHAPTER6_TITLE4]: "Fourth experience title...",
     [t.STEP2.CHAPTER6_TEXT4]: "Description of fourth experience...",
     [t.STEP2.CHAPTER6_TITLE5]: "Fifth experience title...",
     [t.STEP2.CHAPTER6_TEXT5]: "Description of fifth experience...",
     [t.STEP2.CHAPTER6_TITLE6]: "Sixth experience title...",
     [t.STEP2.CHAPTER6_TEXT6]: "Description of sixth experience...",
     [t.STEP2.CHAPTER6_TITLE7]: "Seventh experience title...",
     [t.STEP2.CHAPTER6_TEXT7]: "Description of seventh experience...",

     [t.STEP2.CHAPTER7_TITLE1]: "First experience title...",
     [t.STEP2.CHAPTER7_TEXT1]: "Description of first experience...",
     [t.STEP2.CHAPTER7_TITLE2]: "Second experience title...",
     [t.STEP2.CHAPTER7_TEXT2]: "Description of second experience...",
     [t.STEP2.CHAPTER7_TITLE3]: "Third experience title...",
     [t.STEP2.CHAPTER7_TEXT3]: "Description of third experience...",
     [t.STEP2.CHAPTER7_TITLE4]: "Fourth experience title...",
     [t.STEP2.CHAPTER7_TEXT4]: "Description of fourth experience...",
     [t.STEP2.CHAPTER7_TITLE5]: "Fifth experience title...",
     [t.STEP2.CHAPTER7_TEXT5]: "Description of fifth experience...",
     [t.STEP2.CHAPTER7_TITLE6]: "Sixth experience title...",
     [t.STEP2.CHAPTER7_TEXT6]: "Description of sixth experience...",
     [t.STEP2.CHAPTER7_TITLE7]: "Seventh experience title...",
     [t.STEP2.CHAPTER7_TEXT7]: "Description of seventh experience...",


     [t.STEP3.BUTTON]: "Save impact",
     [t.STEP3.EXPLANATION_CARD_TITLE]: "How has this experience impacted you?",
     [t.STEP3.EXPLANATION_CARD_TEXT]: "In what ways has this experience shaped you into becoming who you are today? How do you view other people after this? How do you view the world? ",


     [t.STEP4.BUTTON]: "Continue to analysis",
     [t.STEP4.CARDTITLE]: "What are your most critical life experiences?",
     [t.STEP4.CARDTEXT]: "Choose 10 experiences which were the most important in shaping who you are today.",


     [t.STEP5.FIRST_STEP_TITLE]: "Reflecting on experience",
     [t.STEP5.FIRST_STEP_TEXT]: "Was this a positive or negative experience? How did it happen? Did other people hurt or help you? What role did you have in the events that lead to this experience? Was there anything you should have done differently? Was there something that you were not in control of or something that was beyond your understanding at the time?",
     [t.STEP5.SECOND_STEP_TITLE]: "Analysing personality",
     [t.STEP5.SECOND_STEP_TEXT]: "Did this affect your trust in other people? Did it affect your hopes for the future? Did it affect belief in your own value and the value of life? Did it affect your personality?",
     [t.STEP5.BUTTON]: "Save analysis",
     [t.STEP5.TEXT_AREA]: "Write your analysis here...",

     [t.STEP6.CARDTITLE]: "Well done! You should be very proud of yourself.",
     [t.STEP6.CARDTEXT]: "The effects of your writing might take a while to fully manifest themselves. Feeling worse after writing is totally normal. You have done a huge job going through your past and it's not an easy task. You should start feeling positive benefits after two weeks. Your past memories will no longer haunt and bother you as much and you won't feel resentment. We hope that this excercise helped you becoming a better person, you deserve it. After you start feeling the positive benefits, you can continue on to the next excercise.",
     [t.FRONTPAGE.LARGETEXT]: "Start your new life",
     [t.FRONTPAGE.LETSGO_BTN]: "Lets go!",
     [t.FRONTPAGE.SMALLER_TEXT]: "Get to know yourself",
     [t.FRONTPAGE.SMALLER_TEXT_SUBTEXT]: "The purpose of this exercise is to help you develop a clearer sense of your past by writing your own story.",
     [t.FRONTPAGE.WHY_BOTHER]: "Why bother?",
     [t.FRONTPAGE.WHEN_BAD]: "When bad things happen to you, your mind and body react by treating the environment as if it were dangerous and preparing for an emergency. This preparation is stressful and will exhaust you mentally and physically.",
     [t.FRONTPAGE.DONT_MAKE_SAME_MISTAKES]: "DON’T REPEAT MISTAKES - If something bad has happened to you in the past, your mind can’t be at peace until you’ve figured out how to avoid the same thing happening to you again in the future.",
     [t.FRONTPAGE.REMOVE_WEIGHT]: "REMOVE THE WEIGHT OF THE PAST - If you remember memories that make you ashamed, guilty, angry, or hurt, and those memories are more than a year and a half old, your mind is not at peace. You still have the weight of the past.",
     [t.FRONTPAGE.STRESS_MANAGEMENT]: "STRESS MANAGEMENT - If you recognize these signs in yourself, your mental and physical health may be at risk. Your body produces cortisol when it detects that it is in danger and a constantly elevated level of cortisol suppresses the immune system, burns energy, damages memory and emotional abilities.",


     [t.FRONTPAGE.PROMO1]: "100 % Free. No need to register, no fees.",
     [t.FRONTPAGE.PROMO2]: "100 % Private. No data is sent to any server. All data is kept on your device",
     [t.FRONTPAGE.PROMO3]: "100 % Run on your donations and ads that are being shown on the site."

    },
    "fi": {

    }
  };

  

export function translate(){
    translateElements();
    translateInputPlaceHolders();
    translateTextareaPlaceHolders();
}



export function translateElements(){
    let allTranslatableElements = document.querySelectorAll(attributes.translateQuerySelector);

    if(!allTranslatableElements){
        return;
    }

    allTranslatableElements.forEach(e=>{
        let attributeValue = e.getAttribute(attributes.translate);
        const translation = translations[getCurrentlySelectedLanguage()][attributeValue];
        // @ts-ignore
        e.innerText = translation;
    })
}

export function translateTextareaPlaceHolders(){
    let textAreasWplaceholders = document.querySelectorAll(querySelectors.TEXTAREAS_WITH_PLACEHOLDER);

    if(!textAreasWplaceholders){
        return;
    }
    textAreasWplaceholders.forEach((e)=>{
        let attributeValue = e.getAttribute(attributes.placeholder);
        const translation = translations[getCurrentlySelectedLanguage()][attributeValue];
        e.setAttribute(attributes.placeholder, translation);
    })


}

export function translateInputPlaceHolders(){
    let inputsWplaceholders = document.querySelectorAll(querySelectors.INPUTS_WITH_PLACEHOLDER); // get all input elements with 'placeholder' attribute


    if(!inputsWplaceholders){
        return; 
    }

    inputsWplaceholders.forEach((e)=>{
        let attributeValue = e.getAttribute(attributes.placeholder);
        const translation = translations[getCurrentlySelectedLanguage()][attributeValue];
        e.setAttribute(attributes.placeholder, translation);
    })
 }

function getCurrentlySelectedLanguage(){
    // TODO from localstorage
    return "en";
}

function setCurrentlySelectedLanguage(){

}