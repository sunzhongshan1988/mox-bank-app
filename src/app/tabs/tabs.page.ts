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
  }
  ngAfterViewInit() {
  }

  async setCurrentTab(event) {
  this.selectTab = event.tab;
    try {
      const button = document.getElementById(`tab-button-${event.tab}`).getBoundingClientRect();
      this.progrss.nativeElement.style.left = `${button.left + (button.width-48)/2}px`;
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
