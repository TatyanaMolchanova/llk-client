import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  aSub!: Subscription;

  constructor(private auth: AuthService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
    // console.log('REGISTER this.form.value', this.form.value);
    this.form.disable()
    this.aSub = this.auth.register(this.form.value).subscribe(
      () => {
        // this.router.navigate(['login'], {
        this.router.navigate(['admin/login'], {
          queryParams: {
            registered: true
          }
        })
      },
      error => {
        this.snackBar.open(error.error.message, '', {
          duration: 4000,
        });
        // console.warn(error)
        this.form.enable()
      }
    )
  }
}
