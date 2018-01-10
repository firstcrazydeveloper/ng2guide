import { Component } from '@angular/core';
import { UserModel } from '../../../../shared/models/user.model';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styles: ['#flyers, #all {font-style: italic}']
})
export class UserComponent {
    users: UserModel[] = [];
    canAdmin = true;
    mutate = true;
    title = 'User List (pure pipe)';

    constructor() { this.reset(); }

    addUser(name: string) {
        name = name.trim();
        if (!name) { return; }
        let user = new UserModel();
        user.firstName = name;
        user.isAdmin = this.canAdmin;

        if (this.mutate) {
            // Pure pipe won't update display because heroes array reference is unchanged
            // Impure pipe will display
            this.users.push(user);
        } else {
            // Pipe updates display because heroes array is a new object
            this.users = this.users.concat(user);
        }
    }

    reset() { this.users = []; }
}
