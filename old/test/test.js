import * as htmlgenerator from '../../front/htmlgenerator.js';
import jsdomm from 'jsdom';
import * as util from '../../front/util.js'
import {STEPS} from '../../front/enum.js';

describe("HTML ELEMENTS TEST",function(){
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

})

function assert (msg,expected,actual){
  if(expected === actual){
    return;
  }
  throw `${msg}`
}