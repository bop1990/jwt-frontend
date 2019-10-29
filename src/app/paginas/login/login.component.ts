import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formularioLogin = this.fb.group({
      email: new FormControl(),
      senha: new FormControl()
    });
  }

  onSubmit(value: string) {
    console.log(value);
    localStorage['token'] = 'xptoh26410x5=50';
    console.log("login-token: "+localStorage['token']);

    this.router.navigate(['/home']);
  }

}
