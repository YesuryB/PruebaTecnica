import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonButton, ModalController } from '@ionic/angular/standalone';
import { UsuariosService } from '../services/usuarios.service';
import { usuarios } from '../services/interfaces';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonItem, IonList, IonLabel, IonContent, IonButton],
})
export class HomePage implements OnInit {
  userService = inject(UsuariosService);
  isModalOpen = false;
  public userList: usuarios[] = [];
  constructor(private modalCtrl: ModalController) {}
  ngOnInit(){
    this.getUsuarios();

  }
  getUsuarios(){
    this.userService.getUsuarios().subscribe({next:(data)=>{
      this.userList=data
    }})
  }
  async openModal(id:number) {
    const modal = await this.modalCtrl.create({
      component: UserDetailComponent,
      
      componentProps: {
        id:id,
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    /*if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }*/
  }

}
