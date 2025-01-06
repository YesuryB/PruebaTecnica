import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem, IonInput, IonText} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonText, CommonModule, FormsModule, RouterModule]
})
export class LoginPage implements OnInit {

  user:string="";
  password:string="";
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulario válido:', form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
