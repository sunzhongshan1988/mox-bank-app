import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, createAnimation, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @ViewChild('index3') bar3: ElementRef;
  @ViewChild('index4') bar4: ElementRef;
  @ViewChild('index5') bar5: ElementRef;
  public barActive = 5;
  public title: string;
  constructor(
    private animationCtrl: AnimationController,
    private route: ActivatedRoute,
    private navCtrl: NavController) {
      this.title = '';
    }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('type');
    setTimeout(() => {
      this.bar3.nativeElement.style.height = '100%';
      this.bar4.nativeElement.style.height = '50%';
      this.bar5.nativeElement.style.height = '70%';
    }, 500);  
  }

  onClickBar(index: number) {
    this.barActive = index;
  }

  back() {
    this.navCtrl.back();
  }
}
