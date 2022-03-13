export class CounterService{
    increActiveToInactive=0;
    increInActToActive=0;

    incrementActiveCounter(){
        this.increActiveToInactive++;
        console.log('InActive to Active Counter:',this.increActiveToInactive);
    }
    incrementInActiveCounter(){ 
        this.increInActToActive++;
        console.log('Active to InActive Counter:',this.increInActToActive);
    }
}