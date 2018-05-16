import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
export interface User {
    name: string;
    password: string;
}
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    // animations: [moveIn()],
})
export class LoginComponent {

    loginForm = new FormGroup({
        name: new FormControl(),
        password: new FormControl()
    });
    private users: User[];
    constructor(private fb: FormBuilder, private db: AngularFirestore, private route: Router) {
        this.createForm();
         db.collection<User>('/users').valueChanges().subscribe((u) => {
            this.users = u;
            console.log(u);
        });
        const d = this.db.collection('users', ref => ref.where('name', '==', '0'));
        console.log(d);


    }

    createForm() {
        this.loginForm = this.fb.group({
            name: ['', Validators.required ],
            password: ['', Validators.required ],
        });
    }
    login(form: FormGroup) {
        const name = form.value.name;
        const password = form.value.password;
        console.log(name, password);
       const exist = this.users.filter(e => e.name === name && e.password === password);
       if (exist.length > 0 ) {
            this.route.navigate(['quiz']);
       } else {
           console.log('you are not authenticated');
       }

    }


}
