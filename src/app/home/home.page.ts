import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        public modalCtrl: ModalController
    ) {
    }

    public async openModal() {
        const modal = await this.modalCtrl.create({
            component: ModalPage,
            cssClass: 'my-modal'
        });

        return await modal.present();

    }


}
