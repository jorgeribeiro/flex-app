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
  rendimento: number;
  resultado: string;
  
  gastoAlcool: number;
  gastoGasolina: number;
  economia: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.precoGasolina = parseFloat(navParams.get('precoGasolina'));
    this.precoAlcool = parseFloat(navParams.get('precoAlcool'));
    this.rendimento = parseFloat(navParams.get('rendimento')) / 100;
  }

  ionViewDidLoad() {
    console.log(this.precoAlcool / this.precoGasolina);
    if (this.precoAlcool / this.precoGasolina < this.rendimento) {
      this.resultado = 'ÁLCOOL';
    } else {
      this.resultado = 'GASOLINA';
    }

    this.gastoAlcool = this.precoAlcool * 100.0;
    this.gastoGasolina = this.precoGasolina * 100.0;
  }

}
