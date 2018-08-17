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

  goToDetalhes(precoGasolina, precoAlcool, rendimento) {
    if (precoGasolina == null || precoAlcool == null || rendimento == null
      || precoGasolina.length == 0 || precoAlcool.length == 0 || rendimento.length == 0) {
      this.presentToast('Preencha todos os campos.');
    } else {
      this.navCtrl.push(DetalhesPage, {
        precoGasolina: precoGasolina,
        precoAlcool: precoAlcool,
        rendimento: rendimento
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
