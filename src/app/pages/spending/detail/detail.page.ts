import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createAnimation, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public barActive = 5;
  public title: string;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController) {
      this.title = '';
    }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('type');
  }

  onClickBar(index: number) {
    this.barActive = index;
    // const animation = createAnimation()
    //   .addElement(document.querySelector('.bar.active'))
    //   .duration(2000)
    //   .beforeStyles({
    //   opacity: 0.2
    // })
    // .afterStyles({
    //   background: 'rgba(0, 255, 0, 0.5)'
    // })
    // .afterClearStyles(['opacity'])
    // .keyframes([
    //   { offset: 0, transform: 'scale(1)' },
    //   { offset: 0.5, transform: 'scale(1.5)' },
    //   { offset: 1, transform: 'scale(1)' }
    // ]);
    // animation.play();
  }

  back() {
    this.navCtrl.back();
  }
}
