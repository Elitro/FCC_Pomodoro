export class TimerModel {
    initCD: boolean;
    timer: number;
    text: string;
    ghostTimer: number;

    constructor(initCD: boolean, timer: number, text: string){
        this.initCD = initCD;
        this.timer = timer;
        this.text = text;
        this.ghostTimer = timer;
    }
}
