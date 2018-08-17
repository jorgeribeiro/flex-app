import { DetalhesPage } from './../detalhes/detalhes';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  goToDetalhes(precoGasolina, precoAlcool) {
    if (precoGasolina == null || precoAlcool == null
      || precoGasolina.length == 0 || precoAlcool.length == 0) {
      this.presentToast('Preencha ambos os campos de preço.');
    } else {
      this.navCtrl.push(DetalhesPage, {
        precoGasolina: precoGasolina,
        precoAlcool: precoAlcool
      });
    }
  }

  presentToast(mensagem) {
    const toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000
    });
    toast.present();
  }

}
