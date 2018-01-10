import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'adminUsers' })
export class AdminUserPipe implements PipeTransform {
    transform(allUsers: any[]) {
        return allUsers.filter(user => user.isAdmin);
    }
}

@Pipe({
    name: 'adminUsersImpure',
    pure: false
})
export class AdminUserImpurePipe extends AdminUserPipe { }