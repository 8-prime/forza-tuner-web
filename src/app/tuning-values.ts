export class TuningValues {

    rollBarmin: number;
    rollBarmax: number;
    springsmin: number;
    springsmax: number;
    shocksmin: number;
    shocksmax: number;
    weightDistribution: number;

    constructor(rbf: number, rbb: number,sf: number, sb: number, shf: number, shr: number, wd: number){
        this.rollBarmin = rbf;
        this.rollBarmax = rbb;
        this.springsmin = sf;
        this.springsmax = sb;
        this.shocksmin = shf;
        this.shocksmax = shr;
        this.weightDistribution = wd;
    }
}
