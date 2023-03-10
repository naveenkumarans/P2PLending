import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Borrower} from "../model/Borrower";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[7-9]\d{9}$/), Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)])
    });
  }

  get password() {
    return this.loginForm.get("password");
  }

  get phoneNo() {
    return this.loginForm.get("phone");
  }

  ngOnInit(): void {
  }

  openSnack(message : string, action : string) {

    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })

  }


  onSubmit() {
    if(this.loginForm.valid){
      //write the logic to communicate with the server

      this.openSnack("Form Submitted Successfully","Success");
      this.loginForm.reset();
    }
    else{
      this.openSnack("Couldn't Submit the form","Failure");
    }

  }

}
