import { parseJSON } from "../util";

export class userobject {


    constructor({page,shouldBe}){
        this.state = {page: page, shouldBe: shouldBe}
        //t
    }

    static deserialize(serializedString){
        let json = parseJSON(serializedString);
        return new userobject(json);
    }
}