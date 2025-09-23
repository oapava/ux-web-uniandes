import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [IconButtonComponent, RouterLink],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent implements OnInit {
  @Input() text: string = 'Button';
  @Input() url: string = '/Url';
  @Input() typeIcon: string = 'next';
  public icon: string = '';

  ngOnInit(){
    if(this.typeIcon === 'next'){
      this.icon = 'images/next.png';
    }else if(this.typeIcon === 'plus'){
      this.icon = 'images/plus.png';
    }
  }
}
