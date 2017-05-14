class Skill {
    pProficiency: number;
    pProficiencyRate: number;
    pValueRate: number;

    constructor() {
        this.pProficiency = 0;
        this.pProficiencyRate = 0.1;
        this.pValueRate = 0.1;
    }

    onUpdate(value: number): number {
        this.pProficiency += this.pProficiency * this.pProficiencyRate;
        return value + (value * this.pValueRate);
    }
}


module.exports = Skill;
