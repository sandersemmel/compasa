import {attributes, querySelectors, t} from '../enum.js';
import * as store from '../store.js';

let example1= "school";

export let translations = {
    // English translations
    "en": {
     [t.STEP1.CARDTITLE]  : "Divide your life into chapters",
     [t.STEP1.CARDTEXT]: "Please divide your life into 7 chapters. Example of chapter could be First Year In School, First job, relationship ",
     [t.STEP1.INPUT1]  : "Write your first chapter here...",
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
     [t.FRONTPAGE.PROMO2]: "100 % Private. No data is sent to any server. All data is kept on your device.",
     [t.FRONTPAGE.PROMO3]: "100 % Run on your donations and ads that are being shown on the site.",


     [t.FRONTPAGE.MADE_FOR_YOU]: "It's made for you, yes you",
     [t.FRONTPAGE.ARTICLE]: "This website was developed because there was a need for completely private and free app to write your own story.",
     [t.FRONTPAGE.FOOTER_TEXT]: "Developed to promote mental health and and quality of life. ❤️"


    },
    "fi": {

    },

    "es": {
        "STEP1_CARDTITLE": "Divide tu vida en capítulos",
        "STEP1_CARDTEXT": "Por favor divide tu vida en 7 capítulos. Ejemplo de capítulo podría ser Primer año en la escuela, primer trabajo, relación",
        "input1": "Escribe tu primer capítulo aquí...",
        "input2": "Escribe tu segundo capítulo aquí...",
        "input3": "Escribe aquí tu tercer capítulo...",
        "input4": "Escribe aquí tu cuarto capítulo...",
        "input5": "Escribe aquí tu quinto capítulo...",
        "input6": "Escribe aquí tu sexto capítulo...",
        "input7": "Escribe tu séptimo capítulo aquí...",
        "STEP1_BUTTON": "Guardar y siguiente",
        "STEP2_CARDTEXT": "Describa en detalle las experiencias significativas que le sucedieron durante este capítulo de su vida. Puede ser una experiencia positiva o negativa. Dé a cada experiencia un título y una descripción. Trate de concentrarse solo en la experiencia en sí.",
        "STEP2_BUTTON": "Guardar capítulo",
        "input1fields1textareatitle1": "Título de la primera experiencia...",
        "input1fields1textarea1": "Descripción de la primera experiencia...",
        "input1fields1textareatitle2": "Segundo título de experiencia...",
        "input1fields1textarea2": "Descripción de la segunda experiencia...",
        "input1fields1textareatitle3": "Título de la tercera experiencia...",
        "input1fields1textarea3": "Descripción de la tercera experiencia...",
        "input1fields1textareatitle4": "Cuarto título de experiencia...",
        "input1fields1textarea4": "Descripción de la cuarta experiencia...",
        "input1fields1textareatitle5": "Quinto título de experiencia...",
        "input1fields1textarea5": "Descripción de la quinta experiencia...",
        "input1fields1textareatitle6": "Sexto título de experiencia...",
        "input1fields1textarea6": "Descripción de la sexta experiencia...",
        "input1fields1textareatitle7": "Séptimo título de experiencia...",
        "input1fields1textarea7": "Descripción de la séptima experiencia...",
        "input2fields2textareatitle1": "Título de la primera experiencia...",
        "input2fields2textarea1": "Descripción de la primera experiencia...",
        "input2fields2textareatitle2": "Segundo título de experiencia...",
        "input2fields2textarea2": "Descripción de la segunda experiencia...",
        "input2fields2textareatitle3": "Título de la tercera experiencia...",
        "input2fields2textarea3": "Descripción de la tercera experiencia...",
        "input2fields2textareatitle4": "Cuarto título de experiencia...",
        "input2fields2textarea4": "Descripción de la cuarta experiencia...",
        "input2fields2textareatitle5": "Quinto título de experiencia...",
        "input2fields2textarea5": "Descripción de la quinta experiencia...",
        "input2fields2textareatitle6": "Sexto título de experiencia...",
        "input2fields2textarea6": "Descripción de la sexta experiencia...",
        "input2fields2textareatitle7": "Séptimo título de experiencia...",
        "input2fields2textarea7": "Descripción de la séptima experiencia...",
        "input3fields3textareatitle1": "Título de la primera experiencia...",
        "input3fields3textarea1": "Descripción de la primera experiencia...",
        "input3fields3textareatitle2": "Segundo título de experiencia...",
        "input3fields3textarea2": "Descripción de la segunda experiencia...",
        "input3fields3textareatitle3": "Título de la tercera experiencia...",
        "input3fields3textarea3": "Descripción de la tercera experiencia...",
        "input3fields3textareatitle4": "Cuarto título de experiencia...",
        "input3fields3textarea4": "Descripción de la cuarta experiencia...",
        "input3fields3textareatitle5": "Quinto título de experiencia...",
        "input3fields3textarea5": "Descripción de la quinta experiencia...",
        "input3fields3textareatitle6": "Sexto título de experiencia...",
        "input3fields3textarea6": "Descripción de la sexta experiencia...",
        "input3fields3textareatitle7": "Séptimo título de experiencia...",
        "input3fields3textarea7": "Descripción de la séptima experiencia...",
        "input4fields4textareatitle1": "Título de la primera experiencia...",
        "input4fields4textarea1": "Descripción de la primera experiencia...",
        "input4fields4textareatitle2": "Segundo título de experiencia...",
        "input4fields4textarea2": "Descripción de la segunda experiencia...",
        "input4fields4textareatitle3": "Título de la tercera experiencia...",
        "input4fields4textarea3": "Descripción de la tercera experiencia...",
        "input4fields4textareatitle4": "Cuarto título de experiencia...",
        "input4fields4textarea4": "Descripción de la cuarta experiencia...",
        "input4fields4textareatitle5": "Quinto título de experiencia...",
        "input4fields4textarea5": "Descripción de la quinta experiencia...",
        "input4fields4textareatitle6": "Sexto título de experiencia...",
        "input4fields4textarea6": "Descripción de la sexta experiencia...",
        "input4fields4textareatitle7": "Séptimo título de experiencia...",
        "input4fields4textarea7": "Descripción de la séptima experiencia...",
        "input5fields5textareatitle1": "Título de la primera experiencia...",
        "input5fields5textarea1": "Descripción de la primera experiencia...",
        "input5fields5textareatitle2": "Segundo título de experiencia...",
        "input5fields5textarea2": "Descripción de la segunda experiencia...",
        "input5fields5textareatitle3": "Título de la tercera experiencia...",
        "input5fields5textarea3": "Descripción de la tercera experiencia...",
        "input5fields5textareatitle4": "Cuarto título de experiencia...",
        "input5fields5textarea4": "Descripción de la cuarta experiencia...",
        "input5fields5textareatitle5": "Quinto título de experiencia...",
        "input5fields5textarea5": "Descripción de la quinta experiencia...",
        "input5fields5textareatitle6": "Sexto título de experiencia...",
        "input5fields5textarea6": "Descripción de la sexta experiencia...",
        "input5fields5textareatitle7": "Séptimo título de experiencia...",
        "input5fields5textarea7": "Descripción de la séptima experiencia...",
        "input6fields6textareatitle1": "Título de la primera experiencia...",
        "input6fields6textarea1": "Descripción de la primera experiencia...",
        "input6fields6textareatitle2": "Segundo título de experiencia...",
        "input6fields6textarea2": "Descripción de la segunda experiencia...",
        "input6fields6textareatitle3": "Título de la tercera experiencia...",
        "input6fields6textarea3": "Descripción de la tercera experiencia...",
        "input6fields6textareatitle4": "Cuarto título de experiencia...",
        "input6fields6textarea4": "Descripción de la cuarta experiencia...",
        "input6fields6textareatitle5": "Quinto título de experiencia...",
        "input6fields6textarea5": "Descripción de la quinta experiencia...",
        "input6fields6textareatitle6": "Sexto título de experiencia...",
        "input6fields6textarea6": "Descripción de la sexta experiencia...",
        "input6fields6textareatitle7": "Séptimo título de experiencia...",
        "input6fields6textarea7": "Descripción de la séptima experiencia...",
        "input7fields7textareatitle1": "Título de la primera experiencia...",
        "input7fields7textarea1": "Descripción de la primera experiencia...",
        "input7fields7textareatitle2": "Segundo título de experiencia...",
        "input7fields7textarea2": "Descripción de la segunda experiencia...",
        "input7fields7textareatitle3": "Título de la tercera experiencia...",
        "input7fields7textarea3": "Descripción de la tercera experiencia...",
        "input7fields7textareatitle4": "Cuarto título de experiencia...",
        "input7fields7textarea4": "Descripción de la cuarta experiencia...",
        "input7fields7textareatitle5": "Quinto título de experiencia...",
        "input7fields7textarea5": "Descripción de la quinta experiencia...",
        "input7fields7textareatitle6": "Sexto título de experiencia...",
        "input7fields7textarea6": "Descripción de la sexta experiencia...",
        "input7fields7textareatitle7": "Séptimo título de experiencia...",
        "input7fields7textarea7": "Descripción de la séptima experiencia...",
        "STEP3_BUTTON": "Guardar impacto",
        "EXPLANATION_CARD_TITLE": "¿Cómo te ha impactado esta experiencia?",
        "EXPLANATION_CARD_TEXT": "¿De qué manera te ha moldeado esta experiencia para convertirte en quien eres hoy? ¿Cómo ves a otras personas después de esto? ¿Cómo ves el mundo?",
        "STEP4_BUTTON": "Continuar al análisis",
        "STEP4_CARDTITLE": "¿Cuáles son sus experiencias de vida más críticas?",
        "STEP4_CARDTEXT": "Elige 10 experiencias que fueron las más importantes para dar forma a quién eres hoy.",
        "FIRST_STEP_TITLE": "Reflexionando sobre la experiencia",
        "FIRST_STEP_TEXT": "¿Fue esta una experiencia positiva o negativa? ¿Como paso? ¿Otras personas te lastimaron o te ayudaron? ¿Qué papel tuviste en los eventos que llevaron a esta experiencia? ¿Hubo algo que deberías haber hecho diferente? ¿Había algo que no controlabas o algo que estaba más allá de tu comprensión en ese momento?",
        "SECOND_STEP_TITLE": "Analizando la personalidad",
        "SECOND_STEP_TEXT": "¿Esto afectó su confianza en otras personas? ¿Afectó sus esperanzas para el futuro? ¿Afectó la creencia en su propio valor y el valor de la vida? ¿Afectó tu personalidad?",
        "STEP5_BUTTON": "Guardar análisis",
        "STEP5_TEXT_AREA": "Escribe aquí tu análisis...",
        "STEP6_CARDTITLE": "¡Bien hecho! Deberías estar muy orgulloso de ti mismo.",
        "STEP6_CARDTEXT": "Los efectos de su escritura pueden tardar un tiempo en manifestarse por completo. Sentirse peor después de escribir es totalmente normal. Has hecho un gran trabajo revisando tu pasado y no es una tarea fácil. Debería comenzar a sentir beneficios positivos después de dos semanas. Tus recuerdos del pasado ya no te perseguirán ni te molestarán tanto y no sentirás resentimiento. Esperamos que este ejercicio te haya ayudado a convertirte en una mejor persona, te lo mereces. Después de que comience a sentir los beneficios positivos, puede continuar con el siguiente ejercicio.",
        "LARGETEXT": "Comienza tu nueva vida",
        "LETSGO_BTN": "¡Vamos!",
        "SMALLER_TEXT": "Conócete a ti mismo",
        "SMALLER_TEXT_SUBTEXT": "El propósito de este ejercicio es ayudarlo a desarrollar un sentido más claro de su pasado al escribir su propia historia.",
        "WHY_BOTHER": "¿Por qué molestarse?",
        "WHEN_BAD": "Cuando te suceden cosas malas, tu mente y tu cuerpo reaccionan tratando el entorno como si fuera peligroso y preparándose para una emergencia. Esta preparación es estresante y lo agotará mental y físicamente.",
        "DONT_MAKE_SAME_MISTAKES": "NO REPITAS LOS ERRORES - Si te ha pasado algo malo en el pasado, tu mente no puede estar en paz hasta que hayas descubierto cómo evitar que te vuelva a pasar lo mismo en el futuro.",
        "REMOVE_WEIGHT": "QUITA EL PESO DEL PASADO - Si recuerdas recuerdos que te hacen sentir avergonzado, culpable, enojado o herido, y esos recuerdos tienen más de un año y medio, tu mente no está en paz. Todavía tienes el peso del pasado.",
        "STRESS_MANAGEMENT": "MANEJO DEL ESTRÉS - Si reconoce estos signos en usted mismo, su salud mental y física puede estar en riesgo. Tu cuerpo produce cortisol cuando detecta que está en peligro y un nivel constantemente elevado de cortisol suprime el sistema inmunológico, quema energía, daña la memoria y las habilidades emocionales.",
        "PROMO1": "100% gratis. No es necesario registrarse, no hay tarifas.",
        "PROMO2": "100 % Privado. No se envían datos a ningún servidor. Todos los datos se guardan en su dispositivo.",
        "PROMO3": "100 % Funciona con tus donaciones y anuncios que se muestran en el sitio.",
        "MADE_FOR_YOU": "Está hecho para ti, sí tú",
        "ARTICLE": "Este sitio web se desarrolló porque existía la necesidad de una aplicación completamente privada y gratuita para escribir su propia historia.",
        "FOOTER_TEXT": "Desarrollado para promover la salud mental y la calidad de vida. ❤️"
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
    return store.getCurrentLanguage();
}

export function setCurrentlySelectedLanguage(lang){
    store.setCurrentLanguage(lang)
}