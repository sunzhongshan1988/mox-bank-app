import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, AfterViewInit {

  selectTab: any;
  activeMenu = false;

  @ViewChild('tabs') tabs: IonTabs;
  @ViewChild('progress') progrss: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    //this.tabs.select('tab1');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  async setCurrentTab(event) {
    try {
      const button = document.getElementById(`tab-button-${event.tab}`).getBoundingClientRect();
      console.log(button);
      if(this.selectTab === 'tab2') {
        this.progrss.nativeElement.style.left = `${button.left + (button.width-48)/2}px`;
      } else if (this.selectTab === 'tab3') {
        this.progrss.nativeElement.style.left = `${button.left + (button.width-48)/2}px`;
      } else if (this.selectTab === 'tab4') {
        this.progrss.nativeElement.style.left = `${button.left + (button.width-48)/2}px`;
      } else {
        this.progrss.nativeElement.style.left = `${button.left + (button.width-48)/2}px`;
      }
    } catch (error) {
      console.log('Must be wait for the tab element after refresh the page.');
      return setTimeout(() => {
        this.setCurrentTab(event);
      }, 100);
    }

  }

  onActiveMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
