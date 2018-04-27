import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.services';
import { LoadingController, AlertController, ModalController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	splash = true;

  constructor(private authService: AuthService, private loadCtrl: LoadingController, 
  	private alertCtrl: AlertController, private modalCtrl: ModalController) {}

  	onSignin(form: NgForm){
		const loading = this.loadCtrl.create({
			content: 'Signing you In...'
		});

		loading.present();

		this.authService.signIn(form.value.email, form.value.password)
					.then(data => {
				loading.dismiss();
				const modal = this.modalCtrl.create(MenuPage);
				modal.present();
			})
			.catch(error => {
				loading.dismiss();
				const alert = this.alertCtrl.create({
					title: 'Sign In failed!',
					message: error.message,
					buttons: ['OK']
				});
				alert.present();
			});
	}


    ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
