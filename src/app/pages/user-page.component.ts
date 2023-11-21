import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { User } from '../model/user';

@Component ({

  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})

export class UserPageComponent implements OnInit {

  users!: Observable<User[]>
  constructor(private service: UserService) {}

  ngOnInit() {
    this.users = this.service.getUsers()
  }

  editar(user: User) {
    const editado = user;
    editado.name = "new name"
    this.service.putUser(user.id, editado);
  }
}
