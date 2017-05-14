import Entity from "./Entity";

export default class Individual extends Entity {
    isEmployed: boolean;
    pMotivation: number;

    constructor() {
        super();
        this.isEmployed = false;
        this.pMotivation = 0.5;
    }
}
