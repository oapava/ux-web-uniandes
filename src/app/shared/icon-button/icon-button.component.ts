import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string = 'images/next.png';
  @Input() type: string = 'button';
  @Input() content: string = '';
  @Input() link: string = '';

  get isButton(): boolean {
    return this.type === 'button';
  }

  get isInfoButton(): boolean {
    return this.type === 'info';
  }

  get hasContent(): boolean {
    return this.content.trim().length > 0;
  }
  
  get hasLink(): boolean {
    return this.link.trim().length > 0;
  }

  get isBackButton(): boolean {
    return this.type === 'back';
  }

  get isNextSmallButton(): boolean {
    return this.type === 'next-small';
  }

  ngOnInit(): void {
  }
}
