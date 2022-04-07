import { parseJSON } from "../util";

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