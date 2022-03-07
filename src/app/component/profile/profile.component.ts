import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit(): void {
    const email = localStorage.getItem('userInfo');

    if (email !== null) {
      this.username = email;
    }
  }
}
