import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterstring:string,propName:string){
    if(value.length==0 || filterstring===''){
      return value;
    }
    const ResArr=[];
    for(const itm of value){
      if(itm[propName] == filterstring){
        ResArr.push(itm);
      }
    }
    return ResArr;
  }

}
