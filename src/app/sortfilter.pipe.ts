import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';
@Pipe({
  name: 'sortfilter'
})
export class SortfilterPipe implements PipeTransform {

  transform(listUsers: User[], args: any[]): User[] {
    const sortfield = args[0];
    const sortdierction = args[1];

    let multiplier = 1;

    if (sortdierction === "desc"){
      multiplier = -1;
    }

    listUsers.sort((a: any, b: any )=>{
      if(a[sortfield] < b[sortfield]){

        return -1* multiplier;

      }else if (a[sortfield]> b[sortfield]){

        return 1* multiplier;
      }
      else{
        return 0;
      }
    });
    return listUsers;
  }

}
