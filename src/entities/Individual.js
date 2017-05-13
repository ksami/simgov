// @flow
const Entity = require("./Entity");
const Skill = require("../skills").Skill;

class Individual extends Entity {
    isEmployed: boolean;
    pMotivation: number;
    pFullness: number;
    skill: Skill;

    constructor() {
        super();
        this.isEmployed = false;
        this.pMotivation = 0.5;
        this.pFullness = 0.5;
        this.skill = new Skill();
    }

    onUpdate() {
        this.skill.onUpdate(this.wealth);
    }
}

module.exports = Individual;
