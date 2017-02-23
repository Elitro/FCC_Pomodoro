export class TimerModel {
    initCD: boolean;
    timer: number;

    constructor(initCD: boolean, timer: number){
        this.initCD = initCD;
        this.timer = timer;
    }
}
