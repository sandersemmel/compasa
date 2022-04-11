import { parseJSON } from "../util.js";

export class stateobject {

    constructor({page,shouldBe}){
        this.page= page;
        this.shouldBe=shouldBe;
    }

    static deserialize(serializedString){
        let json = parseJSON(serializedString);
        return new stateobject(json);
    }
}