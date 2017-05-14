class Entity {
    wealth: number;
    pSatisfaction: number;
    goals: {
        wealth: number,
        pSatisfaction: number
    };

    constructor() {
        this.wealth = 0;
        this.pSatisfaction = 0;
        this.goals = {
            wealth: 10000,
            pSatisfaction: 0.5
        };
    }
}

module.exports = Entity;
