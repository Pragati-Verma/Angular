import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
// 'type' User to denote that it is a type definition

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;
  @Input({required: true}) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() // this getting method can be used as a property in template (.html) file
  {
    return "assets/users/" + this.user.avatar;
  }

  onSelectUser()
  {
    this.select.emit(this.user.id);
  }
}
