import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  precoGasolina: number;
  precoAlcool: number;
  resultado: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.precoGasolina = parseFloat(navParams.get('precoGasolina'));
    this.precoAlcool = parseFloat(navParams.get('precoAlcool'));
  }

  ionViewDidLoad() {
    if (this.precoAlcool / this.precoGasolina < 0.7) {
      this.resultado = 'álcool';
    } else {
      this.resultado = 'gasolina';
    }
  }

}
