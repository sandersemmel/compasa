  import * as util from '../front/util.js';
  import * as usercontroller from '../front/usercontroller.js';
  import {ELEMENTS} from '../front/enum.js';
  
  function testCode1(){
  
  // TODO REMOVE
  let btn = document.createElement("button");
  btn.innerHTML = "TEKSTI"
  util.appendToElement(ELEMENTS.GENERATED_CONTENT_DIV,btn)

  btn.addEventListener('click', ()=>{

      //for loop
      let titles_arr = [];
      let textarea_arr = [];

      while(usercontroller.isImpactLeft()){

          
          titles_arr.push(usercontroller.getImpactTitleKey());
  
          textarea_arr.push(usercontroller.getImpactTextAreaUniqueID());
          
          usercontroller.incrementImpact();

      }


      console.log('Titles:');
      console.log(titles_arr)

      console.log("Textareas:")
      console.log(textarea_arr);
      //titles_arr.forEach(e=>{console.log(e)})


  })
  }
