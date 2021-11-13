import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';
@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(listUsers: User[] , searchValue: string): User[] {
    if(!listUsers || !searchValue){
      return listUsers;
    }

    return listUsers.filter(user=>
      user.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      user.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      user.role.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      user.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
