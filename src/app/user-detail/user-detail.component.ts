import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { usuarios } from '../services/interfaces';
import { IonicModule, ModalController } from '@ionic/angular'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  imports: [IonicModule]
})
export class UserDetailComponent implements OnInit {

  id!: number;
  public usuario: usuarios[] = [];
  constructor(private router: ActivatedRoute, private modalCtrl: ModalController) { }

  //= Number(this.router.snapshot.paramMap.get('id'));

  userService = inject(UsuariosService)

  ngOnInit() {
    console.log("Esto tiene id", this.id)
    this.getUser();
  }
  getUser() {
    this.userService.getUsuario(this.id).subscribe({
      next: (data) => {
        this.usuario = data;
        console.log("Esto tiene data", this.usuario[0])
      }
    });
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
