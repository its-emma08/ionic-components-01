import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confpassword: string = '';
  cellphone: string = '';
  direction: string = '';
  telephone: string = '';


  constructor(
    private navctrl: NavController,
  ) { }

  ngOnInit() {
  }

  registro ( form : NgForm) {

    console.log(form.value);

    console.log('valid: ', form.valid);

    if (form.invalid){
      console.log("Todos los campos son requeridos");
      return;
    }

    
  }
}
