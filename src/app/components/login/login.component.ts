import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formularioLogin = this.fb.group({
      email: new FormControl(),
      senha: new FormControl()
    });
  }

  onSubmit(value: string) {
    console.log(value);
  }

}
