import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
