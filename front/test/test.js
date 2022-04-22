import * as util from '../util.js';
import * as enume from '../enum.js';
import * as htmlgenerator from '../../front/htmlgenerator.js';
import jsdomm from 'jsdom';
import {STEPS} from '../../front/enum.js';

describe("HTML ELEMENTS TEST",function(){


    it('Should exist in domain', function () {
      //selectLanguageBasedOnHref("ee");
      let language = util.getFrom("https://compasa.me/",enume.domains);
      console.log(language);
      //console.log("yo");
      });

    it('Does not exist in domain', function () {
        //selectLanguageBasedOnHref("ee");
        let language = util.getFrom("https://kuke.me/",enume.domains);
        console.log(language);
        //console.log("yo");
      });


      it('Should return 7 elements', function () {
        let obj = new jsdomm.JSDOM('...');
        let result = htmlgenerator.getTitlesHTML(obj.window.document)
        assert("fuck you, amount doesn't match", 7,result.length)
      });


     it('SanityTests', ()=>{
        it("Should persist, no page and shouldbe is populated", function(){
          let state ={page : "", shouldBe: STEPS.STEP1}
          let result = util.shouldPersist(state);
          assert("Should be true, bro",true,result);
          
        })

        it("Should not persist, page and shouldbe are same", function(){
          let state = {page: STEPS.STEP1, shouldBe: STEPS.STEP1};
          let result = util.shouldPersist(state);
          assert("Should be false, broski", false, result);
        })


     }) 

     it("Should return matching data", function(){
      let data = util.getTitleandTextAreaData("fields1");

      let title = enume.PAGES.TITLES.inputs[0];
      //console.log(data.title);

      assert("BRUH", title,data.title);
      //data.title === title

    })

})

function assert (msg,expected,actual){
  if(expected === actual){
    return;
  }
  throw `${msg}`
}