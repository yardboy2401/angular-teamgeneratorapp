import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Team Generator';
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName)
  }

  addMember() {
    if(!this.newMemberName) {
      this.errorMessage = "Name can't be empty!";
      return;
    }
    this.members.push(this.newMemberName)
    this.newMemberName = '';
    this.errorMessage = '';
  }
}
