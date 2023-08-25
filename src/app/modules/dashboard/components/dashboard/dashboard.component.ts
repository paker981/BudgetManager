import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  protected isLoading: boolean = true;

  constructor(){
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
}


